---
title: Accelerate forms
summary: Which forms an Accelerate needs; building and checking them follows the HubSpot form skill.
status: source-derived
owner: marketing operations
reviewed: 2026-09-07
---
# Forms

Build and verify every Accelerate form with the [HubSpot form skill](../../lumenis-hubspot-form/SKILL.md). It holds the division mappings, critical values, build steps and embed lessons that used to live here.

Accelerate specifics:
- One dedicated interest form per division per city, named with the same string as its page and campaign (see the [blueprint](blueprint.md)). The agenda page has no form unless the brief requires a distinct conversion.
- For a shared Vision and Aesthetics event, load both division mappings and keep each division's form separate.
- A HubSpot interest form is not a confirmed event registration. Rep approval and flight or non-flight registration happen in the [Smartsheet event backend](smartsheet.md).
- Each interest form feeds its division's form-fill segment ([campaigns and segments](campaigns-and-segments.md)) and the interest workflow ([workflows](workflows.md)). Add every new interest form to the corporate recent-conversion workflow's exclusion list, as the [HubSpot workflow skill](../../lumenis-hubspot-workflow/SKILL.md#latest-lead-info-goes-first) explains.
