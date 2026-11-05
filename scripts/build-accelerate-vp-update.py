#!/usr/bin/env python3
"""Build the two-page Accelerate VP update PDF for one show, outside Git.

    python3 scripts/build-accelerate-vp-update.py <show.json> <output.pdf>

Requires reportlab (python3 -m pip install "reportlab==4.0.9" on Python 3.9). The JSON holds per-account rows read
from Smartsheet and Salesforce; see the lumenis-accelerate-vp-update skill for
the format. Never commit the JSON or the PDF: they contain practice names and
pipeline values.
"""
import json
import sys
from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

BLACK, GREY, MID, LIGHT, FAINT = (HexColor(c) for c in ('#000000', '#575757', '#a6a6a6', '#e6e6e6', '#f2f2f2'))
W, H = letter
M = 40  # page margin
RATES = {'1': .068, '2': .091, '3': .15, '4': .2208, '5': .619, '6': .934}
SANS, BOLD = 'Helvetica', 'Helvetica-Bold'
# One secondary color per page, from the Lumenis Corporate palette: triLift rose gold for
# Aesthetics, OptiLIGHT blue for Vision. The show total stays Lumenis black.
ACCENTS = {'Aesthetics': '#fabcad', 'Vision': '#578fff'}


def money(v):
    if v >= 1e6:
        return f'${v / 1e6:.2f}M'
    if v >= 1e3:
        return f'${v / 1e3:.0f}K'
    return f'${v:,.0f}'


def is_open(a):
    return a.get('status') == 'open' and str(a.get('stage', ''))[:1] in RATES


def summarize(div):
    """Every figure on a page comes from the account rows, never typed in."""
    accts = div['accounts']
    signed = [a for a in accts if a.get('signed_up_people', 0) > 0]
    rep_only = [a for a in accts if a.get('signed_up_people', 0) == 0]

    def block(rows, people_key):
        op = [a for a in rows if is_open(a)]
        won = [a for a in rows if a.get('status') == 'won']
        return {
            'people': sum(a.get(people_key, 0) for a in rows),
            'accounts': len(rows),
            'open': len(op),
            'pipeline': sum(a['amount'] for a in op),
            'ev': sum(a['amount'] * RATES[str(a['stage'])[:1]] for a in op),
            'won': len(won),
            'won_amount': sum(a.get('amount', 0) for a in won),
        }

    s = block(signed, 'signed_up_people')
    # People the rep listed who have not filled in a form, at any account.
    r = block(rep_only, 'not_signed_up_people')
    r['people'] = sum(a.get('not_signed_up_people', 0) for a in accts)
    t = {k: s[k] + r[k] for k in s}
    mix = {
        'Customers (deal won)': sum(1 for a in accts if a.get('status') == 'won'),
        'Prospects with an open deal': sum(1 for a in accts if is_open(a)),
        'Prospects, no open deal': sum(1 for a in accts if a.get('status') != 'won' and not is_open(a)),
    }
    products = {}
    for a in accts:
        if is_open(a):
            for p in a.get('products', []):
                d = products.setdefault(p, [0, 0])
                d[0] += 1
                d[1] += a['amount']
    gaps = sorted((a for a in rep_only if is_open(a)), key=lambda a: -a['amount'])[:3]
    return {'signed': s, 'rep': r, 'total': t, 'mix': mix,
            'products': sorted(products.items(), key=lambda kv: (-kv[1][0], -kv[1][1])), 'gaps': gaps}


def bottom_line(div, x):
    t, s, r = x['total'], x['signed'], x['rep']
    lines = [f"{s['people']} of {s['people'] + r['people']} invited prospects have signed themselves up, from "
             f"{s['accounts']} accounts. The other {r['people']} were registered by their rep only."]
    if t['pipeline']:
        share = r['pipeline'] / t['pipeline']
        lines.append(f"{money(r['pipeline'])} of {money(t['pipeline'])} open pipeline ({share:.0%}) sits with accounts "
                     f"where no prospect has signed themselves up; only the rep has registered them.")
    if x['gaps']:
        g = x['gaps'][0]
        lines.append(f"Biggest gap: {g['name']} ({money(g['amount'])}, {g.get('rep', 'rep unknown')}), rep registered only.")
    return lines + div.get('notes', [])


def wrap(c, text, font, size, width):
    words, out, line = text.split(), [], ''
    for w in words:
        trial = (line + ' ' + w).strip()
        if c.stringWidth(trial, font, size) <= width:
            line = trial
        else:
            out.append(line)
            line = w
    return out + ([line] if line else [])


def tile(c, x, y, w, h, label, value, sub, accent):
    c.setFillColor(FAINT)
    c.rect(x, y, w, h, stroke=0, fill=1)
    c.setFillColor(accent)
    c.rect(x, y, 4, h, stroke=0, fill=1)
    c.setFillColor(GREY)
    c.setFont(SANS, 7.5)
    c.drawString(x + 10, y + h - 16, label.upper())
    c.setFillColor(BLACK)
    c.setFont(SANS, 22)
    c.drawString(x + 10, y + 26, value)
    c.setFillColor(GREY)
    c.setFont(SANS, 8)
    c.drawString(x + 10, y + 9, sub)


