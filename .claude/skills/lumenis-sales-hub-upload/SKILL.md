---
name: lumenis-sales-hub-upload
description: Vision only. File a new piece for the Vision Sales Hub (a 30-second doctor clip, testimonial video, case study, roll-up banner, logo or approved image) into the right SharePoint content folder with the right name, by asking a few multiple-choice questions. Use when someone attaches a file and says "add this to the Sales Hub", "upload this clip", or asks where a hub file goes.
---

# Sales Hub upload

Owner: EJ (Vision marketing). Built for Ted and anyone else who supplies hub content.
Scope: **Vision Marketing (US) only.**
Status: draft procedure, 2026-11-19. Review required.

The Vision Sales Hub is built from content folders in the team's SharePoint library: one folder per hub section. A file appears on the hub when it sits in the right folder with the right name and the hub is republished. This skill does the filing so the person only has to attach the file and answer questions.

## Prerequisites

- **Claude desktop app (Code tab)**, so Claude can read the attached file and write to OneDrive. A browser chat can't save to OneDrive; say so and stop.
- **OneDrive synced** with the Vision US MKT library. Find the hub's `Content/HUB-CONTENT.json`; don't assume a path:
  - Windows: under `%USERPROFILE%`, folders starting `OneDrive - `.
  - Mac: under `~/Library/CloudStorage/`, folders starting `OneDrive-`.
  - Search those for `Vision-Sales-Hub/Content/HUB-CONTENT.json`. If it isn't found, stop and say "The Sales Hub folder isn't synced on this computer. Add the shortcut to the 2026 folder in OneDrive, then try again." Create nothing.
- **The local config** `HUB-CONTENT.json`: the section folders, product lines and naming rule. Everything below reads from it; the folder names and product lines live there, not here.

## Procedure

### 1. Get the file

Use the file the person attached. If there isn't one, ask them to attach it. One file per pass; repeat for several.

### 2. Ask the questions

Ask with multiple-choice questions (AskUserQuestion), up to four at once, recommended option first:

1. **Section:** one option per `folders[]` entry, labelled by its path (for example "Hear from the Doctors › 30-Second Clips") with its `typical` file type as the description. Pre-select from the file when it's obvious: a short MP4 → 30-Second Clips.
2. **Product line:** the `productLines` names. "Lumenis" is for general pieces.
3. **Status:** "Ready for the hub" (the section folder) or "Draft, not ready yet" (its `_Drafts` folder).
4. **Replaces an older file?** "No, it's new" or "Yes, archive the old one". If yes, list the files currently in that folder and ask which one.

Then ask in plain text for the **title** as it should read on the card (short, no product name; suggest one from the file name), and for folders with `askDoctor: true`, the **doctor or practice** shown under the title (optional).

### 3. Name and check

- Name: `<Product line> - <Title>[ - <Doctor>].<original extension>`.
- Replace any of `: / \ * ? " < > | #  %` with `-`, and collapse double spaces.
- Keep the full path under 250 characters; shorten the title if needed and say so.
- If a file with that name already exists in the target folder, don't overwrite it. Ask whether to archive the existing one or pick a different title.

### 4. File it

1. If replacing: move the old file (and its same-name thumbnail picture, if any) into the folder's `_Archive`. Moving is allowed; deleting never is.
2. Copy the attached file to the target folder under the new name. Copy, don't move, the person's original.
3. **Thumbnail (optional):** if the file isn't a picture, ask whether they have a thumbnail image. If they attach one, save it next to the file with the same name and its own extension (.jpg, .png or .webp). Pictures over 400 KB show the blue tile instead; say so if theirs is bigger.
4. Read the folder back and confirm the file (and thumbnail) are there with the right size.

### 5. Report

Tell them in two or three lines: the file name, the folder, whether it's live on the next republish or waiting in `_Drafts`, and anything archived. End with: "It shows on the hub after the next republish. Ask EJ to republish, then check the item in SharePoint."

If the person can also publish (the hub's `source/publish.py` is in the same synced folder and they've been asked to), offer to run it. Otherwise don't.

## Mistakes to avoid

- Guessing the section or product line instead of asking.
- Renaming, deleting or overwriting existing files; editing `HUB-CONTENT.json`.
- Saving outside the `Content` folder, or into `_Archive` as a new item.
- Writing folder paths, SharePoint links or file names into this repository.
