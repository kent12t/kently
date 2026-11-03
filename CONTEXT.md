# Portfolio and career context

Last updated: 2026-11-03

## Maintenance instructions

- Read this file before continuing portfolio or career discussions. Maintain it as a concise current-state brief, not a conversation log.
- Rewrite affected sections when information changes. Remove superseded facts, answered questions, repeated advice, and temporary execution details; do not append correction histories.
- Keep each fact in one place. Preserve only information that will materially help a future session: goals, preferences, constraints, evidence, decisions, and unresolved questions.
- Distinguish user statements, reviewed evidence, and assistant proposals. Do not turn suggestions into agreed decisions or self-reported outcomes into verified results.
- Link to source files rather than reproducing them. Recheck repository configuration and job availability when needed instead of treating this file as live technical documentation.
- Keep this brief consistent with [PROJECTS.md](PROJECTS.md); cross-check affected project summaries, recommendations, and open questions whenever either document changes, following [AGENTS.md](AGENTS.md).
- Do not store contact details or confidential client information here. Confirm publication permissions for portfolio assets and claims.

## Goals and preferences

### Portfolio goals and platform preferences

- Build a cool, interactive personal portfolio replacing a defunct WordPress site. This repo also supports career exploration.
- Kent is open to Astro if it is straightforward to use, but has little practical experience with it. Cloudflare Pages is the anticipated host; actual deployment setup is unconfirmed.

### Career goals and work preferences

- Wants to leave the current small advertising agency because of limited growth. Next career direction is undecided; do not assume conventional frontend engineering is the goal.
- Enjoys debugging and improving UI/product experience. Is less interested in deep CS theory and is discouraged by the prospect of a fully technical role after interview feedback.
- Concerned about tech job-market conditions and security. Advice should account for preferences and team quality, not push engineering as the default destination or imply another path is risk-free.
- Enjoys interactive prototyping, microsites/small apps, spatial/3D work, touchpoint ideation, and seeing participants engage with delivered experiences. Likes UX refinement but is unsure about routine agency UX/research work and reports limited experience of formal methods. Events remain appealing for their tangible impact and mix of disciplines; dissatisfaction is not a rejection of that work.
- Reports being the company's only coding and 3D specialist, without peers to learn from or a progression path. Describes poor pay, limited recognition, no WFH, and perfectionist work expectations as reasons to leave. Wants growth beyond the current company; salary floor and required working arrangements remain unconfirmed.

## Background

- NUS Industrial Design, 2020–2024; minor in Interactive Media. Background spans physical product design/Rhino, UI/UX/service design, and Blender modelling/rendering.
- Programming progression: p5.js → HTML/JS → React → TypeScript/Next.js/Tailwind. Has used Supabase and Convex; less confident with backend work.
- Off the Beaten Track multimedia designer/developer since Dec 2024, per April résumé. Work includes spatial design/renders, activity ideation, microsites, interactive installations, and event-day floor running/technical support.
- Earlier experience includes Picup Media UI/UX and a Design Incubation Centre internship.

## Work and source material

[PROJECTS.md](PROJECTS.md) is the editable, pre-selection project inventory and source for contributions, collaborators, metrics, repository evidence, and project-specific open questions. Maintain those details there rather than duplicating them here.

### Résumé

Source: `KentTimothy_Resume_Apr2026-1.pdf`, described by Kent as accurate as of April 2026. Later ownership clarifications supersede its Hawker Colours migration claim; use the corrected inventory when preparing public copy. Refresh other claims and metrics before publication.

### Reviewed project evidence

The inventory records 3 November 2026 history/selected-code and documentation reviews across installation, roadshow, NCOS, editorial, hackathon, pitch, and independent quiz work. Its source statement defines review scope and attribution exceptions. Repository evidence does not independently verify reported usage, usability, or real-world reliability; finished experiences have not been visually assessed in this portfolio review.

