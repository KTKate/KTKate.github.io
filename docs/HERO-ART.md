# Hero artwork

The hero uses `public/images/paper-panel.webp`, a 1448 × 1086 WebP encoded at quality 92 from artwork created with the built-in image-generation tool. The paper sections have a common rectangular perimeter, visibly stepped dark-to-light sheets, and three recessed channels that meet at the center.

`src/components/paperPanelMasks.ts` contains the three source-coordinate silhouettes. `PaperArt.astro` applies them as SVG clipping paths to three copies of the same cached image. The generated source included a checkerboard background instead of an alpha channel. The silhouettes exclude that background and retain the colored paper. The page supplies the navy seen between and around the sections. No image interface or career evidence is fabricated by this decorative artwork.

Scrolling moves the three sections from offset positions into their aligned final panel. The range starts when the artwork center reaches 70% of the viewport height, or at the top of the page when the artwork is already visible. The range is limited to 40% of the artwork height or 24% of the viewport height, whichever is smaller. The sections finish at their source positions. Pointer movement does not disturb them, and there is no repeating animation, delayed easing, or decorative motion control.

The labels for design and research, product, and technology connect to one shared caption. This relationship stays visible without animation. Reduced-motion and no-JavaScript presentations show the complete aligned panel. Decorative artwork is omitted from print.

## Generation prompt

The previous paper artwork was supplied as the edit target to preserve its material finish. The built-in tool was used, not the CLI.

```text
Use case: precise-object-edit.
Edit target: supplied portfolio paper artwork. Preserve its convincing fine physical paper surface, fine edge shadows, dark-to-light violet/amber/magenta palettes and overhead orthographic view. REPLACE THE GEOMETRY completely.
Asset type: transparent website hero illustration. Square canvas. A single tightly assembled, slightly landscape RECTANGULAR CUT-PAPER PANEL, made of THREE complementary multi-sheet sections. Outer perimeter is a shared rectangle with very slightly softened cut corners, occupying x 8% to 92%, y 13% to 87%. Absolutely not three rounded floating piles.
Geometry: violet section occupies upper left; amber section upper right; magenta section the full lower part. One thin straight vertical recessed empty channel enters from the midpoint of the TOP edge and reaches the central junction (50%,48%). Two thin straight diagonal channels run from that junction to the LEFT and RIGHT outer edges at y 65%. These three narrow channels form a Y and meet in a small clear open central area. Together the three sections fit precisely into ONE common rectangular perimeter. No bridging base, no frame around them, no physical joining piece. Each is independently separable. Deliberate architectural, controlled mostly STRAIGHT cut lines with subtle imperfect hand-cut edge character, NOT waves or hills.
Each section contains SEVEN to NINE clearly exposed paper sheets. Inner edges step downward toward the central Y channels: pale broad upper sheets toward the outside, multiple increasingly saturated middle sheets, very dark lowest sheets directly beside the channels. Every section clearly has its own dark-to-light value range. Broad stepped bands, not thin stripes. All three colors should visually converge tightly at the central junction. Narrow final channels make these look like three complementary sections of one panel rather than isolated objects.
Colors: violet #7a72d6, amber #f0a83a, magenta #e94fb7, with pale lighter and deep darker tones within each stack. Paper is MATTE, flat and physically thin, subtle fibers, no stains, no digital grain, no glossy plastic.
TRUE alpha transparency in all background and recessed open channels. Do not paint a navy backdrop or checkerboard. No background rectangle. No text, no letters, no icons, no lines drawn over the art, no circles, no diagram labels, no glow, no gradients, no isolated rocks, no concentric circles, no rounded blobs, no wavy sheets, no isometric perspective. Full rectangular composition entirely visible with generous transparent margin.
```

A subsequent background-extraction attempt also returned a checkerboard. It was not used. The first output supplies the paper surface, with explicit browser clipping for the final presentation.
