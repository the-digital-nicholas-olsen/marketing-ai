---
name: lumenis-hubspot-campaign
description: Set up the HubSpot side of a Lumenis program before any creative is final - the campaign, its registration and attendance segments, the promo email shells with send lists set, and file links. Use after the Salesforce campaign exists. Webinar segments use ON24 integration events, not "last registered" properties.
---

# HubSpot campaign setup

Owner: marketing operations (EJ for Vision webinars).
Status: draft procedure, written 2026-10-27 from the Vision webinar playbook session. The ON24 event filters were confirmed in a live Vision workflow that day; the segment builder itself wasn't exercised. Review required.

The back end can be built as soon as the title, date and Salesforce campaign exist, long before the copy is final. Placeholder ("lorem ipsum") emails let the content owner drop creative in later without touching settings.

## Inputs

- Agreed campaign name, division, reporting dates and the Salesforce campaign (see [lumenis-salesforce-campaign](../lumenis-salesforce-campaign/SKILL.md)). No Salesforce campaign blocks the workflow, not this setup.
- For webinars: the ON24 event ID (see [lumenis-on24](../lumenis-on24/SKILL.md)).
- The donor emails and the standing send and exclusion lists named in the campaign template's AI Instructions. Those names live in Smartsheet, not here.

## 1. Campaign

Follow the HubSpot campaign section of the [campaigns and segments reference](../lumenis-accelerate-campaign/references/campaigns-and-segments.md#hubspot-campaign): same name as Salesforce, division color (Vision blue, Aesthetics red), owner = the person building it, same start and end dates. Read the saved fields back.

## 2. Segments

Create segments before emails, because the emails exclude the registered segment.

**Webinar segments use ON24 integration events.** The contact properties *ON24 last registered event* and *ON24 last attended event* hold only the most recent event, so a contact who registers for the next webinar drops out of this one's list. Use the events instead, which are logged once per registration:

| Segment | Filter | Processing |
|---|---|---|
| `<campaign name> - Registered` | Events → **ON24: ON24 registration** → Event ID is equal to `<ON24 event ID>` | Active |
| `<campaign name> - Attended` | Events → **ON24: ON24 attendance** → Event ID is equal to `<ON24 event ID>` | Active |

These are the same conditions the Vision webinar workflow uses for enrollment and its attended branch (observed 2026-10-27). If the segment builder doesn't offer the ON24 events, stop and tell marketing operations; don't fall back to the "last" properties without their decision.

Other programs: form-fill segments follow the [reference](../lumenis-accelerate-campaign/references/campaigns-and-segments.md#active-form-fill-segments).

## 3. Email shells

1. Clone the program's placeholder promo emails (for webinars, Em1 and Em2) named in the template.
2. In each: link the campaign; turn on *View in browser* and give the page a title from the webinar name so it gets a clean URL; Send to = the standing sales-leadership list **plus** the audience list chosen for this campaign (ask every time, never default); Don't send to = the Registered segment; *Don't send to unengaged contacts* on.
3. Leave the creative as placeholder. The content owner replaces it using [lumenis-hubspot-email](../lumenis-hubspot-email/SKILL.md), and [lumenis-email-check](../lumenis-email-check/SKILL.md) runs before scheduling.

## 4. Files and associations

Link the flyer and other files the content owner uploaded to the campaign (they need the campaign to exist first). Associate segments, emails and the workflow from the campaign's Assets tab and verify each one there; a success toast isn't proof.

## Output

Campaign link, segment names and IDs, email IDs with their lists read back, and open items. Record them in the campaign's Smartsheet rows, not in Git.
