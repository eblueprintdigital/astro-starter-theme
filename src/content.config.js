/*
 * Content Collections Configuration
 * This file defines the schemas for all content collections in the Astro project.
 * Content collections help organize and validate Markdown content.
 * Documentation: https://docs.astro.build/en/guides/content-collections/
 */

import { defineCollection, z } from 'astro:content';

// Export collections object containing all content collection configurations
export const collections = {
  // News collection for blog posts and news articles
  news: defineCollection({
    // Schema defines the expected structure of frontmatter in Markdown files
    schema: z.object({
      title: z.string(), // Title of the news article (required)
      pubDate: z.date(), // Publication date (required)
      description: z.string(), // Article summary/description (required)
      author: z.string(), // Author name (required)
      coverImage: z.string(), // Path to cover image (required)
      tags: z.array(z.string()).default([]), // Array of tags (optional, defaults to empty array)
      draft: z.boolean().default(false), // Draft status (optional, defaults to false)
    }),
  }),

  // Services collection for service pages
  services: defineCollection({
    schema: z.object({
      title: z.string(), // Service title (required)
      description: z.string(), // Service description (required)
      icon: z.string(), // Icon identifier (required)
      order: z.number().default(0), // Order for displaying services (optional, defaults to 0)
    }),
  }),
};