def heading(c, x, y, text):
    c.setFillColor(BLACK)
    c.setFont(BOLD, 8.5)
    c.drawString(x, y, text.upper())
    c.setStrokeColor(BLACK)
    c.setLineWidth(.6)
    c.line(x, y - 4, W - M, y - 4) if x == M else None


def bar_split(c, x, y, w, h, a, b, la, lb, accent):
    total = a + b or 1
    wa = w * a / total
    c.setFillColor(accent)
    c.rect(x, y, wa, h, stroke=0, fill=1)
    c.setFillColor(LIGHT)
    c.rect(x + wa, y, w - wa, h, stroke=0, fill=1)
    c.setFont(SANS, 8)
    c.setFillColor(BLACK)
    c.drawString(x, y - 12, f'{la}: {money(a)}')
    c.setFillColor(GREY)
    c.drawRightString(x + w, y - 12, f'{lb}: {money(b)}')


def table(c, x, y, cols, rows, widths, bold_last=True):
    c.setFont(SANS, 7.5)
    c.setFillColor(GREY)
    cx = x
    for i, col in enumerate(cols):
        (c.drawString if i == 0 else c.drawRightString)(cx if i == 0 else cx + widths[i], y, col.upper())
        cx += widths[i]
    y -= 6
    c.setStrokeColor(BLACK)
    c.setLineWidth(.6)
    c.line(x, y, x + sum(widths), y)
    for n, row in enumerate(rows):
        y -= 15
        last = bold_last and n == len(rows) - 1
        if last:
            c.setLineWidth(.4)
            c.line(x, y + 11, x + sum(widths), y + 11)
        c.setFont(BOLD if last else SANS, 9)
        c.setFillColor(BLACK)
        cx = x
        for i, val in enumerate(row):
            (c.drawString if i == 0 else c.drawRightString)(cx if i == 0 else cx + widths[i], y, str(val))
            cx += widths[i]
    return y


def hbars(c, x, y, w, items, value_fmt, accent, row=15, label_w=118):
    top = max((v for _, v, _ in items), default=1) or 1
    for label, v, note in items:
        c.setFont(SANS, 8.5)
        c.setFillColor(BLACK)
        c.drawString(x, y, label)
        bw = (w - label_w - 70) * v / top
        c.setFillColor(accent if v else LIGHT)
        c.rect(x + label_w, y - 2, max(bw, 1.5), 9, stroke=0, fill=1)
        c.setFillColor(GREY)
        c.setFont(SANS, 8)
        c.drawString(x + label_w + bw + 5, y, value_fmt(v) + (f'  {note}' if note else ''))
        y -= row
    return y


