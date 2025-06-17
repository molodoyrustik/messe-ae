import { Components, Theme } from '@mui/material/styles';
import { colors, shadows, borderRadius, componentSizes } from './tokens';

/**
 * Material-UI component customizations based on Messe AI design tokens
 */
export const createComponents = (theme: Theme): Components<Theme> => ({
  // Button component customization
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.md,
        textTransform: 'none',
        fontWeight: 400,
        letterSpacing: '1%',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
        '&:focus': {
          boxShadow: 'none',
        },
      },
      
      // Size variants
      sizeSmall: {
        height: componentSizes.button.small.height,
        padding: componentSizes.button.small.padding,
        fontSize: componentSizes.button.small.fontSize,
      },
      
      sizeMedium: {
        height: componentSizes.button.medium.height,
        padding: componentSizes.button.medium.padding,
        fontSize: componentSizes.button.medium.fontSize,
      },
      
      sizeLarge: {
        height: componentSizes.button.large.height,
        padding: componentSizes.button.large.padding,
        fontSize: componentSizes.button.large.fontSize,
      },
      
      // Contained variant (Primary)
      contained: {
        backgroundColor: colors.primary[400],
        color: colors.grey.white,
        boxShadow: shadows.button,
        '&:hover': {
          backgroundColor: colors.primary[500],
          boxShadow: shadows.buttonHover,
        },
        '&:focus': {
          backgroundColor: colors.primary[400],
          boxShadow: shadows.buttonFocus,
        },
        '&:active': {
          backgroundColor: colors.primary[600],
          boxShadow: shadows.button,
        },
        '&:disabled': {
          backgroundColor: colors.grey[200],
          color: colors.grey[500],
          boxShadow: 'none',
        },
      },
      
      // Outlined variant (Secondary)
      outlined: {
        borderColor: colors.primary[200],
        color: colors.primary[400],
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: colors.primary[50],
          borderColor: colors.primary[400],
        },
        '&:focus': {
          backgroundColor: 'transparent',
          borderColor: colors.primary[400],
        },
        '&:active': {
          backgroundColor: colors.primary[100],
          borderColor: colors.primary[600],
        },
        '&:disabled': {
          borderColor: colors.grey[300],
          color: colors.grey[500],
          backgroundColor: 'transparent',
        },
      },
      
      // Text variant
      text: {
        color: colors.primary[400],
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: colors.primary[50],
        },
        '&:focus': {
          backgroundColor: 'transparent',
        },
        '&:active': {
          backgroundColor: colors.primary[100],
        },
        '&:disabled': {
          color: colors.grey[500],
          backgroundColor: 'transparent',
        },
      },
    },
    
    variants: [
      // Secondary button variant
      {
        props: { variant: 'contained', color: 'secondary' },
        style: {
          backgroundColor: colors.secondary.main,
          color: colors.grey.white,
          '&:hover': {
            backgroundColor: colors.secondary.dark,
          },
        },
      },
      
      // Mobile button variant
      {
        props: { size: 'small' as any },
        style: {
          height: 'auto',
          padding: '4px 8px',
          fontSize: 12,
          lineHeight: '16px',
          letterSpacing: '4%',
        },
      },
    ],
  },
  
  // Typography component
  MuiTypography: {
    variants: [
      {
        props: { variant: 'captionMobile' as any },
        style: {
          fontFamily: theme.typography.fontFamily,
          fontWeight: 400,
          fontSize: 10,
          lineHeight: '12px',
          letterSpacing: 0,
          color: colors.grey[700],
        },
      },
      {
        props: { variant: 'link' as any },
        style: {
          fontFamily: theme.typography.fontFamily,
          fontWeight: 400,
          fontSize: 16,
          lineHeight: '20px',
          letterSpacing: '2%',
          color: colors.primary[400],
          textDecoration: 'underline',
          cursor: 'pointer',
          '&:hover': {
            color: colors.primary[600],
          },
        },
      },
    ],
  },
  
  // Container component
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
        },
      },
    },
  },
  
  // Paper component
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.md,
        boxShadow: shadows.card,
      },
    },
  },
  
  // Card component
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.md,
        boxShadow: shadows.card,
      },
    },
  },
  
  // Input components
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: borderRadius.md,
          '& fieldset': {
            borderColor: colors.grey[300],
          },
          '&:hover fieldset': {
            borderColor: colors.primary[400],
          },
          '&.Mui-focused fieldset': {
            borderColor: colors.primary[400],
            borderWidth: 2,
          },
        },
      },
    },
  },
  
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.md,
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: colors.grey[300],
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: colors.primary[400],
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: colors.primary[400],
          borderWidth: 2,
        },
      },
    },
  },
  
  // Chip component
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.lg,
        fontWeight: 600,
        fontSize: 32,
        lineHeight: '36px',
        letterSpacing: '0.5%',
        padding: '22px 24px',
        height: 'auto',
      },
      filled: {
        backgroundColor: colors.primary[400],
        color: colors.grey.white,
        border: `2px solid ${colors.primary[400]}`,
      },
      outlined: {
        backgroundColor: 'transparent',
        color: colors.grey[900],
        border: `2px solid ${colors.primary[400]}`,
      },
    },
  },
});
