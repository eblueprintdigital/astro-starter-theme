# Astro Starter Theme

A modern starter theme for Astro with a simplified CSS reset, content collections, and best practices. This comprehensive documentation is designed to help team members understand the project structure and development workflow.

## 📚 Features

- ✅ **Modern CSS Reset**: Includes a carefully crafted CSS reset and utility classes based on modern best practices
- ✅ **Content Collections**: Type-safe content management with Astro's content collections
- ✅ **Responsive Design**: Mobile-first approach with responsive components and layouts
- ✅ **Performance Optimized**: Fast loading times with minimal JavaScript
- ✅ **SEO Ready**: Proper metadata structure and sitemap generation
- ✅ **Contact Form**: Server-side form processing with validation
- ✅ **Developer Experience**: Organized codebase with comments for easier maintenance

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v16.12.0 or higher (we recommend using [nvm](https://github.com/nvm-sh/nvm) for version management)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/eblueprintdigital/astro-starter-theme.git
   cd astro-starter-theme
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will be available at http://localhost:4321

## 📂 Project Structure

```
/
├── public/                # Static assets (favicon, images, etc.)
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ContactForm.astro    # Form with validation
│   │   ├── Footer.astro         # Site footer
│   │   ├── Header.astro         # Navigation header
│   │   ├── Hero.astro           # Hero section
│   │   ├── NewsCard.astro       # Card for news articles
│   │   └── ServiceCard.astro    # Card for services
│   │
│   ├── content/           # Content collections (structured content)
│   │   ├── news/          # Blog posts and news articles
│   │   └── services/      # Service offerings
│   │
│   ├── layouts/           # Page layouts and templates
│   │   └── MainLayout.astro    # Main site layout with header/footer
│   │
│   ├── pages/             # Page routes and entry points
│   │   ├── api/           # API endpoints (contact form, etc.)
│   │   ├── news/          # News listing and individual articles
│   │   ├── services/      # Services listing and details
│   │   ├── about.astro    # About page
│   │   ├── contact.astro  # Contact page
│   │   └── index.astro    # Homepage
│   │
│   ├── styles/            # Global styles and CSS reset
│   │   └── global.css     # Global styles and utilities
│   │
│   ├── utils/             # Utility functions and helpers
│   │   └── formatDate.js  # Date formatting helper
│   │
│   └── content.config.js  # Content collections schema definitions
│
├── astro.config.mjs       # Astro configuration
└── package.json           # Project dependencies and scripts
```

## 🔍 Key Concepts

### Astro Pages and Routing

Astro uses file-based routing. Files in the `src/pages` directory automatically become routes:

- `src/pages/index.astro` → `/`
- `src/pages/about.astro` → `/about`
- `src/pages/services/index.astro` → `/services`

### Dynamic Routes

Dynamic routes use square brackets in the filename, e.g., `src/pages/news/[slug].astro` creates pages for each news article with URLs like `/news/first-post`.

### Content Collections

Content is managed through type-safe collections defined in `src/content.config.js`. This provides schema validation for markdown files.

Example usage:

```javascript
// Fetching all news articles
import { getCollection } from 'astro:content';
const allNews = await getCollection('news');
```

### Component Design

Components are written in `.astro` files which combine HTML, CSS, and JavaScript:

- The frontmatter section (between `---`) contains JavaScript
- The HTML section contains the template with reactive expressions
- The `<style>` tag contains component-specific CSS (scoped by default)

## 🎨 Customization Guide

### Styling System

The theme uses a combination of:

1. **CSS Custom Properties**: Global design tokens (colors, spacing, etc.)
2. **Utility Classes**: For common patterns and quick styling
3. **Component-Scoped CSS**: For component-specific styling

Key files to modify:

- `src/styles/global.css`: Global styles and utilities
- Component `<style>` blocks: Component-specific styles

### Adding New Content

#### Creating a News Article:

1. Add a new `.md` file to `src/content/news/`
2. Include the required frontmatter properties (title, date, etc.)
3. Write your content in Markdown

#### Creating a Service:

1. Add a new `.md` file to `src/content/services/`
2. Include the required frontmatter (title, description, icon, etc.)

### Modifying the Navigation

Edit the `Header.astro` component to update navigation links.

## 🔧 Development Workflow

### Commands

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally
- `npm run astro`: Run Astro CLI commands

### Type Generation for Content

If you modify content schemas, run:

```bash
npm run astro sync
```

This regenerates TypeScript types for your content collections.

## 📱 Responsive Design

The theme follows a mobile-first approach with:

- Fluid typography using `clamp()`
- Responsive grid layouts
- Breakpoint utilities for different viewport sizes

## 🚢 Deployment

### Building for Production

```bash
npm run build
```

This generates optimized files in the `dist/` directory.

### Hosting Options

- **Netlify/Vercel**: Connect your GitHub repository
- **GitHub Pages**: Configure with GitHub Actions
- **Any Static Host**: Upload the `dist/` directory

## 🤝 Contributing

We follow these practices:

1. Create feature branches from `main`
2. Follow consistent naming conventions
3. Add detailed comments for code clarity
4. Update documentation for significant changes

## 📄 License

This project is licensed under the MIT License.

## 📞 Need Help?

If you have any questions about this starter theme, please reach out to the development team at [support@eblueprintdigital.com](mailto:support@eblueprintdigital.com).
