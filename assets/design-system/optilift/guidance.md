---
name: optilift-design
description: The standalone OptiLIFT brand system — colour, type, surfaces, imagery and logo rules for OptiLIFT marketing. Use when OptiLIFT is requested or the piece is about OptiLIFT. Complete on its own; never combine it with the Lumenis Corporate or OptiLIGHT systems.
---

# OptiLIFT — brand system

One of three separate Lumenis brand systems (Lumenis Corporate, OptiLIGHT, OptiLIFT), each a complete brand book for a different purpose. Everything OptiLIFT work needs is in this folder: these rules, the [reference](reference.md), `styles.css` and `tokens/`, logos in `assets/logo/` and specimen cards in `guidelines/`. It does not inherit from or defer to the other systems, and their different choices are not conflicts.

## Non-negotiables

- **H1 is UPPERCASE** — page heroes and deck/slide titles. H2/H3 subheads, body and buttons are sentence case; eyebrows are letter-spaced uppercase at a small size. (Gamma applies one transform to the whole heading scale, so H1–H4 all render uppercase there; set a line as body text if it must stay sentence case.)
- **Colour a few words.** Neither ABC Arizona cut available here has a bold weight, so emphasis comes from colour: the operative phrase in a headline, key terms or figures in body, eyebrows, links and table header rows. **Violet `#6F20D2` is the one accent** (~7.5:1 on white, so it works at body size and for links). One to four words per highlight; never a large fill.
- **Product spelling:** `OptiLIFT`. The sibling product is written `OptiLIGHT`. Never `OptiLight` or `Optilight`.
- **Light grounds by default** (leadership review, September 2026): white or off-white heroes, pages and slide grounds; product renders and photography on white or the light neutral. A near-black inverse section is the exception — at most once per piece, never the hero. Where light and dark versions of an asset exist, ship the light one.
- **Logos:** use the supplied lockups in `assets/logo/`. Preserve artwork, proportions, clear space and the "by Lumenis" endorsement; never redraw the wordmark.
- **Voice:** confident, clinical-premium, reassuring. No hype, no exclamation points, no emoji.

## Visual foundations

- **Colour:** near-black ink `#161413` and white carry almost all weight; violet is used sparingly for CTAs, links and small highlights. Neutrals lean warm/greige (`--neutral-*`), matching mauve-toned photography backdrops (`--mauve-500`).
- **Type:** ABC Arizona Mix (serif) for headlines and pull-quotes, set large and tight, with italic for softer sub-headlines. ABC Arizona Sans Light is the default body weight; Regular for UI and navigation.
- **Spacing:** 4px base scale to 128px; sections breathe with 64–96px of padding.
- **Surfaces:** 1px light-neutral hairlines; radius 4px by default, 8px for cards, pill for buttons, badges and tags; a soft, low-contrast card shadow (`--shadow-card`). No hard or inner shadows, no border-left accent bars. One translucent, blurred sticky header is the only use of blur.
- **Motion and states:** 200ms standard ease; buttons and links darken slightly on hover; selected tabs/tags get a full fill or underline. No bounce.
- **Photography:** warm greige-backdrop studio portraits of patients, and clean neutral-grey or black-background product renders. Bright, clean, true-to-life; no grading or grain.
- **Sunburst motif:** the violet ray mark that forms the dot of the "i" in the wordmark, reused decoratively (`guidelines/brand-sunburst.card.html`). It is the one graphic device; there is no functional icon set. If UI work needs icons, use thin monochrome line icons and flag them as a substitution.

## Tokens and assets

Link `styles.css`. It imports `tokens/colors.css` (`--purple-50…900` with 600 as the accent, `--neutral-0…900`, `--mauve-*`, semantic `--surface-*`, `--text-*`, `--border-*`, `--accent*`), `typography.css`, `spacing.css` (spacing, radius, shadow, motion), `base.css` and `fonts.css`. ABC Arizona is licensed and not in Git: install the cuts from the [HubSpot asset index](../hubspot-assets.md).
