---
name: lumenis-kol-thank-you
description: Run the post-event KOL thank-you process for US Vision Marketing. Draft a handwritten-style card for each KOL, check the draft, get sender approval before staging in Handwrytten, and obtain final batch approval before sending. Use after an event, for example "run KOL thank-yous for Accelerate Miami".
---

# KOL thank-you cards

Owner: Kaelyn (Vision event marketing); proposed reviewers Nicholas and Legal for the compliance rules.
Status: draft procedure, written 2026-10-30 and not yet run from this repository.
Scope: US KOLs (key opinion leaders) after a US Vision Marketing event. Not Aesthetics or Hospital.

Thank each KOL with a robot-pen card sent through Handwrytten and signed by the Lumenis Vision team. Cards only: no gifts of any kind.

**Two approvals are required in the conversation.** The sender approves the text before it goes to Handwrytten. After staging, a person explicitly approves the final batch before any order is submitted, test orders included. A repository merge authorizes no live operation. The restrictions below are draft operating boundaries pending subject-owner and Legal review, not a determination of legal compliance.

## Inputs

- **Event name.** Ask if it isn't given.
- **KOL names.** Usually pasted by the user. Otherwise look for KOL line items in the event's Master Budget sheet in Smartsheet (for example "Booth Session KOL: Dr. X") and confirm the list with the user.
- **Addresses.** Look up each KOL's practice address online. Say which source each one came from and flag any that are unconfirmed: a missing ZIP, a residential-looking unit or conflicting listings. Never fill a gap silently; ask.
- **Access.** Smartsheet and Handwrytten connectors. Without Handwrytten, return the drafts and stop at step 3. Without Smartsheet, ask the user for the event dates and what each KOL did.

Addresses, messages and order records stay in Handwrytten and the work folder. None of them belong in this repository.

## Procedure

1. **Load the event.** Find it in that year's Event Listing sheet in Smartsheet; if the sheet doesn't exist, ask. Take the start and end dates from the event's Agenda sheet (the "DAY 1" to last-day header rows), because the listing often has no end date. Take what each KOL did from the Agenda's "Speaker / KOL Credentials" column. Refer to every KOL as "Dr. Last Name", even when a full title was pasted. If a KOL isn't on the agenda, ask what they did or write a general card.
2. **Run the compliance check.**
   - Country isn't US: route to Legal and don't draft.
   - Cards only. Never add gift cards, inserts, gifts, food, swag or anything else. If one is requested, stop and flag it.
3. **Draft the cards.** Write one message per KOL, 50–80 words, warm and specific. For a webinar, start from the [P5 handwritten note](../lumenis-kol-comms/references/webinar-emails.md).
   - Name what they did at this event: the session, the topic or a moment.
   - Close with a short sign-off (for example "With gratitude,") and "The Lumenis Vision Team".
   - No product claims, pricing, sales asks or enclosures.
   - If a KOL already got a card for a recent event, vary the wording.
4. **Approve text, then stage.** Show each draft to the sender and obtain explicit text approval before uploading it to Handwrytten, consistent with [KOL comms](../lumenis-kol-comms/SKILL.md). Resolve missing or conflicting addresses before staging the affected card. Then add only approved text and confirmed recipients to the basket (`basket_add_order`). Staging does not authorize sending. Before adding, inspect the basket and existing orders for this event to avoid duplicates; flag uncertain prior orders rather than retrying.
   - Save each KOL as a recipient first: `list_recipients` to reuse an existing one, otherwise `add_recipient`.
   - Card: the custom card "Lumenis Thank You v2". Look it up by name. If it no longer exists, ask before using another.
   - Return address: the saved sender "Lumenis", which is the San Jose office. Confirm the address on the saved sender and pass it explicitly as `returnAddressId`. Never let another office default in.
   - Handwriting: Executive Adam (`hwAdam`) unless the user picks another.
   - Set `dateSend` to a date after the event ends. Handwrytten may move it to the next available date; report the date it actually used.
   - Check the result with `basket_list`. To take a card out, `basket_remove` needs the basket item ID (`basket.id`), not the order ID.
5. **Stop at the approval gate.** Show the staged batch as a table with columns for KOL, address, message and cost, using Handwrytten's current card and postage prices. Include the batch total, actual send date and any KOLs held back with their blockers. Text approval alone does not authorize submitting the order. Stop here until the user reviews and explicitly approves in chat.
6. **Send the approved batch.**
   - Check the account with `get_user` first: credits, and whether it's in test mode. Tell the user what test mode means before submitting.
   - Confirm the basket still holds exactly the approved cards, then submit it (`basket_send`).
7. **Report.** Read back order status and list each card's Handwrytten order ID, recipient and send date. Report anything that failed.

A good result is a sent batch that matches the approved table, with an order ID for every KOL and no KOL left out without an explanation.

## When an input is missing (fictional examples)

- **Successful run.** After a fictional Accelerate, the user pastes Dr. Example's full title and name. The agenda shows a dry eye session, so the agent drafts a 60-word card for "Dr. Example" that names the session and obtains sender approval. Only then does it stage the card and show the final table. The user separately approves the batch in chat; the agent checks `get_user`, submits and reads back the order ID.
- **Incomplete address.** Dr. Sample's listings show two practices with different ZIP codes. The agent flags the conflict with both sources and holds that card out of the basket until the address is confirmed.
- **International KOL.** Dr. Placeholder practices outside the US. The agent doesn't draft a card and tells the user this one goes to Legal.
- **Gift request.** The user asks to add a gift card for Dr. Example. The agent stops and flags it: the card goes out on its own or not at all, pending Legal.

## Boundaries

- US KOLs only until Legal expands the scope.
- One approval covers one batch; never reuse it for a later batch.
- If anything is unclear (missing address, unknown state, unusual request), ask. Don't skip a KOL silently.

## Open decisions for reviewers

- Whether thank-you cards should also go through [Ted's clarity gate](../copy-clarity-gate/SKILL.md), as KOL emails do.
- Whether finishing a card should update the campaign's Smartsheet step (P5 for a webinar).

Resolved: the sender approves card text before it goes to Handwrytten, matching [KOL comms](../lumenis-kol-comms/SKILL.md).
