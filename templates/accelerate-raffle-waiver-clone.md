# Accelerate raffle waiver clone

Owner: Kaelyn (event logistics).
Status: draft procedure, written 2026-11-06 after making the Scottsdale and Miami waivers this way. Review required.

Use this to make the raffle waiver form for an upcoming Accelerate by copying the last event's form in Jotform. The waiver wording stays the same. Only the event name, location and state law change.

As soon as each new form passes its read-back, its raffle QR sign is rebuilt with that form's link in the same sitting. Nobody has to send the link on.

This is not the procedure for a new or rewritten waiver. If legal or compliance changed the wording, the new form has to be built from the approved document, not copied from an old one.

## Inputs

- **The event city and state,** for example Scottsdale, Arizona.
- **The source form:** the most recent Accelerate raffle waiver that is **not** the kiosk version. Ignore any form with "Kiosk" in its title. If you can't tell which form is the current one, stop and ask Kaelyn.
- **Jotform access** to the Lumenis account. It's a HIPAA account, so you sign in and edit forms on `hipaa.jotform.com`. The public link Jotform reports for each form is `https://form.jotform.com/<form ID>`. Every person signs in with their own login. An AI never types the password.
- **The raffle QR sign master and Node.js,** for the sign built in step 6. See the [Accelerate raffle QR sign](accelerate-raffle-qr-sign.md#inputs) inputs.

Keep form links, submissions and finished signs in Jotform and the event's work folder, not in Git.

## What changes and what doesn't

| Part of the form | Change it to |
|---|---|
| Form title and page title | `Accelerate Raffle Waiver <City>`. Remove "Clone of", "Kiosk", "Draft" or "Superseded" |
| Location line under the main heading | `Accelerate • <City>, <State>` |
| "To the fullest extent permitted by \<State\> law" (6. Release of Claims) | The event's state |
| "the laws of the State of \<State\>" (10. Governing Law) | The event's state |
| Closed-form message (shown only when the form is closed) | A neutral line such as "This form is currently closed." Never another event's name |
| Form status | Enabled. A copy of a disabled form starts out disabled |

Change nothing else. That means none of the eligibility, compliance, release, publicity, privacy or certification wording, and none of the fields (name, company, email, phone, signature, date). If something else looks wrong, stop and ask Kaelyn rather than fixing it in the copy.

Swapping the state is the team's standing decision for each event's location. It isn't a legal review. If legal says a waiver must use a specific governing-law state, follow legal.

## Procedure

1. **Find the source form.** In Jotform, go to My Forms and search for "Raffle Waiver". Pick the latest non-kiosk Accelerate waiver.
2. **Clone it once for each event.** Open the form's menu, choose **Clone**, and repeat for each upcoming event. Each copy starts out named "Clone of …".
3. **Make the changes in the table above** in each copy:
   - Title: Form Builder → Settings → Form Settings → Title.
   - Location line: click the main heading and edit its subheading.
   - State law: edit the two text blocks under "6. Release of Claims" and "10. Governing Law". Replace the state name only.
   - Closed-form message: in Settings → Form Settings, find the message shown when the form is closed or has reached its limit.
   - Status: Settings → Form Settings → Form Status → Enabled.
4. **Check the emails.** A clone copies the source form's notification and autoresponder emails (Settings → Emails). Confirm who gets the notification and who the autoresponder comes from for this event. Turning emails on or changing who receives them is a decision for the event owner.
5. **Read it back.** Open each new form's public link (`https://form.jotform.com/<form ID>`) and confirm:
   - The title and location line name the new event.
   - Both legal sections name the new state.
   - The old city and state appear nowhere on any page.
   - The form opens without a "closed" message.
6. **Update the QR sign straight away.** As soon as a form passes step 5, make that event's raffle sign with the [Accelerate raffle QR sign](accelerate-raffle-qr-sign.md) procedure, using the public link you just read back. Don't wait for anyone to send the link, and don't build a sign for a form that failed step 5. Save the sign as `<city>-raffle-qr-sign.pdf` and the link in the event's work folder or Key Info. A person still scans the proof with a phone before it's printed.

Don't submit test entries to a live waiver unless the event owner asks. A test entry counts as a submission and has to be deleted.

## For an AI with browser access

An AI can do steps 2–6 from the person's signed-in Jotform tab. It calls Jotform's own API on the same site (for example `POST /API/form/<id>/clone`, `POST /API/form/<id>/properties` and `POST /API/form/<id>/question/<qid>`), using the browser session and no API key. It must:

- Ask which source form to use when more than one could be the current waiver.
- Change only what the table above lists, replacing text in place, never retyping the legal text.
- Read every changed field back afterwards and search the whole form for the old city and state.
- Report the copied email settings to the person instead of changing them.
- Build each form's QR sign as soon as that form passes the read-back, in the same run, without asking for the link. Take the link from the form's `url` (`GET /API/form/<id>`), run the QR sign script on the master, then decode the finished sign's QR and confirm it matches that link exactly. Report where the sign was saved and that it still needs a phone scan.

## Good result and common mistake

Good: two new forms named for their events, each naming its own city and state in the heading and both legal sections, enabled, with the old event's city appearing nowhere. Each has a QR sign built from the master whose code opens that form.

Mistake: cloning the kiosk version. Mistake: leaving the "Clone of" title, the old city in the heading, or the old state in one of the two legal sections. Mistake: leaving the copy disabled because the source was disabled. Mistake: waiting for someone to send the link before making the sign, or building a sign for a form that hasn't passed the read-back.

## Source and review

Source: the Accelerate Scottsdale and Miami waivers, made 2026-11-06 by cloning the non-kiosk Nashville waiver. The sign step follows the Scottsdale sign, built the same day from its new form's link. Proposed subject reviewer: Kaelyn. GitHub approval isn't legal approval of the waiver, the Official Rules or the governing-law choice.
