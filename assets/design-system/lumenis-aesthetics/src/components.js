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
    className: cx('la-text', 'la-' + role, props.tone && 'la-tone-' + props.tone, props.className),
    style: props.style
  }, props.children);
}

/* ── Layout ───────────────────────────────────────────────────────── */
function Stack(props) {
  return h('div', { className: cx(props.direction === 'row' ? 'la-row' : 'la-stack', 'la-gap-' + (props.gap || 'tight'), props.className), style: props.style }, props.children);
}

function Stat(props) {
  return h(Stack, { gap: 'near' },
    h(Text, { role: props.size === 'hero' ? 'hero' : 'number', tone: props.tone }, props.value),
    h(Text, { role: 'label' }, props.label));
}

function Pill(props) {
  var kind = props.kind || 'field';
  return h('span', { className: cx('la-pill', kind !== 'field' && 'la-pill-' + kind, props.size === 'large' && 'la-pill-large') }, props.children);
}

function ClosingLine(props) {
  return h('div', { className: cx('la-closing', props.className), style: props.style },
    h('span', { className: 'la-lead la-closing-arrow', 'aria-hidden': 'true' }, props.loop ? '↻' : '→'),
    h('p', { className: 'la-text la-lead la-closing-text' }, props.children));
}

function Tracker(props) {
  var chapters = props.chapters || [];
  return h('div', { className: cx('la-tracker-row', props.className), style: props.style },
    h('span', { className: 'la-tracker' }, (chapters[props.current] || {}).name),
    h('span', { className: 'la-dashes', 'aria-hidden': 'true' }, chapters.map(function (c, i) {
      return h('span', { key: i, 'data-pairing': c.pairing, className: cx('la-dash', i === props.current && 'la-dash-current') });
    })),
    props.pills ? h('span', { className: 'la-tracker-pills' }, props.pills.map(function (p, i) {
      return h(Pill, { key: i, kind: i === props.pillCurrent ? 'field' : 'tint' }, p);
    })) : null);
}

/* ── Brand ────────────────────────────────────────────────────────── */
function Logo(props) {
  var key = 'lumenis-' + (props.mark || 'wordmark') + '-' + (props.tone || 'black');
  return h('img', { className: 'la-logo', src: LOGOS[key], alt: 'Lumenis', style: { width: props.width || 89 } });
}

function ProductLogo(props) {
  var key = props.product + '/' + (props.variant || (PRODUCTS[props.product] || {}).logo || 'color');
  var src = LOGOS[key];
  if (!src) return h('span', { className: 'la-label' }, 'No logo file: ' + key);
  return h('img', { className: 'la-logo', src: src, alt: props.alt || PRODUCTS[props.product].name, style: { height: props.height || 55, width: 'auto' } });
}

function Icon(props) {
  var size = props.size || 89;
  return h('span', {
    className: 'la-icon', role: 'img', 'aria-label': props.label || props.name,
    style: { width: size, height: size, color: props.color },
    dangerouslySetInnerHTML: { __html: ICONS[props.name] || '' }
  });
}

function Band(props) {
  var stripes = [];
  for (var i = 1; i <= 19; i++) stripes.push(h('span', { key: i, style: { background: 'var(--band-' + i + ')' } }));
  return h('div', { className: 'la-band', style: { height: props.height || 13 }, 'aria-hidden': 'true' }, stripes);
}

function Photo(props) {
  if (!props.src) {
    return h('div', { className: 'la-photo la-photo-empty', role: 'img', 'aria-label': props.alt || 'Photo' },
      h('span', { className: 'la-label' }, 'Photo · ' + (props.alt || 'bleeds to the edge')));
  }
  return h('div', { className: 'la-photo' }, h('img', { src: props.src, alt: props.alt || '', style: { objectPosition: props.position || '50% 50%' } }));
}

function Footer(props) {
  return h('div', { className: cx('la-footer', props.className), style: props.style },
    h('span', { className: 'la-footer-logo' }, h(Logo, { width: props.logoWidth || 89 })),
    h('span', { className: 'la-foot la-footer-source' }, props.source),
    h('span', { className: 'la-foot la-footer-page' }, props.page));
}

