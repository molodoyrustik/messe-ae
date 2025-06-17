import { createTheme, Theme } from '@mui/material/styles';
import { createPalette, customPaletteExtensions } from './palette';
import { createTypography, customTypographyVariants } from './typography';
import { createComponents } from './components';
import { breakpoints, spacing } from './tokens';

/**
 * Main theme creation function for Messe AI application
 * Combines all design tokens and customizations into a cohesive Material-UI theme
 */
export const createMesseTheme = (): Theme => {
  // Create base theme with palette and typography
  const baseTheme = createTheme({
    palette: {
      ...createPalette(),
      ...customPaletteExtensions,
    },
    
    typography: {
      ...createTypography(),
      ...customTypographyVariants,
    },
    
    spacing: (factor: number) => `${spacing.sm * factor}px`,
    
    breakpoints: {
      values: breakpoints,
    },
    
    shape: {
      borderRadius: 8,
    },
  });

  // Create final theme with component customizations
  const theme = createTheme({
    ...baseTheme,
    components: createComponents(baseTheme),
  });

  return theme;
};

// Export the default theme instance
export const messeTheme = createMesseTheme();

// Re-export design tokens for use in components
export * from './tokens';
export * from './palette';
export * from './typography';
export * from './components';

// Theme type augmentation
declare module '@mui/material/styles' {
  interface Theme {
    customShadows: {
      button: string;
      buttonHover: string;
      buttonFocus: string;
      card: string;
    };
  }

  interface ThemeOptions {
    customShadows?: {
      button?: string;
      buttonHover?: string;
      buttonFocus?: string;
      card?: string;
    };
  }
}

// Add custom shadows to theme
export const themeWithCustomShadows = createTheme({
  ...messeTheme,
  customShadows: {
    button: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
    buttonHover: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    buttonFocus: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
    card: '0px 4px 12px 0px rgba(0, 0, 0, 0.08)',
  },
});

export default themeWithCustomShadows;
