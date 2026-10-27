---
name: lumenis-librarian
description: File raw team material (meeting transcripts, notes, documents) from a shared Inbox into clean markdown context notes beside the matching project, update people, taste and decision records, and add action items or notes to Smartsheet. Use when asked to run the librarian, file the inbox, or process a transcript into team context.
---
# Librarian

Owner: Nicholas (marketing).
Status: draft procedure, first run 2026-10-26 on a Vision team meeting transcript; review required.

The librarian turns raw material into context that any person or AI can use
later. It keeps three kinds of information in their own places:

| Kind | Home |
|---|---|
| Project context: what happened, who decided what, details, opinions | Markdown notes in the team's shared work folder (SharePoint, synced locally) |
| Work: tasks, owners, due dates, status | Smartsheet |
| Reusable methods and rules for any future campaign | This repository, by pull request only |

Project details never go into this repository. It's public.

## Prerequisites

- **Shared work folder.** The team's work folder is synced to the local machine (OneDrive "Add shortcut to My files"), with a `Librarian/` folder in it. That folder's `AGENTS.md` is the local config: folder map, campaign root and Smartsheet targets. Read it first. If it's missing, stop and say so. To set up a new team, copy the [blank local config](references/local-config-template.md).
- **Smartsheet connector,** for the Smartsheet steps. Without it, file the notes anyway and list the action items in the report.
- Never request or enter credentials.

## Procedure

**First, reconcile unfinished runs.** Find every `INDEX.md` row with status
`in progress`, whether or not its source is still in `Inbox/`, and finish it
before taking new files:
- **Keep the existing row.** Never add a second row or clear its `Archive` cell. Step 5 doesn't apply.
- **Locate the source and settle the archive state:**

  | Where the source is | What to do |
  |---|---|
  | Only in `Inbox/` | Not archived yet. Do step 8 later as written; it reuses the `Archive` path if one is recorded. |
  | In `Inbox/` and at the `Archive` path | The copy was made but the Inbox file wasn't removed. Confirm the archived copy has the same size, remove the Inbox copy, and don't copy again. Step 8 is done. |
  | Only at the `Archive` path | Already archived. Confirm the file is there and readable, and don't copy again. Step 8 is done. |
  | Nowhere | Don't guess. Leave the row `in progress` and flag it in the report. Skip the rest for this source. |
- **Complete the missing records:** re-read the note(s) the row points to, then do steps 6 and 7. Each record ID is checked on its own, so finished records are skipped.
- **Finish:** do step 8 only if the table says it's still needed, then step 9 (mark the existing row `done`).

**Then, for each file in `Inbox/`** (skip files named `*sync-test*` and move them to `Processed/` with no note):

