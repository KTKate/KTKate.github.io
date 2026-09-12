import assert from 'node:assert/strict';

export async function verifyMobilePaper(browser, siteRoot, out) {
  const engine = browser.browserType().name();
  const results = [];
  for (const width of [320, 390]) {
    const context = await browser.newContext({ viewport: { width, height: 844 }, hasTouch: true, isMobile: true });
    try {
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.goto(siteRoot + '/', { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      const paper = page.locator('[data-paper-art]');
      const paint = () => page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
      const positions = () => page.locator('.paper-response').evaluateAll(elements => elements.map(element => {
        const matrix = new DOMMatrixReadOnly(getComputedStyle(element).transform);
        return { x: matrix.m41, y: matrix.m42 };
      }));
      await paper.evaluate(element => {
        const bounds = element.getBoundingClientRect();
        window.scrollBy({ top: bounds.top + bounds.height / 2 - innerHeight * .65, behavior: 'instant' });
      });
      await page.waitForFunction(() => document.querySelector('[data-paper-art]').dataset.motion === 'running');
      await paint();
      const before = await positions();
      await page.screenshot({ path: `${out}/paper-${engine}-${width}-before.png` });
      await page.evaluate(() => window.scrollBy({ top: 160, behavior: 'instant' }));
      await paint();
      const after = await positions();
      const distances = after.map((position, index) => Math.hypot(position.x - before[index].x, position.y - before[index].y));
      assert(distances.every(distance => distance >= 7), `Every stack must move visibly during a 160px scroll: ${distances}`);
      await page.waitForTimeout(600);
      assert.deepEqual(await positions(), after, 'Scroll movement must stop promptly and remain still');
      assert.equal(await paper.evaluate(element => element.getAnimations({ subtree: true }).length), 0);
      await page.screenshot({ path: `${out}/paper-${engine}-${width}-after.png` });
      await page.evaluate(() => window.scrollBy({ top: -160, behavior: 'instant' }));
      await paint();
      const reversed = await positions();
      assert(reversed.every((position, index) => Math.hypot(position.x - before[index].x, position.y - before[index].y) < .1), 'Reverse scrolling must return to the same composition');

      await paper.evaluate(element => {
        const bounds = element.getBoundingClientRect();
        window.scrollBy({ top: bounds.top + bounds.height / 2 - innerHeight * .55, behavior: 'instant' });
      });
      await paint();
      await page.getByRole('button', { name: 'Pause motion' }).tap();
      await paint();
      const frozen = await positions();
      await page.evaluate(() => window.scrollBy({ top: 100, behavior: 'instant' }));
      await paint();
      assert.deepEqual(await positions(), frozen, 'Touch pause must freeze motion');
      await page.getByRole('button', { name: 'Play motion' }).tap();
      await paint();
      assert.notDeepEqual(await positions(), frozen, 'Touch play must restore scroll response');
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);

      await page.emulateMedia({ reducedMotion: 'reduce' });
      await paint();
      assert(await page.locator('.paper-response').evaluateAll(elements => elements.every(element => getComputedStyle(element).transform === 'none')));
      assert.equal(await page.locator('[data-motion-control]').isVisible(), false);
      assert.deepEqual(errors, []);
      results.push({ engine, width, scroll: 160, movement: distances });
    } finally {
      await context.close();
    }
  }
  return results;
}