function PointList(props) {
  return h('div', { className: 'la-points' }, (props.items || []).map(function (p, i) {
    return h('div', { key: i, className: 'la-point' },
      h('p', { className: 'la-point-n' }, p.n || String(i + 1).padStart(2, '0')),
      h('p', { className: 'la-point-head' }, p.head),
      h('p', { className: 'la-text la-body la-point-text' }, p.text));
  }));
}

/* ── 16:9 slides ──────────────────────────────────────────────────── */
var SIDE_OF = function (photoSide) { return photoSide === 'left' ? 'right' : 'left'; };

function Slide(props) {
  var scale = props.scale || 0.4;
  return h('div', { className: 'la-slide-frame', style: { width: 1920 * scale, height: 1080 * scale } },
    h('div', {
      className: 'la-slide', 'data-pairing': props.pairing, 'data-product': props.product,
      style: { transform: 'scale(' + scale + ')' }
    }, props.children));
}

function SlideColumn(props) {
  return h('div', { className: cx('la-slide-column', 'la-at-' + (props.side || 'left'), props.centered && 'la-slide-centered'), style: props.gap ? { gap: 'var(--gap-' + props.gap + ')' } : null },
    props.title ? h(Text, { role: 'title' }, props.title) : null,
    props.children);
}

function SlideBleed(props) {
  return h('div', { className: cx('la-bleed', props.width === 'major' ? 'la-bleed-major' : 'la-bleed-minor', props.side === 'left' ? 'la-bleed-left' : 'la-bleed-right', props.block && 'la-block'), 'data-pairing': props.block ? props.pairing : undefined }, props.children);
}

function frame(props, side) {
  return [
    props.chapters ? h('div', { key: 't', className: cx('la-slide-tracker', 'la-at-' + side) }, h(Tracker, { chapters: props.chapters, current: props.current, pills: props.navPills, pillCurrent: props.navCurrent })) : null,
    props.closing ? h('div', { key: 'c', className: cx('la-slide-closing', 'la-at-' + side) }, h(ClosingLine, { loop: props.loop }, props.closing)) : null,
    h('div', { key: 'f', className: cx('la-slide-footer', 'la-at-' + side) }, h(Footer, { source: props.source, page: props.page }))
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
      h('div', { className: 'la-block-logo' }, h(Logo, { tone: onWhite(props.pairing), width: 210 })),
      h(Stack, { gap: 'apart', className: 'la-block-words' },
        h(Stack, { gap: 'near' },
          h(Text, { role: 'label', tone: 'on-field' }, props.label),
          h(Text, { role: 'display', as: 'h1', tone: 'on-field' }, props.promise)),
        h(Text, { role: 'label', tone: 'on-field' }, props.date))),
    props.band ? h('div', { className: 'la-slide-band' }, h(Band, null)) : null);
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
        props.points ? h(PointList, { items: props.points }) : null,
        props.children)),
    h(SlideBleed, { side: props.photoSide || 'right' }, h(Photo, { src: props.photo, alt: props.photoAlt, position: props.photoPosition })),
    frame(Object.assign({}, props), side));
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
      h('div', { className: 'la-block-logo' }, h(Logo, { tone: onWhite(props.pairing), width: 210 })),
      h(Stack, { gap: 'follow', className: 'la-block-words' },
        h(Text, { role: 'display', as: 'h1', tone: 'on-field' }, props.line),
        h(Text, { role: 'lead', tone: 'on-field' }, props.lead))),
    h(SlideBleed, { side: 'right', width: 'major' }, h(Photo, { src: props.photo, alt: props.photoAlt, position: props.photoPosition })));
}

var EXPORTS = {
  Text: Text, Stack: Stack, Stat: Stat, Pill: Pill, ClosingLine: ClosingLine, Tracker: Tracker, Footer: Footer,
  PointList: PointList, Logo: Logo, ProductLogo: ProductLogo, Icon: Icon, Band: Band, Photo: Photo,
  Slide: Slide, SlideColumn: SlideColumn, SlideBleed: SlideBleed,
  SlideOpening: SlideOpening, SlideChapter: SlideChapter, SlideContent: SlideContent, SlideHeroNumber: SlideHeroNumber,
  SlideProfile: SlideProfile, SlideProduct: SlideProduct, SlideClosing: SlideClosing,
  PRODUCTS: PRODUCTS, ICON_NAMES: Object.keys(ICONS), LOGO_KEYS: Object.keys(LOGOS)
};
