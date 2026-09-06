#!/usr/bin/env node
// Proposed naming helper; no live identifiers or CRM mappings are embedded.
const [rawDivision, campaign, period, rawMarket] = process.argv.slice(2);
const division = (rawDivision || '').toUpperCase();
const market = (rawMarket || '').toUpperCase();
if (!['AES', 'VIS'].includes(division) || !campaign?.trim() || !/^Q[1-4] \d{4}$/.test(period || '') || !/^[A-Z]{2}$/.test(market)) {
  console.error('Usage: node scripts/name.mjs <AES|VIS> "<campaign>" "<Qn YYYY>" <country-code>');
  process.exit(1);
}
const name = `${division}-${market}-${campaign.trim()}-${period}`;
const slug = name.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
console.log(JSON.stringify({division, market, proposedName: name, slug}, null, 2));
