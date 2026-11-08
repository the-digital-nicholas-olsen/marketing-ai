The editorial system for Lumenis Aesthetics work that speaks for the division or its products. Decks and web pages are supported today; other formats get a warning first (below). It is one of the separate Lumenis brand systems. Use it whole, and don't mix it with Lumenis Corporate, OptiLIGHT or OptiLIFT. If something you need isn't here, build it only from these tokens and components and say so; never take it from another system.

**Spirit:** Apple's discipline, Vogue's people, Rhode and SKIMS product pages, the joy of the Lumenis office wall. One idea per page, generous white space, real editorial photography, and color that carries meaning. Design every new element from the whole system instead of adding one on.

These rules hold for every format. Each supported format has its own file that sets its grid, sizes, type scale and components, and says nothing about the others:

| Format | File | Tokens |
|---|---|---|
| Slides (16:9 decks) | [slides.md](slides.md) | `slide-*` |
| Web (landing, event and program pages, microsites, page artifacts) | [web.md](web.md) | `web-*` |

> **Warning: unsupported formats.** Any other medium (a flyer, a social post, an email, a one-pager, print, signage, video) has no format file yet. Before designing one, tell the requester in plain words: "The Aesthetics design system doesn't support [format] yet. I'll build it from the shared rules, but its sizes, grid and type scale aren't approved, so treat it as a draft." Then build only from these rules, the tokens and the components; choose sizes from the Fibonacci steps and keep them fixed across the piece; don't borrow a supported format's sizes as if they applied; and label the piece as a draft for that format. If the format will be used again, propose a format file for it (its own `.md` and tokens), approved before it counts as supported.

## When to use it

| Piece | System |
|---|---|
| Speaks for the Aesthetics division, or covers several Aesthetics products | **Lumenis Aesthetics** |
| One Aesthetics product with a module (triLift 2.0, Stellar M22, SPLENDOR X, FoLix, UltraPulse Alpha; AcuPulse is next, once its official logo files arrive and its purple is confirmed) | **Lumenis Aesthetics**, with that product's colors and [module](products/README.md) |
| Speaks as Lumenis the company, covers both divisions, or is an Accelerate by Lumenis event | Lumenis Corporate |

Do not infer indications, claims or routing from the design examples. Take them from the brief, the regulatory do's and don'ts and the claims library, and run the claims check before delivery.

## 1. Proportion

- **Golden ratio.** Every two-part layout splits `golden-major` / `golden-minor` (61.8 / 38.2). Where text sits beside a photo or a color block, the text takes 61.8% of the content width and the image takes 38.2% of the format; on an opening or closing, the photo takes 61.8% and the color block 38.2%.
- **Spacing** uses Fibonacci steps only: `space-8`, `space-13`, `space-21`, `space-34`, `space-55`, `space-89`, `space-144`. Pick the margins and gaps for a format from these steps.
- **Photos bleed or sit inset.** A photo or color block either runs to the edges of the format on its side, or sits inset on the grid inside the margins (an inset photo, a gallery of up to four, a product shot). Never behind text, never with shadows (`radius-none`). Text stays on its own column and never crosses into the photo.
- **Fixed frame, free layout.** Each format fixes where its recurring parts sit (navigation, titles, content area, footer) and keeps them in the same place on every page of the piece. Inside the content area, lay the page out for its content: the components are starting points, not a closed list (a horizontal timeline, a table, a row of cards, a calculation down a color block). Build new layouts from the grid, tokens, type scale and parts, without waiting for a new component.
- **Separation.** 1px rules in the `rule` color (`Divider`) and cards (`Card`: outlined, or filled with the primary or secondary field) may group and divide content to keep a run of pages from going flat. Square, flat and on the grid; no heavy borders, shadows or decorative frames.

### Proximity

Space shows what belongs together. Use `Stack` with a gap name. From tightest to widest:

| Gap | Size | Between |
|---|---|---|
| `gap-tight` | 8 | A point and its supporting line |
| `gap-near` | 13 | A label and the text it labels; a number and its label |
| `gap-follow` | 21 | A display line and the serif line that completes it |
| `gap-apart` | 34 | Groups; the title and the content |
| `gap-section` | 55 | A serif lead line and the body it introduces |

