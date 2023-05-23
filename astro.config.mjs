import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.jeffwinegar.com',
  integrations: [
    sitemap({
      filter: (page) =>
        page !==
        'https://646c1bb41b61b800085b2c75--jeffwinegar.netlify.app/robots.txt',
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeAccessibleEmojis],
    shikiConfig: {
      theme: 'nord',
    },
  },
});
