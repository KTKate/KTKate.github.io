import { chromium } from 'playwright';
import { preview } from 'astro';

const server = await preview({ root: new URL('..', import.meta.url).pathname });
const port = server.port ?? 4321;
const base = process.env.BASE_PATH || '/';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`http://localhost:${port}${base}print/`, { waitUntil: 'networkidle' });
await page.pdf({ path: 'public/portfolio.pdf', format: 'A4', printBackground: true });
await browser.close();
await server.stop();
console.log('Wrote public/portfolio.pdf');
