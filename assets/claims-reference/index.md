---
title: Claims reference index
summary: Master index of the claims-reference library, across all products covered so far.
status: source-derived; verify each entry before external use
owner: Kaelyn Gray
reviewed: 2026-10-10
---

# Claims reference index

See [README.md](README.md) for scope, fields and how to add an entry. Check product wording against [regulatory do's and don'ts](../regulatory/README.md) first: a confirmed citation does not make a claim on-label. To check a whole piece, use the [claims check skill](../../.agents/skills/lumenis-claims-check/SKILL.md). This index links to one table per product; each row below is a quick pointer, not the full record — follow the link for sources, qualifications and status.

## Products covered

| Product | File | Claims | Confirmed | Needs review |
|---|---|---|---|---|
| Lumenis corporate | [lumenis-corporate.md](lumenis-corporate.md) | 1 | 1 | 0 |
| OptiLIFT | [optilift.md](optilift.md) | 23 | 12 | 11 |
| OptiLIGHT | [optilight.md](optilight.md) | 42 | 23 | 19 |
| OptiPLUS | [optiplus.md](optiplus.md) | 12 | 2 | 10 |
| Digital Duet | [digital-duet.md](digital-duet.md) | 18 | 4 | 14 |
| triLIFT for Eye Care | [trilift-eye-care.md](trilift-eye-care.md) | 12 | 6 | 6 |
| triLIFT for Aesthetics | [trilift-aesthetics.md](trilift-aesthetics.md) | 14 | 8 | 6 |
| UltraPulse (CO2) | [ultrapulse.md](ultrapulse.md) | 18 | 16 | 2 |
| AcuPulse | [acupulse.md](acupulse.md) | 18 | 3 | 15 |
| Retina and glaucoma lasers | [retina-and-glaucoma-lasers.md](retina-and-glaucoma-lasers.md) | 1 | 0 | 1 |
| Antares | [antares.md](antares.md) | 0 | 0 | 0 |
| Optima IPL and M22 (legacy) | [optima-ipl-and-m22.md](optima-ipl-and-m22.md) | 14 | 2 | 12 |

"Confirmed" means a public source was located and its content was checked against the specific claim during this review — not that the claim is cleared for external use. "Needs review" entries say specifically what's unresolved (missing citation, unlocatable source, unpublished evidence, or a number that doesn't reconcile with the cited source).

## Update 2026-10-09

This update extended the library from three products to every product with material on file, and re-read the three existing products against the newest revision on file of each document.

