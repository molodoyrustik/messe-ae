'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';

type ParallaxSectionProps = {
  className?: string;
};

export default function ParallaxSection({ className = '' }: ParallaxSectionProps) {

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
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: {
            xs: `
              linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 82.25%),
              url('/parallax-bg-mobile.webp')
            `,
            md: `
              linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 82.25%),
              url('/parallax-bg-1920.webp')
            `
          },
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed', // Fixed attachment for parallax effect on all devices
        }}
      />

      {/* Content */}
      <Container 
        maxWidth="xl" 
        sx={{ 
          px: { xs: '1rem', md: '2.5rem' },
          height: '100%',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: '3.75rem',
            left: 0,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2rem', md: '3.375rem' },
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: { xs: '2.25rem', md: '3.75rem' },
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