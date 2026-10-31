---
name: lumenis-webinar-trailer
description: Build a five-beat promo trailer (about 30 to 45 seconds) for a recorded Lumenis webinar - hook moment, title card with the featured doctors, what you'll learn, tease moment, call to action - in 9:16 for social and 16:9 for YouTube. Proposes the plan and stops for the content owner's approval; renders only an approved trailer. Use for a webinar trailer, promo or teaser.
---

# Webinar trailer

Owner: Ted (content).
Status: draft procedure, written 2026-10-30 from the first webinar trailer (9:16 and 16:9 versions rendered and reviewed). Two earlier talking-head-only cuts didn't work; this five-beat structure replaced them. Review required.

## The five beats

1. **Hook** (6 to 15s): the webinar's strongest line that stands alone cold, before any title.
2. **Title card:** series label, the webinar title with a highlighted phrase, a subtitle that says what the webinar is about, and the featured doctors' headshots with names and roles.
3. **What you'll learn** (same card): "Watch the webinar to learn how to", shown large, then three short how-tos.
4. **Tease** (6 to 15s): the second-best moment, cut before its payoff, so it raises the question the call to action answers.
5. **Call to action:** a kicker line that answers the tease, two short large lines, "Watch on demand now" and the link.

## Inputs

- **The recording** (ON24 event ID or exported MP4) and its transcript.
- **The video toolkit** (FFmpeg, whisper.cpp and Remotion; its five-beat trailer template). It isn't in this repository yet. Ask the content owner for it; without it, stop after the proposal.
- **Brand system:** OptiLIFT or OptiLIGHT ([brand systems](../../../assets/design-system/README.md)).
- **The audience** the trailer pitches to, and the format: 9:16, 16:9 or both.
- **The webinar's promo copy.** Its approved learn-how-tos are the safest source for beat 3.
- **Headshots:** from the [image library](../../../assets/image-library/README.md) first, then the webinar deck, then a still from the recording.

## Release prerequisites

Confirm the selected brand fits the product and audience; do not apply OptiLIGHT or OptiLIFT branding to unrelated Aesthetics products. Unsupported brands can receive a proposal, but rendering waits for the appropriate brand template. Confirm speaker recording and promotional reuse permission, patient-image consent where relevant, headshot rights, claim review and any required testimonial disclosure before rendering or release. A webinar recording, paid-speaker disclaimer or public headshot alone is not approval. Hold the affected material when evidence is missing. Keep rights evidence and transcripts outside Git. Separate content-owner selection from final release approval; do not upload or post without authorization.

## Procedure

### Pass 1: propose

1. **Read the whole transcript** and the promo copy.
2. **Pick the hook and the tease.** A line works only if it makes sense with no context; story fragments that need setup don't. Pitch to where the audience is now, not an end state that's far off for them. Frame doctor relationships as partnership, never competition. With two doctors, give the hook and the tease to different doctors.
3. **Write the cards:** title and highlight, a subtitle that stands out (flag it if it differs from the registered subtitle), three learn-how-tos (promo wording first), and a call to action stronger than a generic "See how they set it up."
4. **Check compliance** with the [claims check](../lumenis-claims-check/SKILL.md). Speaker opinions stay opinions. Note each headshot's source and reuse status, and that testimonial disclosure is needed if the speakers were paid.
5. **Stop for approval.** Show each beat with speaker, timestamps, length, the words spoken and why it works, then the card copy, headshot sources, compliance flags and the decisions the owner needs to make.

### Pass 2: render the approved trailer

6. **Tighten the moments** from each segment's own transcript, never the full-webinar one: start on the first word, end after a complete thought and before anyone else speaks, and trim filler at the edges.
7. **Proofread the captions** as in [webinar clips](../lumenis-webinar-clips/SKILL.md): readable timing, no um or uh, correct names and punctuation.
8. **Add music** cleared for commercial use, leveled under the speech, with its start offset chosen so a downbeat or drop lands on the cut to the title card. Record why. Verify the music license permits the intended platform and retain any required Content ID clearance before posting to YouTube.
9. **Render stills and check them:** face centred, no other participants' tiles, title and subtitle fit, learn list readable, headshots meet cleanly. Then render, pull frames at each beat from the MP4 and look at them.
10. **16:9 version:** same beats and copy in the wide layout; music may differ.
11. **Hand over** the newest MP4s only, with what you checked and what you didn't verify. Approved trailers go to the [content hub](../lumenis-content-hub/SKILL.md); posting is the owner's call.

## Missing inputs

- No toolkit: propose the beats and copy, then stop.
- No cleared headshot: propose a still from the recording only if its promotional reuse is authorized; otherwise hold that visual and request a cleared image.
- No promo copy: write the learn-how-tos from the transcript and flag them as new copy for review.
