import assert from 'node:assert/strict';
import {mkdtempSync, writeFileSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import {readApprovedMaster, requireQrSize} from './print-pdf-input-guards.mjs';
const dir = mkdtempSync(join(tmpdir(), 'lumenis-print-guards-'));
const saved = process.env.LUMENIS_APPROVED_MASTER_SHA256;
try {
  const master = join(dir, 'synthetic.pdf'), output = join(dir, 'new.pdf');
  const valid = Buffer.from('%PDF-1.4\n1 0 obj\n<<>>\nendobj\nxref\n0 2\n0000000000 65535 f\n0000000009 00000 n\ntrailer\n<< /Size 2 >>\nstartxref\n29\n%%EOF\n');
  const setMaster = bytes => {
    writeFileSync(master, bytes);
    process.env.LUMENIS_APPROVED_MASTER_SHA256 = createHash('sha256').update(bytes).digest('hex');
  };
  setMaster(valid);
  assert.deepEqual(readApprovedMaster(master, output, {classic:true}), valid);
  delete process.env.LUMENIS_APPROVED_MASTER_SHA256;
  assert.throws(() => readApprovedMaster(master, output), /owner-confirmed/);
  process.env.LUMENIS_APPROVED_MASTER_SHA256 = '0'.repeat(64);
  assert.throws(() => readApprovedMaster(master, output), /hash mismatch/);
  setMaster(valid);
  writeFileSync(output, 'preserve');
  assert.throws(() => readApprovedMaster(master, output), /new file/);
  assert.throws(() => readApprovedMaster(master, master), /new file/);
  rmSync(output);
  for (const marker of ['/Prev 10', '/Encrypt 2 0 R', '/XRefStm 22', '/Type /XRef', '\nxref\n']) {
    setMaster(Buffer.concat([valid, Buffer.from(marker)]));
    assert.throws(() => readApprovedMaster(master, output, {classic:true}), /Unsupported PDF structure/);
  }
  setMaster(Buffer.from('not a PDF'));
  assert.throws(() => readApprovedMaster(master, output), /not a PDF/);
  for (const v of [0, 0.9, NaN, Infinity]) assert.throws(() => requireQrSize(v, 1), /below/);
  assert.throws(() => requireQrSize(2.99, 3), /below/);
  requireQrSize(1, 1); requireQrSize(3, 3);
  console.log('Print guards: approved hash, output preservation, PDF structure and QR limits passed (synthetic inputs only).');
} finally {
  if (saved === undefined) delete process.env.LUMENIS_APPROVED_MASTER_SHA256;
  else process.env.LUMENIS_APPROVED_MASTER_SHA256 = saved;
  rmSync(dir, {recursive:true, force:true});
}