def page(c, show, div, x, totals, pageno, pages):
    # Header
    accent = HexColor(div.get('accent') or ACCENTS.get(div['division'], '#a6a6a6'))
    c.setFillColor(accent)
    c.rect(0, H - 14, W, 14, stroke=0, fill=1)
    c.setFillColor(BLACK)
    c.setFont(BOLD, 7.5)
    c.drawString(M, H - 10, div['division'].upper())
    c.setFont(SANS, 24)
    c.drawString(M, H - M - 22, show['event'].upper())
    c.setFont(SANS, 11)
    c.setFillColor(GREY)
    vp = f" · VP: {div['vp']}" if div.get('vp') else ''
    c.drawString(M, H - M - 40, f"{div['division']}{vp} · Registration and pipeline update")
    c.setFont(SANS, 7.5)
    c.drawRightString(W - M, H - M - 40, f"Data as of {show['as_of']} · Page {pageno} of {pages}")
    y = H - M - 62

    # Bottom line
    heading(c, M, y, 'Bottom line')
    y -= 18
    for line in bottom_line(div, x):
        for i, part in enumerate(wrap(c, line, SANS, 10, W - 2 * M - 12)):
            c.setFont(SANS, 10)
            c.setFillColor(BLACK)
            if i == 0:
                c.circle(M + 3, y + 3.2, 1.6, stroke=0, fill=1)
            c.drawString(M + 12, y, part)
            y -= 13
        y -= 2

    # KPI tiles
    t, s, r = x['total'], x['signed'], x['rep']
    y -= 72
    tw = (W - 2 * M - 3 * 10) / 4
    tile(c, M, y, tw, 66, 'Prospects signed up', f"{s['people']} of {s['people'] + r['people']}",
         f"{r['people']} registered by rep only", accent)
    tile(c, M + (tw + 10), y, tw, 66, 'Accounts signed up', f"{s['accounts']} of {t['accounts']}",
         f"{r['accounts']} registered by rep only", accent)
    tile(c, M + 2 * (tw + 10), y, tw, 66, 'Open pipeline', money(t['pipeline']), f"Expected value {money(t['ev'])}", accent)
    tile(c, M + 3 * (tw + 10), y, tw, 66, 'Already won', f"{t['won']} deal" + ('s' if t['won'] != 1 else ''),
         money(t['won_amount']), accent)

    # Pipeline split bar
    y -= 26
    heading(c, M, y, 'Open pipeline: prospect signed up vs rep registered only')
    y -= 22
    bar_split(c, M, y, W - 2 * M, 14, s['pipeline'], r['pipeline'], 'Prospect signed up', 'Rep registered only', accent)

    # Registration table
    y -= 36
    heading(c, M, y, 'Who registered them')
    y -= 16
    widths = [148, 52, 58, 62, 74, 78, 60]
    rows = [
        ['Prospect signed themselves up', s['people'], s['accounts'], s['open'], money(s['pipeline']), money(s['ev']), s['won']],
        ['Rep registered only', r['people'], r['accounts'], r['open'], money(r['pipeline']), money(r['ev']), r['won']],
        ['Total', t['people'], t['accounts'], t['open'], money(t['pipeline']), money(t['ev']), t['won']],
    ]
    y = table(c, M, y, ['', 'People', 'Accounts', 'Open deals', 'Pipeline', 'Exp. value', 'Won'], rows, widths)

    # Mix and products, side by side
    y -= 30
    half = (W - 2 * M - 20) / 2
    heading(c, M, y, "Who's coming (accounts)")
    heading(c, M + half + 20, y, 'Products in open deals')
    c.setStrokeColor(BLACK)
    c.line(M + half + 20, y - 4, W - M, y - 4)
    y -= 20
    y1 = hbars(c, M, y, half, [(k, v, '') for k, v in x['mix'].items()], lambda v: str(v), accent, label_w=128)
    prods = x['products'][:7]
    y2 = hbars(c, M + half + 20, y, half, [(p, d[0], money(d[1])) for p, d in prods],
               lambda v: f'{v} deal' + ('s' if v != 1 else ''), accent, label_w=78)
    if not prods:
        c.setFont(SANS, 8.5)
        c.setFillColor(GREY)
        c.drawString(M + half + 20, y, 'No open deals')
    y = min(y1, y2)
    c.setFont(SANS, 7)
    c.setFillColor(GREY)
    c.drawString(M + half + 20, y + 4, 'A deal naming two products counts under each.')

    # Biggest gaps
    if x['gaps']:
        y -= 16
        heading(c, M, y, 'Largest open deals, rep registered only (no prospect sign-up)')
        y -= 16
        for g in x['gaps']:
            c.setFont(SANS, 9)
            c.setFillColor(BLACK)
            c.drawString(M, y, g['name'])
            c.setFillColor(GREY)
            c.drawString(M + 210, y, g.get('rep', ''))
            c.drawString(M + 330, y, f"Stage {str(g['stage'])[:1]}")
            c.setFillColor(BLACK)
            c.drawRightString(W - M, y, money(g['amount']))
            y -= 13

    # Show total band (both divisions)
    bh = 66
    c.setFillColor(BLACK)
    c.rect(M, M, W - 2 * M, bh, stroke=0, fill=1)
    c.setFillColor(white)
    c.setFont(BOLD, 8)
    c.drawString(M + 12, M + bh - 16, f"{show['event'].upper()} TOTAL · BOTH DIVISIONS")
    cols = [
        ('Accounts signed up', str(totals['signed']['accounts'])),
        ('Accounts rep only', str(totals['rep']['accounts'])),
        ('Prospects signed up', str(totals['signed']['people'])),
        ('Prospects rep only', str(totals['rep']['people'])),
        ('Open pipeline', money(totals['total']['pipeline'])),
        ('Expected value', money(totals['total']['ev'])),
    ]
    cw = (W - 2 * M - 24) / len(cols)
    for i, (label, val) in enumerate(cols):
        cx = M + 12 + i * cw
        c.setFont(SANS, 6.5)
        c.drawString(cx, M + 32, label.upper())
        c.setFont(SANS, 16)
        c.drawString(cx, M + 12, val)
    c.setFillColor(GREY)
    c.setFont(SANS, 6.5)
    c.drawString(M, M - 12, 'Prospect signed up = filled in the flight or non-flight form. Rep registered only = on the approval sheet, no form yet. '
                 'Pipeline: open deals, stages 1-6.')


def main(src, out):
    show = json.load(open(src))
    xs = [summarize(d) for d in show['divisions']]
    totals = {k: {m: sum(x[k][m] for x in xs) for m in xs[0][k]} for k in ('signed', 'rep', 'total')}
    c = canvas.Canvas(out, pagesize=letter)
    c.setTitle(f"{show['event']} VP update")
    for i, (d, x) in enumerate(zip(show['divisions'], xs), 1):
        page(c, show, d, x, totals, i, len(xs))
        c.showPage()
    c.save()
    for d, x in zip(show['divisions'], xs):
        print(d['division'], {k: round(v) for k, v in x['total'].items()})
    print('Show total', {k: round(v) for k, v in totals['total'].items()})


if __name__ == '__main__':
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2])