1. **Read it fully,** then clean it using [Remove before writing](#remove-before-writing).
2. **Assign a source ID and check for earlier runs.** The source ID is `<content date YYYY-MM-DD>__<original file name>`, e.g. `2026-10-26__Transcript_Kickoff.txt`. Look it up in `INDEX.md`:
   - **Not found:** a new source. Continue.
   - **Found with status `done`:** the same file was dropped again. Archive it (step 8) without filing, and say so in the report. If the content clearly differs from the archived original, it's a new source: add `-2` to its ID and continue.
   - (Rows `in progress` were already handled by the reconcile step.)
3. **Choose the home.**
   - If it clearly belongs to one existing project folder, file it in `<Campaign root>/<Project>/_Context/`. Check near-matches first (different year, abbreviation, spelling).
   - If it's a distinct, named project with an owner and work ahead, and no folder fits, create `<Campaign root>/<New Name>/_Context/`. Match the existing naming style (Title Case, year when tied to one). Create only `_Context/` inside it, and list the new folder in the report.
   - General team meetings go to `Library/Meetings/`. How-the-team-works material goes to `Library/Team-and-Process/`. Anything you can't place goes to `Library/Unsorted/`, flagged in the report.
   - When an item touches several projects, write one main note and put a short pointer note in each other project's `_Context/` (a one-paragraph summary plus `see: <path>`).
   - Never rename, move or edit existing project files. Write only inside `Librarian/` and `_Context/` folders.
4. **Write the note** with the [template](#note-template). File name: `YYYY-MM-DD-short-topic.md`, using the date of the content. Give every decision, action item, Smartsheet update and taste item its own short tag in the note (`{d1}`, `{t1}`, `{u1}`, `{k1}`, numbered in order). The note is the master list. Reruns read the tags from it and never renumber. **Never overwrite a file.** If the name is taken:
   - If the existing file has the same `source_id`, it's from an interrupted run. Keep it, and its tags, and complete it only if sections are missing.
   - Otherwise, add `-2`, `-3` and so on before `.md` until the name is free.

   Pointer notes follow the same rule. Read each note back to confirm it was saved.
5. **Add the index row:** one row in `INDEX.md` with the source ID, note path(s), an empty `Archive` cell and status `in progress`. If a row for this source ID already exists, keep it as is and don't add another.
6. **Update the shared records** in `Library/`. Each record gets a record ID, `<source ID>#<tag>`, e.g. `2026-10-26__Transcript_Kickoff.txt#d2`. Check each record ID on its own before writing, and skip only the ones already present:
   - `Decisions/decision-log.md`: one dated line per decision tag, with a link to the note, ending with `[id: <source ID>#dN]`.
   - `Taste/`: one dated line per taste tag, ending with `[id: <source ID>#kN]`.
   - `People/<name>.md`: update in place. At most one added line per person per source, ending with `[id: <source ID>#p-<name-slug>]`.
7. **Smartsheet:** see [Smartsheet](#smartsheet).
8. **Archive the original** unchanged:
   1. If the index row's `Archive` cell is already filled (from an interrupted run), reuse that path. Otherwise choose `Processed/YYYY-MM/<file name>`. If that name is taken by a different file, add `-2`, `-3` and so on, and never overwrite.
   2. Write that path into the index row's `Archive` cell before moving anything.
   3. Copy the file there, confirm the copy has the same size, then remove it from `Inbox/`. Never delete an original.
9. **Close it out:** set the index row's status to `done`. A source isn't finished until this step.
10. **Report** (see [Report](#report)).

## Create a project folder on request

Called by [sprint plan setup](../lumenis-sprint-plan-setup/SKILL.md) when a campaign is added, or by a person directly. This is the one case where the librarian creates more than `_Context/` in a new project folder.

1. Read the local config for the campaign root. Check for an existing folder with the same or a near-match name (year, abbreviation, spelling) first.
2. Create `<Campaign root>/<Project name>/` using the exact project name from the sprint plan, then the standard subfolders for the campaign type:

   | Campaign type | Subfolders |
   |---|---|
   | Webinar | `_Context`, `Interview`, `Flyer`, `Deck`, `Video`, `Invoices` |
   | Other types | `_Context` only, until their playbook defines more |

3. If the folder already exists, add only the missing subfolders. Never rename, move or empty anything.
4. Wait for OneDrive to sync, then report the folder path (and the SharePoint link if the person can copy it) so it can go in the sprint plan's Key Info.

## Safe to rerun

Runs can stop partway: a lost connection, a sync delay, a closed laptop. The
procedure is designed so that a rerun picks up where the last run stopped:
- **The index is the checkpoint.** A row stays `in progress` until the final step, and it records where the original was archived. Every run starts by reconciling those rows, including ones whose original has already left the Inbox.
- **Each record is checked on its own.** Every decision, task, update, taste line and people line has its own record ID (`<source ID>#<tag>`). Before writing a record, search for its ID and skip only that record if it exists, never the rest of the source.
- **Tags come from the note.** The note is written first and holds the numbered tags, so a rerun gets the same IDs.

Tested so far: on 2026-10-26, a local walkthrough with fictional data covered a run
that stopped after archiving. Reconcile kept the single index row and its `Archive`
path, made no second copy, wrote only the missing decision, marked the row
`done`, and a rerun changed nothing. Other interruption points and live
Smartsheet writes are still untested.

## Remove before writing

Notes keep work content only. Leave out:
- Small talk and greetings: weekend plans, holidays, costumes, weather, sports.
- Tangents unrelated to the team's work: news stories, celebrity or industry gossip, general opinions about AI or the world unless they shape a decision.
- Gossip about people, inside or outside the company. That includes complaints about colleagues, other teams, leadership or customers, and jokes at someone's expense.
- Personal and family matters, health details, and anything said as a private aside.
- Frustrations about IT, tools or access. Keep only the operational fact and the action (e.g. "a teammate needs phone access to OneDrive; help desk request pending").

When a story is about a mistake, keep only the reusable lesson and drop the people. For example: "when a form is duplicated, check its notification recipients."

## Note template

```markdown
---
date: YYYY-MM-DD
type: meeting | notes | document | decision
source: <original file name>
source_id: <YYYY-MM-DD>__<original file name>
people: [Name, Name]
projects: [Project]
division: Vision | Aesthetics | Both
---

# <Clear title>

## Summary
3-6 sentences: what happened and why it matters.

## Decisions
- {d1} <decision> (who decided)

## Action items
- [ ] {t1} <task> (owner, due date if stated)

## Updates to existing tasks
- {u1} <sheet / task>: <what changed>  (omit section if none)

## Key details
Specifics someone will need later: dates, numbers, vendors, logistics,
open questions.

## Worth remembering
- {k1} Opinions, preferences and quotes that show how people think (taste).
```

## Accuracy

- Only write what the source says. Mark uncertainty as "(unclear in source)", including unclear owners.
- Transcripts misspell names and products. Correct them using `Library/People/` notes and official product spelling (OptiLIGHT, OptiLIFT, Lumenis), and list every correction in the report.
- Keep sensitive data minimal: no customer phone numbers or emails, and no pricing beyond what the project needs.

## Smartsheet

Running the librarian authorizes adding rows and comments to the sheets named in the local config, or to a sheet found in step 1 below that clearly belongs to the project. It doesn't authorize editing or deleting existing cells, creating sheets, or writing to any other sheet. For those, ask.

1. **Find the sheet.** Use the target named in the local `AGENTS.md` for that project. Otherwise search Smartsheet for the project name (event sheet, sprint plan). Use it when exactly one matches the project and year. Ask when several fit, and list the items in the report when none does.
2. **Read before writing.** Get the columns and existing rows. Map the task, owner, due date, status and notes columns by name. If there's no task column, stop and report.
3. **Action items → new rows.** Handle each action item tag (`tN`) separately. Skip that item only if a row already carries its record ID (`<source ID>#tN`), or if a row already holds the same task. Otherwise add a row with the task, owner (if the sheet has a contact or owner column and the person is clear), due date (only if stated), status set to the sheet's "not started" value, and the note path plus `[id: <source ID>#tN]` in the notes column. If there's no notes column, put the ID in the row's first comment. Add rows at the bottom, or under the matching parent row when the sheet is grouped by phase.
4. **Updates to existing rows → comments.** Handle each update tag (`uN`) separately. Read the target row's comments, and skip the update only if one already carries `<source ID>#uN`. Otherwise post `<date> Librarian [id: <source ID>#uN]: <update> (<note path>)`. Don't change the cell values.
5. **Verify.** Read the sheet back and confirm each new row and comment exists. Include the row numbers in the report.

## Report

After each run, report in chat:
1. Filed: source → note path(s), plus any new project folders.
2. Smartsheet: rows added and comments posted (sheet name, row numbers), and items not added and why.
3. Decisions logged.
4. Name and term corrections.
5. Unsorted or uncertain items.
6. Candidates for this repository: reusable lessons only, with no names or project details. Propose them. Don't commit them.

## Mistakes to avoid

- Filing a summary that still carries small talk or gossip because it "sounded important".
- Creating a new project folder for a one-off conversation.
- Editing Smartsheet cell values instead of adding a comment.
- Overwriting a note or archived file that has the same name.
- Archiving the original before every record is written, writing a record without its record ID, or skipping a whole source because one of its records exists. Any of these makes a rerun unsafe.
- Writing project details into this repository.
