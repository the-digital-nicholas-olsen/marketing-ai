# Lumenis Corporate Design System

> **Repository copy.** This is the Lumenis Corporate brand system — one of three separate brand
> systems in [assets/design-system](../README.md) (Lumenis Corporate, OptiLIGHT, OptiLIFT), each a
> complete brand book for a different purpose. It was exported from Claude Design on 2026-09-14,
> built from the 2026 Lumenis brandbook, and replaces the retired upstream corporate baseline.
> Unlike the internal working copy, licensed ABC Arizona font files are **not** included (install
> them via [hubspot-assets.md](../hubspot-assets.md); `tokens/fonts.css` looks up installed fonts),
> and photographs are **linked to their cleared HubSpot-hosted copies** from the image library
> instead of being committed. The brandbook's own people and product reference photos stay in the
> internal working copy.

Design system for the **Lumenis corporate (master) brand** — the global energy-based medical
technology company for the Aesthetic and Vision markets. It turns the 2026 Lumenis brand
guidelines into rules an AI (or a person) can design with: tokens, fonts, logos, the Hero "L",
the brand line icons, cleared photography, React components, guideline specimen cards and
two UI kits.

It is one of three separate Lumenis brand systems — **Lumenis Corporate**, **OptiLIGHT** and
**OptiLIFT** — each a complete brand book for a different purpose. Use this one when Lumenis
Corporate is requested or the work speaks as *Lumenis* the company: corporate decks, the corporate
website and landing pages, events (Accelerate by Lumenis), recruitment, social, print and
stationery. It does not inherit from, override or constrain the product systems, and they do not
constrain it.

---

## Sources

Everything here comes from the Lumenis corporate brand guideline source files (`Corporate Brand Guidelines/01-Brand Guidelines/`, kept outside Git):

| Source | Used for |
|---|---|
| `00_Brandbook/Lumenis-brand guidelines_2026.pdf` (97 pp.) | All rules: foundations, logotype, typography, buttons, colors, imagery, illustration, communication & social formats, sub-brand overviews. Read in full. |
| `01_Logo/` | Wordmark (black/white SVG + PNG) and Logo Symbol = Hero L (black/white SVG + PNG) → `assets/logo/` |
| `02_Icons/Small/Lumenis_icons_illustrated_small.ai` | The 10 line illustrations, converted from vectors to SVG → `assets/icons/` |
| `03_Colors/Lumenis_Colors_02.pdf` | Primary + full secondary palette with CMYK / RGB / HEX / Pantone → `tokens/colors.css` |
| `06_Grids/`, `07_Mockups/`, `08_Links/` | Website, treatment card, presentation wall, posters, welcome pack, LinkedIn and layout mockups — reference for the UI kits and layout components |

Fonts (ABC Arizona Sans Regular/Light, ABC Arizona Mix Regular/Italic) are the same licensed
Dinamo files already used by the OptiLIFT system. In this repository, photography is referenced by its
HubSpot delivery URL from the [image library](../../image-library/README.md) (`allowedBrands:
Lumenis corporate`). The internal working copy also carries the brandbook's people and product
reference photographs, confirmed cleared by Nicholas Olsen on 2026-09-14.

## What's here

