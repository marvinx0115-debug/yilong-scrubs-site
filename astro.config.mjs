import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yilong-scrubs-site.pages.dev',
  integrations: [tailwind(), sitemap()],
  output: 'static',
});