import path from 'node:path';
import sharp from 'sharp';
import { assert, libraryRoot, writeJson } from './helpers/helper.mjs';
import { brands, businessUnits, placements } from './helpers/schema.mjs';

const args = Object.fromEntries(process.argv.slice(2).reduce((pairs, value, index, all) => {
  if (value.startsWith('--')) pairs.push([value.slice(2), all[index + 1]]);
  return pairs;
}, []));

assert(args.file && args.id && args.brand && args['business-unit'], 'Usage: npm run generate-metadata -- --file <image> --id <asset-id> --brand <brand> --business-unit <Vision|Aesthetics|Corporate> [--source-url <https-url>]');
assert(brands.includes(args.brand), `brand must be one of: ${brands.join(', ')}`);
assert(businessUnits.includes(args['business-unit']), `business-unit must be one of: ${businessUnits.join(', ')}`);
const info = await sharp(args.file, { animated: false }).metadata();
assert(info.width && info.height, 'Could not read image dimensions');
const orientation = info.width === info.height ? 'square' : info.width > info.height * 2.2 ? 'panoramic' : info.width > info.height ? 'landscape' : 'portrait';
const output = path.resolve('2-metadata', `${args.id}.json`);
await writeJson(output, {
  id: args.id,
  allowedBrands: [args.brand],
  businessUnit: args['business-unit'],
  subject: 'AI draft required: short label, a few words, not a sentence',
  description: 'AI draft required: one or two sentences on subject + action. Setting/props belong in background, not repeated here.',
  productShown: 'none',
  audience: ['patient'],
  placements: ['section'],
  orientation,
  background: 'Describe the dominant background',
  tags: ['replace-with-ai-tags'],
  altText: 'AI draft required: concise, functional alt text.',
  usageRestrictions: 'Confirm usage rights, model releases, and medical-claims suitability before approval.',
  ...(args['source-url'] ? { sourceUrl: args['source-url'] } : {}),
  source: {
    filename: path.basename(args.file),
    path: path.relative(libraryRoot, path.resolve(args.file)).split(path.sep).join('/'),
    format: info.format,
    width: info.width,
    height: info.height
  },
  _allowedPlacements: placements,
  _instruction: 'Replace all placeholder text and tags after an AI visual review. Remove fields beginning with an underscore before import.'
});
console.log(`Created ${output}`);
