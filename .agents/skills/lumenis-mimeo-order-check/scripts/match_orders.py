"""Match Mimeo "Final" kit lists against a Mimeo recipient export.

Usage:
  python -I match_orders.py --mimeo recipients.tsv --out report.xlsx <folder-or-xlsx> [...]
         [--tracking tracking.tsv]

Inputs
  <folder-or-xlsx>  A dated "Mimeo Kits M.D.YYYY" folder (the Final file inside is picked
                    automatically) or a specific .xlsx. The list date comes from the folder name,
                    or from the file name when it contains M_D_YYYY.
  --mimeo           TSV with header: lastName firstName orderId submitted status
  --tracking        optional TSV with header: salesOrder lastName tracking fedexStatus delivered proofFile

Output: workbook with "Not Found" and "Found" tabs, plus a printed summary.
"""
import argparse, csv, datetime as dt, glob, os, re, sys
from collections import Counter, OrderedDict

import openpyxl
from openpyxl.styles import Alignment, Font, PatternFill

TITLES = r"\b(o\.?d\.?|m\.?d\.?|dr\.?|d\.?o\.?|ph\.?d\.?)(?=\W|$)"


def norm(s):
    return re.sub(r"[^a-z]", "", str(s or "").lower())


def norm_last(s):
    return norm(re.sub(TITLES, "", str(s or ""), flags=re.I))


def parse_date(s):
    if isinstance(s, (dt.date, dt.datetime)):
        return s if isinstance(s, dt.date) and not isinstance(s, dt.datetime) else s.date()
    m, d, y = map(int, str(s).strip().split("/"))
    return dt.date(y, m, d)


def date_from_name(path):
    for part in reversed(re.split(r"[\\/]", path)):
        m = re.search(r"(\d{1,2})[._](\d{1,2})[._](\d{4})", part)
        if m:
            return dt.date(int(m.group(3)), int(m.group(1)), int(m.group(2)))
    return None


def pick_final(folder):
    files = [f for f in glob.glob(os.path.join(folder, "*.xlsx")) if not os.path.basename(f).startswith("~$")]
    for pat in (r"_Final_Deduped\.xlsx$", r"_Final\.xlsx$", r"Combined.*\.xlsx$"):
        hits = [f for f in files if re.search(pat, f, re.I)]
        if hits:
            return sorted(hits)[-1]
    return None


def read_list(path):
    wb = openpyxl.load_workbook(path, read_only=True, data_only=True)
    ws = wb["Mimeo Final"] if "Mimeo Final" in wb.sheetnames else wb.worksheets[0]
    rows = list(ws.iter_rows(values_only=True))
    hdr = [str(h).strip() if h is not None else "" for h in rows[0]]
    if "lastName" not in hdr:
        sys.exit(f"{path}: no 'lastName' column on sheet '{ws.title}' - is this a Mimeo Final list?")
    return [dict(zip(hdr, r)) for r in rows[1:] if any(r)]


def name_tokens(first, last):
    """Significant name words, ignoring titles (Dr., OD, MD) and initials.
    'Dr.' + 'Jane Doe' and 'Doe' + 'Dr. Jane' both become {'jane', 'doe'}."""
    text = re.sub(TITLES, " ", f"{first or ''} {last or ''}", flags=re.I)
    return {t for t in (norm(w) for w in re.split(r"[\s,/\-]+", text)) if len(t) > 1}


