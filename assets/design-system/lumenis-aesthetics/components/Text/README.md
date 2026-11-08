One component for every role in the type scale: label, body, lead, number, display, hero, chapter, title, tracker and foot.

```js
h(LumenisAesthetics.Text, { role: 'lead' }, 'We win when proof, the menu and the partner arrive together.')
```

**You provide.** `role` (default `body`), the text as children, and optionally `tone` (`ink`, `grey`, `field`, `field-ink`, `on-field`, `inverse`) and `as` (the HTML tag).

**Rules.** Sizes never drift: if text doesn't fit, cut words or split the page. Two text colors only: `ink` for what matters, `grey` for what supports it. Use `tone: 'field'` only at 56px and up (number, hero, chapter), never for labels or body.
