# OneTap registration QR sign

Owner: Kaelyn (event logistics).
Status: draft procedure, written 2026-10-30 from the approved sign. Review required.

Use this to make the walk-up registration sign ("NOT ON THE LIST? REGISTER HERE.") for an upcoming Accelerate. The design is fixed. The QR code is the only thing that ever changes.

Don't redesign the sign, rebuild it in another tool, or change the copy. Every version is made by editing the master PDF directly, so the fonts, spacing and sizes can't drift.

## Inputs

- **The master PDF:** `Accelerate - OneTap Registration QR Sign.pdf`, in the `Lumenis Vision US MKT - Graphic Templates` OneDrive folder with the other master graphics. It stays outside Git because finished artwork doesn't belong in this repository and its QR opens a live form. Always start from the master, never from a previous event's sign.
- **The new registration link:** supplied by the team for that event. If there's no link, stop. Don't reuse the last event's link or guess one.
- **Node.js and the npm `qrcode` package,** to run the script below.

Encode the link exactly as supplied. Don't add UTM tags or shorten it unless the person who supplied it asks. Keep the link and finished PDFs in the event's work folder, not in Git.

## Master and release checks

Before building, confirm the master revision and SHA-256 with the owner in the private work system; do not compute a hash of an unverified file and call it approved. Copy [print-pdf-input-guards.mjs](../scripts/print-pdf-input-guards.mjs) alongside the extracted script. Set `LUMENIS_APPROVED_MASTER_SHA256` to that owner-confirmed value. The script rejects a different master, an existing output path and undersized QR modules. Raw-stream scripts also reject unsupported incremental or cross-reference structures; use a reviewed PDF editor instead of bypassing the guard.

The specification below describes one observed master, not blanket approval for every year or use. Confirm current artwork clearance, applicable brand approval, licensed embedded fonts and the required year before print release. Unresolved Trial-font licensing or an unapproved brand exception blocks release; obtain a corrected approved master and revalidate the editor against it. Drafting may continue with those blockers clearly reported. No form submission is needed to verify a QR destination.

## Locked specification

Check any finished sign against these. All measurements are from the top-left corner of the page.

| Item | Value |
|---|---|
| Page | One page, US Letter portrait, 612 x 792 pt |
| QR image | Left 78 pt, top 417 pt, 218.25 x 217.5 pt, 2265 x 2265 px |
| QR code | About 198 pt square inside that image, rounded black modules on white, blue OneTap icon in the center |
| QR encoding | Error correction Q. The master is 45 x 45 modules |

The sign's copy must stay exactly as follows:

- Eyebrow: ACCELERATE BY LUMENIS
- Headline: NOT ON THE LIST? REGISTER HERE.
- Subhead: Scan the code to register for the event. It takes less than a minute.
- Step 01, Scan: Open your phone camera and scan the code.
- Step 02, Fill in: Enter your name, email, phone and address.
- Step 03, Register: Tap Register to complete your registration.
- Labels: Point your phone camera here. Scan to register.
- Legal: Register once per person. Already registered? See a Lumenis team member to check in.
- Footer: Lumenis wordmark. ©2026.

This procedure can't change the copy. If the copy or the year needs to change, stop and ask Kaelyn, because that needs a new approved master.

## Procedure

1. **Save the script** below as `swap-onetap-qr.mjs`, and run `npm install qrcode` in the same folder.
2. **Build the sign.**

   ```bash
   node swap-onetap-qr.mjs "Accelerate - OneTap Registration QR Sign.pdf" "<city>-onetap-registration-qr-sign.pdf" "<registration link>"
   ```

3. **Check the module size.** The script prints it. The QR code stays the same overall size, so a longer link means smaller modules. Below 3 pt per module (more than 66 x 66), ask for a shorter link.
4. **Compare with the master.** Render both PDFs at 300 dpi and compare them. Only the QR code may differ.
5. **Scan it.** Scan the QR code on the proof with a phone. It must open this event's OneTap registration page. A person does this; a successful build doesn't prove the link is right.

Stop if the script reports `QR image not found`. The input isn't the master PDF.

Printing is a separate step. See the [Accelerate print kit](../.agents/skills/lumenis-accelerate-print-kit/SKILL.md). This procedure doesn't authorize a print order.

## Script