These are the base gaps. A format may step each one down the sequence, but the order never changes. Never space a label farther from its text than from the next group. Keep leading tight enough that a wrapped line never reads as a new paragraph; each format file sets its own.

## 2. Type (ABC Arizona)

One scale per format, set in that format's file, with every role at a fixed size. Sizes never drift: if text doesn't fit, cut words or split the page. Approved or regulatory copy is never cut or reworded to fit: split the page or widen the column, and step reading text down only as far as the format's file allows.

- **Arizona Sans** carries running text, labels and display lines.
- **Arizona Mix** carries the voice: lead lines, quotes, closing lines, and headlines where a format writes them in sentence case.
- **Arizona Sans Light** carries numbers and hero figures.

Each step up a scale is roughly the golden ratio or a Fibonacci step larger.

**Two text colors:** `ink` `#231F20` (`text-primary`) for what matters, `grey-text` `#575757` (`text-secondary`) for what supports it. Never pure black. Color comes only from the chapter's pairing, or the product's own colors on its own page.

## 3. Color

- **Ground** `surface-page`, white. Never a dark background. The warm off-white `surface-soft` and warm grey `surface-muted` are the other light grounds; each format's file says where they and the product's second color may appear.
- **Color pairings.** Each chapter or section takes one pairing: set `data-pairing` on it, and `field`, `field-ink` and `on-field` follow. The field color carries large shapes (a chapter number, a tracker dash, a color field); the ink color carries small colored type and the closing-line arrow. Never split a pairing, and never set field-color type on white at body or label sizes. The pairings are a list of what is allowed, not a fixed color per chapter: choose them for the story at hand.
- **Primary and secondary.** Each pairing and product also sets `field-secondary` (with `on-field-secondary` for its type): Silken Rose for Rose Gold and for Stellar M22, Rose Gold for Silken Rose, Sky or Lavender for the cool pairings, the product's second color for the others. Balance the two: don't let the primary field fill every page. Leave most pages white, give some blocks and cards the secondary, and let photography carry color too. As a guide, about a third of the pages in a piece carry a large primary-color block.

| Pairing (`data-pairing`) | Field | Ink | Type on the field |
|---|---|---|---|
| `mint` | `color-mint` `#6CC39B` | `color-mint-ink` `#2F8A68` | Ink |
| `sky` | `color-sky` `#7BC9ED` | `color-sky-ink` `#316FAF` | Ink |
| `lavender` | `color-lavender` `#B5A7D1` | `color-lavender-ink` `#7079BA` | Ink |
| `rose-gold` | `color-rose-gold` `#FABCAD` | `color-rose-gold-ink` (Silken Rose) `#BA6D81` | Ink |
| `silken-rose` | `color-silken-rose` `#BA6D81` | `color-silken-rose-ink` `#8F4D61` | White |

- **Contrast.** `color-mint-ink`, `color-lavender-ink` and `color-rose-gold-ink` fall below 4.5:1 on white, so colored type in them stays at 24px and up (the arrow, numbers). White on `color-silken-rose` (3.8:1) is for display, lead and the wordmark only.
- **Pinks:** Rose Gold `#FABCAD` or Silken Rose `#BA6D81` only. Never Stellar Peach Beige `#DEAA9B`.
- **The Accelerate color band** (`band-1` to `band-19`, the `Band` component) appears at most once per piece, as a strip, where the format's file places it. Don't pick colors from it for other uses.

### Products inside the system

Every product color is a **named token** taken from that product's brand guide: `trilift-rose-gold`, `trilift-rose-gold-light`, `trilift-shine-grey`; `stellar-soft-rose-beige`, `stellar-silken-rose`, `stellar-metallic-rose`, `stellar-shine-grey`; `splendor-light-skin`, `splendor-medium-skin`, `splendor-dark-skin`, `splendor-vascular`; `folix-turquoise`, `folix-blue`, `folix-deep-blue`; `ultrapulse-purple`, `ultrapulse-orchid`. Use them by name wherever a product appears.

