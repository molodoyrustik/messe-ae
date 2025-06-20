# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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