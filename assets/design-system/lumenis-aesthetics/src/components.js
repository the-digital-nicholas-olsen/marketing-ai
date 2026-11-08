/* Lumenis Aesthetics components — source for components/bundle.js (built by build.mjs).
   Plain functions over React.createElement; no JSX, imports or network.
   LOGOS (data: URIs of the official SVG files) and ICONS (inline SVG markup) are injected by the build. */

var h = React.createElement;
var cx = function () { return Array.prototype.slice.call(arguments).filter(Boolean).join(' '); };

/* ── Type ─────────────────────────────────────────────────────────── */
var ROLE_TAG = { label: 'p', body: 'p', lead: 'p', number: 'p', display: 'h2', hero: 'p', chapter: 'p', title: 'h2', tracker: 'span', foot: 'span' };

function Text(props) {
  var role = props.role || 'body';
  var tag = props.as || ROLE_TAG[role] || 'p';
  return h(tag, {
    className: cx('aes-text', 'aes-' + role, props.tone && 'aes-tone-' + props.tone, props.className),
    style: props.style
  }, props.children);
}

/* ── Layout ───────────────────────────────────────────────────────── */
function Stack(props) {
  return h('div', { className: cx(props.direction === 'row' ? 'aes-row' : 'aes-stack', 'aes-gap-' + (props.gap || 'tight'), props.className), style: props.style }, props.children);
}

function Stat(props) {
  return h(Stack, { gap: 'near' },
    h(Text, { role: props.size === 'hero' ? 'hero' : 'number', tone: props.tone }, props.value),
    h(Text, { role: 'label' }, props.label));
}

function Pill(props) {
  var kind = props.kind || 'field';
  return h('span', { className: cx('aes-pill', kind !== 'field' && 'aes-pill-' + kind, props.size === 'large' && 'aes-pill-large') }, props.children);
}

function ClosingLine(props) {
  return h('div', { className: cx('aes-closing', props.className), style: props.style },
    h('span', { className: 'aes-lead aes-closing-arrow', 'aria-hidden': 'true' }, props.loop ? '↻' : '→'),
    h('p', { className: 'aes-text aes-lead aes-closing-text' }, props.children));
}

function Tracker(props) {
  var chapters = props.chapters || [];
  return h('div', { className: cx('aes-tracker-row', props.className), style: props.style },
    h('span', { className: 'aes-tracker' }, (chapters[props.current] || {}).name),
    h('span', { className: 'aes-dashes', 'aria-hidden': 'true' }, chapters.map(function (c, i) {
      return h('span', { key: i, 'data-pairing': c.pairing, className: cx('aes-dash', i === props.current && 'aes-dash-current') });
    })),
    props.pills ? h('span', { className: 'aes-tracker-pills' }, props.pills.map(function (p, i) {
      return h(Pill, { key: i, kind: i === props.pillCurrent ? 'field' : 'tint' }, p);
    })) : null);
}

/* ── Brand ────────────────────────────────────────────────────────── */
function Logo(props) {
  var key = 'lumenis-' + (props.mark || 'wordmark') + '-' + (props.tone || 'black');
  return h('img', { className: 'aes-logo', src: LOGOS[key], alt: 'Lumenis', style: { width: props.width || 89 } });
}

function ProductLogo(props) {
  var key = props.product + '/' + (props.variant || (PRODUCTS[props.product] || {}).logo || 'color');
  var src = LOGOS[key];
  if (!src) return h('span', { className: 'aes-label' }, 'No logo file: ' + key);
  return h('img', { className: 'aes-logo', src: src, alt: props.alt || PRODUCTS[props.product].name, style: { height: props.height || 55, width: 'auto' } });
}

function Icon(props) {
  var size = props.size || 89;
  return h('span', {
    className: 'aes-icon', role: 'img', 'aria-label': props.label || props.name,
    style: { width: size, height: size, color: props.color },
    dangerouslySetInnerHTML: { __html: ICONS[props.name] || '' }
  });
}

