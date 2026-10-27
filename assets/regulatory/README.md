---
title: Regulatory language and do's and don'ts
summary: Indications for use, contraindications, warnings and the legal word lists for each Lumenis Eye Care and Aesthetics product on file, so a person or an AI can check copy against them before it goes to review.
status: source-derived; legal and regulatory review still required for every piece
reviewed: 2026-10-09
---

# Regulatory language and do's and don'ts

This collection records what Lumenis legal and regulatory sources say each product may and may not be called, plus the indication-for-use and warnings text that must travel with it. Check copy against the product file here **before** the [claims library](../claims-reference/index.md): a claim can have a confirmed citation and still be off-label or use a word legal has ruled out.

Nothing here is approval. It is a record of the source documents so drafts start closer to compliant. Every piece still goes through legal and regulatory review.

## Products

| Product | File | What the sources cover |
|---|---|---|
| OptiLIFT | [optilift.md](optilift.md) | Indication by market (US, EU, Canada) from the user manuals, contraindications, warnings, legal do's and don'ts |
| OptiLIGHT | [optilight.md](optilight.md) | EU and US indications, contraindications, warnings, side effects, FDA status. No legal do's-and-don'ts list was found. |
| OptiPLUS | [optiplus.md](optiplus.md) | Indications by market, contraindications, warnings, required disclaimers, legal do's and don'ts (October 2023) |
| Digital Duet | [digital-duet.md](digital-duet.md) | US and non-US manual indications, contraindications, warnings and risks, promotional disclaimers. Selecta Duet and Trio kept separate as legacy. |
| triLIFT | [trilift.md](trilift.md) | Aesthetics and Eye Care in separate sections: indications, contraindications, side effects, disclaimers |
| UltraPulse (CO2) | [ultrapulse.md](ultrapulse.md) | UltraPulse Alpha labeling, then Aesthetics and Eye Care sections, then older models |
| AcuPulse | [acupulse.md](acupulse.md) | Indications, contraindications, warnings, Rx statements, FemTouch |
| Antares | [antares.md](antares.md) | Intended use, classification, safety warnings from the one manual on file |
| Retina and glaucoma lasers | [retina-and-glaucoma-lasers.md](retina-and-glaucoma-lasers.md) | Smart 532, Array LaserLink, Vision One, Novus Spectra, SmartLIO, LIO Keeler, by device |
| Optima IPL and M22 (legacy) | [optima-ipl-and-m22.md](optima-ipl-and-m22.md) | Legacy platform, for checking older material only. Not a source for OptiLIGHT copy. |

## How to use it

To check a finished piece against this collection and the claims library in one pass, use the [claims check skill](../../.agents/skills/lumenis-claims-check/SKILL.md).

1. Open the file for every product the piece mentions. A combined piece follows **each** product's rules. Never borrow one product's permitted wording for another: "a bright solution for dry eyes" belongs to OptiLIGHT and is a don't for OptiLIFT and OptiPLUS.
2. Check every product description, benefit line and headline against the do's and don'ts. Where a "do" carries an asterisk, it needs a reference on the piece.
3. Add the product's indication-for-use and warnings text wherever the channel requires it. Combined materials carry both products' text, as the combined OptiLIGHT and OptiLIFT legal title card does.
4. Then check any statistic or study result in the [claims library](../claims-reference/index.md).
5. Record anything the sources do not settle in the product file's "Open questions" section, and ask the regulatory owner. Do not resolve it by guessing.

## Sources

The sources are Lumenis internal working documents: user manuals and instructions for use, legal do's-and-don'ts lists, legal-language title cards, product quick reference guides and PB-numbered marketing pieces. They are summarized and quoted here for drafting, not redistributed. Each product file lists every document used with its control ID, revision and year. Word lists without a PB number are identified by title and date. Always confirm indication and warnings text against the current User Manual, because labeling changes between revisions.

## Newer replaces older

Each product file uses only the newest revision on file of each controlled document as the source of current statements.

- A "Superseded" section lists the older revisions that were not used and what replaced them.
- Where a newer source changes a statement that was already on a page, the older wording stays and is marked superseded with the newer control ID and revision. Nothing is deleted.
- Where two current documents disagree, for example a US and a non-US manual, each is quoted separately and the conflict goes to "Open questions".
- "Newest on file" means the newest revision in the Lumenis content library on the review date. It does not prove a later revision does not exist in the document control system. Confirm before external use.

A device sold by both divisions (triLIFT, UltraPulse, M22) keeps Eye Care and Aesthetics indications in separate sections. Do not carry an indication from one section to the other.

## Adding or updating an entry

Quote regulatory text verbatim and give the source, revision and year. When adding a newer revision, move the replaced one to "Superseded" and mark any changed statement. Keep do's and don'ts in the pairs the source uses, so the permitted wording sits next to the wording it replaces. When a source conflicts with another source or with existing Lumenis material, add it to "Open questions" rather than choosing one. Run `node scripts/validate.mjs` before opening a pull request.
