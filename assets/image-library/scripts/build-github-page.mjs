import fs from "node:fs/promises";
import path from "node:path";
import { catalogPath, libraryRoot, readJson } from "./helpers/helper.mjs";

const catalog = await readJson(catalogPath);
const assets = catalog.assets;

const browserData = JSON.stringify(assets).replace(/</g, "\\u003c");
const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Lumenis Web Image Library</title><style>
body{margin:0;background:#f5f5f3;color:#161413;font:15px/1.45 Arial,sans-serif}header{padding:32px max(24px,calc((100vw - 1280px)/2));background:#161413;color:white}h1{margin:0;font:400 clamp(28px,4vw,52px)/1.05 Georgia,serif}.controls{display:flex;gap:12px;flex-wrap:wrap;margin-top:24px}.controls input,.controls select{padding:10px 12px;border:1px solid #ccc;border-radius:4px;font:inherit}.grid{max-width:1280px;margin:28px auto;padding:0 24px;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:18px}.card{background:white;border:1px solid #dedbd8;border-radius:8px;overflow:hidden}.image{width:100%;aspect-ratio:4/3;object-fit:cover;background:#e7e3df;display:block}.content{padding:14px}.eyebrow{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#6c6460}.tags{color:#635c58;font-size:13px}.empty{grid-column:1/-1;padding:48px;text-align:center}</style></head><body>
<header><h1>Lumenis Web Image Library</h1><div class="controls"><input id="search" placeholder="Search descriptions, tags, products…"><select id="collection"><option value="">All collections</option><option value="accelerate-events">Accelerate events</option><option value="trade-shows">Trade shows</option><option value="product-demos">Product demos</option><option value="optilift">OptiLIFT</option><option value="optilight">OptiLIGHT</option><option value="brand-assets">Brand assets</option></select><select id="brand"><option value="">All brands</option><option>OptiLIGHT</option><option>OptiLIFT</option><option>Lumenis corporate</option><option>cross-brand approved</option></select></div></header><main class="grid" id="grid"></main><script>
const assets=${browserData};const grid=document.querySelector('#grid');const search=document.querySelector('#search');const collection=document.querySelector('#collection');const brand=document.querySelector('#brand');
const esc=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');
function render(){const q=search.value.toLowerCase();const filtered=assets.filter(a=>{const text=[a.id,a.collection,a.subject,a.description,a.productShown,a.background,a.altText,...a.tags].join(' ').toLowerCase();return (!q||text.includes(q))&&(!collection.value||a.collection===collection.value)&&(!brand.value||a.allowedBrands.includes(brand.value))});grid.innerHTML=filtered.length?filtered.map(a=>{const derivative=a.derivatives?.at(-1);const image=derivative?.hubspotUrl||(derivative?.path ? '../'+derivative.path : '');return '<article class="card"><img class="image" src="'+esc(image)+'" alt="'+esc(a.altText)+'"><div class="content"><div class="eyebrow">'+esc(a.collection.replaceAll('-',' ')+' · '+a.allowedBrands.join(' · '))+'</div><h2>'+esc(a.subject)+'</h2><p>'+esc(a.description)+'</p><p class="tags">'+esc(a.tags.join(' · '))+'</p></div></article>'}).join(''):'<p class="empty">No matching assets.</p>'} [search,collection,brand].forEach(el=>el.addEventListener('input',render));render();
</script></main></body></html>`;

const distDir = path.join(libraryRoot, "dist");
await fs.mkdir(distDir, { recursive: true });
await fs.writeFile(path.join(distDir, "index.html"), html);
console.log(`Built dist/index.html for ${assets.length} assets.`);
