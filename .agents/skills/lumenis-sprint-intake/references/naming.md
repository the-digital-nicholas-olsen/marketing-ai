# Naming convention: one name per project

Status: approved 2026-11-11 by Nicholas and applied to the live Vision sprint plan. Vision only.

## The rule

Every project has **one canonical name**, used the same way everywhere:

| Place | How the name is used |
|---|---|
| Smartsheet Project row (Task cell) | `<canonical name>`, optionally followed by ` — <short detail>` (space, em dash, space) |
| Smartsheet Project column | Automatic. A column formula copies the canonical name (the text before ` — `) from the top-level row onto every row. Never type in it. |
| OneDrive folder | Exactly the canonical name. A project may sit inside a series folder (`Accelerate 2026/`, `Webinars 2026/`, `AI Week 2026/`) |
| HubSpot and Salesforce campaigns | **Not renamed.** They keep their own convention (`VIS-US-<campaign>-<Qn YYYY>`, see `node scripts/name.mjs`). Their exact names go in the Project row's **CRM Campaign Name** column: `Salesforce: <name> \| HubSpot: <name>`, or `None` |

So anyone holding one of these can find the others: the Project column and folder match exactly, and the CRM column points to the campaigns.

## Pattern

`<Type> - <Topic> - <Date>`

- **Type:** one from the list below. Don't invent a new one without adding it here.
- **Topic:** the place, KOL or subject people actually say. Use the field's own name for the event and record other names in Key Info.
- **Date:**
  - one-off events: the (first) day, `Mon D YYYY`, e.g. `Dec 6 2026`
  - annual shows and quarterly series: the year, e.g. `2026`
  - ongoing work: the year or year range, e.g. `2026-2027`

Use plain hyphens with spaces (` - `) inside the name. No colons, slashes or other characters OneDrive rejects (`: / \ * ? " < > |`). Write `60-60-60`, not `60/60/60`.

## Types

| Type | Use for | Example |
|---|---|---|
| Accelerate | Accelerate shows. Keep the quarter in the topic so it matches the Smartsheet event folders | `Accelerate - Q2 Denver - 2026` |
| Webinar | Webinars | `Webinar - Dr. Rivera OptiLIFT - Dec 10 2026` |
| Trade Show | Shows we exhibit at | `Trade Show - Vision Expo - 2027` |
| Rep Event | Rep-led events: clinical days, demo days, dinners, lunch-and-learns | `Rep Event - Denver Clinical Day - Dec 6 2026` |
| Sponsored Session | Breakfasts, lunches, CE courses or talks we sponsor inside someone else's event | `Sponsored Session - Expo Breakfast - Mar 11 2027` |
| Campaign | Marketing campaigns with no single event | `Campaign - Spring Push - 2027` |
| Content | Case studies, videos, decks, brochures, presentations | `Content - OptiLIFT Case Book - 2027` |
| KOL | A KOL relationship or program | `KOL - Dr. Patel - 2027` |
| Ops | Systems, agents, processes, reporting | `Ops - Nurture Campaigns - 2026-2027` |

"Rep Event" is the one name for every rep-led event and dinner. The topic carries what the rep calls it.

## When names differ

- **New projects:** name them by this convention when they're created.
- **Renaming a project:** change the Project row's Task text (the Project column follows automatically) and rename the OneDrive folder the same day. Update any paths in Key Info. Put the old name in Key Info so searches still find it.
- **Keep a folder name** only when renaming would break something live, such as a page published from that folder or an agent that reads its path. Then link the folder in Deliverable Link and say why in Key Info.
- **Working names** ("Operation Spring Push") are fine until a public name is chosen.
