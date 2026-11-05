// Run on my.mimeo.com "Order History By Recipient" (section=orderHistoryByRecipient).
// Returns the current page's rows as TSV lines: lastName \t firstName \t orderId \t submitted \t status
// plus the pager text so you know whether more pages remain.
(() => {
  const rows = [...document.querySelectorAll('tr')]
    .map(tr => [...tr.cells].map(c => c.innerText.trim()))
    .filter(r => r.length >= 6 && /\d\d-\d{4}-\d{5}-\d{5}/.test(r.join('|')))
    .map(r => r.slice(1, 6).join('\t'));
  const pager = (document.body.innerText.match(/\d+ - \d+ of \d+ items|0 items/) || [''])[0];
  return { pager, count: rows.length, tsv: rows.join('\n') };
})()