- Every earlier row is kept with its ID. Where the newest revision changed or dropped a claim, the row says so in Qualifications and names the newer document.
- Rows from the earlier unmerged expansion were folded in and reset to `needs review`. Three of its OptiLIGHT IDs collided with different claims and were renumbered OG-25 to OG-27 (see the note in that file).
- **Publication check (2026-10-09 and 2026-10-10):** every `needs review` row was checked against the publication it cites, first from abstracts and then from full text wherever an open copy could be fetched. A row is `confirmed` only where the opened publication contains the specific figure or statement for the population and measure the claim implies. A different device, a single patient, or a stronger word than the paper uses is not a confirmation. Each checked row carries a dated `Publication check` sentence, and each product file's Notes section lists "Claims the publication does not support as worded" and "Could not be opened".
- **Wrong citation, right figure:** OptiLIFT OL-4 and triLIFT TL-2 ("2.2-fold") are not in Doan 2020; the figure is in Ansari et al., Cornea 2015 (PMID 25357078), as a 2.23-fold association with severe symptoms in a veteran cohort. OptiLIFT OL-7 (6 mm distraction) is in Murri 2017, not the deck's footnotes. Digital Duet DD-4 is in the six-year LiGHT paper, but the printed DOI points to another paper.
- **Figures that differ from the publication:** OptiLIGHT OG-12 (brochure "6.3x" glands; study gives about 4.7x lower lid, 9.6x upper lid), OG-25 ("48% OSDI" is within-arm and equal to sham), OG-4 and OG-5 (source says 97% and 82%); OptiLIFT OL-9 and OL-13 (study used 5 minutes per side); OptiPLUS OP-3 (study gives +107.8% and +192.1% by lid, clear meibum 54.8% and 64.5%) and OP-5 (2.5 + 2.5 minutes per side); triLIFT TL-3 (3-8% per decade, not 3-5%) and TA-10 (37 patients, not 9); Digital Duet DD-9 (5x is a 3-year count); Optima IPL OI-6 (published +93% / +425% TBUT and -55% SPEED); AcuPulse AP-5 (18 to 24 months, under 30%).
- **Wording stronger than the paper:** Digital Duet DD-1, DD-3, DD-5, DD-6, DD-10, DD-11, DD-18 ("#1", "leading", "eliminates", "superior"); OptiLIGHT OG-7 and Optima OI-2, OI-3 (Lemp: 86% showed signs of MGD, not "caused by"); AcuPulse AP-8 and AP-17.
- **Studies of a different device:** triLIFT rows resting on TriPollar, Maximus, Legend or the earlier Lumenis muscle-stimulation device; OptiPLUS OP-4, OP-7, OP-10, OP-12; UltraPulse rows where the paper used the Encore. Each row names the device.
- **Not openable:** several papers are closed access or behind publisher bot checks (for example the TFOS DEWS II epidemiology report, Lemp 2012, Kass 2002, Jie 2019, Damji 2003). Those rows stay `needs review` and say what was tried.
- The five flags and the citation notes below are from the 2026-09-16 pass and still stand; see each product file's Notes for anything added to them.

## Highest-priority flags

These are worth a human/regulatory look before the next round of material revisions, independent of the rest of the library:

1. **OptiLIGHT deck, slide 4 (OG-4, OG-5):** rechecked 2026-09-16. The source is valid (a 2008 Gallup poll reported by The Ophthalmologist) but the deck misquotes it: the source gives **97%** frustrated and **82%** wishing for something more effective. The "72 percent" in the link is a separate artificial-tears statistic. Correct the figures rather than the citation.
2. **OptiLIGHT trifold, p.2 (OG-12):** the "6.3x more expressible glands" figure does not match the headline numbers in its likely source paper (which computes to about 4.7x); the "2.7x tear breakup time" figure in the same claim does match.
3. **OptiLIFT deck + brochure (OL-1) and OptiLIGHT deck + trifold (OG-1):** each product has two current materials stating different numbers for what reads as the same underlying claim (muscle loss per decade; Americans with dry eye disease).
4. **OptiLIFT (OL-8):** good news — the deck's "data on file, manuscript under preparation" study has since been published (Chelnis & Chelnis, Clin Ophthalmol 2025) and its published figures support the deck's claims. The deck's citation should be updated to the published reference.
5. **Both products' "2.2-fold" claim (OL-4):** cited to the same paper in both OptiLIFT and OptiLIGHT materials; this review could not locate that specific figure in the paper's available content.

## Citation hygiene

- PubMed IDs **31126737**, **23899413** and **20399933** do not support dry eye adherence, patient burden or cost claims. Checked 2026-09-16: the first two resolve to unrelated cardiology and hearing papers and the third returns no record. Use OG-17 (White et al. 2019) and OG-6 (Yu et al. 2011) instead.
- No public source was found for "90% of patients quit drops within a year" or "over 70 clinical studies" for OPT; see OG-17 and OG-8.

## Next steps

1. Have Ted/Nicholas or the relevant regulatory owner confirm the flags above, starting with items 1 and 2.
2. Extend this library to other product lines and materials as they're reviewed — one new `<product>.md` file per product, linked from this index.
3. Where a `needs review` entry is resolved (source confirmed, number corrected, or citation fixed at the source-material level), update its Status and Qualifications rather than deleting the row, so the review history stays visible.

