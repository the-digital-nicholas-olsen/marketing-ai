# Checks before handing over

Each check names the slip, why it happens and how to test for it.

**The roster matches the sheet.** It's tempting to trust the public agenda page because it reads well, but it can lag Smartsheet by days. Test: every session in each email appears in the Agenda sheet with that KOL in its Speaker column, with the same time and room.

**"When we need you" is this KOL's time.** Copying one email to make the next carries the first doctor's call time along with it. Test: the time in "When we need you" equals this KOL's earliest Arrival / Mic Time or first session, whichever is earlier.

**Co-presenters are named both ways.** When one email lists a co-presenter, the other doctor's email should list them back. Test: for every shared session, each KOL's email names all the others.

**Every presenting session has a deck slot and every hosting slot has none.** Test: count the `ADD DECK LINK` placeholders. The count should equal the sessions this KOL presents, not counting MC or hosting roles.

**The rest-of-agenda list doesn't repeat their own sessions.** Test: no session in "Your session schedule" appears again under "The rest of… agenda."

**The spacing survives a paste.** Plain text loses anything that isn't a real blank line. Test: there's a blank line between every schedule entry and every bullet, and the email ends on "See you in <City>."

**The deck-link notice is there.** Test: the reply includes the "Before you send: deck links needed" notice, listing every KOL and session that has a placeholder.
