// @ts-check
import { defineConfig } from 'astro/config';

// Update `site` to your real domain when you deploy (used for canonical URLs / RSS).
export default defineConfig({
  site: 'https://mehriddin.dev',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
