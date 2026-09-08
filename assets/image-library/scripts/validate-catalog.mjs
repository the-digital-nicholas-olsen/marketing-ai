import fs from "node:fs/promises";
import path from "node:path";
import { catalogPath, libraryRoot, readJson } from "./helpers/helper.mjs";
import { validateDraft } from "./helpers/schema.mjs";

const metadataOnly = process.argv.includes("--metadata-only");
const allowPending = process.argv.includes("--allow-pending");

const catalog = await readJson(catalogPath);
const errors = [];
const ids = new Set();
for (const asset of catalog.assets) {
  try {
    validateDraft(asset);
  } catch (error) {
    errors.push(`${asset.id || "<missing id>"}: ${error.message}`);
  }
  if (ids.has(asset.id)) errors.push(`${asset.id}: duplicate asset ID`);
  ids.add(asset.id);
  if (!Array.isArray(asset.derivatives) || asset.derivatives.length === 0) {
    errors.push(`${asset.id}: has no derivatives`);
    continue;
  }
  for (const derivative of asset.derivatives) {
    if (!derivative.path || !derivative.path.endsWith(".webp"))
      errors.push(`${asset.id}: invalid derivative path`);
    else if (!metadataOnly) {
      try {
        await fs.access(path.join(libraryRoot, derivative.path));
      } catch {
        errors.push(`${asset.id}: missing ${derivative.path}`);
      }
    }
    if (
      derivative.width > asset.source?.width ||
      derivative.height > asset.source?.height
    )
      errors.push(`${asset.id}: derivative is larger than source`);
    if (
      !(allowPending && !derivative.hubspotUrl) &&
      !derivative.hubspotUrl?.startsWith(
        "https://information.lumenis.com/hubfs/",
      )
    )
      errors.push(
        `${asset.id}: missing or invalid HubSpot URL for ${derivative.path}`,
      );
  }
}
if (errors.length) {
  console.error(
    `Catalog validation failed with ${errors.length} error${errors.length === 1 ? "" : "s"}:`,
  );
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}
console.log(
  `Catalog valid: ${catalog.assets.length} assets, no duplicate IDs, ${metadataOnly ? "metadata checked (local files skipped)" : "all derivative files present"}; ${allowPending ? "pending uploads allowed" : "recorded HubSpot URLs required"}.`,
);
