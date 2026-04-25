// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Para desarrollo local: http://localhost:4321 funciona con base.
  // En producción (GitHub Pages) se usará https://oi-ulu.github.io
  site: 'https://oi-ulu.github.io',   // ← dominio raíz de GitHub Pages
  base: '/mina-origen',
  // integrations: [tailwind()], // Comentado porque no está instalado @astrojs/tailwind
});