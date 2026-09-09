# OptiLIFT

Non-invasive, in-office optical energy device for facial and neck skin tightening/contouring — a premium capital device sold to aesthetic and dermatology practices, with matching patient-facing marketing materials. OptiLIFT is one of Lumenis' Vision-adjacent\* device lines; materials always tie back to the parent brand via a "by Lumenis" endorsement lockup.

_(Lumenis groups its product families as Aesthetics/Vision — see the root [BRAND_GUIDELINES.md](../brand-guidelines.md#company--product-context). OptiLIFT ships facial-contouring copy closer to Aesthetics positioning; treat it as its own line rather than assuming either family's defaults.)_

Read this file for what's specific to OptiLIFT. Everything not overridden here inherits from the root [SKILL.md](../shared-guidance.md) / [BRAND_GUIDELINES.md](../brand-guidelines.md) — casing rules, the split-layout system, motion, build/publish mechanics.

## Non-negotiables

- **Accent is violet `#6F20D2`** (`--lum-violet` in `tokens/colors.css`; scoped via `[data-subbrand="optilift"]` in `tokens/subbrands.css`). Sampled from the logo artwork, not confirmed against a printed swatch — see Caveats.
- **The sibling product is `OptiLIGHT`** — capital L-I-G-H-T, matching `OptiLIFT`. Never `OptiLight` or `Optilight`.
- **OptiLIGHT Blue `#578FFF`** is usable in combined OptiLIFT/OptiLIGHT material, but only at display sizes — it's ~3:1 contrast on white, below body-text minimums.
- Colored text (violet) is the emphasis mechanism, same as the root system's Arizona-has-no-bold rule — one to four words per highlight, never a large fill.

## Content fundamentals

- **Voice**: confident, clinical-premium, reassuring. Short declarative headlines ("Restore your natural lift"), softer explanatory copy underneath. No hype, no exclamation points, no emoji. Claims are grounded ("no downtime," "visible results") rather than superlative.
- **Person**: second person to the patient in headlines ("your," "you"); more descriptive third-person for provider/product copy ("OptiLIFT delivers…").
- **Vibe**: aspirational-clinical — closer to a dermatology practice than a consumer beauty brand.

## Visual foundations

- **Color**: near-black ink (`#161413`) and white carry almost all weight; violet is used sparingly for CTAs, links, and small highlights. Neutrals lean warm/greige (not cool grey) — matches the mauve-toned photography backdrops in the source stock photography. This warm-neutral direction is a genuine visual departure from the root system's cool `--lum-shine-grey`; treat it as OptiLIFT-specific, not a correction to the corporate default.
- **Type**: ABC Arizona Mix (serif) for headlines/pull-quotes, set large and tight, italic for softer sub-headlines. ABC Arizona Sans Light is the default body weight (airy, editorial feel) rather than Regular.
- **Photography**: two modes — warm greige-backdrop studio portraits of patients, and clean neutral-grey/black-background product renders (isolated cutouts). No color grading/grain — bright, clean, true-to-life.
- **Sunburst motif**: the accent stroke that forms the dot of the "i" in the wordmark, reused decoratively (see `products/OptiLIFT/guidelines/brand-optilift-sunburst.card.html`). This is the one recurring graphic device — no functional icon set exists in the source material.
- Otherwise inherits the root system's digital-surface radius/shadow tokens (`--radius-sm/md/lg`, `--shadow-sm/md/lg/accent` — see BRAND_GUIDELINES.md "Surfaces, borders, radii") and split-layout composition — no OptiLIFT-specific deviation there.

## In this repo

- `products/OptiLIFT/guidelines/brand-optilift-logo.card.html`, `-sublogo.card.html`, `-sunburst.card.html`, `-color.card.html` — migrated specimen cards. Photography is documented jointly with OptiLIGHT in `guidelines/brand-photography.card.html` (shared, stays at repo root).
- `products/OptiLIFT/assets/` — logo lockups (`logo/`, all 12 variants), product renders (`product/`), photography (`photography/`).
- `products/OptiLIFT/ui_kit/` — the OptiLIFT patient marketing site, built from this system's real components.
- **Not yet migrated**: OptiLIFT's own 10-step purple/neutral color ramps (`--purple-50…900`, `--neutral-0…900`) and semantic states (`--success`, `--error`) were deliberately **not** ported — those remain a real architecture mismatch (the root system has no ramp/semantic-state vocabulary) and were partly inferred rather than confirmed against real brand material. Its radius/shadow scale (`--radius-s/m/l`, `--shadow-card/raised`), however, is now superseded rather than skipped — the root system adopted its own digital radius/shadow tokens (see above), so there's nothing left to port on that front.

## Caveats (carried over from the original system, still unresolved)

1. **Colors were sampled from a rendered logo PNG**, not read from the actual print brand-guidelines PDF (it exceeded a 30MB transfer limit at generation time). Confirm `#6F20D2` and the warm-neutral direction against the real Pantone/CMYK swatches before treating them as final.
2. **No bold weight** exists for ABC Arizona Sans — only Light and Regular.
3. **No pre-existing OptiLIFT digital product or component library** was available when the standalone system was built — the component set and marketing-site UI kit are original constructions sized to the brand, not recreations of a real screen.
