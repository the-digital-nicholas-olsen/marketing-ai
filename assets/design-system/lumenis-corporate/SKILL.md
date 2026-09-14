---
name: lumenis-corporate-design
description: Use this skill to generate well-branded interfaces and assets for the Lumenis corporate (master) brand — corporate decks, website and landing pages, social posts, print, events, recruitment and any communication that speaks as Lumenis the company. One of three separate Lumenis brand systems (Lumenis Corporate, OptiLIGHT, OptiLIFT); use it when Lumenis Corporate is requested. Contains the 2026 brand guidelines distilled into rules, tokens, fonts, logos, the Hero L, brand line icons, cleared imagery, components and UI kits.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

**Scope.** This is the **Lumenis Corporate** brand system — one of three separate Lumenis brand
systems (Lumenis Corporate, OptiLIGHT, OptiLIFT), each a complete brand book for a different
purpose. Use it when Lumenis Corporate is requested or the work speaks as Lumenis the company.
It is complete on its own: don't mix in rules, tokens, motifs or components from the OptiLIGHT
or OptiLIFT systems, and don't treat their different choices as conflicts. The secondary
palette in README.md lists each product's signature colour as the corporate brandbook defines it for
corporate materials — it is part of this system, not an import of those product systems.

## Non-negotiables
- **Black + white is the primary palette.** Every piece of Lumenis communication uses it.
  Light grey `#f2f2f2` is only for product/people photo grounds.
- **Secondary (sub-brand) colors are sparing:** up to ~20% of a format, and **only one
  secondary color visible at a time** (a scrolling web page may use up to three, separately).
  Never place two secondaries side by side, never use one as the main visual, never use a
  color outside its sub-brand context in sub-brand material.
- **Type is ABC Arizona.** Arizona **Sans Regular** for everything; Arizona **Mix Regular**
  only to highlight 1–2 words in an uppercase title; never set a stand-alone line in Mix.
  No other weights stand alone. Optical kerning, **0 tracking**. Arial only where Arizona is
  unavailable (email, invoices, letterhead body).
- **Titles are ALL CAPS**, leading 88–92%, as big as can be. Subtitles, paragraphs and forms
  are sentence case; captions/specs and buttons are all caps.
- **Two title treatments — never both in one composition:** Option A = the **Hero L**
  replaces the letter L in 1–2 words (`UNVEI<HeroL/> THE BEST IN YOU`); Option B = Arizona
  **Mix** on 1–2 words (`EXPRESS YOUR <Mix>INNER BEAUTY.</Mix>`). Never repeat the Hero L in a
  sentence, never use Mix/Hero L in lowercase.
- **Alignment:** paragraphs and their headlines always left-aligned. Big titles left *or*
  right — never both in one layout. Center only for a short stand-alone headline.
- **The wordmark is untouchable:** black or white only; no recoloring, effects, respacing,
  distortion or image fills. Clear space = the wordmark's full height. Minimum 50px wide on
  screen / 1.5cm print. Trademark as `LUMENIS™` (superscript).
- **CTA buttons are rectangular** (square corners), Arizona Sans Regular, all caps, in the
  primary colors (black; white on black). A sub-brand color only in that sub-brand's context.
  Keep at least one button height between the headline and the CTA.
- **Split layout is the base format:** space split horizontally or vertically; type pane
  white/grey/one secondary color; wordmark bottom-left, `©YEAR` bottom-right.
- **Social: 1080×1080, 6×6 grid, 56px margins**, wordmark 2 columns wide or Hero L 1 row tall
  in a corner. Min sizes on the 1080 artboard: headline 52pt caps, body 40pt, caption 24pt caps.
  Never put type over a visually busy photo, never put bullets in boxes.
- **Icons are the brand's 10 line illustrations** (`assets/icons/`, `<Icon/>`): uniform 1pt
  stroke small / 2pt large; never fill, distort or vary line widths.
- **Imagery:** refined, warm, sleek. Commissioned photography hits all four principles
  (Sublime technology · An open dialogue · Plug and play · Dare to imagine); stock hits at least
  two. Products on `#f2f2f2`. Use cleared, HubSpot-hosted images from the image library (`../../image-library/`) and
  check `allowedBrands`. Fonts are not in Git — install ABC Arizona locally.
- **Default to light grounds — not dark.** House preference (leadership review, Sept 2026):
  white / light-grey heroes, pages and slide grounds. A black block is a deliberate contrast
  beat — at most one per piece (a footer counts), never the hero.
- **No emoji. No gradients** (except inside a sub-brand that defines one, e.g. NuEra).

## Shipping this to HubSpot

This skill covers **how it looks**. Page building, forms, publishing and verification follow the
repository's page implementation and forms references
(`.agents/skills/lumenis-accelerate-campaign/references/pages.md` and `forms.md`). Read both; neither
replaces the other.

Page photography comes from the image library (`assets/image-library/`); use only assets whose
`allowedBrands` includes `Lumenis corporate`.
