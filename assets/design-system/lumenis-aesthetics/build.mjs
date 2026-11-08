// Builds the generated files of the Lumenis Aesthetics design system from its sources:
//   tokens.json            -> tokens.css
//   src/components.js
//   + assets/ (logos, icons) -> components/bundle.js
// and checks the index (design-system.json) lists every asset file.
// Run from anywhere: node assets/design-system/lumenis-aesthetics/build.mjs   (add --check to build nothing)
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const CHECK = process.argv.includes('--check');
const TITLE = 'Lumenis Aesthetics';
const NAMESPACE = 'LumenisAesthetics';
const problems = [];

/* ── Products: one row per product module ── */
const PRODUCTS = {
  trilift: { name: 'triLift 2.0', group: 'triLift-2.0', prefix: 'trilift-2.0-', logo: 'color', module: 'products/trilift-2.0/product.md' },
  'stellar-m22': { name: 'Stellar M22', group: 'Stellar-M22', prefix: 'stellar-m22-', logo: 'black', module: 'products/stellar-m22/product.md' },
  'splendor-x': { name: 'SPLENDOR X', group: 'SPLENDOR-X', prefix: 'splendor-x-', logo: 'color', module: 'products/splendor-x/product.md' },
  folix: { name: 'FoLix', group: 'FoLix', prefix: 'folix-', logo: 'color', module: 'products/folix/product.md' },
  'ultrapulse-alpha': { name: 'UltraPulse Alpha', group: 'UltraPulse-Alpha', prefix: 'ultrapulse-alpha-', logo: 'color', module: 'products/ultrapulse-alpha/product.md' },
};

