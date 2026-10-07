# Kate Terraccino portfolio

Astro 7 content collections and static GitHub Pages output. No JavaScript on the public pages, no PDF, one local typeface.

## Development and verification

```sh
npm ci
npx playwright install --with-deps chromium
npm run sync
npm run build
npm test
npm run preview
```

`npm run build` builds static HTML into `dist/`. The typeface is local; its license is beside the font file.

If Playwright's bundled Chromium is not installed, set `CHROMIUM_PATH` to a Chromium or Chrome executable and the tests use it.

`npm test` starts its own preview and inspects all eight public HTML routes at 320, 390, 768, 1024, and 1440 pixels. It checks overflow, console errors, minimum readable text size, WCAG A/AA rules through axe, the skip link, enlarged text, the absence of JavaScript, internal routes and anchors, publication holds, and draft exclusion. Screenshots and reports are written to ignored `artifacts/qa/`.

## Design

Deep navy page, off-white type, amber as the only accent, Bricolage Grotesque as the only typeface. The home page fits in two screens: one specific sentence about the job, the four cases as a list, a line for side projects, and contact. Cases, side projects, and the About timeline each have their own page. A few hand-drawn SVG marks in amber. There is no JavaScript on the public pages and no animation beyond hover states.

## Content

- `src/site.ts`: contact information, counts, technology list, timeline, exact restriction note.
- `src/content/case-studies/`: Markdown case studies and development drafts.
- `src/content.config.ts`: content schema, including three-line briefs and decision diagrams.
- `src/projects.ts`: side project descriptions and notes.
- `src/components/`: one component per section, plus `Scribble.astro` for every SVG mark.
- `src/styles/tokens.css`: color, type, layout, focus, and reduced-motion foundations.
- `docs/HOLDS.md`: publication restrictions. Read before changing Launchpad claims.
- `docs/ASSETS.md`: typeface provenance and license.

Statuses:

- `public`: complete web page and PDF content.
- `restricted`: complete web page and PDF content with the exact restricted-information note.
- `draft`: development route only. Not built for production. No case study currently uses it.

Files prefixed with `_` are templates and excluded from the collection. Private local planning and captured review artifacts are ignored and never included in static output.

## Deployment

`.github/workflows/verify.yml` builds and checks pull requests and non-main pushes and retains screenshots and PDF as workflow artifacts. `.github/workflows/deploy.yml` deploys `main` to GitHub Pages.

For a configured subdirectory, set the same `BASE_PATH` for build and test. `QA_WIDTHS=390` optionally limits route screenshots and axe checks for a targeted run; omitting it runs all five widths.
