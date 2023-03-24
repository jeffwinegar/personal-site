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
      title: z.string(),
      date: z.date(),
      categories: z.array(z.enum(categories)).default([]),
      draft: z.boolean().optional(),
    })
    .strict(),
});

export const collections = {
  blog: blogCollection,
};
