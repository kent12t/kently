# Project inventory

A reference inventory for portfolio content preparation. Projects are not ranked or shortlisted.

Related references: [CONTEXT.md](CONTEXT.md) for career goals and portfolio proposals; [AGENTS.md](AGENTS.md) for maintenance rules.

## Sources and review scope

Sources: Kent's project notes, `KentTimothy_Resume_Apr2026-1.pdf`, and review of the default-branch commit histories, selected implementation changes, tests, and documentation in `aic-card-maker`, `ks-alien-invasion`, `aic-motioninbloom`, `protein-catcher`, `redis-passion-v2`, and `whack-a-myth` on 3 November 2026. Per Kent, commit authorship identifies implementation ownership: Kent's commits are his work, while collaborators' commits identify their contributions. AI-assisted implementation remains Kent's work. Event usage figures are reported separately, not independently verified by repository review. **To add** lists identify useful supporting material and unresolved details.

Additional review on the same date covered histories and selected code/documentation in `hawker-colors-survey/hawker-colors`, `graysonjova/tdhr`, `graysonjova/TDHR-Server`, `kent12t/dbs-wordcloud-v2`, and `kent12t/forkcast`. Hawker Colours review included `develop` and Kent's `main` history plus constituent commits of selected PRs; unmerged branches were not exhaustively reviewed. TDHR is an explicit attribution exception: Kent reports implementing UX/frontend work under his friend's GitHub identity as well as his own, so account names do not reliably establish personal ownership there. These projects were not run or visually assessed in this review.

Review on 4 November 2026 covered the default-branch histories and selected implementation changes in `kent12t/lkcnhm-games` and `didny/musee-lkcnhm`. The latter preserves the original collaborative development history; the former is a June 2024 standalone extraction. Neither app nor games were run or visually assessed.

## Editing guidelines

- Retain these guidelines when updating or rewriting this document. This is a portfolio-preparation reference, not a conversation log or finished portfolio copy.
- Cross-check [CONTEXT.md](CONTEXT.md) when updating project evidence or ownership; update affected summaries, recommendations, and open questions without duplicating project details there.
- Keep entries self-contained, factual, and concise; avoid conversational history and comparisons between projects.
- Update existing details in place; remove superseded information and answered prompts rather than appending corrections. Do not rank or cull projects unless requested.
- Separate Kent's contributions from collaborators' work. Keep uncertainty in the relevant **To add** list rather than repeating cautions throughout.
- Preserve metric units and reporting periods. Plays, submissions, and event attendance are not interchangeable or additive unique-user counts.
- Distinguish measured results, simulations, informal observations, and user testing. Confirm credits and publication permissions before publishing.

## Galilean Mission — KidsSTOP

### Overview

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