| Path | What it is |
|---|---|
| `SKILL.md` | Agent skill manifest + the non-negotiable rules. Read first. |
| `README.md` | This file — context, voice, visual foundations, index. |
| `styles.css` | Root stylesheet; imports everything in `tokens/`. |
| `tokens/` | `colors.css` (primary, secondary by sub-brand, neutrals, semantic, `[data-accent]` themes), `typography.css`, `spacing.css` (spacing, radius, elevation, social grid), `fonts.css`, `base.css` (+ `.lc-title`, `.lc-mix`, `.lc-box` helpers). |
| `assets/logo/` | `lumenis-wordmark-{black,white}.{svg,png}`, `lumenis-hero-l-{black,white}.{svg,png}` |
| `assets/icons/` | `crossover`, `burst`, `zigzag`, `wave`, `sparkle`, `rings`, `star`, `cross`, `lines`, `orbit` (stroke = `currentColor`) |
| (images) | Linked HubSpot-hosted image-library photos — no image files in Git |
| (fonts) | Not in Git — install ABC Arizona locally ([download links](../hubspot-assets.md)) |
| `components/core/` | `Button`, `Headline`, `HeroL`, `Mix`, `Subtitle`, `Caption`, `Logo`, `Icon`, `Card`, `Tag` |
| `components/forms/` | `Input`, `Textarea`, `Select`, `Checkbox`, `Radio` |
| `components/navigation/` | `NavBar`, `Tabs` |
| `components/layout/` | `SplitLayout` (communication format), `SocialPost` (1080 grid) |
| `guidelines/` | Specimen cards for the Design System pane (Brand, Colors, Type, Icons, Imagery, Layout, Spacing) |
| `ui_kits/corporate-website/` | Click-through corporate homepage |
| `ui_kits/communication-formats/` | A4 posters, social post templates, 16:9 slides |
| `_ds_bundle.js` | Generated plain-JS bundle (`window.LumenisCorporateDesignSystem`) used by preview cards |
| `build.py` | Regenerates `components/core/Icon.jsx` from the SVGs and rebuilds `_ds_bundle.js`. Run after editing components. |

---

## 1. Strategic foundations (brand voice source)

- **Purpose:** *A leading tech company that empowers people by broadening the horizons of
  health and celebrating a beauty that matters.* — we work in tech; we act as empowerer; we
  believe in advancing the frontier of health; we advocate for authentic beauty (inside and out).
- **Ambition (by 2027):** be a market disruptor and category leader — ultimately accelerating
  our business.
- **Trajectory:** *Empowering you, your way.*
- **Behaviours:** We innovate relentlessly · We aim high · We evolve and stay ahead · We take
  ownership · We make a meaningful impact · We empower people.
- **Boilerplate (from the trademark page):** "Lumenis develops life-changing, minimally
  invasive solutions for the Aesthetic and Vision markets. We create and commercialize
  innovative energy-based technologies that enable a variety of skin, body, and eye care
  treatments… We are BeautyTech pioneers, empowering people by broadening the horizons of health
  and celebrating beauty that matters."

## 2. Content fundamentals

- **Voice:** confident, optimistic, human. The brand lives in the tension between **tech and
  human** — precise technology language next to warm, empowering, self-expression language.
- **Signature lines in the guidelines:** *Unveil the best in you · Leading technologies for your
  body · Express your inner beauty · Open yourself. Discover a new you · Discover your inner
  world · Empowering you, your way · Beauty tech for life · Our focus is entirely on you.*
- **Person:** second person — "you", "your body", "your practice". Company voice is "we".
- **Casing:** headlines and titles ALL CAPS; subtitles, paragraphs, form labels, nav links
  sentence case; captions/specs, buttons and eyebrow labels all caps. In social, never mix all
  caps and sentence case inside one headline or statement.
- **Length:** terse headlines (often ending in a full stop: "UNVEIL THE BEST IN YOU."), one tight
  paragraph beneath.
- **Trademarks:** `LUMENIS™` / `Lumenis™` with superscript ™ where a mark notice is needed;
  keep sub-brand spellings exactly as the brandbook writes them (Stellar M22, triLift,
  LegendPro, NuEra Tight, ULTRApulse Alpha, AcuPulse, FemTouch, SPLENDOR X, LightSheer, FoLix,
  SmoothGLO, PhotoFABULOUS, ResurFX, OptiLIGHT, OptiPLUS, OptiLIFT, Digital Duet, Digital Trio).
- **Tone by surface** (carried over from the retired upstream corporate guide): practitioner
  surfaces lead with capability and evidence; patient surfaces lead with feeling and reassurance;
  corporate surfaces lead with scale and legacy.
- **Product marks** (as recorded from lumenis.com in that upstream guide — verify against current
  legal usage before publishing): Stellar M22™, NuEra™ Tight, LightSheer®, ULTRApulse®, BLEND X®,
  TriPollar®, OPT™, FocalRF®.