On that product's own page or section, set `data-product` to its id (`trilift`, `stellar-m22`, `splendor-x`, `folix`, `ultrapulse-alpha`) and its colors replace the chapter pairing: `field`, `field-ink` and `on-field` switch to the product, and `product-accent` holds its second color. Grid, type, frame, spacing and voice stay Aesthetics. Don't put `data-pairing` and `data-product` on the same element.

On a page that compares or lists products, the products README currently says to keep the chapter's Aesthetics pairing, set each product logo in its one-color version and not mix product colors on one page; whether the named product colors may appear together on one piece is still open for the Aesthetics team to confirm. Each product's colors, logos and rules are in its [module](products/README.md).

## 4. Components

Each component below has a preview and a short guide; build with them before writing your own. Each supported format also has its own components, described in its file.

- **Tracker** (`Tracker`): in multi-page pieces, the chapter name in dark grey, then one dash per chapter in its field color; the current dash is long. It sits at the top of the text column.
- **Title** (`Text role="title"`): names the page. Say it once: no eyebrows, section labels or captions that repeat what the navigation or the title already says. Each format sets its title style.
- **Closing line** (`ClosingLine`): optional. When a page needs a conclusion its title and content don't already make, it ends on one line: an arrow (→, or ↻ for a loop) in `field-ink`, then one sentence in Arizona Mix at the lead size. It is anchored by its bottom edge to the end of the content area, so a second line grows upward. Two lines at most. Use it sparingly: a few per chapter, not every page.
- **Footer** (`Footer`): the small black Lumenis wordmark, the source note and the page number on one line in dark grey, at the same place on every content page. It sits on the text column, left-justified, so it never touches a photo.
- **Stat** (`Stat`): a number with its label one proximity step (13) beneath. At most three beside a hero.
- **Points** (`PointList`): numbered points, the number in `field-ink`. Use them when order or count matters.
- **Bullets** (`BulletList`): an unnumbered list, the ✦ star (or a dot) in `field-ink`, an optional head in ink and the text in grey. Use it whenever order doesn't matter, so not every list reads as numbered.
- **Card** (`Card`): groups one idea. `outline` (1px `rule`), `fill` (the primary field), `secondary` (the secondary field) or `soft` (warm off-white). Square and flat; fill one card in a row to lead the eye, not all of them.
- **Divider** (`Divider`): a 1px rule in the `rule` color, horizontal or vertical, between rows, columns, a timeline or a header and its content.
- **Product logo** (`ProductLogo`): a product's official logo, picked by product and ground. It leads the text column and never sits on a photo. The product's colors come with `data-product`; see the **Products** card.
- **Slides** (the **Slides** page): twelve slide types (opening, chapter break, content, text, inset photo, gallery, cards, hero number, profile, product, blank and closing) built on one grid and frame, and room to design others from the same parts. Their layouts and props are in the [Slides section](slides.md).
- **Web** (the **Web** page): the header, opening hero, sections on a 12-column grid, product splits and cards, agenda, people, rows, facts, closing and footer for scrolling pages, as React components and as plain `aes-w-*` classes for HubSpot. Their layouts, sizes and props are in the [web section](web.md).
- **Button** (`Button`): web only. A pill with an uppercase label: `field`, `ink`, `outline` or `text`.
- **Pill** (`Pill`): one style for any tag: rounded (`radius-pill`), small uppercase, letter-spaced, filled in the field color. In-chapter navigation uses pills on the tracker line, right-aligned to the column: the current one filled in the chapter's field, the others a soft tint of it.

## 5. Icons and logos

- **Icons** (`Icon`, `assets/Icons/`): the 10 approved Lumenis line icons only, unaltered: burst, cross, crossover, lines, orbit, rings, sparkle, star, wave, zigzag. Each is a 1-unit stroke in `currentColor`, so set its color with the `Icon` component's `color`; never fill or recombine them. Black on white, white on color. Set them large, cropped by the edge of a color field, and never touching type. Never put a colored tile behind an icon on white. No invented motifs.
- **Logos** (`Logo`, `ProductLogo`, `assets/Logos/` and one asset group per product): official files only. The Lumenis files are `lumenis-wordmark-black`, `lumenis-wordmark-white`, `lumenis-hero-l-black` and `lumenis-hero-l-white`. The footer wordmark is black, and larger on the opening and closing block; each format sets the sizes. On color, the symbol goes white and the wordmark black; the wordmark goes white only where the type on the field is white (Silken Rose). A product's own guide wins over these rules: UltraPulse Alpha goes all white on color. Never put a logo on a photo.

