# Verification record

Verified 11 September 2026 against the portfolio revision based on `935aee3`.

## Baseline

- Inspected repository content, configuration, recent history, PR #1, and its review discussion. PR #1 was merged. No open PR or unresolved inline thread was present.
- No applicable AGENTS.md or existing holds file was found.
- `npm run build` passed before source edits, including PDF generation. No test script existed.
- Captured all five original live and local HTML routes at 320, 390, 768, 1024, and 1440 pixels.
- Baseline home overflowed at 320 and 390 pixels. Baseline PDF lacked the restriction note.

## Final checks

Commands:

```sh
npm run sync
npm run build
npm test
git diff --check
```

All passed. `npm test` completed 35 page checks and 27 unique internal link/anchor checks with zero recorded failures.

Routes: `/`, `/about/`, `/work/nexus/`, `/work/linuxone-practice/`, `/work/hybrid-cloud/`, `/print/`, `/404.html`.

Widths: 320, 390, 768, 1024, 1440 pixels. Full-page screenshots are retained in ignored `artifacts/qa/`.

Checks include horizontal overflow, image loading, console errors, readable screen text size, and axe WCAG 2 A/AA and 2.1 AA rules. Automated accessibility checks do not replace a screen-reader review.

Interaction checks cover the skip link, principle tab arrow keys and Home/End, selected-panel focus, keyboard-operated disclosure, reduced-motion animation removal, 200% text enlargement at 320 and 390 pixels, and the no-JavaScript fallback. All internal routes and fragment targets resolve.

Publication checks confirm the exact Nexus restriction note in HTML and print, the absence of held Nexus timing/performance text, draft body exclusion from production, private planning exclusion from static output, and paragraph parity between every published case study and the print route.

## PDF

The build generated a nine-page PDF. All pages were rendered to images and visually reviewed with temporary PyMuPDF tooling. No sparse continuation page remained. Public and deployed-build PDF files are byte-identical. The PDF includes experience, all public and restricted case studies, all principles, and all four independent projects. Only the AIOps draft title appears on the cover.

## Evidence limits

The AIOps draft requires a specific product-direction decision before publication. Lab artifact placeholders specify actual redacted outputs needed to add further evidence; the conceptual diagrams do not claim audited implementation details or performance. Nexus release claims remain held under `docs/HOLDS.md`.