```js
// Usage: node swap-onetap-qr.mjs <master.pdf> <output.pdf> "<registration link>"
// Needs the qrcode package: npm install qrcode
import {readFileSync, writeFileSync} from 'node:fs';
import {readApprovedMaster, requireQrSize} from './print-pdf-input-guards.mjs';
import {deflateSync, inflateSync} from 'node:zlib';
import QRCode from 'qrcode';

const [master, output, link] = process.argv.slice(2);
if (!link) throw new Error('Registration link missing');
const pdf = readApprovedMaster(master, output, {classic: true});
const text = pdf.toString('latin1');

// Locate the sign's only QR image, a 2265 x 2265 RGB picture.
const SIZE = 2265;
const found = text.match(/\n(\d+) 0 obj\s*<<\s*\/Type \/XObject\s*\/Subtype \/Image\s*\/Width 2265\s*\/Height 2265[^>]*\/Length (\d+)\s*>>\s*stream\n/);
if (!found) throw new Error('QR image not found: this is not the master file');
const obj = found.index + 1;
const open = found.index + found[0].length;
const close = open + Number(found[2]);
const dictOld = text.slice(obj, open);
const old = inflateSync(pdf.subarray(open, close));
if (old.length !== SIZE * SIZE * 3) throw new Error('QR image not found: this is not the master file');

// The master's measurements inside that image, in pixels.
const LEFT = 79, TOP = 95, FOOTPRINT = 2057;
const ICON = {left: 937, right: 1277, top: 953, bottom: 1294};
const ICON_CLEAR = 23, ICON_COPY = 12;

// Error correction Q, like the master, so the code still scans with the icon over its center.
const {modules} = QRCode.create(link, {errorCorrectionLevel: 'Q'});
const n = modules.size;
const cell = FOOTPRINT / n;
requireQrSize(cell * 218.25 / SIZE, 3);
const dark = new Float32Array(SIZE * SIZE);
for (let row = 0; row < n; row++) {
  for (let col = 0; col < n; col++) {
    if (!modules.get(row, col)) continue;
    const x0 = Math.round(LEFT + col * cell), x1 = Math.round(LEFT + (col + 1) * cell);
    const y0 = Math.round(TOP + row * cell), y1 = Math.round(TOP + (row + 1) * cell);
    if (x1 > ICON.left - ICON_CLEAR && x0 < ICON.right + ICON_CLEAR && y1 > ICON.top - ICON_CLEAR && y0 < ICON.bottom + ICON_CLEAR) continue;
    for (let y = y0; y < y1; y++) dark.fill(1, y * SIZE + x0, y * SIZE + x1);
  }
}

// Blur, then sharpen back to black and white. This gives the master's rounded, joined modules.
const radius = Math.max(1, Math.round(cell * 0.42));
const blur = (from, step, lines, length) => {
  const to = new Float32Array(from.length);
  for (let line = 0; line < lines; line++) {
    const start = line * (step === 1 ? SIZE : 1);
    let sum = 0;
    for (let i = -radius; i <= radius; i++) sum += from[start + Math.max(0, i) * step];
    for (let i = 0; i < length; i++) {
      to[start + i * step] = sum / (2 * radius + 1);
      sum += from[start + Math.min(length - 1, i + radius + 1) * step] - from[start + Math.max(0, i - radius) * step];
    }
  }
  return to;
};
const soft = blur(blur(dark, 1, SIZE, SIZE), SIZE, SIZE, SIZE);

// Paint black on white, then put the master's OneTap icon back.
const image = Buffer.alloc(old.length);
for (let y = 0; y < SIZE; y++) {
  for (let x = 0; x < SIZE; x++) {
    const i = (y * SIZE + x) * 3;
    const icon = x >= ICON.left - ICON_COPY && x <= ICON.right + ICON_COPY && y >= ICON.top - ICON_COPY && y <= ICON.bottom + ICON_COPY;
    const value = Math.round(255 * Math.min(1, Math.max(0, 0.5 - (soft[y * SIZE + x] - 0.5) * 8)));
    for (let k = 0; k < 3; k++) image[i + k] = icon ? old[i + k] : value;
  }
}

// Write the new image and shift every later object's cross-reference offset.
const body = deflateSync(image, {level: 9});
const dictNew = dictOld.replace(/\/Length \d+/, `/Length ${body.length}`);
const delta = body.length - (close - open) + dictNew.length - dictOld.length;
let out = Buffer.concat([pdf.subarray(0, obj), Buffer.from(dictNew, 'latin1'), body, pdf.subarray(close)]).toString('latin1');
const xref = out.lastIndexOf('\nxref\n') + 1;
out = out.slice(0, xref) + out.slice(xref).replace(/^(\d{10}) (\d{5}) n/gm, (m, off, gen) =>
  `${String(+off > obj ? +off + delta : +off).padStart(10, '0')} ${gen} n`);
out = out.replace(/startxref\n\d+/, `startxref\n${xref}`);
writeFileSync(output, out, 'latin1');
console.log(`${n}x${n} modules, ${(FOOTPRINT / n * 218.25 / SIZE).toFixed(2)} pt per module: ${output}`);
```

## Good result and common mistake

Good: a 300 dpi comparison with the master shows changes only in the QR area, and a phone scan opens this event's registration page.

Mistake: rebuilding the sign in Canva, InDesign or HTML to change the QR code. It may look the same, but sizes and fonts will shift. Mistake: pasting a QR image over the old one, which leaves the old code in the file.

## Verification limits

The contributor reports testing the original artwork-specific editor on an external master. The repository review checks script syntax and guard behavior with synthetic inputs; it does not rerun the revised editor on the restricted artwork. Revalidate the revised script on the approved master, compare rendered output outside the allowed QR areas, decode exact URLs, and complete the phone proof scan before release.

## Source and review

Source: the approved master PDF, reviewed 2026-10-30. Proposed subject reviewer: Kaelyn. The 3 pt module limit is proposed guidance, not a brand or vendor rule. GitHub approval doesn't authorize a print order.
