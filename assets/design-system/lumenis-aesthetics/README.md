The editorial system for Lumenis Aesthetics work that speaks for the division or its products: decks, one-pagers, landing pages and social. It is one of the separate brand systems in [the design-system folder](../README.md). Use it whole, and don't mix it with Lumenis Corporate, OptiLIGHT or OptiLIFT. If something you need isn't here, build it only from these tokens and components and say so; never take it from another system.

**Spirit:** Apple's discipline, Vogue's people, Rhode and SKIMS product pages, the joy of the Lumenis office wall. One idea per page, generous white space, real editorial photography, and color that carries meaning. Design every new element from the whole system instead of adding one on.

These rules hold for every format. Sizes and positions belong to the format: the slide values are the `slide-*` tokens and the [slides section](slides.md). A new format (a one-pager, a page, a social post) sets its own sizes from these rules and keeps them fixed across the piece.

## When to use it

| Piece | System |
|---|---|
| Speaks for the Aesthetics division, or covers several Aesthetics products | **Lumenis Aesthetics** |
| One Aesthetics product with a module (triLift 2.0, Stellar M22, SPLENDOR X, FoLix, UltraPulse Alpha) | **Lumenis Aesthetics**, with that product's theme and [module](products/README.md) |
| Speaks as Lumenis the company, covers both divisions, or is an Accelerate by Lumenis event | Lumenis Corporate |

Do not infer indications, claims or routing from the design examples. Take them from the brief, the regulatory do's and don'ts and the claims library, and run the claims check before delivery.

## 1. Proportion

- **Golden ratio.** Every two-part layout splits `golden-major` / `golden-minor` (61.8 / 38.2). Where text sits beside a photo or a color block, the text takes 61.8% of the content width and the image takes 38.2% of the format; on an opening or closing, the photo takes 61.8% and the color block 38.2%.
- **Spacing** uses Fibonacci steps only: `space-8`, `space-13`, `space-21`, `space-34`, `space-55`, `space-89`, `space-144`. Pick the margins and gaps for a format from these steps.
- **Photos bleed.** A photo or color block runs to the edges of the format on its side, never framed, floating or behind text (`radius-none`). Text stays on its own column and never crosses into the photo.
- **Fixed frame.** Each format fixes where its recurring parts sit (tracker, title, content area, closing line, footer) and keeps them in the same place on every page of the piece.

### Proximity

Space shows what belongs together. Use `Stack` with a gap name. From tightest to widest:

| Gap | Size | Between |
|---|---|---|
| `gap-tight` | 8 | A point and its supporting line |
| `gap-near` | 13 | A label and the text it labels; a number and its label |
| `gap-follow` | 21 | A display line and the serif line that completes it |
| `gap-apart` | 34 | Groups; the title and the content |
| `gap-section` | 55 | A serif lead line and the body it introduces |

These are the slide values. A smaller format may step each one down the sequence, but the order never changes. Never space a label farther from its text than from the next group. Keep leading tight (1.32 for body, 1.18 for serif lines) so a wrapped line never reads as a new paragraph.

## 2. Type (ABC Arizona)

One scale per format, with every role at a fixed size. Sizes never drift: if text doesn't fit, cut words or split the page; never shrink the type. Set text with `Text` and a `role`, or the matching `la-*` class.

| Role | Style | Face | Treatment |
|---|---|---|---|
| Label | `la-label` 18 | Arizona Sans | Uppercase, letter-spaced, dark grey |
| Body | `la-body` 28 | Arizona Sans | Dark grey |
| Lead line, quote, closing line | `la-lead` 36 | Arizona Mix | Ink |
| Number | `la-number` 56 | Arizona Sans Light | Ink, or the chapter color |
| Display (name, promise, bookend line) | `la-display` 88 | Arizona Sans | Uppercase |
| Hero number | `la-hero` 136 | Arizona Sans Light | Ink |
| Chapter number, single hero figure | `la-chapter` 220 | Arizona Sans Light | The field color |
| Title | `la-title` 54 | Arizona Sans | Uppercase |
| Tracker, footer, pill | `la-tracker` 15, `la-foot` 14, `la-pill` 11 | Arizona Sans | Dark grey; tracker and pill uppercase |

Each step up the scale is roughly the golden ratio or a Fibonacci step larger. The sizes above are the slide values.

**Two text colors:** `ink` `#231F20` (`text-primary`) for what matters, `grey-text` `#575757` (`text-secondary`) for what supports it. Never pure black. Color only from the chapter's pairing.

