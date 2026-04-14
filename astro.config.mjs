import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://Oi-Ulu.github.io',
  base: '/mina-origen',
  integrations: [tailwind()],
});