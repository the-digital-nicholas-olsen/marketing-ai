import path from "node:path";
import { catalogPath, readJson, writeJson } from "./helpers/helper.mjs";
import { fetchHubspotFileMap, hubspotFolders } from "./helpers/hubspot.mjs";
import { buildMeta } from "./helpers/schema.mjs";

const catalog = await readJson(catalogPath);

const businessUnits = [...new Set(catalog.assets.map((asset) => asset.businessUnit))];
const remoteFilesByUnit = new Map();
for (const businessUnit of businessUnits) {
  const folder = hubspotFolders[businessUnit];
  if (!folder?.folderId) {
    console.warn(`Skipping "${businessUnit}": HubSpot folder ("${folder?.folderName}") doesn't exist yet — nothing to sync against.`);
    remoteFilesByUnit.set(businessUnit, new Map());
    continue;
  }
  remoteFilesByUnit.set(businessUnit, await fetchHubspotFileMap(folder.folderId));
}

const syncedAt = new Date().toISOString();
let missing = 0;
for (const asset of catalog.assets) {
  const { folderId, folderName } = hubspotFolders[asset.businessUnit] ?? {};
  asset.hubspot = { folderId, folderName };
  const remoteFiles = remoteFilesByUnit.get(asset.businessUnit);
  for (const derivative of asset.derivatives) {
    const filename = path.basename(derivative.path);
    const realUrl = remoteFiles.get(filename);
    if (realUrl) {
      derivative.hubspotUrl = realUrl;
    } else {
      delete derivative.hubspotUrl;
      missing += 1;
      console.warn(
        `Not found in HubSpot folder: ${filename} (${asset.id}) — needs uploading before it's cleared for page use.`,
      );
    }
  }
}
await writeJson(catalogPath, { _meta: buildMeta({ lastSyncedAt: syncedAt }), schemaVersion: catalog.schemaVersion, assets: catalog.assets });
console.log(
  `Synced HubSpot URLs for ${catalog.assets.length} assets across ${businessUnits.length} folder${businessUnits.length === 1 ? "" : "s"} (${businessUnits.join(", ")})${missing ? ` — ${missing} derivative(s) still missing, see warnings above` : " — everything accounted for"}.`,
);
await import("./build-catalog.mjs");
