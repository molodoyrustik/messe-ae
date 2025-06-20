'use client';

import React, { useEffect, useRef } from 'react';
import { Box, Typography, useTheme, useMediaQuery, Container } from '@mui/material';

type ParallaxSectionProps = {
  className?: string;
};

export default function ParallaxSection({ className = '' }: ParallaxSectionProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrolled = window.pageYOffset;
      const section = parallaxRef.current;
      const rect = section.getBoundingClientRect();
      const isVisible = rect.bottom >= 0 && rect.top <= window.innerHeight;
      
      if (isVisible) {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        section.style.transform = `translateY(${yPos}px)`;
      }
    };

    // Only add parallax effect on desktop
    if (!isMobile) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile]);

  return (
    <Box
      component="section"
      className={className}
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '25rem', md: '37.5rem' },
        overflow: 'hidden',
        mt: { xs: 4, md: 6 },
        mb: { xs: 4, md: 6 },
      }}
    >
      {/* Background Image with Parallax Effect */}
      <Box
        ref={parallaxRef}
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: `
            linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 82.25%),
            url('/parallax-bg.png')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          // Remove fixed attachment for better mobile performance
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Content */}
      <Container 
        maxWidth="xl" 
        sx={{ 
          px: { xs: '1rem', md: '2.5rem' },
          height: '100%',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: '3.75rem', // 60px
            left: 0,
            zIndex: 10,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: '3.375rem', // 54px
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '3.75rem', // 60px
              color: 'rgba(255, 255, 255, 0.80)',
            }}
          >
            Why messe.ae only?
          </Typography>
        </Box>
      </Container>

      {/* Overlay for better text readability */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 5,
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
} 