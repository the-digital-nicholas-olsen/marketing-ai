---
name: lumenis-design-system-sync
description: Sync the Lumenis Aesthetics design system artifact on claude.ai from the repository after a change to assets/design-system/lumenis-aesthetics - rebuild the generated files, upload new or changed logos and icons, publish only the changed files, and report which commit the artifact now matches. Use after a design-system change is merged, or when asked to "sync", "refresh" or "republish" the Aesthetics design system artifact.
---

# Design system sync

Owner: Aesthetics marketing (Laarni Cayetano).
Status: draft procedure, written 2026-11-07. Review required.

The repository is the source of truth; the artifact is a copy. The artifact's index sets `"editing": "code"`, so its page is read-only and every change is made here, then synced. Never edit the artifact page or its files by hand.

- **Folder:** `assets/design-system/lumenis-aesthetics/`. Its layout matches the artifact's `project/` folder file for file.
- **Artifact:** the **Lumenis Aesthetics** Design System artifact, https://claude.ai/artifact/D6tpihZNF9LFAHiMZrhT8K. It is private: only people it is shared with can open it, and only its editors can sync it.
- **Needs:** Claude Code with the Artifact tool, on a checkout of the branch to sync (normally `main`).

## Steps

1. **Find what changed.** Read `tokens.json` `meta.ref` (the commit or branch last synced). List the files changed in the folder since then: `git diff --name-only <meta.ref> HEAD -- assets/design-system/lumenis-aesthetics`. Nothing changed: say the artifact is current and stop.
2. **Rebuild.** Run `node assets/design-system/lumenis-aesthetics/build.mjs`. It regenerates `tokens.css`, `components/bundle.js` and the local `index.html` gallery, and checks token names, values, aliases, usage notes and that every asset has a record in `design-system.json`. Fix every problem it lists before going on; never edit the generated files by hand.
3. **Check it renders.** Serve `assets/design-system` locally (`npx --yes http-server@14.1.1 assets/design-system -p 8642 -c-1`), open `/lumenis-aesthetics/index.html`, and confirm every changed component renders with no console errors.
4. **Upload new or changed assets.** For each new or changed SVG under `assets/<Group>/`, publish it to the artifact with `asset: true` (up to 25 files per call). Add or update its record in `design-system.json` `assetGroups.<Group>.files` (`name`, `blob` id from the upload, `size` as the upload reports it, `type`), and its name in that group's `order`. A new group also goes into `groups`; its usage notes go in the product module or the README, not in a README inside the group. Run `build.mjs --check` again: it must report no missing records. Don't delete old uploads unless the owner asks.
5. **Publish the changed files.** One Artifact publish to the artifact's url, `root` = the folder, each changed file mapped as `"project/<path>": "<path>"`. Always include `tokens.css` and `components/bundle.js` when tokens or `src/` changed. Send `components/index.d.ts` with `contentType: "text/plain"`. Never publish `index.html`, `build.mjs` or `src/`. A deleted file goes as `"project/<path>": null`.
6. **Update the index last.** Read the artifact's `project/design-system.json` first and keep every key you didn't change. Set `lastChange` (`by` the person you work for, `at` now, `via` `GitHub · the-digital-nicholas-olsen/marketing-ai@<short sha>`, a one-line `note` such as "re-synced to 9f8e7d6: 2 colors changed, SlideQuote added"), and in `tokens.json` set `meta.ref` to the short sha and `meta.synced` to today. Publish `design-system.json` and `tokens.json` in the final call. Commit the updated `design-system.json` and `tokens.json` to the repository so the next sync starts from them.
7. **Report** what changed, the commit the artifact now matches, and anything not synced.

## Rules

- Add a component in `src/components.js`, plus `components/<Name>/preview.html` (first line `<!-- @dsCard group="…" height=N -->`) and `components/<Name>/README.md`. Build only what the Aesthetics guidance defines; anything else needs the owner's approval first.
- Previews can't load hosted photos or other sites; use the `Photo` placeholder.
- A publish refused because the artifact changed meanwhile: read the changed files again, redo the edit once; refused again, stop and tell the owner.
- **Fonts:** the four ABC Arizona cuts are uploaded to the artifact as `project/fonts/*.otf` and listed in `tokens.json` `type.fonts`. They are licensed: keep local copies only in the git-ignored `fonts/` folder (download them from the links in `assets/design-system/hubspot-assets.md`), and publish them again only if they change.
- Licensed font files and photography never go into the repository. The one exception in the artifact is the cover photo (Lumenis brand stock, models no. 61), uploaded to its asset store only as `/_blob/5c1cace88189160d83c0d41db5c55420` and referenced by `components/Cover/preview.html`; keep it, and don't add other photos without the owner choosing them.
