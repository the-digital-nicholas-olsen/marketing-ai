import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import {
  assetDirectory,
  assert,
  catalogPath,
  libraryRoot,
  readJson,
  writeJson,
} from "./helpers/helper.mjs";
import { buildMeta, validateDraft } from "./helpers/schema.mjs";

const args = Object.fromEntries(
  process.argv.slice(2).reduce((pairs, value, index, all) => {
    if (value.startsWith("--")) pairs.push([value.slice(2), all[index + 1]]);
    return pairs;
  }, []),
);
assert(
  args.batch || args.metadata,
  "Usage: npm run process-image -- --metadata <draft.json>, or npm run process-image -- --batch <batch.json>",
);

const metadataSourcePath = args.batch
  ? path.resolve("2-metadata", args.batch)
  : path.resolve("2-metadata", args.metadata);
const records = args.batch
  ? await readJson(metadataSourcePath)
  : [await readJson(metadataSourcePath)];
assert(
  Array.isArray(records) && records.length > 0,
  "A batch must be a non-empty JSON array",
);

const catalog = await readJson(catalogPath);
const summaries = [];
for (const record of records) {
  assert(
    record.source?.path,
    `${record.id || "<missing id>"}: needs source.path (written automatically by generate-metadata.mjs) to locate its local file`,
  );
  const sourceFile = path.resolve(libraryRoot, record.source.path);
  const asset = structuredClone(record);
  for (const key of Object.keys(asset))
    if (key.startsWith("_")) delete asset[key];
  validateDraft(asset);
  assert(
    !JSON.stringify(asset).includes("AI draft required") &&
      !JSON.stringify(asset).includes("replace-with-ai-tags") &&
      !JSON.stringify(asset).includes("Describe the"),
    `Complete the metadata draft for ${asset.id} before importing.`,
  );
  assert(
    !catalog.assets.some((item) => item.id === asset.id),
    `An asset with id ${asset.id} already exists`,
  );

  const sourceInfo = await sharp(sourceFile, { animated: false }).metadata();
  assert(
    sourceInfo.width && sourceInfo.height,
    `Could not read the source dimensions for ${asset.id}`,
  );
  const orientedSource = [5, 6, 7, 8].includes(sourceInfo.orientation)
    ? { width: sourceInfo.height, height: sourceInfo.width }
    : { width: sourceInfo.width, height: sourceInfo.height };
  const outputDir = assetDirectory(asset);
  await fs.mkdir(outputDir, { recursive: true });
  const widths = [
    ...new Set(
      [640, 1280, 1920].map((width) => Math.min(width, orientedSource.width)),
    ),
  ];
  const derivatives = [];
  let totalBytes = 0;
  for (const requestedWidth of widths) {
    const outputFile = path.join(
      outputDir,
      `${asset.id}-${requestedWidth}w.webp`,
    );
    let result;
    try {
      const existing = await sharp(outputFile).metadata();
      const stats = await fs.stat(outputFile);
      result = {
        width: existing.width,
        height: existing.height,
        size: stats.size,
      };
    } catch {
      result = await sharp(sourceFile, { animated: false })
        .rotate()
        .resize({ width: requestedWidth, withoutEnlargement: true })
        .webp({ quality: 82, effort: 5, smartSubsample: true })
        .toFile(outputFile);
    }
    totalBytes += result.size;
    derivatives.push({
      width: result.width,
      height: result.height,
      bytes: result.size,
      format: "webp",
      path: path.relative(libraryRoot, outputFile).split(path.sep).join("/"),
    });
  }
  asset.source = {
    filename: path.basename(sourceFile),
    format: sourceInfo.format,
    width: orientedSource.width,
    height: orientedSource.height,
    bytes: (await fs.stat(sourceFile)).size,
    intake: "local-staging",
  };
  asset.derivatives = derivatives;
  asset.importedAt = new Date().toISOString();
  catalog.assets.push(asset);
  summaries.push(
    `${asset.id}: ${derivatives.map((item) => `${item.width}w`).join(", ")} (${(totalBytes / 1024 / 1024).toFixed(2)} MB)`,
  );
}
catalog.assets.sort((a, b) => a.id.localeCompare(b.id));
await writeJson(catalogPath, {
  _meta: buildMeta({ lastSyncedAt: catalog._meta?.lastSyncedAt ?? null }),
  schemaVersion: catalog.schemaVersion,
  assets: catalog.assets,
});
await import("./build-catalog.mjs");
await fs.unlink(metadataSourcePath);
summaries.forEach((summary) => console.log(`Imported ${summary}`));
console.log(
  `Removed ${path.relative(libraryRoot, metadataSourcePath)} (folded into catalog.json).`,
);
