# Web

The format for scrolling pages: HubSpot landing, event, agenda and program pages, microsites and page artifacts. It keeps everything the README says about proportion, color, photography, icons, logos and words, and sets its own sizes as the `web-*` tokens and the Web type styles. The **Web** page shows a full page built with it.

A slide is one idea on a fixed canvas; a page is a sequence a reader scrolls. So the web format adds what slides never needed: a header, section rhythm, headlines that carry a message, buttons, tabs and lists. It was modeled on the Scottsdale Accelerate 2026 aesthetics agenda page, the Lumenis web page the Aesthetics team holds up as the standard.

## What changes from slides

| | Slides | Web |
|---|---|---|
| Headlines | Uppercase Arizona Sans titles | Arizona Mix in sentence case, written as a message ("Two days built around one platform."), under a small uppercase eyebrow that names the section |
| Navigation | Tracker | Sticky header with sentence-case links; the eyebrow names each section |
| Ground | White only | White, `surface-soft` and `surface-muted` in turn down the page, so each section has a clear start. Never dark |
| Lines | None | 1px `rule` hairlines between the items of a list and on the agenda timeline. Still no boxes, frames, outlines or shadows |
| Photos | Bleed on every slide | Bleed at the opening, the closing and at most one media split; people sections use round headshots |
| Closing line | Every content slide | At most one per section, where a section needs its "so what" |
| Color band | The opening's bottom strip | The same: once, along the bottom of the opening hero |

