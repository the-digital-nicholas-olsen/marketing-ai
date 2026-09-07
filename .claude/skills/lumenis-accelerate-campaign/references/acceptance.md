---
title: Accelerate acceptance and handoff
summary: Evidence required before calling a campaign complete.
status: source-derived
owner: division lead and marketing operations
reviewed: 2026-09-07
---
# Acceptance

Record results in the external event handoff with object IDs and timestamps. Mark each item pass, fail, blocked or not applicable with a reason; absence of evidence is not pass.

- Brief: division/product/market/audience explicit; current dates/timezone, venue, faculty, agenda, eligibility, policy, budget, approved claims and responsibilities.
- Objects: no duplicate canonical campaigns/pages; names, IDs and intended public URLs recorded. Both systems have the required campaigns and approved field values; read-only Division issues assigned for resolution.
- Forms: exact internal properties, required and hidden settings, selected stored routing values, UTM capture, contact creation and confirmed consent handling. Draft and published states distinguished.
- Segments: correct form GUID and division, Active contact processing, unique membership reconciled with qualified submissions, correct campaign association.
- Pages: registration and agenda links match email destinations, current content visible, appropriate form(s), legal/privacy controls work, no stale city/placeholder/module, desktop and mobile clean.
- Assets/flyers: rights and scope checked; URLs and image content verified; printable PDF and digital edition inspected, correct page count and no layout overflow.
- Emails: all four purposes prepared as required, subject/preview/from address/from name/reply-to/subscription checked separately; approved audiences/exclusions and schedule; calendar/survey/hotel links valid; no recipient tokens or placeholders; clarity, claims and inbox review complete.
- Workflow: intended forms/segments enroll, correct division branches and Salesforce campaign/status, delay/Latest Lead Info/Capture Date reviewed, correct email selected, unknown routing handled, existing matches and re-enrollment explicitly decided. Saved OFF/ON state read back.
- Backend/comms: four sheets, six forms and seven internal documents when both divisions are in scope; destinations, access, recipient settings and required notifications tested.
- Execution: clearly report which drafts were saved, objects published, workflows activated, submissions tested and messages sent. Public Git access alone provides none of the necessary business-system permissions.

Do not activate/send just to finish the list. Honor prior explicit task authorization; obtain only missing decisions. A test submission into production is a write and can trigger communications; use an agreed QA identity and contained workflow, or an appropriate test environment with equivalent configuration.

A newcomer pilot should complete a synthetic brief in a fresh checkout, find the correct division fields, draft all four emails, identify unresolved sender/consent questions, and demonstrate supported operations in the approved test environment. Documentation checks alone do not prove this end-to-end pilot passed.
