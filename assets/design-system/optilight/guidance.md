---
name: optilight-design
description: The standalone OptiLIGHT brand system — the black, white and OptiLIGHT Blue palette, the rays-of-light graphic system, prism imagery, type and surfaces for OptiLIGHT marketing. Use when OptiLIGHT is requested or the piece is about OptiLIGHT. Complete on its own; never combine it with the Lumenis Corporate or OptiLIFT systems.
---

# OptiLIGHT — brand system

One of three separate Lumenis brand systems (Lumenis Corporate, OptiLIGHT, OptiLIFT), each a complete brand book for a different purpose. Everything OptiLIGHT work needs is in this folder: these rules, the [reference](reference.md), `styles.css` and `tokens/`, and specimen cards in `guidelines/`. It does not inherit from or defer to the other systems, and their different choices are not conflicts.

## Non-negotiables

- **Palette is black + white + OptiLIGHT Blue `#578FFF`** (Pantone 2727 C), with `#F2F2F2` as the product-photography ground. Blue tints and neutrals in the tokens are UI derivations; keep them quiet. The rainbow **prism is an imagery effect, never a UI colour**.
- **Colour a few words.** Emphasis comes from colour, not weight: the operative phrase in a headline, key terms or figures, eyebrows, links, table header rows — one to four words per highlight. `#578FFF` is ~3:1 on white, so use it for display sizes and fills only; use **OptiLIGHT Deep Blue `#2F63D6`** (`--blue-700`, ~5.4:1) for coloured text at body size and for links.
- **Rays of light** are the signature graphic: straight 4px strokes, at least three, that all start at one origin at a corner of the frame or outside it and fan out in the same direction, like light from one source. **Rays never intersect text**, numbers, charts, form fields, calculator controls or a photo's subject. No room for a clear fan: leave rays out (see The rays-of-light system).
- **No soft colour gradients.** Grounds are flat: white, product grey `#F2F2F2` or a flat OptiLIGHT Blue block. Glow comes from photography (sky, prism), never from CSS gradients, radial glows or tinted washes.
- **Cropped images sit flush.** A photo or cutout with a hard crop (a person cut at the chest, a device cut at the base) sits with that cut edge flush against the edge or corner of its container: the slide, card or page. Never float a hard-cropped edge in open space.
- **Type is ABC Arizona.** Two title treatments, never mixed in one composition: Option A, Arizona Sans with the serifed Mix "Hero L" inside the headline; Option B, headline lines alternating Sans and Mix. Paragraphs, captions and specs are Arizona Sans Regular. **H1 is UPPERCASE**; H2/H3 running subheads are sentence case; labels and eyebrows uppercase.
- **Product spelling:** `OptiLIGHT`, with OptiLIGHT™ and OPT™ carrying a superscript ™ on first or prominent use. Never `OptiLight`/`Optilight`, except in legacy asset filenames.
- **Light grounds by default** (leadership review, September 2026): white or product grey `#F2F2F2`; blue remains available as a full background block. Full-black sections are the exception — at most one per piece, never the hero. Ship the light version of an asset when both exist.
- Product-focused landing-page heroes use one clear primary product image unless a composite or lifestyle treatment is requested.
- **Voice:** warm, optimistic, premium-clinical. No emoji.

## Visual foundations

### The rays-of-light system

Source: OptiLIGHT brand book, “Illuminating rays of light,” PDF pages 27–31 (see Sources and implementation decisions). Thin straight lines from a single shared starting point: 1. stroke only · 2. stroke + colour fill · 3. stroke + image fill · 4. stroke + multiple images · 5. stroke + background image. Digital stroke weight is always 4px (print 1–4pt by scale), in Lumenis White or OptiLIGHT Blue. The wedge between two rays fills with blue, white or an image. A stroke crossing a blue fill turns white (and vice versa).

