---
title: HubSpot form embed and styling lessons
summary: Embedding by GUID, iframe styling limits and mobile checks.
status: source-derived (moved from the Accelerate form reference 2026-10-26)
owner: marketing operations
reviewed: 2026-09-07
---
# Embed and styling lessons

Use the actual form GUID, not one borrowed from another page or event. The recorded `hbspt.forms.create()` kit rendered in an iframe even on CMS pages; a native module used a different styling path. Inspect which exists. An iframe cannot inherit the parent's @font-face; include licensed absolute font URLs inside its CSS when supported. Never reach through a cross-origin boundary with an unsupported tool.

Check Style & preview as well as injected CSS: per-form button rules may outrank page rules. Use border-box and 100% input width, enough select right padding for the caret, and an iframe height that does not clip the submit button. Keep heading and intro with the one-column form. Test both the page and iframe at mobile widths.
