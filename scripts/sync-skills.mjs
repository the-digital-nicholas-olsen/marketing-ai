#!/usr/bin/env node
// Generate the Claude Code distribution from canonical skills.
//
//   node scripts/sync-skills.mjs [--check]
//
// Canonical sources:  .agents/skills/<name>/
// Generated output:   .claude/skills/<name>/
//
// .claude/skills/ is disposable. Never edit it — edit the canonical source.
// --check exits non-zero if the generated copy is out of date (for CI).

import { readdirSync, statSync, mkdirSync, copyFileSync, rmSync, existsSync, readFileSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, '.agents', 'skills');
const dest = join(root, '.claude', 'skills');
const check = process.argv.includes('--check');

const SKIP = new Set(['.DS_Store', 'node_modules', 'evals', '.git']);

function walk(dir, base = dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (SKIP.has(entry) || entry.startsWith('._')) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, base, out);
    else out.push(relative(base, full));
  }
  return out;
}

if (!existsSync(src)) { console.error('No .agents/skills — nothing to sync.'); process.exit(1); }

let stale = 0, copied = 0;
const skills = readdirSync(src).filter(s => !SKIP.has(s) && !s.startsWith('.') && statSync(join(src, s)).isDirectory());

for (const skill of skills) {
  for (const rel of walk(join(src, skill))) {
    const from = join(src, skill, rel);
    const to = join(dest, skill, rel);
    const same = existsSync(to) && readFileSync(from).equals(readFileSync(to));
    if (same) continue;
    if (check) { console.error(`stale: ${skill}/${rel}`); stale++; continue; }
    mkdirSync(dirname(to), { recursive: true });
    copyFileSync(from, to);
    copied++;
  }
}

// Detect stale generated files as well as removed skills.
if (existsSync(dest)) {
  const expected = new Set(skills.flatMap(skill => walk(join(src, skill)).map(rel => join(skill, rel))));
  for (const rel of walk(dest)) {
    if (expected.has(rel)) continue;
    if (check) { console.error(`extra generated file: ${rel}`); stale++; }
    else { rmSync(join(dest, rel)); console.log(`removed generated file ${rel}`); }
  }
}

if (check) {
  if (stale) { console.error(`\n${stale} file(s) out of date. Run: node scripts/sync-skills.mjs`); process.exit(1); }
  console.log('.claude/skills is up to date.');
} else {
  console.log(`Synced ${skills.length} skill(s), ${copied} file(s) written.`);
}
