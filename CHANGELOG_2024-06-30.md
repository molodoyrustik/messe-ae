# Changelog - June 30, 2024

## Changes Made

### Hero Section
- **Added "Request a proposal" CTA button** (desktop only)
  - Position: Right edge of viewport (`right: 2.5rem`)
  - Vertically centered with subtitle text (`top: 532px`)
  - Size: 320px × 48px
  - Styling: Primary theme color with hover state
  - Action: Scrolls to contact form on click

### Client Logos Section
- **Fixed logo spacing issues**
  - Changed desktop gap from `120px` to `7.5rem` for better consistency
  - Removed fixed width from `LogoItem` container
  - Set logo images to `width: auto` to preserve natural dimensions
  - This ensures visually consistent spacing between logos of different widths

- **Updated opacity values**
  - Mobile: Changed from `0.7` to `0.6`
  - Desktop: Changed from `0.8` to `0.7`
  - Grayscale effect remains: 100% by default, 0% on hover

## Files Modified
- `src/components/landing/HeroSection.tsx`
- `src/components/landing/ClientsSection.tsx`

## Commit Hash
`f00064c`

---

### Awards Section
- **Fixed image display issues**
  - Changed `objectFit` from `'cover'` to `'contain'` to prevent cropping
  - Increased image height from 384px to 450px per design specifications
  - Images now display in full without being cut off

- **Made section fully responsive**
  - Replaced fixed pixel grid (`320px` columns) with responsive grid
  - Medium screens: `repeat(2, 1fr)` (2 columns)
  - Large screens: `repeat(4, 1fr)` (4 columns)
  - Changed from fixed widths to `maxWidth` for flexibility
  - Prevents content overflow on smaller screens

### ExpoGlobal Section Alignment
- **Updated layout for visual alignment with Awards**
  - Changed to grid layout with `1fr 3fr` ratio
  - Added `maxWidth: 1360px` and `mx: auto` (same as Awards)
  - Logo section uses responsive width with `maxWidth: 320px`
  - Maintains visual alignment while being fully responsive

## Files Modified
- `src/components/landing/AwardsSection.tsx`
- `src/components/landing/ExpoglobalSection.tsx`

## Commit Hash
`8d3fdd6`