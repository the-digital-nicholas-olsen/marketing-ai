import fs from 'node:fs/promises';
import path from 'node:path';

export const libraryRoot = path.resolve(import.meta.dirname, '../..');
export const catalogPath = path.join(libraryRoot, 'catalog.json');

export function assert(condition, message) {
  if (!condition) throw new Error(message);
}

export function brandSlug(brand) {
  return brand.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function assetDirectory(asset) {
  return path.join(libraryRoot, '3-processed', asset.collection, asset.id);
}

export async function readJson(file) {
  return JSON.parse(await fs.readFile(file, 'utf8'));
}

export async function writeJson(file, value) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, `${JSON.stringify(value, null, 2)}\n`);
}
