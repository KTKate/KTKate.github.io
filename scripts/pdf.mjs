import { chromium } from 'playwright';
import { preview } from 'astro';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('..', import.meta.url));
let server, browser;
try {
  server = await preview({ root, server: { port: 4329, host: '127.0.0.1' } });
  const bundled = chromium.executablePath();
  const system = ['/usr/bin/google-chrome-stable','/usr/bin/google-chrome'].find(existsSync);
  browser = await chromium.launch({ executablePath: existsSync(bundled) ? bundled : system });
  const page = await browser.newPage();
  const base = (process.env.BASE_PATH || '/').replace(/\/?$/, '/');
  const response = await page.goto(`http://127.0.0.1:${server.port}${base}print/`, { waitUntil: 'networkidle' });
  if (!response?.ok()) throw new Error('Print route did not load successfully');
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: `${root}/public/portfolio.pdf`, format: 'A4', printBackground: true, preferCSSPageSize: true, tagged: true, outline: true });
  console.log('Wrote public/portfolio.pdf');
} finally {
  await browser?.close();
  await server?.stop();
}