- The newer NCOS apps used largely AI-assisted implementation. Kent particularly highlights CCD Thank You's product-experience refinement; safeguard scope and validation gaps are documented in the inventory.
- Do not equate AI assistance with absence of authorship or product judgement; equally, shipped output and configured checks do not by themselves establish independent code understanding or reliability.

### Additional 3D and motion work

Kent reports additional completed 3D work for employment, renders for unsuccessful pitches, animation, and rigging. These assets have not yet been reviewed or inventoried; their quality, personal scope, publication permissions, and relevance to desired future work remain to be assessed.

Kent considers his current 3D work a strong, mature skill and feels growth has stalled at the company; this self-assessment is not yet a visual review. He also mentions physical exhibit interactives not yet documented in the inventory.

## Bifrost interview and current technical confidence

Source: `feedback.txt`; frontend engineer interview reached round 3 in July 2026.

### Interview feedback

- Praised portfolio aesthetics, attention to detail, UI instincts, cross-domain ability, autonomy, and collaboration.
- Main gaps: React state/props/hooks/useEffect; explaining the flow from search input to backend API request; understanding and justifying AI-generated code.
- Feedback accepted AI use but expected ownership of its output, and described the gaps as learnable.

### Current confidence and evidence gaps

- As of November 2026, Kent says React understanding has not substantially improved. More shipping and production guardrails should not be represented as having resolved those gaps.
- Kent also identifies limited concrete user testing compared with research-oriented product-design roles such as OGP.
- Kent says recent development work has focused on architecture and UX decisions and steering AI agents rather than making code changes himself. He reports a growing big-picture understanding of systems; public copy should foreground that scope without implying advanced implementation expertise or resolved code-understanding gaps.

## Portfolio approach

### User position

Open to Astro, provided it is approachable. No detailed architecture or visual direction has been approved.

Kent requested Markdown About and résumé drafts, visual-evidence preparation, and a first case-study draft. Working copy is in [content/about.md](content/about.md), [content/resume.md](content/resume.md), [content/evidence-plan.md](content/evidence-plan.md), and [content/case-studies/galilean-mission.md](content/case-studies/galilean-mission.md). These are editorial proposals, not approved public claims or a final shortlist. Actual visual review awaits media; no project media was present in the repository at preparation time.

### Assistant proposal

#### Platform and interaction design

- Keep the existing Astro + TypeScript + Tailwind foundation; use static Cloudflare Pages hosting initially. Add no backend or CMS without an actual requirement.
- Use Astro layouts and Markdown/content collections for case studies. Introduce React islands or creative-coding libraries only for interactions that need them; explain unfamiliar Astro concepts as they arise.
- Make content immediately readable, with a purposeful interactive layer rather than mandatory experimental navigation. Support mobile, keyboard access, reduced motion, and fallbacks for heavy effects.

#### Case-study selection and evidence

- Start with a small set of strong case studies, selected for target roles and available visual/process evidence rather than recency. Compare Hawker Colours, Galilean Mission, CCD Thank You, and the roadshow/embodied interactions before choosing; no shortlist is approved. Give NCOS a concise overview linking to individual experiences rather than one oversized case study.
- Integrate spatial renders and render-to-built comparisons into relevant case studies. Consider a small curated 3D/motion selection for strong standalone work; include rigging/procedural breakdowns when relevant to desired roles. Unsuccessful pitches can be labelled uncommissioned concepts, subject to permissions. Avoid a disconnected second portfolio identity.
- Case studies should show the problem, audience/context, individual role, constraints, iterations, design/technical decisions, outcomes, and limitations. Capture installation footage where permitted.
- Show product judgement through concrete before/after examples and reasons for changes. Label informal observations honestly; do not invent user research or imply tests prove usability.

### Reviewed repository baseline

Astro 5/Tailwind 4 starter, no React integration or CMS, default static output. See `package.json` and `astro.config.mjs` for current details.

## Career working hypotheses — not decisions

### Potential positioning and supporting evidence

Potential positioning: **Creative technologist building interactive experiences for screens and physical spaces.**

