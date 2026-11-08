# Web

The Aesthetics format for scrolling pages: HubSpot landing, event, agenda and program pages, microsites and page artifacts. It is the reference for any Aesthetics web design. It builds on the README's rules for color, photography, icons, logos and words, and sets its own grid, sizes, type and components as the `web-*` tokens and the Web type styles. The **Web** page shows a full page built with it.

A page is a sequence a reader scrolls: a sticky header, sections on one grid in a steady rhythm, buttons, tabs and cards. The quality bar is the Scottsdale Accelerate 2026 aesthetics agenda page, held to the standard of professional company sites: one grid with equal edges, one idea and one picture per section, the real product shown big, no labels above headings, and motion only where the reader acts.

## The rules

1. **One grid, equal edges.** Every section uses the same 1280 column on 12 columns with 24 gutters, 80 in from each edge at 1440. Text and pictures start and end on column lines. Only the hero and the closing run edge to edge, on both sides at once.
2. **One idea, one picture, about one screen.** Each section makes one point under one heading and carries one picture (a photograph, a product render, cards with renders, or headshots). At 1440 × 900 each section is about one screen tall; a section that is mostly empty gets its picture or merges into its neighbour.
3. **The headline speaks.** Section headlines are Arizona Mix in sentence case and say something ("A station for every handpiece."). No eyebrow or label above a heading: the nav names the sections. Small caps labels are for times, tags and the label over a figure only.
4. **Show the real thing.** On a product page the product appears whole and big (an official render standing on the page, never a small render in a grey box) and its parts appear as renders in cards. People sections use real headshots; treatment and event photographs show real use. Different picture in every section.
5. **Light grounds, one accent.** Sections alternate white, `surface-soft` and `surface-muted`. One section may take the product's second color (`.aes-w-ground-accent`: Silken Rose for Stellar M22) to balance the Rose Gold of the hero and the closing. White type on that ground is large type only (the h2 and the 26px lead). Never a dark section.
6. **Lines and boxes only where they help.** 1px `rule` hairlines close list rows and draw the agenda timeline. Cards are square, white, with no border or shadow. A product render may cast a soft shadow on the page.
7. **Quiet motion.** The hero enters once on load (the photo settles, the words rise in order); buttons rise 1px on hover and press on click; photos zoom 2.5% inside their frame; links draw their underline; cards lift 2px. Nothing animates on scroll, nothing loops, and everything rests under reduced motion.
8. **The color band closes the page.** The Accelerate band appears once, at the very foot, under the footer.

## Frame

| Part | Value |
|---|---|
| Content column | `width: min(100% - 2 × margin, 1280)` (`web-content-max`); margins 80 (`web-margin`), 48 from 640 to 1023 (`web-margin-medium`), 24 below 640 (`web-margin-small`) |
| Grid | 12 columns, 24 gutters (`.aes-w-grid`). Words beside a photo: seven columns and five (`.aes-w-text`, `.aes-w-visual`). Words beside a product: five and seven (`.is-product`) |
| Section | 144 above the heading (`web-section-pad`), 89 below the content (`web-section-pad-end`); 89 and 55 below 900 |
| Header | Sticky, 72 high (`web-header-height`), frosted white: the wordmark 110 wide, sentence-case links with drawn underlines, one small Rose Gold button |
| Opening hero | Fills the first screen under the header (`web-hero-min` 600 at least). Photo 61.8% left, color block 38.2% right in the field: the product logo at the top; the headline, one sentence, date and place pills and two buttons at its foot. A white line icon 144 wide crosses the seam without touching type or a face |
| Section head | h2, then 21 to the lead or intro, then 55 to the content (34 inside a split). Left-aligned on the first column line |
| Pictures | Photographs 4:5 in the five-column visual, at most 708 tall. A product render standing whole in the seven-column visual, up to 640 tall. Cards: a 1:1 render frame on `product-backdrop`, then the name and one or two lines |
| Closing | Mirrors the hero: color block 38.2% holding the line to remember, the key facts, one sentence on how to register and the button; photo 61.8% |
| Footer | `surface-muted`: the wordmark 89 wide, links, the copyright line and any notes or safety text; the color band under it |
| Breakpoints | 1199: cards two across. 1023: every split stacks, words first. 900: hero and closing stack, photo first; the small type sizes apply. 640: one column, buttons full width |

