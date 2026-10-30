---
title: Venue assets, brand and flyer production
summary: Shared imagery, derivative presets, source-driven print layout and QA.
status: source-derived
owner: creative and event owners
reviewed: 2026-09-07
---

# Assets and flyers

Choose one brand system — Lumenis Corporate, OptiLIGHT or OptiLIFT — through assets/design-system/README.md and do not mix them. Other Aesthetics and Vision product brands have no system here; ask for their guidance. Preserve official casing. Keep approved originals and completed artwork outside Git.

## Reuse assets first

Query the image skill using brand, placement and subject. Read allowedBrands, placements, usageRestrictions and rights evidence. A working URL is not approval. First-party catalog assertions in historical guides conflict with some pending-rights metadata; resolve the actual asset's record rather than set all entries cleared. Inspect visible signs and badges. Use verified faculty names and portraits; no synthetic-looking headshot goes into a real invitation without provenance confirmation.

Use a configured shared catalog and hosted derivatives; a teammate must not need Nicholas's Desktop. The historical brand folder was `US - VIS - Image Catalogue - 2026` under HubSpot Files, containing ABC Arizona Mix Regular/Italic, Sans Light/Regular and black/white Lumenis logos. Verify current URLs and licensing; some similarly named font folders were incomplete. PNG re-encoding can change bytes on upload, so an original/local hash mismatch is not itself evidence of corruption.

## Venue set before design

Get the approved property's gallery or supplied originals, including meeting/reception spaces, not only the landing gallery. JS-rendered galleries may need a supported browser. Collect source URLs and provenance without bypassing access controls. Public gallery visibility does not grant reuse permission.

Aim for exterior, arrival/lobby, outdoor space, meeting room, reception, lounge/dining. Keep originals and a venue manifest (venue/address/gallery URL, source IDs/URLs, rights evidence, crop recipe, alt text). Source collages used two sets of three frames. Presets: web 1600x900; email 1200x800; social 1080x1350; print 2480x1395. Landscape: large left panel plus two right; portrait: large top plus two below. Match gutters to the destination background. Reuse recipes when recropping, never overwrite originals.

Upload newly needed derivatives only when authorized; reference already-hosted assets without redundant uploads. Confirm the actual uploaded path, URL, visibility and rendered file. Repeated names created suffixed URLs in source builds; do not assume overwrite or assemble a URL from the intended filename.

## Print and digital flyers

Read the supplied InDesign/IDML package as layout evidence rather than approximating its PDF by eye. IDML contains Spreads, Stories and Resources XML; apply each item transform and the actual page offset. The recorded US Vision flyer used Letter 612x792pt with 36pt text margin, violet #6F20D2 and lavender #BC9AFF, Arizona Sans headings with a mixed-family Accelerate wordmark. These are source-specific design settings, not a rule for every product/division.

A genuine Arizona Sans Bold existed in the packaged Document fonts even though it was absent from one design-system folder. Do not fake a missing cut or redistribute font binaries from an unclear license. The OptiLIFT fullcolor SVG source had missing cls-1/cls-2 style definitions; compare the actual rendered SVG with approved artwork before fixing. The recorded repair used black wordmark and #6F20D2 rays, preserving vector paths.

Respect the brief's choice of agenda versus session-topic edition. Use different output filenames so both remain identifiable. Check whether CTA/URL/QR is wanted; a no-link instruction and a requested QR need resolution. Do not inherit the prior event's no-CTA decision by default.

Readable content, faculty portrait quality and device placement must fit the source layout. Source defects included agenda overflow, a device image overlapping the expert column and low-resolution headshots. For office-print variants, the prior build used a 0.125-inch safety margin; commercial bleed/safe-area requirements come from the actual printer.

Render every final PDF page and inspect clipped headings, dates, venue, sessions, speaker names, product casing and image resolution. Verify page count with a PDF parser, not a raw strings/grep count. Recheck after every content change. Keep editable sources and provenance with the event outside Git.
## Update a finished print PDF

Status: draft for review. Proposed reviewer: creative and event owners. Based on one poster update for an Accelerate event; the steps are observed practice, not an approved standard.

Use this when an approved print PDF must be reused for another event and the InDesign or Illustrator source is unavailable, for example to change a QR code, rename a headline or resize for a different printer. If the source exists, edit it instead; the steps below then apply only to the checks.