Assistant assessment of the updated inventory: the strongest common thread is making interactive experiences work beyond ideal demos—through interface refinement, physical accessibility, tracking/input robustness, spatial planning, and operational recovery. This strengthens the positioning above without resolving the technical-confidence gaps or establishing visual quality and real-world effectiveness by itself.

Editorial/product interfaces and spatial/embodied experiences are complementary strengths. Hawker Colours remains a potential prominent case study for interface-heavy roles; junior status during its development is not a reason to dismiss the documented contribution. Kent notes that he had forgotten how much technical work he contributed, so assess specific evidence rather than confidence or recall alone.

Kent reports a later external-team museum adaptation of Hawker Colours. This adds project legacy/context, not personal ownership of the museum implementation; coverage and attribution details are in [PROJECTS.md](PROJECTS.md#hawker-colours-survey-platform).

### Role directions to explore

- **Creative technologist / interaction prototyper / interactive developer:** closest demonstrated overlap of design, code, spatial work and real-world delivery. Prioritize mentorship and role boundaries; avoid reproducing a one-person technical department with event crunch.
- **Interaction/product designer with strong prototyping skills:** worth exploring if experience design and iteration are more satisfying than production engineering. Research-heavy roles will require stronger evidence of user insight and testing; not all design roles have identical expectations.
- **Design engineer / UX engineer:** inspect actual responsibilities carefully. Many are substantial engineering roles, not a less technical alternative to frontend.
- **Frontend/product engineer:** remains possible if Kent wants the work and its learning investment, but is not the default recommendation. Practical code/data-flow understanding is distinct from a full CS curriculum and still matters when shipping AI-assisted systems.

### Employer evaluation criteria

Judge employers by senior peers, critique/code review, scope, progression, business health, and on-site/weekend expectations—not title alone. No path is inherently AI-proof or secure.

## Employer and sector leads

Singapore is a provisional focus, not a confirmed geographic constraint. Leads are not assurances of vacancies or fit.

### Reviewed leads and references

- **GovTech Giant Robots Labs:** [Creative Technologist posting](https://jobs.careers.gov.sg/jobs/greenhouse/4007972201?gh_jid=4007972201), reviewed 2026-11-03. Digital/physical prototyping and product judgement; asks for roughly 4–8 years, so a stretch/reference role.
- **OGP/GovTech:** public-interest products. [OGP design expectations](https://www.open.gov.sg/careers/what-we-do/product-design/) emphasize research, usability, and design decisions; assess fit rather than assuming technical prototyping alone is sufficient.
- **Moment Factory:** [careers](https://momentfactory.com/pages/careers); international immersive-experience reference. Geography/work rights need checking.
### Further employer and sector research

- Further research: HOL Experiences, Kingsmen, Pico, Science Centre Singapore, Resorts World Sentosa, Mandai Wildlife Group, Marina Bay Sands, Accenture Song.
- Sector buckets: museums/learning, attractions/immersive experiences, experimental technology teams, public-interest products, and product/design consultancies.

## Useful next steps and open questions

- Turn the documented inventory into case-study evidence: footage, before/after iterations, system diagrams, render-to-built comparisons, and specific decisions with outcomes. Follow up on the evidence gaps in `PROJECTS.md`; inspect additional 3D/motion assets before selecting them. The immediate portfolio bottleneck is evidence and storytelling rather than adding more projects.
- Review the requested Galilean Mission media and 3D/motion samples using the evidence plan; revise the narrative after assessing finished work. Clarify desired balance between the activities Kent enjoys and tolerance for research, implementation, and event-hours demands rather than reopening already stated interests.
- Clarify salary floor, location/work authorization, relocation/remote preferences, travel/hours, and desired mentorship.
- Confirm public-use permissions for client assets and whether campaign submissions/camera data require special care in demos.
- Complete the first case-study draft with reviewed evidence before investing in an elaborate homepage. Employer/vacancy research and role shortlisting are deferred at Kent's request.
