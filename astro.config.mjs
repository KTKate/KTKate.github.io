import { defineConfig } from 'astro/config';
export default defineConfig({
  site: process.env.SITE_URL || 'https://ktkate.github.io',
  base: process.env.BASE_PATH || '/',
});
