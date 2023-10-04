import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import shikiTwoslash from 'remark-shiki-twoslash';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.jeffwinegar.com',
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://www.jeffwinegar.com/robots.txt',
    }),
    preact(),
  ],
  markdown: {
    rehypePlugins: [rehypeAccessibleEmojis],
    remarkPlugins: [[shikiTwoslash.default, { theme: 'nord' }]],
    syntaxHighlight: false,
  },
});