function Band(props) {
  var stripes = [];
  for (var i = 1; i <= 19; i++) stripes.push(h('span', { key: i, style: { background: 'var(--band-' + i + ')' } }));
  return h('div', { className: 'aes-band', style: { height: props.height || 13 }, 'aria-hidden': 'true' }, stripes);
}

function Photo(props) {
  if (!props.src) {
    return h('div', { className: 'aes-photo aes-photo-empty', role: 'img', 'aria-label': props.alt || 'Photo' },
      h('span', { className: 'aes-label' }, 'Photo · ' + (props.alt || 'bleeds to the edge')));
  }
  return h('div', { className: 'aes-photo' }, h('img', { src: props.src, alt: props.alt || '', style: { objectPosition: props.position || '50% 50%' } }));
}

function Footer(props) {
  return h('div', { className: cx('aes-footer', props.className), style: props.style },
    h('span', { className: 'aes-footer-logo' }, h(Logo, { width: props.logoWidth || 89 })),
    h('span', { className: 'aes-foot aes-footer-source' }, props.source),
    h('span', { className: 'aes-foot aes-footer-page' }, props.page));
}

function PointList(props) {
  return h('div', { className: 'aes-points' }, (props.items || []).map(function (p, i) {
    return h('div', { key: i, className: 'aes-point' },
      h('p', { className: 'aes-point-n' }, p.n || String(i + 1).padStart(2, '0')),
      h('p', { className: 'aes-point-head' }, p.head),
      h('p', { className: 'aes-text aes-body aes-point-text' }, p.text));
  }));
}

/* Unnumbered list: a marker (the ✦ star by default, or a dot) in field-ink, then the item. Use it
   whenever order doesn't matter, so not every list reads as numbered points. */
function BulletList(props) {
  var mark = props.marker === 'dot' ? '•' : (props.marker || '✦');
  return h('ul', { className: cx('aes-bullets', props.size === 'lead' && 'aes-bullets-lead', props.className) }, (props.items || []).map(function (it, i) {
    var item = typeof it === 'string' ? { text: it } : it;
    return h('li', { key: i },
      h('span', { className: 'aes-bullet-mark', 'aria-hidden': 'true' }, mark),
      h('span', { className: 'aes-bullet-text' },
        item.head ? h('span', { className: 'aes-bullet-head' }, item.head) : null,
        item.text ? h('span', { className: 'aes-bullet-body' }, item.text) : null));
  }));
}

/* Card: a container that groups one idea. outline = 1px rule; fill = the primary field;
   secondary = the secondary field; soft = the warm off-white. Square corners, no shadow. */
function Card(props) {
  return h('div', { className: cx('aes-card', 'aes-card-' + (props.kind || 'outline'), props.className), style: props.style },
    props.label ? h(Text, { role: 'label', className: 'aes-card-label' }, props.label) : null,
    props.title ? h('p', { className: 'aes-card-title' }, props.title) : null,
    props.text ? h('p', { className: 'aes-text aes-body aes-card-text' }, props.text) : null,
    props.children);
}

/* Divider: a 1px rule in the rule color that separates groups (between rows, columns or sections). */
function Divider(props) {
  return h('div', { className: cx('aes-divider', props.vertical && 'aes-divider-v', props.className), role: 'separator', style: props.style });
}

/* ── 16:9 slides ──────────────────────────────────────────────────── */
var SIDE_OF = function (photoSide) { return photoSide === 'left' ? 'right' : 'left'; };

function Slide(props) {
  var scale = props.scale || 0.4;
  return h('div', { className: 'aes-slide-frame', style: { width: 1920 * scale, height: 1080 * scale } },
    h('div', {
      className: 'aes-slide', 'data-pairing': props.pairing, 'data-product': props.product,
      style: { transform: 'scale(' + scale + ')' }
    }, props.children));
}

function SlideColumn(props) {
  return h('div', { className: cx('aes-slide-column', 'aes-at-' + (props.side || 'left'), props.centered && 'aes-slide-centered'), style: props.gap ? { gap: 'var(--gap-' + props.gap + ')' } : null },
    props.title ? h(Text, { role: 'title' }, props.title) : null,
    props.children);
}

