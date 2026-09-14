---
name: optilight-design
description: The standalone OptiLIGHT brand system — the black, white and OptiLIGHT Blue palette, the rays-of-light graphic system, prism imagery, type and surfaces for OptiLIGHT marketing. Use when OptiLIGHT is requested or the piece is about OptiLIGHT. Complete on its own; never combine it with the Lumenis Corporate or OptiLIFT systems.
---

# OptiLIGHT — brand system

One of three separate Lumenis brand systems (Lumenis Corporate, OptiLIGHT, OptiLIFT), each a complete brand book for a different purpose. Everything OptiLIGHT work needs is in this folder: these rules, the [reference](reference.md), `styles.css` and `tokens/`, and specimen cards in `guidelines/`. It does not inherit from or defer to the other systems, and their different choices are not conflicts.

## Non-negotiables

- **Palette is black + white + OptiLIGHT Blue `#578FFF`** (Pantone 2727 C), with `#F2F2F2` as the product-photography ground. Blue tints and neutrals in the tokens are UI derivations; keep them quiet. The rainbow **prism is an imagery effect, never a UI colour**.
- **Colour a few words.** Emphasis comes from colour, not weight: the operative phrase in a headline, key terms or figures, eyebrows, links, table header rows — one to four words per highlight. `#578FFF` is ~3:1 on white, so use it for display sizes and fills only; use **OptiLIGHT Deep Blue `#2F63D6`** (`--blue-700`, ~5.4:1) for coloured text at body size and for links.
- **Rays of light** are the signature graphic: straight 4px strokes from one shared origin, crossing the whole frame, at least three rays. Never place rays over live text, form fields, calculator controls or other reading-critical UI.
- **Type is ABC Arizona.** Two title treatments, never mixed in one composition: Option A, Arizona Sans with the serifed Mix "Hero L" inside the headline; Option B, headline lines alternating Sans and Mix. Paragraphs, captions and specs are Arizona Sans Regular. **H1 is UPPERCASE**; H2/H3 running subheads are sentence case; labels and eyebrows uppercase.
- **Product spelling:** `OptiLIGHT`, with OptiLIGHT™ and OPT™ carrying a superscript ™ on first or prominent use. Never `OptiLight`/`Optilight`, except in legacy asset filenames.
- **Light grounds by default** (leadership review, September 2026): white or product grey `#F2F2F2`; blue remains available as a full background block. Full-black sections are the exception — at most one per piece, never the hero. Ship the light version of an asset when both exist.
- Product-focused landing-page heroes use one clear primary product image unless a composite or lifestyle treatment is requested.
- **Voice:** warm, optimistic, premium-clinical. No emoji.

## Visual foundations

### The rays-of-light system

Thin straight lines that cross the entire format from a single shared starting point: 1. stroke only · 2. stroke + colour fill · 3. stroke + image fill · 4. stroke + multiple images · 5. stroke + background image. Digital stroke weight is always 4px (print 1–4pt by scale), in Lumenis White or OptiLIGHT Blue. The wedge between two rays fills with blue, white or an image. A stroke crossing a blue fill turns white (and vice versa); a stroke over an image is white unless legibility forces blue. Avoid rays that don't cross the full frame, different start points, starting on the margin or edge, and mismatched stroke widths.

### Imagery

Refined, warm, clean, bright — never cold, gritty or heavily graded. Four principles (at least two for stock, all four when commissioning): Sublime Technology, An Open Dialogue, Plug and Play, Dare to Imagine. Subjects: people (face close-ups, at least one eye visible, natural light, optimistic, models about 30–50), nature and sky (bright skies or sunlit forests with natural light rays), and product (sleek renders on `#F2F2F2`, parts may bleed off the edge). The signature treatment is a colourful prism glare over one eye or through the scene, in Screen blend mode.

### Layout, surfaces and motion

- **Grid:** divide the format diagonally into 40 equal units; 1 unit = 1x = the margin; split the inner area into 6 columns. Logo size is set by the Hero L height (1x). UI work uses an 8pt spacing scale.
- **Surfaces:** modest soft radii — 6px controls, 10px cards, 18px large panels, pill for chips — never pill-shaped cards. Cards are white with a hairline `#E3E6EC` border or a light diffuse shadow, not both heavy. The soft blue glow (`--shadow-blue`) is reserved for the primary blue CTA: blue background, white text, 6px radius.
- **Motion:** calm fades and short rises (12–16px), 140–480ms, ease-out; a ray can draw on. Blue elements darken one step on hover. No bounce or infinite decorative loops.

### Iconography

Near icon-free. The "sun" mark beside the wordmark is a logo element and the logo's clear-space unit, not a UI glyph. If UI work genuinely needs icons, use a thin monochrome line set (Lucide at 1.5px) and flag it as a substitution.

## Tokens and assets

Link `styles.css`, which imports `tokens/colors_and_type.css`: `--optilight-blue`, `--blue-50…700`, `--lumenis-black`, `--lumenis-white`, `--product-gray`, `--ink`/`--ink-2`/`--ink-3`, `--hairline`, `--prism`, the type scale (`--fs-*`, `--lh-*`), spacing, radii, shadows, motion and `--ray-stroke`. ABC Arizona is licensed and not in Git: install the cuts, and get the verified OptiLIGHT full lockup, from the [HubSpot asset index](../hubspot-assets.md). Do not redraw the wordmark.