## 6. Opening and closing

- **Opening:** a photo bleeding at 61.8% and a color block at 38.2% in the chosen pairing's field (Rose Gold by default), with the wordmark or product logo at the top of the block and the promise at its foot. Each format builds it from its own component and says what else the block holds.
- **Closing:** mirrors the opening: the color block holds the line the audience should remember.
- **Signature devices** borrowed from the Lumenis office wall (big white line icons crossing a color field, white caps on Silken Rose, the Accelerate color band) belong on the cover, opening, ask and closing only, never on content pages.

**Range** (brand book pp. 62–63): layouts run from functional to inspirational, and photography from real and concrete to dreamy and abstract. Signature pages sit at the inspirational, dreamy end; content pages (practices, proof) at the functional, real end.

## 7. Photography

- **Aspirational:** warm studio portraits and sunlit people, at ease. Blush, peach or beige backdrops; bare shoulders; happy faces. Within one page or spread, keep to one tone group: warm, cool or neutral.
- **People and products, page by page.** Choose for each page what it needs to show. A division or brand page usually leads with people; a product or sales deck needs product photography (the device, its handpieces, treatments in progress) and may lead with it. Product shots go on `product-backdrop` `#F2F2F2` or a light field, uncropped (`contain`) when the whole device matters.
- **Event photos** are for action shots only. Never present a real attendee as a persona.
- **Hosted brand stock:** the Lumenis brand stock models on HubSpot, for example `https://information.lumenis.com/hs-fs/hubfs/Aesthetic%20-%20EMEA%20(DAM)/Marketing%20Assets/Visuals/Brand%20Visuals/Stock%20Images/Models/Lumenis_Brand%20Stock%20Photography_Models_JPEG%20(61).jpg?width=1920`. Change the number in brackets for another image and `width` for the size. Let the requester pick each photo before placing it.
- **Licensed editorial originals** (the office-wall photos and matching studio portraits) are held by the Aesthetics marketing team, not here. Upload a cleared copy to HubSpot before using it on a page, and check each asset's `allowedBrands` in the image library.
- The component previews in this system can't load hosted photos, so they show placeholders (`Photo` without `src`).

## 8. Words

One idea and one hero per page: a number, a photo, one line of display type or one clear group. About 40 words is the aim; approved copy is kept whole even when it runs longer. Every figure carries a source note; label public data and Lumenis data on file separately.

## Before delivery

Check the piece against this system only:

- a supported format built from its file, or, for any other format, the unsupported-format warning given and the piece labeled a draft
- light ground, and one pairing per chapter (or the product's own colors on its own page)
- pinks limited to Rose Gold and Silken Rose
- one fixed type scale and frame for the format, and Fibonacci spacing
- photos bleeding or inset on the grid, with text and footer kept on the text column
- rules 1px in the `rule` color; cards square and flat
- the primary color balanced with white, the secondary field and photography
- closing lines only where a page needs one; bullets where order doesn't matter
- official logos and unaltered icons
- image rights, and claim context (the `lumenis-claims-check` skill)

## Using this system

- **Namespace:** `window.LumenisAesthetics` (React 18). Load `tokens.css`, then `components/bundle.css`, then React and `components/bundle.js`.
- **Where it's edited:** this artifact is a copy of `assets/design-system/lumenis-aesthetics` in the marketing-ai repository. `tokens.json` holds every value and `tokens.css` and `components/bundle.js` are generated from the repository's sources. Change the repository and sync; the artifact's page is read-only.
- **Not included:** only four ABC Arizona cuts exist here: Sans Regular, Sans Light, Mix Regular and Mix Italic (no Bold or Medium). They are uploaded to this artifact for designs made with it; they are licensed and are not stored in the repository. Hosted photos don't load in previews. Only slides and web are supported formats; anything else gets the unsupported-format warning above. Email and form components aren’t defined yet.
