'use client';

import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import {
  Facebook,
  Instagram,
  LinkedIn,
  WhatsApp,
  Email,
} from '@mui/icons-material';
import { useState } from 'react';

// Custom Menu Item component with proper states
const CustomMenuItem = ({ 
  children, 
  selected = false,
  size = 'medium' 
}: { 
  children: React.ReactNode;
  selected?: boolean;
  size?: 'medium' | 'small';
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        height: size === 'medium' ? 32 : 'auto',
        py: size === 'medium' ? 0.5 : 0,
        position: 'relative',
        display: size === 'medium' ? 'flex' : 'inline-flex',
        flexDirection: size === 'medium' ? 'row' : 'column',
        justifyContent: size === 'medium' ? 'flex-start' : 'center',
        alignItems: size === 'medium' ? 'center' : 'flex-start',
        gap: size === 'medium' ? 1.25 : 1.25,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
    >
      <Typography
        sx={{
                  fontSize: size === 'medium' ? 24 : 16,
        fontWeight: 700,
        fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
          lineHeight: size === 'medium' ? '28px' : '24px',
          letterSpacing: size === 'medium' ? '0.01em' : '0.02em',
          color: '#4C53A2', // Direct color from Figma
          transition: 'color 0.2s ease',
          
          '&:hover': {
            color: '#656CAF',
          },
        }}
      >
        {children}
      </Typography>
      
      {/* Underline indicator - exactly like Tailwind */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: 0, // Changed from top to bottom
          width: 36, // w-9 = 36px
          height: 3, // h-[3px] = 3px  
          backgroundColor: '#C7CAE3', // bg-Primary-purple-100
          opacity: selected || isHovered ? 1 : 0,
          transition: 'all 0.3s ease',
        }}
      />
    </Box>
  );
};

// Social Icons Component
const SocialIcons = () => {
  const iconStyle = {
    color: '#424242', // Direct grey.800 color
    p: 0,
    width: 24,
    height: 24,
    '&:hover': {
      color: '#4C53A2', // Direct primary color
      transform: 'scale(1.1)',
    },
    transition: 'all 0.2s ease',
  };

  return (
    <Stack direction="row" spacing={1.5} alignItems="center">
      <IconButton size="small" sx={iconStyle}>
        <Instagram sx={{ fontSize: 20 }} />
      </IconButton>
      <IconButton size="small" sx={iconStyle}>
        <Facebook sx={{ fontSize: 20 }} />
      </IconButton>
      <IconButton size="small" sx={iconStyle}>
        <LinkedIn sx={{ fontSize: 20 }} />
      </IconButton>
      <IconButton size="small" sx={iconStyle}>
        <WhatsApp sx={{ fontSize: 20 }} />
      </IconButton>
      <IconButton size="small" sx={iconStyle}>
        <Email sx={{ fontSize: 20 }} />
      </IconButton>
    </Stack>
  );
};

