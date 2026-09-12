# Hero artwork

The hero uses `public/images/paper-convergence.webp`, a 1254 × 1254 image with an alpha channel. Generated with the built-in image generation tool and encoded as WebP with the original alpha preserved. The page supplies the navy background.

`src/components/PaperArt.astro` divides the image along the transparent channels. Each complete paper stack moves independently toward the center and back over a ten-second cycle. The masks include every colored sheet and keep neighboring colors separate. A keyboard-accessible control pauses or resumes all three stacks. Animation pauses when the artwork leaves the viewport or the document is hidden. Reduced-motion and no-JavaScript presentations are static.

The displayed image now uses a CSS tonal adjustment: contrast 1.24, brightness 1.08, and saturation 0.92. This increases the separation between dark lower sheets and pale upper faces while preserving the approved image geometry and alpha channel. The source image remains unchanged.

Fine mouse pointers also move the stacks at three different depths. Scrolling gradually reduces their separation as the artwork moves through the viewport, including on touch devices. The effects use bounded translations and retain the overhead view. Pointer exit returns the offset to neutral. Touch pointer movement does not alter the art or intercept gestures.

Input movement uses an animation-frame callback only while responding or settling. Pause stops both the continuous cycle and the input effects. Reduced motion removes all movement. The surrounding text and caption remain fixed.

## Generation prompt

```text
Use case: stylized-concept
Asset type: transparent landing-page hero artwork, square 1536 × 1536 or highest feasible square.
Primary request: Create a convincing physical flat cut-paper relief photographed directly overhead, orthographic camera. Three complementary LARGE multi-sheet sectors of ONE sculptural composition occupy almost the whole frame. They are violet upper-left, amber upper-right, magenta below. Their facing cut edges define three recessed channels converging in a clear open central area, like a Y-shaped canyon cut through one broad sculptural paper field. This must feel like expansive sculptural fields, never three small isolated piles of rocks.
Composition: The collective outer silhouette is a broad softly irregular rounded triangular/squarish shape, fully visible with only approximately 5 percent transparent margin. One narrow transparent channel enters from the top middle, another from the lower-left diagonal, another from the lower-right diagonal; all converge at the center. Channels clearly separate all three sectors. The sectors approach each other closely and complement each other's cut shapes, without touching or overlapping.
Sheets and depth: Each sector contains 7 to 9 clearly visible distinct flat sheets. Broad substantial stepped terraces descend toward the central opening and channel edges. Darkest tones are the lowest innermost sheets beside the channels, gradually lighter colored sheets rise outwards to broad pale upper faces. Every one of the three sectors must individually display this dark-to-light tonal sequence. Actual fine paper edge shadows and delicate paper fibers; shallow restrained physical relief with substantial horizontal terrace widths. Broad controlled irregular cut edges, softly angled with occasional gentle curves; carefully designed precise editorial composition. Reference inspiration is layered cut-paper topographic art with broad sheets and cut-away channels.
Palette: violet centered on #7a72d6, amber centered on #f0a83a, magenta centered on #e94fb7. Each group has its own monochromatic dark-to-light paper tones, including visibly dark lower sheets and light upper sheets. Solid paper color per sheet, no color gradients.
Background: TRUE TRANSPARENT PNG with actual alpha channel. ALL area outside the collective silhouette and all empty Y channels including the central opening must have alpha zero. No colored backdrop. Artwork will be placed on navy #141b38, but DO NOT paint navy into this image. No checkerboard, no white matte. Preserve clean alpha edges and only physically close fine edge shadows.
Avoid: NO isometric camera; NO three isolated polygon piles; NO rock shapes; NO jagged random facets; NO wavy parallel ribbons; NO circular concentric blobs; NO overlapping color groups; NO pedestal or base sheet connecting groups; NO background plane; NO excessive depth; NO gradients; NO text, labels, arrows, icons, logos, plants or props.
```
