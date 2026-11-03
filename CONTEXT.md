# Portfolio and career context

Last updated: 2026-11-03

## Maintenance instructions

- Read this file before continuing portfolio or career discussions. Maintain it as a concise current-state brief, not a conversation log.
- Rewrite affected sections when information changes. Remove superseded facts, answered questions, repeated advice, and temporary execution details; do not append correction histories.
- Keep each fact in one place. Preserve only information that will materially help a future session: goals, preferences, constraints, evidence, decisions, and unresolved questions.
- Distinguish user statements, reviewed evidence, and assistant proposals. Do not turn suggestions into agreed decisions or self-reported outcomes into verified results.
- Link to source files rather than reproducing them. Recheck repository configuration and job availability when needed instead of treating this file as live technical documentation.
- Do not store contact details or confidential client information here. Confirm publication permissions for portfolio assets and claims.

## Goals and preferences

- Build a cool, interactive personal portfolio replacing a defunct WordPress site. This repo also supports career exploration.
- Kent is open to Astro if it is straightforward to use, but has little practical experience with it. Cloudflare Pages is the anticipated host; actual deployment setup is unconfirmed.
- Wants to leave the current small advertising agency because of limited growth. Next career direction is undecided; do not assume conventional frontend engineering is the goal.
- Enjoys debugging and improving UI/product experience. Is less interested in deep CS theory and is discouraged by the prospect of a fully technical role after interview feedback.
- Concerned about tech job-market conditions and security. Advice should account for preferences and team quality, not push engineering as the default destination or imply another path is risk-free.

## Background

- NUS Industrial Design, 2020–2024; minor in Interactive Media. Background spans physical product design/Rhino, UI/UX/service design, and Blender modelling/rendering.
- Programming progression: p5.js → HTML/JS → React → TypeScript/Next.js/Tailwind. Has used Supabase and Convex; less confident with backend work.
- Off the Beaten Track multimedia designer/developer since Dec 2024, per April résumé. Work includes spatial design/renders, activity ideation, microsites, interactive installations, and event-day floor running/technical support.
- Earlier experience includes Picup Media UI/UX and a Design Incubation Centre internship.

## Work and source material

`PROJECTS.md` is the editable, pre-selection project inventory. Maintain project-specific details there; use this section only as a source overview and avoid duplicating expanded entries here.

### Résumé

Source: `KentTimothy_Resume_Apr2026-1.pdf`, accurate as of April 2026 according to Kent. Refresh project status and metrics before publication.

- **Galilean Mission / KidsSTOP:** Pixi.js/WebAudio game, LiDAR input, UDP media-server integration, kiosk automation and deployment. Résumé reports 4,000 participants in five weeks.
- **AIC roadshow apps:** React/p5.js, webcam computer vision, quiz/photo generation, R2 storage and QR retrieval. Résumé reports 4,000+ interactions.
- **Hawker Colours:** React/TypeScript/Supabase survey platform, Airtable migration, responsive components and 20+ story layouts. Résumé reports 1,400+ users.

These are résumé claims, not independently audited results. Keep personal contribution distinct from team output and avoid summing potentially overlapping audiences.

### Work shared since the résumé

These touchpoints belong to **AIC National Celebration of Seniors (NCOS) 2026**: Protein Muncher, CCD Thank You, Motion in Bloom, and outsourced Dial-a-Story. See `PROJECTS.md` for ownership, metrics, spatial-design scope, and event operations. Kent reports a 600+ sqm event with 15+ partner booths and 17,000 attendees over two days; these are event-wide figures, not individual app usage.

User-reported; websites, implementation code, commit histories, and safeguards have not been reviewed. The sibling card-maker README has been read as an architecture/features source:

- https://protein-catcher.vercel.app/ — Protein Muncher, public app.
- https://ccdthankyou.com/ — live campaign; Kent particularly highlights its product-experience refinement.
- https://aic-motioninbloom.pages.dev/ — MediaPipe computer-vision interaction intended for an on-site context rather than general online use, though accessible online.
- These were built since the July interview, largely through AI-assisted / “vibe-coded” implementation. Kent says commit histories show sustained care in refining the final experience.
- For CCD Thank You and Motion in Bloom, Kent has begun adding checks, linting, tests, and CI, largely asking GPT to establish production guardrails. Their scope and effectiveness are not yet assessed.
- Do not equate AI assistance with absence of authorship or product judgement; equally, shipped output and configured checks do not by themselves establish independent code understanding or reliability.

## Bifrost interview and current technical confidence

Source: `feedback.txt`; frontend engineer interview reached round 3 in July 2026.

