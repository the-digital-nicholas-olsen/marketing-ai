import path from "node:path";
import { catalogPath, libraryRoot, readJson } from "./helpers/helper.mjs";
import { getHubspotFolder, uploadFile } from "./helpers/hubspot.mjs";

const uploadAll = process.argv.includes("--all");

const catalog = await readJson(catalogPath);
const pending = [];
for (const asset of catalog.assets) {
  for (const derivative of asset.derivatives) {
    if (uploadAll || !derivative.hubspotUrl)
      pending.push({ asset, derivative });
  }
}

if (pending.length === 0) {
  console.log(
    "Nothing to upload — every derivative already has a hubspotUrl. Pass --all to re-upload everything.",
  );
  process.exit(0);
}

const byBusinessUnit = new Map();
for (const item of pending) {
  const businessUnit = item.asset.businessUnit;
  if (!byBusinessUnit.has(businessUnit)) byBusinessUnit.set(businessUnit, []);
  byBusinessUnit.get(businessUnit).push(item);
}

let failures = 0;
for (const [businessUnit, items] of byBusinessUnit) {
  let folder;
  try {
    folder = getHubspotFolder(businessUnit);
  } catch (error) {
    failures += items.length;
    console.error(error.message);
    continue;
  }

  console.log(
    `Uploading ${items.length} derivative${items.length === 1 ? "" : "s"} to HubSpot's "${folder.folderName}" folder via hs filemanager upload...`,
  );

  for (const { asset, derivative } of items) {
    const localPath = path.join(libraryRoot, derivative.path);
    const filename = path.basename(derivative.path);
    const dest = `/${folder.folderName}/${asset.id}/${filename}`;
    try {
      await uploadFile(localPath, dest);
      console.log(`Uploaded ${filename}`);
    } catch (error) {
      failures += 1;
      console.error(
        `Failed to upload ${filename} (${asset.id}): ${error.stderr?.trim() || error.message}`,
      );
    }
  }
}

if (failures > 0) {
  console.error(
    `${failures} of ${pending.length} uploads failed. Run "hs account info --account 278427" and "hs doctor" to diagnose access; do not reauthenticate or re-upload blindly.`,
  );
  process.exit(1);
}

console.log(
  "All uploads succeeded. Run `npm run sync-catalog` next to record the delivery URLs in catalog.json.",
);