## 3. Color

- **Ground** `surface-page`, white. Never a dark page or slide background.
- **Color pairings.** Each chapter or section takes one pairing: set `data-pairing` on it, and `field`, `field-ink` and `on-field` follow. The field color carries large shapes (a chapter number, a tracker dash, a color field); the ink color carries small colored type and the closing-line arrow. Never split a pairing, and never set field-color type on white at body or label sizes. The pairings are a list of what is allowed, not a fixed color per chapter: choose them for the story at hand.

| Pairing (`data-pairing`) | Field | Ink | Type on the field |
|---|---|---|---|
| `mint` | `mint` `#6CC39B` | `mint-ink` `#2F8A68` | Ink |
| `sky` | `sky` `#7BC9ED` | `sky-ink` `#316FAF` | Ink |
| `lavender` | `lavender` `#B5A7D1` | `lavender-ink` `#7079BA` | Ink |
| `rose-gold` | `rose-gold` `#FABCAD` | `rose-gold-ink` (Silken Rose) `#BA6D81` | Ink |
| `silken-rose` | `silken-rose` `#BA6D81` | `silken-rose-ink` `#8F4D61` | White |

- **Contrast.** `mint-ink`, `lavender-ink` and `rose-gold-ink` fall below 4.5:1 on white, so colored type in them stays at 24px and up (the arrow, numbers). White on `silken-rose` (3.8:1) and on `bookend` (4.1:1) is for display, lead and the wordmark; 18px labels on the bookend fall short, as in the source.
- **Bookend:** `bookend` purple `#7079BA` with white type (`data-pairing="bookend"`) is the color block on the opening and closing, not a chapter pairing.
- **Pinks:** Rose Gold `#FABCAD` or Silken Rose `#BA6D81` only. Never Stellar Peach Beige `#DEAA9B`.
- **The Accelerate color band** (`band-1` to `band-19`, the `Band` component) appears at most once per piece, as the opening's signature: a strip along the bottom edge. Don't pick colors from it for other uses.
- **Verdicts:** `verdict-winning`, `verdict-watch`, `verdict-warning`, as pill fills only.

### Products inside the system

Each product with a module has a **theme**. On that product's own page or section, set `data-theme` to its id (`trilift`, `stellar-m22`, `splendor-x`, `folix`, `ultrapulse-alpha`): `field`, `field-ink`, `on-field` and `product-accent` switch to the product, in place of the chapter pairing. Grid, type, frame, spacing and voice stay Aesthetics. Don't put `data-pairing` and a product `data-theme` on the same element.

Every product color is also a **named token** in every theme (`trilift-rose-gold`, `folix-blue`, `splendor-dark-skin` and so on), for pieces that show several products. On a page that compares or lists products, the products README currently says to keep the chapter's Aesthetics pairing, set each product logo in its one-color version and not mix product colors on one page; whether the named product colors may appear together on one piece is still open for the Aesthetics team to confirm. Each product's colors, logos and rules are in its [module](products/README.md).

## 4. Components

Built components live in `components/`; each has a preview and a short guide. Build with them before writing your own.

- **Tracker** (`Tracker`): in multi-page pieces, the chapter name in dark grey, then one dash per chapter in its field color; the current dash is long. It sits at the top of the text column.
- **Title** (`Text role="title"`): uppercase Sans. The tracker names the chapter and the title names the page; no eyebrows, section labels or captions that repeat either.
- **Closing line** (`ClosingLine`): every content page ends on one line: an arrow (→, or ↻ for a loop) in `field-ink`, then one sentence in Arizona Mix at the lead size. It is anchored by its bottom edge to the end of the content area, so a second line grows upward. No box, fill or pill. Two lines at most.
- **Footer** (`Footer`): the small black Lumenis wordmark, the source note and the page number on one line in dark grey, at the same place on every content page. It sits on the text column, left-justified, so it never touches a photo.
- **Stat** (`Stat`): a number with its label one proximity step (13) beneath. At most three beside a hero.
- **Points** (`PointList`): up to three numbered points, the number in `field-ink`.
- **Chapter break** (`SlideChapter`): the chapter number at the chapter size in the field color, then the chapter title and its question as a lead line, centered vertically in the content area, beside a bleeding photo.
- **Profile** (`SlideProfile`): a portrait bleeding at 38.2%; on the text column, a label above the name at display size, then the quote as a lead line and the stats below it. A persona is labeled as one.
- **Product** (`SlideProduct`, `ProductLogo`): a skin or portrait photo bleeding beside the column, the official product logo leading the text column, the promise at display size, and the product's own theme.
- **Pill** (`Pill`): one style for any tag or verdict: rounded (`radius-pill`), small uppercase, letter-spaced. Verdicts: `winning`, `watch`, `warning`. In-chapter navigation uses pills on the tracker line, right-aligned to the column: the current one filled in the chapter's field, the others a soft tint of it.
- **No lines.** No hairlines, rules, dividers, borders or boxes. Group with space and type size. The tracker dashes are the only marks.

