---
name: lumenis-boompop-kbyg
description: Build a US Vision Marketing trade show Know Before You Go, the BoomPop guest website where the team reads the details and RSVPs. Pull the show from Smartsheet, mirror the latest completed same-tier page, build the agenda, set up the RSVP and file the invite link in Fast Facts. Also adds a single session to a show's agenda. Use for requests like "create a BoomPop page for [show]" or "create KBYG". Does not send invitations.
---

# BoomPop Know Before You Go

Owner: Kaelyn (Vision event marketing).
Status: draft, written 2026-10-30 from Kaelyn's working guide. Not yet run from this repository. Review required.
Scope: US Vision Marketing trade shows. Not Aesthetics or Hospital. For Accelerate staff invites, use [BoomPop staff invites](../lumenis-boompop-invite/SKILL.md).

The Know Before You Go is the guest-facing page attendees land on from the invite link. BoomPop calls it the guest website.

**You are correcting a generated page, not building one.** BoomPop generates the page from the event's name, dates, city and guest list. That copy is generic offsite text, in places with literal `[EventType]` and `[TIME]` placeholders. The work is replacing it with ours, filling the sections that matter and hiding the rest.

## Rules

1. **Start from Smartsheet.** A show name and city are enough. Look up the dates and venue instead of asking.
2. **Check that the event doesn't already exist.** A duplicate means a second invite link and guests split across two pages.
3. **Hidden beats empty.** Anything left unfilled must be hidden before invites go out. Placeholder text reaching a guest is this page's main failure.
4. **Enter only what you were told.** Times, room names and policies go on exactly as given. Don't infer a detail from a neighboring show.
5. **The page is the guests' single source of truth.** When a detail changes, update the page.
6. **Mark internal pages as internal.** Team pages carry a line in the opening section saying the page is for internal team members only and isn't to be shared.
7. **Preview as Guest before you finish.** Edit Mode shows hidden sections and placeholders guests never see, so it always looks more complete than the real page.
8. **Every page gets the full finish, unasked.** Building the agenda, setting up the RSVP, copying the invite link and filing it in Fast Facts are all part of the job. The page isn't done until they are.
9. **Mirror the reference page, and never touch it.** Copy structure, wording, formatting and hidden sections from the page picked in step 2. That page is view only: never click a pencil, eye, arrow or Save on it. Put only the new show's own details into its slots. Leave out items the new show has no information for, and add nothing the reference lacks.
10. **Devices come from the event schedule.** The `DEVICES` column fills whichever devices slot the reference uses:
    - Tier 3: a *Devices Onsite* item in Important Information.
    - Tiers 1 and 2: a *Participating KOLs & Devices* section (the repurposed Welcome Note). Put `@ Booth` in bold and underlined, then a bulleted list of the devices as listed. Hide the section's logo image, as the references do. Add no counts the schedule doesn't give. Add *Confirmed KOLs* only when the Agenda sheet names them.
11. **Lodging must be accurate before release.** Keep missing hotel details as placeholders only in an external draft or a confirmed private staging view. Never leave placeholders visible on a live guest page. If private staging is unavailable, hide the incomplete section and hold distribution until the owner supplies confirmed lodging details. Do not substitute the event venue for the hotel.

## Inputs

- The show's name and city.
- The **Vision Marketing Events** Smartsheet workspace: the `<year> Event Schedule` row, and the show folder's `Fast Facts` and `Agenda` sheets.
- Organizer access to BoomPop, signed in by the person running this. Never ask for or type a password. If an event opens as a guest RSVP page, open it from **Lumenis Hub** (top nav) → All Events.

Guest lists, invite links, hotel details and real show data stay in BoomPop and Smartsheet, never in this repository.

## Procedure

### 1. Pull the show from Smartsheet

Open the `<year> Event Schedule` for the year the show falls in. Match the row on EVENT **and** LOCATION: EVENT holds only the series name, which can repeat across cities.

| Column | Feeds |
|---|---|
| EVENT | The event name |
| LOCATION | *Where is the event?* |
| DATES | *When is the event?* (no year; the year comes from the sheet) |
| VENUE | Event Venue Information |
| DEVICES | Devices slot (Rule 10) |
| Tier | Reference page (step 2) |

BoomPop event names don't match EVENT exactly. Recurring series are usually series plus city, and the big conferences carry the year. Follow what existing events do, and confirm the name if the show fits neither pattern.

If VENUE is blank, check the show folder or ask. Don't leave the venue section empty.

Then open the show folder's `Fast Facts` sheet for the venue address, rooming link and cutoff date, and the valet and WiFi policies. A rooming link is a hyperlink on display text, so copy the link target, not the words.

### 2. Pick the reference page

