# Vision purchase requisition form — field rules

- Division: Vision (US Vision Marketing). Do not apply these defaults to Aesthetics or Hospital requests.
- System and environment: Smartsheet form titled "New Purchase Requisition Request Form". The live link, cost center codes and tracking-sheet IDs are kept in the internal work system, not here.
- Workflow: raising a purchase requisition (PR) for event costs, physician payments and marketing vendors.
- Owner / proposed reviewer: Kaelyn Gray (Vision event marketing); maintainer review by @the-digital-nicholas-olsen.
- Status: draft
- Source and observed date: Kaelyn's working rules, plus the live form's field labels and dropdown values. Both were read on 2026-10-01, but nothing was submitted.

## Use this when

You need to fill out the PR request form for Vision Marketing spend. An AI may fill in the fields but must **stop before Submit** so the requester can review the form.

## Required inputs

What the money is for, the payee, the amount, how it will be paid (ACH or company card), the related event (if any), and any invoice or agreement.

## Field rules

| Field (as labeled on the form) | Rule |
|---|---|
| Business Area | `Vision`. The options seen were Aesthetic, Vision and Hospital. If the request is for an Aesthetics-only or Hospital item, flag it instead of switching on your own. |
| Short/Header Text * | See the formula below. |
| Material * | `LUMINARIES` when paying a physician. `WORKSHOPS` for Accelerate events only. `TRADE SHOW EXPENSES` for everything else. All three values were in the dropdown, which has 14 options. |
| Cost Center * | The US Vision Marketing cost center from the dropdown. The exact value is in the internal guide. |
| PGR * | The same value as Cost Center. On 2026-10-01 the PGR dropdown had the same 39 options as Cost Center. |
| Vendor # | Leave blank. |
| Vendor Name | For a physician: `Dr. <Last>`, or `Dr. <First> <Last>` if you know the first name. For ACH: the company named in the header text. For a company card: the card provider (name in the internal guide). |
| Amount * | Comes with each request. |
| Date * | The **first day of the related event**, not the invoice date. This applies to every PR. |
| Additional Comments | Optional. |
| File Upload | Attach the related invoice or agreement when there is one. |
| Send me a copy of my responses | Check the box and enter the **submitter's own** email. |

## Short/Header Text formula

```
Q<quarter><two-digit year><business-area letter> - <event or person> <what the money is for>
```

The business-area letter is `V` for Vision. The form's own help text also allows `A` and `H`. When a physician is named, write their full name with the title: `Dr. <First> <Last>`.

Fictional examples showing each pattern:

| Kind of spend | Example |
|---|---|
| Event cost | `Q426V - Example Eye Congress 2026 exhibitor fee` |
| Honorarium at an event | `Q326V - Accelerate Springfield Honorarium + T&E Dr. Gregory House` |
| Consultation / peer-to-peer | `Q126V - Dr. Jane Doe consultation with Dr. John Roe 1hr` |
| Treatments at a show | `Q126V - Example Expo booth treatments 4 hours Dr. Jane Doe` |
| Recurring vendor service | `Q126V - Example Agency marketing services - Jan` |
| Split payment | `Q226V - Example Congress booth build deposit 60%` / `(remainder)` |

## Where to look things up first

- **Event start dates:** the current year's Event Schedule sheet in the Vision Marketing Events Smartsheet workspace. If the event isn't there, check next year's sheet. For dates that matter, confirm against the society's public calendar.
- **Header text from earlier PRs:** the division's PR tracking sheet (internal), in its Header Text column.

## Avoid

- Using the invoice date as Date. Example: an invoice dated after the show still takes the show's first day.
- Using `WORKSHOPS` for anything that isn't an Accelerate.
- Writing a physician's last name only. Older PR records do this, but new PRs use the full name.
- Submitting the form without the requester's review. This form has been seen to clear itself after sitting open for a while, so check every field again right before submitting.

## Missing information / decisions

- Whether the exact cost center value, card provider name and form link can be published in this public repository. They are left out until Nicholas or the division owner decides.
- Older tracking data sometimes uses `A` for Aesthetics rows that relate to Vision and uses inconsistent dash spacing. These are known inconsistencies, not rules.
- Approval evidence and review date: blank until approved.