## 5. Icons and logos

- **Icons** (`Icon`, `assets/Icons/`): the 10 approved Lumenis line icons only, unaltered. Black on white, white on color. Set them large, cropped by the edge of a color field, and never touching type. Never put a colored tile behind an icon on white. No invented motifs.
- **Logos** (`Logo`, `ProductLogo`, `assets/Logos/` and one asset group per product): official files only. The footer wordmark is black. On color, the symbol goes white and the wordmark black, except on the bookend block, where the wordmark is white. A product's own guide wins over these rules: UltraPulse Alpha goes all white on color. Never put a logo on a photo.

## 6. Opening and closing

- **Opening** (`SlideOpening`): a photo bleeding at 61.8% and the purple block at 38.2%, with the white wordmark at the top of the block and, at its foot, a label above the promise at display size, then the date.
- **Closing** (`SlideClosing`): mirrors the opening: the purple block holds the line the audience should remember at display size, with a closing lead line beneath it.
- **Signature devices** borrowed from the Lumenis office wall (big white line icons crossing a color field, white caps on Silken Rose, the Accelerate color band as a strip along the bottom edge) belong on the cover, opening, ask and closing only, never on content pages.

**Range** (brand book pp. 62–63): layouts run from functional to inspirational, and photography from real and concrete to dreamy and abstract. Signature pages sit at the inspirational, dreamy end; content pages (practices, proof) at the functional, real end.

## 7. Photography

- **Aspirational:** warm studio portraits and sunlit people, at ease. Blush, peach or beige backdrops; bare shoulders; happy faces. Within one page or spread, keep to one tone group: warm, cool or neutral.
- **People, not devices.** No device as the hero of a division page. Product shots go on `product-backdrop` `#F2F2F2`.
- **Event photos** are for action shots only. Never present a real attendee as a persona.
- **Hosted brand stock:** the Lumenis brand stock models on HubSpot, for example `https://information.lumenis.com/hs-fs/hubfs/Aesthetic%20-%20EMEA%20(DAM)/Marketing%20Assets/Visuals/Brand%20Visuals/Stock%20Images/Models/Lumenis_Brand%20Stock%20Photography_Models_JPEG%20(61).jpg?width=1920`. Change the number in brackets for another image and `width` for the size. Let the requester pick each photo before placing it.
- **Licensed editorial originals** (the office-wall photos and matching studio portraits) are held by the Aesthetics marketing team, not here. Upload a cleared copy to HubSpot before using it on a page, and check each asset's `allowedBrands` in the image library.
- The component previews in this system can't load hosted photos, so they show placeholders (`Photo` without `src`).

## 8. Words

One idea and one hero per page: a number, a photo or one line of display type. About 40 words at most. In decks, detail goes in the speaker notes as three bullets (takeaway, key note, why it matters). Every figure carries a source note; label public data and Lumenis data on file separately.

## Before delivery

Check the piece against this system only:

- light ground, and one pairing per chapter (or the product's theme on its own page)
- pinks limited to Rose Gold and Silken Rose
- one fixed type scale and frame for the format, and Fibonacci spacing
- photos bleeding, with text and footer kept on the text column
- no lines or boxes
- official logos and unaltered icons
- image rights, and claim context (the `lumenis-claims-check` skill)

## Using this system

- **Namespace:** `window.LumenisAesthetics` (React 18). Load `tokens.css`, then `components/bundle.css`, then React and `components/bundle.js`.
- **Sources:** `tokens.json` holds every value; `src/components.js` the component code. `tokens.css` and `components/bundle.js` are generated by `node build.mjs`. Edit the sources in the repository, never the generated files or this artifact's page: the repository is the source of truth and the artifact is synced from it.
- **Not included:** the ABC Arizona font files are licensed and not stored here, so text falls back to Helvetica/Arial and Georgia unless the cuts are installed. Hosted photos don't load in previews. No web or email components (buttons, forms) yet: the source defines none.
