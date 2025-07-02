# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Layout Guidelines

### Page Spacing
- All pages except the main landing page should have a top padding from the header:
  - Desktop: 3.75rem
  - Mobile: 1.5rem
- Mobile content should have horizontal padding of 1rem on each side
  - Exception: Full-width images can extend to screen edges
- This ensures consistent spacing across the application

## Commands

### Development
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### UI Development
- Visit `/ui-kit` route to view complete design system showcase

## Architecture

### Framework & Stack
- **Next.js 15.3.3** with App Router architecture
- **React 19** for UI components
- **Material-UI 7.1.1** with extensive custom theming
- **TypeScript** for type safety
- **Emotion** for CSS-in-JS styling

### Theme System Architecture
The project uses a sophisticated design system based on tokens extracted from Figma:

- `src/theme/index.ts` - Main theme factory and exports
- `src/theme/tokens.ts` - Design tokens (colors, typography, spacing)
- `src/theme/palette.ts` - Color palette definitions
- `src/theme/typography.ts` - Typography variants and hierarchy
- `src/theme/components.ts` - Material-UI component customizations

The theme is applied through `src/components/ThemeProvider.tsx` which wraps the entire application.

### Key Theme Features
- Custom purple primary palette (#656CAF base)
- Extended typography variants including `captionMobile` and `link`
- Three button variants: Contained, Outlined, Text
- Custom form components with floating labels
- Chip components for filtering
- Menu components with underline indicators
- WCAG compliant color contrast ratios

### Component Structure
- Landing page components in `src/components/landing/`
- UI Kit showcase components in `src/components/ui-kit/`
- Reusable components at `src/components/` root

### App Router Structure
- Main pages in `src/app/` following Next.js 13+ convention
- `/ui-kit` route showcases the complete design system
- Pages for `/about`, `/articles`, `/manifestos`, `/projects`

### Emotion Integration
- `src/lib/emotion-cache.ts` and `src/lib/emotion-registry.tsx` handle server-side rendering for Emotion
- Theme provider includes CssBaseline for consistent base styles

### Design Token Usage
Always use design tokens from `src/theme/tokens.ts` when creating new components:
```typescript
import { colors, typography, spacing } from '@/theme/tokens';
```

### Material-UI Customization Pattern
Components are customized through the theme's `components` key, defining default props and style overrides for consistent design system adherence.

## Code Style Guidelines

### Component Styling
- Use Material-UI's `sx` prop for component-specific styles
- Prefer responsive arrays/objects for breakpoint-specific values: `{ xs: '1rem', md: '2rem' }`
- Use theme tokens for colors, spacing, and typography
- Avoid fixed dimensions that can cause horizontal scrolling - use responsive units
- **ALWAYS use rem units for sizing, spacing, and typography** (e.g., `1rem`, `0.75rem`, `2.5rem`)
  - This ensures consistent scaling and accessibility
  - Convert pixel values from designs to rem (1rem = 16px)
- **ADAPTIVE DESIGN PRINCIPLE**: Never use fixed widths from Figma directly
  - Components should use `width: '100%'` and let parent containers control sizing
  - Use grid/flexbox for layout instead of fixed dimensions
  - Heights can be fixed if needed, but widths should always be responsive

### Responsive Design Patterns
- Mobile-first approach with progressive enhancement
- Use `display: { xs: 'none', md: 'block' }` for hiding/showing elements
- Prefer `minmax()` and `auto-fit` for responsive grids to prevent overflow
- Always test components for horizontal scrolling issues

### Animation Guidelines
- Use CSS transitions for simple hover states
- Apply `transition: 'all 0.3s ease'` for smooth interactions
- For menu underlines, use `transform: scaleX()` with `transformOrigin` for slide effects
- Grayscale filters with opacity changes for image hover states

## Recent Changes Log

### Desktop Landing Page Fixes (2025-06-26)

1. **Header Menu Animation**
   - Added animated underline that slides from left to right on hover
   - Implementation: `transform: scaleX(0/1)` with `transformOrigin: 'left center'`
   - File: `src/components/Header.tsx`

2. **Hero Section**
   - Removed "Connect with us" button from desktop (kept for mobile)
   - Prevented portal rendering on desktop with `isMobile` condition
   - File: `src/components/landing/HeroSection.tsx`

3. **Clients Section**
   - Applied grayscale filter by default with color on hover
   - File: `src/components/landing/ClientsSection.tsx`

4. **Projects Section**
   - Fixed card scaling to be uniform (1.05) instead of vertical-only
   - Removed top padding on desktop
   - File: `src/components/landing/ProjectsSection.tsx`

5. **Advantages Section**
   - Swapped positions of "European standards" and "Own production" blocks
   - Implemented colored icons from Figma with grayscale/color hover effect
   - Fixed responsive sizing to prevent horizontal scrolling
   - Removed max-width constraints from icons for natural sizing
   - Increased gap between cards to 2rem on desktop
   - Files: `src/components/landing/AdvantagesSection.tsx`, `src/components/icons/AdvantageIcons.tsx`

6. **Awards Section**
   - Added desktop title with 2.5rem margin above cards
   - Updated card dimensions to match Figma specifications
   - Fixed responsive grid to prevent horizontal scrolling using `minmax()` and percentage widths
   - File: `src/components/landing/AwardsSection.tsx`

7. **Parallax Section**
   - Removed top and bottom margins (mt: 0, mb: 0)
   - File: `src/components/landing/ParallaxSection.tsx`

8. **Section Spacing**
   - Parallax → Advantages: 2.5rem
   - Advantages → Awards: 6.25rem
   - Advantages → ExpoGlobal: 6.25rem
   - ExpoGlobal → Footer: 3.75rem
   - Projects → Parallax: 6.25rem