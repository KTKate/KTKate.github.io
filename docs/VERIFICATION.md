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

## Configured subdirectory

The review finding about root-only QA URLs was corrected. These additional commands passed for a subdirectory build:

```sh
BASE_PATH=/portfolio-review/ npm run build
BASE_PATH=/portfolio-review/ QA_WIDTHS=390 npm test
```

All seven routes and 27 internal links/anchors passed under the prefix, including keyboard and enlarged-text checks. The normal root build was restored afterward. `QA_WIDTHS` is an optional test-only subset; the default remains all five widths.

## Filesystem path handling

The QA root now uses Node's `fileURLToPath`, matching PDF generation. A copied checkout at `/tmp/portfolio path café` passed `QA_WIDTHS=390 node scripts/qa.mjs`: seven routes, 27 internal links/anchors, and all interaction checks. This verifies spaces and non-ASCII characters on Linux; native Windows execution was not performed.

## Public product name and statement of direction

Follow-up based on merged PR #2 (`7664409`), verified 11 September 2026. IBM announcement AD26-0467 supports the public name IBM Launchpad for LinuxONE and its intended scope. The precise permission and source are recorded in `docs/HOLDS.md`. Release dates and performance claims remain held. The existing case-study route is preserved.

`npm run build` and `npm test` passed before and after the content update. The restricted environment initially prevented the PDF preview server from binding a local port; the complete commands passed with local preview ports enabled. `git diff --check` passed.

The final run repeated all seven routes at all five widths listed above: 35 page checks, 27 internal link/anchor checks, zero failures. Full-page screenshots were reviewed, including the longer case-study title and updated home, About, practice, and print content. Keyboard, reduced-motion, enlarged-text, no-JavaScript, accessibility, publication-hold, and HTML/print parity checks passed.

The regenerated PDF remains nine pages. The changed case-study pages were visually inspected. PDF extraction confirms the public product name, the exact restriction note, and an active link to the IBM announcement. The public and built PDF copies are byte-identical. Private LinkedIn planning now uses the public product name and remains ignored.

## Animated paper hero revision

Follow-up based on merged PR #3 (`fee62c4`), verified 11 September 2026. Replaced the artwork with a transparent image containing three complementary dark-to-light cut-paper stacks. Each stack moves toward the common center and back in a continuing ten-second cycle. The headline now starts with "Designer & researcher." Tablet widths retain the artwork beside the introduction; mobile shows the complete composition below the copy.

Baseline `npm run build` and `npm test` passed before edits. Final `npm run build`, `npm test`, and `git diff --check` passed. The complete suite covered the seven routes and five widths listed above: 35 page checks and 27 internal link/anchor checks, with zero failures. After refining the tablet breakpoint, `npm run build` and `QA_WIDTHS=768 npm test` passed again, including all seven routes and all interaction checks.

New checks verify continuing animation, changing stack positions, keyboard pause/play, persistence of a manual pause after scrolling, and suspension outside the viewport. Reduced-motion and no-JavaScript checks verify a static composition and no unusable motion control. The pause test waits for the browser's animation-ready promise before comparing frozen positions. Existing accessibility, text enlargement, navigation, restricted-content, and print/PDF parity checks also pass.

Full-page screenshots were reviewed at 320, 390, 768, 1024, and 1440 pixels. Additional desktop screenshots inspected both motion limits; a complete cycle was recorded in ignored `artifacts/hero-revision/hero-motion.webm`. The masks were revised after inspection to preserve the complete edges of every stack. The mobile caption keeps all three discipline labels in a single row.

The PDF was regenerated and remains nine pages, with the existing shared copy and case-study content synchronized. The decorative hero is excluded from print. Asset provenance and the exact generation prompt are recorded in `docs/HERO-ART.md`.

## Pointer, scroll, and tonal refinement

