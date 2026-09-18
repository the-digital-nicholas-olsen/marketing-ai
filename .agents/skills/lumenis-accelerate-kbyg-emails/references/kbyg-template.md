# KBYG email template

Fill `{{...}}` fields from the selected Smartsheet event records unless marked as requester-supplied. Include conditional blocks only when the corresponding Smartsheet mapping applies. Preserve the blank lines for plain-text readability.

```text
SUBJECT: Know Before You Go — Your Accelerate {{City}} {{Year}} Schedule
TO: Dr. {{First}} {{Last}}

Hi Dr. {{Last}},

We're excited to have you with us at Accelerate {{City}} {{Year}}, {{Event dates}} at the {{Venue}}. {{Optional requester-supplied personal sentence}} We're grateful you're joining us.

Below is everything you need before you go: your session schedule, when we need you onsite and a few logistics.

WHEN WE NEED YOU

Please plan to be onsite at the {{Venue}} and ready to go by {{earliest commitment time}} on {{Day}}, {{Date}}, for {{recorded commitment purpose}}.

{{Confirmed check-in or reception details, followed by a clear statement of the KOL's first required commitment.}}

[[Only when Smartsheet identifies a new or replacement session and contains the approved preparation note:
A NEW SESSION: {{SESSION NAME IN CAPS}}

{{Approved replacement and preparation details from Smartsheet}}
]]

YOUR SESSION SCHEDULE

{{DAY IN CAPS}}, {{DATE IN CAPS}}

[[One entry per commitment, in time order:
{{Start}} – {{End}} — {{Session}}{{Optional Smartsheet tagline}} {{Optional co-presenters}}
Room: {{Room}}
[[Deck: {{Dropbox view-only link from the Smartsheet KOL-to-deck mapping}} — include only when the mapping says a deck is required]]
]]

[[Hosting or MC entry: omit the Deck line unless the mapping explicitly assigns one]]

THE REST OF {{TRACK POSSESSIVE}} {{CITY IN CAPS}} AGENDA

[[One bullet per applicable Smartsheet agenda item that the KOL is not assigned to]]

A FEW LOGISTICS

- Venue: {{Venue}}, {{Venue address}}.

{{Other confirmed logistics from Smartsheet}}

Thank you again for lending us your time and expertise. See you in {{City}}.
```

The email ends on that line. The sender's signature supplies the sign-off.
