# Vision consent QR sign

Owner: Kaelyn (event logistics).
Status: draft procedure, written 2026-10-30 from the approved sign. Review required.

Use this to make the OptiLIFT consent sign for an upcoming event. The design is fixed. The only per-event change is the QR code, plus one line removed at trade shows.

Don't redesign the sign, rebuild it in another tool, or change the copy. Every version is made by editing the master PDF directly, so the fonts, spacing and sizes can't drift.

## Choose the version

| Event | QR code | Eyebrow "VISION ACCELERATE BY LUMENIS" | Everything else |
|---|---|---|---|
| Accelerate | Replace | Keep | Identical to the master |
| Trade show | Replace | Remove | Identical to the master |

At a trade show the space left by the eyebrow stays empty. Nothing moves up to fill it.

## Inputs

- **The master PDF:** `VIS Accelerate - Consent QR Sign.pdf`. It stays outside Git because finished artwork doesn't belong in this repository and its QR opens a live form. Ask Kaelyn for a copy from the Accelerates OneDrive folder. Always start from the master, never from a previous event's sign.
- **The new consent link:** supplied by the team for that event. If there's no link, stop. Don't reuse the last event's link or guess one.
- **The event type:** Accelerate or trade show. If it's unclear, ask.
- **Node.js,** to run the script below.

Encode the link exactly as supplied. Don't add UTM tags or shorten it unless the person who supplied it asks. Keep the link and finished PDFs in the event's work folder, not in Git.

## Locked specification

Check any finished sign against these. All measurements are from the top-left corner of the page.

| Item | Value |
|---|---|
| Page | One page, US Letter portrait, 612 x 792 pt |
| QR code position | Left 90.12 pt, top 443.37 pt |
| QR code size | 168.05 x 168.05 pt (2.33 in square), black on white, no logo or styling |
| QR encoding | Error correction M. The master is 33 x 33 modules |
| Eyebrow | Left 43.2 pt, top about 125 pt. Accelerate only |

The sign's copy must stay exactly as follows:

- Headline: BEFORE YOUR TREATMENT, COMPLETE YOUR CONSENT.
- Subhead: Scan the code to fill out your informed consent form. It takes just a few minutes.
- Step 1: Scan the code. Open your phone camera and tap the link that appears.
- Step 2: Answer honestly. Answer each health screening question so your provider can confirm you are a candidate.
- Step 3: Sign and submit. Sign the form, then check in with your Lumenis provider.
- Labels: Point your phone camera here. Scan to begin.
- Legal: For internal event use only. Complete one form per person before any treatment. Tell your provider about any change in your health, and ask any questions before you sign.
- Footer: OptiLIFT by Lumenis. ©2026 Lumenis.

This procedure can't change the copy. If the copy or the year needs to change, stop and ask Kaelyn, because that needs a new approved master.

## Procedure

1. **Make the QR code.** Use any QR library with error correction M and no logo, colors or rounded modules. For example, the npm `qrcode` package's `QRCode.create(url, {errorCorrectionLevel: 'M'}).modules`. Save it as `matrix.txt`: one line per row, `1` for dark and `0` for light, with no quiet zone.
2. **Save the script** below as `swap-consent-qr.mjs`.
3. **Build the sign.**

   Accelerate:

   ```bash
   node swap-consent-qr.mjs "VIS Accelerate - Consent QR Sign.pdf" "<city>-vis-consent-qr-sign.pdf" matrix.txt
   ```

   Trade show:

   ```bash
   node swap-consent-qr.mjs "VIS Accelerate - Consent QR Sign.pdf" "<show>-vis-consent-qr-sign.pdf" matrix.txt --no-eyebrow
   ```

4. **Check the module size.** The script prints it. The QR code stays the same overall size, so a longer link means smaller modules. Below 3 pt per module (more than 57 x 57), ask for a shorter link.
5. **Compare with the master.** Render both PDFs at 300 dpi and compare them. Only the QR code may differ, plus the eyebrow on a trade show sign.
6. **Scan it.** Scan the QR code on the proof with a phone. It must open this event's OptiLIFT consent form. A person does this; a successful build doesn't prove the link is right.

Stop if the script reports `QR block not found`. The input isn't the master PDF.

Printing is a separate step. See the [Accelerate print kit](../.agents/skills/lumenis-accelerate-print-kit/SKILL.md). This procedure doesn't authorize a print order.

## Script

