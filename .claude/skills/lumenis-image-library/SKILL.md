---
name: lumenis-image-library
description: Add images to the shared library, inspect and describe them, resize to WebP, upload to HubSpot when authorized, and update the catalog within this repository.
---
# Maintain the image library

Read [the image-library workflow](../../../assets/image-library/README.md) and follow only the requested stage. Work from assets/image-library for its npm commands. Inspect the actual image before writing metadata; never infer its content from a filename. Read scripts/helpers/schema.mjs for current allowed values.

Use lowercase hyphen-separated asset IDs ending in a three-digit sequence. Check for duplicates. Complete subject, description, background, productShown, audience, placements, collection, tags, altText and usageRestrictions. Preserve source and rights evidence; a public URL is not reuse approval.

Generate metadata, fill it, process the image and validate locally before any upload. No placeholder text may be imported. Preserve originals externally and never commit raw/processed image bytes or credentials. catalog.json is canonical; regenerate catalog.md rather than editing it.

Uploading writes to production HubSpot. Follow the user's existing authorization and confirm the account and folder before writing; local intake alone does not authorize upload. Sync reads HubSpot and changes local catalog URLs. Review the diff, especially any removed URLs, before committing. Do not move existing HubSpot files as part of consolidation.

Read [provenance and differences](../../../assets/image-library/PROVENANCE.md) when comparing with Simon's repository. This copy does not automatically synchronize with upstream. Submit metadata and instruction changes through the main repository's pull-request process, and record live upload results externally.
