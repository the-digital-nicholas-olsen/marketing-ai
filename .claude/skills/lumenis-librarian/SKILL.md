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

For each file in `Inbox/` (skip files named `*sync-test*` and move them to `Processed/` with no note):

1. **Read it fully,** then clean it using [Remove before writing](#remove-before-writing).
2. **Assign a source ID and check for earlier runs.** The source ID is `<content date YYYY-MM-DD>__<original file name>`, e.g. `2026-10-26__Transcript_Kickoff.txt`. Every record you write for this source carries it (see [Safe to rerun](#safe-to-rerun)). Look the ID up in `INDEX.md`:
   - **Not found:** a new source. Continue.
   - **Found with status `in progress`:** an earlier run stopped partway. Resume it. Skip every step whose output already carries the ID, and do only the missing ones.
   - **Found with status `done`:** the same file was dropped again. Archive it (step 8) without filing, and say so in the report. If the content clearly differs from the archived original, it's a new source: add `-2` to its ID and continue.
3. **Choose the home.**
   - If it clearly belongs to one existing project folder, file it in `<Campaign root>/<Project>/_Context/`. Check near-matches first (different year, abbreviation, spelling).
   - If it's a distinct, named project with an owner and work ahead, and no folder fits, create `<Campaign root>/<New Name>/_Context/`. Match the existing naming style (Title Case, year when tied to one). Create only `_Context/` inside it, and list the new folder in the report.
   - General team meetings go to `Library/Meetings/`. How-the-team-works material goes to `Library/Team-and-Process/`. Anything you can't place goes to `Library/Unsorted/`, flagged in the report.
   - When an item touches several projects, write one main note and put a short pointer note in each other project's `_Context/` (a one-paragraph summary plus `see: <path>`).
   - Never rename, move or edit existing project files. Write only inside `Librarian/` and `_Context/` folders.
4. **Write the note** with the [template](#note-template). File name: `YYYY-MM-DD-short-topic.md`, using the date of the content. **Never overwrite a file.** If the name is taken:
   - If the existing file has the same `source_id`, it's from an interrupted run. Keep it, and complete it only if sections are missing.
   - Otherwise, add `-2`, `-3` and so on before `.md` until the name is free.

   Pointer notes follow the same rule. Read each note back to confirm it was saved.
5. **Add the index row:** one row in `INDEX.md` with the source ID, note path(s) and status `in progress`.
6. **Update the shared records** in `Library/`. Before adding anything, check whether that file already has an entry carrying this source ID, and skip it if so:
   - `People/<name>.md`: role, responsibilities, preferences. Update in place. End each added line with `[src: <source ID>]`.
   - `Taste/`: dated opinions on what good or bad work looks like, each ending with `[src: <source ID>]`.
   - `Decisions/decision-log.md`: one dated line per decision, with a link to the note, ending with `[src: <source ID>]`.
7. **Smartsheet:** see [Smartsheet](#smartsheet).
8. **Archive the original** unchanged in `Processed/YYYY-MM/`. If a file with that name is already there, add `-2`, `-3` and so on to the new copy's name, and never overwrite. Confirm the archived copy exists and has the same size before removing it from `Inbox/`. Never delete an original.
9. **Close it out:** set the index row's status to `done`. A source isn't finished until this step.
10. **Report** (see [Report](#report)).

## Safe to rerun

Runs can stop partway: a lost connection, a sync delay, a closed laptop. The
procedure is ordered so that rerunning is always safe:
- The original stays in `Inbox/` until everything else is written, and the index row says `in progress` until the end. A file still in the Inbox means its work isn't finished.
- Every record written for a source carries its ID: the note's `source_id`, the index row, the `[src: …]` tag on shared-record lines, and the Smartsheet row notes and comments. Before any write, search for the ID and skip the write if it's already there.
- A second run produces the same result as one complete run: no duplicate notes, rows, decision lines or comments.

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
- <decision> (who decided)

## Action items
- [ ] <task> (owner, due date if stated)

## Key details
Specifics someone will need later: dates, numbers, vendors, logistics,
open questions.

## Worth remembering
Opinions, preferences and quotes that show how people think (taste).
```

## Accuracy

- Only write what the source says. Mark uncertainty as "(unclear in source)", including unclear owners.
- Transcripts misspell names and products. Correct them using `Library/People/` notes and official product spelling (OptiLIGHT, OptiLIFT, Lumenis), and list every correction in the report.
- Keep sensitive data minimal: no customer phone numbers or emails, and no pricing beyond what the project needs.

## Smartsheet

Running the librarian authorizes adding rows and comments to the sheets named in the local config, or to a sheet found in step 1 below that clearly belongs to the project. It doesn't authorize editing or deleting existing cells, creating sheets, or writing to any other sheet. For those, ask.

1. **Find the sheet.** Use the target named in the local `AGENTS.md` for that project. Otherwise search Smartsheet for the project name (event sheet, sprint plan). Use it when exactly one matches the project and year. Ask when several fit, and list the items in the report when none does.
2. **Read before writing.** Get the columns and existing rows. Map the task, owner, due date, status and notes columns by name. If there's no task column, stop and report.
3. **Action items → new rows.** For each action item, skip it if a row already carries this source ID, or if a row already holds the same task. Otherwise add a row with the task, owner (if the sheet has a contact or owner column and the person is clear), due date (only if stated), status set to the sheet's "not started" value, and the note path plus `[src: <source ID>]` in the notes column. If there's no notes column, add the tag as the row's first comment. Add rows at the bottom, or under the matching parent row when the sheet is grouped by phase.
4. **Updates to existing rows → comments.** When the source changes or adds detail to an existing task (a new date, a blocker, a decision), add a row comment in the form `<date> Librarian [src: <source ID>]: <update> (<note path>)`. Before posting, read the row's comments and skip it if one already carries this source ID. Don't change the cell values.
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
- Archiving the original before every record is written, or writing a record without its source ID. Either one makes a rerun unsafe.
- Writing project details into this repository.
