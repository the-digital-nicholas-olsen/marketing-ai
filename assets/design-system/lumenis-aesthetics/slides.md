# Slides

The 16:9 deck format, based on the 2027 Aesthetics AOP. Every number is a slide value on the 1920 × 1080 canvas and a `slide-*` token; slides never invent their own sizes. Build decks from the slide components (`SlideOpening`, `SlideChapter`, `SlideContent`, `SlideHeroNumber`, `SlideProfile`, `SlideProduct`, `SlideClosing`); the **SlidesKit** page shows them together.

## Grid and fixed frame

| Part | Value |
|---|---|
| Canvas | 1920 × 1080 (`slide-width`, `slide-height`), white ground |
| Side margin | 128 (`slide-margin`) |
| Text column | 973 wide (`slide-column`): x 128–1101 beside a right-hand photo, x 819–1792 beside a left-hand photo |
| Photo or color block | Always full bleed, top to bottom and to the edge: 733 (`slide-bleed-minor`, 38.2%) beside the text column, 1187 (`slide-bleed-major`, 61.8%) on the bookends; 86 (`slide-column-gap`) from the column |
| Tracker | Top 52 (`slide-tracker-top`) on the text column: chapter name 15 caps in dark grey, then one dash per chapter in its field color (current 28 long, others 12). No section name: the title says it |
| Title | 54 caps at 149 (`slide-title-top`), one or two lines; 34 to the content, always. No eyebrow above it |
| Closing line | Ends at 952 (`slide-content-bottom`) on the text column; a second line grows upward. Arrow in the chapter ink, one sentence in Arizona Mix at 36 |
| Footer | One line, 55 from the bottom (`slide-footer-bottom`): the black wordmark 89 wide (`slide-footer-logo`), the source note, the page number at the column's right edge; 14 in dark grey |
| Bookends | White wordmark 210 wide (`slide-bookend-logo`); wordmark and headline inset 89 from the block edges |

## Slide types

| Type | Component | Layout |
|---|---|---|
| Opening | `SlideOpening` | Photo at 61.8%; purple block at 38.2% with the white wordmark, a label, the promise in about four words at 88 and the date. The color band may run along the bottom edge |
| Chapter break | `SlideChapter` | Tracker; the chapter number at 220 in the chapter's field color, the chapter title at 88 with its question 21 beneath in dark grey, centered in the content area; photo at 38.2% |
| Content | `SlideContent` | Title, the lead 34 below it, then 55 to up to three points (number in the chapter ink and point at 36 on one baseline, supporting line at 28 beneath); photo at 38.2%; closing line |
| Hero number | `SlideHeroNumber` | Photo at 38.2% on the left, so the frame moves to the right-hand column; one figure at 220, one lead line, at most three numbers at 56 |
| Profile | `SlideProfile` | Portrait at 38.2% on the left; who she is, her name at 88, her words in serif, her numbers at 56. A persona is labeled as one |
| Product | `SlideProduct` | The product's own colors (`data-product`) replace the chapter pairing; the official logo leads the column, the promise at 88, the lead in dark grey, pills in the product field; photo at 38.2% |
| Closing | `SlideClosing` | Mirrors the opening: purple block at 38.2% with the wordmark and the line the room should remember; photo at 61.8% |

## Rules

- **One idea per slide.** One hero: a number, a photo or one line of display type. About 40 words at most; detail goes in the speaker notes (three bullets: takeaway, key note, why it matters).
- **Say it once.** The tracker names the chapter, the title names the slide. No eyebrows, section labels or captions that repeat either.
- **Photos bleed** at 38.2% beside the text column or 61.8% on the bookends. Nothing framed, floating or behind text.
- **Text stays on its column.** Tracker, title, content, closing line and footer share the column's left edge; nothing crosses into the photo.
- **No lines.** No hairlines, rules, dividers, borders or boxes. The tracker dashes are the only marks.
- **One footer** on every content slide, on the text side.
- **Type sizes never drift.** If text doesn't fit, cut words or split the slide.
- **One pairing per chapter,** in any order, kept for the whole chapter. Purple with white type is for the opening and closing only.
- **Don't:** dark slides, lines or boxes, framed photos, repeated labels, centered paragraphs, devices as the hero, or claims without clearance.

## With the Slides template

Decks made from Claude's Slides template take this system for their look. That template renders by its own rules, so check the first deck before relying on the layouts: nested absolutely positioned elements may flatten, colored spans take color only, and `white-space: pre` isn't kept.
