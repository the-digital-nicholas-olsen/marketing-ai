Form fields. Brand spec for forms: Arizona Sans Regular, no caps, 16px / 22.4px leading.

```jsx
<Input label="Email" type="email" placeholder="name@clinic.com" />
<Input label="Clinic" variant="underline" />
<Select label="Specialty" placeholder="Select" options={['Aesthetics','Vision']} />
<Textarea label="Message" />
```

Square corners, black labels above the field, 1px neutral border. Lead forms are one column with the heading and intro inside the same container; keep the select caret visible (right padding is built in).
