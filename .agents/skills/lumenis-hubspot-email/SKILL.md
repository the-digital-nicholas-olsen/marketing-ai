---
name: lumenis-hubspot-email
description: Build a Lumenis HubSpot marketing email as one HTML body the AI writes as a file, placed in an approved template, with every send setting set explicitly and checked before any send. Use for regular or automated marketing emails in Vision or Aesthetics.
---

# HubSpot email

Owner: marketing operations, with the content writer for copy.
Status: draft procedure, consolidated 2026-10-26 from the Accelerate email reference; subject-owner review required.

Use this for any HubSpot marketing email: invitation, reminder, newsletter, follow-up or form auto-reply. Campaign-specific purposes and copy stay with the campaign skill; for Accelerate, see the [Accelerate email reference](../lumenis-accelerate-campaign/references/emails.md).

## Inputs

Resolve division, purpose, audience and exclusions, regular or automated, send date and time zone, from name, from address, reply-to, subscription type and HubSpot campaign. Select one brand system through [the design entry point](../../../assets/design-system/README.md). Check claims against the [claims library](../../../assets/claims-reference/index.md).

**Sender and subscription:** confirm the current approved values for the division with marketing operations. Never pick a near-match address, inherit an individual editor's address, or create a new sender to get past a loading error. Observed Vision settings and an open shared-sender decision are recorded in the [Accelerate email reference](../lumenis-accelerate-campaign/references/emails.md#sender-and-subscription-evidence); treat them as dated observations. An unresolved sender or subscription blocks sending, not drafting.

## Procedure

1. **Draft the copy:** subject, preview text, headline, body and call to action, from approved evidence. Run [Ted's clarity gate](../copy-clarity-gate/SKILL.md).
2. **Write the body as one HTML file** in the external output folder, following the [HTML email rules](references/html-email-rules.md): inline CSS, percentage columns, hosted absolute images and links, fallback fonts, unsubscribe tokens kept.
3. **Create the email in HubSpot.** Clone an approved email of the same type when one exists; cloning preserves the template and footer. Otherwise choose Regular or Automated to match the sending plan and start from the approved saved template. If no approved template or donor email exists for the division, stop placement and ask marketing operations; don't build on a default template, because its footer and subscription controls aren't the approved ones. The HTML body can still be drafted.
4. **Place the body** in one Custom HTML module. Select all and replace the source, remove default modules the design replaces, keep the approved footer and subscription controls, and set the containing section to zero padding.
5. **Set every field on its own:** subject, preview text, from name, from address, reply-to, subscription type, audience and exclusions, schedule, campaign association. Read each one back; one field saving doesn't prove the others did.
6. **Check every link** goes to its real destination. No placeholders, stale UTMs or recipient tokens. Omit an optional block whole if its links are missing.
7. **Run QA** with [lumenis-email-check](../lumenis-email-check/SKILL.md): Litmus client previews, dark mode, mobile layout, links, images and send settings. Browser previews don't show Outlook rendering.
8. **Save as a draft** and record the email ID, settings read back and open gaps outside Git.

Sending, scheduling and publishing an automated email need explicit task authorization. Publishing a reusable automated email and turning on a workflow are different actions. Editing an email that an active workflow already uses can reach real recipients, so check its dependencies first. Use the read-back checklist in [HubSpot access and verification](../../../integrations/hubspot/access-and-verification.md).

## Mistakes to avoid

- A `<style>` block; HubSpot rejected it. Inline the CSS.
- Assuming a 600px width; the editor's content width varied around 540–580px.
- Pasting a recipient-specific unsubscribe or `_hsenc` link from a preview.
- Two editors open on the same email; a stale tab overwrote saved sender and subject fields.
- Reporting an email ready because subject and from name read back: preview text, from address and subscription need their own check.
