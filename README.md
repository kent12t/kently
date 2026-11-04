# Pixelsmith — Kent’s portfolio

A playful, static Astro portfolio positioning Kent as a designer and creative technologist. Pixelsmith is presented as his personal practice, not a multi-person studio.

## Run locally

```sh
npm install
npm run dev
```

Open `http://localhost:4321`. `npm run build` generates `dist/`; `npm run preview` serves the production build. Cloudflare Pages can use build command `npm run build` and output directory `dist` (deployment is not configured here).

## Checks

```sh
npm run check
npx playwright install chromium
npm test
```

Browser tests cover desktop and mobile layouts, keyboard/pointer interaction, Remix, project routes, printable résumé, reduced motion, and reading without JavaScript. Tests build and serve their own production preview on port 4322.

## Where to edit

- `src/pages/index.astro`: homepage, positioning, About, and contact.
- `src/data/projects.ts`: project summaries, roles, decisions, outcomes, and credits. Cross-check factual changes against `PROJECTS.md`.
- `src/pages/work/[slug].astro`: statically generated project stories.
- `src/pages/resume.astro`: printable résumé. The print button supports the browser’s Save as PDF.
- `content/Kent_Timothy_Resume.html`: standalone, editable résumé with embedded fonts (not published by Astro). Open it in a browser, choose **Edit text**, then **Save HTML** to download a copy containing your edits. Replace the repo file with that download to update the source; browsers cannot silently overwrite the original file. Browser autosave is a convenience only and may be unavailable for local files or private browsing. Choose **Print / Save PDF**, select **Save as PDF**, use A4 at 100% scale, and disable browser headers/footers. The fit indicator warns when content exceeds one page. This preserves the supplied visual layout and wording; ATS compatibility has not been verified.
- `src/components/Playground.astro`: draggable SVG playground. Arrow keys move focused objects; Enter/Space rotates them; Remix offers a touch/keyboard-friendly alternative.
- `src/components/ProjectArtwork.astro`: original interpretive project illustrations.
- `src/styles/global.css`: visual system, responsive layouts, reduced-motion rules, and print styles.

No backend, CMS, analytics, third-party scripts, or animation framework. Manrope and DM Mono are self-hosted; their SIL Open Font Licenses are in `public/fonts/`.

## Before public launch

This is an implemented design proposal, not an approved project shortlist or publication clearance.

- Review the proposed title, homepage selection, project copy, employment details, and résumé. The career reference does not establish a final career direction.
- Add an approved public email and/or LinkedIn URL. The current contact button explicitly links to Kent’s known GitHub profile; no email address is invented.
- Confirm permission for client names, project details, metrics, and any future assets. Nothing has been deployed or published by this implementation.
- Replace interpretive illustrations with approved project screenshots, footage, and render-to-built comparisons as appropriate. Current illustrations are labelled and are **not** evidence of shipped visual design or participant testing.
- Complete team credits and outcome sourcing. Keep participants, users, plays, and submissions distinct; do not aggregate them into a reach number.
- Add a canonical URL, social-sharing image, and sitemap when the deployment domain is confirmed.
- Address inherited dependency advisories before launch. The existing Astro 5 dependency tree reports security vulnerabilities via `npm audit`; no major framework migration is included in this design task. The site generates static files and has no deployed application server, but that does not certify the build/development toolchain as secure.

The private preparation documents and original résumé PDF are not copied into the public site.
