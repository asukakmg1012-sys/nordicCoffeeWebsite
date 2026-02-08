import { defineCollection, z } from 'astro:content';

const beansCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    origin: z.string(),
    roastLevel: z.enum(['Light', 'Medium', 'Medium-Dark', 'Dark']),
    process: z.string(),
    variety: z.string().optional(),
    altitude: z.string().optional(),
    notes: z.array(z.string()),
    description: z.string(),
    price: z.string(),
    weight: z.string().default('200g'),
    featuredImage: image(),
    isFeatured: z.boolean().default(false),
  }),
});

export const collections = {
  'beans': beansCollection,
};
