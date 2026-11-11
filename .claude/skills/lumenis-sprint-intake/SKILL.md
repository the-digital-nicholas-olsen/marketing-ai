---
name: lumenis-sprint-intake
description: Vision only. The front door for adding work. Turns a meeting transcript, notes, an email or a plain request ("add a task for Ted", "we're starting a new campaign") into correct sprint plan rows in Smartsheet, with the project's context saved in its OneDrive folder and one name used across Smartsheet, OneDrive, HubSpot and Salesforce. Asks short questions to fill gaps before writing. Use when anyone wants to add tasks, projects or campaigns to the sprint plan, process a meeting into tasks, or asks "where does this go?"
---

# Sprint intake

Owner: Nicholas (marketing operations).
Scope: **Vision Marketing (US) only.** Listed in the [Vision Smartsheet procedures](../../../divisions/vision/smartsheet/README.md). For Aesthetics work, say this skill doesn't apply and stop.
Status: approved 2026-11-11 after a first run on three meeting transcripts; the naming convention was applied to the live plan the same day.

The team can also reach this skill from the request box on the [daily brief](../lumenis-daily-brief/SKILL.md) page: the request text comes in as the source, and everything below applies.

Everyone on the team adds work through Claude. This skill makes sure that work lands the same way no matter who adds it, so anyone can pick up a task they didn't write and understand it.

## The test every item must pass

A teammate opens a row they didn't write and asks Claude "what is this?". Claude must be able to answer from three places only:

1. **The row:** the task written as the finished state, owner, due date, and dated notes.
2. **The Project row:** Key Info says what the project is, why it exists, who it's for, the key date, and where its files and context live.
3. **The project's `_Context/` folder in OneDrive:** the notes behind the decisions.

If the answer would need someone's memory, the item isn't ready. Ask, or write the missing context.

## Where things go

| Kind | Home |
|---|---|
| Work: task, owner, due date, status, short dated notes | Smartsheet sprint plan |
| Why: what was said, decisions, details, opinions | `<Campaign root>/<Project name>/_Context/` in OneDrive |
| People (KOLs, partners) | `Librarian/Library/People/` |
| How the team works | `Librarian/Library/Team-and-Process/` |
| Reusable methods for any campaign | This repository, by pull request only |

Project details, names of customers and internal IDs never go into this repository. It's public.

## Prerequisites

- The librarian's local config, `Librarian/AGENTS.md` in the team's shared folder. It names the campaign root, the live sprint plan sheet and the Backlog sheet. If it's missing, stop and say so.
- The Smartsheet connector with edit access to the live plan. Without it, produce the rows as a table and say nothing was written.
- HubSpot or Salesforce access is optional. Without it, ask the person for the campaign name or leave it as an open item.

## Procedure

### 1. Read everything first

