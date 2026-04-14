import { defineCollection, z } from 'astro:content';

const origenesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    ubicacion: z.string(),
    tipo_mineria: z.string(),
    imagen_principal: z.string(),
  }),
});

export const collections = {
  'origenes': origenesCollection,
};