---
name: optilift-design
description: The standalone OptiLIFT brand system — colour, type, surfaces, imagery and logo rules for OptiLIFT marketing. Use when OptiLIFT is requested or the piece is about OptiLIFT. Complete on its own; never combine it with the Lumenis Corporate or OptiLIGHT systems.
---

# OptiLIFT — brand system

One of three separate Lumenis brand systems (Lumenis Corporate, OptiLIGHT, OptiLIFT), each a complete brand book for a different purpose. Everything OptiLIFT work needs is in this folder: these rules, the [reference](reference.md), `styles.css` and `tokens/`, logos in `assets/logo/` and specimen cards in `guidelines/`. It does not inherit from or defer to the other systems, and their different choices are not conflicts.

## Non-negotiables

- **H1 is UPPERCASE** — page heroes and deck/slide titles. H2/H3 subheads, body and buttons are sentence case; eyebrows are letter-spaced uppercase at a small size. (Gamma applies one transform to the whole heading scale, so H1–H4 all render uppercase there; set a line as body text if it must stay sentence case.)
- **Colour a few words.** Neither ABC Arizona cut available here has a bold weight, so emphasis comes from colour: the operative phrase in a headline, key terms or figures in body, eyebrows, links and table header rows. **Violet `#6F20D2` is the accent** (~7.5:1 on white, so it works at body size and for links). In combined OptiLIFT/OptiLIGHT material, OptiLIGHT Blue `#578FFF` is also permitted — an explicit OptiLIFT rule — at display sizes only (~3:1 on white). For text emphasis, use one accent per composition and one to four words per highlight. This text-emphasis rule does not restrict purple or lavender background fields.
- **Product spelling:** `OptiLIFT`. The sibling product is written `OptiLIGHT`. Never `OptiLight` or `Optilight`.
- **Light grounds by default** (leadership review, September 2026): white or off-white heroes, pages and slide grounds; product renders and photography on white or the light neutral. Flat purple and lavender backgrounds are also permitted, including heroes, slides, cards and section blocks (maintainer direction, 2026-10-26). A near-black inverse section is the exception — at most once per piece, never the hero. Where light and dark versions of an asset exist, ship the light one.
- **No soft colour gradients.** Grounds are flat: white, off-white `--neutral-50`, the light neutral `--neutral-100`, OptiLIFT Purple `#6F20D2`, or a flat lavender from the existing purple tint scale (for example `--purple-50`, `--purple-100` or `--purple-200`). Choose text and ray colours with sufficient contrast on the selected ground. The brand book’s “Sunset” style is real sky photography; never imitate it with a CSS gradient, radial glow or purple wash.
- **Rays never intersect text.** Rays start at one origin at a corner of the frame or outside it and fan out in one direction; they never cross text, numbers, charts or a photo’s subject (see Illuminating rays of light).
- **Cropped images sit flush.** A photo or cutout with a hard crop (a person cut at the chest, a device cut at the base) sits with that cut edge flush against the edge or corner of its container: the slide, card or page. Never float a hard-cropped edge in open space. A complete, uncropped product image may float.
- **Logos:** use the supplied lockups in `assets/logo/`. Preserve artwork, proportions, clear space and the "by Lumenis" endorsement; never redraw the wordmark.
- **Voice:** confident, clinical-premium, reassuring. No hype, no exclamation points, no emoji.

## Visual foundations

- **Colour:** near-black ink `#161413` and white provide the default composition. Purple and lavender may also carry full background fields; violet remains available for CTAs, links and small highlights. Use white text on deep purple and dark ink on pale lavender, checking contrast for the actual colours and text size. Neutrals lean warm/greige (`--neutral-*`), matching mauve-toned photography backdrops (`--mauve-500`).
- **Type:** ABC Arizona Mix (serif) for headlines and pull-quotes, set large and tight, with italic for softer sub-headlines. ABC Arizona Sans Light is the default body weight; Regular for UI and navigation.
- **Spacing:** 4px base scale to 128px; sections breathe with 64–96px of padding.
- **Surfaces:** 1px light-neutral hairlines; radius 4px by default, 8px for cards, pill for buttons, badges and tags; a soft, low-contrast card shadow (`--shadow-card`). No hard or inner shadows, no border-left accent bars. One translucent, blurred sticky header is the only use of blur.
- **Motion and states:** 200ms standard ease; buttons and links darken slightly on hover; selected tabs/tags get a full fill or underline. No bounce.
- **Photography:** warm greige-backdrop studio portraits of patients, and clean neutral-grey or black-background product renders. Bright, clean, true-to-life; no grading or grain.
- **Sunburst motif:** the violet ray mark that forms the dot of the "i" in the wordmark, reused decoratively (`guidelines/brand-sunburst.card.html`). With the rays below, it is the only graphic device; there is no functional icon set. If UI work needs icons, use thin monochrome line icons and flag them as a substitution.

### Illuminating rays of light

Source: OptiLIFT brand book, “Illuminating rays of light,” PDF pages 26–30 (see Sources and implementation decisions). Straight 4px strokes (print 1–4pt by scale) in OptiLIFT Purple `#6F20D2` on light grounds or white on purple, at least three, all from one shared origin. A stroke crossing a purple fill turns white, and vice versa.

- **One origin, one direction.** Put the origin at a corner of the frame (usually a top corner) or outside the frame, so every ray travels the same way, like light from one source. Never start rays inside the layout or let lines from different directions meet mid-frame: a burst of crossing lines in the middle of content reads as shattered glass.
- **Plan the fan before the content.** Each ray runs from the origin to the frame edge through empty space only. Lay out text, cards, charts and the hero image outside the fan, or narrow the fan to fit the empty area.
- **Never intersect text.** No ray crosses a headline, body copy, labels, numbers, table cells, a chart or a form. A ray over a transparent card or a chart counts as crossing it; on a chart, a ray reads as a data line. A very light ray (15% opacity or less) may pass behind a wide area of open background, never behind words.
- **Images:** a cutout person or product may stand in front of the rays, so the rays read as light behind it. A ray never cuts across a face or the product.
- **Dense layouts get no rays.** Text-heavy slides, tables, forms and dashboards go without them. Use rays on covers, section dividers, quotes, hero banners and social posts.

## Tokens and assets

Link `styles.css`. It imports `tokens/colors.css` (`--purple-50…900` with 600 as the accent, `--neutral-0…900`, `--mauve-*`, semantic `--surface-*`, `--text-*`, `--border-*`, `--accent*`), `typography.css`, `spacing.css` (spacing, radius, shadow, motion), `base.css` and `fonts.css`. ABC Arizona is licensed and not in Git: install the cuts from the [HubSpot asset index](../hubspot-assets.md).

## Sources and implementation decisions

Source: *OptiLift_Lumenis-brand guidelines_E2-web.pdf*, PDF pages 26–30: ray shapes, white/purple treatments, 4px digital strokes, 1–4pt print strokes, combinations and incorrect usages. Page 22 describes the Sunset photographic style. The source PDF stays in the approved external brand library.

Repository reviewer: Nicholas Olsen. The corner/off-frame placement convention, content exclusion zones, omission on dense layouts, optional maximum 15% background-ray opacity, ban on simulated sky gradients and flush-crop rule are repository implementation guidance adopted in this change, not verbatim brand-book requirements. Purple and lavender background permission follows Nicholas's explicit direction on 2026-10-26 and supersedes the former blanket restriction on large purple fills. Existing purple tints are UI derivations, not newly certified brand colours. Future changes to source-derived brand requirements should be checked with the product brand/design owner.
