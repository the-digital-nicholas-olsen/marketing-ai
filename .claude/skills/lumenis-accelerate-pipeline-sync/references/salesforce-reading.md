---
title: Reading Salesforce opportunities for pipeline sync
summary: Link types, batched UI API reads from a logged-in Lightning tab, searches and page fallback.
status: draft, tested 2026-09-14
owner: marketing operations
reviewed: 2026-09-14
---
# Salesforce reading

Use the user's existing Lightning session through Claude in Chrome. Read only; never edit Salesforce records here. If a login page appears, stop and ask the user to sign in.

## Link types

URL-decode the cell first; Outlook Safelinks carry the real address in `url=`. Then extract the record ID with `/\b(006|001|0Q0)[A-Za-z0-9]{12,15}\b/`.

| Prefix | Object | Handling |
|---|---|---|
| `006` | Opportunity | Read directly |
| `0Q0` | Quote | Read `Quote.OpportunityId`, then the opportunity |
| `001` | Account | List the account's opportunities and pick the open one matching product and quarter |

Wrappers observed: `protect.checkpoint.com/v2/.../___<url>___...`, `*.safelinks.protection.outlook.com/?url=<encoded>`, `native/bridge.app?...#/lightning/r/Opportunity/<id>/view`, and trailing parameters such as `?0.sdtd=1`. Replace each with `https://<org>.lightning.force.com/lightning/r/Opportunity/<id>/view`.

## Batched read

Run in a Lightning tab of the org with the browser JavaScript tool. The UI API accepts the page session. REST SOQL (`/services/data/vXX.X/query`) returned `401 INVALID_SESSION_ID`, so do not use it.

```js
const ids = [/* 18-character opportunity IDs */];
const fields = ['Name', 'Amount', 'StageName', 'IsClosed', 'IsWon', 'AccountId'].map(f => 'Opportunity.' + f).join(',');
const out = {};
await Promise.all(ids.map(async id => {
  const r = await fetch(`/services/data/v60.0/ui-api/records/${id}?fields=${fields}`, {credentials: 'include'});
  const j = await r.json();
  out[id] = r.ok ? Object.fromEntries(Object.entries(j.fields).map(([k, v]) => [k, v.value])) : `HTTP ${r.status}`;
}));
out
```

Text values come back HTML-escaped (`&amp;`, `&#39;`); decode before comparing names. For a quote, request `Quote.OpportunityId,Quote.Name` from the same endpoint.

## Search

The global search bar was unreliable through automated clicks, and URL-based search redirected home. Use lookup search instead:

```
/services/data/v60.0/ui-api/lookups/Quote/OpportunityId/Opportunity?q=<term>&searchType=Search&pageSize=25
```

- An `OPP-` number returns its opportunity exactly.
- For practices, try spelling variants, the legal or "dba" name and the buyer's name. Opportunity names usually follow `<Account> - Qn - <Products>`; confirm quarter and product against the row.
- The account can differ from the practice name (legal entity, parent group, rental or distributor company). Report it as a judgment call rather than rejecting it.

## Account opportunities

```
/services/data/v60.0/ui-api/related-list-records/<AccountId>/Opportunities?fields=Opportunity.Name,Opportunity.StageName,Opportunity.Amount,Opportunity.CloseDate&pageSize=50
```

Use it to resolve Account links and to check whether a closed-not-won deal was superseded by a Won deal.

## Page fallback

If the API calls fail, open each opportunity, wait for the highlights panel and read Amount and Stage. Retry once, then mark the row not found.

## Stage values observed

`1 – Discovery` and `2 – Qualification` (en dash), `3 - Mobilization/Progression`, `4 - Validating/Resolving`, `5 - Executing Deal/Selected`, `6 - In House`, `Won`, `Abandon`, `Closed Abandon - Auto closed`. Write stages exactly as returned; the formula reads only the first character.
