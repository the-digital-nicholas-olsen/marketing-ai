# Lumenis Aesthetics — guidance

The editorial system for Lumenis Aesthetics work that speaks for the division as a whole: decks, one-pagers, landing pages and social. It is one of the separate brand systems in [the design-system folder](../README.md). Use it whole, and don't mix it with another system. Background, tokens and file list: [reference.md](reference.md).

These rules hold for every format. Sizes and positions belong to the format: the slide values are in the [slides UI kit](ui_kits/slides/index.html). A new format (a one-pager, a page, a social post) sets its own sizes from these rules and keeps them fixed across the piece.

**Spirit:** Apple's discipline, Vogue's people, Rhode and SKIMS product pages, the joy of the Lumenis office wall. One idea per page, generous white space, real editorial photography, and color that carries meaning. Design every new element from the whole system instead of adding one on.

## 1. Proportion

- **Golden ratio.** Every two-part layout splits **61.8 / 38.2**. Where text sits beside a photo or a color block, the text takes 61.8% of the content width and the image takes 38.2% of the format; on an opening or closing, the photo takes 61.8% and the color block 38.2%.
- **Spacing** uses Fibonacci steps only: **8, 13, 21, 34, 55, 89, 144**. Pick the margins and gaps for a format from these steps.
- **Photos bleed.** A photo or color block runs to the edges of the format on its side, never framed, floating or behind text. Text stays on its own column and never crosses into the photo.
- **Fixed frame.** Each format fixes where its recurring parts sit (tracker, title, content area, closing line, footer) and keeps them in the same place on every page of the piece.

### Proximity

Space shows what belongs together. From tightest to widest:

| Step | Between |
|---|---|
| 8 | A point and its supporting line |
| 13 | A label and the text it labels; a number and its label |
| 21 | A display line and the serif line that completes it |
| 34 | Groups; the title and the content |
| 55 | A serif lead line and the body it introduces |

These are the slide values. A smaller format may step each one down the sequence, but the order never changes. Never space a label farther from its text than from the next group. Keep leading tight (about 1.3 for body, 1.2 for serif lines) so a wrapped line never reads as a new paragraph.

## 2. Type (ABC Arizona)

One scale per format, with every role at a fixed size. Sizes never drift: if text doesn't fit, cut words or split the page; never shrink the type.

| Role | Face | Treatment |
|---|---|---|
| Label | Arizona Sans | Uppercase, letter-spaced, dark grey |
| Body | Arizona Sans | Dark grey |
| Lead line, quote, closing line | Arizona Mix | Ink |
| Number | Arizona Sans Light | Ink, or the chapter color |
| Display (name, promise, bookend line) | Arizona Sans | Uppercase |
| Hero number, chapter number | Arizona Sans Light | The largest size in the scale |
| Title | Arizona Sans | Uppercase |

Each step up the scale is roughly the golden ratio or a Fibonacci step larger. The slide sizes (label 18, body 28, lead 36, number 56, display 88, hero 136, chapter 220, title 54) are in the slides kit and in `tokens/typography.css`.

**Two text colors:** ink `#231F20` for what matters, dark grey `#575757` for what supports it. Never pure black. Color only from the chapter's pairing.

## 3. Color

- **Ground** white. Never a dark page or slide background.
- **Color pairings.** Each chapter or section takes one pairing. The field color carries large shapes (a chapter number, a tracker dash, a color field); the ink color carries small colored type and the closing-line arrow. Never split a pairing, and never set field-color type on white at body or label sizes. The pairings are a list of what is allowed, not a fixed color per chapter: choose them for the story at hand.

| Pairing | Field | Ink | Type on the field |
|---|---|---|---|
| Mint | `#6CC39B` | `#2F8A68` | Ink |
| Sky | `#7BC9ED` | `#316FAF` | Ink |
| Lavender | `#B5A7D1` | `#7079BA` | Ink |
| Rose Gold | `#FABCAD` | Silken Rose `#BA6D81` | Ink |
| Silken Rose | `#BA6D81` | `#8F4D61` | White |

- **Bookend:** Purple `#7079BA` with white type is the color block on the opening and closing, not a chapter pairing.
- **Pinks:** Rose Gold `#FABCAD` or Silken Rose `#BA6D81` only. Never Stellar Peach Beige `#DEAA9B`.
- **The Accelerate color band** (19 colors) appears at most once per piece, as the opening's signature: a strip along the bottom edge. Don't pick colors from it for other uses.
- **Product pages keep their own brand colors** in place of the chapter pairing, on that product's page or section only. Each product's colors, logos and rules are in its module under [products/](products/README.md).

