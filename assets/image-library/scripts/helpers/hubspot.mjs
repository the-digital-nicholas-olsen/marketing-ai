import { execFile } from "node:child_process";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

// All folders below live in the same HubSpot portal — this never varies
// per business unit, so it's a single constant rather than a field repeated
// on every folder entry (and on every asset in catalog.json).
export const HUBSPOT_PORTAL_ID = "278427";

// One HubSpot File Manager folder per business unit — this is what
// upload/sync actually route to. `folderId`/`baseUrl` are null for folders
// that don't exist in HubSpot yet — code that needs to talk to a
// not-yet-created folder should call getHubspotFolder(), which throws a
// clear error instead of silently hitting the wrong folder.
//
// `Vision` still points at the real, currently-live, currently-populated
// flat folder (its ~171 files sit directly in it, no subfolders) — do not
// repoint this at visionMigrationTarget below until those files have
// actually been copied there. Aesthetics/Corporate have no legacy folder to
// preserve, so they already point at their real (created, still empty)
// folders in the new nested structure.
export const hubspotFolders = {
  Vision: {
    folderId: "218370797141",
    folderName: "US - VIS - Image Catalogue - 2026",
    baseUrl:
      "https://information.lumenis.com/hubfs/US%20-%20VIS%20-%20Image%20Catalogue%20-%202026",
  },
  Aesthetics: {
    folderId: "220678784826",
    folderName: "US - Web Image Catalog/Aesthetics",
    baseUrl:
      "https://information.lumenis.com/hubfs/US%20-%20Web%20Image%20Catalog/Aesthetics",
  },
  Corporate: {
    folderId: "220678784830",
    folderName: "US - Web Image Catalog/Corporate",
    baseUrl:
      "https://information.lumenis.com/hubfs/US%20-%20Web%20Image%20Catalog/Corporate",
  },
};

// The new nested per-asset-subfolder home for Vision (created 2026-08-30,
// still empty — not wired into hubspotFolders/businessUnit routing).
// Migration plan: copy Vision's real files here (local 3-processed/ is
// still the source), verify, then replace hubspotFolders.Vision's contents
// with this and re-run sync-catalog. Until then this is inert.
export const visionMigrationTarget = {
  folderId: "220678784825",
  folderName: "US - Web Image Catalog/Vision",
  baseUrl:
    "https://information.lumenis.com/hubfs/US%20-%20Web%20Image%20Catalog/Vision",
};

export function getHubspotFolder(businessUnit) {
  const folder = hubspotFolders[businessUnit];
  if (!folder) throw new Error(`Unknown business unit: ${businessUnit}`);
  if (!folder.folderId)
    throw new Error(
      `HubSpot folder for "${businessUnit}" ("${folder.folderName}") doesn't exist yet — create it in HubSpot, then fill in its folderId/baseUrl in hubspot.mjs.`,
    );
  return folder;
}

export async function runHs(args) {
  return execFileAsync("npx", ["hs", ...args]);
}

export async function runHsJson(args) {
  const { stdout } = await runHs([...args, "--json"]);
  return JSON.parse(stdout);
}

export async function uploadFile(localPath, dest) {
  return runHs(["filemanager", "upload", localPath, dest]);
}

// Returns the folder IDs of every direct child folder of parentFolderId
// (live GET, no mutation) — used to find each asset's own subfolder.
async function fetchChildFolderIds(parentFolderId) {
  const ids = [];
  let after;
  do {
    const query = new URLSearchParams({ parentFolderId, limit: "100" });
    if (after) query.set("after", after);
    const page = await runHsJson([
      "api",
      `/files/v3/folders/search?${query.toString()}`,
    ]);
    ids.push(...page.results.map((folder) => folder.id));
    after = page.paging?.next?.after;
  } while (after);
  return ids;
}

function chunk(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size)
    chunks.push(array.slice(i, i + size));
  return chunks;
}

// Returns a Map of filename -> real, confirmed public URL for every file HubSpot
// currently reports under the given business-unit folder (live GET, no
// mutation) — files sitting directly in it (the legacy flat layout) as well
// as files in any of its subfolders (the per-asset-subfolder layout), since
// files/v3/files/search doesn't recurse and a folder could have either or
// both during a migration. Lists child folders, then searches batches of
// [the folder itself, ...its subfolder IDs] (parentFolderIds accepts
// repeated params, but not an unbounded number in one request).
export async function fetchHubspotFileMap(folderId) {
  const byFilename = new Map();
  const subfolderIds = await fetchChildFolderIds(folderId);
  for (const batch of chunk([folderId, ...subfolderIds], 40)) {
    let after;
    do {
      const query = new URLSearchParams({ limit: "100" });
      for (const id of batch) query.append("parentFolderIds", id);
      if (after) query.set("after", after);
      const page = await runHsJson([
        "api",
        `/files/v3/files/search?${query.toString()}`,
      ]);
      for (const file of page.results)
        byFilename.set(path.basename(file.path), file.url);
      after = page.paging?.next?.after;
    } while (after);
  }
  return byFilename;
}