function SlideBleed(props) {
  return h('div', { className: cx('aes-bleed', props.width === 'major' ? 'aes-bleed-major' : 'aes-bleed-minor', props.side === 'left' ? 'aes-bleed-left' : 'aes-bleed-right', props.block && 'aes-block'), 'data-pairing': props.block ? props.pairing : undefined }, props.children);
}

/* The fixed frame: tracker, optional closing line, footer. `wide` runs it across the full content
   width (1664) for slides without a bleeding photo. */
function frame(props, side, wide) {
  var w = wide && 'aes-wide';
  return [
    props.chapters ? h('div', { key: 't', className: cx('aes-slide-tracker', 'aes-at-' + side, w) }, h(Tracker, { chapters: props.chapters, current: props.current, pills: props.navPills, pillCurrent: props.navCurrent })) : null,
    props.closing ? h('div', { key: 'c', className: cx('aes-slide-closing', 'aes-at-' + side, w) }, h(ClosingLine, { loop: props.loop }, props.closing)) : null,
    h('div', { key: 'f', className: cx('aes-slide-footer', 'aes-at-' + side, w) }, h(Footer, { source: props.source, page: props.page }))
  ];
}

/* Body of a list slide: numbered points, bullets or the caller's own children. */
function listBody(props) {
  return [
    props.points ? h(PointList, { key: 'p', items: props.points }) : null,
    props.bullets ? h(BulletList, { key: 'b', items: props.bullets, marker: props.marker }) : null,
    props.children
  ];
}

function chapterPairing(props) {
  return props.chapters && props.chapters[props.current] ? props.chapters[props.current].pairing : props.pairing;
}

/* The opening and closing color block takes the chosen pairing's field (Rose Gold by default); the wordmark is white only where the type on the field is white. */
var onWhite = function (pairing) { return pairing === 'silken-rose' ? 'white' : 'black'; };

function SlideOpening(props) {
  return h(Slide, { scale: props.scale },
    h(SlideBleed, { side: 'left', width: 'major' }, h(Photo, { src: props.photo, alt: props.photoAlt, position: props.photoPosition })),
    h(SlideBleed, { side: 'right', width: 'minor', block: true, pairing: props.pairing },
      h('div', { className: 'aes-block-logo' }, h(Logo, { tone: onWhite(props.pairing), width: 210 })),
      h(Stack, { gap: 'apart', className: 'aes-block-words' },
        h(Stack, { gap: 'near' },
          h(Text, { role: 'label', tone: 'on-field' }, props.label),
          h(Text, { role: 'display', as: 'h1', tone: 'on-field' }, props.promise)),
        h(Text, { role: 'label', tone: 'on-field' }, props.date))),
    props.band ? h('div', { className: 'aes-slide-band' }, h(Band, null)) : null);
}

function SlideChapter(props) {
  return h(Slide, { scale: props.scale, pairing: chapterPairing(props) },
    h(SlideColumn, { side: 'left', centered: true },
      h(Text, { role: 'chapter', tone: 'field' }, props.number),
      h(Stack, { gap: 'follow' },
        h(Text, { role: 'display', as: 'h1' }, props.title),
        h(Text, { role: 'lead', tone: 'grey' }, props.question))),
    h(SlideBleed, { side: 'right' }, h(Photo, { src: props.photo, alt: props.photoAlt, position: props.photoPosition })),
    frame({ chapters: props.chapters, current: props.current, page: props.page, source: props.source }, 'left'));
}

function SlideContent(props) {
  var side = SIDE_OF(props.photoSide);
  return h(Slide, { scale: props.scale, pairing: chapterPairing(props) },
    h(SlideColumn, { side: side, title: props.title },
      h(Stack, { gap: 'section' },
        props.lead ? h(Text, { role: 'lead' }, props.lead) : null,
        listBody(props))),
    h(SlideBleed, { side: props.photoSide || 'right' }, h(Photo, { src: props.photo, alt: props.photoAlt, position: props.photoPosition })),
    frame(Object.assign({}, props), side));
}

