import { defineCollection, z } from 'astro:content';

const categories = [
  'Backend',
  'CSS',
  'Frontend',
  'JavaScript',
  'Other',
  'Reference',
  'Typescript',
] as const;

const blogCollection = defineCollection({
  schema: z
    .object({
      draft: z.boolean().default(false),
      title: z.string(),
      date: z.date(),
      categories: z.array(z.enum(categories)).default([]),
      toc: z.boolean().default(true),
      share: z.object({
        image: z.string().optional(),
        description: z.string().max(200),
      }),
    })
    .strict(),
});

export const collections = {
  blog: blogCollection,
};
