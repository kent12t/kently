# Galilean Mission

## Bringing a children's space adventure into the room

<!-- Working narrative draft, not publication-ready. Based on PROJECTS.md; no finished footage or visual assets have yet been reviewed. Bracketed prompts are evidence gaps, not claims to publish. -->

**Science Centre Singapore / KidsSTOP · Children's interactive exhibition**  
Development: December 2025–March 2026; further kiosk-startup fix in April.  
Exhibition: March–October 2026.

### At a glance

Galilean Mission combined a designed environment, a participatory video journey through Jupiter's moons, and a LiDAR-based boss fight. I worked across spatial design, rendered content, game interaction refinements, and the setup and support needed to run the experience.

**My role:** Spatial design and renders; moon modelling and animations; game input, state, audio, and control integration; kiosk setup and staff troubleshooting guidance.

**Team:** Team-developed pitch and activity. Kesh and the game team developed baseline gameplay, assets, waves/stages, and the Pixi.js migration. An external integration team handled media-server/video integration and automated lighting/audio controls. Other collaborators contributed asset design, post-production, video editing, decals/UI, mascot animation, and audio. [Confirm full names and credits.]

**Reported participation:** 4,000 participants over the first five weeks. This is a reported participation figure, not a verified unique-user count.

> [Opening media: a short captioned clip showing the room, the visitor action, and the resulting game response. Supply a still-image alternative.]

## The experience extended beyond the screen

The project brought together a physical exhibition, rendered journey content, and an interactive game. My contribution spanned how the space was represented for the build, how parts of the journey looked, and how the game responded and could be operated.

[Add the original brief, intended age range, visitor journey, and constraints from the client. Do not infer them from the finished implementation.]

## 1. Connecting the spatial proposal to the built environment

I created the 3D spatial design and renders used to inform the exhibition build, working with assets designed by a collaborator. I also modelled Jupiter's moons using procedural/parametric work in Gaea and rendered them in Blender, including orbit and landing-point-of-view animations, PBR texturing, and a parametric aurora.

These are distinct contributions: spatial visualisation helped communicate the environment, while the moon imagery formed part of the journey content.

**Evidence to show:** A matching render/built-space pair; an annotated layout; a short moon-animation excerpt and procedural breakdown. Explain one actual spatial or visual decision and its constraint after reviewing the assets.

## 2. Refining how the game responded

The baseline game was developed by Kesh and the game team. My work included multitouch handling with active-pointer tracking and pointer capture, suppressing browser pan/zoom gestures, and queuing hits for processing before the physics/rendering step.

I recorded game-to-projector latency with a camera to investigate delays and guide improvements. Changes informed by user testing included boss health/behaviour, hit debouncing, and audio.

**Evidence to show:** A visitor-action/game-response clip; a specific testing observation paired with the resulting change; the latency recording and measurement method. No quantified latency improvement or usability result is established in this draft.

## 3. Making the experience controllable and supportable

I clarified state transitions and reset behaviour, and implemented a Node.js UDP-to-WebSocket bridge for external start, pause, and end commands, alongside keyboard controls. Pausing freezes the game clock; ending clears entities and returns the game to idle. I migrated audio to Web Audio and refined pause/resume, voice-over/music timing, and end-state cleanup.

For kiosk operation, I set up automatic launch, Git updates before startup, browser-path detection, and Windows scripts. An April update added a scheduled startup-click fallback for browser audio unlocking. I also created an SOP and troubleshooting flowcharts for ground staff, with Chrome Remote Desktop available for remote intervention when needed.

**Evidence to show:** A verified system diagram, a brief start/pause/end recording, and a redacted SOP excerpt. These demonstrate mechanisms and support preparation—not measured uptime or proof of unattended reliability.

## Outcome and reflection

The exhibition ran from March to October 2026, with a reported 4,000 participants in its first five weeks. My contribution connected spatial and rendered content with interaction refinements and practical operation, rather than ownership of the entire game or exhibition system.

[Add one concrete observation from the exhibition, one limitation, and what Kent would change next. Attribute informal observations as such; distinguish them from user testing and measurements.]

## Tools

Blender, Gaea, Pixi.js, Web Audio API, Hokuyo LiDAR / TUIO / Windows pointer input, Node.js, UDP, WebSockets, PowerShell/batch scripts, Chrome Remote Desktop. Tool list spans the project; personal scope is described above.

## Publication checklist

- Confirm client/venue permission for footage, imagery, diagrams, and operational excerpts; check consent for identifiable children and visitors.
- Confirm full credits, participation source/reporting definition, and final project naming.
- Verify actual hardware/control paths before drawing a final system diagram; the inventory does not establish every connection.
- Replace evidence prompts with reviewed media and specific observations. Do not publish unresolved prompts.
- Private preparation sources: [project inventory](../../PROJECTS.md#galilean-mission--kidsstop), repository evidence recorded there, and [evidence plan](../evidence-plan.md).
