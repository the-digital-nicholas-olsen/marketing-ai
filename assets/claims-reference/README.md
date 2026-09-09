---
title: Claims reference library
summary: Reference tables of clinical, regulatory and epidemiological claims and statistics used in Lumenis marketing materials, with sources, so a person or an AI can find the citation and context behind a stat before reusing it.
status: source-derived; verify each entry before external use
owner: Kaelyn Gray
reviewed: 2026-09-09
---

# Claims reference library

This collection catalogs claims and statistics that appear in Lumenis marketing materials (pitch decks, brochures, patient materials), together with the study or source behind each one, where it appears, and what qualifications apply. The goal, per the assignment this library started from, is that someone can ask "what's the source for X stat" and get the citation and context alongside it, rather than re-deriving it from a deck each time.

**Read before using any entry:** an entry here reflects what a specific piece of marketing material claims and what its own footnotes cite — it is a record of what we say and why, not a substitute for individual regulatory, medical or legal review of new copy. A citation existing does not mean the exact wording in an entry was independently re-verified against a full read of the primary source; where it was, the entry says so. Where a claim's sourcing could not be confirmed, or a number does not reconcile with what the cited source appears to say, the entry is marked `needs review` and says why. Never treat a `needs review` entry as pre-cleared for use.

## Scope

- **In scope:** public-use clinical, regulatory, epidemiological and procedural claims and statistics that appear in Lumenis product/patient marketing materials, with public sources (published studies, public regulatory filings, public epidemiology sources).
- **Out of scope, by design:** internal business figures (practice revenue models, ROI projections, per-practice sales results), confidential or unpublished evidence beyond what a public-facing document already discloses, campaign records, and anything that would require reproducing a restricted internal document. This is a public repository (see [AGENTS.md](../../AGENTS.md)); do not add confidential source material or internal-only data here.
- A claim's presence in a deck is not itself approval evidence, and a study existing is not the same as a claim being cleared for a specific market/audience — see [known conflicts](../../guides/known-conflicts.md) (D09/D10) and [Ted's copy clarity gate](../../.agents/skills/copy-clarity-gate/SKILL.md), which owns compliance/prohibited-terms review downstream of this reference.

## Fields

Each product file is a table with one row per claim:

| Field | Meaning |
|---|---|
| ID | Short stable identifier for cross-referencing from the Notes section and from `index.md` |
| Claim / statistic | The claim as it appears in the material, as close to verbatim as practical |
| Market / audience | Product, and the market/audience/geography the claim applies to when the source specifies one (e.g., US vs EU indication) |
| Appears in | Which document and where (file, slide or page number) |
| Reference | The citation the material gives (author, publication, year, volume/pages), with a public link where one exists |
| Qualifications | Anything needed to use the claim accurately — population studied, comparison basis, date of the underlying data, whether the citation was confirmed |
| Status | `confirmed` (public source located and its content checked against the claim) or `needs review` (source missing, not locatable, unpublished at time of review, or the number doesn't clearly reconcile with the source) |

Longer notes that don't fit a table cell live in a "Notes and flags" section at the bottom of each file, referenced by ID.

## File naming and placement

One file per product: `<product-slug>.md` (e.g. `optilift.md`, `optilight.md`), lowercase hyphenated, matching the naming rule in the [root README](../../README.md#naming-and-placement). `index.md` is the master table across all products. Add a new product file the same way rather than growing one file indefinitely; link it from `index.md`.

## Adding or updating an entry

1. Read the claim in its original material (deck, brochure, patient piece) rather than from a secondary summary; note the exact document (with its part number if shown, e.g. `PB-00030660 Rev A`) and slide/page.
2. Find the cited source. If it's a published study, try to confirm the specific number against the source (abstract or full text), not just that the citation exists. Record what you actually checked.
3. If a source can't be located, the number doesn't match, two materials give different numbers for what looks like the same claim, or the evidence is marked as unpublished/data-on-file, mark the entry `needs review` and say specifically what's unresolved — do not upgrade a claim to `confirmed` on the strength of the deck's own footnote alone.
4. Add the row to the relevant product file and a link from `index.md`. Run `node scripts/validate.mjs` from the repository root before opening a pull request.

## Known gaps in this initial pass

- Several claims cite a public source whose exact wording or figure could not be independently reproduced from what was available during this review (search/fetch access, not a primary-database subscription) — these are marked `needs review` with the specific discrepancy noted rather than silently accepted.
- Two OptiLIFT materials cite different sources for the same "3-8% muscle loss per decade" figure, and OptiLIGHT's two consumer/practice materials state different totals for "Americans with dry eye disease" — see the Notes sections in each product file.
- Business/ROI figures (e.g., per-practice revenue projections, average annual practice revenue) that appear alongside clinical claims in the source decks were intentionally excluded from this library as out of scope (see above), not overlooked.
- This first pass covers only the four documents reviewed for this contribution (two OptiLIFT, two OptiLIGHT). Lumenis' other product lines and materials are not yet represented.

