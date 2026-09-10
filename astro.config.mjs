import { defineConfig } from 'astro/config';

// If the repo is NOT <username>.github.io, set base to '/<repo-name>'
// here and BASE_PATH in .github/workflows/deploy.yml.
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.github.io',
  base: process.env.BASE_PATH || '/',
});
