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
        props: { size: 'small' },
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
        props: { variant: 'captionMobile' },
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
        props: { variant: 'link' },
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
  
  // TextField component (based on Figma design)
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 4, // From Figma
          fontSize: 16,
          lineHeight: '24px',
          letterSpacing: '2%',
          padding: '0 12px',

          // Default state
          '& fieldset': {
            borderColor: colors.grey[300], // #C4C4C4
            borderWidth: 1,
          },

          // Hover state
          '&:hover fieldset': {
            borderColor: colors.grey[500], // #7B7B7B
            borderWidth: 1,
          },

          // Focused state
          '&.Mui-focused fieldset': {
            borderColor: colors.primary[400], // #656CAF
            borderWidth: 2,
          },

          // Error state
          '&.Mui-error fieldset': {
            borderColor: colors.error.main, // #BC3A1F
            borderWidth: 1,
          },

          // Disabled state
          '&.Mui-disabled': {
            '& fieldset': {
              borderColor: colors.grey[300], // #C4C4C4
            },
            backgroundColor: 'transparent',
          },

          // Input content
          '& .MuiOutlinedInput-input': {
            padding: '8px 0',
            color: colors.grey[800], // #262626
            '&::placeholder': {
              color: colors.grey[500], // #7B7B7B
              opacity: 1,
            },
            '&.Mui-disabled': {
              color: colors.grey[400], // #9D9D9D
            },
          },
        },

        // Label styling
        '& .MuiInputLabel-root': {
          fontSize: 16,
          lineHeight: '24px',
          letterSpacing: '2%',
          color: colors.grey[500], // #7B7B7B
          backgroundColor: colors.primary[50], // #E9EAF4
          padding: '0 4px',

          '&.Mui-focused': {
            color: colors.primary[400], // #656CAF
            fontSize: 12,
            lineHeight: '16px',
            letterSpacing: '4%',
          },

          '&.Mui-error': {
            color: colors.error.main, // #BC3A1F
          },

          '&.Mui-disabled': {
            color: colors.grey[400], // #9D9D9D
          },

          // Shrunk label (when has value)
          '&.MuiInputLabel-shrink': {
            fontSize: 12,
            lineHeight: '16px',
            letterSpacing: '4%',
            transform: 'translate(14px, -9px) scale(1)',
          },
        },

        // Mobile styles
        [theme.breakpoints.down('sm')]: {
          '& .MuiOutlinedInput-root': {
            fontSize: 14,
            lineHeight: '18px',
          },
          '& .MuiInputLabel-root': {
            fontSize: 14,
            '&.MuiInputLabel-shrink': {
              fontSize: 10,
              lineHeight: '12px',
            },
          },
        },
      },
    },
  },
  
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 4, // From Figma
        fontSize: 16,
        lineHeight: '24px',
        letterSpacing: '2%',

        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: colors.grey[300], // #C4C4C4
          borderWidth: 1,
        },

        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: colors.grey[500], // #7B7B7B
          borderWidth: 1,
        },

        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: colors.primary[400], // #656CAF
          borderWidth: 2,
        },

        '&.Mui-error .MuiOutlinedInput-notchedOutline': {
          borderColor: colors.error.main, // #BC3A1F
          borderWidth: 1,
        },

        '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
          borderColor: colors.grey[300], // #C4C4C4
        },

        // Input text styling
        '& .MuiOutlinedInput-input': {
          padding: '8px 0',
          color: colors.grey[800], // #262626
          '&::placeholder': {
            color: colors.grey[500], // #7B7B7B
            opacity: 1,
          },
          '&.Mui-disabled': {
            color: colors.grey[400], // #9D9D9D
          },
        },

        // Mobile styles
        [theme.breakpoints.down('sm')]: {
          fontSize: 14,
          lineHeight: '18px',
        },
      },
    },
  },
  
  // Chip component (based on Figma design)
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.md, // 8px
        fontFamily: theme.typography.fontFamily,
        fontWeight: 400,
        letterSpacing: '1%',
        height: 'auto',
        transition: 'none', // Disable transitions to prevent visual delays
        '&:focus': {
          outline: 'none',
        },
        '&.MuiChip-sizeMedium': {
          fontSize: 24,
          lineHeight: '28px',
          padding: '8px 12px',
        },
        '&.MuiChip-sizeSmall': {
          fontSize: 16,
          lineHeight: '24px',
          padding: '4px 8px',
        },
      },

      // Filled variant (selected state)
      filled: {
        backgroundColor: colors.primary[400], // #656CAF
        color: colors.grey.white,
        border: 'none',
        '&:hover': {
          backgroundColor: colors.primary[500], // #4C53A2
        },
        '&:focus': {
          backgroundColor: colors.primary[400], // Keep same as default to prevent visual change
          outline: 'none',
        },
        '&.Mui-disabled': {
          backgroundColor: colors.primary[200], // #A2A9D0
          color: colors.grey.white,
        },
      },

      // Outlined variant (unselected state)
      outlined: {
        backgroundColor: colors.primary[50], // #E9EAF4
        color: colors.primary[400], // #656CAF
        border: `1px solid ${colors.primary[50]}`,
        '&:hover': {
          backgroundColor: colors.primary[200], // #A2A9D0
          borderColor: colors.primary[200],
        },
        '&:focus': {
          backgroundColor: colors.primary[50], // Keep same as default
          borderColor: colors.primary[50], // Keep same as default
          outline: 'none',
        },
        '&.Mui-disabled': {
          backgroundColor: colors.primary[50],
          color: colors.primary[200],
          borderColor: colors.primary[50],
        },
      },
    },

    variants: [
      // Medium size variant
      {
        props: { size: 'medium' },
        style: {
          fontSize: 24,
          lineHeight: '28px',
          padding: '8px 12px',
          letterSpacing: '1%',
        },
      },

      // Small size variant
      {
        props: { size: 'small' },
        style: {
          fontSize: 16,
          lineHeight: '24px',
          padding: '4px 8px',
          letterSpacing: '2%',
        },
      },
    ],
  },

  // Menu components (based on Tailwind CSS reference)
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontFamily: theme.typography.fontFamily,
        fontWeight: 700, // font-bold
        fontSize: 24, // text-2xl
        lineHeight: '28px', // leading-7
        letterSpacing: '-0.025em', // tracking-tight (Tailwind CSS value)
        color: colors.primary[500], // #4C53A2
        padding: '4px 0', // py-1
        minHeight: 32, // h-8
        position: 'relative',

        // Default state - no underline
        '&:hover': {
          backgroundColor: 'transparent',
        },

        // Default state - hidden underline
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 26, // top-[26px]
          width: 1, // w-px (1px)
          height: 3, // h-[3px]
          backgroundColor: colors.primary[100], // bg-Primary-purple-100 (#C7CAE3)
          opacity: 0, // opacity-0 (hidden by default)
          transition: 'opacity 0.2s ease',
        },

        // Selected state
        '&.Mui-selected': {
          backgroundColor: 'transparent',
          '&::after': {
            opacity: 1, // Show underline
          },
        },

        // Hover state
        '&:hover::after': {
          opacity: 1, // Show underline on hover
        },

        // Mobile styles (Small size)
        [theme.breakpoints.down('sm')]: {
          fontSize: 16,
          lineHeight: '24px',
          letterSpacing: '-0.025em', // Same tracking-tight
          minHeight: 'auto',
          padding: 0,

          '&::after': {
            top: 19, // Adjusted for small size
            width: 1, // w-px (1px)
            height: 2, // Adjusted height for small
          },
        },
      },
    },
  },

  // Menu list component
  MuiMenuList: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },

  // Menu component
  MuiMenu: {
    styleOverrides: {
      paper: {
        borderRadius: borderRadius.md,
        boxShadow: shadows.card,
        border: `1px solid ${colors.grey[200]}`,
      },
    },
  },
});
