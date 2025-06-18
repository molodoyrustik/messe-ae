'use client';

import {
  Box,
  Stack,
  Typography,
  IconButton,
} from '@mui/material';
import {
  Facebook,
  Instagram,
  LinkedIn,
  WhatsApp,
  Email,
} from '@mui/icons-material';

// Custom Menu Item component exactly as in Figma
const CustomMenuItem = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      height: 32,
      py: 0.5,
      position: 'relative',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: 1.25,
      cursor: 'pointer',
    }}
  >
    <Typography
      sx={{
        fontSize: 24,
        fontWeight: 700,
        fontFamily: 'Roboto',
        lineHeight: '28px',
        letterSpacing: 'tight',
        color: 'primary.400',
      }}
    >
      {children}
    </Typography>
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        top: 26,
        width: 1,
        height: 3,
        opacity: 0,
        backgroundColor: 'primary.100',
      }}
    />
  </Box>
);

// Social Icons Component
const SocialIcons = () => {
  return (
    <Stack direction="row" spacing={1.5} alignItems="center">
      <IconButton 
        size="small" 
        sx={{ 
          color: 'grey.800', 
          p: 0,
          width: 24,
          height: 24,
        }}
      >
        <Instagram sx={{ fontSize: 20 }} />
      </IconButton>
      <IconButton 
        size="small" 
        sx={{ 
          color: 'grey.800', 
          p: 0,
          width: 24,
          height: 24,
        }}
      >
        <Facebook sx={{ fontSize: 20 }} />
      </IconButton>
      <IconButton 
        size="small" 
        sx={{ 
          color: 'grey.800', 
          p: 0,
          width: 24,
          height: 24,
        }}
      >
        <LinkedIn sx={{ fontSize: 20 }} />
      </IconButton>
      <IconButton 
        size="small" 
        sx={{ 
          color: 'grey.800', 
          p: 0,
          width: 24,
          height: 24,
        }}
      >
        <WhatsApp sx={{ fontSize: 20 }} />
      </IconButton>
      <IconButton 
        size="small" 
        sx={{ 
          color: 'grey.800', 
          p: 0,
          width: 24,
          height: 24,
        }}
      >
        <Email sx={{ fontSize: 20 }} />
      </IconButton>
    </Stack>
  );
};

// Top Info Bar Component (36px height)
const TopInfoBar = () => {
  return (
    <Box
      sx={{
        width: 1440,
        height: 36,
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'primary.50',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: 664,
          position: 'absolute',
          left: 388, // (1440 - 664) / 2
          top: 6,
          display: 'inline-flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Company Info */}
        <Typography
          sx={{
            fontSize: 12,
            fontFamily: 'Roboto',
            fontWeight: 400,
            lineHeight: 'none',
            letterSpacing: '0.04em',
            color: 'grey.900',
          }}
        >
          the part of{' '}
          <Box component="span" sx={{ fontWeight: 700 }}>
            Expoglobal Group
          </Box>
        </Typography>

        {/* Social Icons */}
        <SocialIcons />

        {/* Phone Number */}
        <Typography
          sx={{
            fontSize: 12,
            fontFamily: 'Roboto',
            fontWeight: 700,
            lineHeight: 'none',
            letterSpacing: '0.04em',
            color: 'grey.900',
          }}
        >
          +971 4 548 5887
        </Typography>
      </Box>
    </Box>
  );
};

// Main Header Component
const Header = () => {
  const menuItems = ['Projects', 'About Us', 'Articles', 'Manifestos'];
  
  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: 1440,
          height: 128,
          position: 'relative',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          overflow: 'hidden',
        }}
      >
        {/* Top Info Bar */}
        <TopInfoBar />

        {/* Main Navigation Area */}
        <Box
          sx={{
            width: 664,
            position: 'absolute',
            left: 388, // (1440 - 664) / 2
            top: 64,
            display: 'inline-flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {menuItems.map((item) => (
            <CustomMenuItem key={item}>{item}</CustomMenuItem>
          ))}
        </Box>

        {/* Logo Section */}
        <Box
          sx={{
            width: 128,
            height: 56,
            position: 'absolute',
            left: 40,
            top: 38,
            overflow: 'hidden',
          }}
        >
          <Box
            component="img"
            src="/messe-logo.png"
            alt="Messe.ae"
            sx={{
              width: 128,
              height: 56,
              position: 'absolute',
              left: 0,
              top: 0,
              objectFit: 'contain',
            }}
          />
        </Box>

        {/* Company Tagline */}
        <Box
          sx={{
            width: 128,
            position: 'absolute',
            left: 40,
            top: 110,
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <Typography
            sx={{
              fontSize: 8,
              fontFamily: 'Roboto',
              lineHeight: '12px',
              color: 'grey.900',
            }}
          >
            <Box component="span" sx={{ fontWeight: 700, color: 'primary.400' }}>
              M
            </Box>
            <Box component="span" sx={{ fontWeight: 500 }}>
              arketing and{' '}
            </Box>
            <Box component="span" sx={{ fontWeight: 700, color: 'primary.400' }}>
              E
            </Box>
            <Box component="span" sx={{ fontWeight: 500 }}>
              xhibition{' '}
            </Box>
            <Box component="span" sx={{ fontWeight: 700, color: 'primary.400' }}>
              S
            </Box>
            <Box component="span" sx={{ fontWeight: 500 }}>
              ervices
            </Box>
          </Typography>
        </Box>

        {/* CTA Button */}
        <Box
          sx={{
            width: 192, // w-48 = 12rem = 192px
            height: 36, // h-9 = 2.25rem = 36px
            position: 'absolute',
            left: 1200,
            top: 62,
            backgroundColor: 'primary.400',
            borderRadius: 1,
            boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.20), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
            display: 'inline-flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            cursor: 'pointer',
            
            '&:hover': {
              backgroundColor: 'primary.500',
            },
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 0.75,
            }}
          >
            <Typography
              sx={{
                fontSize: 16,
                fontFamily: 'Roboto',
                fontWeight: 400,
                lineHeight: 'normal',
                letterSpacing: 'tight',
                color: 'white',
                textAlign: 'right',
              }}
            >
              Discuss your project
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header; 