- **Claims:** keep medical and performance claims out of design mocks unless supplied by the user
  with approval; use clearly marked placeholders instead.
- **No emoji.**

## 3. Visual foundations

### Logotype
A clean, light sans-serif wordmark whose distinctive letter is a **custom slanted serif "L"**.
Positive (black) and negative (white) versions only. Safety zone = the full height of the
wordmark on all sides. Minimum size 50px wide on a 72dpi screen, 1.5cm in print. Misuse: no
shape changes, color, effects, letter-spacing changes, graphic alterations or image fills.

### The Hero "L"
The wordmark's L is an independent asset. Two uses: **integrated in the message** (it replaces an
L inside a headline, 1–2 words) and **as a signature** on selected touchpoints (in a corner;
on social 1 row or ½ row tall). `components/core/Typography.jsx → <HeroL/>` renders the exact
logo glyph at cap height.

### Color
- **Primary:** Lumenis Black `#000000` (CMYK 50 50 50 100 · Pantone Black C · RAL 9004) and
  Lumenis White `#ffffff` (RAL 9003). Used in all Lumenis communication.
- **Light Grey `#f2f2f2`** — backgrounds for product and people photography only.
- **Secondary palette** — one signature color per sub-brand, bright and energetic, maintaining
  chromatic harmony when combined on multi-product touchpoints (e.g. an exhibition stand):

  | Market | Color | HEX | Sub-brand |
  |---|---|---|---|
  | Aesthetic | Peach | `#FF5532` | NuEra Tight |
  | | Red | `#ED124A` | LegendPro |
  | | Rose Gold / Rose Gold Light | `#FABCAD` / `#FFD1CA` | triLift |
  | | Silken Rose / Soft Rose Beige / Rose Beige | `#BA6D81` / `#DEAA9B` / `#CF9684` | Stellar M22 |
  | | Dark Brown · Brown · Light Brown · Soft Brown · Pastel Brown | `#834436` `#A27369` `#C69275` `#E5C9A8` `#F2E3D4` | LightSheer, SPLENDOR X |
  | | Purple | `#6C62F9` | AcuPulse, FemTouch |
  | | Orchid Purple / Light Purple | `#D690FF` / `#BC9AFF` | ULTRApulse (Light Purple also FemTouch) |
  | | Turquoise (+ Organic Tone `#F9F0E8`) | `#00C0AF` | FoLix |
  | | Dark Blue / Light Blue | `#2B50A2` / `#61C3D9` | SmoothGLO, PhotoFABULOUS, ResurFX (Light Blue also Stellar) |
  | Vision | Blue | `#578FFF` | OptiLIGHT |
  | | OptiLIFT Purple | `#6F20D2` | OptiLIFT |
  | | Magenta | `#D23460` | OptiPLUS, OptiGLIDE |
  | | Green / Light Green | `#00A37B` / `#3DD47A` | Digital Trio / Digital Duet |

- **Usage in corporate materials:** black & white lead. Secondary colors help differentiate
  subjects, highlight key information or add depth — **sparingly, never the main visual, up to
  ~20% of the format**, and **one secondary color at a time**. Single-page print: one color.
  Multi-page print: different colors on different pages, in harmony. Scrollable digital page: up
  to 3 secondary colors, used separately along the page.
- **Usage in sub-brand materials:** that sub-brand's color can be more present.
- **Misuse:** a color not matching the sub-brand; mixing two secondaries in sub-brand material;
  two secondaries next to each other; illegible color on screen; placement not optimized for
  mobile; secondary color over 20% of the format.
- In code: set `data-accent="rose-gold"` (etc.) on a section to theme `--accent` /
  `--accent-contrast` for `Button variant="accent"`, `SplitLayout tone="accent"` and friends.

### Typography
- **ABC Arizona** (Dinamo, Swiss). **Sans Regular** is the main cut; **Mix Regular** is used
  only to highlight certain words.