/* Text only: no photo, so the column runs the full content width; `columns: 2` splits the body. */
function SlideText(props) {
  return h(Slide, { scale: props.scale, pairing: chapterPairing(props), product: props.product },
    h('div', { className: 'aes-slide-column aes-at-left aes-wide' },
      props.title ? h(Text, { role: 'title' }, props.title) : null,
      h(Stack, { gap: 'section' },
        props.lead ? h(Text, { role: 'lead', className: 'aes-measure' }, props.lead) : null,
        h('div', { className: props.columns === 2 ? 'aes-two-col' : 'aes-one-col' }, listBody(props)))),
    frame(Object.assign({}, props), 'left', true));
}

/* Inset photo: the photo sits inside the margins (title top to content bottom) instead of bleeding.
   For product shots, clinical photos and anything that must not be cropped: photoFit 'contain' sets it
   on the product backdrop. */
function SlideMedia(props) {
  var photoSide = props.photoSide || 'right';
  var side = SIDE_OF(photoSide);
  return h(Slide, { scale: props.scale, pairing: chapterPairing(props), product: props.product },
    h(SlideColumn, { side: side, title: props.title },
      h(Stack, { gap: 'section' },
        props.lead ? h(Text, { role: 'lead' }, props.lead) : null,
        listBody(props))),
    h('figure', { className: cx('aes-inset', 'aes-inset-' + photoSide, props.photoFit === 'contain' && 'aes-inset-contain') },
      h('div', { className: 'aes-inset-photo' }, props.photo
        ? h('img', { src: props.photo, alt: props.photoAlt || '', style: { objectPosition: props.photoPosition || '50% 50%' } })
        : h('span', { className: 'aes-label' }, 'Photo · ' + (props.photoAlt || 'inset'))),
      props.caption ? h('figcaption', { className: 'aes-foot aes-inset-caption' }, props.caption) : null),
    frame(Object.assign({}, props), side));
}

/* Two to four images side by side across the content width, each with an optional label above and
   caption below: before and after, product views, conditions, handpieces. */
function SlideGallery(props) {
  var images = (props.images || []).slice(0, 4);
  return h(Slide, { scale: props.scale, pairing: chapterPairing(props), product: props.product },
    h('div', { className: 'aes-slide-column aes-at-left aes-wide' },
      props.title ? h(Text, { role: 'title' }, props.title) : null,
      props.lead ? h(Text, { role: 'lead', className: 'aes-measure' }, props.lead) : null,
      h('div', { className: 'aes-gallery', style: { gridTemplateColumns: 'repeat(' + Math.max(images.length, 1) + ', 1fr)' } }, images.map(function (im, i) {
        return h('figure', { key: i, className: 'aes-gallery-item' },
          im.label ? h(Text, { role: 'label' }, im.label) : null,
          h('div', { className: cx('aes-gallery-photo', im.fit === 'contain' && 'aes-inset-contain') }, im.src
            ? h('img', { src: im.src, alt: im.alt || '', style: { objectPosition: im.position || '50% 50%' } })
            : h('span', { className: 'aes-label' }, 'Photo · ' + (im.alt || (i + 1)))),
          im.caption ? h('figcaption', { className: 'aes-foot' }, im.caption) : null);
      }))),
    frame(Object.assign({}, props), 'left', true));
}

/* Two to four cards in a row (up to two rows). Outline cards by default; mark one `kind: 'fill'`
   (primary) or 'secondary' to lead the eye, never all of them. */
function SlideCards(props) {
  var cards = props.cards || [];
  return h(Slide, { scale: props.scale, pairing: chapterPairing(props), product: props.product },
    h('div', { className: 'aes-slide-column aes-at-left aes-wide' },
      props.title ? h(Text, { role: 'title' }, props.title) : null,
      h(Stack, { gap: 'section' },
        props.lead ? h(Text, { role: 'lead', className: 'aes-measure' }, props.lead) : null,
        h('div', { className: 'aes-cards', style: { gridTemplateColumns: 'repeat(' + (props.columns || Math.min(cards.length, 3) || 1) + ', 1fr)' } }, cards.map(function (c, i) {
          return h(Card, { key: i, kind: c.kind, label: c.label, title: c.title, text: c.text });
        })))),
    frame(Object.assign({}, props), 'left', true));
}

