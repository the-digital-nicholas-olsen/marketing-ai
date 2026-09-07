---
title: HubSpot landing and agenda page implementation
summary: One-module delivery, cloning, editor failures, styling and public verification.
status: source-derived
owner: marketing operations
reviewed: 2026-09-07
---
# Pages

Use the approved design system for the selected product and market. This delivery procedure does not grant approval for product claims or turn OptiLIFT design into a default for Aesthetics.

## Content and architecture

Registration/interest page: city and date hero with conversion anchor; specific city story; experience benefits; verified faculty; venue and schedule; networking and relevant technology; dedicated division form; approved legal footer. Adapt the actual event span, not just city names. Separate agenda page: section navigation, hero, expectations, day tabs, faculty, social/venue blocks and footer. Unassigned rooms may say ROOM TBD with an explicit qualification if accepted in the brief.

Clone a current approved reference when possible: this preserves the template and HTML module. Create a shell manually only if required by current tool capability. Search existing agency drafts and published variants first. Record which one owns future links and registrations; do not create competing live pages.

The established new-build pattern is one Custom HTML module containing markup, scoped style and page script, with hosted assets. Keep Settings Head HTML/Footer HTML empty for this pattern: repeated edits there failed to persist in source builds. Existing split CSS/JS pages can still work and should not be redesigned without need. Never embed image/font bytes as base64; it caused megabyte-scale pages and publication failures.

Build in an external output folder. Keep editable HTML/CSS/JS and the assembled module there. Resolve every asset to its actual hosted URL before delivery; no local assets/fonts paths or placeholder form GUIDs. Use the existing image skill to query rather than loading an entire catalog.

## Reliable editor sequence

- Set internal name, page title, then valid content slug, metadata and campaign association. A temporary slug or empty title blocked unrelated saves in source builds despite Autosaved.
- Recorded editor path: `https://app.hubspot.com/pages/278427/editor/<PAGE_ID>/content`. Use current UI navigation if the route changes.
- Verify association again in Settings after cloning; clone-dialog selection failed to persist.
- Replace the actual Custom HTML source; do not append. For large modules prefer a supported bulk editor/API operation. Typing tens of thousands of characters as keystrokes froze CodeMirror.
- Where the authorized browser exposes CodeMirror, `cm.setValue(text); cm.refresh()` worked. Read `cm.getValue()` back and compare full content before saving. Do not rely on character count alone. A supported authenticated CMS API write can also work; verify schema and scope first rather than replaying an undocumented internal endpoint.
- If a local transfer server is necessary, serve only the intended output directory, bind to 127.0.0.1, restrict CORS to the necessary origin, stop it afterward, and verify fetched content before replacing the editor. Historical wildcard-CORS snippets are not a default requirement.
- If clipboard is the available route, copy and paste consecutively into the focused source box, then compare the content. Another app overwrote the clipboard twice in earlier builds. An undo can restore the previous module; preserve a local previous version before replacement.
- UTF-8 corruption occurred in clipboard transport. Numeric entities in HTML text avoid that path; they do not work inside style/script blocks. Prefer verified UTF-8 transfer and inspect punctuation visibly.
- Use Page contents → module → menu → Delete for leftover Rich Text/Custom Button modules. A blank-looking canvas may be a failed preview frame; inspect the direct preview before concluding content is empty.
- Work from one editor per object. A stale tab can overwrite newer saved work or hold an editing lock. Reopen and read back after a retry. Repeated blind clicks can duplicate search text and objects.

## Template and CSS lessons

Avoid editing global header/footer resources from a single page: that can change every page. When a full-page approved design includes replacements, scope local hiding of global elements to that page and preserve required legal/consent controls. Do not hide legal content unless its approved replacement is present.

Recorded template overrides: remove extra padding/background/max-width from the relevant dnd section/column/module; avoid leaking the changes outside the intended page. The auto-injected `#branded-footer` can produce a duplicate; use `id="page-footer"` for the replacement. Preserve Privacy Statement, Terms of Use, Safety Information, Patents and My Privacy Choices from the current approved footer. The OneTrust `optanon-toggle-display` hook must continue to open privacy choices.

Use low-specificity resets such as `.section :where(p, dl)`. A `.section img {height:auto}` rule beat `.faculty-avatar {height:96px}` and produced oval portraits; use a correctly scoped stronger selector when fixing dimensions. Put full-bleed backgrounds on sections, not max-width inner wrappers. Reset list markers for custom numbered layouts, provide gaps for multiline day-tab buttons, and include units on calculator labels. For anchor behavior provide an instant-scroll fallback if smooth scrolling fails.

## Verify

Inspect desktop and mobile render before authorized publication, then the public URL afterward. Source builds observed an edge cache up to 180 seconds; inspect current headers and retry after its window before concluding failure. Check a marker unique to the new content, exact intended slug, all registration links in emails, no stale city/date/venue copy, one visible legal footer, no leftover module buttons, no placeholder URLs and all critical fonts/images loaded.

At 375x812 confirm document scrollWidth does not exceed clientWidth; test the form separately. Check video usability, not merely existence. A zero-size tracking beacon can appear in broken-image lists without being content. Inspect cookie overlays separately; do not change visitor consent merely to take a screenshot. Preserve browser same-origin restrictions during iframe checks.

A published status is not proof the public content is current, and a passing preview is not proof the published content matches.