/* ── tokens.json -> tokens.css ── */
const tokens = JSON.parse(readFileSync(join(ROOT, 'tokens.json'), 'utf8'));
const NAME = /^[A-Za-z0-9][A-Za-z0-9_.-]{0,63}$/;
const COLOR = /^(#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|(rgba?|hsla?|oklch|oklab|lab|lch)\([0-9.,%\s/+-]+\))$/i;
const ALIAS = /^\{([A-Za-z0-9][A-Za-z0-9_.-]{0,63})\}$/;
const themes = tokens.color.themes.map(t => t.id);
const first = themes[0];
const seen = new Set();
const colorNames = new Set(tokens.color.tokens.map(t => t.name));

const css = v => { const m = ALIAS.exec(v); return m ? `var(--${m[1]})` : v; };
function checkColor(t, v, theme) {
  const m = ALIAS.exec(v);
  if (m) { if (!colorNames.has(m[1]) || m[1] === t.name) problems.push(`color ${t.name} (${theme}): alias {${m[1]}} has no color token`); return; }
  if (!COLOR.test(v)) problems.push(`color ${t.name} (${theme}): "${v}" is not a value the page reads`);
}
function claim(name, fam) {
  if (!NAME.test(name)) problems.push(`${fam} ${name}: not a valid token name`);
  if (seen.has(name)) problems.push(`${fam} ${name}: name used twice`);
  seen.add(name);
}

const out = [`/* ${TITLE} — generated from tokens.json */`];
const rootColors = [];
for (const t of tokens.color.tokens) {
  claim(t.name, 'color');
  if (!t.usage) problems.push(`color ${t.name}: no usage note`);
  const v = typeof t.value === 'string' ? t.value : (t.value[first] ?? Object.values(t.value)[0]);
  if (typeof t.value === 'object') for (const [th, val] of Object.entries(t.value)) { if (!themes.includes(th)) problems.push(`color ${t.name}: unknown theme ${th}`); checkColor(t, val, th); }
  else checkColor(t, v, first);
  rootColors.push(`  --${t.name}: ${css(v)};`);
}
out.push(`:root, [data-theme="${first}"] {`, ...rootColors, '}');
for (const th of themes.slice(1)) {
  const lines = tokens.color.tokens.filter(t => typeof t.value === 'object').map(t => `  --${t.name}: ${css(t.value[th] ?? t.value[first])};`);
  out.push(`[data-theme="${th}"] {`, ...lines, '}');
}
const LENGTH = /^(-?[0-9.]+(px|rem|em|%)?|0)$/;
const plain = [];
for (const [fam, block] of Object.entries(tokens)) {
  if (['name', 'version', 'meta', 'color', 'type'].includes(fam)) continue;
  for (const t of block.tokens) {
    claim(t.name, fam);
    if (!t.usage) problems.push(`${fam} ${t.name}: no usage note`);
    if ((fam === 'spacing' || fam === 'radius') && !LENGTH.test(t.value)) problems.push(`${fam} ${t.name}: "${t.value}" is not a length`);
    plain.push(`  --${t.name}: ${t.value};`);
  }
}
for (const [k, v] of Object.entries(tokens.type.families)) plain.push(`  --font-${k}: ${v};`);
out.push(':root {', ...plain, '}');
for (const g of tokens.type.groups) for (const s of g.styles) {
  const fam = s.family || g.family;
  const decl = [`font-family: var(--font-${fam})`, `font-size: ${s.fontSize}`];
  if (s.lineHeight != null) decl.push(`line-height: ${s.lineHeight}`);
  if (s.letterSpacing) decl.push(`letter-spacing: ${s.letterSpacing}`);
  if (s.fontWeight != null) decl.push(`font-weight: ${s.fontWeight}`);
  if (s.fontStyle) decl.push(`font-style: ${s.fontStyle}`);
  out.push(`.${s.name} { ${decl.join('; ')}; }`);
  if (!s.usage) problems.push(`type ${s.name}: no usage note`);
}
for (const f of tokens.type.fonts) out.push(`@font-face { font-family: "${f.family}"; src: url("${f.file.includes('/') ? f.file : 'fonts/' + f.file}"); font-weight: ${f.weight}; font-style: ${f.style || 'normal'}; font-display: swap; }`);
const tokensCss = out.join('\n') + '\n';

/* ── assets -> LOGOS (data: URIs, so each file keeps its own embedded styles) and ICONS (inline, currentColor) ── */
const svgDir = g => join(ROOT, 'assets', g);
const svgs = g => readdirSync(svgDir(g)).filter(f => f.endsWith('.svg')).sort();
const LOGOS = {};
for (const f of svgs('Logos')) LOGOS[basename(f, '.svg')] = 'data:image/svg+xml;base64,' + readFileSync(join(svgDir('Logos'), f)).toString('base64');
for (const [id, p] of Object.entries(PRODUCTS)) for (const f of svgs(p.group)) {
  const b = basename(f, '.svg');
  LOGOS[`${id}/${b.startsWith(p.prefix) ? b.slice(p.prefix.length) : b}`] = 'data:image/svg+xml;base64,' + readFileSync(join(svgDir(p.group), f)).toString('base64');
}
const ICONS = {};
for (const f of svgs('Icons')) {
  const text = readFileSync(join(svgDir('Icons'), f), 'utf8').replace(/<\?xml[^>]*\?>/g, '').replace(/<!--[\s\S]*?-->/g, '').trim();
  if (/<style|class=/.test(text)) problems.push(`assets/Icons/${f}: has embedded styles; icons must be plain currentColor strokes`);
  ICONS[basename(f, '.svg')] = text;
}

/* ── src -> components/bundle.js ── */
const src = readFileSync(join(ROOT, 'src', 'components.js'), 'utf8');
const exportNames = [...src.matchAll(/^\s+([A-Z][A-Za-z]+): [A-Z][A-Za-z]+,?/gm)].map(m => m[1]);
const listed = [...new Set(src.slice(src.indexOf('var EXPORTS')).match(/\b([A-Z][a-zA-Z]+): \1\b/g).map(s => s.split(':')[0]))];
const header = { format: 4, namespace: NAMESPACE, components: listed.map(name => ({ name })) };
const productData = Object.fromEntries(Object.entries(PRODUCTS).map(([id, p]) => [id, { name: p.name, logo: p.logo, module: p.module }]));
const bundle = [
  `/* @ds-bundle: ${JSON.stringify(header)} */`,
  `/* ${TITLE} — generated by build.mjs from src/components.js and assets/. Edit the sources, then rebuild. */`,
  '(function () {',
  "'use strict';",
  'var React = window.React;',
  `var LOGOS = ${JSON.stringify(LOGOS)};`,
  `var ICONS = ${JSON.stringify(ICONS)};`,
  `var PRODUCTS = ${JSON.stringify(productData)};`,
  src,
  `window.${NAMESPACE} = EXPORTS;`,
  '})();',
  ''
].join('\n');
if (/<\/script|<!--/i.test(bundle)) problems.push('components/bundle.js contains </script or <!-- , which breaks inlining');
void exportNames;

/* ── index check: every asset file has a record ── */
const indexPath = join(ROOT, 'design-system.json');
if (existsSync(indexPath)) {
  const index = JSON.parse(readFileSync(indexPath, 'utf8'));
  for (const g of readdirSync(join(ROOT, 'assets'))) {
    const files = readdirSync(svgDir(g)).filter(f => !f.endsWith('.md'));
    const recs = (index.assetGroups?.[g]?.files) || {};
    for (const f of files) if (!recs[f]) problems.push(`assets/${g}/${f}: not in design-system.json (upload it, then add its record)`);
    if (!existsSync(join(svgDir(g), 'README.md'))) problems.push(`assets/${g}: no README.md`);
  }
}

/* ── index.html: a local gallery of every preview, for viewing without the artifact (never published) ── */
const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const HEAD = '<link rel="stylesheet" href="tokens.css"><link rel="stylesheet" href="components/bundle.css">'
  + '<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js"></scr' + 'ipt>'
  + '<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"></scr' + 'ipt>'
  + '<script src="components/bundle.js"></scr' + 'ipt>';
const cards = readdirSync(join(ROOT, 'components'), { withFileTypes: true }).filter(d => d.isDirectory() && existsSync(join(ROOT, 'components', d.name, 'preview.html'))).map(d => {
  const html = readFileSync(join(ROOT, 'components', d.name, 'preview.html'), 'utf8');
  const marker = /^<!--\s*@dsCard([^>]*)-->/.exec(html)?.[1] || '';
  const attr = k => (new RegExp(k + '=(?:"([^"]*)"|(\\d+))').exec(marker) || []);
  const group = d.name === 'Cover' ? 'Cover' : (attr('group')[1] || 'Other');
  const height = +(attr('height')[2] || 300), width = +(attr('width')[2] || 1000);
  const readme = existsSync(join(ROOT, 'components', d.name, 'README.md')) ? readFileSync(join(ROOT, 'components', d.name, 'README.md'), 'utf8').split(/(?<=\.)\s/)[0] : (attr('subtitle')[1] || '');
  const doc = html.replace(/<head>/i, '<head>' + HEAD);
  return { name: d.name, group, height, width, readme, doc };
});
const order = ['Cover', 'Showcase', 'Slides', 'Frame', 'Type', 'Layout', 'Content', 'Brand'];
const groups = [...new Set(cards.map(c => c.group))].sort((a, b) => (order.indexOf(a) + 99) % 99 - (order.indexOf(b) + 99) % 99);
const tile = c => `<figure class="tile"><div class="thumb" data-w="${c.width}" data-h="${c.height}" style="aspect-ratio:${c.width}/${Math.min(c.height, 1200)}"><iframe srcdoc="${esc(c.doc)}" width="${c.width}" height="${c.height}" loading="lazy" title="${c.name}" tabindex="-1"></iframe></div><figcaption><b>${c.name}</b><span>${esc(c.readme.replace(/[`*]/g, ''))}</span></figcaption></figure>`;
const gallery = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<title>Lumenis Aesthetics design system</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Generated by build.mjs: a local gallery of the component previews. Open it in a browser; it isn't part of the artifact. -->
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components/bundle.css">
<style>
body{margin:0;font-family:var(--font-sans);font-size:16px;line-height:1.45;background:var(--surface-page);color:var(--text-primary)}
.wrap{max-width:1180px;margin:0 auto;padding:55px 34px 89px}
header{display:grid;grid-template-columns:61.8fr 38.2fr;gap:34px;align-items:end;padding-bottom:21px}
header h1{font-size:55px;line-height:1;text-transform:uppercase;font-weight:400;margin:0}
header p{color:var(--text-secondary);margin:21px 0 0;max-width:560px}
.docs{display:flex;flex-direction:column;gap:8px;font-size:15px}
.docs a{text-decoration:none;color:inherit}
.docs a span{color:var(--text-secondary)}
h2{font-size:14px;letter-spacing:3.5px;text-transform:uppercase;color:var(--text-secondary);font-weight:400;margin:55px 0 21px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:34px 21px}
.wide .grid{grid-template-columns:1fr}
.tile{margin:0}
.thumb{position:relative;overflow:hidden;background:var(--product-backdrop);max-height:640px}
.thumb iframe{position:absolute;left:0;top:0;border:0;transform-origin:0 0;pointer-events:none;background:var(--surface-page)}
.tile b{display:block;font-weight:400;font-size:18px;margin-top:13px}
.tile span{display:block;font-size:14px;color:var(--text-secondary);margin-top:4px}
@media (max-width:720px){header{grid-template-columns:1fr}header h1{font-size:34px}}
</style>
</head>
<body>
<div class="wrap">
  <header>
    <div>
      <img src="${LOGOS['lumenis-wordmark-black']}" alt="Lumenis" style="width:120px;margin-bottom:34px">
      <h1>Aesthetics design system</h1>
      <p>The editorial system for Lumenis Aesthetics work. One idea per page, generous white space, photography that bleeds, and color that carries meaning.</p>
    </div>
    <div class="docs">
      <a href="README.md">README <span>· the rules, for every format</span></a>
      <a href="slides.md">Slides <span>· the 16:9 deck format</span></a>
      <a href="products/README.md">Products <span>· how products sit in the system</span></a>
      <a href="tokens.json">tokens.json <span>· every value</span></a>
    </div>
  </header>
${groups.map(g => `  <section class="${g === 'Showcase' || g === 'Cover' ? 'wide' : ''}"><h2>${g}</h2><div class="grid">${cards.filter(c => c.group === g).map(tile).join('')}</div></section>`).join('\n')}
</div>
<script>
/* Scale each live preview to fill its tile. */
function fit(){document.querySelectorAll('.thumb').forEach(function(t){var f=t.querySelector('iframe');f.style.transform='scale('+(t.clientWidth/+t.dataset.w)+')';});}
addEventListener('resize',fit);fit();
</script>
</body></html>
`;

/* ── write ── */
if (!CHECK) {
  writeFileSync(join(ROOT, 'tokens.css'), tokensCss);
  writeFileSync(join(ROOT, 'components', 'bundle.js'), bundle);
  writeFileSync(join(ROOT, 'index.html'), gallery);
}
const kb = n => (n / 1024).toFixed(0) + ' KB';
console.log(`${CHECK ? 'Checked' : 'Built'}: tokens.css (${kb(tokensCss.length)}), components/bundle.js (${kb(bundle.length)}, ${listed.length} components, ${Object.keys(LOGOS).length} logos, ${Object.keys(ICONS).length} icons)`);
if (problems.length) { console.log(`\n${problems.length} problem(s):\n- ` + problems.join('\n- ')); process.exitCode = 1; }