Follow-up to `c2f9d4a`, verified 11 September 2026. The approved transparent artwork now has stronger displayed contrast and bounded pointer/scroll translations. No additional image download is required. Pointer movement shifts the three stacks by different amounts; scrolling reduces their separation. Touch pointer events do not trigger mouse effects or intercept scrolling.

Baseline and final `npm run build` and `npm test` passed, as did `git diff --check`. The final suite again completed 35 page checks across all seven routes at 320, 390, 768, 1024, and 1440 pixels, plus 27 internal links/anchors, with zero failures. The new `scripts/paper-qa.mjs` checks mouse response, distinct stack offsets, touch-device scrolling, ignored touch pointer movement, pause/play of input effects, and reduced-motion removal of input transforms. Existing keyboard, continuous-motion, offscreen suspension, enlarged-text, no-JavaScript, accessibility, publication-hold, and print-parity checks passed.

Full-page captures are retained in ignored `artifacts/qa/`; additional captures show both pointer extremes and touch scrolling. Revised desktop, tablet, and mobile artwork was visually reviewed for complete edges, contrast, spacing, and separation from the text. The regenerated PDF remains nine pages and the public/build copies match byte for byte.

## Motion only during input

Follow-up to `d996f27`, verified 11 September 2026. Removed the repeating ten-second motion and delayed interpolation. Stack positions now update directly in response to pointer movement or scrolling. There is no animation loop while idle. The stronger tones, pause control, touch scrolling, and reduced-motion presentation remain.

Baseline and final `npm run build` and `npm test` passed. The final run covered all seven routes and five widths listed above: 35 page checks and 27 internal links/anchors, with zero failures. Added checks confirm that pointer and scroll responses stop within two browser frames and stay still afterward, with no automatic animations. Keyboard, accessibility, reduced-motion, enlarged-text, no-JavaScript, publication-hold, and HTML/print parity checks passed. `git diff --check` passed.

Reviewed full-page home captures at 320, 390, 768, 1024, and 1440 pixels, plus both pointer extremes and the touch scroll position. The local preview also passed the focused input checks. The regenerated PDF has nine pages; public and build copies are byte-identical.

## Visible mobile scroll response

Follow-up to merged PR #4 (`1700fdb`), verified 12 September 2026. Measurement of the live site at 390 pixels showed less than one pixel of stack movement during a 160-pixel scroll. Increased the bounded translations and shortened the scroll range so the movement occurs while the full composition is visible. It remains directly tied to scrolling, with no repeating animation or delayed easing.

Baseline and final `npm run build` and `npm test` passed. The final suite covered `/`, `/about/`, `/work/nexus/`, `/work/linuxone-practice/`, `/work/hybrid-cloud/`, `/print/`, and `/404.html` at 320, 390, 768, 1024, and 1440 pixels: 35 page checks, 27 links/anchors, zero failures. Keyboard, axe accessibility, reduced-motion, enlarged-text, no-JavaScript, publication-hold, and print parity checks passed. The PDF remains nine pages with byte-identical public/build copies.

New mobile checks run in Chromium and WebKit at 320 and 390 pixels. All three stacks moved approximately 11.5 to 11.6 pixels during a 160-pixel scroll. Checks also cover reverse scrolling, prompt stopping, idle stability, touch pause/play, reduced motion, console errors, and overflow. Full-page home captures were reviewed at all five widths, along with mobile before/after positions. These are browser-engine tests with mobile emulation, not a physical iPhone test.

`npm run test:webkit` is included in the GitHub verification workflow. Locally, the host lacked WebKit libraries and system installation required a password. Dependencies were downloaded and unpacked into `/tmp/portfolio-webkit/` without changing the operating system. The suite passed with `WEBKIT_EXECUTABLE_PATH=/tmp/portfolio-webkit/run.sh npm run test:webkit`, using a launcher that supplies those libraries. The default command uses Playwright's installed WebKit on CI. `git diff --check` passed.
