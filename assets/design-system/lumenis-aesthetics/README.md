The editorial system for Lumenis Aesthetics work that speaks for the division or its products: decks, one-pagers, landing pages and social. It is one of the separate Lumenis brand systems. Use it whole, and don't mix it with Lumenis Corporate, OptiLIGHT or OptiLIFT. If something you need isn't here, build it only from these tokens and components and say so; never take it from another system.

**Spirit:** Apple's discipline, Vogue's people, Rhode and SKIMS product pages, the joy of the Lumenis office wall. One idea per page, generous white space, real editorial photography, and color that carries meaning. Design every new element from the whole system instead of adding one on.

These rules hold for every format. Sizes and positions belong to the format: the slide values are the `slide-*` tokens and the [slides section](slides.md). A new format (a one-pager, a page, a social post) sets its own sizes from these rules and keeps them fixed across the piece.

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

One scale per format, with every role at a fixed size. Sizes never drift: if text doesn't fit, cut words or split the page; never shrink the type. Set text with `Text` and a `role`, or the matching `aes-*` class.

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

Each step up the scale is roughly the golden ratio or a Fibonacci step larger. The sizes above are the slide values.

**Two text colors:** `ink` `#231F20` (`text-primary`) for what matters, `grey-text` `#575757` (`text-secondary`) for what supports it. Never pure black. Color comes only from the chapter's pairing, or the product's own colors on its own page.

## 3. Color

- **Ground** `surface-page`, white. Never a dark page or slide background.
- **Color pairings.** Each chapter or section takes one pairing: set `data-pairing` on it, and `field`, `field-ink` and `on-field` follow. The field color carries large shapes (a chapter number, a tracker dash, a color field); the ink color carries small colored type and the closing-line arrow. Never split a pairing, and never set field-color type on white at body or label sizes. The pairings are a list of what is allowed, not a fixed color per chapter: choose them for the story at hand.

| Pairing (`data-pairing`) | Field | Ink | Type on the field |
|---|---|---|---|
| `mint` | `color-mint` `#6CC39B` | `color-mint-ink` `#2F8A68` | Ink |
| `sky` | `color-sky` `#7BC9ED` | `color-sky-ink` `#316FAF` | Ink |
| `lavender` | `color-lavender` `#B5A7D1` | `color-lavender-ink` `#7079BA` | Ink |
| `rose-gold` | `color-rose-gold` `#FABCAD` | `color-rose-gold-ink` (Silken Rose) `#BA6D81` | Ink |
| `silken-rose` | `color-silken-rose` `#BA6D81` | `color-silken-rose-ink` `#8F4D61` | White |

- **Contrast.** `color-mint-ink`, `color-lavender-ink` and `color-rose-gold-ink` fall below 4.5:1 on white, so colored type in them stays at 24px and up (the arrow, numbers). White on `color-silken-rose` (3.8:1) is for display, lead and the wordmark only.
- **Pinks:** Rose Gold `#FABCAD` or Silken Rose `#BA6D81` only. Never Stellar Peach Beige `#DEAA9B`.
- **The Accelerate color band** (`band-1` to `band-19`, the `Band` component) appears at most once per piece, as the opening's signature: a strip along the bottom edge. Don't pick colors from it for other uses.

### Products inside the system

Every product color is a **named token** taken from that product's brand guide: `trilift-rose-gold`, `trilift-rose-gold-light`, `trilift-shine-grey`; `stellar-soft-rose-beige`, `stellar-silken-rose`, `stellar-metallic-rose`, `stellar-shine-grey`; `splendor-light-skin`, `splendor-medium-skin`, `splendor-dark-skin`, `splendor-vascular`; `folix-turquoise`, `folix-blue`, `folix-deep-blue`; `ultrapulse-purple`, `ultrapulse-orchid`. Use them by name wherever a product appears.

On that product's own page or section, set `data-product` to its id (`trilift`, `stellar-m22`, `splendor-x`, `folix`, `ultrapulse-alpha`) and its colors replace the chapter pairing: `field`, `field-ink` and `on-field` switch to the product, and `product-accent` holds its second color. Grid, type, frame, spacing and voice stay Aesthetics. Don't put `data-pairing` and `data-product` on the same element.

On a page that compares or lists products, the products README currently says to keep the chapter's Aesthetics pairing, set each product logo in its one-color version and not mix product colors on one page; whether the named product colors may appear together on one piece is still open for the Aesthetics team to confirm. Each product's colors, logos and rules are in its [module](products/README.md).

