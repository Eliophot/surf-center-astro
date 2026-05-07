import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isProduction = process.env.NODE_ENV === 'production' && !process.env.NOINDEX;

export default defineConfig({
  site: 'https://surfcenter-verdon.fr',

  integrations: [sitemap({
    filter: () => isProduction,
  }), svelte()],

  compressHTML: true,

  build: {
    inlineStylesheets: 'always',
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '$lib': path.resolve(__dirname, './src/lib'),
      },
    },
  },
});