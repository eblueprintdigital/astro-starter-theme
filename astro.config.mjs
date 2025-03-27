/*
 * Astro Configuration File
 * This file controls the build settings and configuration options for the Astro project.
 * Documentation: https://docs.astro.build/en/reference/configuration-reference/
 */

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'; // Adds automatic sitemap generation
import mdx from '@astrojs/mdx'; // Adds support for MDX (Markdown with JSX)

// https://astro.build/config
export default defineConfig({
  // Site URL for generating absolute URLs and sitemaps
  // IMPORTANT: Change this to your production URL before deployment
  site: 'https://yourdomain.com',

  // Integrations add functionality to your Astro project
  integrations: [
    sitemap(), // Creates a sitemap.xml file for better SEO
    mdx(), // Enables MDX support for more powerful Markdown
  ],

  // Configuration for Markdown rendering
  markdown: {
    shikiConfig: {
      theme: 'github-dark', // Code block theme
      wrap: true, // Enables word wrapping in code blocks
    },
  },
});
