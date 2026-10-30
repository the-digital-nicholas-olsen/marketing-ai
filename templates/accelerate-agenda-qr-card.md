# Accelerate agenda QR card

Owner: Kaelyn (event logistics).
Status: draft procedure, written 2026-10-30 from the approved 5 x 7 card. Review required.

Use this to make the 5 x 7 in "Accelerate Agenda" card for an upcoming Accelerate. The design is fixed. The only per-event change is the two QR codes: one for the Aesthetics agenda and one for the Eye Care agenda.

Don't redesign the card, rebuild it in another tool, or change the copy, photos or sizes. Every version is made by editing the master PDF directly, so the fonts, spacing and sizes can't drift.

## Inputs

- **The master PDF:** the latest bleed version of the card, named `LMAES-Scan-for-Schedule-5x7-Card-BLEED`. It stays outside Git because finished artwork doesn't belong in this repository and its QR codes open a live event's pages. Ask Kaelyn for a copy from the Accelerates OneDrive folder.
- **Two final agenda links:** one for Aesthetics and one for Eye Care, each with its tracking tag from [lumenis-utm-links](../.agents/skills/lumenis-utm-links/SKILL.md). If either link is missing or not final, stop. Don't reuse the last event's link or guess one.
- **Node.js,** to run the script below.

Encode each link exactly as supplied. Keep the links and finished PDFs in the event's work folder, not in Git.

## Locked specification

Check any finished card against these. All measurements are from the top-left corner of the PDF page.

| Item | Value |
|---|---|
| Page | One page, 393.84 x 521.28 pt (5.47 x 7.24 in, 139 x 184 mm), including bleed |
| Trim | 5 x 7.01 in (127 x 178 mm), set as the PDF trim box |
| Safe area | 4.53 x 6.77 in, centered |
| Aesthetics QR code | Left 233.01 pt, top 213.62 pt, 49.51 pt square (0.69 in), upper right of the card |
| Eye Care QR code | Left 104.86 pt, top 392.60 pt, 48.47 pt square (0.67 in), lower left of the card |
| QR encoding | Error correction M, black on white, no logo or styling |
| Edges | White. The card has no color strip, unlike the 24 x 36 in poster |

The card's copy must stay exactly as follows:

- Logo: Lumenis wordmark.
- Title: ACCELERATE AGENDA, with the Lumenis Hero L as the L in ACCELERATE.
- Subhead: Scan for your weekend schedule
- Labels: AESTHETICS. EYE CARE.

This procedure can't change the copy, photos or sizes. If any of them needs to change, stop and ask Kaelyn, because that needs a new approved master.

## Procedure

1. **Set up.** Put the master PDF and the script below, saved as `swap-card-qrs.mjs`, in the event's work folder. In that folder, run:

   ```bash
   npm install mupdf qrcode
   ```

2. **Build the card.** Put the Aesthetics link first and the Eye Care link second:

   ```bash
   node swap-card-qrs.mjs "<master>.pdf" "<city>-agenda-qr-card-bleed.pdf" "<aesthetics-link>" "<eye-care-link>"
   ```

3. **Check the module size.** The script prints it for each QR code. The QR codes stay the same overall size, so a longer link means smaller modules. Below 1 pt per module, ask for a shorter link.
4. **Compare with the master.** Render both PDFs at 300 dpi and compare them. Only the two QR codes may differ.
5. **Scan it.** On the printer's proof, scan each QR code with a phone. Each must open this event's agenda page for the division printed beside it. A person does this; a successful build doesn't prove the links are right.

Stop if the script reports `QR blocks not found`. The input isn't the master PDF.

Printing is a separate step. See the [Accelerate print kit](../.agents/skills/lumenis-accelerate-print-kit/SKILL.md). This procedure doesn't authorize a print order.

## Script

```js
// Usage: node swap-card-qrs.mjs <master.pdf> <output.pdf> <aesthetics-url> <eye-care-url>
import {readFileSync, writeFileSync} from 'node:fs';
import * as mupdf from 'mupdf';
import QRCode from 'qrcode';

const CARD_SCALE = 0.2356; // Artwork units to card points.

const [master, output, aesUrl, eyeUrl] = process.argv.slice(2);
if (!aesUrl || !eyeUrl) throw new Error('Usage: <master.pdf> <output.pdf> <aesthetics-url> <eye-care-url>');

const doc = new mupdf.PDFDocument(readFileSync(master));
const art = doc.loadPage(0).getObject().get('Resources').get('XObject').get('Art');
if (art.isNull()) throw new Error('QR blocks not found: this is not the master file');
let page = art.readStream().asString();

// Each QR is one black fill made of many module rectangles.
const qrBlock = /0 0 0 1 k\n((?:-?[\d.]+ -?[\d.]+ -?[\d.]+ -?[\d.]+ re\n){50,})f/g;
const f = v => Number(v.toFixed(3)).toString();
let swapped = 0;

page = page.replace(qrBlock, (_, body) => {
  const rects = body.trim().split('\n').map(line => line.split(' ').slice(0, 4).map(Number));
  const left = Math.min(...rects.map(([x]) => x));
  const right = Math.max(...rects.map(([x, , w]) => x + w));
  const top = Math.max(...rects.flatMap(([, y, , h]) => [y, y + h]));
  const size = right - left;

  // Keep each QR's exact position and overall size. Eye Care is on the left of the artwork.
  const division = (left + right) / 2 < 864 ? 'Eye Care' : 'Aesthetics';
  const qr = QRCode.create(division === 'Eye Care' ? eyeUrl : aesUrl, {errorCorrectionLevel: 'M'});
  const n = qr.modules.size;
  const m = size / n;
  const block = ['0 0 0 1 k'];
  for (let col = 0; col < n; col++) {
    for (let row = 0; row < n; row++) {
      if (!qr.modules.get(row, col)) continue;
      const start = row;
      while (row + 1 < n && qr.modules.get(row + 1, col)) row++;
      block.push(`${f(left + col * m)} ${f(top - start * m)} ${f(m)} ${f(-(row - start + 1) * m)} re`);
    }
  }
  block.push('f');
  swapped++;
  console.log(`${division}: ${n}x${n} modules, ${(m * CARD_SCALE).toFixed(2)} pt per module on the card`);
  return block.join('\n');
});

if (swapped !== 2) throw new Error(`QR blocks not found: expected 2, found ${swapped}`);
art.writeStream(page);
writeFileSync(output, doc.saveToBuffer('compress,garbage').asUint8Array());
console.log(`Saved ${output}`);
```

## Good result and common mistake

Good: a card where a 300 dpi comparison with the master shows changes only in the two QR codes, and phone scans of the proof open the right agenda page for each division.

Mistake: entering the links in the wrong order, which puts each division's QR code beside the other's label. The file looks correct, so only the phone scan catches it. Mistake: pasting a QR image over the old one, which leaves the old code in the file.

## Source and review

Source: the approved master PDF, reviewed 2026-10-30. Proposed subject reviewer: Kaelyn. The 1 pt module limit is proposed guidance, not a brand or vendor rule. GitHub approval doesn't authorize a print order.