**Required inputs:** the print-ready PDF, the approved destination URLs, the approved copy changes, one brand system, licensed fonts and, for a resize, the printer's bleed, trim and safe-area sizes. Stop the affected step if any input is missing. Do not guess a URL, reuse the prior event's QR code or estimate a safe area.

**Tools:** a PDF editor or script that changes objects in place. Do not export the page to an image, which flattens vector type and can recompress photos.

Work on a copy, then:

1. Inspect the PDF before editing: page, trim and bleed sizes, embedded fonts, photo resolution, and whether each QR code is a vector or an image. Vector QR codes are often many separate small shapes.
2. Replace each QR code in its original position and at its original outer size, keeping the white space around it. Use a new code generated from the exact URL. A longer URL needs more modules, so each module gets smaller. Draw vector modules as one filled shape, because abutting rectangles can show hairline gaps.
3. Check copy and type against the selected brand system. Older files may use a bold title, a full line in a highlight cut or colors outside the palette. Apply that system's rules rather than matching the old file. For Lumenis Corporate, start with assets/design-system/lumenis-corporate/SKILL.md and take print color from tokens/colors.css.
4. List the embedded fonts. A name containing "Trial" means the cut needs a licensed replacement. Set new text in licensed cuts and report any trial text left in the file. Never fake a missing weight.
5. For a resize, fit the artwork to the printer's sizes rather than scaling it to the bleed. Printers may set different bleed for width and height, and a different shape leaves extra space. Scale the content to the trim or safe area, extend edge-to-edge elements to the bleed line, and set the trim and bleed boxes. Recheck QR size, which shrinks with the page.

**Verify before release:**

- Page, trim and bleed sizes match the original or the printer's specification.
- Each QR code decodes to its exact URL from a render at print resolution, and scans with a phone on the printer's proof. A file check does not prove a printed code scans.
- A before-and-after render comparison shows changes only in the intended areas.
- Photos have the same pixel size and data as the original, or any change is explained.
- All type and images sit inside the safe area.
- Color is judged on a proof, because CMYK values can look muted on screen.

**Fictional example:** a 24x36-inch poster moves to a new city. The designer swaps two QR codes, changes the headline and resets it in licensed Arizona Sans. A comparison shows changes only in those areas, the photos are unchanged and both codes open the new pages. If the printer then asks for a smaller card but gives no safe area, the resize stops until the printer confirms it.

**Avoid:** covering an old QR code with a white box. The old code stays in the file and can resurface when the artwork is reused or edited.

File approval does not authorize print dispatch. Keep the finished PDF, event URLs and proofs outside Git.

## Repeat the agenda QR poster

Status: draft for review.

Use this for each Accelerate event that needs the "Scan for your weekend schedule" poster, which has one QR code for Aesthetics and one for Eye Care. The graphic is reused as it is. Only the two QR codes change.

**Master file:** the latest approved poster PDF, 24x36-inch trim with 0.125-inch bleed, kept in a shared folder outside Git. A teammate must be able to reach it without the author's computer.

**Required inputs:** the master PDF and the event's Aesthetics and Eye Care agenda page URLs. Stop if a URL is missing or its page is not ready.

**Keep exactly as they are:** the wordmark, the ACCELERATE AGENDA headline, the subtitle, both photos, the division labels, the left color strip, all colors, and every position and size.

1. Copy the master and name the copy for the new event.
2. Replace both QR codes using step 2 of [Update a finished print PDF](#update-a-finished-print-pdf). The Aesthetics code goes in the Aesthetics box and the Eye Care code in the Eye Care box.
3. Run the release checks above. The before-and-after comparison must show changes only inside the two QR boxes.
4. Open each decoded URL and confirm it shows that division's agenda for this event, not the previous event's.
5. Confirm the photos are still cleared for this use.

If a printer needs a different size, follow step 5 of [Update a finished print PDF](#update-a-finished-print-pdf). Treat that as a new layout and check it again.

**Open decision:** the master has a multicolor strip and a different accent for each division, while the Lumenis Corporate rule for single-page print is one secondary color. The event team uses this design, but the brand owner should confirm it as an approved exception.
