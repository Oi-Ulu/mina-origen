/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // ===== MARMATO (seco, oxidado, cortes geológicos) =====
        marmato: {
          'base-rock': '#8C857A',   // Roca meteorizada dominante
          'clay': '#A78F6B',        // Arcilla, acento principal
          'oxide': '#7A5C3E',       // Oxidación férrica, acento secundario
          'silver-vein': '#B0B5B9', // Solo para datos técnicos
          'moss': '#4E5A3A',        // Vegetación de estrés (muy puntual)
          'shadow': '#2B2E30',      // Profundidad mineral
          'sky-accent': '#3A5F8C',  // Acento atmosférico (muy restringido)
        },
        // ===== GUAINÍA (húmedo, profundo, reflectivo) =====
        guainia: {
          'bedrock': '#1E2326',           // Base granítica húmeda
          'deep-water': '#1F3B3A',        // Agua profunda (acento principal)
          'slow-water': '#2F5A4B',        // Transición fluvial
          'vegetation': '#2E4A34',        // Selva no brillante
          'reflection-warm': '#C47A4A',   // Reflejo atardecer (solo narrativo)
          'mist': '#A6B3B8',              // Atmósfera, metadatos
          'foam': '#E6E9EA',              // Espuma, alto contraste
        },
        // Los colores neutrales de Tailwind (stone, gray, etc.) se mantienen
      },
    },
  },
  plugins: [],
}