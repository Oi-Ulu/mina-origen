// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'http://localhost:4321',          // ← importante para desarrollo
  base: '/mina-origen',
  // integrations: [tailwind()], // Comenta si no lo tienes instalado
});