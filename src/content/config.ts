import { defineCollection, z } from "astro:content";

const serviciosCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    category: z.string(),
    features: z.array(z.string()),
    order: z.number().optional(),
    image: z.string().optional(),
    priceRange: z.string().optional(),
  }),
});

export const collections = {
  servicios: serviciosCollection,
};
