---
name: lumenis-accelerate-vp-update
description: Build the two-page Accelerate VP update for one show - one page per division (Aesthetics, Vision) with who has signed up versus who the reps registered, open pipeline, expected value, won deals, customers versus prospects and the products in open deals, plus a show total. Asks which event first. Use when marketing leadership wants a registration and pipeline update for the sales VPs. Reads Smartsheet; produces a designed PDF, or a designed HTML page in any Claude without Python, not records.
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
- To render the pages, one of:
  - **PDF:** a local clone of this repository with Python 3.9 or later and `reportlab` (`python3 -m pip install "reportlab==4.0.9"`).
  - **HTML (any Claude, including Claude on the web or desktop with GitHub connected):** [references/vp-update-template.html](references/vp-update-template.html). It has the same design and the same math as the PDF script. Never print the data as plain text instead.

## Procedure

1. **Find the sheets** by searching for the show's folder name, then confirm all four sheet names with the user in one line. Get each rep approval sheet's permalink (`get_sheet_path`) for the page's link button.
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
7. **Write the show file** (format below). Then render it the first way that works:
   - **PDF**, when you can run Python in a clone of this repository: save the show file in the show's project folder, in a `vp-update` subfolder, and run `python3 scripts/build-accelerate-vp-update.py <show>.json <show>-vp-update.pdf`.
   - **HTML**, everywhere else: copy [references/vp-update-template.html](references/vp-update-template.html) exactly and replace only the JSON inside `<script id="show-data">` with the show file. Don't rewrite the layout, styles or script. In Claude on the web or desktop, show it as an HTML artifact. Otherwise save it as `<show>-vp-update.html` next to the show file. To make a PDF from it, open it in a browser and print to PDF (one page per division).
8. **Check the result.** Open or render both pages (for HTML, look at the artifact or open the file). Make sure nothing overlaps, that each page's button opens its own division's sheet, and that the people, account and pipeline figures the script prints match your counts from step 3. If the rep sheets' total open pipeline doesn't match what pipeline sync reported, say why.
9. **Report back** with the PDF, artifact or HTML file, two lines per division (sign-ups, pipeline without a sign-up, largest gap), and the matching judgment calls. Don't send the PDF to the VPs; marketing leadership does that.

## Show file

```json
{"event": "Accelerate Q4 Miami", "as_of": "Nov 4, 2026", "divisions": [
  {"division": "Aesthetics", "vp": "<first name>", "sheet_url": "<AES rep approval permalink>", "notes": [], "accounts": [
    {"name": "<practice>", "rep": "<rep>", "signed_up_people": 2, "not_signed_up_people": 0,
     "amount": 120000, "stage": "3", "status": "open", "products": ["Stellar M22"]}]},
  {"division": "Vision", "vp": "<first name>", "sheet_url": "<VIS rep approval permalink>", "accounts": []}]}
```

- `signed_up_people`: people who filled in a form for this account.
- `not_signed_up_people`: people the rep listed who haven't filled in a form.
- `status`: `open`, `won`, `closed`, `none` or `check`.
- `stage`: the first digit, for open deals only.
- `amount`: a number, never a currency string.
- `sheet_url`: the division's rep approval sheet permalink. It becomes the **Open rep approval sheet** button at the top right of the page. Viewers still need Smartsheet access to that sheet. Leave it out and the button doesn't appear.
- `notes`: optional extra bottom-line sentences, at most one per division. Use it for something the figures can't show, such as a show date change.

The script and the HTML template work out every total, the bottom line, the customers versus prospects split, the product counts and the three largest open deals with nobody signed up.

## What each page shows

| Block | Definition |
|---|---|
| Prospect signed up | The prospect filled in the flight or non-flight form themselves. An account counts as signed up if anyone from it did. |
| Rep registered only | On the rep approval sheet, no form yet: only the rep has registered them. People: every listed person without a form. Accounts: nobody from them has a form. |
| Sheet link | A button at the top right of each page opens that division's rep approval sheet in Smartsheet, so a VP can check any row. |
| Colors | One secondary color per page from the Lumenis Corporate palette: triLift rose gold for Aesthetics, OptiLIGHT blue for Vision. The show total band is Lumenis black. |
| Open pipeline, expected value | Open deals at stages 1-6. Expected value uses the pipeline sync stage rates. |
| Customers versus prospects | Customer = the account's deal is Won. Prospect = an open deal, or no open deal. |
| Products in open deals | Number of open deals naming each product, with their pipeline. Product totals overlap. |
| Show total | Both divisions: accounts and people signed up versus rep only, open pipeline and expected value. |

## Boundaries

- Read-only in Smartsheet and Salesforce, except when the user approves a pipeline sync run.
- The show file, the PDF and a filled-in HTML page contain practice names and pipeline values. They stay in the project folder or the user's Claude conversation, never in this repository or a public pull request. The template in this repository holds invented example data only.
- Keep `references/vp-update-template.html` and `scripts/build-accelerate-vp-update.py` in step: a change to the layout, wording or math goes into both in the same pull request.
