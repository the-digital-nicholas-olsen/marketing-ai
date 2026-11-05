---
name: lumenis-accelerate-vp-update
description: Build the two-page Accelerate VP update for one show - one page per division (Aesthetics, Vision) with who has signed up versus who the reps registered, open pipeline, expected value, won deals, customers versus prospects and the products in open deals, plus a show total. Asks which event first. Use when marketing leadership wants a registration and pipeline update for the sales VPs. Reads Smartsheet; writes a PDF to the project folder, not records.
---

# Accelerate VP update

Owner: Nicholas (marketing operations), for marketing leadership.
Status: draft procedure, first run 2026-11-04 on two Q4 shows. It replaces a five-page registration report with two pages per show. Review required.

The sales VPs want one page each: how many people and accounts are coming, how much pipeline is attached, and where the gaps are. Every figure comes from the show's Smartsheet sheets, so the report can be rebuilt any day before the show.

## Start by asking which event

If the request doesn't name the show, ask one question and wait: **"Which Accelerate do you want the VP update for? (city and quarter, for example Q4 Miami)"**. Don't guess from the calendar. One run makes one show's document. For two shows, run the procedure once per show.

## Inputs

- The Smartsheet connector. The show's folder in the Accelerate events workspace (for example *Q4 Miami Accelerate*) holds four sheets: **AES Rep Approval**, **VIS Rep Approval**, **<City> Flight Registration (AES+VIS)** and **<City> Non-Flight Registration (AES+VIS)**. If one is missing, stop and name it.
- Opportunity Amount and Stage on the rep approval sheets, filled by [pipeline sync](../lumenis-accelerate-pipeline-sync/SKILL.md). If the sync hasn't run today, offer to run it first. Without Salesforce access, use the values already on the sheets and print the date they were last synced.
- The first name of each division's sales VP for the page header. Ask if you don't have it. Never store VP names in this repository.
- Python 3.9 or later with `reportlab` (`python3 -m pip install "reportlab==4.0.9"`, which supports Python 3.9). Without Python, build the same layout as an HTML page and say the PDF script wasn't run.

## Procedure

1. **Find the sheets** by searching for the show's folder name, then confirm all four sheet names with the user in one line.
2. **Read every row** (paginate), with columns limited to the ones you need. Skip placeholder rows (`test`, `fn`/`ln`, `rep name`/`practice`).
3. **Build the account list for each division** from its rep approval sheet. One account per practice:
   - Merge rows that pipeline sync marked `Duplicate` into the account they repeat. Count their people, but count the deal once.
   - Read the status from Opportunity Stage: `1`-`6` = **open**, `Won` = **won**, a closed stage (`Abandon`, `Closed Abandon`, `Lost`) = **closed**, `Unable to find opportunity in Salesforce` = **none**, and a `Check deal:` note = **check**. Check rows count for people and accounts but not for pipeline.
   - The rep's people are the Attendee #1 and #2 names.
4. **Assign each sign-up** (flight and non-flight rows) **to a division by Sales Rep**, using the reps on each approval sheet. The registration Division column is often wrong, so don't use it. A rep on neither sheet: ask.
5. **Match each sign-up to an account,** by person first, then by company:
   - Allow short names and misspellings (Kate/Katherine, a swapped letter), a different company name on the form (a legal entity or a sister practice), and a spouse who registered under their own practice name.
   - Count each person once, even if they filled in both forms or the same form twice.
   - A sign-up whose company matches no account becomes a new account with status **none**.
   - List every alias and company match you made for the user. Don't silently drop anyone.
6. **Tag the products** for each open deal from Product of Interest. Aesthetics: Stellar M22 (Stellar, XPL, ResurFX, Q-switched), triLift, FoLix, UltraPulse, AcuPulse, Splendor X, LightSheer, NuEra Tight. Vision: OptiLIGHT, OptiLIFT, triLift. "Bundle", "Light + Lift" or "OptiLight w/ Aesthetics; OptiLift" = OptiLIGHT and OptiLIFT. A row naming two products gets both.
7. **Write the show file** (format below) in the show's project folder, in a `vp-update` subfolder. Then run:
   `python3 scripts/build-accelerate-vp-update.py <show>.json <show>-vp-update.pdf`
8. **Check the result.** Open or render both pages. Make sure nothing overlaps, and that the people, account and pipeline figures the script prints match your counts from step 3. If the rep sheets' total open pipeline doesn't match what pipeline sync reported, say why.
9. **Report back** with the PDF link, two lines per division (sign-ups, pipeline without a sign-up, largest gap), and the matching judgment calls. Don't send the PDF to the VPs; marketing leadership does that.

## Show file

```json
{"event": "Accelerate Q4 Miami", "as_of": "Nov 4, 2026", "divisions": [
  {"division": "Aesthetics", "vp": "<first name>", "notes": [], "accounts": [
    {"name": "<practice>", "rep": "<rep>", "signed_up_people": 2, "not_signed_up_people": 0,
     "amount": 120000, "stage": "3", "status": "open", "products": ["Stellar M22"]}]},
  {"division": "Vision", "vp": "<first name>", "accounts": []}]}
```

- `signed_up_people`: people who filled in a form for this account.
- `not_signed_up_people`: people the rep listed who haven't filled in a form.
- `status`: `open`, `won`, `closed`, `none` or `check`.
- `stage`: the first digit, for open deals only.
- `amount`: a number, never a currency string.
- `notes`: optional extra bottom-line sentences, at most one per division. Use it for something the figures can't show, such as a show date change.

The script works out every total, the bottom line, the customers versus prospects split, the product counts and the three largest open deals with nobody signed up.

## What each page shows

| Block | Definition |
|---|---|
| Prospect signed up | The prospect filled in the flight or non-flight form themselves. An account counts as signed up if anyone from it did. |
| Rep registered only | On the rep approval sheet, no form yet: only the rep has registered them. People: every listed person without a form. Accounts: nobody from them has a form. |
| Colors | One secondary color per page from the Lumenis Corporate palette: triLift rose gold for Aesthetics, OptiLIGHT blue for Vision. The show total band is Lumenis black. |
| Open pipeline, expected value | Open deals at stages 1-6. Expected value uses the pipeline sync stage rates. |
| Customers versus prospects | Customer = the account's deal is Won. Prospect = an open deal, or no open deal. |
| Products in open deals | Number of open deals naming each product, with their pipeline. Product totals overlap. |
| Show total | Both divisions: accounts and people signed up versus rep only, open pipeline and expected value. |

## Boundaries

- Read-only in Smartsheet and Salesforce, except when the user approves a pipeline sync run.
- The show file and the PDF contain practice names and pipeline values. They stay in the project folder, never in this repository or a public pull request.
