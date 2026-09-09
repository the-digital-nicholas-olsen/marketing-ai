---
name: optilight-design
description: Design overrides for OptiLIGHT — where its visual treatment differs from the company-wide Lumenis design system. Use when creating or reviewing visuals for OptiLIGHT. These values take precedence over the global `lumenis-design-system` skill for this product only. Do NOT use for other products.
---

# OptiLIGHT — design overrides

Only what DIFFERS from the global design system; everything else inherits
from the root [SKILL.md](../shared-guidance.md).

## Non-negotiables

- **Palette is black + white + OptiLIGHT Blue `#578FFF`** only
  (`--lum-blue` in `tokens/colors.css`; scoped via
  `[data-subbrand="optilight"]` in `tokens/subbrands.css`). The rainbow
  **prism is an imagery effect, never a UI color** — don't use it as a
  fill, button, or text color.
- **`#578FFF` is ~3:1 contrast on white** — display sizes and fills only.
  Use OptiLIFT violet `#6F20D2` (~7.5:1) for colored text at body size and
  for links.
- **Rays of light** are the signature graphic system (see Visual
  foundations below) — the single most load-bearing visual idea in this
  brand. Never place rays over live text, form fields, calculator
  controls, or other reading-critical UI.
- **The product is `OptiLIGHT`** — capital L-I-G-H-T, matching
  `OptiLIFT`. Never `OptiLight`/`Optilight`, except in legacy asset
  filenames that already ship that way (e.g. `optilight-device-cart.png`
  — left alone, renaming breaks references).
- **OptiLIGHT™ and OPT™ carry the ™** in superscript on first/prominent
  use.

## Visual foundations

### Color

Structural pair is Lumenis Black `#000000` / White `#FFFFFF`; OptiLIGHT
Blue is the one brand color; `#F2F2F2` is the prescribed
product-photography background. Extended blue tints/neutrals for UI
surfaces are derivations, not printed brand colors — keep them quiet and
let blue/black/white lead.

### The "rays of light" graphic system

Thin straight lines ("rays") that **cross the entire format from a single
shared starting point**:

1. Stroke only · 2. Stroke + color fill · 3. Stroke + image fill · 4.
   Stroke + multiple images · 5. Stroke + background image.

- Digital stroke weight is always **4px**. Strokes are Lumenis White or
  OptiLIGHT Blue only.
- The wedge _between_ two rays fills with blue, white, or an image.
- A stroke crossing a blue fill turns white (and vice versa); a stroke
  over an image is white unless legibility forces blue.
- **At least 3 rays.** Avoid: rays that don't cross the full frame,
  mismatched start points, starting on the margin/edge, mismatched stroke
  widths.

### Imagery

Refined, warm, clean, **bright** — never cold, gritty, or heavily graded.
Three subjects: people (face close-ups, ≥1 eye visible, natural light,
optimistic, models ~30–50), nature/sky (bright skies or sunlit forests
with natural light rays), product (sleek renders on `#F2F2F2`, may bleed
off the edge). Signature treatment: a **colorful prism** rainbow glare
over one eye (people) or through the scene (nature), in _Screen_ blend
mode.

### Layout

Diagonal 40-unit construction (divide the format diagonally into 40 units
→ 1 unit = 1x = margin; inner area split into 6 columns). Otherwise
inherits the root system's split-layout composition, digital-surface
radius/shadow tokens (`--radius-sm/md/lg`, `--shadow-sm/md/lg/accent`),
and 8pt spacing scale — no OptiLIGHT-specific deviation there.

## Iconography

Near icon-free. The one logo-native element is the **"sun" mark** beside
the wordmark (also the logo's clear-space unit) — a logo element, not a
general-purpose icon; don't reuse it as a UI glyph. For UI work that
genuinely needs icons, this system used **Lucide** at 1.5px stroke as a
documented substitution (parallel to the root system's own Phosphor
substitution for corporate work) — flag it as a substitution if used, and
keep it minimal/monochrome.

## Assets

Use the [HubSpot asset index](../hubspot-assets.md) for the verified
OptiLIGHT full lockup and the four available ABC Arizona font cuts. Do not
redraw the wordmark or commit licensed font binaries to Git.

## How to use this

- Inherit global tokens; apply only the deltas listed here.
- Full brand voice, content rules, and file inventory: see this product's
  [README.md](reference.md).
