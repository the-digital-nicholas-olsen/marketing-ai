# Accelerate internal communication examples

Seven complete Markdown examples converted from the existing Word documents, reviewed September 7, 2026. Use them as the starting copy for the event's Word deliverables. These preserve historical wording, including travel terms; they are not current policy approval or ready-to-send messages.

## Choose a document

| File | Audience and purpose |
|---|---|
| [Master Links](master-links.md) | Internal event reference, six form links and four sheet links |
| [VIS RSM email](vis-rsm-email.md) | Vision sales instructions and tracking links |
| [AES RSM email](aes-rsm-email.md) | Aesthetics sales instructions and tracking links |
| [VIS flight invitation](vis-prospect-email-flight.md) | Rep to Vision customer needing flight assistance |
| [VIS non-flight invitation](vis-prospect-email-non-flight.md) | Rep to Vision customer registering without flight assistance |
| [AES flight invitation](aes-prospect-email-flight.md) | Rep to Aesthetics customer needing flight assistance |
| [AES non-flight invitation](aes-prospect-email-non-flight.md) | Rep to Aesthetics customer registering without flight assistance |

Markdown is the canonical reusable copy. Completed event copies, field values and exported Word documents stay in the external campaign folder. Give reps `.docx` files, not a GitHub link containing unresolved fields. Keep Master Links and RSM tracking links internal.

## Source and conversion notes

Reviewed 23 original Word files: seven each in the Scottsdale and Miami `Internal Comms` folders and nine in `Internal Comms Example - Nashville`. The seven-file city sets provide the canonical layout and copy, cross-checked against Nashville. Source filenames map directly: `<City> - VIS/AES - RSM Email.docx`, `<City> - VIS/AES - Prospect Email - Flight/Non-Flight.docx`, and `<City> - Master Links.docx`.

This is a text adaptation, not a claim to reproduce Word pagination or design. Actual event dates, venue/address, booking and Smartsheet URLs are replaced with named fields. The absent digital flyer remains a required field. Travel agency and recipient names are fields. Attachment filenames follow the repository convention. Paragraph wording is otherwise retained, including the distinction between an interest form and registration.

Nashville source findings: some nominally division-specific files contain both AES and VIS versions; files called `Nashville Email for ... RSM` contain prospect travel copy, while `VIS - RSM Email- NASHVILLE.docx` contains internal RSM instructions and an AES section. Some links use a Smartsheet form-editor route instead of a Share Form URL. Do not copy those structures or link types into a new event.

## Fill and review

1. Copy the seven Markdown examples into the event's external working folder. Use [the event backend procedure](../../.agents/skills/lumenis-accelerate-campaign/references/smartsheet.md) and [internal communications procedure](../../.agents/skills/lumenis-accelerate-campaign/references/internal-comms.md).
2. Replace `{{FIELD_NAME}}` tokens with verified event facts. `EVENT_DATES` should include the year; include timezone where needed. `CITY_SLUG` is the lowercase filename version of `CITY`. `VENUE_NAME`, `VENUE_ADDRESS`, `HOTEL_BOOKING_URL`, `DIGITAL_FLYER_URL`, `TRAVEL_AGENCY`, `RECIPIENT_NAME` and `REP_NAME` are self-descriptive.
3. Each division has its own `VIS_` or `AES_` `REP_APPROVAL_FORM_URL`, `REP_APPROVAL_SHEET_URL`, `FLIGHT_FORM_URL` and `NON_FLIGHT_FORM_URL`. `FLIGHT_SHEET_URL` and `NON_FLIGHT_SHEET_URL` are shared tracking sheets. This is six unique forms plus four sheets, not twelve URLs. Use customer Share Form URLs, never editor URLs, in prospect messages.
4. Confirm every historical policy statement before retaining it: two flights per practice; 24-hour flight approval; rep copied on booking; discounted hotel block; hotel/ground transport not covered; round-trip coach; budget alternatives; seating limitations; delay/cancellation/rebooking responsibility; changes one week before the event; no last-minute bookings/changes; age 21+; event updates and a KBYG email in event week. Edit the working Markdown to match the approved current terms. Also confirm whether customer invitations go immediately after rep submission or require a separate approval first.
5. Replace or remove any unsupported promises. Confirm actual flyer and attachments, correct division links and access to internal sheets. Run the copy clarity gate and subject-owner review. Export only the seven message/reference bodies, not this README.

## Export as Word

The included [export helper](../../scripts/export-accelerate-comms.py) requires Python 3 and `python-docx`. In Codex use its bundled workspace Python; elsewhere install the dependency in your normal approved Python environment. No other third-party package is required.

From the repository root, after replacing fields and reviewing policy in the external working copies:

```sh
python3 scripts/export-accelerate-comms.py --input-dir "/path/to/event/markdown" --output-dir "/path/to/event/word" --city-slug "example-city"
```

The helper requires all seven filenames listed above and rejects unresolved fields. It preserves paragraphs, headings, bullets and clickable HTTP(S) links. It uses readable 11pt text and black headings, not a branded layout. Outputs are `<city>-vis-rsm-email.docx`, the matching AES/customer variants, and `<city>-master-links.docx`. Use an empty output folder; the helper refuses to overwrite files.

Open all seven Word documents and check every page, link, attachment name, division and policy. If using an AI document renderer, render every document and inspect all page images. Export success alone does not verify link destinations, policy approval or layout. Keep one purpose and division per file. Sending remains a separate authorized action.

Without Python: copy the rendered body from each Markdown file into Word, apply Title/Heading styles and bullets, confirm hyperlinks are clickable, and save as `.docx` using the same naming convention. Do not paste raw Markdown markers into the customer email.
