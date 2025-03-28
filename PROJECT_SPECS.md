# Project Specifications

This document outlines the standards, preferences, and guidelines for the Astro Starter Theme.

## Technology Stack

- **Framework**: Astro (without TypeScript)
- **CSS**: Pure CSS (no preprocessors)
- **JavaScript**: Plain JavaScript (no TypeScript)
- **Icons**: astro-icon package

## Code Standards

### General

- Use standard JavaScript (not TypeScript)
- Avoid TypeScript-specific syntax such as interfaces and type annotations
- Keep code modular and component-based
- Use JSDoc comments for documentation
- Follow semantic HTML standards

### CSS

- Use CSS custom properties for theming
- Follow BEM naming convention when appropriate
- Mobile-first approach for responsive design
- Keep reset.css and global.css separate (avoid duplication)

### Components

- Use Astro components (.astro files)
- Keep component-specific styles within components
- Emphasize simplicity and readability over complex patterns
- Document components with clear comments

## File Structure

- `src/components/` - Reusable UI components
- `src/layouts/` - Page layouts and templates
- `src/pages/` - Page routes and content
- `src/styles/` - Global styles and reset
- `src/content/` - Content collections
- `src/utils/` - Utility functions

## Libraries and Dependencies

- Minimize external dependencies
- Only use well-maintained and essential libraries
- Document all third-party code

## Performance Considerations

- Optimize images
- Minimize JavaScript
- Utilize Astro's partial hydration when needed

---

_This specifications document should be consulted when making decisions about the project's direction and implementation._
