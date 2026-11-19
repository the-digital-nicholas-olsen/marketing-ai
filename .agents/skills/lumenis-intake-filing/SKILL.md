---
name: lumenis-intake-filing
description: Vision only. Finish what the Daily Brief "Add to the plan" box can't do itself: create OneDrive folders for new sprint plan projects, link them in Smartsheet, file each project's context notes (left as row comments by the box) into the project's _Context folder, and log box requests. Safe to run from any teammate's computer (Mac or Windows) with OneDrive synced, and from several computers on a schedule. Use when asked to run intake filing, create missing project folders, file context notes, or set up the filing schedule on a new computer.
---

# Intake filing

Owner: Nicholas (marketing operations).
Scope: **Vision Marketing (US) only.** Listed in the [Vision Smartsheet procedures](../../../divisions/vision/smartsheet/README.md).
Status: approved 2026-11-11; runs hourly on more than one teammate's computer. Updated 2026-11-19 (Kaelyn): files per-project context notes from row comments.

The brief page's request box ([daily brief](../lumenis-daily-brief/SKILL.md)) writes rows to Smartsheet but can't reach OneDrive: the Microsoft 365 connector is read-only. This skill does the OneDrive half. Any teammate can run it, because everyone's OneDrive syncs the same shared library: a folder created on one computer appears for everyone.

When someone pastes a transcript or notes, the box has Claude write one **context note per project** (small talk, rants and personal topics left out; the person checks them before saving). It saves each note as a comment thread on that project's row, starting `Context <id> | ...`, and tags the project's rows `[needs context <id>]`. The raw transcript is never stored. The row notes also keep a short quote of the request (`(from the daily brief: "...")`), cut at 300 characters.

## Prerequisites

- **OneDrive synced** with the team's shared library, including its `Librarian/` folder. Find it; don't assume a path:
  - Mac: look under `~/Library/CloudStorage/` for a folder starting `OneDrive-`, then the team folder inside it that contains `Librarian/AGENTS.md`.
  - Windows: look under `%USERPROFILE%` for a folder starting `OneDrive - `, then the same.
  - If it isn't found, stop and say "OneDrive's team folder isn't synced on this computer." Don't create anything.
- **Year campaign libraries.** Trade shows from 2027 on live in their own synced library, `Lumenis Vision US MKT - <year> Campaigns` (SharePoint: MKT-Vision > Shared Documents > Internal Working Files > `<year>` > `<year> Campaigns`; link pattern `https://lumenis.sharepoint.com/sites/MKT-Vision/Shared%20Documents/Internal%20Working%20Files/<year>/<year>%20Campaigns/<folder>`), not in the main campaign root. Look for it next to the team folder (same `OneDrive - ` parent). In notes it is written `<year> Campaigns/<folder>`. If a project needs it and it isn't synced on this computer, don't create anything there or in the main root: append `M/D Claude (<me>): Needs the <year> Campaigns library synced; skipped.` and move on.
- **The local config** `Librarian/AGENTS.md`: the campaign root, the live sprint plan sheet and the SharePoint link pattern. Paths in it are relative to the `Librarian/` folder.
- **The Smartsheet connector** with edit access to the live sprint plan, including reading row discussions (`list_discussions` / `get_discussion` with comments).
- Never ask for or enter credentials.

## Procedure

Write the name of the person whose computer this is (from the Claude account) as `<me>`.

### 1. Folders for new projects

Read the live plan's Project rows (Row Type = Project) where **Deliverable Link** is blank. For each one, in order:

1. **Claim it.** Re-read the row's Notes / Blocker. If it contains `[folder claimed` from someone else today, or `[folder done]`, skip it: another computer has it. Otherwise append the line `M/D Claude (<me>): [folder claimed]` to the notes (keep every existing line), then re-read the row. If another claim appears above yours, skip it.
2. **Name.** The canonical name is the Task text before ` — ` ([naming convention](../lumenis-sprint-intake/references/naming.md)). Replace any of `: / \ * ? " < > |` with `-`.
3. **Look before creating.** If the notes contain `[use folder: <path>]` (a teammate's decision; `Campaigns/...` is the main campaign root, `<year> Campaigns/...` is that year's library), use that folder, create it if it's missing, and skip the near-match search. Otherwise, for a **trade show whose name ends in a year that has its own campaigns library** (2027 on), look only in that library: the show's folder there is usually `<Show> <year>` and may use a longer or shorter show name (`Vision Expo One 2027` for "Vision Expo Planning - 2027", `Vision Source Exchange 2027`). Use a clear match; create `<Show> <year>/_Context/` there if there's none. Never offer a previous year's folder (`ASCRS 2026`, `VSX 2026`) as the match for a new year's project. For everything else, check the campaign root for the exact name, then near-matches (same topic, other year, abbreviation), including inside series folders (`Accelerate <year>/`, `Webinars <year>/`, `AI Week <year>/`). If one clearly matches, use it. If it's ambiguous, don't create anything: replace your claim line with `M/D Claude (<me>): Possible existing folder <path>; confirm before one is created.` and move on.
4. **Create** `<name>/_Context/`: inside `Webinars <year>/` for webinars, `Accelerate <year>/` for Accelerates, in the year library for trade shows covered by step 3, otherwise at the campaign root. Write `_Context/README.md`: what the project is (from Key Info) and the original request if the notes quote one.
5. **Link it.** Set Deliverable Link to `OneDrive folder` with the SharePoint link (pattern in the local config, path URL-encoded). In the notes, replace your claim line with `M/D Claude (<me>): OneDrive folder created: <relative path>.` and change `[needs folder]` to `[folder done]`.