## 4. Components

- **Tracker:** in multi-page pieces, the chapter name in dark grey, then one dash per chapter in its field color; the current dash is long. It sits at the top of the text column.
- **Title:** uppercase Sans. The tracker names the chapter and the title names the page; no eyebrows, section labels or captions that repeat either.
- **Closing line ("so what"):** every content page ends on one line: an arrow (→, or ↻ for a loop) in the chapter's ink, then one sentence in Arizona Mix at the lead size. It is anchored by its bottom edge to the end of the content area, so a second line grows upward. No box, fill or pill. Two lines at most.
- **Footer:** the small black Lumenis wordmark, the source note and the page number on one line in dark grey, at the same place on every content page. It sits on the text column, left-justified, so it never touches a photo.
- **Stat:** a number with its label one proximity step (13) beneath. At most three beside a hero.
- **Chapter break:** the chapter number at the hero size in the field color, then the chapter title and its question as a lead line, centered vertically in the content area, beside a bleeding photo.
- **Profile (people):** a portrait bleeding at 38.2%; on the text column, a label above the name at display size, then the quote as a lead line and the stats below it. A persona is labeled as one.
- **Product:** a skin or portrait photo bleeding beside the column, the official product logo leading the text column, the promise at display size, and the product's own colors. See [products/](products/README.md).
- **Pill:** one style for any tag or verdict: rounded, small uppercase, letter-spaced. Verdicts in color: deep blue `#316FAF` winning, light blue `#7BC9ED` watch, Silken Rose `#BA6D81` warning. In-chapter navigation uses pills on the tracker line, right-aligned to the column: the current one filled in the chapter's field, the others a soft tint of it.
- **No lines.** No hairlines, rules, dividers, borders or boxes. Group with space and type size. The tracker dashes are the only marks.

## 5. Icons and logos

- **Icons:** the 10 approved Lumenis line icons only, unaltered (`assets/icons/`). Black on white, white on color. Set them large, cropped by the edge of a color field, and never touching type. Never put a colored tile behind an icon on white. No invented motifs.
- **Logos:** official files only. The footer wordmark is black. On color, the symbol goes white and the wordmark black, except on the bookend block, where the wordmark is white. A product's own guide wins over these rules: UltraPulse Alpha goes all white on color. Never put a logo on a photo.

## 6. Opening and closing

- **Opening:** a photo bleeding at 61.8% and the purple block at 38.2%, with the white wordmark at the top of the block and, at its foot, a label above the promise at display size, then the date.
- **Closing:** mirrors the opening: the purple block holds the line the audience should remember at display size, with a closing lead line beneath it.
- **Signature devices** borrowed from the Lumenis office wall (big white line icons crossing a color field, white caps on Silken Rose, the Accelerate color band as a strip along the bottom edge) belong on the cover, opening, ask and closing only, never on content pages.

**Range** (brand book pp. 62–63): layouts run from functional to inspirational, and photography from real and concrete to dreamy and abstract. Signature pages sit at the inspirational, dreamy end; content pages (practices, proof) at the functional, real end.

## 7. Photography

- **Aspirational:** warm studio portraits and sunlit people, at ease. Blush, peach or beige backdrops; bare shoulders; happy faces. Within one page or spread, keep to one tone group: warm, cool or neutral.
- **People, not devices.** No device as the hero of a division page.
- **Event photos** are for action shots only. Never present a real attendee as a persona.
- Use cleared, hosted images (see [reference.md](reference.md)). Licensed originals are never committed to this repository.

## 8. Words

One idea and one hero per page: a number, a photo or one line of display type. About 40 words at most. In decks, detail goes in the speaker notes as three bullets (takeaway, key note, why it matters). Every figure carries a source note; label public data and Lumenis data on file separately.

## Before delivery

Check the piece against this system only:

- light ground, and one pairing per chapter
- pinks limited to Rose Gold and Silken Rose
- one fixed type scale and frame for the format, and Fibonacci spacing
- photos bleeding, with text and footer kept on the text column
- no lines or boxes
- official logos and unaltered icons
- image rights, and claim context ([claims check](../../../.agents/skills/lumenis-claims-check/SKILL.md))
