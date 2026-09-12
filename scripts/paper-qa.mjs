import assert from 'node:assert/strict';

export async function verifyPaperInteraction(browser, siteRoot, out) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  try {
    const page = await context.newPage();
    await page.goto(siteRoot + '/', { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const paper = page.locator('[data-paper-art]');
    const paint = () => page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    const positions = () => page.locator('.paper-response').evaluateAll(es => es.map(e => getComputedStyle(e).transform));
    await paint();
    const start = await positions();
    await page.waitForTimeout(700);
    assert.deepEqual(await positions(), start, 'Artwork must remain still without scrolling');
    const bounds = await paper.boundingBox();
    await page.mouse.move(bounds.x + bounds.width * .8, bounds.y + bounds.height * .6);
    await paint();
    assert.deepEqual(await positions(), start, 'Pointer movement must not disturb the shared arrangement');
    assert.equal(await paper.evaluate(e => e.getAnimations({ subtree: true }).length), 0);
    assert.equal(await page.locator('[data-paper-figure] button').count(), 0);
    await page.screenshot({ path: out + '/paper-desktop-separate.png' });
    await page.evaluate(() => window.scrollBy({ top: 200, behavior: 'instant' }));
    await paint();
    const assembled = await positions();
    assert.notDeepEqual(assembled, start, 'Scrolling must assemble the paper sections');
    assert.equal(await paper.getAttribute('data-phase'), 'joined');
    assert(await page.locator('.paper-response').evaluateAll(es => es.every(e => new DOMMatrixReadOnly(getComputedStyle(e).transform).isIdentity)), 'All sections must finish aligned with the common panel');
    await page.waitForTimeout(600);
    assert.deepEqual(await positions(), assembled, 'The assembled panel must remain still');
    await page.screenshot({ path: out + '/paper-desktop-joined.png' });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await paint();
    assert((await positions()).every(value => value === 'none'));
    assert.equal(await paper.getAttribute('data-phase'), 'joined');
  } finally {
    await context.close();
  }
}