/* A blank slide with only the fixed frame (tracker, title, footer) and a free content area, for any
   layout the other types don't cover: a horizontal timeline, a chart, a process, a map. Place the
   children yourself inside the area (1664 × 803 from the title top), with the tokens and type scale. */
function SlideBlank(props) {
  return h(Slide, { scale: props.scale, pairing: chapterPairing(props), product: props.product },
    props.title ? h('div', { className: 'aes-slide-column aes-at-left aes-wide' }, h(Text, { role: 'title' }, props.title)) : null,
    h('div', { className: cx('aes-slide-area', props.title && 'aes-slide-area-titled') }, props.children),
    frame(Object.assign({}, props), 'left', true));
}

function SlideHeroNumber(props) {
  var side = SIDE_OF(props.photoSide || 'left');
  return h(Slide, { scale: props.scale, pairing: chapterPairing(props) },
    h(SlideBleed, { side: props.photoSide || 'left' }, h(Photo, { src: props.photo, alt: props.photoAlt, position: props.photoPosition })),
    h(SlideColumn, { side: side, title: props.title },
      h(Stack, { gap: 'section' },
        h(Stack, { gap: 'follow' },
          h(Text, { role: 'chapter', tone: props.figureTone }, props.figure),
          h(Text, { role: 'lead' }, props.lead)),
        props.stats ? h(Stack, { direction: 'row', gap: 'wide' }, props.stats.slice(0, 3).map(function (s, i) { return h(Stat, { key: i, value: s.value, label: s.label }); })) : null)),
    frame(Object.assign({}, props), side));
}

function SlideProfile(props) {
  var side = SIDE_OF(props.photoSide || 'left');
  return h(Slide, { scale: props.scale, pairing: chapterPairing(props) },
    h(SlideBleed, { side: props.photoSide || 'left' }, h(Photo, { src: props.photo, alt: props.photoAlt, position: props.photoPosition })),
    h(SlideColumn, { side: side },
      h(Stack, { gap: 'near' },
        h(Text, { role: 'label' }, props.label),
        h(Text, { role: 'display', as: 'h1' }, props.name)),
      h(Stack, { gap: 'section' },
        h(Text, { role: 'lead' }, props.quote),
        props.stats ? h(Stack, { direction: 'row', gap: 'wide' }, props.stats.slice(0, 3).map(function (s, i) { return h(Stat, { key: i, value: s.value, label: s.label }); })) : null)),
    frame(Object.assign({}, props), side));
}

function SlideProduct(props) {
    return h(Slide, { scale: props.scale, product: props.product },
    h(SlideColumn, { side: 'left' },
      h('div', null, h(ProductLogo, { product: props.product, variant: props.logoVariant, height: 55 })),
      h(Stack, { gap: 'follow' },
        h(Text, { role: 'display', as: 'h1' }, props.promise),
        h(Text, { role: 'lead', tone: 'grey' }, props.lead)),
      props.pills ? h(Stack, { direction: 'row', gap: 'near' }, props.pills.map(function (t) { return h(Pill, { key: t, size: 'large' }, t); })) : null),
    h(SlideBleed, { side: 'right' }, h(Photo, { src: props.photo, alt: props.photoAlt, position: props.photoPosition })),
    frame(Object.assign({}, props), 'left'));
}

function SlideClosing(props) {
  return h(Slide, { scale: props.scale },
    h(SlideBleed, { side: 'left', width: 'minor', block: true, pairing: props.pairing },
      h('div', { className: 'aes-block-logo' }, h(Logo, { tone: onWhite(props.pairing), width: 210 })),
      h(Stack, { gap: 'follow', className: 'aes-block-words' },
        h(Text, { role: 'display', as: 'h1', tone: 'on-field' }, props.line),
        h(Text, { role: 'lead', tone: 'on-field' }, props.lead))),
    h(SlideBleed, { side: 'right', width: 'major' }, h(Photo, { src: props.photo, alt: props.photoAlt, position: props.photoPosition })));
}

