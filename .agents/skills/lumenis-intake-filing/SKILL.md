---
name: lumenis-intake-filing
description: Vision only. Finish what the Daily Brief "Add to the plan" box can't do itself: create OneDrive folders for new sprint plan projects, link them in Smartsheet, and file each box request into the project's _Context folder. Safe to run from any teammate's computer (Mac or Windows) with OneDrive synced, and from several computers on a schedule. Use when asked to run intake filing, create missing project folders, or set up the filing schedule on a new computer.
---

# Intake filing

Owner: Nicholas (marketing operations).
Scope: **Vision Marketing (US) only.** Listed in the [Vision Smartsheet procedures](../../../divisions/vision/smartsheet/README.md).
Status: approved 2026-11-11; runs hourly on more than one teammate's computer.

The brief page's request box ([daily brief](../lumenis-daily-brief/SKILL.md)) writes rows to Smartsheet but can't reach OneDrive: the Microsoft 365 connector is read-only. This skill does the OneDrive half. Any teammate can run it, because everyone's OneDrive syncs the same shared library: a folder created on one computer appears for everyone.

## Prerequisites

- **OneDrive synced** with the team's shared library, including its `Librarian/` folder. Find it; don't assume a path:
  - Mac: look under `~/Library/CloudStorage/` for a folder starting `OneDrive-`, then the team folder inside it that contains `Librarian/AGENTS.md`.
  - Windows: look under `%USERPROFILE%` for a folder starting `OneDrive - `, then the same.
  - If it isn't found, stop and say "OneDrive's team folder isn't synced on this computer." Don't create anything.
- **The local config** `Librarian/AGENTS.md`: the campaign root, the live sprint plan sheet and the SharePoint link pattern. Paths in it are relative to the `Librarian/` folder.
- **The Smartsheet connector** with edit access to the live sprint plan.
- Never ask for or enter credentials.

## Procedure

Write the name of the person whose computer this is (from the Claude account) as `<me>`.

### 1. Folders for new projects

Read the live plan's Project rows (Row Type = Project) where **Deliverable Link** is blank. For each one, in order:

1. **Claim it.** Re-read the row's Notes / Blocker. If it contains `[folder claimed` from someone else today, or `[folder done]`, skip it: another computer has it. Otherwise append the line `M/D Claude (<me>): [folder claimed]` to the notes (keep every existing line), then re-read the row. If another claim appears above yours, skip it.
2. **Name.** The canonical name is the Task text before ` — ` ([naming convention](../lumenis-sprint-intake/references/naming.md)). Replace any of `: / \ * ? " < > |` with `-`.
3. **Look before creating.** Check the campaign root for the exact name, then near-matches (same topic, other year, abbreviation), including inside series folders (`Accelerate <year>/`, `Webinars <year>/`, `AI Week <year>/`). If one clearly matches, use it. If it's ambiguous, don't create anything: replace your claim line with `M/D Claude (<me>): Possible existing folder <path>; confirm before one is created.` and move on.
4. **Create** `<name>/_Context/`: inside `Webinars <year>/` for webinars, `Accelerate <year>/` for Accelerates, otherwise at the campaign root. Write `_Context/README.md`: what the project is (from Key Info) and the original request if the notes quote one.
5. **Link it.** Set Deliverable Link to `OneDrive folder` with the SharePoint link (pattern in the local config, path URL-encoded). In the notes, replace your claim line with `M/D Claude (<me>): OneDrive folder created: <relative path>.` and change `[needs folder]` to `[folder done]`.

### 2. File box requests as context

Find note lines that contain `(from the daily brief` and don't end in `[filed]`. For each:

1. Find the project's folder (its Project row's Deliverable Link, or the canonical name). No folder yet: leave it for the next run.
2. Append to `<folder>/_Context/YYYY-MM-DD-brief-requests.md` (the note's date; create it with the heading `# Requests from the Daily Brief` if missing): one bullet with who asked, the request in quotes, and the step text it created or changed. Skip if that exact quoted request is already in the file (another computer filed it).
3. Append ` [filed]` to that note line in Smartsheet. Change nothing else in the cell.

### 3. Report

One short list: folders created (paths), requests filed (project and count), items skipped and why. If there was nothing to do, say "Nothing to file."

## Set it up on a computer

A teammate with OneDrive synced and the Smartsheet connector can add the schedule by asking Claude in the desktop app:

> Create a scheduled task "Vision intake filing" that runs the lumenis-intake-filing skill from the marketing-ai repo every hour at :MM past, 8 AM to 6 PM, Monday to Friday.

Give each computer a different minute (for example :05 and :35) so runs don't overlap; the claim step covers the rest. Scheduled tasks run only while the Claude app is open; a missed run happens at the next launch. The skill can also be run once on demand: "run lumenis-intake-filing".

## Mistakes to avoid

- Creating a folder without claiming the row first, or after someone else's claim.
- Renaming, moving or deleting existing folders or files, or overwriting a file.
- Writing to the Project column (it's a formula) or changing task text, owners or dates.
- Assuming the OneDrive path. It differs between Macs, Windows laptops and people.