## 4. Components

Each component below has a preview and a short guide; build with them before writing your own. Slides are built from their own slide components, shown together on the **Slides** page and described in the [Slides section](slides.md).

- **Tracker** (`Tracker`): in multi-page pieces, the chapter name in dark grey, then one dash per chapter in its field color; the current dash is long. It sits at the top of the text column.
- **Title** (`Text role="title"`): uppercase Sans. The tracker names the chapter and the title names the page; no eyebrows, section labels or captions that repeat either.
- **Closing line** (`ClosingLine`): every content page ends on one line: an arrow (→, or ↻ for a loop) in `field-ink`, then one sentence in Arizona Mix at the lead size. It is anchored by its bottom edge to the end of the content area, so a second line grows upward. No box, fill or pill. Two lines at most.
- **Footer** (`Footer`): the small black Lumenis wordmark, the source note and the page number on one line in dark grey, at the same place on every content page. It sits on the text column, left-justified, so it never touches a photo.
- **Stat** (`Stat`): a number with its label one proximity step (13) beneath. At most three beside a hero.
- **Points** (`PointList`): up to three numbered points, the number in `field-ink`.
- **Product logo** (`ProductLogo`): a product's official logo, picked by product and ground. It leads the text column and never sits on a photo. The product's colors come with `data-product`; see the **Products** card.
- **Slides** (the **Slides** page): seven slide types, opening, chapter break, content, hero number, profile, product and closing, built on one grid and frame. Their layouts and props are in the [Slides section](slides.md).
- **Pill** (`Pill`): one style for any tag: rounded (`radius-pill`), small uppercase, letter-spaced, filled in the field color. In-chapter navigation uses pills on the tracker line, right-aligned to the column: the current one filled in the chapter's field, the others a soft tint of it.

## 5. Icons and logos

- **Icons** (`Icon`, `assets/Icons/`): the 10 approved Lumenis line icons only, unaltered: burst, cross, crossover, lines, orbit, rings, sparkle, star, wave, zigzag. Each is a 1-unit stroke in `currentColor`, so set its color with the `Icon` component's `color`; never fill or recombine them. Black on white, white on color. Set them large, cropped by the edge of a color field, and never touching type. Never put a colored tile behind an icon on white. No invented motifs.
- **Logos** (`Logo`, `ProductLogo`, `assets/Logos/` and one asset group per product): official files only. The Lumenis files are `lumenis-wordmark-black`, `lumenis-wordmark-white`, `lumenis-hero-l-black` and `lumenis-hero-l-white`. The footer wordmark is black, 89 wide on slides; on the opening and closing block it is 210 wide. On color, the symbol goes white and the wordmark black; the wordmark goes white only where the type on the field is white (Silken Rose). A product's own guide wins over these rules: UltraPulse Alpha goes all white on color. Never put a logo on a photo.

## 6. Opening and closing

- **Opening** (`SlideOpening`, on the Slides page): a photo bleeding at 61.8% and a color block at 38.2% in the chosen pairing's field (Rose Gold by default), with the wordmark at the top of the block and, at its foot, a label above the promise at display size, then the date.
- **Closing** (`SlideClosing`, on the Slides page): mirrors the opening: the color block holds the line the audience should remember at display size, with a closing lead line beneath it.
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

- light ground, and one pairing per chapter (or the product's own colors on its own page)
- pinks limited to Rose Gold and Silken Rose
- one fixed type scale and frame for the format, and Fibonacci spacing
- photos bleeding, with text and footer kept on the text column
- no lines or boxes
- official logos and unaltered icons
- image rights, and claim context (the `lumenis-claims-check` skill)

## Using this system

- **Namespace:** `window.LumenisAesthetics` (React 18). Load `tokens.css`, then `components/bundle.css`, then React and `components/bundle.js`.
- **Where it's edited:** this artifact is a copy of `assets/design-system/lumenis-aesthetics` in the marketing-ai repository. `tokens.json` holds every value and `tokens.css` and `components/bundle.js` are generated from the repository's sources. Change the repository and sync; the artifact's page is read-only.
- **Not included:** only four ABC Arizona cuts exist here: Sans Regular, Sans Light, Mix Regular and Mix Italic (no Bold or Medium). They are uploaded to this artifact for designs made with it; they are licensed and are not stored in the repository. Hosted photos don't load in previews. No web or email components (buttons, forms) yet: the source defines none.