Everything else stays: the golden split, Fibonacci spacing, two text colors, one pairing per section (or the product's own colors via `data-product`), official logos, unaltered icons, Rose Gold and Silken Rose as the only pinks, and about 40 words of copy before the reader meets a heading or a break.

## Frame

| Part | Value |
|---|---|
| Content column | 1180 wide (`web-content-max`), centered; side margins 55 (`web-margin`), 21 below 900 (`web-margin-small`) |
| Section | Padded 89 top and bottom (`web-section-pad`), 55 below 900 |
| Header | Sticky, 72 high (`web-header-height`), lightly frosted white: the wordmark 110 wide, links in `aes-web-small`, one small button |
| Opening hero | At least 640 high (`web-hero-min`), never 100vh. Photo 61.8% left, color block 38.2% right in the field; the product logo (or the Lumenis wordmark) at the top of the block; eyebrow, headline, one line of intro, date and place pills and up to two buttons at its foot. A white line icon 144 wide crosses the seam without touching type or a face. The color band runs along the bottom |
| Section header | Eyebrow, then 13 to the h2, then 21 to the intro; 55 to the content. Left-aligned. In a split section the header takes 38.2% and stays in view while the content (61.8%) scrolls |
| Closing | Mirrors the hero: color block 38.2% with the wordmark, an h2-size line, a short intro and one button; photo 61.8% |
| Footer | `surface-muted`: the wordmark 89 wide, links, the copyright line and any required notes or safety text |
| Breakpoint | 900 (`web-breakpoint`): every split stacks to one column, photos come first at a fixed ratio, the small sizes apply |

**Rhythm.** Alternate grounds so no two neighbouring sections share one: white, soft, muted, white, soft… The hero and closing blocks carry the field; the footer is muted. A product page sets `data-product` on the wrapper so every field, field ink, button and tab takes the product's colors.

## Type

| Style | Desktop | Below 900 | Use |
|---|---|---|---|
| `aes-web-eyebrow` | 13 caps, tracking 2 | 13 | The section's name above its headline; times on the agenda |
| `aes-web-body` | 17 / 1.55 | 17 | Running text in dark grey, at most about 62 characters a line |
| `aes-web-small` | 15 / 1.45 | 15 | Card text, notes, nav links, footer |
| `aes-web-h3` | Mix 24 | 21 | List items, sessions, names |
| `aes-web-h2` | Mix 46 | 34 | Section headlines |
| `aes-web-h1` | Mix 72 | 52 | The page headline, once, in the hero block |
| `aes-web-number` | Sans Light 40 | 32 | Dates, facts, stats |
| `aes-web-button` | 13 caps, tracking 1.6 | 13 | Buttons |

Colored type follows the README: the field ink only at 24 and up (list numbers, the arrow, timeline dots), never for small labels or credentials.

## Components

Every component renders plain `aes-w-*` markup from `components/bundle.css`, so the same page can be built with React (an artifact) or written as HTML (a HubSpot module).

| Component | Classes | You provide |
|---|---|---|
| `WebPage` | `.aes-web` | `pairing` or `product`; wraps the page and sets body type |
| `WebHeader` | `.aes-w-header`, `.aes-w-nav` | `links`, `cta` |
| `WebHero` | `.aes-w-hero`, `.aes-w-block`, `.aes-w-meta` | `product` (and `logoVariant`) or `pairing`, `eyebrow`, `title`, `intro`, `meta` (date, place), `actions`, `photo`/`photoAlt`/`photoPosition`, `icon`, `band` |
| `WebSection` | `.aes-w-section`, `.aes-w-ground-soft`, `.aes-w-ground-muted`, `.aes-w-head`, `.aes-w-split` | `id`, `ground`, `eyebrow`, `title`, `intro`, `layout` (`stacked` or `split`), `closing`, children |
| `WebList` | `.aes-w-list`, `.aes-w-list-logo` | `items` (`title`, `text`, and either a number by default or `product`/`variant` for a logo marker); `logos` |
| `WebAgenda` | `.aes-w-tabs`, `.aes-w-tab`, `.aes-w-timeline`, `.aes-w-session`, `.aes-w-tag` | `days` (`label`, `date`, `sessions`: `time`, `tag`, `title`, `subtitle`, `text`) |
| `WebPeople` | `.aes-w-people`, `.aes-w-portrait` | `people` (`name`, `credentials`, `text`, `photo`) |
| `WebMedia` | `.aes-w-media`, `.aes-w-media-right` | `photo…`, `photoSide`, section header props, children (often `WebRows`) |
| `WebRows` | `.aes-w-rows` | `items` (`when`, `title`, `text`) |
| `WebFacts` | `.aes-w-facts` | `items` (`label`, `value`) |
| `WebClosing` | `.aes-w-closing` | `pairing` or `product`, `title`, `intro`, `actions`, `photo…`, `icon` |
| `WebFooter` | `.aes-w-footer` | `links`, `legal`, `note` |
| `Button` | `.aes-w-btn` + `-field`, `-ink`, `-outline`, `-text`, `-small` | label, `href`, `kind`, `size` |

## A typical event or product page

1. Header.
2. Opening hero: photo, field block, headline, date and place, two buttons.
3. What to expect (white, split): the promise as an h2, then three or four list items. On a product page, the product's handpiece or sub-brand logos are the markers.
4. Agenda (soft): day tabs and the timeline.
5. Faculty or proof (muted): headshots and public bios, or customer proof.
6. Between sessions or why it matters (media split, white): one photo, a short list.
7. Details (soft): facts, how registration works, buttons.
8. Closing: the line to remember and one button.
9. Footer.

Drop what the brief doesn't need; keep the order and the ground rhythm.

## Building for HubSpot

Follow the [HubSpot landing page skill](../../../.agents/skills/lumenis-hubspot-landing-page/SKILL.md): one Custom HTML module holding the markup, a scoped copy of the styles and the page script.

- **Styles:** copy the `:root` variables this page uses from `tokens.css`, the `aes-web-*` type styles, and the web section of `components/bundle.css` (from "Web format" to the end) into the module's `<style>`. Add a `data-product` or `data-pairing` rule from the top of `bundle.css` if the page uses one.
- **Fonts:** load ABC Arizona from the HubSpot-hosted files listed in [hubspot-assets.md](../hubspot-assets.md). Never embed fonts or images as base64.
- **Images and logos:** hosted HubSpot URLs only; product logos as hosted SVGs or inline SVG markup.
- **Agenda tabs without React:** toggle `aria-selected` and `tabindex` on the `.aes-w-tab` buttons and the `hidden` attribute on the `.aes-w-day` panels on click and on the left and right arrow keys.
- **Forms:** there is no Aesthetics form component yet. Embed the native HubSpot form and style it from the tokens: labels in `aes-web-small`, 16px fields with a 1px `rule` border and square corners, the submit as `.aes-w-btn .aes-w-btn-ink`.

## Borrowing structure from other Lumenis web work

This system is complete for the pages above. When a page needs something it doesn't define yet (a form, a product grid, a testimonial, news tabs, a registration flow), look at how Lumenis already builds it on the web, then rebuild it here:

- **The live Lumenis event pages** on information.lumenis.com, starting with the Scottsdale Accelerate 2026 aesthetics agenda page: section order, how much copy each section carries, agenda and faculty patterns, the venue and registration block.
- **Lumenis Corporate's website kit and components** in [`../lumenis-corporate/`](../lumenis-corporate/README.md): `ui_kits/corporate-website/` (sticky frosted header, hero, product tabs, testimonial over a graphic, news tabs, footer with a newsletter field), `components/navigation/` (NavBar, Tabs), `components/forms/` (field anatomy and sizes) and `components/core/Card`.
- **The Accelerate page reference** in the [Accelerate campaign skill](../../../.agents/skills/lumenis-accelerate-campaign/references/pages.md) for what an event page must carry.

Take from them structure only: which sections a page needs and in what order, what each holds, how it behaves (sticky header, tab keyboard support, form states) and how it responds on a phone. Don't take their colors, square buttons, uppercase titles with Mix or the Hero L, dark blocks or tokens: rebuild the pattern from this system's tokens and components. When a borrowed pattern is used twice, add it to this file and to `src/components.js` so it becomes part of the system.

## Before delivery

- Desktop at 1440 and a phone at 390: no sideways scroll, every split stacked, photos cropped on the face.
- One h1; every section has an eyebrow and an h2 that says something.
- Grounds alternate; nothing dark; hairlines only in lists and the timeline.
- Buttons are pills; one strong button per group.
- The color band once; signature icons only on the hero and the closing.
- Product colors only via `data-product` on that product's page; official logos, never on a photo.
- Real or clearly marked sample content; no bracketed placeholders on anything shared.
- Claims checked with the `lumenis-claims-check` skill; no pricing on public pages.
