# Portfolio

Astro 7, no legacy flags. Site and PDF from one content source, themed in
the navy carved-paper direction.

## Run it

    npm install
    npx playwright install chromium
    npm run dev          # http://localhost:4321

## Build site + PDF

    npm run build        # builds, writes public/portfolio.pdf, builds again
    npm run preview      # check /, /about/, /work/nexus/, /portfolio.pdf

The double build exists so the PDF ends up inside dist/. Crude, works.

## Structure

    src/site.ts                     name, lede, positioning, links (edit first)
    src/content.config.ts           case-studies collection (Content Layer API)
    src/content/case-studies/       nexus.md + _template.md; _ files are ignored
    src/pages/index.astro           hero, work list, principles, lab
    src/pages/work/[id].astro       case study pages (entry.id, not slug)
    src/pages/about.astro           sequence paragraph + experience timeline
    src/pages/print.astro           light, plain; becomes the PDF
    src/components/Hero.astro       carved-channels art (placeholder block), or→and headline
    src/components/Principles.astro placeholder principles
    src/components/Lab.astro        placeholder personal-project cards
    src/styles/tokens.css           navy on screen, light in print
    scripts/pdf.mjs                 Playwright print of /print/

## Statuses

case study frontmatter `status`: draft (dev only), public, restricted
(shown with a details-withheld note).

## Deploy

Push to GitHub, then repo Settings → Pages → Source: GitHub Actions.
If the repo name is not <username>.github.io, set BASE_PATH in
.github/workflows/deploy.yml and base in astro.config.mjs.

## Deliberate placeholders

- Hero SVG art (swap the marked <svg> block later)
- Principles text, Lab projects, About domain paragraph
- Dates in the About timeline: verify against LinkedIn