1. Read the show's **Tier**: `1` large, `2` small, `3` tabletop. `-` means no tier, so stop and ask. If the current schedule has no Tier, propose a prior same-series tier and obtain owner confirmation before selecting the reference.
2. In BoomPop → **My Events** → **Past**, take the latest-dated completed event from the same tier. An upcoming event never counts, even if its page looks finished.
3. Open it read-only: the show → **Guest Management** → **View & edit**. Note the text, the formatting (bold, underline, lists, blank lines) and which sections say *Section hidden*. Leave without changing anything.

Say which reference page you used in your report.

### 3. Find or create the event

Check **My Events** (**Live & Upcoming**, then **Past**) and the show's `BoomPop URL` row in Fast Facts. A link there means the event exists.

If it's genuinely missing, click **+ New Event** and enter the city, the dates with the year, and the event name. Skip the other setup prompts, then **Create Event**.

### 4. Open the editor

The show → **Guest Management** (left nav) → **Guest Website & RSVPs**.

- **New event:** click **Get started** twice. BoomPop generates the page in about half a minute. **Continue** opens Edit Mode.
- **After that:** **View & edit** under *Manage your guest website*.

The top bar holds **Manage Guest Experience**, **Preview as Guest**, **Invite** and **Done**. At a narrow window it's pushed off screen, so widen the window.

### 5. Set up the hero

The logo, event name, city and dates come from **Event Details**, so fix wrong values there. On the page, set the **cover photos** (replace the stock images when you have real venue or brand imagery) and **Edit color theme**. Confirm one named brand system and cleared image rights. A past show or stock image alone does not establish approval.

### 6. Fill and hide the sections

Hover a section for its controls: ↑ / ↓ to move, pencil to edit, eye to show or hide.

| Generated section | What it becomes |
|---|---|
| Event Overview | Retitle to the show name + *Know Before You Go*. Body: the welcome line, the RSVP ask and the internal-only notice |
| Who's Going | Leave as is |
| Point of Contact | Leave as is, but check the mobile number |
| Workspace | **Event Venue Information.** Put the venue in *Meeting space name* and *Key Details → Location*. Body: travel guidance, rooming, huddles and exhibit hours |
| Hotel | **Lodging Information.** Follow Rule 11: incomplete details remain private; hide an incomplete live section and hold distribution |
| Agenda | Hide while empty; show it after step 7 |
| Welcome Note | **Participating KOLs & Devices** (Rule 10). Hide it only if the schedule lists no devices |
| Frequently Asked Questions | **FAQ FOR ATTENDEES.** Cut the generated questions down to the reference's |
| Important details | **IMPORTANT DETAILS.** Replace the items with the reference's (full agenda, what to bring, dress code, confirmed KOLs, food onsite), then move it above the FAQ |
| Activities & Meals, Agenda details, Weather, Explore, Playlist | Hide |

If the reference doesn't use the generic FAQ or Important details section, hide that too.

Editing notes:

- **The field names read backwards.** *Section title* is the small kicker line and *Callout/Highlight* is the large headline.
- **Check the eye actually took.** The first click often lands only as a hover. The section must grey out and show **Section hidden**.
- **Dropdown sections** (FAQ, Important details) are a list of items. Delete from the bottom up so the panel doesn't jump.
- **Save Changes** commits a section. Look for the green *Your section is saved!* toast. If the section snaps back to placeholder copy, reopen it and save again.
- **Saves can fail shortly after a page loads** ("Your section failed to save"). Reload the editor right before saving. The unsaved draft is lost on reload, so copy your text first.
- **Bold and underline carry to the next line** after Enter. Turn them off before typing on.

Exhibit hours go only in the Event Venue Information body, never on the agenda. Use bold headings, one line per block and a blank line between groups:

```text
**Exhibitor Move-In**
Thursday, March 4: 4-10 PM

**Main Exhibit Hours**
Friday, March 5
12-2 PM
5-6:45 PM

**Exhibitor Move-Out**
Saturday, March 6: 3-10 PM
```

### 7. Build the agenda

The agenda feeds the page, and it's edited outside the page editor. Click **Done**, then **Agenda** in the event's left nav.

1. On a new event, choose **Or create from scratch** in the template dialog.
2. Read the show's `Agenda` sheet. Skip `Exhibit Hall Open` rows and all exhibit-hours or move-in and move-out times, unless the requester explicitly wants those times in the agenda; then follow the request and verify the source.
3. For each remaining session, click an empty slot in the right day's column and set:
   - **Title:** `<Activity> w/ <Who's Involved>`, for example `Meet The Expert w/ Dr. Example`
   - **Start and End time** from the sheet, in the event's local time zone (shown above the grid)
   - **Type:** see the table below
