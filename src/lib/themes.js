// src/lib/themes.js
// Temas centralizados para los dos territorios: Marmato y Guainía
// Según especificaciones del protocolo secciones 4, 6 y 7.

export const contextTheme = {
  marmato: {
    bg: 'bg-marmato-base-rock/10',
    border: 'border-marmato-clay/40',
    textTitle: 'text-marmato-clay',
    textMeta: 'text-marmato-silver-vein font-mono',
  },
  guainia: {
    bg: 'bg-guainia-slow-water/10',
    border: 'border-guainia-deep-water/40',
    textTitle: 'text-guainia-deep-water',
    textMeta: 'text-guainia-mist font-mono',
  },
};

export const processCardTheme = {
  marmato: {
    cardBg: 'bg-marmato-base-rock/20',
    borderLeft: 'border-l-2 border-marmato-clay/60',
    titleColor: 'text-marmato-clay',
  },
  guainia: {
    cardBg: 'bg-guainia-bedrock/30',
    borderTop: 'border-t-2 border-guainia-slow-water/60',
    titleColor: 'text-guainia-deep-water',
  },
};

export const navActiveClass = {
  marmato: 'text-marmato-clay border-marmato-clay',
  guainia: 'text-guainia-deep-water border-guainia-deep-water',
};

// Opcional: puedes agregar más temas según necesidad (ej. hero overlays, badges)