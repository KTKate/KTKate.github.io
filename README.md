# Kate Terraccino portfolio

Astro 7 content collections, static GitHub Pages output, and a Playwright-generated PDF. HTML and PDF share case-study headers, diagrams, experience, principles, and independent-project content.

## Development and verification

```sh
npm ci
npx playwright install --with-deps chromium
npm run sync
npm run build
npm test
npm run preview
```

`npm run build` builds the HTML, generates `public/portfolio.pdf` from `/print/`, then builds again to include the PDF in `dist/`. The PDF is generated rather than committed. Fonts are local for consistent rendering. The Manrope license is included beside the font.

`npm test` starts its own preview and inspects all seven public HTML routes at 320, 390, 768, 1024, and 1440 pixels. It checks overflow, image loading, console errors, minimum readable text size, WCAG A/AA rules through axe, keyboard behavior, reduced motion, enlarged text, no-JavaScript content, internal routes and anchors, publication holds, private/draft exclusions, and HTML/PDF-source parity. Screenshots and reports are written to ignored `artifacts/qa/`.

## Content

- `src/site.ts`: positioning, contact information, experience, exact restriction note.
- `src/content/case-studies/`: Markdown case studies and development drafts.
- `src/content.config.ts`: content schema, including three-line briefs and decision diagrams.
- `src/principles.ts`: principle groups shared by HTML and PDF.
- `src/projects.ts`: independent project descriptions, conceptual components, constraints, and artifact requests.
- `src/components/CaseHeader.astro` and `DecisionDiagram.astro`: shared web/PDF presentation.
- `src/styles/tokens.css`: color, type, layout, focus, and reduced-motion foundations.
- `docs/HOLDS.md`: publication restrictions. Read before changing Nexus claims.

Statuses:

- `public`: complete web page and PDF content.
- `restricted`: complete web page and PDF content with the exact restricted-information note.
- `draft`: development route only. PDF cover lists its title, without publishing the draft body.

Files prefixed with `_` are templates and excluded from the collection. Private local planning and captured review artifacts are ignored and never included in static output.

## Hero

The generated cut-paper asset depicts three complete stacks. Three independently clipped image layers provide restrained entrance motion. Reduced motion disables the animation. The same uncropped composition is used at every width. Artwork source and font license are documented in `docs/ASSETS.md`.

## Deployment

`.github/workflows/verify.yml` builds and checks pull requests and non-main pushes and retains screenshots and PDF as workflow artifacts. `.github/workflows/deploy.yml` deploys `main` to GitHub Pages. No hosting migration is required.

For a configured subdirectory, set the same `BASE_PATH` for build and test. QA reads that prefix for page navigation and requests. `QA_WIDTHS=390` optionally limits route screenshots and axe checks for a targeted configuration run; omitting it runs all five widths.
