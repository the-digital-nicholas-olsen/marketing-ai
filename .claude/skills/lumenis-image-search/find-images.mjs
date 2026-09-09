#!/usr/bin/env node
/**
 * Search the shared Lumenis image library and print ready-to-paste HubSpot
 * URLs. Hosted URLs are returned when recorded; reachability and clearance
 * must be verified before use.
 *
 *   node find-images.mjs stage panel            # match tags/subject/description
 *   node find-images.mjs --placement hero       # images tagged for hero placement
 *   node find-images.mjs --brand OptiLIFT
 *   node find-images.mjs --collection product-demos --width 1280
 *   node find-images.mjs --list                 # everything, one line each
 *
 * Flags
 *   --placement <hero|section|card|social>
 *   --brand <OptiLIFT|OptiLIGHT|"Lumenis corporate">
 *   --collection <kol-headshots|accelerate-events|product-demos|trade-shows|optilift|brand-assets>
 *   --width <640|1280|1920>     default 1920
 *   --alt                       also print altText
 *   --json                      machine-readable output
 *
 * Source: LUMENIS_ASSET_CATALOG or assets/image-library/catalog.json.
 * Search results are candidates; URLs do not establish clearance.
 */

import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const catalogPath = process.env.LUMENIS_ASSET_CATALOG || join(here, '../../..', 'assets/image-library/catalog.json');

let assets;
try {
  assets = JSON.parse(await readFile(catalogPath, 'utf8')).assets;
} catch (e) {
  console.error(`Could not read the catalog at:\n  ${catalogPath}\n\n${e.message}`);
  process.exit(1);
}

/* ---------- args ---------- */
const argv = process.argv.slice(2);
const flags = {};
const terms = [];
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--alt' || a === '--json' || a === '--list') flags[a.slice(2)] = true;
  else if (a.startsWith('--')) flags[a.slice(2)] = argv[++i];
  else terms.push(a.toLowerCase());
}

const width = Number(flags.width || 1920);
if (![640, 1280, 1920].includes(width)) {
  console.error('--width must be 640, 1280, or 1920.');
  process.exit(1);
}

/* ---------- filter ---------- */
let results = assets.filter((a) => {
  if (flags.placement && !(a.placements || []).includes(flags.placement)) return false;
  if (flags.collection && a.collection !== flags.collection) return false;
  if (flags.brand) {
    const want = flags.brand.toLowerCase();
    if (!(a.allowedBrands || []).some((b) => b.toLowerCase() === want)) return false;
  }
  if (!terms.length) return true;
  const haystack = [a.id, a.subject, a.description, a.altText, (a.tags || []).join(' ')]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  // Every term must appear — narrowing, not broadening.
  return terms.every((t) => haystack.includes(t));
});

results.sort((a, b) => a.id.localeCompare(b.id));

const urlFor = (a) => {
  const d = (a.derivatives || []).find((x) => x.width === width)
    || (a.derivatives || []).slice(-1)[0];
  return d ? d.hubspotUrl : null;
};

/* ---------- output ---------- */
if (flags.json) {
  console.log(JSON.stringify(
    results.map((a) => ({
      id: a.id, subject: a.subject, collection: a.collection,
      allowedBrands: a.allowedBrands, placements: a.placements,
      altText: a.altText, rightsStatus: a.rightsStatus || "unverified", status: a.status || "unverified",
      usageRestrictions: a.usageRestrictions || "", rightsClearedBy: a.rightsClearedBy || null,
      rightsClearedOn: a.rightsClearedOn || null, url: urlFor(a),
    })), null, 2));
  process.exit(0);
}

if (!results.length) {
  console.log('\nNo matches.');
  console.log('Search terms are AND-ed, so try fewer of them, or drop a filter.');
  console.log(`To browse everything:  node "${process.argv[1]}" --list\n`);
  process.exit(0);
}

console.log(`\n${results.length} of ${assets.length} assets — ${width}w URLs\n`);

for (const a of results) {
  console.log(`  ${a.id}`);
  console.log(`    ${a.subject}  ·  ${a.collection}  ·  ${(a.placements || []).join('/')}  ·  ${(a.allowedBrands || []).join(', ')}`);
  if (flags.alt && a.altText) console.log(`    alt: ${a.altText}`);
  console.log(`    ${urlFor(a)}`);
  console.log(`    rights: ${a.rightsStatus || 'unverified'}; approval: ${a.status || 'unverified'}`);
  if (a.usageRestrictions) console.log(`    Restrictions: ${a.usageRestrictions}`);
  console.log();
}

const pending = results.filter((a) => a.rightsStatus !== 'cleared' || a.status !== 'approved').length;
if (pending) {
  console.log(`⚠ ${pending} of these lack cleared rights and approved status.`);
  console.log('  No approval is inferred. Confirm rights and intended use before publication.\n');
}

console.log('Hosted URLs are candidates. Verify reachability, brand scope and rights before use.\n');
