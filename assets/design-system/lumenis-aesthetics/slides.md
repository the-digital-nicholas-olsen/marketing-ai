# Slides

The 16:9 deck format, based on the 2027 Aesthetics AOP. Every number is a slide value on the 1920 × 1080 canvas and a `slide-*` token; slides never invent their own sizes. The slide components (below) are starting points, shown together on the **Slides** page. They are not a closed list: design each slide for its content, from the grid, frame, tokens and type scale.

## Grid and fixed frame

| Part | Value |
|---|---|
| Canvas | 1920 × 1080 (`slide-width`, `slide-height`), white ground |
| Side margin | 128 (`slide-margin`) |
| Text column | 973 wide (`slide-column`): x 128–1101 beside a right-hand photo, x 819–1792 beside a left-hand photo. Without a bleeding photo the content may run the full width, 1664 (x 128–1792), with running text kept to 973 for a comfortable measure |
| Bleeding photo or color block | Top to bottom and to the edge: 733 (`slide-bleed-minor`, 38.2%) beside the text column, 1187 (`slide-bleed-major`, 61.8%) on the opening and closing; 86 (`slide-column-gap`) from the column |
| Inset photo | Inside the margins, from the title top (149) to the content bottom (952), beside the 973 column with 89 between them; caption beneath in 14 grey |
| Tracker | Top 52 (`slide-tracker-top`) on the text column: chapter name 15 caps in dark grey, then one dash per chapter in its field color (current 28 long, others 12). No section name: the title says it |
| Title | 54 caps at 149 (`slide-title-top`), one or two lines; 34 to the content, always. No eyebrow above it |
| Closing line | Optional. Ends at 952 (`slide-content-bottom`) on the text column; a second line grows upward. Arrow in the chapter ink, one sentence in Arizona Mix at 36 |
| Footer | One line, 55 from the bottom (`slide-footer-bottom`): the black wordmark 89 wide (`slide-footer-logo`), or the product logo on a product deck, the source note, the page number at the right edge; 14 in dark grey |
| Opening and closing block | The chosen pairing's field (Rose Gold by default); wordmark 210 wide (`slide-block-logo`), black, or white on Silken Rose; wordmark and headline inset 89 from the block edges |

## Type

Set text with `Text` and a `role`, or the matching `aes-*` class.

| Role | Style | Face | Treatment |
|---|---|---|---|
| Label | `aes-label` 18 | Arizona Sans | Uppercase, letter-spaced, dark grey |
| Body | `aes-body` 28 | Arizona Sans | Dark grey |
| Lead line, quote, closing line | `aes-lead` 36 | Arizona Mix | Ink |
| Number | `aes-number` 56 | Arizona Sans Light | Ink, or the chapter color |
| Display (name, promise, opening and closing line) | `aes-display` 88 | Arizona Sans | Uppercase |
| Hero number | `aes-hero` 136 | Arizona Sans Light | Ink |
| Chapter number, single hero figure | `aes-chapter` 220 | Arizona Sans Light | The field color |
| Title | `aes-title` 54 | Arizona Sans | Uppercase |
| Tracker, footer, pill | `aes-tracker` 15, `aes-foot` 14, `aes-pill` 11 | Arizona Sans | Dark grey; tracker and pill uppercase |

Leading is 1.32 for body and 1.18 for serif lines. Spacing uses the README's gaps at their base sizes (8, 13, 21, 34, 55).

## Slide types

| Type | Component | Layout |
|---|---|---|
| Opening | `SlideOpening` | Photo at 61.8%; color block at 38.2% in the pairing's field, with the wordmark, a label, the promise in about four words at 88 and the date. The color band may run along the bottom edge |
| Chapter break | `SlideChapter` | Tracker; the chapter number at 220 in the chapter's field color, the chapter title at 88 with its question 21 beneath in dark grey, centered in the content area; photo at 38.2% |
| Content | `SlideContent` | Title, the lead 34 below it, then 55 to points (numbered) or bullets; photo bleeding at 38.2%; optional closing line |
| Text | `SlideText` | No photo. Title, lead and body across the full width; `columns: 2` splits the points or bullets into two columns |
| Inset photo | `SlideMedia` | Text column beside a photo set inside the margins rather than bleeding, with an optional caption. Use `photoFit: 'contain'` for product shots and clinical photos that must not be cropped; they sit on the product backdrop |
| Gallery | `SlideGallery` | Title and lead, then two to four images side by side across the full width, each with a label above (Before, After, a handpiece name) and a caption beneath |
| Cards | `SlideCards` | Title and lead, then two to four cards per row, up to two rows. Outline cards by default; one card may be filled to lead the eye |
| Hero number | `SlideHeroNumber` | Photo at 38.2% on the left, so the frame moves to the right-hand column; one figure at 220, one lead line, at most three numbers at 56 |
| Profile | `SlideProfile` | Portrait at 38.2% on the left; who she is, her name at 88, her words in serif, her numbers at 56. A persona is labeled as one |
| Product | `SlideProduct` | The product's own colors (`data-product`) replace the chapter pairing; the official logo leads the column, the promise at 88, the lead in dark grey, pills in the product field; photo at 38.2% |
| Blank | `SlideBlank` | Only the frame (tracker, title, footer) and a free content area 1664 wide, for layouts the other types don't cover |
| Closing | `SlideClosing` | Mirrors the opening: color block at 38.2% with the wordmark and the line the room should remember; photo at 61.8% |

## Beyond the slide types

Claude and designers have room to make the slide the content needs. A timeline can run horizontally across a blank slide; a comparison can be a table; a process can be a row of cards joined by rules; a calculation can stack down a color block. None of these needs its own slide type first. Build them from:

