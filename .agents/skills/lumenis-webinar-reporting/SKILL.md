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
2. Build an import file with email and country only. Set **United States** or **Canada** from the state or province and postal code (US ZIP: 5 digits; Canadian postal code: letter-digit-letter). Anything else, or unclear rows, goes on an exceptions list, not into the file.
3. Hand the file and the exceptions to the owner. **The owner runs the HubSpot import** (update existing contacts, match on email). An import changes live records, so the agent never runs it.
4. After the import, spot-check five contacts for the country value and confirm it's done before the workflow time.

## 3. Post-show report (T+1, first thing in the morning)

1. From ON24: total registrants, live attendees, attendance rate, average minutes watched, the engagement report, CTA clicks and who clicked.
2. From HubSpot: the Attended segment count (cross-check against ON24).
3. Draft an upbeat email to the RSMs: the headline numbers, the CTA clickers (they're the warmest leads), the most-asked Q&A topics, a note that attendee leads are being sent to them now, and that the recording goes on demand this week.
4. Save it as a draft; the owner sends. Save the numbers in the project folder, not in Git.

## 4. Sync check (T+1)

Compare HubSpot with Salesforce: Registered and Attended segment counts against the Salesforce campaign's members by status. List any contact in HubSpot but missing from Salesforce, or with the wrong status. Small gaps usually mean a contact failed a routing rule; give the list to marketing operations rather than fixing records by hand.

## Stop and ask

- The ON24 export or a HubSpot segment can't be reached.
- More than a handful of country exceptions (it may mean a form field changed).
- The import isn't done before the workflow time: tell the owner, who decides whether to pause the workflow.
