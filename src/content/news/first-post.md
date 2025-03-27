---
# Frontmatter Section
# This section contains metadata about the content using YAML syntax
# Each property here will be available as post.data.{property} in your templates

title: 'First News Post' # The title of the article
pubDate: 2023-08-01 # Publication date in YYYY-MM-DD format
description: 'This is the first news article in our blog series.' # Summary for SEO and previews
author: 'Jane Doe' # Author's name
coverImage: 'https://fakeimg.pl/600x400' # URL to the cover image
tags: ['announcements', 'new'] # Array of tags for categorizing content
# draft: false                    # Uncomment and set to true to mark as draft (won't publish in production)
---

<!--
  Main content section
  This is written in Markdown which gets converted to HTML at build time
  Learn more about Markdown: https://www.markdownguide.org/basic-syntax/
-->

# First News Post

Welcome to our first news post! This is a sample article to demonstrate how content collections work in Astro.

## What You'll Learn

- How to use Markdown in Astro
- How content collections work
- How to query and display content

<!--
  This is a simple paragraph with Lorem Ipsum text
  In a real article, you would replace this with actual content
-->

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam tincidunt, nisl nunc tincidunt nunc, vitae aliquam nunc nunc vitae nunc. Nunc sit amet aliquam tincidunt, nisl nunc tincidunt nunc, vitae aliquam nunc nunc vitae nunc.

## Next Steps

Stay tuned for more content as we continue to build out this starter theme. In the meantime, feel free to customize this post or add new ones to the `src/content/news` directory.
