# Assets

## Cut-paper hero

`public/images/paper-panel.webp` is original decorative artwork created with the built-in image-generation tool. Three multi-sheet sections in violet, amber, and magenta fit a common rectangular perimeter. The original image is 1448 × 1086 and is encoded as WebP at quality 92. Each stack has a dark-to-light tonal range and fine paper surface detail.

The source bitmap contains a generated backdrop. Three SVG clipping paths in `src/components/paperPanelMasks.ts` exclude it so the site supplies the navy background and open channels. All three sections share one cached resource. Scrolling assembles them into their final panel. Reduced-motion and no-JavaScript presentations show that final panel immediately. No motion button or pointer effect is present.

The image depicts no client, project interface, or product evidence. The original rounded artwork is retired. See [HERO-ART.md](HERO-ART.md) for the exact prompt, source handling, and implementation details.

## Typeface

`src/assets/manrope.ttf` is the variable Manrope typeface from the Google Fonts repository. Its SIL Open Font License is included as `src/assets/Manrope-OFL.txt`.

Source: https://github.com/google/fonts/tree/main/ofl/manrope

## Diagrams

Case-study diagrams describe documented decisions, staffing, or research structures. Lab diagrams are explicitly conceptual and use only the supplied project components. They are not fabricated application screenshots or performance results.