- **Hierarchy (reference, scale to context):**
  | Level | Spec |
  |---|---|
  | Title | Sans + Hero L *or* Sans + Mix, all caps · 80px / 80px · as big as can be · leading 88–92% |
  | Subtitle | Sans Regular, no caps · 28 / 34.5px · 20–40% of title · leading 106–116% |
  | Paragraph | Sans Regular, no caps · 18 / 25px · 50–65% of subtitle · leading 120–130% |
  | Captions & specs | Sans Regular, all caps · 75–80% of paragraph · leading 114% |
  | Forms | Sans Regular, no caps · 16 / 22.4px |
  | Buttons | Sans Regular, all caps · 18px · leading 90–100% · metric kerning · 0 tracking |
- **Headline rules:** 1 line → Hero L in 1–2 words, or all Sans (never Mix alone). 2–3 lines →
  Hero L in 1–2 words *or* Mix on 1–2 words, never both. 4+ lines → all Sans is fine; Hero L in
  1–2 words at most, never repeated. Extended (web) layouts → Sans + Mix only in the main
  headline, no Mix where there are multiple headline sections, subheads never the same size as
  the page headline.
- **High-contrast highlighting (social & digital ads only, in small amounts):** Sans Regular + Mix
  Bold, or Sans Bold + Mix Regular; or Sans + a highlight **box**. Bold/Medium/Light cuts are only
  ever used in these pairings, never stand-alone.
- **Misuse:** center alignment (except a short stand-alone headline); mixed sizes in one headline;
  undefined weight pairings; Sans/Mix interplay in lowercase; mixing Option A and B; stand-alone
  Sans in any weight other than Regular.
- **System & markets:** Arial Regular when Arizona is unavailable (emails, invoices, letterhead
  body). Noto Sans Hebrew for the Israeli market. Noto Sans CJK TC and Noto Serif SC for the
  Chinese market.

### Buttons
Rectangular, square-cornered blocks; Arizona Sans Regular all caps. Black on light grounds,
white on black grounds; sub-brand colors (with white text) only in sub-brand context. Clear space
around a CTA is defined by the type's x-height (≈2× x-height padding); the minimum distance
between the main text and the CTA is one button height.

### Imagery
Four principles — **Sublime technology** (curated, refined, products as objects of desire),
**An open dialogue** (warm, emotional connection), **Plug and play** (sleek products and
details suggesting seamless interaction), **Dare to imagine** (visionary imagery of benefits).
Commissioned photography follows all four; stock follows at least two.
- **People:** from spontaneous, everyday contexts to dreamy, conceptual themes — refined and warm.
- **Products:** from everyday product shots to evocative close-ups and details — sleek and
  refined, presented on light grey `#f2f2f2`.
- **Social crops:** full/half product; isolate one concrete part; isolate one abstract part;
  product close-up; extreme detail close-up.

### Illustration & icons
A set of 10 thin line illustrations ("clean and essential", conveying tech and beauty), used
alongside type — mainly on B2C touchpoints and social. Two scales: **small** next to type
(1pt stroke) and **large**, enlarged as a graphic element (2pt stroke). Misuse: varying line
widths, incorrect thickness, distorted shapes. The mockups also use large repeated arcs/ellipses
and thin straight lines crossing a format as graphic devices — build these from the `rings`,
`orbit` and `lines` icons at large scale.

### Layout & formats
- **Communication formats** flex from *functional* to *inspirational*. The **split layout** is
  the base: space split horizontally or vertically, background white or injected with one accent.
  Headline top-left, wordmark bottom-left, © year bottom-right.
- **Social:** 1080×1080 px, 6 columns × 6 rows (36 squares), 56px margins. Wordmark 2 columns
  wide; Hero L 1 row (or ½ row) tall; both may face each other in diagonal corners. Typography
  templates: big paragraph text; long headline + bullets; caption + statement; huge title; big
  title + small paragraph. Minimums: headline 52pt caps, subheadline/body 40pt, caption 24pt caps.
  Color uses: split background · visual element stroke · subtitle text highlight · small icon
  stroke · full background.
- **Social don'ts:** Hero L more than once in a sentence; mixing caps and sentence case in a
  headline; type over visually loaded images; bullets inside boxes; paragraph + logo + icon all
  centered; Mix across a whole sentence or sentence-case headlines.

