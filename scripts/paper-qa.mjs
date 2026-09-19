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
    assert.equal(await paper.evaluate(e => e.getAnimations({ subtree: true }).length), 0);
    assert.equal(await page.locator('[data-discipline-choice]').count(), 3);
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
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await paint();
    const targets = { design: '/work/linuxone-practice/', product: '/work/nexus/', technology: '#lab' };
    const heroHeight = await page.locator('[data-hero]').evaluate(element => element.getBoundingClientRect().height);
    for (const [id, href] of Object.entries(targets)) {
      const choice = page.locator(`[data-discipline-choice="${id}"]`);
      await choice.locator('.paper-label').hover();
      await page.waitForTimeout(220);
      assert.equal(await choice.getAttribute('aria-pressed'), 'true');
      assert.equal(await page.locator(`[data-evidence="${id}"]`).isVisible(), true);
      assert((await page.locator(`[data-evidence="${id}"] a`).getAttribute('href')).endsWith(href));
      assert.equal(await paper.getAttribute('data-phase'), 'joined');
      assert.equal(await page.locator('[data-evidence]:visible').count(), 1);
      const selectedHeight = await page.locator('[data-hero]').evaluate(element => element.getBoundingClientRect().height);
      assert(Math.abs(selectedHeight - heroHeight) < 1, 'Evidence selection must not move the selected work section');
      await page.screenshot({ path: `${out}/paper-desktop-${id}.png` });
    }
    const reset = page.locator('[data-discipline-reset]');
    await reset.focus();
    await page.keyboard.press('Enter');
    assert.equal(await page.locator('[data-evidence="all"]').isVisible(), true);
    await page.keyboard.press('Tab');
    assert.equal(await page.locator(':focus').getAttribute('data-discipline-choice'), 'design');
    assert.equal(await page.locator('[data-evidence="design"]').isVisible(), true);
    await page.keyboard.press('Tab');
    assert.equal(await page.locator(':focus').getAttribute('data-discipline-choice'), 'product');
    await page.keyboard.press('Tab');
    assert.equal(await page.locator(':focus').getAttribute('data-discipline-choice'), 'technology');
    await page.keyboard.press('Tab');
    assert.equal(await page.locator(':focus').getAttribute('href'), '#lab');
    await reset.click();
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await paint();
    assert((await positions()).every(value => value === 'none'));
    assert.equal(await paper.getAttribute('data-phase'), 'joined');
    await page.locator('[data-discipline-choice="product"] .paper-label').click();
    assert.equal(await page.locator('[data-evidence="product"]').isVisible(), true);
    assert.equal(await paper.evaluate(e => e.getAnimations({ subtree: true }).length), 0);
  } finally {
    await context.close();
  }
}
