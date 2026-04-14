/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'guainia': {
          'water': '#2F5A4B',
          'gold-matte': '#A68A56',
          'sand': '#D4C4A8',
        },
        'marmato': {
          'silver-vein': '#B0B5B9',
          'moss': '#556B2F',
        },
        'trust': '#1A1C20',
      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'Merriweather', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}