### 2. File context notes

Find rows whose Notes / Blocker contain `[needs context <id>]`. Group them by project and `<id>`. For each project and id:

1. **Folder.** Find the project's folder (its Project row's Deliverable Link, or the canonical name). A Deliverable Link under `Internal Working Files/<year>/<year> Campaigns/` is in that year's library; if it isn't synced here, leave it for a computer that has it. No folder yet: leave it for the next run.
2. **Read the note.** List the discussions on the **Project row** with comments included. Take the thread whose first comment starts `Context <id> |`. Join its comments in `Part 1 of N` … `Part N of N` order, dropping each comment's header line (`Context <id> | …` and the `Part x of N` line). If a part is missing, leave the tag for the next run.
   - No such thread on the Project row: check the tagged row itself (older pages put it on the first changed row). Still none: the request had no context note for this project. Remove the tag from those rows, append nothing, and count it under "skipped".
3. **Check it before saving.** It should already be clean. If it still contains small talk, rants or venting, or anything personal (pay, bonus, MBO, performance reviews, health, time off), remove those parts and keep the business point stated neutrally. Never add facts that aren't in the note.
4. **Write** `<folder>/_Context/<id>.md`. If that file already exists with the same content, another computer filed it: go on to step 5. If it exists with different content, write `<id>-2.md` (never overwrite). Add a link line for it to `_Context/README.md` under `## Context notes` (create the heading if missing; skip if the line is already there).
5. **Untag.** On each tagged row of that project, replace `[needs context <id>]` with `[context: <relative path to the .md>]`. Change nothing else in the cell.

Leave the comment thread in Smartsheet as it is; it's the record of what was saved.

### 3. Log box requests

Find note lines that contain `(from the daily brief` and don't end in `[filed]`. For each:

1. Find the project's folder (its Project row's Deliverable Link, or the canonical name). No folder yet: leave it for the next run.
2. Append to `<folder>/_Context/YYYY-MM-DD-brief-requests.md` (the note's date; create it with the heading `# Requests from the Daily Brief` if missing): one bullet with who asked, the request in quotes, and the step text it created or changed. Skip if that exact quoted request is already in the file (another computer filed it). The quote is only the first 300 characters: it is a log, not the context. The context is filed in step 2.
3. Append ` [filed]` to that note line in Smartsheet. Change nothing else in the cell.

### 4. Report

One short list: folders created (paths), context notes filed (project and path), requests logged (project and count), items skipped and why. If there was nothing to do, say "Nothing to file."

## Set it up on a computer

A teammate with OneDrive synced and the Smartsheet connector can add the schedule by asking Claude in the desktop app:

> Create a scheduled task "Vision intake filing" that runs the lumenis-intake-filing skill from the marketing-ai repo every hour at :MM past, 8 AM to 6 PM, Monday to Friday.

Give each computer a different minute (for example :05 and :35) so runs don't overlap; the claim step covers the rest. Scheduled tasks run only while the Claude app is open; a missed run happens at the next launch. The skill can also be run once on demand: "run lumenis-intake-filing".

## Mistakes to avoid

- Creating a folder without claiming the row first, or after someone else's claim.
- Renaming, moving or deleting existing folders or files, or overwriting a file.
- Writing to the Project column (it's a formula) or changing task text, owners or dates.
- Assuming the OneDrive path. It differs between Macs, Windows laptops and people.
- Filing a 2027-or-later trade show in the main Campaigns root, or matching it to last year's folder. On 11/19 this created `Campaigns/Vision Expo 2027` and `Campaigns/Trade Show - Dry Eye Summit - 2027` in the wrong library.
- Treating the 300-character quote in the notes as the context. The context note is in the Project row's comments.
- Saving pay, bonus, MBO, review or other personal topics into `_Context`, or deleting the Smartsheet comment thread after filing.