- Praised portfolio aesthetics, attention to detail, UI instincts, cross-domain ability, autonomy, and collaboration.
- Main gaps: React state/props/hooks/useEffect; explaining the flow from search input to backend API request; understanding and justifying AI-generated code.
- Feedback accepted AI use but expected ownership of its output, and described the gaps as learnable.
- As of November 2026, Kent says React understanding has not substantially improved. More shipping and production guardrails should not be represented as having resolved those gaps.
- Kent also identifies limited concrete user testing compared with research-oriented product-design roles such as OGP.

## Portfolio approach

**User position:** open to Astro, provided it is approachable. No detailed architecture or visual direction has been approved.

**Assistant proposal:**

- Keep the existing Astro + TypeScript + Tailwind foundation; use static Cloudflare Pages hosting initially. Add no backend or CMS without an actual requirement.
- Use Astro layouts and Markdown/content collections for case studies. Introduce React islands or creative-coding libraries only for interactions that need them; explain unfamiliar Astro concepts as they arise.
- Make content immediately readable, with a purposeful interactive layer rather than mandatory experimental navigation. Support mobile, keyboard access, reduced motion, and fallbacks for heavy effects.
- Start with three strong case studies and an optional playground. Reconsider selection using the newer projects, not just the April résumé.
- Case studies should show the problem, audience/context, individual role, constraints, iterations, design/technical decisions, outcomes, and limitations. Capture installation footage where permitted.
- Show product judgement through concrete before/after examples and reasons for changes. Label informal observations honestly; do not invent user research or imply tests prove usability.

Repository baseline when reviewed: Astro 5/Tailwind 4 starter, no React integration or CMS, default static output. See `package.json` and `astro.config.mjs` for current details.

## Career working hypotheses — not decisions

Potential positioning: **Creative technologist building interactive experiences for screens and physical spaces.**

- **Creative technologist / interaction prototyper / interactive developer:** closest demonstrated overlap of design, code, spatial work and real-world delivery. Prioritize mentorship and role boundaries; avoid reproducing a one-person technical department with event crunch.
- **Interaction/product designer with strong prototyping skills:** worth exploring if experience design and iteration are more satisfying than production engineering. Research-heavy roles will require stronger evidence of user insight and testing; not all design roles have identical expectations.
- **Design engineer / UX engineer:** inspect actual responsibilities carefully. Many are substantial engineering roles, not a less technical alternative to frontend.
- **Frontend/product engineer:** remains possible if Kent wants the work and its learning investment, but is not the default recommendation. Practical code/data-flow understanding is distinct from a full CS curriculum and still matters when shipping AI-assisted systems.

Judge employers by senior peers, critique/code review, scope, progression, business health, and on-site/weekend expectations—not title alone. No path is inherently AI-proof or secure.

## Employer and sector leads

Singapore is a provisional focus, not a confirmed geographic constraint. Leads are not assurances of vacancies or fit.

- **GovTech Giant Robots Labs:** [Creative Technologist posting](https://jobs.careers.gov.sg/jobs/greenhouse/4007972201?gh_jid=4007972201), reviewed 2026-11-03. Digital/physical prototyping and product judgement; asks for roughly 4–8 years, so a stretch/reference role.
- **OGP/GovTech:** public-interest products. [OGP design expectations](https://www.open.gov.sg/careers/what-we-do/product-design/) emphasize research, usability, and design decisions; assess fit rather than assuming technical prototyping alone is sufficient.
- **Moment Factory:** [careers](https://momentfactory.com/pages/careers); international immersive-experience reference. Geography/work rights need checking.
- Further research: HOL Experiences, Kingsmen, Pico, Science Centre Singapore, Resorts World Sentosa, Mandai Wildlife Group, Marina Bay Sands, Accenture Song.
- Sector buckets: museums/learning, attractions/immersive experiences, experimental technology teams, public-interest products, and product/design consultancies.

## Useful next steps and open questions

- Review the newer projects and, if accessible/authorized, their repos and selected commits to identify concrete strengths, technical ownership, and case-study material. Do not infer implementation quality from appearance alone.
- Clarify which activities Kent wants more or less of: UI refinement, prototyping, research, spatial/3D design, systems implementation, and event operations.
- Clarify salary floor, location/work authorization, relocation/remote preferences, travel/hours, and desired mentorship.
- Confirm public-use permissions for client assets and whether campaign submissions/camera data require special care in demos.
- Pick one case study before investing in an elaborate homepage. Build a small role shortlist based on desired day-to-day work rather than titles alone.
