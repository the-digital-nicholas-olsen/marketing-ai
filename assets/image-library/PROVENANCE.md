# Image library provenance

Adopted September 7, 2026 at Nicholas's request from [lumenis-web-catalog](https://github.com/laarnicayetano/lumenis-web-catalog/tree/38b56997a6795746e4382e7bdcfdbdc8bbb90109), commit `38b56997a6795746e4382e7bdcfdbdc8bbb90109`. The catalog's 58 asset records and existing hosted links were retained. Scripts, dependency manifest and lockfile came from that snapshot. Upstream remains unchanged.

The user-facing home is now `marketing-ai/assets/image-library`; its canonical AI entry point is [lumenis-image-library](../../.agents/skills/lumenis-image-library/SKILL.md), also distributed to Claude through the existing synchronization script. Root image search defaults here. An environment override is still supported.

Local adjustments:

- Rewrote the workflow for a subfolder in a single repository, with corrected metadata/batch command paths and an array of complete draft objects for batches.
- Added metadata-only and pending-upload validator modes. Upstream's default requires ignored local files and uploaded URLs, which cannot validate an untouched fresh clone or pre-upload intake.
- Corrected the generated browser's local image fallback to resolve from dist.
- Preserved configured folder IDs from the helper; the upstream README's claims that AES/Corporate IDs are null and that there are 57 assets conflict with its actual files. These IDs were not reverified in HubSpot during adoption.
- Kept catalog metadata descriptive of this adoption rather than claiming the upstream repository remains the only writer. Coordinate one maintained copy per record during handoff; there is no bidirectional sync.
- Did not copy Git history, staging image bytes, credentials or deployment workflows. No HubSpot upload, folder migration or website deployment is part of this integration.

The original instructions and tools remain attributed to their upstream source. This adoption does not assert a new license, confer image rights, or replace brand approval evidence. Existing rights/approval fields, if supplied in future records, must remain intact.

## CLI verification September 7 2026

Live read-only checks confirmed CLI 8.14.0, valid account 278427 authentication, the Files scope, zero doctor errors, and a successful Files API search. The optional non-Codex MCP configuration warning does not block CLI image uploads. No upload was performed. The helper now invokes installed hs directly and pins --account 278427 on every request; it no longer invokes npx or depends on the default account. Upload and sync dispatch were checked with a local mock, not a production write.
