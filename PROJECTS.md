# Project inventory

A reference inventory for portfolio content preparation. Projects are not ranked or shortlisted.

Sources: Kent's project notes, `KentTimothy_Resume_Apr2026-1.pdf`, and review of the default-branch commit histories, selected implementation changes, tests, and documentation in `aic-card-maker`, `ks-alien-invasion`, `aic-motioninbloom`, `protein-catcher`, `redis-passion-v2`, and `whack-a-myth` on 3 November 2026. Per Kent, commit authorship identifies implementation ownership: Kent's commits are his work, while collaborators' commits identify their contributions. AI-assisted implementation remains Kent's work. Event usage figures are reported separately, not independently verified by repository review. **To add** lists identify useful supporting material and unresolved details.

### Editing guidelines

- Retain these guidelines when updating or rewriting this document. This is a portfolio-preparation reference, not a conversation log or finished portfolio copy.
- Keep entries self-contained, factual, and concise; avoid conversational history and comparisons between projects.
- Update existing details in place; remove superseded information and answered prompts rather than appending corrections. Do not rank or cull projects unless requested.
- Separate Kent's contributions from collaborators' work. Keep uncertainty in the relevant **To add** list rather than repeating cautions throughout.
- Preserve metric units and reporting periods. Plays, submissions, and event attendance are not interchangeable or additive unique-user counts.
- Distinguish measured results, simulations, informal observations, and user testing. Confirm credits and publication permissions before publishing.

## Galilean Mission — KidsSTOP

- **Client / venue:** Science Centre Singapore / KidsSTOP.
- **Commissioning:** Team-developed event/activity pitch, awarded and refined through client feedback.
- **Dates:** December 2025–March 2026; repository records a further kiosk-startup fix in April 2026.
- **Exhibition period:** March–October 2026.
- **Experience:** Children's room-based exhibition combining a designed environment, a participatory video journey through Jupiter's moons, and a LiDAR-based boss fight.
- **Tools:** Pixi.js, Web Audio API, Hokuyo LiDAR / TUIO / Windows pointer input, Node.js, UDP, WebSockets, PowerShell/batch scripts, Git-based deployment automation, Gaea, Blender, Chrome Remote Desktop.

### Kent's contributions — game and operations

- Handled multitouch input using pointer capture and active-pointer tracking; suppressed browser pan/zoom gestures and queued hits for processing before physics/rendering rather than doing hit testing in event listeners.
- Recorded game-to-projector latency with a camera to investigate delays and guide performance improvements.
- Clarified game-state handling, state jumping, and reset behaviour; implemented a Node.js UDP-to-WebSocket control bridge for external start/pause/end commands, alongside keyboard controls. Pause freezes the game clock; ending clears entities and returns to idle.
- Migrated game audio to Web Audio and refined pause/resume, voice-over/music timing, and end-state audio cleanup.
- Set up Edge kiosk mode, automatic launch, Git pull before startup, browser-path detection, and Windows scripts. Added a scheduled startup-click fallback for browser audio unlocking in April.
- Implemented changes informed by user testing, including boss health/behaviour, hit debouncing, and game audio.
- Created an SOP and error-checking guidebook with step-by-step troubleshooting flowcharts for ground staff.
- Used Chrome Remote Desktop as a fallback for remote intervention when staff troubleshooting was insufficient.

### Kent's contributions — spatial design and rendered content

- Created the 3D spatial design and renders used to inform the physical exhibition build; a collaborator designed the assets.
- Modelled Jupiter's moons using procedural/parametric work in Gaea and rendered them in Blender.
- Created orbit and landing-POV animations, including PBR texturing and a parametric aurora.

### Collaborators' contributions

- **Kesh / game team:** Kesh developed the baseline gameplay, Pixi.js migration, waves/stages, and assets in the early February commits. Other game-team work included entity-spawn performance optimization, basic parametric sound/animation, asset management, and spritesheet animation.
- **External integration team:** Media-server/video integration, UDP-based switching, and automated lighting/audio controls.
- **Spatial/content collaborators:** Asset design; post-processing, video editing, and decal/hovering-UI design. Another team handled much of the mascot animation and audio.

### Outcomes and supporting material

