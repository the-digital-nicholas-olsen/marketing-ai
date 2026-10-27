---
name: lumenis-sprint-plan-setup
description: Add a new campaign to the team's live Smartsheet sprint plan by copying its campaign template (Webinar, Accelerate, Trade Show) and turning each row's T-minus timing into a real due date. Use when a campaign's date is confirmed and it needs to appear in the sprint plan with owners and due dates.
---

# Sprint plan setup

Owner: Nicholas (marketing operations).
Status: draft procedure, written 2026-10-27 from the Vision webinar playbook session; not yet run on a live campaign. Review required.

Every campaign type has a template sheet in Smartsheet. Each row is one step, written as the finished state ("The flyer has been approved by the KOL"), with an owner, an AI mode, the agent that runs it and a **Timing** relative to the event day T. This skill copies those rows into the live sprint plan and gives each one a real due date, so the daily brief and the team can work from it.

## Inputs

- **Campaign type** and its template sheet (for example *TEMPLATE - Webinar* in the team's Campaign Templates folder). Find it by name with Smartsheet search; if two match, ask which one.
- **Event date** (T) and time zone. A webinar's T is the live date.
- **Project name**, following the naming convention (`node scripts/name.mjs`).
- **Key facts** for Key Info cells, when known: KOL, host, division, budget.
- **The live sprint plan sheet** (for Vision: *Sprint Plan (Live)*). Its columns must include every template column (Step, Timing, Days from Event, Agent (GitHub), AI Instructions, Depends On) plus Done, Status, Due Date and Project. If any are missing, stop and say which; copying would silently drop that data.

Requires the Smartsheet connector with edit access to both sheets. Without it, produce the dated row list as a table for a person to paste and say the sheet was not changed.

## Procedure

1. **Check for an existing copy.** Search the live plan for the project name. If a Project row exists, compare the Step IDs under it with the template's. Add only the missing steps, each in its template position (under its Workstream row, in template order), then fill missing due dates. This also repairs a copy that stopped partway. Never add a second Project row or a second copy of a step, and never change a row a teammate has edited.
2. **Read the template whole,** in order, keeping its hierarchy (Workstream rows with Task rows under them).
3. **Compute each due date** from Days from Event: `due = T + days`, in calendar days. Then adjust weekends:
   - **The event date never moves,** and neither does any row with Days from Event = 0 or a Timing that starts with "T-0" (tech check, live event, night-of tasks). For a multi-day event, rows the template ties to an event day keep that day.
   - **Pre-event deadlines** (negative days) that land on a Saturday or Sunday move to the Friday before.
   - **Post-event steps** (positive days) that land on a weekend move to the Monday after. Moving them earlier could put them before the event.
   - A blank Days from Event means the row's AI Instructions hold a rule (for example "Monday of webinar week"); apply it. If it can't be applied, leave the date blank and list the row in the report.
   - **Check dependencies last.** If an adjusted date falls before the due date of a step in its Depends On, set it to that prerequisite's date and list the row in the report. If the only fix would move an event-day (T-0) row or a date a teammate already set, change nothing: flag the conflict in the report and the row's Notes / Blocker for the owner to decide.
4. **Add one Project row** at the right place in the live plan (under the campaign type's Category row when one exists), then the template's rows under it with the same hierarchy. Copy every template column as is. Set Project on every row, Status = Not Started, Done unchecked, Sprint = Backlog unless the user names a sprint.
5. **Fill Key Info** blanks you were given (KOL, host, date). Leave the rest as the template's fill-in prompts.
6. **Ask the librarian for the project folder.** Follow [lumenis-librarian](../lumenis-librarian/SKILL.md) to create `<campaign root>/<Project>/` with its `_Context/` folder, and put the folder path or link in the Project row's Key Info. If the shared folder isn't synced on this machine, skip this step and list it as open.
7. **Read back** the new rows: count matches the template, every Task row has an owner, every row with Days from Event has a due date, only event-day rows fall on a weekend, and no row is due before its prerequisites.

## Output

A short report: project row link, rows added, the date range (first and last due date), rows left without a date and why, and whether the project folder was created.

## Stop and ask

- The template or live plan can't be found, or two candidates match.
- Live-plan columns are missing (step list above).
- The event date is unconfirmed. A tentative date can be used only if the user says so; mark the Project row "tentative date" in Notes.

## Mistakes to avoid

- Counting business days. The templates use calendar days.
- Moving event-day rows, or pulling a post-event step before the event, to avoid a weekend.
- Flattening the hierarchy. The daily brief and reports rely on Workstream and Task rows.
- Copying template Key Info prompts into the Notes column, or overwriting a teammate's edits in an existing project.
