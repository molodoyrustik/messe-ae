/**
 * Design tokens extracted from Figma design system
 * These tokens define the core design values for the Messe AI application
 */

// Color tokens
export const colors = {
  // Primary palette (Purple)
  primary: {
    50: '#E9EAF4',
    100: '#C7CAE3',
    200: '#A2A9D0',
    300: '#7F87BD',
    400: '#656CAF',
    500: '#4C53A2',
    600: '#464B98',
    700: '#3E418C',
    800: '#363880',
    900: '#29266C',
  },
  
  // Basic palette (Grey)
  grey: {
    50: '#F5F5F5',
    100: '#E9E9E9',
    200: '#D9D9D9',
    300: '#C4C4C4',
    400: '#9D9D9D',
    500: '#7B7B7B',
    600: '#555555',
    700: '#434343',
    800: '#262626',
    900: '#000000',
    white: '#FFFFFF',
  },
  
  // Semantic colors
  error: {
    main: '#BC3A1F',
    light: '#D7272D',
    dark: '#BC3A1F',
  },
  
  secondary: {
    main: '#A64B66',
    light: '#A64B66',
    dark: '#A64B66',
  },
  
  success: {
    main: '#008337',
    light: '#008337',
    dark: '#008337',
  },
} as const;

// Typography tokens
export const typography = {
  fontFamily: {
    primary: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
    secondary: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
  },
  
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  
  fontSize: {
    h1: 96,
    h2: 60,
    h3: 54,
    h4: 34,
    h5: 24,
    h6: 20,
    body1: 16,
    body2: 14,
    overline: 14,
    caption: 12,
    captionMob: 10,
  },
  
  lineHeight: {
    h1: 108,
    h2: 72,
    h3: 60,
    h4: 42,
    h5: 28,
    h6: 24,
    body1: 20,
    body2: 18,
    overline: 18,
    caption: 16,
    captionMob: 12,
  },
  
  letterSpacing: {
    normal: '0%',
    tight: '-2%',
    wide: '1%',
    wider: '2%',
    widest: '4%',
  },
} as const;

// Spacing tokens
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
} as const;

// Border radius tokens
export const borderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 20,
  xl: 100,
} as const;

// Shadow tokens
export const shadows = {
  button: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
  buttonHover: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  buttonFocus: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
  card: '0px 4px 12px 0px rgba(0, 0, 0, 0.08)',
} as const;

// Component size tokens
export const componentSizes = {
  button: {
    small: {
      height: 32,
      padding: '4px 10px',
      fontSize: 14,
    },
    medium: {
      height: 36,
      padding: '6px 16px',
      fontSize: 16,
    },
    large: {
      height: 48,
      padding: '8px 22px',
      fontSize: 24,
    },
    mobile: {
      height: 'auto',
      padding: '4px 8px',
      fontSize: 12,
    },
  },
} as const;

// Breakpoints
export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
} as const;