## Type

| Style | Desktop | Below 900 | Use |
|---|---|---|---|
| `aes-web-h1` | Mix 72 | 48 | The page headline, once, in the hero block |
| `aes-web-h2` | Mix 48 | 34 | Section headlines, written as a message |
| `aes-web-lead` | Mix 24 | 21 (26 on the accent ground) | The one serif line under a section headline |
| `aes-web-h3` | Mix 24 | 21 | Card names, sessions, people, rows |
| `aes-web-body` | 17 / 1.6 | 17 | Running text in dark grey, about 62 characters a line at most |
| `aes-web-small` | 15 / 1.45 | 15 | Card text, notes, nav links, footer |
| `aes-web-number` | Sans Light 40 | 30 | Dates and facts |
| `aes-web-eyebrow` | 13 caps, tracking 2 | 13 | Times, day names and the label over a figure. Never above a heading |
| `aes-web-button` | 13 caps, tracking 1.6 | 13 | Buttons |

Colored type follows the README: the field ink only at 24 and up (the timeline dots, the text-link arrow), never for small labels.

## Components

Every component renders plain `aes-w-*` markup from `components/bundle.css`, so the same page can be built with React (an artifact) or written as HTML (a HubSpot module).

| Component | Classes | You provide |
|---|---|---|
| `WebPage` | `.aes-web` | `pairing` or `product`; wraps the page and sets body type |
| `WebHeader` | `.aes-w-header`, `.aes-w-nav` | `links`, `cta` |
| `WebHero` | `.aes-w-hero`, `.aes-w-block`, `.aes-w-meta` | `product` (and `logoVariant`) or `pairing`, `title`, `intro`, `meta` (date, place), `actions`, `photo`/`photoAlt`/`photoPosition`, `icon` |
| `WebSection` | `.aes-w-section`, `.aes-w-ground-soft`, `-muted`, `-accent`, `.aes-w-head` | `id`, `ground`, `title`, `lead`, `intro`, children |
| `WebSplit` | `.aes-w-grid`, `.aes-w-text`, `.aes-w-visual`, `.aes-w-frame`, `.aes-w-r-45`, `.is-product`, `.aes-w-product` | section props, then either `photo…` (a 4:5 photo in five columns) or `productImage`/`productAlt` (the product standing whole in seven), children under the words |
| `WebCards` | `.aes-w-cards`, `.aes-w-card` | `items` (`image`, `alt`, `title`, `text`): renders on the product backdrop, four across |
| `WebAgenda` | `.aes-w-tabs`, `.aes-w-tab`, `.aes-w-timeline`, `.aes-w-session`, `.aes-w-tag` | `days` (`label`, `date`, `sessions`: `time`, `tag`, `title`, `subtitle`, `text`) |
| `WebPeople` | `.aes-w-people`, `.aes-w-portrait` | `people` (`name`, `credentials`, `text`, `photo`), three across |
| `WebRows` | `.aes-w-rows` | `items` (`when`, `title`, `text`) |
| `WebFacts` | `.aes-w-facts` | `items` (`label`, `value`) |
| `WebClosing` | `.aes-w-closing` | `pairing` or `product`, `title`, `facts`, `intro`, `actions`, `photo…`, `icon` |
| `WebFooter` | `.aes-w-footer` | `links`, `legal`, `note`; `band: false` drops the color band |
| `Button` | `.aes-w-btn` + `-field`, `-ink`, `-outline`, `-text`, `-small` | label, `href`, `kind`, `size` |

## A typical event or product page

1. Header.
2. Opening hero: photo, field block, headline, date and place, two buttons.
3. The product (white, `WebSplit` with `productImage`): the promise, one lead line, two facts, the product standing whole.
4. Its parts (accent ground, `WebCards`): one card per handpiece or sub-brand, each with its official render.
5. Agenda (white, `WebSplit` with a treatment or event photograph): day tabs and the timeline.
6. Faculty or proof (muted, `WebPeople`): headshots and public bios.
7. Between sessions or why it matters (white, `WebSplit` with a photograph): a short list in `WebRows`.
8. Closing (`WebClosing`): the line to remember, the dates, how to register, one button.
9. Footer, with the color band.

