# Accelerate raffle QR sign

Owner: Kaelyn (event logistics).
Status: draft procedure, written 2026-10-30 from the approved sign. Review required.

Use this to make the raffle waiver sign for an upcoming event. The QR code is the only thing that ever changes. The team supplies the link for each event.

Don't redesign the sign, rebuild it in another tool, or change the copy. Every version is made by editing the master PDF directly, so the fonts, spacing and sizes can't drift.

## Inputs

- **The master PDF:** `Accelerate - Raffle Waiver QR Sign.pdf`, in the `Lumenis Vision US MKT - Graphic Templates` OneDrive folder with the other master graphics. It stays outside Git because finished artwork doesn't belong in this repository and its QR opens a live form. Always start from the master, never from a previous event's sign.
- **The new raffle waiver link:** supplied by the team for that event. If there's no link, stop. Don't reuse the last event's link or guess one.
- **Node.js,** to run the script below.

Encode the link exactly as supplied. Don't add UTM tags or shorten it unless the person who supplied it asks. Keep the link and finished PDFs in the event's work folder, not in Git.

## Master and release checks

Before building, confirm the master revision and SHA-256 with the owner in the private work system; do not compute a hash of an unverified file and call it approved. Copy [print-pdf-input-guards.mjs](../scripts/print-pdf-input-guards.mjs) alongside the extracted script. Set `LUMENIS_APPROVED_MASTER_SHA256` to that owner-confirmed value. The script rejects a different master, an existing output path and undersized QR modules. Raw-stream scripts also reject unsupported incremental or cross-reference structures; use a reviewed PDF editor instead of bypassing the guard.

The specification below describes one observed master, not blanket approval for every year or use. Confirm current artwork clearance, applicable brand approval, licensed embedded fonts and the required year before print release. Unresolved Trial-font licensing or an unapproved brand exception blocks release; obtain a corrected approved master and revalidate the editor against it. Drafting may continue with those blockers clearly reported. No form submission is needed to verify a QR destination.

## Locked specification

Check any finished sign against these. All measurements are from the top-left corner of the page.

| Item | Value |
|---|---|
| Page | One page, US Letter portrait, 612 x 792 pt |
| QR code position | Left 99.28 pt, top 418.78 pt |
| QR code size | 175.59 x 175.59 pt (2.44 in square), black on white, no logo or styling |
| QR encoding | Error correction H. The master is 33 x 33 modules |

The sign's copy must stay exactly as follows:

- Eyebrow: ACCELERATE BY LUMENIS
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
   node swap-raffle-qr.mjs "Accelerate - Raffle Waiver QR Sign.pdf" "<city>-raffle-qr-sign.pdf" "<link>"
   ```

3. **Check the module size.** The script prints it. The QR code stays the same overall size, so a longer link means smaller modules. Below 3 pt per module (more than 57 x 57), ask for a shorter link.
4. **Compare with the master.** Render both PDFs at 300 dpi and compare them. Only the QR area may differ: x 78-297 pt, y 397-615 pt.
5. **Scan it.** Scan the QR code on the proof with a phone. It must open this event's raffle waiver form. A person does this; a successful build doesn't prove the link is right.

Stop if the script reports `QR block not found`. The input isn't the master PDF.

Printing is a separate step. See the [Accelerate print kit](../.agents/skills/lumenis-accelerate-print-kit/SKILL.md). This procedure doesn't authorize a print order.

## Script

```js
// Usage: node swap-raffle-qr.mjs <master.pdf> <output.pdf> <link>
import {readFileSync, writeFileSync} from 'node:fs';
import {readApprovedMaster, requireQrSize} from './print-pdf-input-guards.mjs';
import {deflateSync, inflateSync} from 'node:zlib';
import QRCode from 'qrcode';

const [master, output, link] = process.argv.slice(2);
if (!link) throw new Error('Missing link');
const pdf = readApprovedMaster(master, output, {classic: true});
const text = pdf.toString('latin1');

// Locate the page content stream.
const contents = text.match(/\/Contents (\d+) 0 R/)[1];
const obj = text.indexOf(`\n${contents} 0 obj`) + 1;
const open = text.indexOf('stream\n', obj) + 'stream\n'.length;
const dictOld = text.slice(obj, open);
const close = open + Number(dictOld.match(/\/Length (\d+)/)[1]);
const raw = pdf.subarray(open, close);
let page = inflateSync(raw).toString('latin1');

// Keep the visible QR at the master's exact top-left corner and overall size.
const {modules} = QRCode.create(link, {errorCorrectionLevel: 'H'});
const n = modules.size;
const FOOTPRINT = 22.170349 * 33;
const scale = FOOTPRINT / n;
requireQrSize(scale * 0.24, 3);
const paths = [];
for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (modules.get(y, x)) {
  paths.push(`${x} ${y} m`, `${x + 1} ${y} l`, `${x + 1} ${y + 1} l`, `${x} ${y + 1} l`, `${x} ${y} l`, 'h');
}
const quiet = 4;
const qr = [`${scale.toFixed(6)} 0 0 ${scale.toFixed(6)} 413.6814 1744.9314 cm`, '1 1 1 RG 1 1 1 rg', '/G3 gs',
  `${-quiet} ${-quiet} ${n + 2 * quiet} ${n + 2 * quiet} re`, 'f', '0 0 0 RG 0 0 0 rg', ...paths, 'f'].join('\n');
const qrBlock = /22\.170349 0 0 22\.170349 413\.6814 1744\.9314 cm\n[\s\S]*?\n0 0 0 RG 0 0 0 rg\n(?:[-\d. ]+ [mlh]\n|h\n)+f/;
if (!qrBlock.test(page)) throw new Error('QR block not found: this is not the master file');
page = page.replace(qrBlock, qr);

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

Good: a sign where a 300 dpi comparison with the master shows changes only in the QR area, and a phone scan opens this event's raffle waiver form.

Mistake: rebuilding the sign in Canva, InDesign or HTML to change the QR code. It may look the same, but sizes and fonts will shift. Mistake: pasting a QR image over the old one, which leaves the old code in the file.

## Verification limits

The contributor reports testing the original artwork-specific editor on an external master. The repository review checks script syntax and guard behavior with synthetic inputs; it does not rerun the revised editor on the restricted artwork. Revalidate the revised script on the approved master, compare rendered output outside the allowed QR areas, decode exact URLs, and complete the phone proof scan before release.

## Source and review

Source: the approved master PDF, reviewed 2026-10-30. Proposed subject reviewer: Kaelyn. The 3 pt module limit is proposed guidance, not a brand or vendor rule. GitHub approval isn't legal approval of the sign, the Official Rules or the waiver form.
