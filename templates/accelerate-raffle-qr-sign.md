# Accelerate raffle QR sign

Owner: Kaelyn (event logistics).
Status: draft procedure, written 2026-10-30 from the approved sign. Review required.

Use this to make the raffle waiver sign for an upcoming event. The QR code is the only thing that ever changes. The link comes from that event's new raffle waiver form: [Accelerate raffle waiver clone](accelerate-raffle-waiver-clone.md) runs this procedure as soon as the form passes its read-back.

Don't redesign the sign, rebuild it in another tool, or change the copy. Every version is made by editing the master PDF directly, so the fonts, spacing and sizes can't drift.

## Inputs

- **The master PDF:** `Accelerate - Raffle Waiver QR Sign - Current Customers.pdf`, in the `Lumenis Vision US MKT - Graphic Templates` OneDrive folder with the other master graphics. This is the current customers version of the sign, headed "For current customers", and it replaces the earlier `Accelerate - Raffle Waiver QR Sign.pdf`. It stays outside Git because finished artwork doesn't belong in this repository and its QR opens a live form. Always start from the master, never from a previous event's sign.
- **The new raffle waiver link:** the public link of the event's new waiver form (`https://form.jotform.com/<form ID>`), taken from the form as soon as it passes the clone procedure's read-back, or supplied by the team. If there's no link, stop. Don't reuse the last event's link or guess one. To make the form, follow [Accelerate raffle waiver clone](accelerate-raffle-waiver-clone.md).
- **Node.js,** to run the script below.

Encode the link exactly as supplied. Don't add UTM tags or shorten it unless the person who supplied it asks. Keep the link and finished PDFs in the event's work folder, not in Git.

## Release checks

The specification below describes one observed master. Confirm current artwork clearance, brand approval, licensed embedded fonts and the required year before print release. Unresolved Trial-font licensing or an unapproved brand exception blocks release. Drafting can continue with those blockers reported.

## Locked specification

Check any finished sign against these. All measurements are from the top-left corner of the page.

| Item | Value |
|---|---|
| Page | One page, US Letter portrait, 612 x 792 pt |
| QR code position | Left 99.28 pt, top 423.66 pt |
| QR code size | 175.59 x 175.59 pt (2.44 in square), black on white, no logo or styling |
| QR encoding | Error correction H. The master is 33 x 33 modules |

Measured on the current customers master on 2026-11-10. Its QR sits 4.87 pt lower than on the earlier master, below the added heading.

The sign's copy must stay exactly as follows:

- Eyebrow: ACCELERATE BY LUMENIS
- Heading: FOR CURRENT CUSTOMERS
- Headline: ENTER THE PRIZE DRAWING.
- Subhead: Scan the code to complete your entry, release and consent form. It takes about two minutes.
- Step 01: Scan. Open your phone camera and scan the code.
- Step 02: Review. Read the eligibility and compliance terms.
- Step 03: Submit. Add your details and sign to confirm your entry.
- Labels: Point your phone camera here. Scan to enter.
- Legal: No purchase or payment of any kind is necessary to enter or win. A purchase will not increase your chances of winning. Entrants must be 18 or older. Winners are selected at random in accordance with the Official Rules and are subject to eligibility and compliance review. Void where prohibited by law.
- Footer: LUMENIS wordmark. ©2026.

This procedure can't change anything but the QR code. If anything else needs to change, stop and ask Kaelyn, because that needs a new approved master.

## Procedure

1. **Set up once.** In an empty folder, save the script below as `swap-raffle-qr.mjs`, then install the QR library:

   ```bash
   npm install qrcode
   ```

2. **Build the sign.** Copy the master into the same folder, then run:

   ```bash
   node swap-raffle-qr.mjs "Accelerate - Raffle Waiver QR Sign - Current Customers.pdf" "<city>-raffle-qr-sign.pdf" "<link>"
   ```

