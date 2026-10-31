---
name: lumenis-webinar-clips
description: Turn a recorded Lumenis webinar (ON24 event or exported MP4) into branded 9:16 social clips of 15s to 2min, with synced captions, lists, pull quotes, the webinar-series header and end card, and music. Proposes candidates and stops for the content owner's approval; renders only approved clips. Use after the show for social clips, reels, shorts or cut-downs.
---

# Webinar social clips

Owner: Ted (content).
Status: draft procedure, written 2026-10-30 from the first webinar run (eight OptiLIGHT clips rendered and reviewed). Review required.

The editor (you) chooses the moments, writes the on-screen words and keeps them compliant. A local video toolkit does the mechanical work: download, transcription, cutting and rendering.

## Inputs

- **The recording:** an ON24 event ID, or an exported MP4.
- **The video toolkit** (FFmpeg, whisper.cpp and Remotion, with its own `README.md` and `make-clips` procedure). It isn't in this repository yet. Ask the content owner for it; without it, stop after proposing clips (a supplied transcript supports the proposal without running the toolkit).
- **Brand system:** OptiLIFT or OptiLIGHT ([brand systems](../../../assets/design-system/README.md)). Lumenis Corporate isn't built in the toolkit yet. Ask if it isn't established.
- **The webinar's title** and registered subtitle, and the speakers' names and titles ([KOL library](../../../assets/kol-library/index.md)).

## Release prerequisites

Confirm the selected brand fits the product and audience; do not apply OptiLIGHT or OptiLIFT branding to unrelated Aesthetics products. Unsupported brands can receive a proposal, but rendering waits for the appropriate brand template. Confirm speaker recording and promotional reuse permission, patient-image consent where relevant, headshot rights, claim review and any required testimonial disclosure before rendering or release. A webinar recording, paid-speaker disclaimer or public headshot alone is not approval. Hold the affected material when evidence is missing. Keep rights evidence and transcripts outside Git. Separate content-owner selection from final release approval; do not upload or post without authorization.

## Procedure

Run in two passes. Pass 1 ends at the approval gate.

### Pass 1: propose

1. **Ingest and transcribe** with the toolkit, or use a supplied transcript for a proposal when the toolkit is unavailable. If ON24 credentials or the speech model are missing, stop and say what the owner must set up. Never ask for credential values in chat.
2. **Read the whole transcript.** Use ON24's own transcript, when there is one, to correct names, product names and clinical terms.
3. **Propose 3 to 8 clips.** Each runs 15 to 120 seconds (aim for 30 to 60), starts on the first word of a sentence and ends after a complete thought. It must stand alone: no "as I said earlier", no unexplained "this slide". It hooks in the first 3 seconds with a question, a number or a strong claim of experience. In order of preference: patient stories, specific practice numbers, how-to or workflow advice, quotable lines. Skip slide-dependent passages.
4. **Check compliance before anyone sees it,** with the [claims check](../lumenis-claims-check/SKILL.md): every headline, list item, quote, caption and post copy. A speaker's practice experience appears as experience ("In my practice..."), with "One practice's experience. Individual results vary." where needed, never as a product claim. Write `OptiLIFT` and `OptiLIGHT`. No hype, exclamation points or emoji. Flag earnings, payback and "why we chose Lumenis" lines for legal review rather than dropping them quietly. Note that testimonial disclosure is needed if the speakers were paid.
5. **Stop for approval.** Show a table: id, timestamps, length, headline, hook, why it works, compliance flags. Only clips the owner approves go on.

### Pass 2: build and render approved clips

6. **Time everything to the words.** Re-transcribe each approved clip on its own and take every time for lists, quotes and cuts from that, never from the full-webinar transcript, which drifts by up to a second. Text must land as it's said.
7. **Frame the speaker.** Crop to the speaker's own tile, so other participants and black bars never show, with the head centred.
8. **Cut calmly.** Change the shot at cuts and otherwise at most every 8 seconds. Frequent punch-ins on a webcam look nervous.
9. **Apply the webinar-series look.** The header shows "Lumenis Webinar Series", the webinar title and "Watch now". The end card shows the series label, the title large and "Watch the full webinar on demand". A final pull quote holds to the cut so no video flashes before the end card. Don't end on a full-screen graphic that doesn't land. On OptiLIGHT, rays radiate from just outside a corner, never mid-frame. Use only the selected brand system and its permitted logos and motifs; do not mix systems merely by flagging the mixture.
10. **Proofread the captions.** At most six words per card, no um or uh, longer phrases held longer, and no card too short to read. Never repeat on-screen graphic text in a caption. When a full-screen card cuts off the start of a phrase, drop the fragment and carry the key word into the next caption. Fix punctuation, capitals and spacing yourself.
11. **Add music.** Use a track cleared for commercial use (upbeat acoustic corporate or light house, not ambient), leveled to the speech and sitting at about 0.16 under it. Keep the license and permitted-platform evidence; verify any required attribution and Content ID clearance or whitelisting before posting.
12. **Render stills, check, then render video.** Look at every still: face in frame, headline on two lines at most, callouts readable, captions clear of the face. After rendering, pull frames from the MP4 at every list, quote and cut, and look at them. Pilot a new treatment on one clip before rolling it out.
13. **Hand over.** The review folder holds only the newest MP4 of each clip; superseded versions go to an archive, never deleted. Post copy stays with the working files. Report what you checked and what you didn't verify. Approved clips go to the [content hub](../lumenis-content-hub/SKILL.md); posting is the owner's call.

## Missing inputs

- No toolkit: propose clips from the transcript and stop before step 6.
- No brand decision: propose, but don't render.
- A cue word isn't heard in the clip's own transcript: fix the cue. Don't accept a fallback time.
