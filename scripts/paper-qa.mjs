import assert from 'node:assert/strict';

export async function verifyPaperInteraction(browser, siteRoot, out) {
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const touch = await browser.newContext({ viewport: { width: 390, height: 900 }, hasTouch: true, isMobile: true });
  try {
    const page = await desktop.newPage();
    await page.goto(siteRoot + '/', { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const paper = page.locator('[data-paper-art]');
    const positions = () => page.locator('.paper-response').evaluateAll(elements => elements.map(element => getComputedStyle(element).transform));
    const bounds = await paper.boundingBox();
    await page.mouse.move(bounds.x + bounds.width * .15, bounds.y + bounds.height * .2);
    await page.waitForTimeout(800);
    const left = await positions();
    await page.screenshot({ path: out + '/paper-pointer-left.png' });
    await page.mouse.move(bounds.x + bounds.width * .85, bounds.y + bounds.height * .8);
    await page.waitForTimeout(800);
    const right = await positions();
    assert(left.every((value, index) => value !== right[index]), 'Every stack must respond to the pointer');
    assert(new Set(right).size === 3, 'Stacks must have distinct response depths');
    await page.screenshot({ path: out + '/paper-pointer-right.png' });

    await page.getByRole('button', { name: 'Pause motion' }).click();
    const frozen = await positions();
    await page.mouse.move(bounds.x + bounds.width * .1, bounds.y + bounds.height * .1);
    await page.evaluate(() => window.scrollBy({ top: 100, behavior: 'instant' }));
    await page.waitForTimeout(500);
    assert.deepEqual(await positions(), frozen, 'Pause must freeze pointer and scroll effects');
    await page.getByRole('button', { name: 'Play motion' }).click();
    await page.waitForTimeout(1000);
    assert.notDeepEqual(await positions(), frozen, 'Play must resume input responses');

    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.mouse.move(bounds.x + bounds.width * .8, bounds.y + bounds.height * .6);
    await page.evaluate(() => window.scrollBy({ top: 100, behavior: 'instant' }));
    await page.waitForTimeout(300);
    assert((await positions()).every(value => value === 'none'), 'Reduced motion must remove input transforms');
    assert.equal(await page.getByRole('button', { name: 'Pause motion' }).count(), 0);

    const mobile = await touch.newPage();
    await mobile.goto(siteRoot + '/', { waitUntil: 'networkidle' });
    await mobile.locator('[data-paper-art]').evaluate(element => element.scrollIntoView({ block: 'center', behavior: 'instant' }));
    await mobile.waitForTimeout(1000);
    const mobilePositions = () => mobile.locator('.paper-response').evaluateAll(elements => elements.map(element => getComputedStyle(element).transform));
    const before = await mobilePositions();
    await mobile.locator('[data-paper-art]').dispatchEvent('pointermove', { pointerType: 'touch', clientX: 300, clientY: 600 });
    await mobile.waitForTimeout(300);
    assert.deepEqual(await mobilePositions(), before, 'Touch gestures must not trigger pointer parallax');
    await mobile.evaluate(() => window.scrollBy({ top: 160, behavior: 'instant' }));
    await mobile.waitForTimeout(1000);
    assert.notDeepEqual(await mobilePositions(), before, 'Touch-device scrolling must move the stacks');
    assert.equal(await mobile.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    await mobile.screenshot({ path: out + '/paper-touch-scroll.png' });
  } finally {
    await desktop.close();
    await touch.close();
  }
}
