---
name: lumenis-sprint-plan-setup
description: Vision only. Add a new campaign to the team's live Smartsheet sprint plan by copying its campaign template (Webinar, Accelerate, Trade Show) and turning each row's T-minus timing into a real due date. Use when a campaign's date is confirmed and it needs to appear in the sprint plan with owners and due dates.
---

# Sprint plan setup

Owner: Nicholas (marketing operations).
Scope: **Vision Marketing (US) only.** The sprint plan workspace, templates, Backlog and brief page are Vision's. Aesthetics does not run its sprint plan in Smartsheet this way (as of November 2026 it is expected to use Asana), so if the request is for Aesthetics work, say this skill doesn't apply and stop. Listed in the [Vision Smartsheet procedures](../../../divisions/vision/smartsheet/README.md).
Status: draft procedure, written 2026-10-27 from the Vision webinar playbook session; not yet run on a live campaign. Review required.

Every campaign type has a template sheet in Smartsheet. Each row is one step, written as the finished state ("The flyer has been approved by the KOL"), with an owner, an AI mode, the agent that runs it and a **Timing** relative to the event day T. This skill copies those rows into the live sprint plan and gives each one a real due date, so the daily brief and the team can work from it.

## Inputs

- **Campaign type** and its template sheet (for example *TEMPLATE - Webinar* in the team's Campaign Templates folder). Find it by name with Smartsheet search; if two match, ask which one.
- **Event date** (T) and time zone. A webinar's T is the live date. An Accelerate's T is always Day 1 of the show, the Friday.
- **Project name**, following the [naming convention](../lumenis-sprint-intake/references/naming.md). The HubSpot and Salesforce campaign names come from `node scripts/name.mjs` and go in the Project row's **CRM Campaign Name** column.
- **Key facts** for Key Info cells, when known: KOL, host, division, budget.
- **The live sprint plan sheet** (for Vision: *Sprint Plan (Live)*). Its columns must include every template column (Step, Timing, Days from Event, Agent (GitHub), AI Instructions, Depends On) plus Done, Status, Due Date, Project (automatic) and CRM Campaign Name. If any are missing, stop and say which; copying would silently drop that data.

Requires the Smartsheet connector with edit access to both sheets. Without it, produce the dated row list as a table for a person to paste and say the sheet was not changed.

## Procedure

1. **Check for an existing copy.** Search the live plan for the project name. If a Project row exists, compare the Step IDs under it with the template's. Add only the missing steps, each in its template position (under its Workstream row, in template order), then fill missing due dates. This also repairs a copy that stopped partway. Never add a second Project row or a second copy of a step, and never change a row a teammate has edited.
2. **Read the template whole,** in order, keeping its hierarchy (Workstream rows with Task rows under them).
3. **Compute each due date** from Days from Event: `due = T + days`, in calendar days. The date is when the step is **due**, not when to start it; the daily brief shows what's coming so bigger items (a flyer, a deck) start early.
   - **No weekend or holiday adjustment.** A date that lands on a Saturday, Sunday or holiday stays there. The team works variable schedules (weekend KOL calls, weeks off), so the owner decides; the daily brief shows a missed date as late the next working day. Team decision, 2026-10-27.
   - A blank Days from Event means the row's AI Instructions hold a rule (for example "Monday of webinar week", or for an Accelerate "first business day of the show's quarter"); apply it. Accelerate rows timed "Annual" (the year's dates and budget) are done before any show is cloned: copy them with Status = Complete if their Key Info is known, otherwise Not Started with no date. If it can't be applied, leave the date blank and list the row in the report.
   - **Check dependencies.** If a row's date falls before the date of a step in its Depends On, don't move anything: flag it in the report and the row's Notes / Blocker. It means the template's timing needs fixing.
4. **Add one Project row** as a top-level row of the live plan, named by the [naming convention](../lumenis-sprint-intake/references/naming.md) (`<canonical name> — <short detail>`), then the template's rows under it with the same hierarchy. Copy every template column as is, except **Project**: it's an automatic column formula that reads the top-level row's name, so never write to it (a write is rejected). Don't nest Project rows under another row, or the formula picks up the wrong name. Set Status = Not Started, Done unchecked, Date Completed blank, Sprint = Backlog unless the user names a sprint. If the campaign came from the Backlog sheet, tick its Moved to Live Plan box and set Stage = On Live Plan after the read-back (the weekly [sprint cleanup](../lumenis-sprint-cleanup/SKILL.md) runs this copy when a Backlog row's Moves to Live date arrives).
5. **Fill Key Info** blanks you were given (KOL, host, date). Leave the rest as the template's fill-in prompts.
6. **Ask the librarian for the project folder.** Follow [lumenis-librarian](../lumenis-librarian/SKILL.md) to create `<campaign root>/<Project>/` with its `_Context/` folder, and put the folder path or link in the Project row's Key Info. If the shared folder isn't synced on this machine, skip this step and list it as open.
7. **Read back** the new rows: count matches the template, every Task row has an owner, every row with Days from Event has a due date, and any row due before its prerequisites is flagged.

## Output

A short report: project row link, rows added, the date range (first and last due date), rows left without a date and why, and whether the project folder was created.

## Stop and ask

- The template or live plan can't be found, or two candidates match.
- Live-plan columns are missing (step list above).
- The event date is unconfirmed. A tentative date can be used only if the user says so; mark the Project row "tentative date" in Notes.

## Mistakes to avoid

- Counting business days. The templates use calendar days.
- Moving dates to avoid weekends or holidays. Dates stay where the template puts them.
- Flattening the hierarchy. The daily brief and reports rely on Workstream and Task rows.
- Copying template Key Info prompts into the Notes column, or overwriting a teammate's edits in an existing project.