/* ── Web pages (web.md) ───────────────────────────────────────────────
   Each Web* component renders the plain aes-w-* markup from bundle.css, so the same page can be
   written by hand (a HubSpot Custom HTML module) or with these components (an artifact). */
function Button(props) {
  var cls = cx('aes-w-btn', 'aes-w-btn-' + (props.kind || 'field'), props.size === 'small' && 'aes-w-btn-small', 'aes-web-button', props.className);
  return props.href
    ? h('a', { className: cls, href: props.href }, props.children)
    : h('button', { type: props.type || 'button', className: cls, onClick: props.onClick }, props.children);
}

function webPhoto(props) {
  return props.photo
    ? h('img', { src: props.photo, alt: props.photoAlt || '', style: { objectPosition: props.photoPosition || '50% 50%' } })
    : h(Photo, { alt: props.photoAlt });
}

function webActions(items) {
  return items && items.length ? h('div', { className: 'aes-w-actions' }, items.map(function (a, i) {
    return h(Button, { key: i, kind: a.kind || (i ? 'outline' : 'ink'), href: a.href }, a.label);
  })) : null;
}

function webIcon(name) {
  return name ? h('span', { className: 'aes-w-icon', 'aria-hidden': 'true', dangerouslySetInnerHTML: { __html: ICONS[name] || '' } }) : null;
}

function webGround(ground) {
  return ground && ground !== 'page' ? 'aes-w-ground-' + ground : null;
}

function WebPage(props) {
  return h('div', { className: cx('aes-web', props.className), 'data-product': props.product, 'data-pairing': props.product ? undefined : props.pairing, style: props.style }, props.children);
}

function WebHeader(props) {
  return h('header', { className: 'aes-w-header' }, h('div', { className: 'aes-w-wrap' },
    h('a', { href: props.home || '#top', 'aria-label': 'Lumenis home' }, h(Logo, { width: 110 })),
    props.links ? h('nav', { 'aria-label': 'Page' }, h('ul', { className: 'aes-w-nav aes-web-small' }, props.links.map(function (l, i) {
      return h('li', { key: i }, h('a', { href: l.href }, l.label));
    }))) : null,
    h('div', { className: 'aes-w-header-end' }, props.extra,
      props.cta ? h(Button, { kind: props.cta.kind || 'field', size: 'small', href: props.cta.href }, props.cta.label) : null)));
}

function WebHero(props) {
  return h('section', { className: 'aes-w-hero', 'data-product': props.product, 'data-pairing': props.product ? undefined : props.pairing, 'aria-label': props.label || (typeof props.title === 'string' ? props.title : undefined) },
    h('div', { className: 'aes-w-hero-photo' }, webPhoto(props)),
    h('div', { className: 'aes-w-block' },
      h('div', null, props.product
        ? h(ProductLogo, { product: props.product, variant: props.logoVariant, height: props.logoHeight || 40 })
        : h(Logo, { tone: onWhite(props.pairing), width: 160 })),
      h('div', { className: 'aes-w-block-words' },
        h('h1', { className: 'aes-web-h1' }, props.title),
        props.intro ? h('p', { className: 'aes-web-body' }, props.intro) : null,
        props.meta ? h('div', { className: 'aes-w-meta' }, props.meta.map(function (m, i) { return h('span', { key: i }, m); })) : null,
        webActions(props.actions))),
    webIcon(props.icon));
}

function WebSectionHead(props) {
  return h('div', { className: 'aes-w-head' },
    props.title ? h('h2', { className: 'aes-web-h2', id: props.titleId }, props.title) : null,
    props.lead ? h('p', { className: 'aes-web-lead' }, props.lead) : null,
    props.intro ? h('p', { className: 'aes-web-body' }, props.intro) : null);
}

