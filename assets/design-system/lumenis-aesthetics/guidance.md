# Lumenis Aesthetics — guidance

The editorial system for Lumenis Aesthetics work that speaks for the division as a whole: decks, one-pagers, landing pages and social. It is one of the separate brand systems in [the design-system folder](../README.md). Use it whole, and don't mix it with Lumenis Corporate, OptiLIGHT or OptiLIFT. Background, tokens and file list: [reference.md](reference.md).

**Spirit:** Apple's discipline, Vogue's people, Rhode and SKIMS product pages, the joy of the Lumenis office wall. One idea per page, generous white space, real editorial photography, and color that carries meaning. Design every new element from the whole system instead of adding one on.

## 1. Proportion (golden ratio)

- **Canvas** 1920×1080 with 128px side margins.
- **One text column** 973px wide (61.8% of the 1664px content width). It sits at x 128–1101 beside a right-hand photo, or at x 819–1792 beside a left-hand photo. The photo bleeds on the other side, **86px** from the column.
- **Photos bleed** at 38.2% of the width (733px) on content pages and 61.8% (1187px) on the opening and closing pages, top to bottom and to the page edge. On the bookends the remaining 38.2% is a color block.
- **Fixed frame:** tracker at top 52; title at top 149; **34px** from the title to the content, always; content ends at 952; footer **55px** from the bottom.
- **Spacing** uses Fibonacci steps only: **8, 13, 21, 34, 55, 89, 144**.

### Proximity

Space shows what belongs together:

| Gap | Between |
|---|---|
| 8 | A point and its supporting line |
| 13 | A label and the text it labels; a number and its label |
| 21 | A display line and the serif line that completes it |
| 34 | Groups; the title and the content |
| 55 | A serif lead line and the body it introduces |

Never space a label farther from its text than from the next group. Leading stays tight (body 1.32, serif 1.18) so a wrapped line never reads as a new paragraph.

## 2. Type (ABC Arizona)

One scale. Sizes never drift: if text doesn't fit, cut words or split the page; never shrink the type.

| Role | Size | Face |
|---|---|---|
| Label | 18 | Arizona Sans, uppercase, 3.5px tracking, dark grey |
| Body | 28 | Arizona Sans, dark grey, leading 1.32 |
| Lead line, quote, so-what | 36 | Arizona Mix, leading 1.18 |
| Number | 56 | Arizona Sans Light |
| Display (name, promise, bookend line) | 88 | Arizona Sans, uppercase |
| Hero number | 136 | Arizona Sans Light |
| Chapter number, hero figure | 220 | Arizona Sans Light |

**Fixed frame:** tracker 15px uppercase; title 54px uppercase; footer 14px.

**Two text colors:** ink `#231F20` for what matters, dark grey `#575757` for what supports it. Color only from the chapter's pairing.

## 3. Color

- **Ground** white. Never a dark page or slide background.
- **Color pairings.** Each chapter takes one pairing. The field color carries large shapes (the chapter number, the tracker dash, a color field); the ink color carries small colored type and the so-what arrow. Never split a pairing, and never set field-color type on white below 56px. The pairings are a list of what is allowed, not a fixed color per chapter: choose them for the story at hand.

| Pairing | Field | Ink | Type on the field |
|---|---|---|---|
| Mint | `#6CC39B` | `#2F8A68` | Ink |
| Sky | `#7BC9ED` | `#316FAF` | Ink |
| Lavender | `#B5A7D1` | `#7079BA` | Ink |
| Rose Gold | `#FABCAD` | Silken Rose `#BA6D81` | Ink |
| Silken Rose | `#BA6D81` | `#8F4D61` | White |

- **Bookend:** Purple `#7079BA` with white type is the color block on the opening and closing pages, not a chapter pairing.
- **Pinks:** Rose Gold `#FABCAD` or Silken Rose `#BA6D81` only. Never Stellar Peach Beige `#DEAA9B`.
- **The Accelerate color band** (19 colors) appears at most once per piece, as the opening's signature: a strip along the bottom edge. Don't pick colors from it for other uses.
- **Product pages keep their own brand colors** (UltraPulse Alpha purples, FoLix turquoise and so on). See the quick reference in [reference.md](reference.md).

