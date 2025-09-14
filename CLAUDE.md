# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MS-29.com is a modern technical blog and portfolio website built with Next.js 14, focusing on MarTech solutions and technical content around Adobe Experience Manager (AEM), AWS, Salesforce, Spring Boot, and competitive programming. The site is configured for static export and deployment to GitHub Pages.

## Architecture & Technology Stack

### Core Technologies
- **Next.js 14** - App Router architecture with static export
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS v4** - Modern CSS framework with custom theme system
- **SCSS** - For advanced styling and custom components
- **highlight.js** - Code syntax highlighting with custom language support

### Key Dependencies
- **@next/third-parties** - Google Analytics and ad integration
- **@fortawesome/react-fontawesome** - Icon system
- **react-hook-form** - Form handling
- **sharp** - Image optimization
- **Adobe Clean Font** - Custom typography (AdobeClean-Regular.otf)

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (sidebar)/         # Route group with sidebar layout
│   │   ├── layout.tsx     # Sidebar layout wrapper
│   │   ├── sidebar.tsx    # Main sidebar component
│   │   ├── aem/          # AEM-related articles
│   │   ├── aws/          # AWS-related articles
│   │   ├── ai/           # AI/ML articles
│   │   ├── cp/           # Competitive programming
│   │   ├── salesforce/   # Salesforce content
│   │   └── ...           # Other topic directories
│   ├── globals.scss      # Global styles and Tailwind theme
│   ├── layout.tsx        # Root layout with SEO and ads
│   └── page.tsx          # Homepage
├── components/           # Reusable UI components
│   ├── article/         # Article-related components
│   ├── header/          # Site header and navigation
│   ├── footer/          # Site footer
│   ├── form/            # Form components
│   ├── list-group/      # Content listing components
│   └── third-parties/   # Google Ads/Analytics integration
├── lib/                 # Utilities and data
│   ├── data/           # Content data files
│   │   └── article/    # Article metadata organized by topic
│   ├── highlightjs/    # Custom syntax highlighting
│   └── util/           # Utility functions
└── types/              # TypeScript type definitions
```

## Content Architecture

### Data Organization
Content is structured using TypeScript data files in `/src/lib/data/article/`, organized by technology:
- `aem/` - Adobe Experience Manager content
- `aws/` - Amazon Web Services articles
- `ai/` - Artificial Intelligence content
- `cp/` - Competitive Programming
- `salesforce/` - Salesforce platform content

### Article Structure
Articles follow the `IArticleItem` interface:
```typescript
interface IArticleItem {
  title: string;
  description?: string;
  topics?: ITopic[];
  url?: string;
  publishDate: string;
  modifiedDate: string;
  views?: number;
  active?: boolean;
}
```

### URL Structure
- Homepage: `/`
- Article listings: `/blogs`
- Individual articles: `/{topic}/{subtopic}/{article-slug}`
- Topic pages: `/{topic}` (e.g., `/aem`, `/aws`)

## Styling System

### Tailwind CSS v4 Theme
Custom theme defined in `globals.scss` with:
- **Primary colors**: Blue gradient (`#0ea5e9` to `#0c4a6e`)
- **Accent colors**: Orange/amber palette (`#f97316` to `#7c2d12`)
- **Neutral colors**: Extended gray palette with custom 150 shade
- **Brand color**: `#3A2A1D` (dark brown)
- **Typography**: Inter font family with Adobe Clean as display font

### Key CSS Classes
- `.hero-section` - Landing page hero styling
- `.modern-card` - Consistent card component styling
- `.article-title` - Article heading styles
- `.topic-tag` - Content categorization tags
- `.button-primary` / `.button-secondary` - CTA styling
- `.modern-header` - Navigation bar with backdrop blur

### Responsive Design
- Mobile-first approach
- Custom responsive table styling (`.auth-methods-table`)
- Flexible grid layouts for content

## Component Patterns

### Layout Components
- **Header**: Fixed navigation with brand, menu, and social links
- **Footer**: Site information and links
- **Sidebar**: Context-aware navigation for article sections

### Content Components
- **Article**: Main article display with metadata
- **ArticleList**: Content listing with pagination
- **ListGroup**: Categorized content grouping
- **Breadcrumb**: Navigation breadcrumbs

### UI Components
- **LinkText**: Consistent internal/external link handling
- **Heading**: Semantic heading component
- **IconBar** / **IconItem**: Icon display systems

## Development Guidelines

### File Organization
- Use TypeScript for all new files
- Follow Next.js App Router conventions
- Organize components by feature/domain
- Keep data files separate from components
- Use absolute imports with `@/` alias

### Styling Conventions
- Prefer Tailwind classes over custom CSS
- Use semantic class names for reusable styles
- Define custom properties in the `@theme` block
- Use SCSS for complex component styles

### Content Management
- Article metadata lives in TypeScript data files
- Each topic has its own data file (e.g., `aem/sites.ts`)
- Use the `TOPICS` constant for consistent categorization
- Mark articles as `active: false` if not yet published

### SEO & Performance
- Each page includes proper metadata configuration
- Images are optimized using Next.js Image component
- Static export configuration for GitHub Pages deployment
- Structured data for articles (itemProp attributes)

## Key Development Commands

```bash
# Development server
npm run dev
yarn dev

# Production build (static export)
npm run build
yarn build

# Start production server (for testing)
npm run start
yarn start

# Linting
npm run lint
yarn lint
```

## Configuration Files

### Important Configs
- `next.config.mjs` - Static export and image optimization settings
- `postcss.config.js` - Tailwind CSS and autoprefixer setup
- `tsconfig.json` - TypeScript configuration with path aliases
- `globals.scss` - Tailwind theme and custom styles

### Third-Party Integrations
- Google Tag Manager (GTM_ID environment variable)
- Google Publisher Tags for advertisements
- Google AdSense verification
- Font Awesome icons for UI elements

## Deployment

The site is configured for static export to GitHub Pages:
- Build output goes to `/out` directory
- `CNAME` file configured for custom domain (ms-29.com)
- Images are unoptimized for static hosting compatibility

## Common Tasks

### Adding New Articles
1. Create article metadata in appropriate `/src/lib/data/article/{topic}/` file
2. Add article to the topic's export array
3. Create the article page in `/src/app/(sidebar)/{topic}/` structure
4. Update sidebar navigation if needed

### Adding New Topics
1. Create new topic data file in `/src/lib/data/article/`
2. Add topic to `TOPICS` constant
3. Create topic directory structure in app router
4. Update sidebar component to include new topic

### Styling Updates
1. Global changes go in `globals.scss`
2. Component-specific styles use Tailwind classes
3. Complex animations/interactions may require SCSS
4. Test responsive behavior across breakpoints

## Important Notes

- The site uses a route group `(sidebar)` for content pages with navigation
- Syntax highlighting supports multiple languages including custom Terraform support
- The brand uses a specific color palette - maintain consistency
- All external links open in new tabs by default
- Content is statically generated - no server-side rendering needed

This architecture provides a scalable, maintainable foundation for a technical blog with excellent performance and SEO capabilities.