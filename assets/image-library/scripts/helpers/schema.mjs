import { assert } from "./helper.mjs";
import { HUBSPOT_PORTAL_ID } from "./hubspot.mjs";

// Controlled vocabularies for catalog.json. Add, rename, or remove values
// here — every script and validator reads from these, nothing else
// hardcodes a brand/business-unit/collection/etc. list.
export const brands = [
  "unclassified",
  "OptiLIGHT",
  "OptiLIFT",
  "Folix",
  "Lumenis corporate",
  "cross-brand approved",
];
export const businessUnits = ["Vision", "Aesthetics", "Corporate"];
export const collections = [
  "kol-headshots",
  "accelerate-events",
  "trade-shows",
  "product-demos",
  "optilift",
  "optilight",
  "brand-assets",
];
export const placements = [
  "hero",
  "section",
  "card",
  "testimonial",
  "technology",
  "product-detail",
  "social",
  "email",
];
export const orientations = ["landscape", "portrait", "square", "panoramic"];

export function requiredDraftFields(asset) {
  return [
    "id",
    "collection",
    "allowedBrands",
    "businessUnit",
    "subject",
    "description",
    "productShown",
    "audience",
    "placements",
    "orientation",
    "background",
    "tags",
    "altText",
    "usageRestrictions",
  ].filter(
    (field) =>
      asset[field] === undefined ||
      asset[field] === null ||
      asset[field] === "" ||
      (Array.isArray(asset[field]) && asset[field].length === 0),
  );
}

export function validateDraft(asset) {
  const missing = requiredDraftFields(asset);
  assert(
    missing.length === 0,
    `Missing required metadata: ${missing.join(", ")}`,
  );
  assert(
    /^[a-z0-9]+(?:-[a-z0-9]+)*-\d{3}$/.test(asset.id),
    "id must be lowercase kebab-case and end in a three-digit sequence, e.g. optilight-patient-prism-eye-001",
  );
  assert(
    collections.includes(asset.collection),
    `collection must be one of: ${collections.join(", ")}`,
  );
  assert(
    Array.isArray(asset.allowedBrands) &&
      asset.allowedBrands.every((brand) => brands.includes(brand)),
    `allowedBrands must use only: ${brands.join(", ")}`,
  );
  assert(
    businessUnits.includes(asset.businessUnit),
    `businessUnit must be one of: ${businessUnits.join(", ")}`,
  );
  assert(Array.isArray(asset.audience), "audience must be an array");
  assert(
    Array.isArray(asset.placements) &&
      asset.placements.every((placement) => placements.includes(placement)),
    `placements must use only: ${placements.join(", ")}`,
  );
  assert(
    orientations.includes(asset.orientation),
    `orientation must be one of: ${orientations.join(", ")}`,
  );
  assert(Array.isArray(asset.tags), "tags must be an array");
  if (asset.sourceUrl)
    assert(
      /^https:\/\//.test(asset.sourceUrl),
      "sourceUrl must be an HTTPS Dropbox or internal source URL",
    );
}

// Self-describing block for external, cross-repo consumers (e.g. another
// project's Claude fetching catalog.json directly, with no access to this
// repo's README or scripts). Regenerated from these same constants on every
// write, so it can't drift out of sync with the schema they enforce.

export function buildMeta({ lastSyncedAt = null } = {}) {
  return {
    description:
      "Lumenis web-ready image catalog. Source of truth for marketing imagery and their HubSpot delivery URLs. Maintained in marketing-ai/assets/image-library. Coordinate changes with the upstream catalog during consolidation; consumers should not edit generated views.",
    howToUse: {
      usageRestrictions:
        "There is no approval or rights-clearance flag on an asset — usageRestrictions is free-text, AI-drafted notes on what a human should check (identifiable people, competitor branding, on-screen PHI, etc.) before using the image. Read it yourself; nothing in this catalog enforces it.",
      imageUrl:
        "Use derivative.hubspotUrl — the live, HubSpot-verified public delivery URL. Never use derivative.path: that's a local file path inside the source repo (3-processed/...) and will not resolve outside it. A derivative with no hubspotUrl hasn't been uploaded yet and isn't usable externally.",
      derivativeWidths:
        "Each asset has up to three derivatives — 640w, 1280w, 1920w — capped at the source image's own size, so smaller sources may have fewer. Pick the smallest width that satisfies your placement rather than always grabbing the largest.",
    },
    hubspot: {
      portalId: HUBSPOT_PORTAL_ID,
      note: "Every asset lives in the same HubSpot portal, so portalId is recorded once here rather than repeated on each asset. Each asset's own asset.hubspot.folderId/folderName identifies which folder within this portal holds it.",
    },
    vocabularies: {
      allowedBrands: brands,
      businessUnit: businessUnits,
      collection: collections,
      placements,
      orientation: orientations,
      note: "These lists can grow over time. Treat a value you don't recognize as valid-but-unclassified, not an error.",
    },
    lastSyncedAt,
    updatedAt: new Date().toISOString(),
  };
}
