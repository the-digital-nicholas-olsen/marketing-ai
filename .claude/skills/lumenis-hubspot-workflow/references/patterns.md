---
title: HubSpot workflow patterns
summary: Recorded patterns (form conversion, segment membership) and proposed patterns for other activities.
status: recorded patterns are source-derived; proposed patterns are drafts needing marketing operations confirmation
owner: marketing operations
reviewed: 2026-10-26
---
# Workflow patterns

Recorded patterns are source-derived: they were built in past campaigns and haven't been re-checked against today's portal. Both are conversion workflows. Proposed patterns are ideas for activities that have no recorded build here yet. Confirm their design with marketing operations, and their consent and subscription rules, before building one.

## Recorded: form conversion to a Salesforce campaign

Use for a lead-capture form whose leads go to Salesforce: event interest, contact or demo request. The recorded example is the Accelerate interest workflow, where the event-specific settings are recorded in the [Accelerate workflow reference](../../lumenis-accelerate-campaign/references/workflows.md).

1. Prepare the automated acknowledgment email first, with its sender and subscription confirmed.
2. Enrollment: has filled out [form], any page, any number of times, anytime. Add one OR group per division form when more than one division is in scope; never add another division's form to a single-division workflow.
3. **Edit record → Latest Lead Info** as the first action, written as a plain-language description of the conversion for the rep.
4. A delay before Salesforce handling only when it's still intended (the recorded template used 15 minutes). It doesn't prove CRM sync is complete.
5. Branch by Imported Record Type (Aesthetics or Ophthalmic) when divisions share the workflow. An unknown value must not default to another division.
6. Each branch sets its division's Salesforce campaign and approved member status.
7. Send the automated acknowledgment email; keep Capture Date behavior only when its current meaning is confirmed.
8. Associate the workflow with the HubSpot campaign and verify it from the campaign's Assets.

## Recorded: segment membership

For an approved single conversion tracked by a segment, the source event pattern used Contact → Memberships → Segment/List membership → is member of [segment], re-enrollment OFF, then Edit record → Latest Lead Info first, then CRM → Set Salesforce campaign. Multiple conversions such as dinner and treatment should preserve separate segments/statuses or explicit branches. A single combined status loses conversion meaning.

## Proposed patterns for other activities

None of these has a recorded build in this repository. Each needs a named owner, the consent and subscription decision, and a test plan before it's built.

| Activity | Conversion workflow? | Trigger | Likely actions | Open questions |
|---|---|---|---|---|
| Webinar registration | Yes | ON24 registration, if ON24's HubSpot connection is set up | Latest Lead Info, Salesforce campaign status (registered), confirmation email | Whether the ON24 connection is live; otherwise registrant data arrives by import, which needs its own consent and import rules |
| Webinar attendance and reminders | No: leave Latest Lead Info alone | ON24 attendance data, or registration for reminders | Salesforce status (attended or no-show), reminder or recording email | Same ON24 question; who decides attended versus no-show |
| Post-event thank-you and survey | No: leave Latest Lead Info alone | Membership in a confirmed attended list or segment | Thank-you and survey email, attended member status | Who confirms attendance; never use the interest segment as the attended audience |
| Content download or contact request | Yes | A dedicated form | Latest Lead Info, Salesforce campaign, auto-reply with the asset link | Which assets are gated; sender and subscription per division |
| Follow-up series after a conversion | No: leave Latest Lead Info alone | Form or segment membership | Several timed emails with exit conditions | Subscription types, frequency caps and unsubscribe handling; must not re-enroll contacts into a conversion workflow |

When one of these is built and tested, move it into the recorded section with its source and date.
