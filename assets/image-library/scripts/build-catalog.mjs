import fs from "node:fs/promises";
import path from "node:path";
import { catalogPath, libraryRoot, readJson } from "./helpers/helper.mjs";

const catalog = await readJson(catalogPath);
const assets = catalog.assets;
const rows = assets.map((asset) => {
  const tags = asset.tags.join(", ");
  const productionDerivative = asset.derivatives?.at(-1);
  const hubspot = productionDerivative?.hubspotUrl
    ? `[1920w](${productionDerivative.hubspotUrl})`
    : "—";
  const hubspotImage = productionDerivative?.hubspotUrl
    ? `![image](${productionDerivative.hubspotUrl})`
    : "—";
  return `| ${asset.id} | ${asset.collection} | ${asset.allowedBrands.join(", ")} | ${asset.subject} | ${hubspot} | ${tags} | ${hubspotImage} |`;
});
const markdown = [
  "# Lumenis Web Image Catalog",
  "",
  `Generated from \`catalog.json\`. ${assets.length} asset${assets.length === 1 ? "" : "s"}.`,
  "",
  "| Asset | Collection | Allowed brands | Subject | HubSpot | Tags | Image |",
  "| --- | --- | --- | --- | --- | --- | --- |",
  ...rows,
  "",
].join("\n");
await fs.writeFile(path.join(libraryRoot, "catalog.md"), markdown);
console.log(`Built catalog.md for ${assets.length} assets.`);
