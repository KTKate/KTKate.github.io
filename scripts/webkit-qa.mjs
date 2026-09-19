import { webkit } from 'playwright';
import { preview } from 'astro';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { verifyMobilePaper } from './mobile-paper-qa.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const out = root + 'artifacts/qa';
await mkdir(out, { recursive: true });
let server, browser;
try {
  server = await preview({ root, server: { host: '127.0.0.1', port: 4331 } });
  browser = await webkit.launch({ executablePath: process.env.WEBKIT_EXECUTABLE_PATH || undefined });
  const siteRoot = `http://127.0.0.1:${server.port}` + (process.env.BASE_PATH || '/').replace(/\/$/, '');
  const results = await verifyMobilePaper(browser, siteRoot, out);
  await writeFile(out + '/webkit-report.json', JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
} finally {
  await browser?.close();
  await server?.stop();
}