def same_person(a, b):
    """True when one name's words are all contained in the other's.
    A one-word name must match exactly, so 'Doe' alone never matches 'John Doe'."""
    if not a or not b:
        return False
    short, long_ = (a, b) if len(a) <= len(b) else (b, a)
    if len(short) == 1:
        return short == long_
    return short <= long_


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("inputs", nargs="+")
    ap.add_argument("--mimeo", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--tracking")
    ap.add_argument("--grace-days", type=int, default=3)
    a = ap.parse_args()

    mimeo = list(csv.DictReader(open(a.mimeo, encoding="utf-8-sig"), delimiter="\t"))
    for x in mimeo:
        x["_tok"], x["_d"] = name_tokens(x["firstName"], x["lastName"]), parse_date(x["submitted"])

    track = {}
    if a.tracking:
        for t in csv.DictReader(open(a.tracking, encoding="utf-8-sig"), delimiter="\t"):
            track[(str(t["salesOrder"]).strip(), norm_last(t["lastName"]))] = t

    today = dt.date.today()
    custs = OrderedDict()
    for inp in a.inputs:
        path = pick_final(inp) if os.path.isdir(inp) else inp
        if not path:
            print(f"!! no Final list found in {inp}"); continue
        ld = date_from_name(path)
        if not ld:
            sys.exit(f"Can't tell the list date for {path}; put it in the folder name like 'Mimeo Kits 10.6.2026'.")
        print(f"list {ld:%m/%d/%Y}: {path}")
        for d in read_list(path):
            ln, fn = norm_last(d.get("lastName")), norm(d.get("firstName"))
            key = (ld, str(d.get("salesOrder") or "").strip(), fn + ln)
            c = custs.setdefault(key, {"list": ld, "so": key[1], "first": d.get("firstName") or "", "last": d.get("lastName") or "",
                                       "company": [], "kits": [], "email": d.get("email") or "", "ln": ln,
                                       "tok": name_tokens(d.get("firstName"), d.get("lastName")),
                                       "addr": ", ".join(str(v) for v in (d.get("street"), d.get("city"),
                                                f"{d.get('stateOrProvince') or ''} {d.get('postalCode') or ''}".strip()) if v)})
            for k, v in (("company", d.get("company")), ("kits", d.get("referenceData"))):
                if v and str(v) not in c[k]:
                    c[k].append(str(v))

    found, missing = [], []
    for c in custs.values():
        hits = [x for x in mimeo if x["_d"] >= c["list"] - dt.timedelta(days=a.grace_days)
                and same_person(c["tok"], x["_tok"])]
        hits.sort(key=lambda x: x["_d"])
        (found if hits else missing).append((c, hits))

    wb = openpyxl.Workbook()
    f, hf = Font(name="Arial", size=10), Font(name="Arial", size=10, bold=True, color="FFFFFF")
    blue, orange = PatternFill("solid", fgColor="1F4E78"), PatternFill("solid", fgColor="C65911")

    def sheet(ws, hdr, rows, widths, orange_from=None):
        ws.append(hdr)
        for r in rows:
            ws.append(r)
        for row in ws.iter_rows():
            for cell in row:
                cell.font, cell.alignment = f, Alignment(vertical="top", wrap_text=True)
        for i, cell in enumerate(ws[1]):
            cell.font, cell.fill = hf, (orange if orange_from is not None and i >= orange_from else blue)
        for i, w in enumerate(widths):
            ws.column_dimensions[openpyxl.utils.get_column_letter(i + 1)].width = w
        ws.freeze_panes, ws.auto_filter.ref = "A2", ws.dimensions

    ws = wb.active; ws.title = "Not Found"
    sheet(ws, ["List Date", "Days Since List", "Sales Order #", "Contact", "Company", "Kit(s)", "Ship To", "Email",
               "Mimeo rep: Placed? (Y/N)", "Mimeo rep: Mimeo Order # / Account", "Mimeo rep: Notes"],
          [[c["list"].strftime("%m/%d/%Y"), (today - c["list"]).days, c["so"], f"{c['first']} {c['last']}".strip(),
            " / ".join(c["company"]), ", ".join(c["kits"]), c["addr"], c["email"], "", "", ""] for c, _ in missing],
          [11, 9, 13, 24, 30, 34, 38, 30, 14, 26, 30], orange_from=8)

    frows = []
    for c, hits in found:
        h = hits[0]
        t = track.get((c["so"], c["ln"]), {})
        frows.append([c["list"].strftime("%m/%d/%Y"), c["so"], f"{c['first']} {c['last']}".strip(), " / ".join(c["company"]),
                      ", ".join(c["kits"]), h["orderId"], h["submitted"], h["status"],
                      t.get("tracking", ""), t.get("fedexStatus", ""), t.get("delivered", ""), t.get("proofFile", ""),
                      "; ".join(x["orderId"] for x in hits[1:])])
    sheet(wb.create_sheet("Found"), ["List Date", "Sales Order #", "Contact", "Company", "Kit(s)", "Mimeo Order #",
                                     "Submitted", "Mimeo Status", "FedEx Tracking #", "FedEx Status", "Delivered",
                                     "Proof File", "Other Matching Orders"],
          frows, [11, 13, 24, 28, 30, 21, 11, 12, 16, 22, 18, 30, 24])
    wb.save(a.out)

    print(f"\nSaved {a.out}")
    print(f"{'List':<12}{'Customers':>10}{'Found':>8}{'Delivered':>11}{'Not found':>11}")
    by = Counter(c["list"] for c in custs.values())
    for ld in sorted(by):
        fd = [h for c, h in found if c["list"] == ld]
        print(f"{ld:%m/%d/%Y}  {by[ld]:>10}{len(fd):>8}{sum(h[0]['status'] == 'Delivered' for h in fd):>11}"
              f"{sum(1 for c, _ in missing if c['list'] == ld):>11}")


if __name__ == "__main__":
    main()