- **Reported reach:** 19,177 participants overall
- **Repository / evidence:** [ks-alien-invasion](https://github.com/kent12t/ks-alien-invasion); UDP bridge `a930bb8`, multitouch `d68da9c`, startup updates `642f5da`, Web Audio/state handling `8891b22`, startup-click fallback `d7ea476`. History distinguishes Kent's integration/operations changes from Kesh's baseline gameplay, Pixi.js migration, waves, and assets.
- **To add:** Hardware/system diagram; testing observations and changes; latency recordings/measurements; SOP excerpts; renders and built-space photos; moon/animation breakdowns; collaborator credits; footage.

## AIC Roadshow Interactive Apps — Ideal Pursuit & Whack-a-Myth

### Overview

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

#### Overview

**Experience:** Personality quiz with six possible personalities, ending in a camera-based costume overlay and a downloadable photo accessed by QR code.

- **Repository:** https://github.com/kent12t/redis-passion-v2
- **Repository development period:** March 2025–February 2026; face-tracking prototype followed by quiz, photo-sharing, localization, and booth refinements.
- **Personalities:** The Wellness Warrior, The Adventurous Artist, The Tech Explorer, The Everyday Creator, The Urban Gardener, and The Community Champion.

#### Kent's contributions

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

#### Evidence and supporting material

**Commit evidence:** Tracking/smoothing `d37bad3` and `b32656d`, face-api migration `e6cc6ad`, R2/QR `be8b16d` and `801866c`, Supabase `7e19169`, localization `03ecf50`, overlay fallback `6e18c26`, capture/upload refinements `1ac69e8` and `32e75b0`, local-blob preview `d962a3e`.

**To add:** Client credits; personality rationale; simulation method/results and tie-bias checks; tracking and usability observations; consent/storage controls and R2 lifecycle evidence; location/implementation of the CSV fallback described in project notes (not found in the reviewed repository); session-start/completion definitions for reporting; final UI; footage.

### Whack-a-Myth

#### Overview

**Experience:** p5.js game with Arduino-connected physical buttons. Players classify six shuffled statements about ageing as fact or myth while they rise on balloons. Correct answers score +20, wrong-button answers −10, and escaped balloons −5; results provide a star rating and review of missed statements.

- **Repository:** https://github.com/kent12t/whack-a-myth
- **Repository development period:** June–September 2025.
- **Stack:** JavaScript, p5.js/p5.sound, Vite, Arduino firmware, p5 Web Serial, Supabase, localStorage, and an Express CSV server.

#### Kent's contributions

- Ideated an early version of the game and pitched it to the client.
- Implemented a switcher for English, Chinese, Malay, and Tamil.
- Carefully tested scoring permutations, including wrong-answer penalties, to tune how the scoring felt.
- Implemented Arduino firmware and browser serial integration: two buttons send newline-delimited `0`/`1` messages at 9,600 baud, mapped to myth/fact inputs and state-dependent start/restart/language controls. Firmware includes LED feedback and a 400 ms input delay; the browser attempts to reopen previously authorized ports after connection loss.
- Refined balloon motion/speed, answer feedback, sound timing, restart flow, and the missed-question report. Baked asset transparency instead of relying on multiply blending.
- Bundled p5/serial libraries and fonts locally for offline use; added kiosk launch and startup-click automation.
- Implemented selectable reporting modes: Supabase session start/end/score tracking with localStorage fallback, or device-specific CSV files written by an Express server and cached in localStorage after successful writes. CSV mode records timestamps, score, session date, and an ordered array of correct/wrong/skipped question outcomes; per-question logging is not implemented in Supabase mode.
- Added persistent browser-derived device IDs to separate each booth computer's CSV file and avoid filename conflicts when collecting results from multiple installations.

#### Team contributions

Soldering, enclosure fabrication, and physical connections. `elnathanhung` contributed a louder-audio update; event-data uploads also appear in the history.

#### Evidence and supporting material

**Commit evidence:** Serial/firmware `5c9930f`, Supabase `88ece9f`, offline storage `c43a1fa`, browser connection flow `269df00`, Express CSV server `e380d7f`, local libraries/fonts `b4dc1ef`, device-separated CSVs `243f75b`, translations `2add009`, question-outcome logging `006a41c`, startup automation `8b217cb`.

**To add:** Question-development credits; scoring permutation examples; physical-button response measurements and effect of the 400 ms firmware delay; deployed reporting mode, failed-write recovery, and reconciliation with interaction totals; client feedback; assets and credits; device-ID/privacy and CSV access/retention controls.

## Hawker Colours Survey Platform

### Overview

- **Client / collaborator:** Hans Tan Studio; associated with a Good Design Research Grant.
- **Dates:** June 2022–June 2023.
- **Format:** Collaborative mobile-first survey platform, results exploration, and interactive editorial stories about hawker tableware colours.
- **Repository:** https://github.com/hawker-colors-survey/hawker-colors; default branch `develop`.
- **Reviewed history:** Kent-attributed work from February–June 2023; the broader June 2022–June 2023 dates above come from the résumé.
- **Tools across project versions:** React, TypeScript, Vite, Next.js, Mantine, Embla carousel, Airtable; later Prisma/PostgreSQL, tRPC, and NextAuth. The résumé identifies Supabase and Vercel; the reviewed schema confirms PostgreSQL but does not independently establish the database host.

### Kent's contributions

- Contributed frontend implementation while newly learning React, including substantial interactive-story UI, carousel work, and survey/filter logic, per Kent and reviewed history.
- Built an Airtable-backed prototype, per Kent; encountered the 100-record pagination limit while retrieving records and sought database advice, receiving a recommendation to use Supabase.
- Built the sentence-style results filter with modal radio choices, reducer-managed filter state/reset, asynchronous Airtable retrieval, and age/area/frequency/food filtering and aggregation. Collaborator refactoring and colour-stack work also appear in the same PR.
- Implemented ten People's Palette story modules and their shared layout/navigation, including interactive image stacks, reveal/toggle interactions, and carousel routing.
- Implemented Street to Table historical essay layouts with horizontal image scrolling; refined Rainbow Maker layouts and assets alongside collaborators' work.
- Refined responsive sizing, scrolling, image loading, survey age/input constraints, button behaviour, back navigation, and global styling.
- Résumé reports 20+ story layouts/components and translating Figma designs into responsive React components; the reviewed examples substantiate substantial editorial implementation, not an audited total.

### Collaborators and architecture

Shaun Tung authored the reviewed Vite-to-Next migration (`256f44b`) and major Prisma/tRPC/NextAuth migration (`4050d09`, PR #204). Kent confirms he did not implement the database migration.

### Outcomes and supporting material

- **Reported reach:** 1,400+ users.
- **Research outcomes:** Featured in The Straits Times and published as *Hawker Colours: Melamine Tableware in Singapore*, per résumé.
- **Later museum adaptation:** Kent reports that an external team rebuilt/adapted Hawker Colours for the National Museum of Singapore's revamped Singapore History Gallery in 2026. This is separate from Kent's original platform contribution.
- **Museum coverage:** The museum's [29 September 2026 media release, p. 9](https://www.nationalmuseum.nhb.gov.sg/api/media/55c9c0f1-6f18-488c-95c3-7e0c91f641ff/260929%20Singapore%20History%20Gallery.pdf) describes a phygital Hawker Table with tap/rotate interactions in Becoming Singapore (1960s–1980s), for the gallery reopening on 10 October 2026. [CNA Lifestyle coverage](https://cnalifestyle.channelnewsasia.com/living/singapore-history-gallery-national-museum-reopens-october-2026-589726) also depicts the interactive Hawker Centre Table. These sources establish the installation; its Hawker Colours lineage is Kent's account. Kent also supplied an [Instagram post](https://www.instagram.com/p/DebXFH4mvGE/).
- **Commit evidence:** Results-filter PR #192 / `84a4e86` (Kent's constituent commits include reducer `c91785a`, retrieval `cf95776`, filtering `1f4ee03`; Shaun also contributed); People's Palette PR #198 / `97ff341` (Kent's image interactions `329b297`, `7cd612d`, routing `e3729e4`); Street to Table `5ef45b9`; Rainbow Maker `d9cca42`; back navigation `723b687`.
- **To add:** Public link; precise survey/research purpose and Kent's design versus implementation scope; full team credits; locate/date the Airtable prototype if useful; clarify résumé query-performance and real-time-data claims before reuse; strongest interactive examples and visuals; original publication/article links; museum adaptation credits and source explicitly connecting it to Hawker Colours; Instagram content (not accessible in review); permissions.

## Merit Metrics / TDHR — hackathon prototype

### Overview

- **Repositories:** [UX/frontend and project material](https://github.com/graysonjova/tdhr); [Python server](https://github.com/graysonjova/TDHR-Server).
- **Dates:** Reviewed frontend history March–April 2025; server history includes later February 2026 edits, not evidence of Kent's continued involvement.
- **Context / status:** Closed-demo hackathon project with a reported second-place finish, per Kent. Not established as a production HR product.
- **Experience:** Prototype for uploading work documents, displaying AI-generated evaluations and skills/performance charts, exploring projects and user history, and requesting team recommendations.

### Kent's contributions

User-reported ownership, supported by selected implementation review:

- Gathered his friend's requirements and drew architecture, data-flow, and API-flow diagrams before implementation.
- Owned UX and frontend implementation, including dashboard/chart layouts, navigation, upload/evaluation flows, project/team views, and API integration.
- Suggested Supabase in place of the original standalone SQL database; his friend handled the backend migration. Kent implemented direct frontend Supabase queries and calls to the Python API.
- Refined loading/error states, chart rendering, response parsing, and frontend data access as the backend evolved.

### Collaborator contributions and attribution

- **Friend's contributions:** Python server/evaluation logic, backend/database migration, and Heroku deployment, per Kent. The frontend repository also contains early Python/deployment commits; these must not be attributed to Kent merely because they share the repository.
- **Attribution:** Kent reports using his friend's GitHub identity for some work. History contains both identities; frontend-focused commits under `graysonjova` are consistent with his account, but exact commit-by-commit ownership is not independently recoverable from metadata alone.
- **Stack:** Next.js, React, TypeScript, Tailwind, HeroUI, Recharts, Supabase JS, HTTP API integration; collaborator's Python/Flask server and Heroku deployment.

### Review evidence and supporting material

- **Review limitations:** Client helpers store username/admin state in browser-writable cookies/localStorage; these are not evidence of secure authorization. Database policies and server enforcement were not audited. README claims of objective/bias-free evaluation are product aspirations, not demonstrated outcomes.
- **Evidence:** Upload/chart implementation `aa03fee`; frontend Supabase migration `f30da96` and `a4bff2d`; history view `d35a772`; chart-loading fix `cc4b06b`; current `frontend/utils/supabaseServices.ts` and `frontend/config/api.ts`. Shared-identity commits support implemented scope, not independent authorship verification.
- **To add:** Hackathon name/date, category and public second-place evidence; whether Kent was an official entrant or supporting contributor and agreed public credit; diagrams; demo/screenshots with synthetic data; collaborator confirmation; division of UX/visual design; original brief and demo limitations.

## DBS Quiz Word Cloud — uncommissioned pitch prototype

### Overview

- **Repository:** https://github.com/kent12t/dbs-wordcloud-v2
- **Dates:** March 2026; implementation history concentrated on 12–13 March.
- **Context / status:** Prototype pitched to enhance an existing client event; did not receive approval, per Kent. Not a delivered event installation.
- **Experience:** Five-question mobile quiz with a result/share view and a live TV word cloud aggregating selected answers.

### Contributions and implementation

- **Kent's work / recorded implementation:** Built the prototype through an AI-assisted workflow documented by scaffolding/Figma-MCP commits; iterated visual design, frontend/backend connection, CORS, data storage, and word-cloud layout. Exact concept and visual-design credits remain to be supplied.
- **Stack:** React, TypeScript, Vite, Tailwind, Node/Express, Supabase, Server-Sent Events, canvas-measured DOM word placement with spiral collision search.
- **System:** Server validates five allowed-choice answers, saves them, and broadcasts updated counts over SSE; client implements snapshot fetching and reconnect backoff. Final offline mode supplies static mock counts and skips persistence, not a local database. README's SQLite description is outdated relative to the reviewed implementation.

### Evidence and supporting material

- **Evidence:** Initial implementation `ebe3dc7`, Figma-MCP design pass `44a7545` / `0d2143d`, Supabase rewrite `7b14ec4`, offline/layout iteration `4bb26cb`; `server/db.ts`, `server/index.ts`, and `client/src/hooks/useWordCloud.ts`.
- **To add:** Pitch brief, concept/design credits, intended enhancement to the existing event, screenshots/recording and UX diagram (README image target absent from reviewed tree), functional-demo validation, client/brand publication permission. No event usage or production-reliability claim established.

## Forkcast — food-personality quiz

### Overview

- **Repository / URL:** https://github.com/kent12t/forkcast / https://fork-cast.vercel.app/
- **Dates:** March–May 2025 in reviewed default-branch history; main quiz implementation April–May.
- **Context:** Helped a friend implement a public personality quiz, per Kent.
- **Experience:** Illustrated quiz assigning one of six food personas, with result, sharing, replay, and persona-information views.

### Contributions and collaborators

- **Kent's contributions:** Frontend development and design implementation; quiz navigation/state and persona scoring, image preloading/loading transitions, responsive layouts, sharing/credits, Vercel Analytics, and Supabase attempt/completion logging. Highest persona score wins; ties use a fixed priority order.
- **Collaborators:** README credits visual design to `@viviantxh` and development to Kent. An initial Next.js scaffolding commit is attributed to `graysonjova`; question/personality/illustration authorship is not established by this review.
- **Stack:** Next.js, React, TypeScript, Tailwind, Framer Motion, Supabase, Vercel.

### Outcomes, logging, and supporting material

- **Reported reach:** 1,000+ responses, per Kent; reporting period and definition not yet supplied. Do not equate responses with unique people or completed attempts without checking the source.
- **Logging:** Starts a UUID-tagged attempt with `completed=false`, then updates that row with persona and completion timestamp; errors are logged without intentionally stopping the quiz. No persistent cross-visit identity; schema policies and actual reporting accuracy were not audited.
- **Evidence:** Quiz/scoring `2122011` and current `QuizContext.tsx`; animation `6a00b0c`; sharing `5356436`; single-row tracking `154302c`; preloading refinements `4374006` / `19262d8`; README credits.
- **To add:** Purpose and collaborator credits for concept/questions/scoring/artwork; source/date and completion definition for 1,000+ responses; screenshots/video, design-to-implementation examples, privacy/retention and database-policy checks; scoring rationale if relevant.

## AIC National Celebration of Seniors (NCOS) 2026

### Event overview

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

#### Overview

- **URL:** https://protein-catcher.vercel.app/
- **Repository:** https://github.com/kent12t/protein-catcher
- **Development:** September–October 2026 in the reviewed history.
- **Stack:** React, TypeScript, Vite, pointer-based input, browser audio, and a local CSV-writing endpoint provided by the Vite dev/preview server.
- **Format / mechanics:** Touch-friendly educational game: enter weight in kg and select below 50 or 50 and above, then move a catcher to collect falling foods within 15 seconds. The game calculates its target using 0.8 or 1.2 g/kg respectively, rounded to whole grams; reaching it ends the round early. Eleven food types carry protein values, followed by a catch breakdown and food-reference guide.
- **Languages:** English, Chinese, Malay, and Tamil, including localized artwork and fonts.
- **Status:** Publicly deployed and used at NCOS.

#### Kent's contributions

- Originated the game idea and planned the educational content.
- Created wireframes; a teammate developed the visual design.
- Implemented the design using a largely AI-assisted workflow.
- Refined catching interactions, fall speed, audio feedback, desktop scaling, and image preloading/decoding before later screens appear.
- Added four-language copy/artwork, a larger result-screen QR code, and kiosk auto-launch scripts.
- Implemented device-specific local CSV logging for completed rounds: weight, age group, protein caught/target in g, success, elapsed gameplay time, UTC start time, and language. Logging works offline on loopback dev/preview servers, not the hosted game; interrupted rounds are not recorded.

#### Outcomes and supporting material

- **Event usage:** 438 plays.
- **Commit evidence:** Initial game `a5d4ac3`, interaction refinements `55fd4a3`, image preloading `7eeabf1`, CSV logging `7bcce8b`, localization `d1d81f4` and `30b465c`. Several implementation commits explicitly credit Cursor co-authorship.
- **To add:** Nutrition-content sources/client approval; participant feedback; reporting period and reconciliation of completed-game logs with reported plays; weight/age data handling and retention; screenshots/video.

### CCD Thank You — Community Care Day Card Maker

#### Overview

- **URL:** https://ccdthankyou.com/
- **Status:** Live campaign and NCOS touchpoint.
- **Dates:** Repository implementation begins in July 2026, with an August asset update; Convex submission/wall integration in September and UI rebuild following redesign in October. Analytics and blank-card safeguards were extended in November.
- **Experience:** Visitors personalize a thank-you card using frames, community care professionals, messages, and stickers, then submit it to a live Thank You Wall. Supports online and event flows, with QR-based download on site.

#### Kent's contributions

- Created prototype Figma layouts and a design system structured for MCP-assisted implementation, then deployed a working Vercel prototype to support the successful pitch.
- Created the system architecture diagram, security overview, UX diagram, and wireframes.
- Rebuilt the application after a UI designer teammate redesigned it.
- Refined the product experience through a largely AI-assisted implementation workflow: responsive editor/modals, visible tablet-landscape actions, persistent event-mode navigation, and immediate replay/spotlighting of a submitted card.
- Implemented a public, read-only card-metadata dashboard with Singapore-time date filtering, summary counts, and daily totals; queries are capped at the latest 5,000 records with a truncation notice.
- Added submission rate limiting, image validation, duplicate-request handling, and a disabled submitting state; later blocked frame-only cards in the editor.
- Added ESLint and Playwright checks for Chromium/WebKit, including rendering, blank-card prevention, event navigation, layouts, analytics, and wall loading. The reviewed GitHub workflow is a manually triggered passive ZAP baseline scan, not an automatic test/deployment gate.
- **Collaborators:** Original concept by others; UI redesign by a designer teammate.

#### System and implementation

- **Stack:** Next.js App Router, React, TypeScript, Tailwind, Convex, Canvas image export, `sharp`, `qrcode.react`, Vercel Analytics.
- **System details:**
  - Card submission exports an 800 × 663 image, using WebP with PNG fallback, and stores it in Convex.
  - Convex provides submissions, image storage, realtime published-card updates, and dashboard-based moderation.
  - The display wall uses cached, server-generated WebP thumbnails with bounded download concurrency, decoded-image reuse, progressive loading, and reduced-motion handling. Enlarged highlights load originals; newly loaded cards enter off-screen rather than replacing visible artwork. Existing smaller submissions remain compatible.
  - Dedicated analytics view; matching mobile/desktop editor layouts; event-mode routing and QR download flow.

#### Outcomes and supporting material

- **Event usage:** 347 cards submitted.
- **Documented performance experiment:** A 24 October comparison reported 4.54 MiB versus 0.43 MiB of browser image transfer over 30 seconds (about 91% less), comparing production with an updated local production build under desktop Chromium mobile/network/CPU emulation. This is not a physical-device measurement or proof of equivalent server-bandwidth savings.
- **Repository / evidence:** [aic-card-maker](https://github.com/kent12t/aic-card-maker); submission/backend `a0cd39d` and `8169efe`, wall optimization `9d10530` (Cursor Agent co-authored), event navigation `90d097d`, analytics `e4a36e9`, frame-only safeguard `4c84e95`; `README.md` and `docs/display-wall-performance.md`.
- **To add:** Campaign/client credits; confirm prototype/pitch milestone dates; architecture/UX diagrams; accessibility testing; privacy/retention and dashboard-access controls; scan results and actual CI execution evidence; physical-device/hosted-cache validation; campaign-wide outcomes; assets.

### Motion in Bloom

#### Overview

- **URL:** https://aic-motioninbloom.pages.dev/
- **Repository:** https://github.com/kent12t/aic-motioninbloom
- **Development:** August prototype; October 2026 sit-to-stand game rebuild and booth refinements.
- **Stack:** React, TypeScript, Vite, MediaPipe Pose Landmarker, local WASM/model assets, transparent flower WebM animations, Cloudflare Pages, and local CSV logging.
- **Format / rules:** Portrait camera-based game: complete five seated → standing → seated cycles within 40 seconds to grow a garden. A rise starts a flower animation; returning to sitting completes the repetition. Completed blooms remain visible until the next ascent, and results reflect the completed flowers.

#### Kent's contributions

- Contributed to ideation.
- Created wireframes; a teammate developed the visual design, which Kent implemented.
- Improved tracking robustness through seated calibration, smoothed multi-frame confirmation, separate rise/return thresholds, and head/shoulder/hip anchor fallbacks. Losing landmarks alone cannot score a repetition; prolonged loss discards a pending repetition without stopping the round timer.
- Reduced bystander interference through central-player selection and masking outside the central 60% before inference. Later widened body-scale tolerance without narrowing the detection area, allowing natural straightening and partial upper-body clipping.
- Implemented client feedback on camera presentation, camera setup/retry guidance, pose illustrations, and 180° rotation for inverted webcams.
- Connected early upward movement to flower playback, held completed blooms until the next rise, and supplied still-image fallbacks for failed video playback.
- Avoided repeated inference on unchanged camera frames and capped processing at 20 FPS with a 640-pixel-wide input, independently of the gameplay timer.
- Added kiosk auto-launch and device-specific CSV logging of finished and interrupted started rounds, including cycles, outcome, duration, UTC start time, and interruption reason. Collection requires a loopback dev/preview server; hosted pages do not log results, and page-exit logging is best effort.
- Used a largely AI-assisted workflow and added deployment gates for dependency auditing, linting, synthetic tracker/round tests, TypeScript/build, and packaged-asset checks. Cloudflare deploys the checked artifact; separate manual Playwright smoke tests cover camera/setup and media behaviour, not real-person tracking accuracy.

#### Processing and privacy

Pose inference runs in-browser with locally served model assets; no inference server is required. The CSV logger stores no camera images, landmarks, or personal details. Player continuity checks are not biometric identification and cannot eliminate all interference inside the play area.

#### Outcomes and supporting material

- **Event usage:** 375 plays.
- **Commit evidence:** Rebuild `410074a`, deployment gates `42d6009`, manual browser checks `0edd8cb`, inference optimization `6f5b4b7`, central-player selection `d9a55f6`, logging `a0de1dc`, camera rotation `4438eb6`, tracking tolerance `212ae54`.
- **To add:** Camera/hardware setup; representative-participant tracking measurements and failure footage; privacy notice/retention; reconciliation of finished/interrupted rounds with reported plays; deployed calibration/QR settings; footage; publication/delivery status of the separate November reporting-dashboard branch.

### Dial-a-Story

#### Overview and contributions

- **Format / tools:** Outsourced interactive phone-booth experience using Unity, Arduino, and a video player.
- **Kent's contributions:** Early ideation and on-site technical support.
- **Supplier's contributions:** System implementation and analytics.

#### Outcomes and supporting material

- **Event usage:** 519 plays.
- **To add:** Interaction/story flow, supplier credits, support examples, and images/video.

### NCOS supporting material to add

- Exact event dates/venue, commissioned scope, collaborators and suppliers, spatial renders versus built photographs, layout adaptations, and booth examples.
- Analytics definitions and reporting periods; examples of client feedback, observations, and participant testing.

## Lee Kong Chian Natural History Museum — app and games

### Overview

- **Context:** Design Incubation Centre internship, January–June 2023, confirmed by Kent.
- **Client / venue:** Lee Kong Chian Natural History Museum (LKCNHM).
- **Experience:** *A Digital Naturalist* (listed as LKCNHM* in app stores), powered by Musee and designed by DIC. NFC-enabled museum app for *In the footsteps of a naturalist*, with four Heritage Gallery checkpoints unlocking learning activities about naturalists and biodiversity.
- **Repositories / demo:** [Original app and history](https://github.com/didny/musee-lkcnhm); [standalone games](https://github.com/kent12t/lkcnhm-games); [mobile-oriented game demo](https://kent12t.github.io/lkcnhm-games/).
- **Recorded development / launch:** Kent's default-branch commits span 25 January–17 April 2023. Launched at the museum's eighth-anniversary event on 18 April 2023, confirmed by museum coverage and Kent; Yuta's 17 April commit is labelled “Release for Opening Event”. Standalone games published in June 2024, not evidence of a new museum delivery then.
- **Tools:** Flutter/Dart, JavaScript, p5.js, WebViewX integration, Airtable-backed game data during development, later bundled JSON, cached network images.

### Kent's contributions — games

- Developed the four p5.js activities: packing naturalists' equipment into an irregular-shape snapping puzzle; finding four hidden insects in a pannable forest; sorting insects into classification boxes; and placing mammals east or west of the Wallace Line. The original history also records collaborator changes, particularly to Finding and shared integration.
- Implemented reusable draggable/target-area classes, grid snapping and polygon interactions, touch handling, collision/placement checks, item navigation, shuffling, scoring, and completion-state handling.
- Refined mobile layouts, play-area constraints and safe-area spacing; prevented unwanted page scrolling and added feedback such as active-item glow, correctness overlays, and informational popups that block game input while open.
- Implemented Airtable retrieval for game items/areas during development. Added score/max-score updates and game-completion calls into the shared JavaScript-to-Flutter messaging system; this was collaboration on an existing bridge, not sole ownership of that integration.

### Kent's contributions — Flutter UI and flow

- Implemented and refined onboarding, chapter/activity tutorials, completion/congratulations, map, quiz, and answer-screen UI alongside Yuta's app development.
- Built/refined reusable buttons, app bars, paginated tutorial/text layouts, progress indicators, chapter-specific styling, and limited inline emphasis formatting for onboarding text.
- Refined home/map/help navigation, first-run routing, quiz exit/completion flow, and transitions between activities and chapter completion.
- Addressed Flutter/WebView layering for app controls, image/background sizing, and network-image caching with loading/error presentation; performed release-period code cleanup and documentation.

### Collaborators and attribution

- **Yuta Nakayama (`didny`, also `nkymut` in history):** Initial Flutter app foundation; NFC scanning/unlocking; WebView/JavaScript bridge and game integration; user-session/Firebase work; Airtable-to-JSON/Firebase data changes; Finding touch/inertia and loading fixes; other UI/routing work; iOS build and opening-event release. Kent's UI/game changes should not be described as sole ownership of the app or these systems.
- **Kiwi:** Standalone README credits game assets to Kiwi; original history also contains asset/content updates from `kheehwee`. Confirm the account-to-person mapping and full design/illustration credits before publication.

### Evidence and supporting material

- **Official launch evidence:** Museum recap [“We are 8!”](https://lkcnhm.nus.edu.sg/we-are-8/) (21 April 2023) confirms the 18 April launch, DIC/Musee collaboration, and NFC checkpoint experience; includes event and checkpoint photographs. The [app announcement](https://lkcnhm.nus.edu.sg/a-digital-naturalist-lkcnhm-app/) (11 April 2023) announces availability from 18 April, describes the four chapters, and links to the [App Store](https://apps.apple.com/sg/app/lkcnhm/id6446623521) and [Google Play](https://play.google.com/store/apps/details?id=sg.designincubation.musee_lkcnhm&hl=en). Reviewed 4 November 2026; current store availability was not checked. These sources substantiate the project/launch, while personal contributions are supported by repository evidence.
- **Commit evidence — original app:** Early game implementation `9c8569d`, grid snapping `04c4d66`, dragging collision/data handling `e5fd6c7`, insect sorting `026b5ce`, reusable sorting components `52fa4bd`, Finding popup/input flow `52f4743` / `3960df5`, tutorial UI `56c4f72`, navigation `638db31`, game score integration `537488c` / `42300b0`, cached images `5259c3c`, onboarding emphasis `d217e9a`. Standalone extraction `5593a90` and README `57cb892` are in `lkcnhm-games`.
- **To add:** Precise personal concept/UX/visual-design responsibilities and team credits; participant feedback/testing and usage evidence; screenshots/footage of app, NFC checkpoints, and physical museum context; publication permissions, including reuse of museum photographs.
