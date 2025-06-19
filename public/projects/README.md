# Project Images

This folder contains images for the Projects section of the website.

## Current Images

- `small-stands.svg` - Placeholder for small exhibition stands (< 100 m²)
- `medium-stands.svg` - Placeholder for medium exhibition stands (100-300 m²)
- `large-stands.svg` - Placeholder for large exhibition stands (> 300 m²)
- `double-deck.svg` - Placeholder for double-deck exhibition stands

## Replacing with Real Images

To replace the SVG placeholders with real project photos:

1. **Image Format**: Use high-quality JPG or WebP images
2. **Dimensions**: Recommended 800x600px or higher (4:3 aspect ratio works best)
3. **File Names**: Keep the same names but change extension:

   - `small-stands.jpg` or `small-stands.webp`
   - `medium-stands.jpg` or `medium-stands.webp`
   - `large-stands.jpg` or `large-stands.webp`
   - `double-deck.jpg` or `double-deck.webp`

4. **Update Code**: After adding new images, update the file extensions in:
   - `src/components/landing/ProjectsSection.tsx` (around line 70-85)

## Image Sources

Good sources for exhibition stand photos:

- Unsplash (free): https://unsplash.com/s/photos/exhibition-booth
- Vecteezy (free/premium): https://www.vecteezy.com/free-photos/exhibition-booth
- Your own project portfolio
- Stock photo services

## License Requirements

Ensure any images used have appropriate licenses for commercial use.