- **Reported reach:** 4,000 participants over the first five weeks.
- **Repository / evidence:** [ks-alien-invasion](https://github.com/kent12t/ks-alien-invasion); UDP bridge `a930bb8`, multitouch `d68da9c`, startup updates `642f5da`, Web Audio/state handling `8891b22`, startup-click fallback `d7ea476`. History distinguishes Kent's integration/operations changes from Kesh's baseline gameplay, Pixi.js migration, waves, and assets.
- **To add:** Hardware/system diagram; testing observations and changes; latency recordings/measurements; SOP excerpts; renders and built-space photos; moon/animation breakdowns; collaborator credits; footage.

## AIC Roadshow Interactive Apps — Ideal Pursuit & Whack-a-Myth

- **Dates:** January 2025–February 2026.
- **Context:** Two locally hosted booth experiences, designed to reduce venue Wi-Fi dependence and improve responsiveness. Cloud uploads require connectivity.
- **Commissioning:** Team-developed roadshow/activity pitch, awarded and refined through client feedback.
- **Tools across the work:** Next.js, React, TypeScript, Tailwind, `@vladmandic/face-api`, Canvas API (`canvas.toBlob()`), Cloudflare R2 / S3 API, QR-code library, Supabase, p5.js, Vite, Web Serial, Express, localStorage/CSV logging, Python, Arduino, and Windows kiosk-launch scripts.
- **Languages:** Both games support English, Chinese, Malay, and Tamil.
- **Reported reach:** 4,000+ total interactions across the grouped work.
- **Coverage:** Event coverage by CNA and The Straits Times, per résumé.

### Roadshow spatial design and production

- Kent spatially designed and rendered the environment, considering walking space, wheelchair access, activity placement, and positioning.
- Planned modular layouts to accommodate pop-up venues with different sizes, shapes, and footprints.
- A designer teammate created the UI and 2D design assets.
- **To add:** Layout variations, modular components, circulation dimensions, renders and built-space photos, client-feedback examples, and coverage links.

### Ideal Pursuit

**Experience:** Personality quiz with six possible personalities, ending in a camera-based costume overlay and a downloadable photo accessed by QR code.

- **Repository:** https://github.com/kent12t/redis-passion-v2
- **Repository development period:** March 2025–February 2026; face-tracking prototype followed by quiz, photo-sharing, localization, and booth refinements.
- **Personalities:** The Wellness Warrior, The Adventurous Artist, The Tech Explorer, The Everyday Creator, The Urban Gardener, and The Community Champion.

**Kent's contributions:**

- Ideated the Snapchat-filter-style addition to make the personality quiz more engaging.
- Designed the user journey and early wireframes; a teammate subsequently created the full UI design.
- Adjusted button placement on a large vertical display to accommodate standing participants and wheelchair users.
- Implemented a switcher for English, Chinese, Malay, and Tamil.
- Designed the questions, answers, six-personality weighting system, and points distribution. Answers can award points to multiple personalities; the highest total wins, with ties resolved by the fixed personality order.
- Ran Python simulations to check and balance the distribution of quiz outcomes.
- Built and tested head tracking to position a costume overlay on elderly participants in the result view. Migrated to `@vladmandic/face-api` with SSD MobileNet V1; refined mirrored coordinates, cropping, position/scale smoothing, and persistence through short detection losses.
- Refined shared camera/model lifecycles and cleanup, reduced detection-feed resolution, and retained costume overlays as a fallback when tracking drops out.
- Implemented photo capture/export using `canvas.toBlob()`, followed by a server-side S3-compatible R2 upload and QR-code generation from the public image URL. Froze the camera during capture/upload and added upload-error feedback.
- Removed the cloud round trip from the on-screen photo preview by displaying the captured local blob immediately; QR sharing still uses the uploaded image URL.
- Configured automatic deletion after 30 days through Cloudflare.
- Implemented Supabase activity tracking: create a session record with `completed=false`, then save the official personality name and mark completion when results are calculated. Gameplay continues if Supabase is unconfigured or fails.
- Implemented four-language question/text data and localized result artwork; added portrait scaling, touch-gesture suppression, and Windows kiosk auto-launch scripts.

**Commit evidence:** Tracking/smoothing `d37bad3` and `b32656d`, face-api migration `e6cc6ad`, R2/QR `be8b16d` and `801866c`, Supabase `7e19169`, localization `03ecf50`, overlay fallback `6e18c26`, capture/upload refinements `1ac69e8` and `32e75b0`, local-blob preview `d962a3e`.

**To add:** Client credits; personality rationale; simulation method/results and tie-bias checks; tracking and usability observations; consent/storage controls and R2 lifecycle evidence; location/implementation of the CSV fallback described in project notes (not found in the reviewed repository); session-start/completion definitions for reporting; final UI; footage.

### Whack-a-Myth

**Experience:** p5.js game with Arduino-connected physical buttons. Players classify six shuffled statements about ageing as fact or myth while they rise on balloons. Correct answers score +20, wrong-button answers −10, and escaped balloons −5; results provide a star rating and review of missed statements.

- **Repository:** https://github.com/kent12t/whack-a-myth
- **Repository development period:** June–September 2025.
- **Stack:** JavaScript, p5.js/p5.sound, Vite, Arduino firmware, p5 Web Serial, Supabase, localStorage, and an Express CSV server.

**Kent's contributions:**

- Ideated an early version of the game and pitched it to the client.
- Implemented a switcher for English, Chinese, Malay, and Tamil.
- Carefully tested scoring permutations, including wrong-answer penalties, to tune how the scoring felt.
- Implemented Arduino firmware and browser serial integration: two buttons send newline-delimited `0`/`1` messages at 9,600 baud, mapped to myth/fact inputs and state-dependent start/restart/language controls. Firmware includes LED feedback and a 400 ms input delay; the browser attempts to reopen previously authorized ports after connection loss.
- Refined balloon motion/speed, answer feedback, sound timing, restart flow, and the missed-question report. Baked asset transparency instead of relying on multiply blending.
- Bundled p5/serial libraries and fonts locally for offline use; added kiosk launch and startup-click automation.
- Implemented selectable reporting modes: Supabase session start/end/score tracking with localStorage fallback, or device-specific CSV files written by an Express server and cached in localStorage after successful writes. CSV mode records timestamps, score, session date, and an ordered array of correct/wrong/skipped question outcomes; per-question logging is not implemented in Supabase mode.
- Added persistent browser-derived device IDs to separate each booth computer's CSV file and avoid filename conflicts when collecting results from multiple installations.

**Team contributions:** Soldering, enclosure fabrication, and physical connections. `elnathanhung` contributed a louder-audio update; event-data uploads also appear in the history.

**Commit evidence:** Serial/firmware `5c9930f`, Supabase `88ece9f`, offline storage `c43a1fa`, browser connection flow `269df00`, Express CSV server `e380d7f`, local libraries/fonts `b4dc1ef`, device-separated CSVs `243f75b`, translations `2add009`, question-outcome logging `006a41c`, startup automation `8b217cb`.

**To add:** Question-development credits; scoring permutation examples; physical-button response measurements and effect of the 400 ms firmware delay; deployed reporting mode, failed-write recovery, and reconciliation with interaction totals; client feedback; assets and credits; device-ID/privacy and CSV access/retention controls.

## Hawker Colours Survey Platform

- **Client / collaborator:** Hans Tan Studio; associated with a Good Design Research Grant.
- **Dates:** June 2022–June 2023.
- **Format:** Mobile-first survey platform and interactive story layouts.
- **Tools:** React, TypeScript, Supabase, Vercel; migrated from Airtable.
- **Kent's contributions:**
  - Developed the survey platform.
  - Migrated data infrastructure from Airtable to Supabase to address scalability issues.
  - Worked on query performance and real-time data handling.
  - Developed 20+ custom story layouts and interactive components.
  - Translated Figma designs into reusable responsive React components.
- **Reported reach:** 1,400+ users.
- **Research outcomes:** Featured in The Straits Times and published as *Hawker Colours: Melamine Tableware in Singapore*, per résumé.
- **To add:** Public link; survey purpose; team credits; migration constraints/results; example layouts; publication/article links; assets.

## AIC National Celebration of Seniors (NCOS) 2026

- **Scope:** Large-scale event incorporating Protein Muncher, CCD Thank You, Motion in Bloom, and the outsourced Dial-a-Story touchpoint.
- **Scale:** 600+ sqm, 15+ partner booths with custom thematic designs/layouts, and a reported 17,000 attendees over two days.
- **Commissioning:** Team-developed event/activity pitch, awarded and refined through client feedback.
- **Delivery team:** Kent and three teammates.

### Kent's contributions — spatial design and event delivery

- Translated a teammate's theme planning and 2D designs into 3D spatial designs and renders for the exhibition and partner booths.
- Measured/dimensioned designs to support technical drawings produced by the builders.
- Advised on interaction affordances, booth positioning, spatial clearance, and circulation.
- Supervised on-site placement of booths and structures, referencing the renders and measuring actual conditions.
- Adapted layouts in situ to unexpected requests, including an additional 2 m clearance on one side of the exhibition.
- Worked as technical support and floor runner, assisting partners and coordinating with builders alongside three teammates.

### Protein Muncher

- **URL:** https://protein-catcher.vercel.app/
- **Repository:** https://github.com/kent12t/protein-catcher
- **Development:** September–October 2026 in the reviewed history.
- **Stack:** React, TypeScript, Vite, pointer-based input, browser audio, and a local CSV-writing endpoint provided by the Vite dev/preview server.
- **Format / mechanics:** Touch-friendly educational game: enter weight in kg and select below 50 or 50 and above, then move a catcher to collect falling foods within 15 seconds. The game calculates its target using 0.8 or 1.2 g/kg respectively, rounded to whole grams; reaching it ends the round early. Eleven food types carry protein values, followed by a catch breakdown and food-reference guide.
- **Languages:** English, Chinese, Malay, and Tamil, including localized artwork and fonts.
- **Status:** Publicly deployed and used at NCOS.
- **Kent's contributions:**
  - Originated the game idea and planned the educational content.
  - Created wireframes; a teammate developed the visual design.
  - Implemented the design using a largely AI-assisted workflow.
  - Refined catching interactions, fall speed, audio feedback, desktop scaling, and image preloading/decoding before later screens appear.
  - Added four-language copy/artwork, a larger result-screen QR code, and kiosk auto-launch scripts.
  - Implemented device-specific local CSV logging for completed rounds: weight, age group, protein caught/target in g, success, elapsed gameplay time, UTC start time, and language. Logging works offline on loopback dev/preview servers, not the hosted game; interrupted rounds are not recorded.
- **Event usage:** 438 plays.
- **Commit evidence:** Initial game `a5d4ac3`, interaction refinements `55fd4a3`, image preloading `7eeabf1`, CSV logging `7bcce8b`, localization `d1d81f4` and `30b465c`. Several implementation commits explicitly credit Cursor co-authorship.
- **To add:** Nutrition-content sources/client approval; participant feedback; reporting period and reconciliation of completed-game logs with reported plays; weight/age data handling and retention; screenshots/video.

### CCD Thank You — Community Care Day Card Maker

- **URL:** https://ccdthankyou.com/
- **Status:** Live campaign and NCOS touchpoint.
- **Dates:** Repository implementation begins in July 2026, with an August asset update; Convex submission/wall integration in September and UI rebuild following redesign in October. Analytics and blank-card safeguards were extended in November.
- **Experience:** Visitors personalize a thank-you card using frames, community care professionals, messages, and stickers, then submit it to a live Thank You Wall. Supports online and event flows, with QR-based download on site.
- **Kent's contributions:**
  - Created prototype Figma layouts and a design system structured for MCP-assisted implementation, then deployed a working Vercel prototype to support the successful pitch.
  - Created the system architecture diagram, security overview, UX diagram, and wireframes.
  - Rebuilt the application after a UI designer teammate redesigned it.
  - Refined the product experience through a largely AI-assisted implementation workflow: responsive editor/modals, visible tablet-landscape actions, persistent event-mode navigation, and immediate replay/spotlighting of a submitted card.
  - Implemented a public, read-only card-metadata dashboard with Singapore-time date filtering, summary counts, and daily totals; queries are capped at the latest 5,000 records with a truncation notice.
  - Added submission rate limiting, image validation, duplicate-request handling, and a disabled submitting state; later blocked frame-only cards in the editor.
  - Added ESLint and Playwright checks for Chromium/WebKit, including rendering, blank-card prevention, event navigation, layouts, analytics, and wall loading. The reviewed GitHub workflow is a manually triggered passive ZAP baseline scan, not an automatic test/deployment gate.
- **Collaborators:** Original concept by others; UI redesign by a designer teammate.
- **Stack:** Next.js App Router, React, TypeScript, Tailwind, Convex, Canvas image export, `sharp`, `qrcode.react`, Vercel Analytics.
- **System details:**
  - Card submission exports an 800 × 663 image, using WebP with PNG fallback, and stores it in Convex.
  - Convex provides submissions, image storage, realtime published-card updates, and dashboard-based moderation.
  - The display wall uses cached, server-generated WebP thumbnails with bounded download concurrency, decoded-image reuse, progressive loading, and reduced-motion handling. Enlarged highlights load originals; newly loaded cards enter off-screen rather than replacing visible artwork. Existing smaller submissions remain compatible.
  - Dedicated analytics view; matching mobile/desktop editor layouts; event-mode routing and QR download flow.
- **Event usage:** 347 cards submitted.
- **Documented performance experiment:** A 24 October comparison reported 4.54 MiB versus 0.43 MiB of browser image transfer over 30 seconds (about 91% less), comparing production with an updated local production build under desktop Chromium mobile/network/CPU emulation. This is not a physical-device measurement or proof of equivalent server-bandwidth savings.
- **Repository / evidence:** [aic-card-maker](https://github.com/kent12t/aic-card-maker); submission/backend `a0cd39d` and `8169efe`, wall optimization `9d10530` (Cursor Agent co-authored), event navigation `90d097d`, analytics `e4a36e9`, frame-only safeguard `4c84e95`; `README.md` and `docs/display-wall-performance.md`.
- **To add:** Campaign/client credits; confirm prototype/pitch milestone dates; architecture/UX diagrams; accessibility testing; privacy/retention and dashboard-access controls; scan results and actual CI execution evidence; physical-device/hosted-cache validation; campaign-wide outcomes; assets.

### Motion in Bloom

- **URL:** https://aic-motioninbloom.pages.dev/
- **Repository:** https://github.com/kent12t/aic-motioninbloom
- **Development:** August prototype; October 2026 sit-to-stand game rebuild and booth refinements.
- **Stack:** React, TypeScript, Vite, MediaPipe Pose Landmarker, local WASM/model assets, transparent flower WebM animations, Cloudflare Pages, and local CSV logging.
- **Format / rules:** Portrait camera-based game: complete five seated → standing → seated cycles within 40 seconds to grow a garden. A rise starts a flower animation; returning to sitting completes the repetition. Completed blooms remain visible until the next ascent, and results reflect the completed flowers.
- **Kent's contributions:**
  - Contributed to ideation.
  - Created wireframes; a teammate developed the visual design, which Kent implemented.
  - Improved tracking robustness through seated calibration, smoothed multi-frame confirmation, separate rise/return thresholds, and head/shoulder/hip anchor fallbacks. Losing landmarks alone cannot score a repetition; prolonged loss discards a pending repetition without stopping the round timer.
  - Reduced bystander interference through central-player selection and masking outside the central 60% before inference. Later widened body-scale tolerance without narrowing the detection area, allowing natural straightening and partial upper-body clipping.
  - Implemented client feedback on camera presentation, camera setup/retry guidance, pose illustrations, and 180° rotation for inverted webcams.
  - Connected early upward movement to flower playback, held completed blooms until the next rise, and supplied still-image fallbacks for failed video playback.
  - Avoided repeated inference on unchanged camera frames and capped processing at 20 FPS with a 640-pixel-wide input, independently of the gameplay timer.
  - Added kiosk auto-launch and device-specific CSV logging of finished and interrupted started rounds, including cycles, outcome, duration, UTC start time, and interruption reason. Collection requires a loopback dev/preview server; hosted pages do not log results, and page-exit logging is best effort.
  - Used a largely AI-assisted workflow and added deployment gates for dependency auditing, linting, synthetic tracker/round tests, TypeScript/build, and packaged-asset checks. Cloudflare deploys the checked artifact; separate manual Playwright smoke tests cover camera/setup and media behaviour, not real-person tracking accuracy.
- **Processing / privacy:** Pose inference runs in-browser with locally served model assets; no inference server is required. The CSV logger stores no camera images, landmarks, or personal details. Player continuity checks are not biometric identification and cannot eliminate all interference inside the play area.
- **Event usage:** 375 plays.
- **Commit evidence:** Rebuild `410074a`, deployment gates `42d6009`, manual browser checks `0edd8cb`, inference optimization `6f5b4b7`, central-player selection `d9a55f6`, logging `a0de1dc`, camera rotation `4438eb6`, tracking tolerance `212ae54`.
- **To add:** Camera/hardware setup; representative-participant tracking measurements and failure footage; privacy notice/retention; reconciliation of finished/interrupted rounds with reported plays; deployed calibration/QR settings; footage; publication/delivery status of the separate November reporting-dashboard branch.

### Dial-a-Story

- **Format / tools:** Outsourced interactive phone-booth experience using Unity, Arduino, and a video player.
- **Kent's contributions:** Early ideation and on-site technical support.
- **Supplier's contributions:** System implementation and analytics.
- **Event usage:** 519 plays.
- **To add:** Interaction/story flow, supplier credits, support examples, and images/video.

### NCOS supporting material to add

- Exact event dates/venue, commissioned scope, collaborators and suppliers, spatial renders versus built photographs, layout adaptations, and booth examples.
- Analytics definitions and reporting periods; examples of client feedback, observations, and participant testing.

## Lee Kong Chian Natural History Museum — app and games

- **Context:** Design Incubation Centre internship, May–July 2023.
- **Client / venue:** Lee Kong Chian Natural History Museum (LKCNHM).
- **Format:** Cross-platform app and p5.js games.
- **Tools:** Flutter, p5.js.
- **Kent's contributions:** Developed a cross-platform app and p5.js games; résumé reports an iOS/Android launch.
- **To add:** Project titles and grouping; purpose/audience; team roles; design responsibilities; development/release dates; deliverables in each release; store links; screenshots/video.
