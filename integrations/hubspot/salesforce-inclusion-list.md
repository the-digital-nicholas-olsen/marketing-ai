---
title: Salesforce inclusion list
summary: What decides whether a HubSpot contact can sync to Salesforce, how contacts get on the list, and why they fall off.
status: observed state, read live 2026-11-03; definitions change, so re-read before relying on them
owner: marketing operations
reviewed: 2026-11-03
---
# Salesforce inclusion list

The HubSpot–Salesforce connector only pushes a HubSpot contact to Salesforce if the contact is a member of one segment, the **inclusion list**. A contact outside it can still be updated *from* Salesforce, but HubSpot cannot create or update its Salesforce lead/contact, and any workflow step that touches Salesforce (Set Salesforce campaign, Create Salesforce task) fails with the only explanation HubSpot gives: **"not a member of inclusion list"**.

Use the [inclusion-list check skill](../../.agents/skills/lumenis-sfdc-inclusion-check/SKILL.md) to diagnose a specific stuck contact.

## Which list is live

Settings → Integrations → Connected apps → Salesforce → Data sync → Contacts → *Limiting what syncs*. Observed 2026-11-03: **Inclusion list for Salesforce - DO NOT DELETE!!! (2024)**, segment ID 16272, active.

Several similarly named segments are **not** the live gate and should not be used for diagnosis: *Inclusion list TEST June 2024* (16016), *Inclusion List - New 2020* (6074), *For sandbox - Inclusion List* (15912), *OLD - Sync to SF - inclusion list* (6046) and the static *Apr 19 - Inclusion List - SF Export* (1281). *OPS - Goes to SF is yes but not on the inclusion list* (15650) was built against an older definition; re-check its filters before trusting its count.

## The rule, in plain language

A contact is on the list when **all** of these are true (segment 16272, observed 2026-11-03):

| # | Condition | What it means |
|---|---|---|
| 1 | `Goes to SF?` (`goes_to_sf_`) is **Yes** | Internal value `Sync`. `No` is `Not Sync`. Blank fails this rule. This is the main switch. |
| 2 | Email domain is not one of lumenis.com, pollogen.com, americaconferences.org, eurosciconevents.org, dornier.com, conferencesamerica.org, jourrapide.com, rhyta.com, armyspy.com, teleworm.us, dayrep.com | Internal staff, conference spam and fake-address generators. |
| 3 | Email does not contain `@pmg.team` | Agency addresses. |
| 4 | Not in *Lumenis - Corporate - email domains of distributes (all divisions)* (6072) | A long list of distributor domains. **It also includes some shared consumer domains** (for example yandex.ru, op.pl), so anyone using those is blocked. |
| 5 | Not in *Lumenis - Corporate - email domains of competitors (all divisions)* (6073) | Competitor domains, **any email containing the word "conference"**, two named addresses, and the nested lists *Lumenis - corporate - Competitors* (5704) and *Vision - competitors* (6929). 6929 also matches on **company name contains** a competitor word (e.g. "Allergan"), which can catch a practice name. |
| 6 | Not in *Lumenis - Corporate - All patients (without OPP)* (16440) | Contacts in *All Patients* (6075) with no Salesforce opportunity stage. |

*All Patients* (6075) matches if **any** of 14 legacy properties says patient: `patient_physician`, `i_m_interesting_at` ("I'm a patient"), `urology_position`, `position`, `doctorpatient`, `patientprovider`, `are_you`, `co2`, `are_you_a_patient_or_doctor`, `are_you_a_patient_doctor_or_beautician`, `providerpatient`, `aesthetic_position`, `physician_or_working_with_physician`, `business_type` ("Patient / Consumer"), or two specific legacy forms. One stale "Patient" answer on any old form keeps a contact off the list until that value is cleared or an opportunity exists.

The connector also needs a valid email address; a contact without one never syncs regardless of the list.

## How `Goes to SF?` gets set

Nothing sets it automatically for every contact. It is written by whatever touched the contact:

- **Form hidden field.** About 1,970 forms use the property; most set it as a hidden field. A form without the hidden field leaves it blank. Some forms deliberately set `Not Sync` (Japan forms, several lumenis.com brochure/info-kit forms, find-a-practice).
- **Import column.** Lead uploads set it from the file. Imports without the column leave it blank.
- **Campaign workflows.** Webinar, event and contact-a-rep workflows set `Sync`, wait ~5 minutes, then set the Salesforce campaign. That delay matters: segment membership is not instant, and a Salesforce action that runs right after the property changes can fail with "not a member of inclusion list".
- **Central corporate workflows** (all published, observed 2026-11-03):

| Workflow | ID | Effect |
|---|---|---|
| Lumenis - Corporate - Goes to SF for pop up forms - goes to SF equal Yes | 20448426 | Six pop-up forms → `Sync` after 2 min |
| Lumenis - Corporate - Goes to SF for pop up forms - goes to SF equal No | 33614448 | One pop-up form → `Not Sync` |
| Lumenis - Corporate - Goes to SF is unknown - Original source data 1 = INTEGRATIONS_PLATFORM | 21239736 | Integration-created contacts → `Sync` after 60 min. Covers integrations only; nothing similar covers forms, imports or Salesforce-created records. |
| B2C form + Sales Rep check box | 15584601 | Two B2C forms: Physician → `Sync`, otherwise `Not Sync` |
| Lumenis - Corporate - Patients - WF | 248636251 | Anyone entering *All Patients* without an opportunity → `Not Sync`, lifecycle Other, patient_physician Patient. **Overrides a `Sync` that a form just set.** |
| Practice Locator Customer Update | 91163666 | Practice-locator lists → lifecycle Customer and `Not Sync` |

## Why contacts end up off the list

In the order they are most often the cause:

1. **`Goes to SF?` is blank on records that came from Salesforce.** Salesforce-created contacts arrive without the property, so they are never on the list. HubSpot can't push updates or Salesforce campaign membership back to them. This is the usual cause when an existing Salesforce contact fails a Salesforce campaign step.
2. **`Not Sync` was stamped and nothing ever reverses it.** Property history shows `Not Sync` from a form or import is almost never changed back to `Sync` afterwards. Once a contact is `Not Sync`, only a workflow or manual edit that explicitly sets `Sync` can bring it back.
3. **A form or import didn't include the hidden field**, leaving it blank.
4. **The patient rule** — either the Patients workflow flips `Sync` to `Not Sync`, or the contact is in *All patients (without OPP)* while `Sync` (both block).
5. **Domain or competitor rules** — internal/agency/conference addresses, distributor and competitor domains, shared consumer domains on the distributor list, or "conference" in the address.
6. **Timing** — a Salesforce action ran before segment membership updated. Retrying later succeeds.
7. **No email** — the connector can't sync it at all.

Being on the list doesn't guarantee a sync. Salesforce-side errors (picklist values, duplicates, permissions, custom code) appear under Salesforce → Data sync → Sync health.

## Open questions for the owner

- Should Salesforce-created contacts get `Goes to SF? = Sync` automatically, the same way workflow 21239736 does for integrations?
- Should consumer domains (yandex.ru, op.pl and similar) be removed from the distributor-domain list?
- Is "email contains conference" and "company contains competitor word" intended, or too broad?
- Should the legacy patient properties be retired, or the Patients workflow restricted, so one old answer doesn't permanently block a clinician?
- Can the unused inclusion-list copies (16016, 6074, 15912, 6046, 1281) be archived to avoid confusion?
