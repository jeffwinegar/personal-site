import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.jeffwinegar.com',
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://www.jeffwinegar.com/robots.txt',
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeAccessibleEmojis],
    shikiConfig: {
      theme: 'nord',
    },
  },
});
