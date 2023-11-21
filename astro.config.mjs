import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://davidsupo.github.io',
  base: '/clothes-register',
  integrations: [
    svelte(),
    tailwind()
  ]
});