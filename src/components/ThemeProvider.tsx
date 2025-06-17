'use client';

import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from 'react';
import { themeWithCustomShadows } from '../theme';

/**
 * Custom ThemeProvider component that applies the Messe AI design system
 * Uses design tokens extracted from Figma and implements Material-UI customizations
 */
export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <MUIThemeProvider theme={themeWithCustomShadows}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}