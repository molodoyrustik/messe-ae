import { PaletteOptions } from '@mui/material/styles';
import { colors } from './tokens';

/**
 * Material-UI palette configuration based on Messe AI design tokens
 */
export const createPalette = (): PaletteOptions => ({
  mode: 'light',
  
  primary: {
    main: colors.primary[400], // #656CAF
    light: colors.primary[200], // #A2A9D0
    dark: colors.primary[600], // #464B98
    contrastText: colors.grey.white,
  },
  
  secondary: {
    main: colors.secondary.main, // #A64B66
    light: colors.secondary.light,
    dark: colors.secondary.dark,
    contrastText: colors.grey.white,
  },
  
  error: {
    main: colors.error.main, // #BC3A1F
    light: colors.error.light,
    dark: colors.error.dark,
    contrastText: colors.grey.white,
  },
  
  warning: {
    main: '#FF9800',
    light: '#FFB74D',
    dark: '#F57C00',
    contrastText: colors.grey.white,
  },
  
  info: {
    main: colors.primary[500], // #4C53A2
    light: colors.primary[300], // #7F87BD
    dark: colors.primary[700], // #3E418C
    contrastText: colors.grey.white,
  },
  
  success: {
    main: colors.success.main, // #008337
    light: colors.success.light,
    dark: colors.success.dark,
    contrastText: colors.grey.white,
  },
  
  grey: {
    50: colors.grey[50],
    100: colors.grey[100],
    200: colors.grey[200],
    300: colors.grey[300],
    400: colors.grey[400],
    500: colors.grey[500],
    600: colors.grey[600],
    700: colors.grey[700],
    800: colors.grey[800],
    900: colors.grey[900],
    A100: colors.grey[100],
    A200: colors.grey[200],
    A400: colors.grey[400],
    A700: colors.grey[700],
  },
  
  background: {
    default: colors.grey.white,
    paper: colors.grey.white,
  },
  
  text: {
    primary: colors.grey[900], // #000000
    secondary: colors.grey[700], // #434343
    disabled: colors.grey[500], // #7B7B7B
  },
  
  divider: colors.grey[200], // #D9D9D9
  
  action: {
    active: colors.primary[400], // #656CAF
    hover: colors.primary[50], // #E9EAF4
    selected: colors.primary[100], // #C7CAE3
    disabled: colors.grey[400], // #9D9D9D
    disabledBackground: colors.grey[200], // #D9D9D9
    focus: colors.primary[100], // #C7CAE3
  },
});

// Custom color extensions for theme
declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }
}

export const customPaletteExtensions = {
  tertiary: {
    main: colors.primary[300], // #7F87BD
    light: colors.primary[100], // #C7CAE3
    dark: colors.primary[500], // #4C53A2
    contrastText: colors.grey.white,
  },
};
