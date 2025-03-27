import { defineCollection, z } from 'astro:content';

// Define the News collection schema
export const collections = {
  news: defineCollection({
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      coverImage: z.string(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
  }),
  services: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string(),
      order: z.number().default(0),
    }),
  }),
};