Read the whole source before writing anything. For a transcript, drop small talk, gossip and personal matters (see the [librarian's rules](../lumenis-librarian/SKILL.md#remove-before-writing)). Correct names against `Library/People/` and the spelling list in the local config.

### 2. List the items

Pull out every item and sort it into one kind:

| Kind | What happens |
|---|---|
| New task on an existing project | Add a row under that project |
| Change to an existing task (done, new date, new owner, blocked) | Update that row; append a dated note |
| New project | Add a Project row and its tasks, create the folder |
| Context only (a decision, a fact, someone's view) | Write it to the project's `_Context/` and add a line to the Project row's notes if it changes the plan |
| Someone else's work we're waiting on | A task owned by the team member who chases it, Status **Waiting on Someone**, note "Waiting on <name>" |
| Not work | Leave it out |

Show the person the list before writing when there are more than a handful of items or any new project. One short table: item, kind, project, owner, date.

### 3. Find before you create

For every item, look for an existing home before making a new one:

1. **Sprint plan:** search the Project rows, Key Info (it holds older names) and the CRM Campaign Name column.
2. **Backlog sheet:** the campaign may be planned there already.
3. **OneDrive campaign root:** look for the folder, including near-matches (other year, abbreviation, old name).
4. **HubSpot / Salesforce:** if the work involves a campaign, search for it by name variants.
5. **Open tasks:** don't add a task that already exists with different wording. Update the existing one instead.

Create a new project only when the work has its own goal, an owner and more than one or two steps. One-off tasks go under the closest existing project. When two candidates fit, ask.

### 4. Ask what's missing

Ask only what the source doesn't answer, in one batch, with a proposed answer for each so the person can just say yes. Don't ask about things with a sensible default.

For **every task:**
- Who owns it? (Must be a team member in the Owner list. Outside people go in the notes.)
- When is it due? (If no date was said, propose one from the project's next milestone, and say it's a proposal.)
- What does it depend on?

For a **new project**, also:
- What is it in one sentence, and what does "done" look like?
- Is there an event date or deadline? Is it tentative?
- Who asked for it, and who is it for (audience, division)?
- Is it a campaign type with a template (webinar, Accelerate, trade show)? If so, hand over to [sprint plan setup](../lumenis-sprint-plan-setup/SKILL.md) for the rows.
- Will it have a HubSpot or Salesforce campaign? What is it called, or should we name it now?

When a request is vague ("we should do something with Dr. X"), help the person sharpen it before anything is written: what's the outcome, by when, and what's the first concrete step. A vague idea with no owner or date goes to the Backlog, not the live plan.

### 5. Name it

Follow the [naming convention](references/naming.md). The name chosen here is the Project row's title and the OneDrive folder's name; the Project column fills itself in. HubSpot and Salesforce campaigns keep their own names: write them in the Project row's **CRM Campaign Name** column (search for them; if you can't, write "To look up").

### 6. Write the rows

Follow the sheet's conventions:
- **Task text** is the finished state: "Ted has packaged the implementation assets into one kit." Not "Package assets".
- **Owner** from the Owner list only. Outside owners: see step 2.
- **Due Date** is when it's due, not when to start. Check the local config for team days off before setting a date on someone's day off.
- **Sprint** is the Monday of the due week. No date means Backlog.
- **Step ID** short and unique within the project (`MV1`, `MV2`). **Depends On** uses those IDs.
- **Notes / Blocker** are dated lines: `11/11 Nicholas: …`. Always add to the existing notes; never replace them. Read the cell first.
- **Project row:** a top-level row titled `<canonical name> — <short detail>`. Key Info answers the "what is this?" test and gives the context note's path. Deliverable Link holds the OneDrive folder link. CRM Campaign Name holds the HubSpot and Salesforce names, or "None".
- **Project column:** automatic (a column formula). Never write to it; a write is rejected and the whole call fails.
- Add tasks as the last children of their Project row. Add one parent's rows per call.

### 7. Save the context

Write a note in `<Project>/_Context/` using the [librarian's note template](../lumenis-librarian/SKILL.md#note-template), file name `YYYY-MM-DD-short-topic.md`. Keep decisions, action items, key details and open questions. When a meeting covers several projects, write one note per project, or one main note plus short pointer notes. New people go in `Library/People/`. Never overwrite a file.

For a new project, create the folder with the [librarian](../lumenis-librarian/SKILL.md#create-a-project-folder-on-request) (correct subfolders for its type).

### 8. Read back and report

Read the new and changed rows back from Smartsheet. Then report in chat:
1. Rows added and changed, grouped by project.
2. New projects and folders, with links.
3. Every assumption you made (proposed dates, inferred owners), so the person can correct them.
4. Items left out and why.
5. Naming mismatches found along the way.

## Mistakes to avoid

- Creating a project for a one-off task, or a second project for something that exists under another name.
- Replacing a Notes cell instead of adding to it.
- Writing a task only the author understands ("follow up re: the thing").
- Putting the why in Smartsheet. One short note line there; the full story goes in `_Context/`.
- Making up due dates without saying so.
- Renaming a live HubSpot or Salesforce campaign to match. It breaks reporting.
- Typing in the Project column, or nesting a Project row under another row.