// Top Info Bar Component
const TopInfoBar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 36,
        backgroundColor: '#E9EAF4', // Direct color from Figma
        overflow: 'hidden',
        display: { xs: 'none', md: 'block' }, // Hide on mobile
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            width: '90rem', // 1440px
            padding: '0.375rem 24.25rem', // 6px 388px
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            mx: 'auto',
          }}
        >
          <Box
            sx={{
              width: { md: '100%', lg: 664 },
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: { xs: 2, md: 0 },
            }}
          >
            {/* Company Info */}
            <Typography
              sx={{
                            fontSize: 12,
            fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
            fontWeight: 400,
                lineHeight: '16px',
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
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <SocialIcons />
            </Box>

            {/* Phone Number */}
            <Typography
              sx={{
                            fontSize: 12,
            fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
            fontWeight: 700,
                lineHeight: '16px',
                letterSpacing: '0.04em',
                color: 'grey.900',
              }}
            >
              +971 4 548 5887
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// Main Header Component
const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const menuItems = ['Projects', 'About Us', 'Articles', 'Manifestos'];
  
  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: { xs: 80, md: 128 }, // Reduced height on mobile
          position: 'relative',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          overflow: 'hidden',
        }}
      >
        {/* Top Info Bar - Desktop only */}
        <TopInfoBar />

        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              width: '90rem', // 1440px
              padding: '0.375rem 24.25rem', // 6px 388px
              justifyContent: 'center',
              alignItems: 'center',
              height: { xs: 80, md: 92 }, // Height excluding top bar
              position: 'relative',
              mx: 'auto',
            }}
          >
            {/* Logo Section */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 16, md: 40 },
                top: '50%',
                transform: 'translateY(-50%)',
                width: '7.625rem', // 122px
                height: '5.25rem', // 84px
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              {/* Logo Image Container */}
              <Box
                sx={{
                  width: '7.625rem', // 122px
                  height: '3.75rem', // 60px
                  flexShrink: 0,
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/messe-logo.png"
                  alt="Messe.ae"
                  width={244} // 122px * 2 для компенсации внутренних отступов
                  height={120} // 60px * 2 для компенсации внутренних отступов
                  style={{
                    position: 'absolute',
                    left: -68,
                    top: -34,
                    objectFit: 'contain',
                  }}
                  priority
                />
              </Box>
              
              {/* Company Tagline - Desktop only */}
              <Box
                sx={{
                  width: '7.625rem', // 122px
                  position: 'absolute',
                  left: 0,
                  top: 72, // top-[72px] from Tailwind
                  justifyContent: 'flex-start',
                  display: { xs: 'none', md: 'flex' },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
                    fontSize: '0.5rem', // 8px
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '0.75rem', // 12px - 150%
                    color: '#656CAF', // Primary-purple-400
                  }}
                  component="span"
                >
                  M
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
                    fontSize: '0.5rem', // 8px
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '0.75rem', // 12px
                    color: '#000', // Basic-grey-900
                  }}
                  component="span"
                >
                  arketing and{' '}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
                    fontSize: '0.5rem', // 8px
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '0.75rem', // 12px
                    color: '#656CAF',
                  }}
                  component="span"
                >
                  E
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
                    fontSize: '0.5rem', // 8px
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '0.75rem', // 12px
                    color: '#000',
                  }}
                  component="span"
                >
                  xhibition{' '}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
                    fontSize: '0.5rem', // 8px
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '0.75rem', // 12px
                    color: '#656CAF',
                  }}
                  component="span"
                >
                  S
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
                    fontSize: '0.5rem', // 8px
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '0.75rem', // 12px
                    color: '#000',
                  }}
                  component="span"
                >
                  ervices
                </Typography>
              </Box>
            </Box>

            {/* Navigation Menu - Center on desktop, hidden on mobile */}
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: { md: 664 },
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {menuItems.map((item, index) => (
                <CustomMenuItem 
                  key={item} 
                  size="medium"
                  selected={index === 0} // First item selected for demo
                >
                  {item}
                </CustomMenuItem>
              ))}
            </Box>

            {/* CTA Button */}
            <Box
              sx={{
                position: 'absolute',
                right: { xs: 16, md: 40 },
                top: '50%',
                transform: 'translateY(-50%)',
                width: { xs: 140, md: 200 },
                height: 36,
                backgroundColor: '#656CAF', // Direct color from Figma
                borderRadius: 1,
                boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.20), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                
                '&:hover': {
                  backgroundColor: '#4C53A2', // Direct primary.500 color
                  transform: 'translateY(-50%) scale(1.02)',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 14, md: 16 },
                  fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
                  fontWeight: 400,
                  lineHeight: '24px',
                  letterSpacing: '0.02em',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                {isMobile ? 'Discuss' : 'Discuss your project'}
              </Typography>
            </Box>

            {/* Mobile Menu - Show social icons on mobile */}
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <SocialIcons />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Header; 