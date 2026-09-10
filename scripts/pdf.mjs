import { chromium } from 'playwright';
import { preview } from 'astro';
import { existsSync } from 'node:fs';

const server = await preview({ root: new URL('..', import.meta.url).pathname });
const port = server.port ?? 4321;
const base = process.env.BASE_PATH || '/';
const bundledBrowser = chromium.executablePath();
const systemBrowser = ['/usr/bin/google-chrome-stable', '/usr/bin/google-chrome'].find(existsSync);
const browser = await chromium.launch({ executablePath: existsSync(bundledBrowser) ? bundledBrowser : systemBrowser });
const page = await browser.newPage();
await page.goto(`http://localhost:${port}${base}print/`, { waitUntil: 'networkidle' });
await page.pdf({ path: 'public/portfolio.pdf', format: 'A4', printBackground: true });
await browser.close();
await server.stop();
console.log('Wrote public/portfolio.pdf');
