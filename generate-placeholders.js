import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lista de placeholders a generar para Guainía
const placeholders = [
  // Hero y card selector (raíz de guainia)
  { file: 'public/images/guainia/hero-background.jpg', width: 1920, height: 1080, text: 'hero-background.jpg' },
  { file: 'public/images/guainia/card-selector.jpg', width: 800, height: 600, text: 'card-selector.jpg' },
  // Proceso
  { file: 'public/images/guainia/proceso/etapa-prospeccion-real.jpg', width: 800, height: 600, text: 'etapa-prospeccion-real.jpg' },
  { file: 'public/images/guainia/proceso/etapa-extraccion-aluvial-real.jpg', width: 800, height: 600, text: 'etapa-extraccion-aluvial-real.jpg' },
  // Materiales
  { file: 'public/images/guainia/materiales/material-oro-aluvial.jpg', width: 800, height: 600, text: 'material-oro-aluvial.jpg' },
  { file: 'public/images/guainia/materiales/material-concentrado-oro.jpg', width: 800, height: 600, text: 'material-concentrado-oro.jpg' },
  { file: 'public/images/guainia/materiales/material-granito.jpg', width: 800, height: 600, text: 'material-granito.jpg' }
];

async function generatePlaceholders() {
  for (const p of placeholders) {
    const fullPath = path.join(__dirname, p.file);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Crear SVG con estilo de placeholder (fondo #1E2326, borde #1F3B3A)
    const svg = `
      <svg width="${p.width}" height="${p.height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#1E2326" />
        <rect x="10" y="10" width="${p.width-20}" height="${p.height-20}" fill="none" stroke="#1F3B3A" stroke-width="2" stroke-dasharray="10,5" />
        <text x="50%" y="50%" font-size="28" fill="#A6B3B8" text-anchor="middle" dominant-baseline="middle" font-family="monospace">
          Placeholder
        </text>
        <text x="50%" y="60%" font-size="16" fill="#2F5A4B" text-anchor="middle" dominant-baseline="middle" font-family="monospace">
          ${p.text}
        </text>
      </svg>
    `;

    await sharp(Buffer.from(svg)).toFile(fullPath);
    console.log(`✅ Generado: ${p.file}`);
  }
  console.log('\n🎉 Placeholders de Guainía generados exitosamente.');
}

generatePlaceholders().catch(err => {
  console.error('❌ Error:', err);
});