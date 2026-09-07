#!/usr/bin/env node
// Read self-describing file metadata; never maintain a duplicate catalog by hand.
import {readdirSync, readFileSync, lstatSync} from 'node:fs';
import {resolve, join, relative, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)), '..');
let query='', limit=5;
const args=process.argv.slice(2);
for(let i=0;i<args.length;i++) {
  const flag=args[i];
  if(flag==='--query' && args[i+1]!==undefined) query=args[++i];
  else if(flag==='--limit' && args[i+1]!==undefined) limit=Number(args[++i]);
  else { console.error('Usage: node scripts/discover.mjs [--query "words"] [--limit 1..20]'); process.exit(2); }
}
if(!Number.isInteger(limit)||limit<1||limit>20) {console.error('limit must be an integer from 1 to 20');process.exit(2);}
function walk(dir) {
 return readdirSync(dir).sort().flatMap(n=>{
  if(n.startsWith('._')||['.git','.claude','.local','node_modules'].includes(n)) return [];
  const p=join(dir,n),s=lstatSync(p);
  if(s.isSymbolicLink()) return [];
  return s.isDirectory()?walk(p):/\.(md|yaml)$/.test(n)?[p]:[];
 });
}
const terms=query.toLowerCase().trim().split(/\s+/).filter(Boolean);
const matches=walk(root).map(p=>{
 const text=readFileSync(p,'utf8'),path=relative(root,p);
 const meta=text.startsWith('---\n')?text.split('\n---')[0]:'';
 const value=k=>meta.match(new RegExp('^'+k+': (.+)$','m'))?.[1].replace(/^['"]|['"]$/g,'');
 const title=value('name')||value('title')||text.match(/^# (.+)$/m)?.[1]||path;
 const summary=value('description')||value('summary')||'';
 return {path,title,summary,bytes:Buffer.byteLength(text),words:text.trim().split(/\s+/).length};
}).filter(x=>terms.every(t=>`${x.path} ${x.title} ${x.summary}`.toLowerCase().includes(t)));
console.log(JSON.stringify({query,total:matches.length,shown:Math.min(limit,matches.length),files:matches.slice(0,limit)},null,2));
