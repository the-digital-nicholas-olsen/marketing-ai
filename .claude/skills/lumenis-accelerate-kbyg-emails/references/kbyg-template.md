# KBYG email template

`{{…}}` fields come from Smartsheet (or the requester, where noted). `[[…]]` blocks repeat or appear only when they apply. Keep the blank lines: there's one between every schedule entry and every bullet, because the emails are pasted as plain text and the spacing is what makes them scannable.

```
SUBJECT: Know Before You Go — Your Accelerate {{City}} {{Year}} Schedule
TO: Dr. {{First}} {{Last}}

Hi Dr. {{Last}},

We're excited to have you with us at Accelerate {{City}} {{Year}}, {{Event dates}} at the {{Venue}}. {{One warm sentence about their part in the weekend. If they carry several sessions, acknowledge it.}} We're grateful you're joining us.

Below is everything you need before you go: your session schedule, when we need you onsite, where your deck links go and a few logistics.

WHEN WE NEED YOU

Please plan to be onsite at the {{Venue}} and ready to go by {{earliest commitment time}} on {{Day}}, {{Date}}, for {{what it is, e.g. our presenter review}}.

Check-in opens at {{check-in time}} in {{check-in location}}, and the welcome reception begins at {{reception time}}. We'd love to see you there, but you're not needed until your first session at {{earliest commitment time}} on {{Day}}.

[[Only when they're in a new or replacement session:
A NEW SESSION: {{SESSION NAME IN CAPS}}

"{{Session name}}" is new to the Accelerate lineup this year. It takes the {{Day}} {{time}} slot that the online agenda still lists as "{{replaced session}}."

We'll review it together {{where}} at {{time}} on {{day}}. {{Prep expectation from the requester, e.g.: There's nothing new to learn or prep for: the session remixes presentations you already know, so it's all material you're familiar with.}}
]]

YOUR SESSION SCHEDULE

{{DAY IN CAPS}}, {{DATE IN CAPS}}

[[One entry per commitment, in time order, blank line between entries:
{{Start}} – {{End}} — {{Session}}: {{Tagline from the agenda page}} (with Dr. {{co-presenter}} and Dr. {{co-presenter}})
Room: {{Room Assignment}}
Deck: [ADD DECK LINK — {{Session}}]
]]

[[Hosting/MC entry: no Deck line:
{{Start}} — {{Session}}: {{Tagline}}. You'll MC and introduce {{speaker, title}}.
Room: {{Room Assignment}}
]]

THE REST OF {{TRACK POSSESSIVE, e.g. EYE CARE'S}} {{CITY IN CAPS}} AGENDA

[[One bullet per item they're not in, in time order, blank line between bullets:
- {{Day}}, {{time}}: {{item}} in {{room}}.
]]

- {{Last day}}: {{closing items}}. You have no assigned sessions {{day}}, so please join whatever interests you.

A FEW LOGISTICS

- Venue: {{Venue}}, {{Venue Address}}.

- Check-in: {{check-in location}}, opens {{check-in time}} {{day}}.

[[- Parking: {{Valet Info}}. (only if Show Details has it)]]

- Please send any final slides or content requests our way ahead of time so we can load and test them before you're on.

- If travel shifts or anything comes up, reach out directly and we'll adjust.

Thank you again for lending us your time and expertise. See you in {{City}}.
```

The email ends on that line. The sender's own signature takes care of the rest.
