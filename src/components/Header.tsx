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
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Facebook,
  Instagram,
  LinkedIn,
  WhatsApp,
  Email,
} from '@mui/icons-material';
import { useState, useEffect } from 'react';

// Custom Menu Item component with proper states
const CustomMenuItem = ({
  children,
  selected = false,
  size = 'medium',
  href = '#'
}: {
  children: React.ReactNode;
  selected?: boolean;
  size?: 'medium' | 'small';
  href?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
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

        {/* Underline indicator - animated from left to right */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: 36, // w-9 = 36px
            height: 3, // h-[3px] = 3px
            backgroundColor: '#C7CAE3', // bg-Primary-purple-100
            transform: selected || isHovered ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left center',
            transition: 'transform 0.3s ease',
          }}
        />
      </Box>
    </Link>
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
        display: { xs: 'none', md: 'flex' }, // Hide on mobile
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: '1rem', md: '2.5rem' }, height: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <Box
            sx={{
              width: { md: '100%', lg: 664 },
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: { xs: 2, md: 0 },
              height: '100%',
            }}
          >
            {/* Company Info */}
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 400,
                lineHeight: 1,
                letterSpacing: '0.04em',
                color: 'grey.900',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              the part of{' '}
              <Box component="span" sx={{ fontWeight: 700, ml: 0.5 }}>
                Expoglobal Group
              </Box>
            </Typography>

            {/* Social Icons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', height: '100%' }}>
              <SocialIcons />
            </Box>

            {/* Phone Number */}
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: '0.04em',
                color: 'grey.900',
                display: 'flex',
                alignItems: 'center',
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
  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  const menuItems = [
    { label: 'Projects', href: '/projects' },
    { label: 'About Us', href: '/about' },
    { label: 'Articles', href: '/articles' },
    { label: 'Manifestos', href: '/manifestos' },
  ];
  
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
          height: { xs: 56, md: 128 }, // Mobile header height: 56px
          position: 'relative',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          overflow: 'hidden',
        }}
      >
        {/* Top Info Bar - Desktop only */}
        <TopInfoBar />

        <Container maxWidth="xl" sx={{ px: { xs: '1rem', md: '2.5rem' } }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: { xs: 56, md: 92 }, // Mobile: 56px, Desktop: 92px
              position: 'relative',
              width: '100%',
            }}
          >
            {/* Logo Section */}
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: { xs: '61px', md: '7.625rem' }, // Mobile: 61px, Desktop: 122px
                  height: { xs: '30px', md: '5.25rem' }, // Mobile: 30px, Desktop: 84px
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  cursor: 'pointer',
                }}
              >
              {/* Logo Image Container */}
              <Box
                sx={{
                  width: { xs: '61px', md: '7.625rem' }, // Mobile: 61px, Desktop: 122px
                  height: { xs: '30px', md: '3.75rem' }, // Mobile: 30px, Desktop: 60px
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
                    color: 'transparent',
                    position: 'absolute',
                    left: isMobile ? -93 : -60,
                    top: isMobile ? -47 : -34,
                    objectFit: 'contain',
                    transform: isMobile ? 'scale(0.5)' : 'scale(1.15)',
                  }}
                  priority
                />
              </Box>
              
              {/* Company Tagline - Mobile version */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: 0, md: 0 },
                  top: { xs: 28, md: 72 }, // Mobile: 28px, Desktop: 72px
                  justifyContent: 'flex-start',
                  display: { xs: 'flex', md: 'none' },
                  flexWrap: 'wrap',
                  width: { xs: '80px', md: '7.625rem' },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '4px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '6px', // 150%
                    color: '#656CAF',
                  }}
                  component="span"
                >
                  M
                </Typography>
                <Typography
                  sx={{
                    fontSize: '4px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '6px',
                    color: '#000',
                  }}
                  component="span"
                >
                  arketing and{' '}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '4px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '6px',
                    color: '#656CAF',
                  }}
                  component="span"
                >
                  E
                </Typography>
                <Typography
                  sx={{
                    fontSize: '4px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '6px',
                    color: '#000',
                  }}
                  component="span"
                >
                  xhibition{' '}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '4px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '6px',
                    color: '#656CAF',
                  }}
                  component="span"
                >
                  S
                </Typography>
                <Typography
                  sx={{
                    fontSize: '4px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '6px',
                    color: '#000',
                  }}
                  component="span"
                >
                  ervices
                </Typography>
              </Box>
              
              {/* Company Tagline - Desktop version */}
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
                    fontSize: '0.5rem', // 8px
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '0.75rem', // 12px
                    color: '#000', // Basic-grey-900
                  }}
                  component="span"
                >
                  arketing&nbsp;and&nbsp;
                </Typography>
                <Typography
                  sx={{
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
                    fontSize: '0.5rem', // 8px
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '0.75rem', // 12px
                    color: '#000',
                  }}
                  component="span"
                >
                  xhibition&nbsp;
                </Typography>
                <Typography
                  sx={{
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
            </Link>
            
            {/* "the part of Expoglobal Group" - Mobile only */}
            <Typography
              sx={{
                position: 'absolute',
                left: '105px',
                top: '19px',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '16px',
                letterSpacing: '0.04em',
                color: '#000',
                display: { xs: 'block', md: 'none' },
              }}
            >
              the part of{' '}
              <Box component="span" sx={{ fontWeight: 700 }}>
                Expoglobal Group
              </Box>
            </Typography>

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
              {menuItems.map((item) => (
                <CustomMenuItem
                  key={item.href}
                  size="medium"
                  href={item.href}
                  selected={pathname === item.href}
                >
                  {item.label}
                </CustomMenuItem>
              ))}
            </Box>

            {/* CTA Button - Desktop only */}
            <Box
              sx={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 200,
                height: 36,
                backgroundColor: '#656CAF',
                borderRadius: 1,
                boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.20), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                
                '&:hover': {
                  backgroundColor: '#4C53A2',
                  transform: 'translateY(-50%) scale(1.02)',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: '24px',
                  letterSpacing: '0.02em',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                Discuss your project
              </Typography>
            </Box>
            
            {/* Hamburger Menu - Mobile only */}
            <IconButton
              sx={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 48,
                height: 48,
                p: 0,
                display: { xs: 'flex', md: 'none' },
                alignItems: 'center',
                justifyContent: 'center',
                color: '#262626',
              }}
            >
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="36" y="12" width="12" height="5" rx="1" fill="#262626"/>
                <rect x="22" y="22" width="26" height="5" rx="1" fill="#262626"/>
                <rect x="28" y="32" width="20" height="5" rx="1" fill="#262626"/>
              </svg>
            </IconButton>

          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Header; 