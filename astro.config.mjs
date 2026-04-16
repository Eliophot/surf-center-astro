import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

const isProduction = process.env.NODE_ENV === 'production' && !process.env.NOINDEX;

export default defineConfig({
  site: 'https://surfcenter-verdon.fr',

  integrations: [
    sitemap({
      filter: () => isProduction,
    }),
  ],

  compressHTML: true,

  build: {
    inlineStylesheets: 'always',
  },

  adapter: cloudflare()
});