3. **Check the module size.** The script prints it. The QR code stays the same overall size, so a longer link means smaller modules. Below 3 pt per module (more than 57 x 57), ask for a shorter link.
4. **Compare with the master.** Render both PDFs at 300 dpi and compare them. Only the QR area may differ: x 78-297 pt, y 402-621 pt.
5. **Scan it.** Scan the QR code on the proof with a phone. It must open this event's raffle waiver form. A person does this; a successful build doesn't prove the link is right.

Stop if the script reports `QR block not found`. The input isn't the master PDF.

Printing is a separate step. See the [Accelerate print kit](../.agents/skills/lumenis-accelerate-print-kit/SKILL.md). This procedure doesn't authorize a print order.

## Script

The script reads both plain PDFs and PDFs saved with compressed object streams, which is how the current customers master is stored. It writes the sign as a fresh, single-version PDF, so no copy of the master's QR is left inside the file.

```js
// Usage: node swap-raffle-qr.mjs <master.pdf> <output.pdf> <link>
import {readFileSync, writeFileSync} from 'node:fs';
import {deflateSync, inflateSync} from 'node:zlib';
import QRCode from 'qrcode';

const [master, output, link] = process.argv.slice(2);
if (!link) throw new Error('Missing link');
const pdf = readFileSync(master);
const text = pdf.toString('latin1');

// Read the cross-reference data: classic tables and/or compressed XRef streams.
const entries = {}; // object number -> {type: 1, off, gen} or {type: 2, stm, i}
let trailer = '';
function streamAt(off) {
  const s = text.indexOf('stream', off);
  let start = s + 6;
  if (text[start] === '\r') start++;
  if (text[start] === '\n') start++;
  const dict = text.slice(text.indexOf('<<', off), s);
  const len = dict.match(/\/Length (\d+)(?: (\d+) R)?/);
  const n = len[2] === undefined ? +len[1] : +objBody(+len[1]).trim();
  return {dict, data: pdf.subarray(start, start + n)};
}
function readXref(off) {
  let prev;
  if (text.startsWith('xref', off)) {
    const end = text.indexOf('trailer', off);
    const lines = text.slice(off + 4, end).trim().split(/\r?\n|\r/);
    for (let l = 0; l < lines.length;) {
      const [first, count] = lines[l++].trim().split(/\s+/).map(Number);
      for (let i = 0; i < count; i++, l++) {
        const [o, g, t] = lines[l].trim().split(/\s+/);
        if (!(first + i in entries) && t === 'n') entries[first + i] = {type: 1, off: +o, gen: +g};
        else if (!(first + i in entries)) entries[first + i] = {type: 0};
      }
    }
    const dict = text.slice(end, text.indexOf('startxref', end));
    if (!trailer) trailer = dict;
    const stm = dict.match(/\/XRefStm (\d+)/);
    if (stm) readXref(+stm[1]);
    prev = dict.match(/\/Prev (\d+)/);
  } else {
    const {dict, data} = streamAt(off);
    if (!trailer) trailer = dict;
    const W = dict.match(/\/W ?\[ ?(\d+) (\d+) (\d+) ?\]/).slice(1).map(Number);
    const index = (dict.match(/\/Index ?\[([^\]]*)\]/)?.[1] ?? `0 ${dict.match(/\/Size (\d+)/)[1]}`).trim().split(/\s+/).map(Number);
    let raw = inflateSync(data);
    const cols = dict.match(/\/Columns (\d+)/);
    if (cols) { // PNG predictor rows
      const c = +cols[1], rows = [], last = Buffer.alloc(c);
      for (let r = 0; r < raw.length; r += c + 1) {
        if (raw[r] !== 0 && raw[r] !== 2) throw new Error('Unsupported xref predictor');
        for (let i = 0; i < c; i++) last[i] = raw[r] === 2 ? (last[i] + raw[r + 1 + i]) & 255 : raw[r + 1 + i];
        rows.push(Buffer.from(last));
      }
      raw = Buffer.concat(rows);
    }
    let p = 0;
    const field = (w, d) => { if (!w) return d; let v = 0; for (let i = 0; i < w; i++) v = v * 256 + raw[p++]; return v; };
    for (let k = 0; k < index.length; k += 2) for (let i = 0; i < index[k + 1]; i++) {
      const t = field(W[0], 1), a = field(W[1], 0), b = field(W[2], 0), n = index[k] + i;
      if (n in entries) continue;
      entries[n] = t === 1 ? {type: 1, off: a, gen: b} : t === 2 ? {type: 2, stm: a, i: b} : {type: 0};
    }
    prev = dict.match(/\/Prev (\d+)/);
  }
  if (prev) readXref(+prev[1]);
}
readXref(+text.match(/startxref\s+(\d+)/g).pop().match(/\d+/)[0]);
if (/\/Encrypt\b/.test(trailer)) throw new Error('Encrypted PDF: this is not the master file');

// Read an object's body, from the file or from inside a compressed object stream.
const objStreams = {};
function objBody(n) {
  const e = entries[n];
  if (e.type === 1) {
    const s = text.indexOf('obj', e.off) + 3;
    return text.slice(s, text.indexOf('endobj', s));
  }
  if (!objStreams[e.stm]) {
    const {dict, data} = streamAt(entries[e.stm].off);
    const body = inflateSync(data).toString('latin1');
    const first = +dict.match(/\/First (\d+)/)[1];
    const nums = body.slice(0, first).trim().split(/\s+/).map(Number);
    objStreams[e.stm] = nums.filter((_, i) => i % 2).map((o, i, a) => body.slice(first + o, i + 1 < a.length ? first + a[i + 1] : undefined));
  }
  return objStreams[e.stm][e.i];
}

// Find the page's content stream that holds the QR code.
const ref = (s, key) => +s.match(new RegExp(`/${key} (\\d+) \\d+ R`))[1];
const pages = objBody(ref(objBody(ref(trailer, 'Root')), 'Pages'));
const pageNum = +pages.match(/\/Kids ?\[ ?(\d+) \d+ R/)[1];
const contents = objBody(pageNum).match(/\/Contents ?(\[[^\]]*\]|\d+ \d+ R)/)[1];
const qrBlock = /22\.170349 0 0 22\.170349 413\.6814 1744\.9314 cm\n[\s\S]*?\n0 0 0 RG 0 0 0 rg\n(?:[-\d. ]+ [mlh]\n|h\n)+f/;
let target, page;
for (const [, n] of contents.matchAll(/(\d+) \d+ R/g)) {
  const {dict, data} = streamAt(entries[n].off);
  const decoded = /\/FlateDecode/.test(dict) ? inflateSync(data).toString('latin1') : data.toString('latin1');
  if (qrBlock.test(decoded)) { target = +n; page = decoded; break; }
}
if (!target) throw new Error('QR block not found: this is not the master file');

// Draw the new QR at the master's exact top-left corner and overall size.
const {modules} = QRCode.create(link, {errorCorrectionLevel: 'H'});
const n = modules.size;
const FOOTPRINT = 22.170349 * 33;
const scale = FOOTPRINT / n;
const paths = [];
for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (modules.get(y, x)) {
  paths.push(`${x} ${y} m`, `${x + 1} ${y} l`, `${x + 1} ${y + 1} l`, `${x} ${y + 1} l`, `${x} ${y} l`, 'h');
}
const quiet = 4 * 22.170349 / scale;
const qr = [`${scale.toFixed(6)} 0 0 ${scale.toFixed(6)} 413.6814 1744.9314 cm`, '1 1 1 RG 1 1 1 rg', '/G3 gs',
  `${-quiet} ${-quiet} ${n + 2 * quiet} ${n + 2 * quiet} re`, 'f', '0 0 0 RG 0 0 0 rg', ...paths, 'f'].join('\n');
page = page.replace(qrBlock, qr);

// Write a fresh single-revision PDF. Every object is written out plainly, so no
// copy of the old QR survives in an earlier revision or an object stream.
const parts = [Buffer.from('%PDF-1.7\n%\xe2\xe3\xcf\xd3\n', 'latin1')];
let size = parts[0].length;
const offsets = {};
const push = (b) => { parts.push(b); size += b.length; };
const max = Math.max(...Object.keys(entries).map(Number));
for (let i = 1; i <= max; i++) {
  const e = entries[i];
  if (!e || e.type === 0) continue;
  let head = '';
  if (e.type === 1) head = text.slice(text.indexOf('obj', e.off) + 3, text.indexOf('obj', e.off) + 400);
  if (/\/Type ?\/(ObjStm|XRef)\b/.test(e.type === 1 ? head.split('stream')[0] : '')) continue;
  offsets[i] = size;
  const gen = e.type === 1 ? e.gen : 0;
  if (i === target) {
    const body = deflateSync(Buffer.from(page, 'latin1'));
    push(Buffer.from(`${i} ${gen} obj\n<< /Filter /FlateDecode /Length ${body.length} >>\nstream\n`, 'latin1'));
    push(body);
    push(Buffer.from('\nendstream\nendobj\n', 'latin1'));
  } else if (e.type === 1) {
    const s = text.indexOf('obj', e.off) + 3;
    const hasStream = /^\s*<<[\s\S]*?>>\s*stream\r?\n/.test(text.slice(s, s + 4000)) && text.slice(s, text.indexOf('endobj', s)).includes('stream');
    let end;
    if (hasStream) {
      const {data} = streamAt(e.off);
      end = text.indexOf('endobj', data.byteOffset - pdf.byteOffset + data.length) + 6;
    } else end = text.indexOf('endobj', s) + 6;
    push(Buffer.from(`${i} ${gen} obj`, 'latin1'));
    push(pdf.subarray(s, end));
    push(Buffer.from('\n', 'latin1'));
  } else {
    push(Buffer.from(`${i} 0 obj\n${objBody(i).trim()}\nendobj\n`, 'latin1'));
  }
}
const xrefAt = size;
let xref = `xref\n0 ${max + 1}\n0000000000 65535 f \n`;
for (let i = 1; i <= max; i++) {
  xref += i in offsets ? `${String(offsets[i]).padStart(10, '0')} ${String(entries[i].type === 1 ? entries[i].gen : 0).padStart(5, '0')} n \n` : '0000000000 00000 f \n';
}
const keep = ['Root', 'Info'].map(k => trailer.match(new RegExp(`/${k} \\d+ \\d+ R`))?.[0]).filter(Boolean);
const id = trailer.match(/\/ID ?\[[^\]]*\]/)?.[0];
push(Buffer.from(`${xref}trailer\n<< /Size ${max + 1} ${keep.join(' ')}${id ? ' ' + id : ''} >>\nstartxref\n${xrefAt}\n%%EOF\n`, 'latin1'));
writeFileSync(output, Buffer.concat(parts));
console.log(`${n}x${n} modules, ${(scale * 0.24).toFixed(3)} pt per module: ${output}`);
```

## Good result and common mistake

Good: a sign where a 300 dpi comparison with the master shows changes only in the QR area, and a phone scan opens this event's raffle waiver form.

Mistake: rebuilding the sign in Canva, InDesign or HTML to change the QR code. It may look the same, but sizes and fonts will shift. Mistake: pasting a QR image over the old one, which leaves the old code in the file.

## Source and review

Source: the approved master PDF, reviewed 2026-10-30. The current customers master replaced it on 2026-11-09. On 2026-11-10 the script was rebuilt for that master and tested with a placeholder link. The test sign decoded to that link exactly, and a 300 dpi comparison with the master differed only inside the QR code. Proposed subject reviewer: Kaelyn. The 3 pt module limit is proposed guidance, not a brand or vendor rule. GitHub approval isn't legal approval of the sign, the Official Rules or the waiver form.
