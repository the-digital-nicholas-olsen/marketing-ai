# OptiLIGHT

An IPL (Intense Pulsed Light) device — the first and only IPL FDA-cleared for the management of dry eye disease (DED/MGD), built on Lumenis' patented Optimal Pulse Technology (OPT™). Positioned both as a precise medical device for eye-care professionals and as an elegant, desirable aesthetic experience for patients. Brand idea: **"Establishing light as a healing energy."**

Read this file for what's specific to OptiLIGHT. Everything not overridden here inherits from the root [SKILL.md](../shared-guidance.md) / [BRAND_GUIDELINES.md](../brand-guidelines.md) — casing rules, the split-layout system, motion, build/publish mechanics.

## Non-negotiables

- **Palette is black + white + OptiLIGHT Blue `#578FFF`** only (`--lum-blue` in `tokens/colors.css`; scoped via `[data-subbrand="optilight"]` in `tokens/subbrands.css`). The rainbow **prism is an imagery effect, never a UI color** — don't use it as a fill, button, or text color.
- **`#578FFF` is ~3:1 contrast on white** — display sizes and fills only. Use OptiLIFT violet `#6F20D2` (~7.5:1) for colored text at body size and for links.
- **Rays of light** are the signature graphic system (see Visual foundations below) — the single most load-bearing visual idea in this brand. Never place rays over live text, form fields, calculator controls, or other reading-critical UI.
- **The product is `OptiLIGHT`** — capital L-I-G-H-T, matching `OptiLIFT`. Never `OptiLight`/`Optilight`, except in legacy asset filenames that already ship that way (e.g. `optilight-device-cart.png` — left alone, renaming breaks references).
- **OptiLIGHT™ and OPT™ carry the ™** in superscript on first/prominent use.

## Content fundamentals

- **Voice**: warm, optimistic, quietly premium — clinical credibility with human softness. Between a luxury-beauty brand and a medical device manufacturer, never fully either. "Healing energy," "relief," "elevation," "warmth," "innovation" — avoid fear-based/heavily clinical language in consumer copy.
- **Person**: addresses both the eye-care professional ("the procedure **you** want") and the patient ("the therapy **your patients** need") — know which you're writing for.
- **No emoji. Ever.**
- **Demand-generation pages** (customer-facing, speaking to eye-care professionals/practice owners): never reference internal workbooks, playbooks, sales-training guidance, talk tracks, or sales-team workflows in visible copy. Frame next steps around the customer's decision ("Request pricing," "Talk with a representative"), not internal phrasing ("sales flow," "ROI discussion").

## Visual foundations

### Color

Structural pair is Lumenis Black `#000000` / White `#FFFFFF`; OptiLIGHT Blue is the one brand color; `#F2F2F2` is the prescribed product-photography background. Extended blue tints/neutrals for UI surfaces are derivations, not printed brand colors — keep them quiet and let blue/black/white lead.

### The "rays of light" graphic system

Thin straight lines ("rays") that **cross the entire format from a single shared starting point**:

1. Stroke only · 2. Stroke + color fill · 3. Stroke + image fill · 4. Stroke + multiple images · 5. Stroke + background image.

- Digital stroke weight is always **4px**. Strokes are Lumenis White or OptiLIGHT Blue only.
- The wedge _between_ two rays fills with blue, white, or an image.
- A stroke crossing a blue fill turns white (and vice versa); a stroke over an image is white unless legibility forces blue.
- **At least 3 rays.** Avoid: rays that don't cross the full frame, mismatched start points, starting on the margin/edge, mismatched stroke widths.

### Imagery

Refined, warm, clean, **bright** — never cold, gritty, or heavily graded. Three subjects: people (face close-ups, ≥1 eye visible, natural light, optimistic, models ~30–50), nature/sky (bright skies or sunlit forests with natural light rays), product (sleek renders on `#F2F2F2`, may bleed off the edge). Signature treatment: a **colorful prism** rainbow glare over one eye (people) or through the scene (nature), in _Screen_ blend mode.

### Layout

Diagonal 40-unit construction (divide the format diagonally into 40 units → 1 unit = 1x = margin; inner area split into 6 columns). Otherwise inherits the root system's split-layout composition, digital-surface radius/shadow tokens (`--radius-sm/md/lg`, `--shadow-sm/md/lg/accent`), and 8pt spacing scale — no OptiLIGHT-specific deviation there. (OptiLIGHT's own `colors_and_type.css` radius/shadow scale, including the accent-tied `--shadow-blue` glow, was the direct inspiration for the root system's `--shadow-accent` — its own file already called it "not in the printed guideline, tuned to sit harmoniously," which held up.)

## Iconography

Near icon-free. The one logo-native element is the **"sun" mark** beside the wordmark (also the logo's clear-space unit) — a logo element, not a general-purpose icon; don't reuse it as a UI glyph. For UI work that genuinely needs icons, this system used **Lucide** at 1.5px stroke as a documented substitution (parallel to the root system's own Phosphor substitution for corporate work) — flag it as a substitution if used, and keep it minimal/monochrome.

## In this repo

- `tokens/subbrands.css` → `[data-subbrand="optilight"]`, `tokens/colors.css` → `--lum-blue`, `guidelines/colors-vision.tsx` already documents the accent alongside OptiLIFT's.
- `components/Brand/Rays/` — the rays-of-light system as a real shared component (not inline SVG), carrying the "never cross live text" masking rule (`clear="center"/"left"/"right"`).
- `products/OptiLIGHT/guidelines/brand-optilight-rays.card.html`, `-prism.card.html` — migrated specimen cards; `guidelines/brand-photography.card.html` (shared, stays at repo root) covers photography for both OptiLIFT and OptiLIGHT together.
- `assets/photography/` — prism-on-eye portraits, warm close-ups, nature/sky imagery (shared with OptiLIFT's photography, no per-subbrand split).
- `products/OptiLIGHT/assets/product/` — device renders (cart, tabletop, handpiece).
- `products/OptiLIGHT/ui_kit/` — the full 11-section marketing site, built from this system's real components.

## Shipping to HubSpot

The original standalone system pointed to a `../HubSpot Landing Pages/` skill as the authority on HubSpot-side mechanics — naming, page architecture, the shared image library, lead forms, and portal quirks (form fields added by double-click not drag; the forms API returns the _published_ form so it reads stale after edits; "Create new contacts for new email addresses" defaults **off**, silently dropping net-new leads). **That skill does not exist in this repo** and wasn't found elsewhere on this machine as of the migration. Until it's located or rebuilt, treat HubSpot build mechanics as undocumented here — the rules above under "Calculator/form specifics" are as far as this file goes.

## Caveats (carried over from the original system, still unresolved)

1. The primary brand-guidelines PDF (`optiLight_Lumenis-brand guidelines_H.pdf`, 50 pages) was the main source; a referenced companion (`Lumenis-brand guidelines_S.pdf`, for shared type/color rules) was never supplied.
2. Only `ABCArizonaMix-Regular.otf` was confirmed as the real display face at generation time — same font family as the root system, no separate license concern.
3. No pre-existing OptiLIGHT digital product or component library was available — treat any OptiLIGHT ui_kit as an original construction sized to the brand, not a recreation of a real screen, once one exists.
