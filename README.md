# Astro Starter Theme

A modern starter theme for Astro with a simplified CSS reset, content collections, and best practices.

## Features

- ✅ Modern CSS reset and utility classes
- ✅ Responsive components and layouts
- ✅ Mobile-friendly navigation
- ✅ Contact form with API endpoint
- ✅ Type-safe content collections
- ✅ Optimized for performance

## Getting Started

### Prerequisites

- Node.js (v16.12.0 or higher)
- npm or yarn

### Installation

1. Clone the repository

   ```
   git clone https://github.com/yourusername/astro-starter.git
   cd astro-starter
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

## Project Structure

```
/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable UI components
│   ├── content/       # Content collections (markdown files)
│   ├── layouts/       # Page layouts
│   ├── pages/         # Page routes and templates
│   ├── styles/        # Global styles and CSS reset
│   └── utils/         # Utility functions
└── package.json       # Project dependencies and scripts
```

## Customization

### CSS Variables

The theme uses CSS variables for colors, spacing, and other design tokens. You can customize these in `src/layouts/MainLayout.astro`.

### Components

All components are designed to be easily customizable and extensible. Each component is self-contained with its own styles and logic.

### Content Collections

The project uses Astro's content collections for structured content. You can create new collections by adding directories under `src/content/` and defining schemas.

## Deployment

This project can be deployed to any static hosting service:

```
npm run build
```

This will generate a static build in the `dist/` directory.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Astro](https://astro.build/)
- [Modern CSS Reset](https://piccalil.li/blog/a-modern-css-reset/)
- [Josh Comeau's CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/)