- the fixed frame: tracker, title at 149, footer, and the content area from 149 to 952 (`SlideBlank`, or `Slide` with your own parts)
- the grid: the 128 margins, the 973 column or the full 1664, the golden split, Fibonacci spacing
- the type scale and the two text colors, unchanged
- the parts below: cards, dividers, bullets, points, stats, pills, inset or bleeding photos, color blocks

Keep the frame where it is on every slide, so the deck still reads as one piece. A new layout that recurs across decks can be proposed as a slide type later.

## Slide components

The slide components live in the bundle (`window.LumenisAesthetics`) and are shown together on the **Slides** page rather than as separate cards. Every slide takes `scale` (default 0.4) for display size, and the frame props `chapters`, `current`, `source`, `page` and an optional `closing`.

| Component | You provide |
|---|---|
| `SlideOpening` | `pairing` (optional, Rose Gold by default), `label`, `promise` (about four words), `date`, `photo`/`photoAlt`, optional `band` (the Accelerate strip along the bottom edge) |
| `SlideChapter` | `number`, `title`, `question`, `photo`/`photoAlt` |
| `SlideContent` | `title`, `lead`, `points` or `bullets` (or your own children), `photo`/`photoAlt`, `photoSide` (`right` default, or `left`) |
| `SlideText` | `title`, `lead`, `points` or `bullets` (or children), `columns` (1 or 2), optional `product` |
| `SlideMedia` | `title`, `lead`, `points` or `bullets`, `photo`/`photoAlt`, `photoSide`, `photoFit` (`cover` or `contain`), `caption`, optional `product` |
| `SlideGallery` | `title`, `lead`, `images` (two to four: `src`, `alt`, `label`, `caption`, `fit`), optional `product` |
| `SlideCards` | `title`, `lead`, `cards` (`title`, `text`, `label`, `kind`: `outline`, `fill`, `secondary` or `soft`), `columns`, optional `product` |
| `SlideHeroNumber` | `title`, `figure`, `figureTone` (optional, `field`), `lead`, `stats` (up to three), `photo`/`photoAlt` |
| `SlideProfile` | `label`, `name`, `quote`, `stats`, `photo`/`photoAlt` |
| `SlideProduct` | `product`, `logoVariant` (optional), `promise`, `lead`, `pills`, `photo`/`photoAlt` |
| `SlideBlank` | `title` (optional), children placed in the content area |
| `SlideClosing` | `pairing` (optional), `line`, `lead`, `photo`/`photoAlt` |

The parts, for anything the types don't cover:

- `Slide`: the 1920 × 1080 canvas. Children, `pairing` or `product`.
- `SlideColumn`: the 973-wide text column, title and content 34 apart. `side` (`left`: x 128, `right`: x 819), `title`, `centered` (for chapter breaks), `gap`.
- `SlideBleed`: a full-height photo or color block to the slide edge. `side`, `width` (`minor` 733 beside the column, `major` 1187 on the opening and closing), `block` for a color block, `pairing`; usually a `Photo` inside.
- `Card`, `Divider`, `BulletList`, `PointList`, `Stat`, `Pill`: see the README.

Persona slides label the person as a persona; never present a real attendee as one.

## Rules

- **One idea per slide.** One hero: a number, a photo, one line of display type, or one clear group (a gallery, a row of cards). About 40 words is the aim; detail goes in the speaker notes.
- **Approved copy stays whole.** When the words are regulatory or otherwise approved, never cut or reword them to fit. Split the slide, widen to the full content width, or step body text down (24, then 22, never below 20 for reading text; footnotes 14).
- **Say it once.** The tracker names the chapter, the title names the slide. No eyebrows, section labels or captions that repeat either.
- **Photos bleed or sit inset.** A bleeding photo runs to the edge at 38.2% or 61.8%; an inset photo or gallery sits on the grid inside the margins. Never behind text, never with rounded corners or shadows. Clinical before and after photos are shown at a size their resolution holds, labeled Before and After, with patient eyes masked as in the source.
- **Text stays on its column.** Tracker, title, content, closing line and footer share the column's left edge; nothing crosses into a photo.
- **Separation is welcome.** 1px rules in the `rule` color may divide rows, columns, a timeline or a header from its content. Cards may be outlined (1px `rule`) or filled with the primary or secondary field to group an idea or break up a run of text slides. Keep them square, flat and on the grid; no heavy borders, shadows or decorative frames.
- **Bullets or points.** Use numbered points only when order or count matters; otherwise use bullets (the ✦ star, or a dot), so the deck doesn't read as one long numbered list.
- **Closing lines are optional.** Give a slide a closing line only when it needs a conclusion the title and content don't already make. A few per chapter at most; many slides need none.
- **Balance the colors.** Don't let the primary field (Rose Gold by default) fill every slide. Leave most slides white, use the secondary field (`field-secondary`: Silken Rose for Rose Gold and Stellar M22, each pairing and product sets its own) for some blocks and cards, and let photos carry color too. As a guide, about a third of slides carry a large primary-color block.
- **One footer** on every content slide, on the text side.
- **Type sizes come from the scale.** The scale is fixed; pick from it rather than inventing sizes.
- **One pairing per chapter,** in any order, kept for the whole chapter.
- **Don't:** dark slides, framed or rounded photos, repeated labels, centered paragraphs, unapproved claims, or one color on every slide.

## With the Slides template

Decks made from Claude's Slides template take this system for their look. That template renders by its own rules, so check the first deck before relying on the layouts: nested absolutely positioned elements may flatten, colored spans take color only, and `white-space: pre` isn't kept.
