---
name: lumenis-webinar-reporting
description: Webinar numbers and data hygiene for a Lumenis ON24 webinar - registrant updates to the sales team before the show, the night-of country fix before the HubSpot workflow runs, the morning-after report to RSMs, and the HubSpot-to-Salesforce sync check. Use when a registrant update, post-show report or lead check is due; drafts and prepares, a person sends and imports.
---

# Webinar reporting

Owner: marketing operations (EJ for Vision).
Status: draft procedure, written 2026-10-27 from the Vision webinar playbook session. Not yet run by an agent. Review required.

Sales leaders want to know who's signed up, and reps want their leads the morning after. In between, one known data gap has to be fixed the same night or leads route badly. This skill covers all four jobs.

## Inputs

- The campaign's Smartsheet rows: ON24 event ID, HubSpot campaign, Registered and Attended segments, Salesforce campaign, live date and time, and the workflow's run time.
- Logged-in ON24, HubSpot and Salesforce sessions in the person's browser, or the connectors that cover them. Never enter credentials.
- Recipients for updates (RSMs, the division sales leader), from the campaign record.

## 1. Registrant updates (T-14, T-7, T-2)

1. Read the **Registered** segment in HubSpot: total count and the contacts. Counts can lag ON24 by a few hours; say "as of <time>".
2. Group by state, or by RSM territory if the team keeps a territory mapping in Smartsheet. Don't build a territory mapping from memory.
3. Draft a short email: the count, the change since the last update, a few names per territory with practice name, and the registration link (sales tracking link) to keep sharing.
4. Save it as a draft for the owner to send. Contact lists go only to internal Lumenis recipients.

## 2. Night-of country fix (T-0, after the show, before the workflow runs)

ON24 doesn't pass country to HubSpot (a known integration gap), and leads without a country don't route correctly in Salesforce. The registration workflow runs overnight (around 2-3 AM PT for Vision), so this has to be done the same night.

1. Export the ON24 registrant and attendee lists for the event. Exports and the import file contain contact data: keep them in the project folder, delete working copies after the import, and never put them in this repository.
2. **Merge and deduplicate** the two exports into one row per contact, keyed on email (lowercased, trimmed). If the two exports disagree about a contact's state, province or postal code, the contact goes on the exceptions list.
3. **Check HubSpot first.** Look up each contact's current Country. Only contacts whose Country is **blank** go into the import file. A populated Country is left alone, even if it looks wrong; a populated value that conflicts with the ON24 location goes on the exceptions list for the owner.
4. **Set the country** for the blank ones: **United States** when the state is a US state and the postal code is a 5-digit ZIP (or ZIP+4); **Canada** when the province is a Canadian province and the postal code is letter-digit-letter. State and postal code must agree. Anything else (missing, mismatched or another country) goes on the exceptions list, not into the file.
5. The import file holds email and country only, one row per contact, with a count line in the hand-off: contacts exported, deduplicated, already had a country, set to US, set to Canada, exceptions.
6. Hand the file and the exceptions to the owner. **The owner runs the HubSpot import** (update existing contacts, match on email). An import changes live records, so the agent never runs it.
7. After the import, spot-check five imported contacts and two that already had a country (unchanged), and confirm it's done before the workflow time.

## 3. Post-show report (T+1, first thing in the morning)

1. From ON24: total registrants, live attendees, attendance rate, average minutes watched, the engagement report, CTA clicks and who clicked.
2. From HubSpot: the Attended segment count (cross-check against ON24).
3. Draft an upbeat email to the RSMs: the headline numbers, the CTA clickers (they're the warmest leads) and the most-asked Q&A topics. State lead delivery and the on-demand recording as **confirmed**, **pending** or **blocked**, based on what you checked (the workflow ran and leads reached Salesforce; the recording is live in ON24). Never promise either before it's true.
4. Save it as a draft; the owner sends. Save the numbers in the project folder, not in Git.

## 4. Sync check (T+1)

Reconcile contact by contact, not by segment counts: an attendee is in both HubSpot segments, while in Salesforce their status has moved on to Attended.

1. **Expected status per contact,** by precedence: in the Attended segment → **Attended**; in the Registered segment only → **Registered**. Confirm this precedence matches the workflow's branches before relying on it; if the workflow differs, use the workflow's rule.
2. **Compare** each contact's expected status with their Salesforce campaign member status.
3. **Report** three lists: missing from the Salesforce campaign, wrong status, and in Salesforce but not in either segment. Counts that match aren't proof; the lists are.

Small gaps usually mean a contact failed a routing rule. Give the lists to marketing operations rather than fixing records by hand.

## Stop and ask

- The ON24 export or a HubSpot segment can't be reached.
- More than a handful of country exceptions (it may mean a form field changed).
- The import isn't done before the workflow time: tell the owner, who decides whether to pause the workflow.
