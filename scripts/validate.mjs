#!/usr/bin/env node
import {readdirSync, readFileSync, statSync, existsSync} from 'node:fs';
import {join, dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const failures = [];
function walk(dir) {
  return readdirSync(dir).filter(n => !['.git', '.local', 'node_modules'].includes(n) && !n.startsWith('._')).flatMap(n => {
    const p = join(dir,n); return statSync(p).isDirectory() ? walk(p) : [p];
  });
}
for (const path of walk(root)) {
  const text = readFileSync(path, 'utf8');
  if (/\.(md|mjs)$/.test(path)) {
    for (const match of text.matchAll(/\]\(([^)]+)\)/g)) {
      const target = match[1].split('#')[0];
      if (target && !/^[a-z]+:/i.test(target) && !existsSync(resolve(dirname(path),target))) failures.push(`Missing link in ${path}: ${target}`);
    }
  }
  // Heuristics supplement manual review; never print a matched value.
  const patterns = [/gh[pousr]_[A-Za-z0-9]{20,}/, /github_pat_[A-Za-z0-9_]{20,}/, /-----BEGIN [A-Z ]*PRIVATE KEY-----/, /pat-[a-z]{2}\d?-\d+-[a-f0-9-]{20,}/i];
  if (patterns.some(p => p.test(text))) failures.push(`Potential credential in ${path}`);
}
for (const client of ['.agents', '.claude']) {
  for (const skill of readdirSync(join(root,client,'skills'))) {
    const p=join(root,client,'skills',skill,'SKILL.md');
    const text=readFileSync(p,'utf8');
    if (!text.startsWith('---\n') || !text.includes(`name: ${skill}\n`) || !/^description: .+/m.test(text)) failures.push(`Invalid skill metadata: ${skill}`);
  }
}
for (const [f,max] of [['README.md',400],['AGENTS.md',500]]) {
  const words=readFileSync(join(root,f),'utf8').trim().split(/\s+/).length;
  if(words>max) failures.push(`${f} exceeds ${max} words`);
}
const synced=spawnSync(process.execPath,[join(root,'scripts/sync-skills.mjs'),'--check'],{encoding:'utf8'});
if(synced.status!==0) failures.push(synced.stderr || 'Skill synchronization failed');
if(failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log('Structure, local links, entrypoint budgets, credential heuristics and generated skills passed. Manual content review is still required.');
