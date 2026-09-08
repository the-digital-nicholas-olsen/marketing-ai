---
name: lumenis-image-search
description: Search a configured Lumenis image catalog for hosted URL candidates by product brand, placement or subject. Use when selecting imagery; does not upload or approve assets.
---

Run `find-images.mjs` in this skill with targeted terms and `--json`. Read the helper output instead of loading the full catalog. The default is assets/image-library/catalog.json in this repository. LUMENIS_ASSET_CATALOG can override it; setup is in ../../../guides/setup.md. For intake, resizing or upload, use the lumenis-image-library skill.

Resolve the intended product/brand and placement first. A zero-result filter is a real gap, not permission to substitute another brand. Review allowedBrands, usageRestrictions, rightsStatus and status. Missing approval fields remain unverified; a hosted URL is not rights evidence. Verify candidate URL reachability before placement. Return the selected candidate and any unmet conditions without publishing.
