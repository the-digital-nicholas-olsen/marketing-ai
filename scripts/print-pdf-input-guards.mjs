// Guard fixed-master PDF edits before any mutation. Expected hash stays in the private work system.
import {readFileSync, existsSync, realpathSync} from 'node:fs';
import {resolve} from 'node:path';
import {createHash} from 'node:crypto';
export function readApprovedMaster(master, output, {classic = false} = {}) {
  if (!master || !output) throw new Error('Master and new output paths are required');
  if (existsSync(output) || resolve(master) === resolve(output)) throw new Error('Output must be a new file; never overwrite the master or a prior output');
  const expected = process.env.LUMENIS_APPROVED_MASTER_SHA256;
  if (!/^[a-f0-9]{64}$/i.test(expected || '')) throw new Error('Provide the owner-confirmed master SHA-256 from the private work record');
  const pdf = readFileSync(realpathSync(master));
  if (createHash('sha256').update(pdf).digest('hex') !== expected.toLowerCase()) throw new Error('Approved master hash mismatch');
  const text = pdf.toString('latin1');
  if (!text.startsWith('%PDF-')) throw new Error('Master is not a PDF');
  if (classic && ((text.match(/\nxref\r?\n/g) || []).length !== 1 || /\/Prev\b|\/XRefStm\b|\/Encrypt\b|\/Type\s*\/XRef\b/.test(text))) {
    throw new Error('Unsupported PDF structure: use a reviewed PDF editor; do not rewrite incremental, encrypted or cross-reference-stream files');
  }
  return pdf;
}
export function requireQrSize(points, minimum) {
  if (!Number.isFinite(points) || points < minimum) throw new Error(`QR modules below ${minimum} pt: obtain an approved shorter URL before building`);
}
