# Vision KOL invoice filing (draft)

- Title: Filing a KOL honorarium invoice after a webinar or event
- Owner / proposed reviewer: Kaelyn (Vision event marketing); finance steps reviewed by the finance contact; maintainer @the-digital-nicholas-olsen.
- Status: draft, written 2026-10-27 from the Vision webinar playbook session. Not yet run by an agent.
- Applies to: US Vision Marketing KOL honoraria (webinars first; Accelerate and trade show KOL payments may follow the same path once confirmed). Not Aesthetics or Hospital.
- Use this when: a KOL's invoice arrives after the event (webinar step P11, around T+14).

## Required inputs

- The invoice (PDF), usually a reply to the invoice request from [KOL comms](../../../.agents/skills/lumenis-kol-comms/SKILL.md).
- The campaign's Smartsheet rows: honorarium amount, PR number (K7) and PO number (K8).
- The project folder's `Invoices/` subfolder in the shared work folder.
- The budget line item for this KOL payment in Smartsheet, and the team's budget dashboard.
- Who receives invoices for payment in finance. This is recorded in the internal guide, not here.

Invoices, amounts, payee details, PR and PO numbers stay in Smartsheet and the shared work folder. None of them belong in this repository.

## Procedure

1. **Check the invoice against the records** before filing it:

   | Check | Pass when |
   |---|---|
   | Payee | Matches the vendor on the purchase requisition (the KOL, or their practice) |
   | Amount | Equals the approved honorarium on the requisition and PO |
   | PO number | On the invoice, matching K8 |
   | Description | Names the event and date |
   | Payment details | Present (remittance address or the details finance needs) |

   A mismatch stops filing: draft a short reply to the KOL asking for a corrected invoice, for Kaelyn to send.
2. **Save the invoice** to the project's `Invoices/` folder, named `<YYYY-MM-DD> <KOL last name> invoice.pdf` (the invoice date). Never overwrite a file; add `-2` for a corrected invoice.
3. **Attach it to the budget line item** in Smartsheet. If the connector can't attach files, list it as a manual step for Kaelyn and carry on with steps 4 and 5; step 6 waits for it.
4. **Email finance:** a draft to Derek and the finance contact with the invoice attached, the PR and PO numbers, the amount and the event. Kaelyn sends it.
5. **Update actuals:** set the line item's actual cost to the invoiced amount and mark it as invoiced, using the budget's existing columns; refresh the budget dashboard if it doesn't update itself.
6. **Update the webinar's rows:** put the file link in Deliverable Link. Set P11 to Complete only once all of these are confirmed: the invoice is saved, it's attached to the line item, the finance email has been sent (by Kaelyn) and actuals are updated. Until then set P11 to Ready for Review, or In Progress if an attachment or send is still with Kaelyn, and list what's left in Notes / Blocker. P12 (submitted for payment) stays with Derek.

## Preferred example (fictional)

The invoice for the fictional Dr. Example webinar arrives for the approved amount with the right PO. It's saved as `2027-02-14 Example invoice.pdf`, attached to the line item, actuals updated, and the finance email drafted for Kaelyn. The connector can't attach files, so P11 goes In Progress with "attach invoice to line item; send finance email" in Notes for Kaelyn. When she confirms both, P11 is marked Complete.

## Avoid

- Filing an invoice whose amount or payee doesn't match the requisition and PO. Ask for a corrected invoice instead.
- Sending the finance email or marking the payment submitted on Kaelyn's or Derek's behalf.
- Copying invoice details into public issues or pull requests.

## Missing information and decisions

- After Derek, where the invoice goes in finance, and how long payment usually takes (the invoice request email has a placeholder for it).
- Whether the Smartsheet connector can attach files; until confirmed, step 3 may be manual.

Related: [trade show PO-to-budget reconciliation](po-budget-reconciliation.md) audits trade show budgets; this procedure files a single KOL invoice.
