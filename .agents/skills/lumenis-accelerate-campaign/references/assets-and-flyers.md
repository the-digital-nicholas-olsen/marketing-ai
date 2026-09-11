---
title: Venue assets, brand and flyer production
summary: Shared imagery, derivative presets, source-driven print layout and QA.
status: source-derived
owner: creative and event owners
reviewed: 2026-09-07
---
# Assets and flyers

Choose the reviewed product design system through [assets/design-system](../../../../assets/design-system/README.md). Vision references include OptiLIGHT and OptiLIFT; this does not define all Aesthetics brands. Preserve official casing. Keep approved originals and completed artwork outside Git.

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
