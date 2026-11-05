// Run on a Mimeo Order Details page AFTER clicking the "Order Tracking" tab and waiting ~3s.
// Returns one entry per recipient: name/address text, delivery window, tracking # and FedEx URL.
(() => {
  const order = (document.body.innerText.match(/Order:\s*([\d-]+)\s*\(([^)]+)\)/) || []);
  const status = (document.body.innerText.match(/Status:\s*(\w+)/) || [])[1];
  const out = [];
  for (const a of document.querySelectorAll('a')) {
    if (!/fedex|ups\.com|usps/i.test(a.href)) continue;
    const tr = a.closest('tr');
    const cells = tr ? [...tr.cells].map(c => c.innerText.trim().replace(/\s+/g, ' ')) : [];
    out.push({ recipient: cells[0] || '', window: cells[2] || '', tracking: a.innerText.trim(), url: a.href });
  }
  return { orderId: order[1], submitted: order[2], status, recipients: out };
})()