Drop what the brief doesn't need; keep the order, one picture per section and the ground rhythm. The Stellar M22 Masterclass sample follows this plan.

## Building for HubSpot

Follow the [HubSpot landing page skill](../../../.agents/skills/lumenis-hubspot-landing-page/SKILL.md): one Custom HTML module holding the markup, a scoped copy of the styles and the page script.

- **Styles:** copy the `:root` variables this page uses from `tokens.css`, the `aes-web-*` type styles, and the web section of `components/bundle.css` (from "Web format" to the end) into the module's `<style>`. Add the `data-product` or `data-pairing` rule from the top of `bundle.css` the page uses.
- **Fonts:** load ABC Arizona from the HubSpot-hosted files listed in [hubspot-assets.md](../hubspot-assets.md). Never embed fonts or images as base64.
- **Images and logos:** hosted HubSpot URLs only, sized for the slot (about 1200 wide for a 4:5 photo, 1400 for a product render, 900 for a card render; WebP where HubSpot serves it). Product renders keep their transparent ground. Logos as hosted SVGs or inline SVG markup.
- **Agenda tabs without React:** toggle `aria-selected` and `tabindex` on the `.aes-w-tab` buttons and the `hidden` attribute on the `.aes-w-day` panels on click and on the left and right arrow keys.
- **Forms:** there is no Aesthetics form component yet. Embed the native HubSpot form and style it from the tokens: labels in `aes-web-small`, 16px fields with a 1px `rule` border and square corners, the submit as `.aes-w-btn .aes-w-btn-ink`.

## Borrowing structure from other Lumenis web work

This system is complete for the pages above. When a page needs something it doesn't define yet (a form, a product grid, a testimonial, news tabs, a registration flow), look at how Lumenis already builds it on the web, then rebuild it here:

- **The live Lumenis event pages** on information.lumenis.com, starting with the Scottsdale Accelerate 2026 aesthetics agenda page: section order, how much copy each section carries, agenda and faculty patterns, the venue and registration block.
- **Lumenis Corporate's website kit and components** in [`../lumenis-corporate/`](../lumenis-corporate/README.md): `ui_kits/corporate-website/` (sticky frosted header, hero, product tabs, testimonial over a graphic, news tabs, footer with a newsletter field), `components/navigation/` (NavBar, Tabs), `components/forms/` (field anatomy and sizes) and `components/core/Card`.
- **The Accelerate page reference** in the [Accelerate campaign skill](../../../.agents/skills/lumenis-accelerate-campaign/references/pages.md) for what an event page must carry.

Take from them structure only: which sections a page needs and in what order, what each holds, how it behaves (sticky header, tab keyboard support, form states) and how it responds on a phone. Don't take their colors, square buttons, uppercase titles with Mix or the Hero L, dark blocks or tokens: rebuild the pattern from this system's tokens and components. When a borrowed pattern is used twice, add it to this file and to `src/components.js` so it becomes part of the system.

## Before delivery

- Shoot 1440 × 900 and 390 × 844, one screen at a time: each screen shows one section, nothing scrolls sideways, every split stacks words first, photos crop on faces.
- Every block starts and ends on the column lines; only the hero and the closing run edge to edge.
- One h1; every section an h2 that says something and no label above it; one picture per section, none twice.
- Grounds alternate and stay light; one accent section at most, white type on it large only; hairlines only on rows and the timeline.
- Buttons are pills; one strong button per group; at most two in the hero.
- The hero enters once; nothing moves on scroll; reduced motion rests everything.
- The color band once, at the foot; signature icons only on the hero and the closing.
- Product colors only via `data-product` on that product's page; official logos and renders, never a logo on a photo.
- Photographs picked by the requester per slot; renders and treatment photos from the product's brand folder.
- Real or clearly marked sample content; no bracketed placeholders on anything shared.
- Claims checked with the `lumenis-claims-check` skill; no pricing on public pages.
