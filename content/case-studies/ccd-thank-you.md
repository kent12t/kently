# CCD Thank You

## From making a card to seeing it become part of the wall

<!-- Working narrative draft, not publication-ready. Based on PROJECTS.md and its reviewed repository/documentation evidence. No finished visual review has been completed. Bracketed prompts identify missing evidence; do not publish them as claims. -->

**Community Care Day · Online campaign and NCOS 2026 touchpoint**  
Recorded development: July–November 2026. [Confirm prototype/pitch dates, campaign period, and client naming.]

## At a glance

CCD Thank You lets visitors personalise a card with frames, community care professionals, messages, and stickers, then submit it to a live Thank You Wall. It supports online and event flows, including QR-based download on site.

I worked on the prototype layouts, design-system setup, UX and system planning, and the implementation and refinement of the experience. After a designer teammate redesigned the interface, I rebuilt the app using a largely AI-assisted workflow.

**My role:** Prototype Figma layouts and design system, wireframes, UX/system diagrams, AI-assisted implementation direction and refinement, editor/event-flow adjustments, wall optimisation, and reporting tools.

**Credits:** The original concept was developed by others; the UI redesign was by a designer teammate. [Add full concept, visual-design, client, and collaborator credits.]

**Reported event outcome:** 347 cards submitted at NCOS. This is an event submission count, not a campaign-wide or unique-user figure.

> [Opening media: a short recording of personalising a card, submitting it, and seeing that same card highlighted on the wall. Include a mobile/editor still and a photograph of the event display. Use cleared or synthetic card content.]

## The experience between editor and wall

The interaction spans more than one screen: visitors make something personal, submit it, see it enter a shared display, and can retrieve a copy. My refinements focused on the transitions and feedback across that journey, alongside the editor itself.

[Add the campaign objective, intended audiences, and any confirmed constraints around event hardware, connection quality, moderation, or facilitation. Do not infer the original brief from the implemented features.]

## 1. Turning the idea into something the team could work with

I created prototype Figma layouts and a design system structured for MCP-assisted implementation, then deployed a working Vercel prototype to support the successful pitch. I also created architecture, security-overview, and UX diagrams, alongside wireframes.

These artefacts connected the proposed experience with an implementation plan. The later UI redesign was a teammate's work; my next contribution was translating it into the application and refining the resulting behaviour.

**Evidence to show:** Prototype layout, wireframe/UX flow, and redesigned interface, with dates and authorship labelled. Include a simplified system diagram only after checking it against the delivered app. A security overview documents planning, not a security audit.

## 2. Keeping the editor usable across contexts

I refined the responsive editor and modals, including keeping actions visible in tablet landscape and maintaining navigation in event mode. I added a disabled submitting state and duplicate-request handling, and later blocked frame-only cards in the editor.

The focus was on the decisions around the main creative action: where controls remain available, what feedback appears during submission, and what counts as a card ready to submit.

**Evidence to show:**

- A tablet-landscape before/after showing action visibility.
- One modal or editor adaptation across mobile and desktop.
- Submission feedback and the frame-only prevention state.

[For each example, add the original problem and how it was identified—personal inspection, client feedback, informal observation, or user testing. Do not present implementation changes as proof that users completed the task more successfully.]

## 3. Making a submission visible in the shared experience

I refined the immediate replay and spotlighting of a newly submitted card, as well as persistent event-mode navigation and the QR download flow. These are the points where an individual editor interaction connects to the public display and a take-away copy.

On the wall, newly loaded cards enter off-screen rather than replacing visible artwork. The implementation also includes reduced-motion handling, progressive loading, and reuse of decoded images.

**Evidence to show:** A continuous editor-to-wall recording with timing and device context noted; a wall clip showing new cards entering; an event-mode navigation example. Confirm whether the recording represents the hosted campaign, an event setup, or a local build.

## 4. Reducing the wall's image-transfer load

I worked through an AI-assisted implementation workflow to refine how the wall loads images. The updated implementation uses cached, server-generated WebP thumbnails, bounded download concurrency, and decoded-image reuse; enlarged highlights load the original images.

A documented comparison on 24 October recorded **4.54 MiB versus 0.43 MiB of browser image transfer over 30 seconds—about 91% less**. It compared production with an updated local production build under desktop Chromium mobile/network/CPU emulation.

This is a specific browser-transfer experiment, not a physical-device result, an equivalent server-bandwidth saving, or evidence of faster task completion. It supports a narrower account of the loading change.

**Evidence to show:** The comparison setup and transfer capture, with the limitation alongside the result. Add a physical-device/hosted comparison if available rather than broadening the existing claim.

## Supporting the campaign behind the interface

The app uses Convex for submissions, image storage, realtime published-card updates, and dashboard-based moderation. My work also included submission rate limiting and image validation, plus a public, read-only card-metadata dashboard with Singapore-time date filters, summary counts, and daily totals. The dashboard is capped at the latest 5,000 records and displays a truncation notice.

I added ESLint and Playwright checks covering selected rendering, editor, event-navigation, analytics, and wall-loading behaviour in Chromium and WebKit. These checks support specific behaviours; they are not a comprehensive accessibility, privacy, security, or real-world reliability assessment.

[Use a redacted or synthetic dashboard image if this section adds to the story. Confirm public-data scope and access/retention controls before publication. Keep detailed checks and backend mechanics secondary to the experience decisions.]

## Outcomes and reflection

At NCOS, 347 cards were submitted, as reported in the project inventory. Campaign-wide results are not yet established here. The wall experiment provides a documented loading-related result; improvements to editor usability still need evidence beyond the existence of the changes.

My contribution was in shaping and refining how the parts worked together: the editor, submission states, event flow, and shared wall. Recent implementation was largely AI-assisted, with my focus on UX decisions, system planning, and directing and refining the output—not a claim of independently writing every part of the code.

[Add one observed participant response, the most consequential iteration, and one remaining limitation. If no participant testing exists, state that plainly and describe what should be tested next.]

**[See the wider NCOS event →](ncos-2026.md)**

## Tools

Figma; Next.js, React, TypeScript, Tailwind, Convex, Canvas image export, `sharp`, `qrcode.react`, Vercel Analytics, Playwright. Implementation tools describe the project stack, not a proficiency rating.

## Publication checklist

- Confirm concept/UI credits, client permission, campaign dates, and prototype/pitch milestones.
- Review mobile/tablet/editor and wall recordings before judging visual quality or usability.
- Use cleared cards or synthetic submissions; check personal information, moderation, retention, and public metadata exposure.
- Confirm reporting period and source for 347 event submissions; keep event and campaign totals distinct.
- Retain the performance experiment's units, duration, setup, and limits whenever using its result.
- Replace evidence prompts before publishing. Private source: [PROJECTS.md](../../PROJECTS.md#ccd-thank-you--community-care-day-card-maker).
