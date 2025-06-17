import { TypographyOptions } from '@mui/material/styles/createTypography';
import { typography, colors } from './tokens';

/**
 * Material-UI typography configuration based on Messe AI design tokens
 */
export const createTypography = (): TypographyOptions => ({
  fontFamily: typography.fontFamily.primary,
  
  // Heading styles
  h1: {
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.regular,
    fontSize: `${typography.fontSize.h1}px`,
    lineHeight: `${typography.lineHeight.h1}px`,
    letterSpacing: typography.letterSpacing.normal,
    color: colors.grey[900],
  },
  
  h2: {
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.regular,
    fontSize: `${typography.fontSize.h2}px`,
    lineHeight: `${typography.lineHeight.h2}px`,
    letterSpacing: typography.letterSpacing.normal,
    color: colors.grey[900],
  },
  
  h3: {
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.regular,
    fontSize: `${typography.fontSize.h3}px`,
    lineHeight: `${typography.lineHeight.h3}px`,
    letterSpacing: typography.letterSpacing.normal,
    color: colors.grey[900],
  },
  
  h4: {
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.regular,
    fontSize: `${typography.fontSize.h4}px`,
    lineHeight: `${typography.lineHeight.h4}px`,
    letterSpacing: typography.letterSpacing.wide,
    color: colors.grey[900],
  },
  
  h5: {
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.regular,
    fontSize: `${typography.fontSize.h5}px`,
    lineHeight: `${typography.lineHeight.h5}px`,
    letterSpacing: typography.letterSpacing.wide,
    color: colors.grey[900],
  },
  
  h6: {
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.regular,
    fontSize: `${typography.fontSize.h6}px`,
    lineHeight: `${typography.lineHeight.h6}px`,
    letterSpacing: typography.letterSpacing.wide,
    color: colors.grey[900],
  },
  
  // Body text styles
  body1: {
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.regular,
    fontSize: `${typography.fontSize.body1}px`,
    lineHeight: `${typography.lineHeight.body1}px`,
    letterSpacing: typography.letterSpacing.wider,
    color: colors.grey[900],
  },
  
  body2: {
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.regular,
    fontSize: `${typography.fontSize.body2}px`,
    lineHeight: `${typography.lineHeight.body2}px`,
    letterSpacing: typography.letterSpacing.wider,
    color: colors.grey[900],
  },
  
  // Utility text styles
  subtitle1: {
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.medium,
    fontSize: `${typography.fontSize.body1}px`,
    lineHeight: `${typography.lineHeight.body1}px`,
    letterSpacing: typography.letterSpacing.wider,
    color: colors.grey[900],
  },
  
  subtitle2: {
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.medium,
    fontSize: `${typography.fontSize.body2}px`,
    lineHeight: `${typography.lineHeight.body2}px`,
    letterSpacing: typography.letterSpacing.wider,
    color: colors.grey[700],
  },
  
  caption: {
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.regular,
    fontSize: `${typography.fontSize.caption}px`,
    lineHeight: `${typography.lineHeight.caption}px`,
    letterSpacing: typography.letterSpacing.widest,
    color: colors.grey[700],
  },
  
  overline: {
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.regular,
    fontSize: `${typography.fontSize.overline}px`,
    lineHeight: `${typography.lineHeight.overline}px`,
    letterSpacing: typography.letterSpacing.widest,
    textTransform: 'uppercase',
    color: colors.grey[700],
  },
  
  // Button text style
  button: {
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.regular,
    fontSize: `${typography.fontSize.body1}px`,
    lineHeight: `${typography.lineHeight.body1}px`,
    letterSpacing: typography.letterSpacing.wide,
    textTransform: 'none',
    color: colors.grey.white,
  },
});

// Custom typography variants
declare module '@mui/material/styles' {
  interface TypographyVariants {
    captionMobile: React.CSSProperties;
    link: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    captionMobile?: React.CSSProperties;
    link?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    captionMobile: true;
    link: true;
  }
}

export const customTypographyVariants = {
  captionMobile: {
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.regular,
    fontSize: `${typography.fontSize.captionMob}px`,
    lineHeight: `${typography.lineHeight.captionMob}px`,
    letterSpacing: typography.letterSpacing.normal,
    color: colors.grey[700],
  },
  
  link: {
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.regular,
    fontSize: `${typography.fontSize.body1}px`,
    lineHeight: `${typography.lineHeight.body1}px`,
    letterSpacing: typography.letterSpacing.wider,
    color: colors.primary[400],
    textDecoration: 'underline',
    cursor: 'pointer',
    '&:hover': {
      color: colors.primary[600],
    },
  },
};