4. **Save Changes**, then **Close** and check the block is on the grid.
5. Back in the guest website, un-hide the **Agenda** section.

| Session | BoomPop Type |
|---|---|
| Meet The Expert, Sales Bootcamp | Work/meeting time |
| Treatments | Service |
| Dinner | Meal |
| Wet Lab | Activity |

For anything else, match the nature of the session: working sessions are `Work/meeting time`, meals are `Meal`, hands-on or social sessions are `Activity`, and patient- or client-facing services are `Service`. Use `Other` only when nothing fits.

Time fields ignore pasted strings. Click the hour segment, then press keys one at a time; if digits don't register, use the arrow keys. If *End time is before start time* sticks after a correct value, nudge the minutes up and back down.

Don't press **Publish to Guest Calendars** unless asked. The page picks up saved entries without it.

### 8. Check it as a guest

Run **Preview as Guest** and confirm:

- No placeholder text, especially `[EventType]`, `[TIME]`, `Write something...` or `123 Main St, City, State`. Unresolved lodging fields block release under Rule 11.
- Every empty section is hidden. Count them against step 6.
- Point of Contact is a real person with a reachable mobile.
- The hero's dates and city match the show.
- Links open.
- The internal-only notice is present on an internal page.

### 9. Set up the RSVP and file the link

1. Click **Invite**. BoomPop says *You haven't set up your guest experience!* Click **Set-up RSVP**.
2. **Questions:** uncheck everything except *How can we contact you?* The form ships with dietary, shirt size and other questions we don't collect. **Next**.
3. **Ticketing:** not used. **Next**.
4. **Settings:** verify internal audience access, guest-list visibility and sharing against the event owner's requirements; a notice saying internal-only is not access control. Set an RSVP deadline only when the show has a hard cutoff. **Done**.
5. **Invite** → **Invite and Share** → **Copy invite link**. Open it once to confirm it lands on the right show.
6. Paste it into the `BoomPop URL` row of the show's `Fast Facts` sheet: URL only, no label or trailing spaces. If the row is missing, add it directly below the Main POC rows, after checking the whole sheet for a duplicate. If it already holds a link, open it and verify the event and audience first. Retain a valid link. A conflicting or inaccessible link needs owner resolution before replacement; preserve the previous value in the internal handoff.
7. Read the cell back. It must start with `https://app.boompop.com/invitation/` and match the event you were just in.

The invite code differs from the event code in the BoomPop header, so copy the link rather than building it.

Leave the Email addresses box empty and don't press **Preview & Continue**. That's the send path, and it isn't part of this job.

## Add one session to an existing show

Both systems get the authorized item in the same pass. Search each agenda for an existing matching session before adding one; update or flag an existing entry rather than duplicating it. If only one system saves, report the partial result and resume there after checking persisted state.

- **BoomPop:** add it as in step 7, using the title exactly as given. Fill vendor, room and notes only if you were given them.
- **Smartsheet:** add a row to the show's `Agenda` sheet, chronologically within its day. Position it with `siblingId` set to the session it follows, then check the order. Adding with `parentId` and `toBottom` lands it at the top of the day.

| Column | Value |
|---|---|
| Activity | The session type, such as `Meet The Expert`, not the presenter |
| Who's Involved | The presenter, such as `Dr. Example` |
| Start Time, End Time | Text in `H:MM AM/PM` form |
| Location, Notes | Only if given |

## When an input is missing (fictional examples)

- **Successful run.** "Create KBYG for Example Eye Expo, Springfield." The schedule row gives the dates, venue, Tier 2 and two devices. The agent mirrors the latest completed Tier 2 page, builds the agenda, previews as guest, files the invite link in Fast Facts and reports the reference page used.
- **No hotel details.** Fast Facts has no rooming link. The missing lodging details remain in a private draft; hide an incomplete live section and hold distribution until details are confirmed.
- **No tier.** The show's Tier is `-`. The agent stops and asks which reference page to use.
- **Blank venue.** The VENUE cell is empty and the show folder doesn't name it. The agent asks and leaves the venue details out until it has an answer.

## Boundaries

- Never edit, hide or save anything on the reference page.
- Don't send invitations, or press **Preview & Continue** or **Publish to Guest Calendars**, unless explicitly asked. A repository merge authorizes neither.
- Add no product claims. Devices appear only as listed on the schedule.

## Report

Say what you built and link it: the reference page used, the invite link filed, the sections hidden, any placeholders still on the page and anything you couldn't confirm.

## Review limitations

Kaelyn should review this before production use. BoomPop's screens can change, so treat the labels above as observed in October 2026 and check them on the live app. The steps have not been run from this repository.