## 4. Components

- **Tracker:** the chapter name in dark grey, then one dash per chapter in its field color. The current dash is long. It sits on the text column's left edge.
- **Title:** 54px uppercase. The tracker names the chapter and the title names the page; no eyebrows, section labels or captions that repeat either.
- **So what:** every content page ends on one line: an arrow (→, or ↻ for a loop) in the chapter's ink, then one sentence in Arizona Mix at 36. Its bottom edge sits on the content bottom (952), so a second line grows upward and the space above the footer never changes. No box, fill or pill. Two lines at most.
- **Footer:** the black Lumenis wordmark (89px wide), the source note and the page number on one line, 14px dark grey, 55px from the bottom, on every content page. It sits on the text column, left-justified, so it never touches a photo.
- **Stat:** a number at 56 with its label 13 beneath. At most three per page beside a hero.
- **Chapter break:** the chapter number at 220 in the field color, then (21 below) the chapter title and its question as a lead line, centered vertically in the content area, with a bleeding photo.
- **Profile (people):** a portrait bleeding at 38.2%; on the text column, a label 13 above the name at 88, then the quote as a lead line and the stats 55 below it. A persona is labeled as one.
- **Product:** a skin or portrait photo bleeding beside the column, the official product logo on the text side, the promise at 88, and the product's own colors.
- **Pill:** one style for any tag or verdict: rounded, 11px uppercase, letter-spaced. Verdicts in color: deep blue `#316FAF` winning, light blue `#7BC9ED` watch, Silken Rose `#BA6D81` warning. In-chapter navigation uses pills on the tracker line, right-aligned to the column: the current one filled in the chapter's field, the others a soft tint of it.
- **No lines.** No hairlines, rules, dividers, borders or boxes. Group with space and type size. The tracker dashes are the only marks.

## 5. Icons and logos

- **Icons:** the 10 approved Lumenis line icons only, unaltered (`assets/icons/`). Black on white, white on color. Set them large, cropped by the edge of a color field, and never touching type. Never put a colored tile behind an icon on white. No invented motifs.
- **Logos:** official files only. The footer wordmark is black. On color, the symbol goes white and the wordmark black, except on the bookend block, where the wordmark is white (210px). A product's own guide wins over these rules: UltraPulse Alpha goes all white on color. Never put a logo on a photo.

## 6. Opening and closing pages

- **Opening:** a photo bleeding at 61.8% and the purple block at 38.2%, with the white wordmark at the top and, at the bottom, a label 13 above the promise at 88, then the date as a label 34 below.
- **Closing:** mirrors the opening: the purple block holds the line the room should remember at 88, and the closing lead line 21 below it.
- **Signature devices** borrowed from the Lumenis office wall (big white line icons crossing a color field, white caps on Silken Rose, the Accelerate color band as a strip along the bottom edge) belong on the cover, opening, ask and closing only, never on content pages.

**Range** (brand book pp. 62–63): layouts run from functional to inspirational, and photography from real and concrete to dreamy and abstract. Signature pages sit at the inspirational, dreamy end; content pages (practices, proof) at the functional, real end.

## 7. Photography

- **Aspirational:** warm studio portraits and sunlit people, at ease. Blush, peach or beige backdrops; bare shoulders; happy faces. Within one page or spread, keep to one tone group: warm, cool or neutral.
- **People, not devices.** No device as the hero of a division page.
- **Event photos** are for action shots only. Never present a real attendee as a persona.
- Use cleared, hosted images (see [reference.md](reference.md)). Licensed originals are never committed to this repository.

## 8. Words

One idea and one hero per page: a number, a photo or one line of display type. About 40 words at most. Detail goes in the speaker notes as three bullets (takeaway, key note, why it matters). Every figure carries a source note; label public data and Lumenis data on file separately.

## Before delivery

Check the piece against this system only:

- light ground, and one pairing per chapter
- pinks limited to Rose Gold and Silken Rose
- the fixed type scale, Fibonacci spacing and the 34px title gap
- photos bleeding, with text and footer kept on the text column
- no lines or boxes
- official logos and unaltered icons
- image rights, and claim context ([claims check](../../../.agents/skills/lumenis-claims-check/SKILL.md))
