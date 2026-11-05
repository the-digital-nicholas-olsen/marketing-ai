---
name: lumenis-mimeo-order-check
description: Check whether customers on the weekly Mimeo kit lists were actually ordered and shipped by Mimeo, then get each FedEx tracking number and a delivery-proof screenshot. Read-only in Mimeo. Use for Vision or Aesthetics when a rep says a customer never got their welcome or starter kit, when someone asks if a Mimeo kit was placed, shipped or delivered, or to audit which customers on recent Mimeo kit lists were never placed.
---

# Mimeo kit order check

Owner: marketing operations (EJ Roman).
Proposed reviewer: Nicholas Olsen.
Status: draft procedure, 2026-11-05. Mimeo screens observed 2026-11-04 and FedEx tracking pages 2026-11-04; recheck them before relying on the steps. The matching script was tested on four weekly lists (about 110 customers).

Each week marketing turns new-system orders into a kit list in the Mimeo upload format (the "Final" list) and emails it to the Mimeo account rep. **The Mimeo rep places every order.** Nobody at Lumenis places them. Most kits arrive. The ones that don't usually failed because a name was left off a list or the order was never placed. Reps escalate when a customer says the kit never came. This skill answers three questions per customer:

1. **Did we send them to Mimeo?** Which weekly list were they on?
2. **Did Mimeo place and ship it?** The Mimeo order # and status.
3. **Can we prove it?** The FedEx tracking #, delivery date and a screenshot.

**Applies to:** kit orders from the weekly Mimeo kit lists, Vision and Aesthetics.

**Not for:** placing or changing Mimeo orders ([print-order staging](../../../guides/mimeo-print-ordering.md), [Tradeshow in a Box](../../../guides/mimeo-order-tsiab.md)).

## What you need

- The user signed in to my.mimeo.com in the browser you are driving. The user signs in; an AI never handles the password.
- The Final lists to check. They are kept outside this repository, usually in dated `Mimeo Kits <M.D.YYYY>` folders. Ask the user where theirs are.
- Python 3 with `openpyxl` for the matching script.
- For a single lookup: the customer's name. The practice name or sales order # also helps.

## Rules

1. **Read only in Mimeo.** Never click **Cancel Order**, **Re-Order** or **Reorder**. They sit next to the links you need, and each one changes a real order.
2. **"Not found" means not found in the account checked.** Aesthetics kits (Stellar, Splendor, FoLix, UltraPulse, AcuPulse) did not appear in the shared Lumenis Mimeo account when this was written and may be placed under another account. Report "not found in the Mimeo account checked" and recommend confirming with the Mimeo rep before telling a sales rep it was never sent.
3. **Don't judge lateness by a fixed rule.** Turnaround depends on Mimeo's kit stock; a short component can delay an order for weeks. Report days since the list date.
4. **Draft, don't send.** You may draft a note to the Mimeo rep. The user sends it.
5. **Keep results out of this repository.** Reports and screenshots contain customer names and addresses, so save them next to the lists, never in Git.

## 1. Pick the list file

In each dated folder, use the first file that exists:

1. `Mimeo_Kits_<date>_Final_Deduped.xlsx`. This is what was sent; the plain Final file repeats customers from earlier weeks.
2. `Mimeo_Kits_<date>_Final.xlsx`
3. The **Mimeo Final** tab of a `Mimeo_Kits_Combined_*.xlsx` workbook

Columns: `referenceData` (kit), `firstName`, `lastName`, `email`, `street`, `city`, `stateOrProvince`, `postalCode`, `company`, `telephoneNumber`, `country`, `salesOrder`. The list date comes from the folder name. Expect `Dr.` in `firstName` with the full name in `lastName`, and suffixes such as `, OD`.

## 2. Get Mimeo's recipients

1. Open my.mimeo.com → **Orders** → **Order History By Recipient** (the URL ends `section=orderHistoryByRecipient`).
2. **Single lookup:** type the last name in the search box and click **Go**, with the period set to **all**.
3. **Audit:** set the period to cover the oldest list and **Show** to 100. On each page, run [extract_recipients.js](scripts/extract_recipients.js) in the page and save all rows to a tab-separated file with the header `lastName  firstName  orderId  submitted  status`.

The page keeps its page number across searches and period changes, so a new search can open on an empty page 2 that reads like "no orders." **After every search or period change, click pager page 1 before reading.** Each click reloads the page; wait about 2 seconds. Before calling a customer missing, also search the practice name or part of the surname.

## 3. Match the lists (audit)

```bash
python -I scripts/match_orders.py --mimeo recipients.tsv --out <work-folder>/mimeo-order-check-<YYYY-MM-DD>.xlsx "<Mimeo Kits folder>" ...
```

[match_orders.py](scripts/match_orders.py) matches each customer by name: title-tolerant, and both name words must agree when both names have two or more. It counts only Mimeo orders submitted on or after the list date minus 3 days, so an older order to the same person doesn't count. It writes a **Not Found** tab, with columns for the Mimeo rep to answer, and a **Found** tab, then prints counts per list. Spot-check each Not Found customer with a single-lookup search.

## 4. Tracking and proof

1. In the recipient view, click the customer's Mimeo order #, open the **Order Tracking** tab and wait about 3 seconds.
2. Run [extract_tracking.js](scripts/extract_tracking.js). One order often covers 10–30 recipients, so pick the customer's row by name.
3. Open `https://www.fedex.com/fedextrack/?trknbr=<tracking #>`. If a cookie banner appears, choose **Reject optional cookies**. Read the status, delivery date and signer from the page text.
4. Screenshot the FedEx page and save it to a `Proof` folder next to the list as `<LastName>_<SalesOrder>_<tracking #>.jpg`. The **Obtain proof of delivery** button downloads a signed PDF. Use it only when the user approves the download.
5. Record the results in the Found tab. For many customers, write a tab-separated file with `salesOrder  lastName  tracking  fedexStatus  delivered  proofFile` and rerun the script with `--tracking <file>`.

In an audit, collect proof for escalated or undelivered customers, or when asked. Not every delivered order needs one.

## Report

- **Single lookup:** the list it was on, the Mimeo order # and status, the tracking # with its FedEx link, the delivery date, and the proof file.
- **Audit:** counts per list (customers / found / delivered / not found), each Not Found customer with sales order # and days since the list date, and the workbook path. If any are missing, offer to draft a note to the Mimeo rep with the Not Found tab attached.

## Mistakes to avoid

- Reading the results right after a search without resetting to page 1. This produces false "not placed" answers.
- Matching on last name alone. Two different customers with the same surname look like a delivered kit.
- Counting an older Mimeo order to the same person as this week's kit.
- Using the non-deduped Final file, which double-counts customers from earlier lists.
