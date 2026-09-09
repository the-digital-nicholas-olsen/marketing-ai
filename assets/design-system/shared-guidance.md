---
name: lumenis-design-system
description: The company-wide Lumenis design system — color tokens, typography, spacing, and core component conventions. Use when creating or reviewing any visual output (landing pages, slides, graphics, UI), when a task asks about brand colors, fonts, or component styling, or when checking a design matches Lumenis standards. For product-specific visual rules that differ from the company default, use that product's design skill, which overrides these values.
user-invocable: true
---

# Lumenis design system

Global baseline. If a product-specific design skill is loaded, its overrides win — apply only the deltas it lists, inherit everything else from here.

## Product-specific overrides

- [OptiLIFT](optilift/reference.md) ([design skill](optilift/guidance.md)) — OptiLIFT (non-invasive facial/neck contouring): violet accent, sunburst motif.
- [OptiLIGHT](optilight/reference.md) ([design skill](optilight/guidance.md)) — OptiLIGHT (IPL dry-eye therapy): blue accent, the rays-of-light system, prism imagery.
- [triLIFT 2.0](https://github.com/laarnicayetano/lumenis-design-system/blob/c2c80240eb29ac5cf0573a5d3271792b5e16e8a4/products/triLIFT%202.0/README.md) ([design skill](https://github.com/laarnicayetano/lumenis-design-system/blob/c2c80240eb29ac5cf0573a5d3271792b5e16e8a4/products/triLIFT%202.0/SKILL.md)) — triLIFT 2.0 (non-invasive RF facial/muscle contouring): rose gold accent, triangle motif.
- [Stellar M22](https://github.com/laarnicayetano/lumenis-design-system/blob/c2c80240eb29ac5cf0573a5d3271792b5e16e8a4/products/Stellar%20M22/README.md) ([design skill](https://github.com/laarnicayetano/lumenis-design-system/blob/c2c80240eb29ac5cf0573a5d3271792b5e16e8a4/products/Stellar%20M22/SKILL.md)) — Stellar M22 (multi-application IPL/Nd:YAG aesthetic platform): silken rose accent, shine motif.

## Color

Primary palette is **black and white only** — it carries every corporate surface. `#F2F2F2` grey exists for one purpose: the backdrop behind product/people photography.

- `--lum-black #000000` / `--lum-white #ffffff` — text, surfaces, borders
- `--lum-shine-grey #404040` — device UI grey, muted text
- `--lum-image-grey #f2f2f2` — photography backdrop only, never a UI surface

**Accent = the ONE secondary colour visible at a time**, max ~20% of a format (up to 3 down a long scrollable page, one per section). Never two accents side by side. Each sub-brand's accent lives in a `[data-subbrand="…"]` scope in `tokens/subbrands.css` — Aesthetics and Vision products each have their own (e.g. turquoise for FoLix, blue for OptiLIGHT, red for LegendPro). Full list: `tokens/colors.css`.

## Typography

ABC Arizona (Dinamo) throughout — **not bundled in this repo** (licensed). `--font-sans` (Arizona Sans Regular) is the workhorse; `--font-mix` (Arizona Mix) highlights 1–2 words only, never a whole line. Falls back to Arial/Georgia if the fonts aren't installed — see BRAND_GUIDELINES.md "Fonts".

- Titles: ALL CAPS, "as big as can be", leading 88–92%, tracking 0
- Subtitle: 20–40% of title size, leading 106–116%
- Paragraph: 50–65% of subtitle, leading 120–130%
- Exactly one emphasis device per headline — Hero "L" _or_ Mix, never both
- **Neither Arizona cut ships a bold weight**, so emphasis comes from **colour**, not weight: the operative phrase in a headline, key terms/figures in body, eyebrows, links, or table header rows. One accent per composition, one to four words per highlight — never a large fill.
- **Gamma decks/slides**: the theme exposes only one heading-transform for the whole scale, so setting H1 uppercase makes H2–H4 uppercase too. This usually reads fine (Gamma's H4s are typically smart-layout labels, already brand-uppercase); if a card genuinely needs a sentence-case subhead, set that line as body text instead of forcing the heading style.

Full scale (sizes, weights, leading): `tokens/typography.css`.

## Spacing & layout

8px-ish scale: `--space-1 4px` … `--space-11 160px`. Page gutter `56px`, section gap `120px`. Everything derives from a **split**: format divides horizontally or vertically, type on one half, photography on the other. Type is left- _or_ right-aligned, never both in one composition. Full scale: `tokens/spacing.css`.

## Surfaces

Print/photography stays squared and flat (`--radius-none`, no shadow) — but digital UI deliberately departs from that: buttons, form controls, chips, and cards round softly (`--radius-sm/md/lg/pill`) and carry light diffuse shadows (`--shadow-sm/md/lg`), tinted from the corporate ink. `--shadow-accent` is a colored glow reserved for the one primary/accent CTA on screen — echoes the one-accent rule instead of breaking it. Use `Card` (`components/Content/Card/`) for a generic bordered/rounded surface. No blur/frosted-glass devices elsewhere — use a plain black scrim over photography for legibility. Full reasoning: `tokens/surfaces.css`.

## The five rules that break things if missed

1. Never mix ALL CAPS and sentence case within one headline or statement.
2. Never more than one accent colour on screen at once.
3. Never Arizona Mix for a whole sentence — highlight only, 1–2 words.
4. No emoji, anywhere, ever.
5. Never redistribute the Arizona font files — reference by family name only (see BRAND_GUIDELINES.md "Fonts").

## Depth (Claude Code / repo access)

- `BRAND_GUIDELINES.md` — full brand voice, content rules, imagery principles, trademark usage
- `tokens/` — all CSS custom properties (colors, typography, spacing, motion, surfaces, subbrands)
- `components/` — buttons, cards, forms, layout, navigation primitives
- `guidelines/*.tsx` — visual specimen cards (React source; built to `dist/guidelines/*.card.html`)
- `ui_kits/` — corporate website, social, slides, email starting points
