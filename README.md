# Kate Terraccino portfolio

Astro 7 content collections, static GitHub Pages output, and a Playwright-generated PDF. HTML and PDF share the specification sheet, counts, case-study headers, diagrams, experience changelog, operating rules, and independent-project content.

## Development and verification

```sh
npm ci
npx playwright install --with-deps chromium
npm run sync
npm run build
npm test
npm run preview
```

`npm run build` builds the HTML, generates `public/portfolio.pdf` from `/print/`, then builds again to include the PDF in `dist/`. The PDF is generated rather than committed. Fonts are local for consistent rendering; licenses are beside the font files.

If Playwright's bundled Chromium is not installed, set `CHROMIUM_PATH` to a Chromium or Chrome executable and both the build and the tests use it.

`npm test` starts its own preview and inspects all seven public HTML routes at 320, 390, 768, 1024, and 1440 pixels. It checks overflow, image loading, console errors, minimum readable text size, WCAG A/AA rules through axe, the skip link, reduced motion, enlarged text, no-JavaScript rendering, internal routes and anchors, publication holds, draft exclusion, and HTML/PDF-source parity. Screenshots and reports are written to ignored `artifacts/qa/`.

## Design

The home page is organized as a numbered document: a specification sheet instead of an introduction, a ledger of counts that need no product telemetry, three case-study cards, four groups of operating rules, and a process table of independent AI systems. The About page presents experience as a changelog. There is no JavaScript on the public pages and no animation beyond hover states.

## Content

- `src/site.ts`: positioning, contact information, specification rows, counts, experience changelog, exact restriction note.
- `src/content/case-studies/`: Markdown case studies and development drafts.
- `src/content.config.ts`: content schema, including three-line briefs and decision diagrams.
- `src/principles.ts`: operating rules shared by HTML and PDF.
- `src/projects.ts`: independent project descriptions, modes, components, and notes.
- `src/components/`: one component per section, plus `CaseHeader.astro` and `DecisionDiagram.astro` shared with the PDF.
- `src/styles/tokens.css`: color, type, layout, focus, and reduced-motion foundations.
- `docs/HOLDS.md`: publication restrictions. Read before changing Launchpad claims.
- `docs/ASSETS.md`: typeface provenance and licenses.

Statuses:

- `public`: complete web page and PDF content.
- `restricted`: complete web page and PDF content with the exact restricted-information note.
- `draft`: development route only. PDF cover lists its title, without publishing the draft body.

Files prefixed with `_` are templates and excluded from the collection. Private local planning and captured review artifacts are ignored and never included in static output.

## Deployment

`.github/workflows/verify.yml` builds and checks pull requests and non-main pushes and retains screenshots and PDF as workflow artifacts. `.github/workflows/deploy.yml` deploys `main` to GitHub Pages.

For a configured subdirectory, set the same `BASE_PATH` for build and test. `QA_WIDTHS=390` optionally limits route screenshots and axe checks for a targeted run; omitting it runs all five widths.
