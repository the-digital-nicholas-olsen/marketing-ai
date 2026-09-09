# Lumenis Brand Guidelines

The full brand voice, visual foundations, and content rules for **Lumenis** — a global medical-technology company building minimally invasive, energy-based solutions for the **Aesthetics** and **Vision** departments. Founded on 60+ years of laser, IPL and RF innovation; the brand positions itself as a _BeautyTech pioneer_: "empowering people by broadening the horizons of health and celebrating beauty that matters."

**New here?** See [README.md](https://github.com/laarnicayetano/lumenis-design-system/blob/c2c80240eb29ac5cf0573a5d3271792b5e16e8a4/README.md) for setup, local preview, and how to use this across Claude Code / Design / Desktop / claude.ai. This file is the detailed reference underneath that.

## Sources this system was built from

| Source                                                        | Notes                                                                                                                                                |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Lumenis Brand Guidelines 2026`                               | The authoritative source. Full extracted text kept at `research/brand-guidelines.txt`; page numbers cited throughout this file and in code comments. |
| `Lumenis Corp Full Logo/`, `Lumenis Corporate Branding/Logo/` | Wordmark + Hero "L" symbol, RGB/CMYK, SVG/PNG/PDF. Copied into `assets/`.                                                                            |
| ABC Arizona Sans / Arizona Mix OTFs (Dinamo)                  | Sans Regular + Light, Mix Regular + Italic. Licensed — **not** in this repo. See [Fonts](#fonts) below. Bold and Medium cuts are still outstanding.  |
| `Arial.ttf`                                                   | The sanctioned system fallback                                                                                                                       |
| https://lumenis.com/                                          | Live IA, product inventory, and real product copy.                                                                                                   |
| Instagram [@Lumenis](https://www.instagram.com/Lumenis/)      | Referenced for social tone;                                                                                                                          |

## Company & product context

Brand platform: purpose — _a leading tech company that empowers people by broadening the horizons of health and celebrating a beauty that matters_; ambition — _by 2027, be a market disruptor and category leader_; trajectory — **"Empowering you, your way."**

Two market-facing halves, each with its own product family and accent colour:

### Aesthetics

triLift (facial muscle stimulation), Stellar M22 / M22 (IPL platform), SPLENDOR X (hair removal), LightSheer QUATTRO, FoLix (hair loss), NuEra Tight (RF body), Legend Pro / Pro+ (RF micro-needling), ULTRApulse Alpha + AcuPulse (CO2), FemTouch (women's health), and the treatment brands PhotoFABULOUS, ResurFX, SmoothGlo, XPL.

### Vision

OptiLIGHT, OptiLIFT, OptiPLUS (dry eye), Digital Duet / Digital Trio / Selecta (SLT+YAG glaucoma), Smart532, Vision One, Array LaserLink (photocoagulators).

Audiences, in this order: **practitioners and clinic owners** (the primary customer — "your success is our mission"), **patients** (via satellite sites like trilift.me, TreatMyDryEye, Aesthetipedia), and **employees/investors**.

## Content fundamentals

**Voice.** Confident, warm, plain. Technology is a means, never the boast — every claim lands on what a practitioner or patient gets out of it. "We" for Lumenis, "you" for the reader ("Every decision and device at Lumenis centres on you and your ability to change people's lives"). Never "our users", never "clients" in patient-facing copy — _patients_, _practitioners_, _partners_.

**Headlines** are ALL CAPS, short, and declarative — 2–5 words per line, 1–4 lines. They are promises, not descriptions:

- UNVEIL THE BEST IN YOU
- LEADING TECHNOLOGIES FOR YOUR BODY
- OPEN YOURSELF. DISCOVER A NEW YOU.
- A BRIGHT SOLUTION FOR DRY EYES
- WOW RESULTS IN JUST ONE TREATMENT
- BEAUTYTECH FOR LIFE.
- EMPOWERING YOU, YOUR WAY

A full stop at the end of a headline is used deliberately for finality ("BEAUTYTECH FOR LIFE."), not consistently.

**Subheads and body** are sentence case, never caps, never Arizona Mix. Body copy is factual and specific: _"Stellar M22 is non-invasive treatment that helps you achieve clearer, healthier, and more fresh-looking skin."_ Claims carry numbers when they exist (88+ countries, 90k+ devices installed, 500+ clinical publications, 60+ years).

**Captions, kickers, specs, nav and buttons** are ALL CAPS: `NEW AGE OF DRY EYES SOLUTION`, `OUR PRODUCTS`, `DISCOVER MORE`, `READ MORE`, `DOWNLOAD KIT`, `VIEW ALL PRODUCTS`.

**Casing rule that matters most:** never mix all-caps and sentence case _within_ one headline or statement (p.72). Pick one per block.

**Emoji: no.** Not in product, not in email, not in social captions. The one social-media flourish is a hashtag, used sparingly and in camel case — `#CelebratingYou`.

**Trademarks.** `Lumenis™` on first mention in formal copy; product marks carry their own symbols — `Stellar M22™`, `NuEra™ Tight`, `LightSheer®`, `ULTRApulse®`, `BLEND X®`, `TriPollar®`, `OPT™`, `FocalRF®`.

**Tone by surface.** Practitioner surfaces lead with capability and evidence ("THE EXPERT TOOL TO ELEVATE YOUR PRACTICE"). Patient surfaces lead with feeling and reassurance ("READY TO FEEL GREAT ABOUT YOUR SKIN?"). Corporate surfaces lead with scale and legacy ("WHY LUMENIS · Over 60 years of industry leadership and innovation").

## Visual foundations

### Colour

The primary palette is _black and white only_ — it carries every corporate surface. Secondary colours belong to sub-brands and are strictly rationed: **one** secondary colour visible at a time, occupying **no more than ~20%** of a format; a scrollable digital page may use up to 3 down its length, one per section. Mixing two accents side by side is explicitly a misuse. `#F2F2F2` grey exists for one purpose only: the backdrop behind product and people photography. Tokens live in `tokens/colors.css`; each sub-brand's accent is a `[data-subbrand="…"]` scope in `tokens/subbrands.css` that rebinds `--accent`.

### Type

ABC Arizona (Dinamo) throughout. Arizona **Sans Regular** is the workhorse; Arizona **Mix** appears _only_ to highlight 1–2 words. Titles: all caps, "as big as can be", leading 88–92% of the font size, tracking 0, optical kerning. Subtitle 20–40% of title size, leading 106–116%. Paragraph 50–65% of subtitle, leading 120–130%. Exactly one emphasis device per headline — Hero "L" _or_ Mix — never both, never repeated. Bold/Medium cuts are permitted only for high-contrast social pairings, never standalone. Since neither Sans nor Mix ships a bold weight yet (see Caveats), **colour is the general-purpose emphasis mechanism** in the meantime: colour the operative phrase in a headline, key terms/figures in body copy, eyebrows, links, or table header rows — one accent per composition, one to four words per highlight, never a large fill.

### The Hero "L"

The wordmark's slanted serif L, promoted to an independent asset: dropped into a word in a headline, or used as a corner signature. One per message.

### Layout

Everything derives from a split: the format divides horizontally or vertically, type on one half (white, black, or one accent), photography on the other. Type is left- or right-aligned, never both in one composition; centring is reserved for a short standalone headline. Social formats are 1080×1080 on a 6×6 grid of 36 squares with 56px margins, the wordmark exactly 2 columns wide and the Hero "L" 1 row (or ½ row) tall, always in a corner.

### Imagery

Four principles: sublime technology, an open dialogue, plug and play, dare to imagine. People photography ranges from spontaneous and everyday to dreamy and conceptual, always refined and **warm** in cast. Product photography is sleek — full/half device shots, concrete part isolations, abstract close-ups, extreme detail — on white or `#F2F2F2`. Never place type over a visually loaded image.

### Surfaces, borders, radii

The printed guideline's rule is squared and flat (`--radius-none: 0` everywhere, no cards, no elevation) — that stays true for print/photography specimens and the inline text `HighlightBox`. **Digital surfaces deliberately depart from it**: buttons, form controls, chips/tags/badges, and content cards round softly (`--radius-sm` 6px on controls, `--radius-md` 10px on cards/image tiles, `--radius-lg` 18px on large panels, `--radius-pill` on tags/badges/switches) and carry light, diffuse, cool-neutral shadows (`--shadow-sm/md/lg`, tinted from the corporate ink, not an imported grey) rather than none at all — the flat/hairline print rule reads as too austere for an interactive website. The one accent-tied exception is `--shadow-accent`, a colored glow reserved for the single primary/accent CTA on screen, echoing the "one accent color at a time" rule. This is a considered policy choice, not an oversight — see `tokens/surfaces.css`'s own comment for the reasoning, and `Card` (`components/Content/Card/`) for the canonical bordered/rounded/shadowed surface. Transparency and blur are still not brand devices — for legibility over photography use a plain black scrim (`--scrim-image`), not a frosted capsule.

### Motion

Fades and slow reveals; no bounce, no spring, no parallax gimmicks. `--dur-fast 160ms` for state changes, `--dur-base 320ms` for entrances, `--ease-brand cubic-bezier(.22,1,.36,1)`. **Hover:** opacity to 60% (buttons) or an underline reveal (links) — never a colour shift. **Press:** opacity to 40%, no scale change. Flag: confirm with the brand team.

## Fonts

ABC Arizona (Sans + Mix) is a **licensed Dinamo typeface and is not distributed in this repo.** `assets/fonts/` and `uploads/` are gitignored — nothing under either path is ever committed. `tokens/fonts.css` declares the font families by name only; each `@font-face` rule tries an OS-installed copy first (`local(...)`), then a local file, and falls through cleanly to the system stack (`Arial`/`Georgia`) in `typography.css` if neither is present. Nothing breaks without the fonts — text renders in the fallback face.

Authorized users can download the four available cuts from the local [HubSpot asset index](hubspot-assets.md). Install them on the destination computer so the `local(...)` lookup in `tokens/fonts.css` can use them. Confirm that the intended desktop or web use is covered by the applicable Lumenis font license; never commit the binaries to Git.

## Iconography

The guidelines define a proprietary line-illustration set: clean, geometric, even-stroke outlines — **1pt at small scale** beside type, **2pt at large scale** as an expressive graphic element. Themes shown include Clinic, Customer, Treatment, After-Care. Rules: strokes are one consistent width, never varied, never distorted.

## Index

- `styles.css` — the single entry point consumers link. `@import` lines only.
- `tokens/`
- `assets/` global brand assets
  - `fonts/` is gitignored — see [Fonts](#fonts).
  - `logo/` global lumenis logos
  - `photography/` general stock photos to be used
- `components/` — one folder per component (`<Category>/<Name>/<Name>.tsx` + `<Name>.stories.tsx`), plus `index.js`/`index.d.ts` as the library barrel. A component that's used together with others (a form's fields, a page's header/footer) is shown that way in `ui_kits/`/`templates/`, not by giving it a second, group-level card — one card per component, one owner, nothing to keep in sync.
- `guidelines/*.card.html` — hand-authored static specimen/guideline cards (Colors, Type, Spacing, Brand). Per-component demos now live as Storybook stories instead of a `.card.html` per component.
- `ui_kits/` — `.jsx` sources, built to a standalone bundle per kit that needs one:
  - `corporate-website/` — click-through home, product detail (4 sub-brands), contact.
  - `social/` — four Instagram recipes on the 6×6 grid.
  - `slides/` — base slides for global brand.
  - `email/` — table-based template.
- `products/<Name>/` — specific to a product:
  - `README.md` product-specific overrides — accent, imagery, voice
  - `assets/` logos, product shots for a product
  - `guidelines/` its own `*.card.html` cards
  - `ui_kit/`
- `storybook-static/` — Storybook build output (gitignored). Published to GitHub Pages on push to `master`.
- `templates/`
  - `corporate-page/` — editable corporate page starting point (accent + product list are tweakable).
  - `slides/` — 7-slide 1920×1080 deck on the deck stage (keyboard nav, thumbnail rail, print to PDF).

## Intentional additions

The guidelines define brand assets and communication formats, not a UI component library. These primitives were added because the corporate site demonstrably uses them and a design system without them is unusable: **Prose** (the guidelines' paragraph/subtitle spec as a component), **TextLink** (nav and READ MORE links), **Icon** (wrapper for the substituted glyph set), **StatBlock** (the WHY LUMENIS proof band on lumenis.com), **SiteHeader**/**SiteFooter**, **ProductCard**, **InsightCard**, **Quote**, **TextField**, **NewsletterSignup** — all traced to guidelines p.58 or the live site.

## Caveats

- **Motion, hover and press** behaviours are proposed, not specified.
