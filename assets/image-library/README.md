# Shared image library

Add, describe, resize and upload marketing images from this folder in the main marketing repository. HubSpot hosts delivery files; `catalog.json` holds image metadata and recorded URLs. [catalog.md](catalog.md) is the generated readable index. The initial catalog contains 58 assets from Simon's repository; see [provenance](PROVENANCE.md).

## Setup and working files

Use Node.js 22 or newer. From the repository root:

```sh
cd assets/image-library
npm ci
```

Run the remaining npm commands from this folder. Installation supplies Sharp and the HubSpot CLI. Reuse your existing individual HubSpot authentication; `hs account list`, `hs account info --account 278427` and `hs doctor` help verify the account. Expected portal is 278427. Do not reinitialize or print credential files. Obtain the required Files permissions if unavailable.

| Location | Purpose |
|---|---|
| `1-raw/` | Selected source images; keep original masters externally |
| `2-metadata/` | Draft metadata awaiting completion and import |
| `3-processed/<collection>/<asset-id>/` | Generated WebP files |
| `catalog.json` | Canonical versioned metadata and delivery links |
| `catalog.md` | Generated readable catalog; do not edit directly |
| `dist/index.html` | Generated local browser view |

Raw images, metadata staging, processed files, dependencies and browser output are ignored by Git. A fresh clone therefore has a usable hosted-link catalog but no local image files. Do not upload those working folders or credentials in a pull request.

## Add and describe an image

1. Select the source locally or from the approved original-media library and place a working copy in `1-raw/`. Actually inspect the image before describing it.
2. Read `scripts/helpers/schema.mjs` for exact brands, business units, collections, placements and orientations. Do not assume a product or reuse permission from a filename. Choose a unique lowercase hyphen-separated ID ending in three digits, such as `optilift-device-front-001`.
3. Generate the draft:

```sh
npm run generate-metadata -- --file 1-raw/my-photo.jpg --id optilift-device-front-001 --brand OptiLIFT --business-unit Vision
```

Optionally add `--source-url` with the source HTTPS URL if appropriate for this public catalog. Complete all draft fields: a short subject, one or two sentences describing subject/action, background, actual product shown, audience, placements, orientation, tags, alt text and usage restrictions. Add `collection` yourself; the generator does not scaffold it. Pick values from the schema. Keep `source.path` so the importer can locate the source.

`allowedBrands` determines permissible brand use. Use `unclassified` when that scope has not been decided; do not use an `approved` value as a placeholder. `businessUnit` controls HubSpot folder routing; these are separate concepts. Missing rights evidence remains unverified. Inspect identifiable people, releases, competitor branding and visible personal/clinical data. Do not infer consent or approval from availability.

## Resize and import

Pass the filename within `2-metadata`, not a second `2-metadata/` prefix:

```sh
npm run process-image -- --metadata optilift-device-front-001.json
```

For a batch, put an array of complete draft objects, each with its own `source.path`, in `2-metadata/batch.json`, then run `npm run process-image -- --batch batch.json`.

The importer rejects duplicate IDs and unfinished boilerplate. It creates WebP derivatives at widths up to 640, 1280 and 1920 pixels, capped at the oriented source width. It preserves aspect ratio, applies EXIF orientation, strips embedded source metadata and uses quality 82. It does not crop or upscale. Prepare an explicitly approved crop separately if the placement needs one. Smaller sources produce fewer distinct sizes. Treat these as web defaults; email or print may require other formats.

Import updates `catalog.json`, rebuilds `catalog.md` and deletes the consumed metadata draft. Originals are not deleted. A failed batch can leave processed files without committing the catalog; inspect before retrying.

## Validate at the correct stage

```sh
# Fresh clone: metadata and recorded URL checks, no local-file requirement
npm run validate-catalog -- --metadata-only

# Before upload: allow pending URLs; verify local files if the full library is present
npm run validate-catalog -- --allow-pending

# Mixed checkout: older images are hosted-only; new files are local
npm run validate-catalog -- --metadata-only --allow-pending
```

For a mixed checkout, also inspect every newly generated image and its dimensions/file size locally. Skipping file checks is not evidence that resizing worked. The default `npm run validate-catalog` requires all local derivatives and recorded delivery URLs. URL syntax checks are not live reachability checks or rights approval.

## Upload to HubSpot and verify links

CLI is the standard upload path for this library; browser control is not needed for routine file uploads. The scripts invoke installed `hs` directly (no on-demand npx download), reuse its authentication, and pass `--account 278427` on every read/write. `HUBSPOT_CLI_BIN` may point to an explicit installed binary when PATH selection is ambiguous. Within npm scripts the project-installed CLI is on PATH; both it and a global CLI use the established account configuration.

Before upload, inspect `hs --version`, `hs filemanager upload --help`, `hs account info --account 278427` and `hs doctor`. The Files scope must be available. A minimal read-only probe is:

```sh
hs api '/files/v3/files/search?parentFolderIds=218370797141&limit=1' --account 278427 --json
```

For a separately authorized single-file upload, the verified CLI syntax is:

```sh
hs filemanager upload '3-processed/optilift/ASSET-ID/ASSET-ID-640w.webp' '/US - VIS - Image Catalogue - 2026/ASSET-ID/ASSET-ID-640w.webp' --account 278427
```

Replace the illustrative path with the actual derivative and division folder. Prefer `npm run upload` for catalog-managed batches, then sync. File Manager upload is distinct from `hs cms upload` or project deployment. Do not add unsupported `--json` or `--force` flags to the filemanager command.

Browser use is reserved for account authorization or an operation genuinely unsupported by the installed CLI. If auth/scopes fail, diagnose them first rather than switching interfaces or creating new configuration. Never run `hs init` to repair an already working global setup.


Only perform this stage when the user has authorized adding images to HubSpot. Confirm portal 278427 and the selected business-unit folder in `scripts/helpers/hubspot.mjs` against the live account first.

```sh
npm run upload
npm run sync-catalog
npm run validate-catalog -- --metadata-only
npm run build-pages
```

`upload` writes pending derivatives to the configured folder, with a subfolder per asset. It scans all pending entries, so inspect the catalog diff and pending set before running it. `--all` reuploads everything and is not a routine option. Reuse existing live files and URLs; this repository consolidation does not move them.

`sync-catalog` reads the actual Files API with pagination, including direct child asset folders, and writes verified URLs into the local catalog. It does not upload. Missing matches have their recorded URLs removed, so inspect the full diff before committing; access failures, folder configuration or duplicate filenames need investigation. Keep derivative filenames unique. A recorded URL is not content approval.

The adopted helper has IDs for Vision's legacy folder and the newer Aesthetics/Corporate folders. These are source-recorded configuration, not live verification during this adoption. The alternative Vision migration target is inactive. Do not switch it without a separately reviewed migration.

Shared fonts/logos already in HubSpot are outside this image catalog. Do not delete or import them merely because they are absent from catalog.json. Preserve licensed-font restrictions.

## Browse and contribute

Open `dist/index.html` locally after `npm run build-pages`. This build does not deploy a website; no GitHub Pages workflow was copied. From the repository root, image search uses this catalog automatically:

```sh
node .agents/skills/lumenis-image-search/find-images.mjs --brand OptiLIFT --json
```

Review generated images, descriptions, brand restrictions and live URLs. Commit `catalog.json`, regenerated `catalog.md`, and any reviewed instruction/script changes through a pull request in this repository. Run `node scripts/validate.mjs` from the repository root too. Keep upload evidence and confidential rights records externally. Coordinate with Simon before editing the same catalog records in both repositories; this copy has no automatic upstream synchronization.