- **One origin, one direction.** Put the origin at a corner of the frame (usually a top corner) or outside the frame, so every ray travels the same way. Never start rays inside the layout or let lines from different directions meet mid-frame: a burst of crossing lines in the middle of content reads as shattered glass.
- **Plan the fan before the content.** Each ray runs from the origin to the frame edge through empty space only. Lay out text, cards, charts and the hero image outside the fan, or narrow the fan to fit the empty area.
- **Never intersect text.** No ray crosses a headline, body copy, labels, numbers, table cells, a chart or a form. A ray over a transparent card or a chart counts as crossing it; on a chart, a ray reads as a data line. A very light ray (15% opacity or less) may pass behind a wide area of open background, never behind words.
- **Images:** a cutout person or product may stand in front of the rays, so the rays read as light behind it. A ray never cuts across a face or the product.
- **Dense layouts get no rays.** Text-heavy slides, tables, forms and dashboards go without them. Use rays on covers, section dividers, quotes, hero banners and social posts.
- Avoid: rays that stop short of the frame edge, different start points, an origin sitting on the margin inside the content area, and mismatched stroke widths.

### Imagery

Refined, warm, clean, bright — never cold, gritty or heavily graded. Four principles (at least two for stock, all four when commissioning): Sublime Technology, An Open Dialogue, Plug and Play, Dare to Imagine. Subjects: people (face close-ups, at least one eye visible, natural light, optimistic, models about 30–50), nature and sky (bright skies or sunlit forests with natural light rays), and product (sleek renders on `#F2F2F2`, parts may bleed off the edge). The signature treatment is a colourful prism glare over one eye or through the scene, in Screen blend mode. The prism and sky glow are photographic; never imitate them with a CSS gradient or radial glow.

### Layout, surfaces and motion

- **Grid:** divide the format diagonally into 40 equal units; 1 unit = 1x = the margin; split the inner area into 6 columns. Logo size is set by the Hero L height (1x). UI work uses an 8pt spacing scale.
- **Surfaces:** modest soft radii — 6px controls, 10px cards, 18px large panels, pill for chips — never pill-shaped cards. Cards are white with a hairline `#E3E6EC` border or a light diffuse shadow, not both heavy. The soft blue glow (`--shadow-blue`) is reserved for the primary blue CTA: blue background, white text, 6px radius.
- **Motion:** calm fades and short rises (12–16px), 140–480ms, ease-out; a ray can draw on. Blue elements darken one step on hover. No bounce or infinite decorative loops.

### Iconography

Near icon-free. The "sun" mark beside the wordmark is a logo element and the logo's clear-space unit, not a UI glyph. If UI work genuinely needs icons, use a thin monochrome line set (Lucide at 1.5px) and flag it as a substitution.

## Tokens and assets

Link `styles.css`, which imports `tokens/colors_and_type.css`: `--optilight-blue`, `--blue-50…700`, `--lumenis-black`, `--lumenis-white`, `--product-gray`, `--ink`/`--ink-2`/`--ink-3`, `--hairline`, `--prism`, the type scale (`--fs-*`, `--lh-*`), spacing, radii, shadows, motion and `--ray-stroke`. ABC Arizona is licensed and not in Git: install the cuts, and get the verified OptiLIGHT full lockup, from the [HubSpot asset index](../hubspot-assets.md). Do not redraw the wordmark.

## Sources and implementation decisions

Source: *optiLight_Lumenis-brand guidelines_H.pdf*, PDF pages 27–31: ray shapes, white/blue treatments, 4px digital strokes, 1–4pt print strokes, combinations and incorrect usages. The source PDF stays in the approved external brand library.

Repository reviewer: Nicholas Olsen. The corner/off-frame placement convention, content exclusion zones, omission on dense layouts, optional maximum 15% background-ray opacity, ban on simulated sky/prism gradients and flush-crop rule are repository implementation guidance adopted in this change, not verbatim brand-book requirements. Future changes to source-derived brand requirements should be checked with the product brand/design owner.

The gradient in `guidelines/brand-prism.card.html` and the `--prism` token are illustrative colour swatches only. Do not copy them into production designs or use them to recreate photographic prism effects; use a cleared photographic asset.
