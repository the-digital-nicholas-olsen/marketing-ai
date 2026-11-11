# Vision purchase requisition form — field rules

- Division: Vision (US Vision Marketing). Do not apply these defaults to Aesthetics or Hospital requests.
- System and environment: two Smartsheet forms. The **2027 - PR Entry Form** is for 2027 spend. The older **New Purchase Requisition Request Form** is still used for remaining 2026 spend. The live links, cost center codes and tracking-sheet IDs are kept in the internal work system, not here.
- Workflow: raising a purchase requisition (PR) for event costs, physician payments and marketing vendors.
- Subject owner: Kaelyn Gray (Vision event marketing); maintainer review by @the-digital-nicholas-olsen.
- Status: reviewed Vision workflow guidance. The Accelerate write-back in [Right after you submit](#right-after-you-submit) was added 2026-11-06 from a completed Accelerate per-KOL PR run and is draft until the subject owner reviews it. The 2027 form rules were added 2026-11-11 from a completed trade show run (three PRs submitted with the requester's approval) and the subject owner's answers on that date.
- Source and observed date: Kaelyn's working rules, plus the live forms' field labels and dropdown values. The 2026 form was read on 2026-10-01 and its required `Date` field rechecked on 2026-10-05; the live form labels the field `Date`, not event start date, and does not define which date to use. The 2027 form was read and used on 2026-11-11. The field defaults below are Vision workflow rules, distinct from form-enforced requirements. Restricted confirmation evidence remains in the internal work system.

## Use this when

You need to fill out the PR request form for Vision Marketing spend. An AI may fill in the fields but must **stop before Submit** so the requester can review the form.

## Which form to use

Pick by when the event or purchase happens. Both links are in the internal guide. Check the event dates first, and if the year is unclear, ask instead of guessing.

- **2027 spend:** the 2027 - PR Entry Form. See [2027 form field rules](#2027-form-field-rules).
- **Remaining 2026 spend:** the New Purchase Requisition Request Form. See [2026 form field rules](#2026-form-field-rules).

The two forms have different fields. Read the live form's labels before filling it, and if they don't match the table for that form, stop and tell the requester.

## Required inputs

What the money is for, the payee, the amount, how it will be paid (ACH or company card), the related event (if any), the applicable date, and any invoice or agreement.

The forms support both event and non-event purchases. Use the internal guide for the live form links and approved US Vision Marketing cost center; those are shared team prerequisites, not personal credentials. If a required value or applicable date is missing, ask the requester or procurement owner before completing that field.

## Rules for both forms

- **Business area:** Vision. If the request is for an Aesthetics-only or Hospital item, flag it instead of switching on your own.
- **Category / Material:** `LUMINARIES` when paying a physician. `WORKSHOPS` for Accelerate events only. `TRADE SHOW EXPENSES` for trade show spending. For other non-event spending, check the internal PR tracking sheets for similar past requests from the same vendor or for the same kind of spending, and use their category. If there is no clear match, confirm with the requester or procurement owner.
- **Cost center:** always the US Vision Marketing cost center from the internal guide, unless otherwise specified.
- **Vendor:** for physician payments by ACH, `Dr. <First> <Last>`; obtain the full name if missing. For other ACH payments, the company being paid. For company-card payments, the card provider from the internal guide. Physicians are normally not paid by company card; if one is, use that same company-card provider. Do not use a personal card or account by default.
- **Applicable date:** for event-related spending, the **first day of the related event** under the Vision rule. For non-event spending, the date confirmed by the requester or procurement owner; do not invent an event or automatically substitute the invoice or submission date.
- **Quarter:** the calendar quarter of the applicable date. For example, an event starting Apr 14, 2027 is `Q227`.
- **Attachments:** attach the related invoice or agreement when there is one.

## 2027 form field rules

The 2027 - PR Entry Form feeds the **2027 - PR Entry Tracker**. Each submission gets a confirmation number such as `PR-00032-2027` there. Most fields are searchable dropdowns: type to filter, then pick the option. Some dropdowns also offer `Add "<text>"` for a value that isn't listed.

| Field (as labeled on the form) | Rule |
|---|---|
| Quarter * | The quarter of the applicable date, such as `Q227`. Options seen on 2026-11-11: `Q127` through `Q428`. |
| BusArea * | `VIS`. Options seen: `AES`, `VIS`, `HOS`. |
| Vendor | Pick the vendor from the dropdown; options show the SAP vendor number and name, such as `<number> <Vendor>`. For a company-card payment, pick the card provider. If the vendor isn't listed (for example a physician without a vendor number yet), type the name using the vendor rule above and use the form's `Add` option. |
| PGR/Cost Center | The US Vision Marketing option. Options are prefixed with the business area, such as `VIS - <code> - US Vision Marketing - ...`. |
| PR Description * | `<event, person or vendor> <what the money is for>`, **without** the quarter code; the tracker adds it. 40 characters or fewer. See [PR Description](#2027-pr-description). |
| Category | Use the category rule above. |
| Event | Pick the event if it's listed. If it isn't (Vision Source Exchange wasn't, on 2026-11-11), type the event's full name and use the form's `Add` option. Leave blank for non-event spending. |
| Valuation Price * | The amount, as a plain number with no `$` or commas, such as `25000`. |
| Invoice# | The invoice number, if there is one. |
| PR Submitter * | The **submitter's own** email. The confirmation email goes here. |
| PR Submitter 2 | Optional second email to copy on the confirmation. |
| Additional Details | For event spending, the event name, city, dates and applicable date, plus how it will be paid. Example: `Example Eye Congress 2027, Springfield, Apr 14-17, 2027. Event date 4/14/2027. Paid via company card.` Note any related earlier PR here, such as an addition to an existing PR. |
| File Upload | Attach the related invoice or agreement when there is one. |

### 2027 PR Description

The tracker's `Header Data` column builds the header text as `<Quarter><BusArea> - <PR Description>`, for example `Q227VIS - Example Eye Congress 2027 Booth Build`. So do not start PR Description with a quarter code. If you do, the header shows it twice, as in `Q227VIS - Q227V - ...`.

When a physician is named, write their full name with the title: `Dr. <First> <Last>`.

| Kind of spend | PR Description example |
|---|---|
| Event cost | `Example Eye Congress 2027 exhibitor fee` |
| Booth build | `Example Eye Congress 2027 Booth Build <vendor>` |
| Show services | `Example Eye Congress 2027 Show Services` |
| Honorarium at an event | `Accelerate Springfield Honorarium + T&E Dr. Gregory House` |
| Split payment | `Example Congress booth build deposit 60%` / `(remainder)` |

Keep within 40 characters. If a description won't fit, shorten the event name (for example `VSX` for Vision Source Exchange) before dropping what the money is for.

### Filling the 2027 form safely

- Set text and email fields through the page's element references or form-input tools, not by screen coordinates.
- Dropdowns open over the fields below them and move as you scroll. After typing to filter, select the option by its element reference, then confirm the field shows the chosen value.
- Before Submit, read back every field. The dropdown values show in the page text; text fields are best checked by their input values.
- Stop and hand the form to the requester. Click Submit only if the requester has reviewed the values and asks you to.
- After Submit, the page shows `Success! We've captured your response.` One submission is one PR. For several PRs, reload the form and start each one clean.
- Check the 2027 - PR Entry Tracker afterwards: each PR should appear once, with its confirmation number. If one appears twice, tell the requester. Do not edit the tracker.

## 2026 form field rules

| Field (as labeled on the form) | Rule |
|---|---|
| Business Area | `Vision`. The options seen were Aesthetic, Vision and Hospital. |
| Short/Header Text * | See the [2026 header text formula](#2026-header-text-formula). |
| Material * | Use the category rule above. All three named values were observed in the dropdown on 2026-10-01. |
| Cost Center * | The US Vision Marketing cost center. |
| PGR * | Always match Cost Center, unless otherwise specified. On 2026-10-01 the PGR dropdown had the same 39 options as Cost Center. |
| Vendor # | Always leave blank, unless otherwise specified. |
| Vendor Name | Use the vendor rule above. For other ACH payments, the company named in the header text. |
| Amount * | Comes with each request. |
| Date * | Required for every request. Use the applicable date rule above. |
| Additional Comments | Optional. |
| File Upload | Attach the related invoice or agreement when there is one. |
| Send me a copy of my responses | Check the box and enter the **submitter's own** email. Fill this first. See [Filling the 2026 form safely](#filling-the-2026-form-safely). |

### Filling the 2026 form safely

The "Send me a copy of my responses" checkbox sits directly above Submit. An AI clicking by screen position has aimed at the checkbox and hit Submit after the page shifted. The PR went in before the requester reviewed it, and no copy email was sent.

- Fill the copy checkbox and email field first, before the other fields.
- Below File Upload, set every field through the page's element references or form-input tools, never by screen coordinates.
- Take a fresh screenshot before any click by coordinates. Closing dropdowns and fields that grow move the page.
- When done, check that the box is ticked and the email is correct. Then stop and hand the form to the requester. Click Submit only if the requester has reviewed the form and asks you to.
- If a success banner or a blank form appears unexpectedly, the PR went in. Stop and tell the requester. Do not refill the form.

### 2026 header text formula

```
Q<quarter><two-digit year><business-area letter> - <event, person or vendor> <what the money is for>
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

## Accelerate requests

Two kinds:

- **Quarterly lump sum:** at the start of each quarter that has a Vision Accelerate, one PR for Vision's share of that quarter's event costs, as split by marketing leadership, category `WORKSHOPS`. The amount comes from the approved budget, never from a past PR.
- **Per KOL:** raised only after the KOL accepts, category `LUMINARIES`, amount = honorarium + travel and expense allowance from the show record, description as in the honorarium examples above.

Both kinds get the Master Budget and budget tracker write-back in [Right after you submit](#right-after-you-submit).

## Where to look things up first

- **Event start dates:** the current year's Event Schedule sheet in the Vision Marketing Events Smartsheet workspace. If the event isn't there, check next year's sheet. For dates that matter, confirm against the society's public calendar.
- **Non-event categories:** look for similar past requests in the internal PR tracking sheets, matching the vendor or kind of spending. If the precedent is unclear, ask the requester or procurement owner.
- **Descriptions and vendors from earlier PRs:** the division's two PR tracking sheets (internal), the 2026 VIS PR tracking sheet and the 2027 - PR Entry Tracker. Check both: last year's PRs for the same show are usually the best guide to vendor, category and amount. The column is `Header Text` on the 2026 sheet; on the 2027 tracker, use `PR Description` (and `Header Data` for the full header). The 2027 tracker also holds other business areas, so filter to `VIS`.

## Right after you submit

This applies to trade show PRs and Accelerate PRs (per KOL and quarterly lump sum). The requester does this, or an AI once the requester confirms the form went in.

- **Confirmation:** the form shows a success banner and clears. On the 2027 form, a confirmation email goes to the PR Submitter address, and the PR appears on the 2027 - PR Entry Tracker with a confirmation number. On the 2026 form, a copy goes to the submitter's email if that box was checked. A blank form after the banner means the PR went in, so do not refill and resubmit. That would create a duplicate.
- **Master Budget:** add `PR In` to the PR/PO column (titled `PR/PO`, `PR / PO #` or `PR/PO Number`, not Notes) of the matching line item on the show's Master Budget. Change only that cell.
  - **Where it is:** a trade show's Master Budget is in that show's folder. An Accelerate's is in the **Accelerate Marketing Events** workspace, in that year's Accelerates folder, in the show's own folder.
  - **Per-KOL Accelerate PRs:** the Master Budget usually lists each KOL twice, once for the honorarium and once for T&E, and one PR covers both. Add `PR In` to both rows. Their budgets should add up to the PR amount; if they don't, ask before marking either.
  - **Quarterly lump sum:** mark the line item or items the lump sum pays for. If that isn't clear from the Master Budget, ask.
  - Fill an existing row only, and never add one. If no row clearly matches, or the show has no Master Budget, ask.
  - If the cell already says `PR In`, leave it. If it already has a PO, do not overwrite it. Tell the requester instead.
- **Vision budget tracker:** add a `PR` row under the show's budget line on the tracker for the show's fiscal year, even if the show has no Master Budget. FY26 shows go on the FY26 tracker in the Budget Dashboard folder; FY27 shows go on the FY27 tracker in the Budget Dashboard 2027 folder. Accelerates go under that show's `VIS-WS` Accelerate line; a trade show under its `VIS-TS` line. Add one row per PR, so a per-KOL PR is one row even though it marks two Master Budget lines. If the PR belongs to a category but no specific line, put it under that category's `Unassigned` line. If the line or category is unclear, ask. Leave the formula columns alone. Totals roll up by the `Budget Line` value, so set it on every PR row.

| Column | Value |
|---|---|
| Budget Item | 2026 form: the Short/Header Text, as written. 2027 form: `Q<quarter><two-digit year>V - <PR Description>`, such as `Q227V - Example Eye Congress 2027 Show Services`. |
| Row Type | `PR` |
| Budget Line | The show's budget line on that year's tracker. Both years use the same Budget Line codes. |
| SAP Category | The form's Material or Category, such as `LUMINARIES` or `WORKSHOPS` |
| Event Quarter | The quarter, such as `Q227` |
| PR Status | `PR Entered, Pending Approval` |
| _PR Amount | The form's Amount or Valuation Price |
| PR# / PO# | Leave blank. The next PR check fills them in. |
| Notes | 2027 form: `Submitted via PR form <date> as <confirmation number>; SAP PR# pending.` |

Read both back after writing: the Master Budget cells show `PR In`, and the new tracker row shows the PR amount in `Committed` on its budget line.

Do not change the PR tracking sheets, including the 2027 - PR Entry Tracker. They are read-only.

## Avoid

- Automatically using the invoice date for event spending. Under the Vision rule, an invoice dated after the show still takes the show's first day.
- Requiring an event for a non-event purchase, guessing its date, or categorizing all non-event spending as trade show expenses.
- Using `WORKSHOPS` for anything that isn't an Accelerate.
- Writing a physician's last name only. Older PR records do this, but new PRs use the full name.
- Starting a 2027 PR Description with a quarter code.
- Clicking near Submit by screen coordinates.
- Submitting the form without the requester's review. Forms have been seen to clear themselves after sitting open for a while, so check every field again right before submitting.
- Skipping the Master Budget and budget tracker write-back for an Accelerate PR, or marking only the honorarium row when one PR covers honorarium and T&E.

## Maintenance and review

- Keep the exact cost center value, card provider name, vendor numbers and form links in the internal guide. Publishing them is not required to use this procedure.
- Older tracking data sometimes uses `A` for Aesthetics rows that relate to Vision and uses inconsistent dash spacing. Some 2027 tracker rows submitted before 2026-11-11 have the quarter code twice in `Header Data`. These are known inconsistencies, not rules.
- Workflow review date: 2026-11-11. Confirmation evidence and exact internal values stay in the internal work system. Revalidate live form values before use.