function WebSection(props) {
  return h('section', {
    id: props.id, className: cx('aes-w-section', webGround(props.ground), props.className),
    'data-product': props.product, 'data-pairing': props.product ? undefined : props.pairing
  }, h('div', { className: 'aes-w-wrap' },
    props.title || props.lead || props.intro ? h(WebSectionHead, { title: props.title, lead: props.lead, intro: props.intro }) : null,
    props.children));
}

/* A section split on the grid: the words (seven columns) beside a 4:5 photo (five), or, with
   productImage, the words (five) beside the product render standing whole (seven). */
function WebSplit(props) {
  var isProduct = props.productImage !== undefined;
  var visual = isProduct
    ? h('div', { className: 'aes-w-visual aes-w-product' }, props.productImage ? h('img', { src: props.productImage, alt: props.productAlt || '' }) : h(Photo, { alt: props.productAlt }))
    : h('figure', { className: 'aes-w-visual aes-w-frame aes-w-r-45' }, webPhoto(props));
  return h('section', {
    id: props.id, className: cx('aes-w-section', webGround(props.ground), props.className),
    'data-product': props.product, 'data-pairing': props.product ? undefined : props.pairing
  }, h('div', { className: cx('aes-w-wrap', 'aes-w-grid', isProduct && 'is-product') },
    h('div', { className: 'aes-w-text' },
      h(WebSectionHead, { title: props.title, lead: props.lead, intro: props.intro }),
      props.children),
    visual));
}

function WebCards(props) {
  return h('div', { className: 'aes-w-cards' }, (props.items || []).map(function (c, i) {
    return h('article', { key: i, className: 'aes-w-card' },
      h('div', { className: 'aes-w-frame' }, c.image ? h('img', { src: c.image, alt: c.alt || '' }) : h(Photo, { alt: c.alt || 'Product render' })),
      h('div', { className: 'aes-w-card-text' },
        h('h3', { className: 'aes-web-h3' }, c.title),
        c.text ? h('p', { className: 'aes-web-small' }, c.text) : null));
  }));
}

