// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

/**
 * Gudgumz — Astro configuration
 * Static-first. AI-crawler friendly. Maximum performance.
 */
export default defineConfig({
  site: 'https://gudgumz.com',
  trailingSlash: 'never',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
    },
  },
  integrations: [
    mdx({
      optimize: true,
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) =>
        !page.includes('/draft/') &&
        !page.includes('/_') &&
        !page.includes('/404'),
      serialize(item) {
        // Boost priority for pillar pages
        if (item.url === 'https://gudgumz.com/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        if (
          item.url.includes('/the-spots') ||
          item.url.includes('/the-material') ||
          item.url.includes('/the-decay') ||
          item.url.includes('/the-field')
        ) {
          item.priority = 0.9;
        }
        if (item.url.includes('/objects/')) {
          item.priority = 0.85;
        }
        if (item.url.includes('/atlas/')) {
          item.priority = 0.7;
        }
        if (item.url.includes('/journal/')) {
          item.priority = 0.6;
        }
        return item;
      },
    }),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  experimental: {
    contentIntellisense: true,
  },
});
