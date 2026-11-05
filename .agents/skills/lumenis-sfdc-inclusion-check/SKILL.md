---
name: lumenis-sfdc-inclusion-check
description: Diagnose why a HubSpot contact isn't reaching Salesforce or a workflow step failed with "not a member of inclusion list". Read-only checks of the live inclusion-list gate (Goes to SF?, domain, competitor and patient exclusions, timing, Salesforce sync errors) that name the exact blocker and the fix to propose. Use for Vision or Aesthetics when a lead is stuck, missing in Salesforce, or a Salesforce campaign/task action errors.
---

# Salesforce inclusion-list check

Owner: marketing operations.
Status: draft procedure, 2026-11-03; subject-owner review required.

HubSpot only pushes a contact to Salesforce when it is on the connector's inclusion list. The error "not a member of inclusion list" doesn't say which rule failed. This skill finds that rule. Background, the current rule set and the central workflows are in the [inclusion list reference](../../../integrations/hubspot/salesforce-inclusion-list.md); read it first.

## Safety

This procedure is **read-only**. Do not change `Goes to SF?`, list filters, workflow settings or the connector setting while diagnosing. Setting `Sync` pushes the contact to Salesforce, which can create a lead, update Capture Date and send a rep notification; a patient, competitor or non-opted-in contact must not be pushed. Propose the fix and leave the change to someone authorized for it. Keep contact details, emails and counts in the external work folder, never in this repository or a pull request.

## Inputs

The contact (record ID or email) and, if there was one, the workflow and failed action. For a batch, the segment or export of stuck contacts.

## Procedure

Run the checks in order and stop at the first failure; that is the blocker. For a batch, tally contacts by first failing check.

1. **Confirm the live list.** Read Salesforce → Data sync → Contacts → *Limiting what syncs*. Note the segment name and ID. If it isn't 16272, re-read that segment's filters and use them instead of the table in the reference.
2. **Membership.** Open the contact → segment memberships, or read `/crm/v3/lists/records/0-1/<id>/memberships`. If the contact is now on the list, read the `Goes to SF?` history (check 4) before deciding why it failed. If the value was blank or `Not Sync` and later changed to `Sync` (for example by a bulk edit), the contact has since been fixed: report the original blocker from that history, and check whether the same source (form, import or workflow) still leaves new contacts off the list. Only if the value was already `Sync` when the action failed is it **timing** (check 8).
3. **Email.** No email, or `hs_email_domain` empty → the connector can't sync it. Blocker: missing email.
4. **`Goes to SF?` value** (`goes_to_sf_`), with property history:
   - Blank → note `hs_object_source_label`. `SALESFORCE` = a Salesforce-created record that never got the flag. `FORM`/`IMPORT` = the form or file lacked the hidden field/column; name the form (`hs_object_source_detail_1`) or import.
   - `Not Sync` → read history for who set it: a form (name it, and whether it sets `Not Sync` on purpose), an import, or a workflow. For a workflow, the history shows only an enrollment ID: open the contact's workflow activity and match the timestamp. The usual suspects are *Lumenis - Corporate - Patients - WF* (248636251), *B2C form + Sales Rep check box* (15584601), *Practice Locator Customer Update* (91163666) and the pop-up "equal No" workflow (33614448).
5. **Fixed domain rules.** Domain in the segment's fixed list (lumenis.com, pollogen.com, conference and fake-address domains) or email contains `@pmg.team`. Blocker: internal/agency/excluded domain.
6. **Distributor and competitor lists.** Member of 6072 (distributor domains) or 6073 (competitors, incl. nested 5704 and 6929). Name which rule matched: domain, "conference" in email, or company-name contains a competitor word. Flag when the match looks wrong (a consumer domain, or a practice whose name contains a competitor's).
7. **Patient rule.** Member of 16440 (*All patients (without OPP)*). Find which of the patient properties in 6075 holds "Patient" (see the reference for the 14 properties), and when/where it was set. A clinician with one stale patient answer is a false positive to flag.
8. **Timing.** If the contact is on the list now but the action failed, compare the action time with the `Goes to SF?` change and list-membership timestamps. A Salesforce action with no delay after setting `Sync` is the cause; the workflow needs a delay of about 5 minutes before Salesforce actions.
9. **On the list and still missing in Salesforce.** Check Salesforce → Data sync → Sync health for errors on that contact (picklist values, duplicates, permissions, custom code, property values).

## Report

For each contact or group: the first failing check, the evidence (property value and history source, matching rule or list), and the proposed fix with who must approve it. Typical fixes:

| Blocker | Proposed fix |
|---|---|
| Blank from Salesforce | Set `Sync` after confirming the person may be marketed to; propose a standing workflow for Salesforce-created contacts |
| Blank from form/import | Add the hidden field / import column; backfill the affected contacts after review |
| `Not Sync` from form | Confirm the form's intent; if wrong, change the hidden field and re-flag qualified contacts |
| Patients workflow / patient rule | Clear the stale patient property if the person is a clinician, then re-flag |
| Domain/competitor rule | Owner decides whether the rule is too broad; don't bypass it per contact |
| Timing | Re-run the Salesforce action; add a delay before Salesforce actions in the workflow |
| Sync health error | Fix the Salesforce-side value named in the error |

Don't treat the fix as done until the contact appears on the list and its Salesforce lead/contact ID is populated.

## Read-only data access

Use the HubSpot CLI (`hs api`) or an authorized browser session per [access and verification](../../../integrations/hubspot/access-and-verification.md). Useful reads: contact search on `goes_to_sf_` (values `Sync`, `Not Sync`, or not set) with `createdate` and `hs_object_source_label`; contact batch read with `propertiesWithHistory=goes_to_sf_` (50 records per call); `/crm/v3/lists/<id>?includeFilters=true`; `/crm/v3/lists/<id>/memberships`; `/automation/v4/flows/<id>` to read a workflow's trigger and actions. Search and batch-read are POSTs but read-only.
