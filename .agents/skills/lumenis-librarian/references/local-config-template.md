# Blank local config for the librarian

Copy everything below the line into `Librarian/AGENTS.md` inside your team's
shared work folder (SharePoint, synced locally), then fill in each `<…>`.
Keep the filled-in copy in SharePoint only. It describes your internal folders
and sheets, so it never comes back into this repository.

Setup:
1. In SharePoint, open the folder that holds your team's projects for the
   year, and create `Librarian/` with an `Inbox/` folder inside it.
2. Click "Add shortcut to My files" so it syncs to each person's computer
   through the OneDrive app.
3. Save this file as `Librarian/AGENTS.md`, and add a `CLAUDE.md` containing
   `Read AGENTS.md.` so Claude clients load it automatically.
4. Run the librarian once on a small test file and check the result in
   SharePoint.

---

```markdown
# Librarian: local config (<Team> <Year>)

**The procedure lives in GitHub:** the `lumenis-librarian` skill in
marketing-ai (`.agents/skills/lumenis-librarian/SKILL.md`). Load it from the
connected repository, or read
https://github.com/the-digital-nicholas-olsen/marketing-ai/blob/main/.agents/skills/lumenis-librarian/SKILL.md
and follow it. This file only holds the settings for this folder. If you
can't reach the skill, stop and say so.

## Folder map (relative to this Librarian folder)

| Setting | Value |
|---|---|
| Inbox | `Inbox/` |
| Campaign root | `<relative path to the folder holding one subfolder per project, e.g. ../Campaigns/>` |
| Library | `Library/` (Meetings, Team-and-Process, People, Decisions, Taste, Unsorted) |
| Archive | `Processed/YYYY-MM/` |
| Index | `INDEX.md` (columns: Date, Source ID, Note, Projects, Archive, Status) |
| Division | `<Vision / Aesthetics / Both>` |
| Project folder naming | `<e.g. Title Case with year: "Vision Expo 2027">` |

## Smartsheet targets

| Project or type of work | Sheet (name and workspace/folder) |
|---|---|
| Team tasks and sprint work | `<sprint plan sheet name and location>` |
| Events | `<e.g. "the event's own sheet, found by event name and year">` |
| `<project>` | `<sheet>` |
| Anything else | Search by project name. Ask if unclear |

## Spelling reference

Use the notes in `Library/People/` for name spellings. Common transcript
errors:
- `<misspelling>` → `<correct name>`

## Team-specific rules (optional)

- `<e.g. folders the librarian must never write to>`
- `<e.g. who to ask when filing is unclear>`
```