### Surfaces, depth & motion (UI derivations)
- **Corners:** square (`--radius-none`). The brand is architectural: full-bleed blocks, rectangular
  CTAs. A pill is only for tiny utilities (language switch, step counters).
- **Borders & shadows:** 1px hairlines in neutral grey; the only shadow is a soft, diffuse
  `--shadow-soft` for a card floating over a color block (as on the treatment card).
- **Ground:** light by default (house preference, Sept 2026) — white or light grey heroes and
  slides; black blocks are a single contrast beat per piece.
- **Motion:** calm; 120–200ms standard ease for hover/tab states; a slow marquee of headline words
  and small icons is used on the website concept (respect `prefers-reduced-motion`). No bounce.
- **Transparency:** only a lightly frosted sticky header.

## 4. Components

| Component | Notes |
|---|---|
| `Button` | `primary` black · `inverse` white · `outline` · `accent` (sub-brand) · `text` link; sizes s/m/l; `href` renders a link |
| `Headline`, `HeroL`, `Mix`, `Subtitle`, `Caption` | Brand type primitives enforcing caps/leading/tracking |
| `Logo` | `wordmark` or `hero-l`, `black`/`white` |
| `Icon` | The 10 brand line icons; `scale="small"` (1px) / `"large"` (2px) |
| `Card`, `Tag` | Square surfaces (`outline`, `muted`, `floating`), rectangular filter chips |
| `Input`, `Textarea`, `Select`, `Checkbox`, `Radio` | Forms at 16 / 22.4px, square fields |
| `NavBar`, `Tabs` | Site header with wordmark; quiet text tabs |
| `SplitLayout`, `SocialPost` | The brand's communication format and 1080 social grid |

All components are original constructions sized to the guidelines — the brand ships print/brand
collateral and concept mockups, not a coded component library.

## 5. UI kits
- **`ui_kits/corporate-website/`** — corporate homepage modeled on `07_Mockups/Lumenis_Website.ai`:
  frosted header, grey hero with Hero L headline, rose-gold marquee of words and icons, product
  tabs (Aesthetics / Vision), floating testimonial card over a rings graphic, What's New tabs,
  black footer with a working newsletter field. Testimonial and news copy are placeholders.
- **`ui_kits/communication-formats/`** — A4 split-layout posters, four 1080 social templates and
  two 16:9 slides.

## 6. Caveats — please help me iterate

1. **Bold / Medium cuts are not in the kit.** The brandbook allows Arizona Sans Bold and Mix Bold
   (and Light/Medium) only for high-contrast highlighting in social/digital ads. The system has
   Sans Regular/Light and Mix Regular/Italic only; the highlighting card simulates weight. The
   brandbook's own embedded fonts include several "Unlicensed Trial" cuts — confirm licensing with
   Dinamo before production use.
2. **Brandbook photography.** Confirmed cleared by Nicholas Olsen on 2026-09-14. Per repository
   rules the photo files are not committed here; they are in the internal working copy, and this
   copy links first-party HubSpot-hosted photography instead.
3. **Source inconsistencies I resolved:** Light Blue lists HEX `61C3D9` but RGB `82 198 216`
   (`#52C6D8`) — the HEX is used. The FemTouch page lists Light Purple as `#bc9lff` (typo for
   `#BC9AFF`). The Aesthetic page lists Stellar Peach Beige with Pantone 192 C (the LegendPro red's
   Pantone) — its HEX `#DEAA9B` and Pantone 7612 CP from the Stellar page are used. Page 95 is titled
   "Vision – OptiLift" but carries the Digital Duet description; OptiLIFT's color is taken from the
   Vision palette page. The brandbook lists OptiLIFT Purple in its Vision palette; take a piece's market grouping from its brief, not from any brand system.
4. **Mockups use colors outside the palette** (a lime green and a soft orange in the 2022 posters,
   welcome pack and presentation wall). They are treated as concept illustrations, not palette.
5. **No print grid values** could be read from `06_Grids/LUMENIS_Grid.ai` (the file has no
   drawable artwork when opened as PDF); only the social grid is specified numerically.
