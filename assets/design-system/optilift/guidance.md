---
name: optilift-design
description: Design overrides for OptiLIFT — where its visual treatment differs from the company-wide Lumenis design system. Use when creating or reviewing visuals for OptiLIFT. These values take precedence over the global `lumenis-design-system` skill for this product only. Do NOT use for other products.
---

# OptiLIFT — design overrides

Only what DIFFERS from the global design system; everything else inherits
from the root [SKILL.md](../shared-guidance.md).

## Non-negotiables

- **Accent is violet `#6F20D2`** (`--lum-violet` in `tokens/colors.css`;
  scoped via `[data-subbrand="optilift"]` in `tokens/subbrands.css`).
  Sampled from the logo artwork, not confirmed against a printed swatch —
  see this product's README Caveats.
- **The sibling product is `OptiLIGHT`** — capital L-I-G-H-T, matching
  `OptiLIFT`. Never `OptiLight` or `Optilight`.
- **OptiLIGHT Blue `#578FFF`** is usable in combined OptiLIFT/OptiLIGHT
  material, but only at display sizes — it's ~3:1 contrast on white, below
  body-text minimums.
- Colored text (violet) is the emphasis mechanism, same as the root
  system's Arizona-has-no-bold rule — one to four words per highlight,
  never a large fill.

## Visual foundations

- **Color**: near-black ink (`#161413`) and white carry almost all weight;
  violet is used sparingly for CTAs, links, and small highlights. Neutrals
  lean warm/greige (not cool grey) — matches the mauve-toned photography
  backdrops in the source stock photography. This warm-neutral direction
  is a genuine visual departure from the root system's cool
  `--lum-shine-grey`; treat it as OptiLIFT-specific, not a correction to
  the corporate default.
- **Type**: ABC Arizona Mix (serif) for headlines/pull-quotes, set large
  and tight, italic for softer sub-headlines. ABC Arizona Sans Light is
  the default body weight (airy, editorial feel) rather than Regular.
- **Photography**: two modes — warm greige-backdrop studio portraits of
  patients, and clean neutral-grey/black-background product renders
  (isolated cutouts). No color grading/grain — bright, clean, true-to-life.
- **Sunburst motif**: the accent stroke that forms the dot of the "i" in
  the wordmark, reused decoratively (see
  `products/OptiLIFT/guidelines/brand-optilift-sunburst.card.html`). This
  is the one recurring graphic device — no functional icon set exists in
  the source material.
- Otherwise inherits the root system's digital-surface radius/shadow
  tokens (`--radius-sm/md/lg`, `--shadow-sm/md/lg/accent`) and
  split-layout composition — no OptiLIFT-specific deviation there.

## How to use this

- Inherit global tokens; apply only the deltas listed here.
- Full brand voice, content rules, and file inventory: see this product's
  [README.md](reference.md).