```js
// Usage: node swap-consent-qr.mjs <master.pdf> <output.pdf> <matrix.txt> [--no-eyebrow]
// matrix.txt: one line per QR row, 1 = dark, 0 = light, with no quiet zone.
import {readFileSync, writeFileSync} from 'node:fs';
import {deflateSync, inflateSync} from 'node:zlib';

const [master, output, matrixFile, flag] = process.argv.slice(2);
const pdf = readFileSync(master);
const text = pdf.toString('latin1');

// Locate the page content stream.
const contents = text.match(/\/Contents (\d+) 0 R/)[1];
const obj = text.indexOf(`\n${contents} 0 obj`) + 1;
const open = text.indexOf('stream\n', obj) + 'stream\n'.length;
const close = text.indexOf('endstream', open);
const dictOld = text.slice(obj, open);
const raw = pdf.subarray(open, close);
let page = inflateSync(raw).toString('latin1');

// Keep the visible QR at the master's exact top-left corner and overall size.
const FOOTPRINT = 21.218798 * 33;
const rows = readFileSync(matrixFile, 'utf8').trim().split(/\r?\n/);
const n = rows.length;
if (!rows.every(r => r.length === n && /^[01]+$/.test(r))) throw new Error('Matrix must be square and contain only 0 and 1');
const scale = FOOTPRINT / n;
const paths = rows.flatMap((row, y) => [...row].flatMap((cell, x) => cell === '1'
  ? [`${x} ${y} m`, `${x + 1} ${y} l`, `${x + 1} ${y + 1} l`, `${x} ${y + 1} l`, `${x} ${y} l`, 'h'] : []));
const quiet = 4 * 21.218798 / scale;
const qr = [`${scale.toFixed(6)} 0 0 ${scale.toFixed(6)} 375.50018 1847.3752 cm`, '1 1 1 RG 1 1 1 rg', '/G3 gs', 'EMC',
  `${-quiet} ${-quiet} ${n + 2 * quiet} ${n + 2 * quiet} re`, 'f', '0 0 0 RG 0 0 0 rg', ...paths, 'f'].join('\n');
const qrBlock = /21\.218798 0 0 21\.218798 375\.50018 1847\.3752 cm\n[\s\S]*?\n0 0 0 RG 0 0 0 rg\n(?:[-\d. ]+ [mlh]\n|h\n)+f/;
if (!qrBlock.test(page)) throw new Error('QR block not found: this is not the master file');
page = page.replace(qrBlock, qr);

if (flag === '--no-eyebrow') {
  const eyebrow = /BT\n\/F4 11 Tf\n1 0 0 -1 57\.59375 175 Tm\n[\s\S]*?\nET\n/;
  if (!eyebrow.test(page)) throw new Error('Eyebrow not found');
  page = page.replace(eyebrow, '');
}

// Write the new stream and shift every later object's cross-reference offset.
const body = deflateSync(Buffer.from(page, 'latin1'));
const dictNew = dictOld.replace(/\/Length \d+/, `/Length ${body.length}`);
const delta = body.length - raw.length + dictNew.length - dictOld.length;
let out = Buffer.concat([pdf.subarray(0, obj), Buffer.from(dictNew, 'latin1'), body, pdf.subarray(close)]).toString('latin1');
const xref = out.lastIndexOf('\nxref\n') + 1;
out = out.slice(0, xref) + out.slice(xref).replace(/^(\d{10}) (\d{5}) n/gm, (m, off, gen) =>
  `${String(+off > obj ? +off + delta : +off).padStart(10, '0')} ${gen} n`);
out = out.replace(/startxref\n\d+/, `startxref\n${xref}`);
writeFileSync(output, out, 'latin1');
console.log(`${n}x${n} modules, ${(scale * 0.24).toFixed(3)} pt per module: ${output}`);
```

## Good result and common mistake

Good: a trade show sign where a 300 dpi comparison with the master shows changes only in the QR area and the eyebrow line, and a phone scan opens the right form.

Mistake: rebuilding the sign in Canva, InDesign or HTML to change the QR code. It may look the same, but sizes and fonts will shift. Mistake: pasting a QR image over the old one, which leaves the old code in the file.

## Source and review

Source: the approved master PDF, reviewed 2026-10-30. Proposed subject reviewer: Kaelyn. The 3 pt module limit is proposed guidance, not a brand or vendor rule. GitHub approval isn't clinical or regulatory approval of the sign or the consent form; clinical owns the form.