function WebAgenda(props) {
  var state = React.useState(0), cur = state[0], setCur = state[1];
  var days = props.days || [], base = props.id || 'agenda';
  function move(i, key) {
    var n = (i + (key === 'ArrowRight' ? 1 : days.length - 1)) % days.length;
    setCur(n);
    var el = document.getElementById(base + '-tab-' + n);
    if (el) el.focus();
  }
  return h('div', null,
    h('div', { className: 'aes-w-tabs', role: 'tablist', 'aria-label': props.label || 'Agenda days' }, days.map(function (d, i) {
      return h('button', {
        key: i, type: 'button', role: 'tab', id: base + '-tab-' + i, 'aria-controls': base + '-day-' + i,
        'aria-selected': i === cur ? 'true' : 'false', tabIndex: i === cur ? 0 : -1, className: 'aes-w-tab',
        onClick: function () { setCur(i); },
        onKeyDown: function (e) { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') move(i, e.key); }
      }, h('span', null, d.label), h('span', null, d.date));
    })),
    days.map(function (d, i) {
      return h('div', { key: i, id: base + '-day-' + i, role: 'tabpanel', 'aria-labelledby': base + '-tab-' + i, className: 'aes-w-day', hidden: i !== cur },
        h('ol', { className: 'aes-w-timeline' }, (d.sessions || []).map(function (s, j) {
          return h('li', { key: j, className: 'aes-w-session' },
            h('div', { className: 'aes-w-session-meta' }, h('span', { className: 'aes-web-eyebrow' }, s.time), s.tag ? h('span', { className: 'aes-w-tag' }, s.tag) : null),
            h('h3', { className: 'aes-web-h3' }, s.title),
            s.subtitle ? h('p', { className: 'aes-w-session-sub' }, s.subtitle) : null,
            s.text ? h('p', { className: 'aes-web-body' }, s.text) : null);
        })));
    }));
}

function WebPeople(props) {
  return h('div', { className: 'aes-w-people' }, (props.people || []).map(function (p, i) {
    return h('div', { key: i, className: 'aes-w-person' },
      h('div', { className: 'aes-w-portrait' }, p.photo ? h('img', { src: p.photo, alt: p.name }) : null),
      h('h3', { className: 'aes-web-h3' }, p.name),
      p.credentials ? h('p', { className: 'aes-w-cred' }, p.credentials) : null,
      p.text ? h('p', { className: 'aes-web-small' }, p.text) : null);
  }));
}

function WebRows(props) {
  return h('ul', { className: 'aes-w-rows' }, (props.items || []).map(function (r, i) {
    return h('li', { key: i },
      h('span', { className: 'aes-web-eyebrow' }, r.when),
      h('div', { className: 'aes-w-item' }, h('h3', { className: 'aes-web-h3' }, r.title), r.text ? h('p', { className: 'aes-web-small' }, r.text) : null));
  }));
}

function WebFacts(props) {
  return h('div', { className: 'aes-w-facts' }, (props.items || []).map(function (f, i) {
    return h('div', { key: i, className: 'aes-w-fact' }, h('p', { className: 'aes-web-eyebrow' }, f.label), h('p', { className: 'aes-web-number' }, f.value));
  }));
}

function WebClosing(props) {
  return h('section', { id: props.id, className: 'aes-w-closing', 'data-product': props.product, 'data-pairing': props.product ? undefined : props.pairing, 'aria-label': typeof props.title === 'string' ? props.title : 'Closing' },
    h('div', { className: 'aes-w-block' },
      h('div', { className: 'aes-w-block-words' },
        h('h2', { className: 'aes-web-h2' }, props.title),
        props.facts ? h(WebFacts, { items: props.facts }) : null,
        props.intro ? h('p', { className: 'aes-web-body' }, props.intro) : null,
        webActions(props.actions))),
    h('div', { className: 'aes-w-closing-photo' }, webPhoto(props)),
    webIcon(props.icon));
}

function WebFooter(props) {
  return h('footer', { className: 'aes-w-footer' },
    h('div', { className: 'aes-w-wrap' },
      h(Logo, { width: 89 }),
      props.links ? h('ul', { className: 'aes-w-footer-links aes-web-small' }, props.links.map(function (l, i) {
        return h('li', { key: i }, h('a', { className: 'aes-w-link', href: l.href }, l.label));
      })) : null,
      h('p', { className: 'aes-web-small' }, props.legal || 'Copyright © 2010–' + new Date().getFullYear() + ' Lumenis Be Ltd. All rights reserved.'),
      props.note ? h('p', { className: 'aes-web-small aes-w-footer-note' }, props.note) : null),
    props.band === false ? null : h(Band, null));
}

var EXPORTS = {
  Text: Text, Stack: Stack, Stat: Stat, Pill: Pill, ClosingLine: ClosingLine, Tracker: Tracker, Footer: Footer,
  PointList: PointList, BulletList: BulletList, Card: Card, Divider: Divider,
  Logo: Logo, ProductLogo: ProductLogo, Icon: Icon, Band: Band, Photo: Photo, Button: Button,
  WebPage: WebPage, WebHeader: WebHeader, WebHero: WebHero, WebSection: WebSection, WebSectionHead: WebSectionHead,
  WebSplit: WebSplit, WebCards: WebCards, WebAgenda: WebAgenda, WebPeople: WebPeople, WebRows: WebRows, WebFacts: WebFacts,
  WebClosing: WebClosing, WebFooter: WebFooter,
  Slide: Slide, SlideColumn: SlideColumn, SlideBleed: SlideBleed,
  SlideOpening: SlideOpening, SlideChapter: SlideChapter, SlideContent: SlideContent, SlideHeroNumber: SlideHeroNumber,
  SlideProfile: SlideProfile, SlideProduct: SlideProduct, SlideClosing: SlideClosing,
  SlideText: SlideText, SlideMedia: SlideMedia, SlideGallery: SlideGallery, SlideCards: SlideCards, SlideBlank: SlideBlank,
  PRODUCTS: PRODUCTS, ICON_NAMES: Object.keys(ICONS), LOGO_KEYS: Object.keys(LOGOS)
};
