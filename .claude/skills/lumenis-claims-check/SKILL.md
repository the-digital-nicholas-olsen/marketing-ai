---
name: lumenis-claims-check
description: Check every clinical claim, statistic and product description in a Lumenis piece (flyer, deck, email, page, script) against the regulatory do's and don'ts and the claims reference library, and list what is supported, what needs a source or rewording, and what required safety text is missing. Use before any marketing piece goes to a KOL, sales or customers. It never approves a claim.
---

# Claims check

Owner: Kaelyn (claims library), with Ted for copy fixes.
Status: draft procedure, written 2026-10-27; not yet run on a live piece. Review required.

The [regulatory files](../../../assets/regulatory/README.md) say what each product may and may not be called and what safety text must go with it. The [claims library](../../../assets/claims-reference/index.md) records each statistic with its source and status. This skill walks a piece through both, in that order, so nothing unsupported reaches a KOL, a rep or a customer. It finds problems; legal and regulatory review still approves.

## Inputs

- The piece: file or link (PDF, PPTX, HTML, copy text). Read all of it, including slide notes, chart labels, footnotes, image text and alt text.
- Its market and audience (for example US eye care professionals). Claims and indications differ by market.
- The products it mentions.

## Procedure

1. **List every checkable statement,** each with where it appears (page, slide, section):
   - product descriptions and benefit lines ("treats…", "the first…", "clinically proven…");
   - statistics, percentages, patient counts, durations, study results;
   - comparisons with other treatments;
   - safety or comfort statements ("painless", "no downtime").
   A KOL's own experience ("in my practice I've seen…") is still listed; note it as personal experience so the reviewer can decide how it must be framed.
2. **Regulatory first,** for every product mentioned, each against its own file. Never borrow another product's wording.
   - Words or phrases on the don't list → **fail**, with the permitted wording if the file gives one.
   - A "do" that carries an asterisk needs its reference on the piece.
   - Indication-for-use and warning text the channel requires → present and complete, or **missing**.
3. **Then the claims library** for each statistic and study result:

   | What you find | Result |
   |---|---|
   | A `confirmed` row whose claim, market and audience match, **and** the piece keeps the row's material qualifications | **Supported**: cite the row ID and its reference |
   | A `confirmed` row that matches, but the piece drops or overstates a qualification | **Fail**: say which qualification must be restored |
   | A matching row marked `needs review` | **Blocked**: give the row's open issue |
   | A matching row, but the number or wording differs | **Fail**: give the library's figure and wording |
   | A row that's superseded | **Fail**: use the current row |
   | No row | **Unsupported**: needs a source added to the library (by its rules) or the claim removed |

   **Qualifications count as much as the number.** Read the row's Qualifications cell and any linked note in the product file's "Notes and flags" section. Material limits (the population studied, the comparison basis, the timeframe, a single practice's reported experience, data on file) must survive in the piece's wording or its footnote. A matching headline figure and citation alone doesn't pass.
4. **Check the references** on the piece itself: every supported claim has its citation on the piece or a references slide, matching the library row.
5. **Write the report.** Don't rewrite the claims yourself unless asked; give the reason and the library's wording so the content owner can fix it.

## Report

```
Claims check: <piece name> · <market/audience> · <date>
Supported (5): S3 "…" → <row ID> (its reference) ...
Fail (1): slide 7 "painless" is on the OptiLIFT don't list; use "…"
Unsupported (1): slide 9 "92% of patients…" no library row
Blocked (1): flyer "…" → <row ID> is needs review (source not located)
Missing safety text: US indication for OptiLIFT on the closing slide
Ready for legal/regulatory review: no
```

The piece moves on only when there are no fails, unsupported or blocked items and no missing safety text. Save the report in the campaign's project folder and link it from the Smartsheet row.

## Boundaries

- A pass here means the claims match our own records. It is not legal, regulatory or medical approval.
- Never add a library row to make a claim pass. New rows follow the claims library's own rules and review.
- If the regulatory file and the claims library disagree, stop and ask the regulatory owner; record it in the product file's open questions.
