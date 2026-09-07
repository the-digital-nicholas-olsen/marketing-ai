---
title: HubSpot forms and field configuration
summary: Exact property selection, division routing, editor lessons and submission checks.
status: source-derived
owner: marketing operations
reviewed: 2026-09-07
---
# Forms

Load only [Vision](../../../../divisions/vision/hubspot/field-mappings.yaml) or [Aesthetics](../../../../divisions/aesthetics/hubspot/field-mappings.yaml), or both when explicitly building a shared event. These are dated source observations and documented requirements, not a fresh live-system read. Compare the current portal definition before changing a form. The distinction between observed state and intended requirements is explicit in the YAML.

## Critical values

Portal 278427, region na1. `imported_record_type__c` uses `Ophthalmic` for Vision and `Aesthetics` for Aesthetics. `goes_to_sf_` stores `Sync`, not `Yes`. A legacy UI label of Yes is not the API value. In the legacy form response, hidden selections can be in `selectedOptions` while `defaultValue` is empty. Inspect the response schema actually returned; do not assume a v3 response is shaped like a legacy response.

Common fields: firstname, lastname, company (Practice Name), email, phone and zip (Zip Code) required; city/state optional; country required in the documented target. Vision: required ophthalmology_position (Vision Position), optional vision_specialty; no jobtitle in the reference. Aesthetics: aesthetic_position (Aesthetic Position), jobtitle required in the target. Both target five hidden UTM fields: utm_campaign, utm_content, utm_medium, utm_source, utm_term. The source Vision donor lacked them; Aesthetic Position was optional on its donor. A donor is not automatically compliant with the intended target.

## Build or resume

1. Search existing forms before creating a new one. Each distinct lead-capture page/conversion needs its dedicated form; resume that existing form when continuing work. A form-free agenda page needs none.
2. Clone a suitable same-division form if that works; otherwise create fresh. Legacy form editor worked in source builds: `https://app.hubspot.com/forms/278427/editor/<FORM_ID>/edit/form`. Inspect the current editor rather than assuming all future forms are legacy.
3. Search the field palette by internal property name. `ophthalmology_position` is under Ophthalmology; `ophthalmology_main_form` is a different property. `company` is the Contact Information property, not Company Properties/name. `zip` is standard Postal code, not a similarly named custom property. Relabel existing fields; do not create duplicate properties.
4. Double-click palette items when dragging fails. Email may remain first as the seed field. Field order is not a routing requirement; never reorder rendered fields with JavaScript.
5. Verify every required/hidden/default value against the selected mapping. Do not clean up MD/Ophthalmologist or OD/Optometrist option overlaps without the property owner's dependency review.
6. Inspect Options: turn on the documented new-contact creation setting for this build, and verify after saving/publishing. Test actual net-new-contact behavior rather than relying on a setting's label.
7. Clear inherited campaign associations. Sources observed separate Options and Review/publish campaign pickers that did not mirror each other; inspect both and read back the actual association.
8. Confirm consent wording/subscription handling with marketing operations. No subscription field on a donor does not mean opt-in. Routing to Salesforce does not establish email eligibility.
9. Inspect draft changes in the canvas. The recorded legacy API returned published state, so an unchanged API result is not proof an unpublished edit failed. Do not publish solely to make a check pass without authorization.
10. After authorized publication, verify exact internal names, flags, hidden stored values, UTM capture and contact settings. Use an authorized, identifiable QA submission and trace the resulting contact/routing. Avoid enrolling real contacts or sending unintended messages during tests.

## Embed and styling lessons

Use the actual form GUID, not one borrowed from another event. The recorded `hbspt.forms.create()` kit rendered in an iframe even on CMS pages; a native module used a different styling path. Inspect which exists. An iframe cannot inherit the parent's @font-face; include licensed absolute font URLs inside its CSS when supported. Never reach through a cross-origin boundary with an unsupported tool.

Check Style & preview as well as injected CSS: per-form button rules may outrank page rules. Use border-box and 100% input width, enough select right padding for the caret, and an iframe height that does not clip the submit button. Keep heading and intro with the one-column form. Test both the page and iframe at mobile widths.
