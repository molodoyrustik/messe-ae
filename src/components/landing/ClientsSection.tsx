'use client';

import React, { useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  styled,
} from '@mui/material';

// Container for the carousel
const CarouselContainer = styled(Box)({
  overflow: 'hidden',
  position: 'relative',
  height: '64px', // Fixed height
  width: '100%',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    width: '100px',
    height: '100%',
    zIndex: 2,
    pointerEvents: 'none',
  },
  '&::before': {
    left: 0,
    background: 'linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))',
  },
  '&::after': {
    right: 0,
    background: 'linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))',
  },
});

// Track that moves continuously with logging - ULTRA LONG ANIMATION
const CarouselTrack = styled(Box)<{ direction?: 'left' | 'right' }>(({ direction = 'left' }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '112px', // Space between logos
  height: '100%',
  width: 'max-content', // Auto width to fit content
  animation: direction === 'left' 
    ? 'scrollLeftUltra 160s linear infinite' // 8 copies * 20s each
    : 'scrollRightUltra 160s linear infinite',
  '&:hover': {
    animationPlayState: 'paused', // Pause on hover
  },
  // Ultra smooth animation with 8 copies
  '@keyframes scrollLeftUltra': {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: 'translateX(-12.5%)', // Move 1/8th of total width (one copy out of 8)
    },
  },
  '@keyframes scrollRightUltra': {
    '0%': {
      transform: 'translateX(-12.5%)', // Start from 1/8th position
    },
    '100%': {
      transform: 'translateX(0)', // Move to start
    },
  },
}));



// Logo item container
const LogoItem = styled(Box)({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '200px', // Ensure consistent spacing
});

const ClientsSection = () => {
  const carousel1Ref = useRef<HTMLDivElement>(null);
  const carousel2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setupLogging = (element: HTMLDivElement, id: string) => {
      const logPosition = () => {
        const style = window.getComputedStyle(element);
        const transform = style.transform;
        const rect = element.getBoundingClientRect();
        console.log(`📍 [${id}] Transform: ${transform}, Left: ${rect.left.toFixed(2)}px, Time: ${new Date().toLocaleTimeString()}.${new Date().getMilliseconds()}`);
      };

      const handleAnimationIteration = () => {
        console.log(`🔄 [${id}] ITERATION - JUMP DETECTED! Time: ${new Date().toLocaleTimeString()}`);
        logPosition();
      };

      element.addEventListener('animationiteration', handleAnimationIteration);
      
      // Log position every 1 second
      const interval = setInterval(logPosition, 1000);
      
      // Initial position
      setTimeout(logPosition, 100);

      return () => {
        element.removeEventListener('animationiteration', handleAnimationIteration);
        clearInterval(interval);
      };
    };

    const cleanup1 = carousel1Ref.current ? setupLogging(carousel1Ref.current, 'Carousel-1') : undefined;
    const cleanup2 = carousel2Ref.current ? setupLogging(carousel2Ref.current, 'Carousel-2') : undefined;

    return () => {
      cleanup1?.();
      cleanup2?.();
    };
  }, []);

  // Real client logos with their actual filenames from the downloaded logos
  const clientLogos = [
    { name: 'Amazon Web Services', filename: 'amazon-web-services.svg', width: 128, height: 64 },
    { name: 'Genesis', filename: 'genesis.svg', width: 242, height: 48 },
    { name: 'Canon', filename: 'canon.svg', width: 228, height: 48 },
    { name: 'Porsche', filename: 'porsche.svg', width: 360, height: 52 },
    { name: 'Hapag Lloyd', filename: 'hapag-lloyd.svg', width: 337, height: 52 },
    { name: 'Infiniti', filename: 'infiniti.svg', width: 360, height: 52 },
    { name: 'Siemens', filename: 'siemens.svg', width: 298, height: 48 },
    { name: 'AO Trauma', filename: 'ao-trauma.svg', width: 115, height: 72 },
    { name: 'Tomra', filename: 'tomra.svg', width: 291, height: 52 },
    { name: 'Anduril', filename: 'anduril.svg', width: 284, height: 52 },
    { name: 'Canadian Solar', filename: 'canadian-solar.svg', width: 168, height: 64 },
    { name: 'Alvo', filename: 'alvo.svg', width: 169, height: 72 },
    { name: 'Diehl', filename: 'diehl.svg', width: 293, height: 48 },
    { name: 'Medela', filename: 'medela.svg', width: 272, height: 52 },
    { name: 'Arjo', filename: 'arjo.svg', width: 223, height: 52 },
    { name: 'Abbott', filename: 'abbott.svg', width: 202, height: 52 },
    { name: 'Soltec', filename: 'soltec.svg', width: 181, height: 64 },
    { name: 'Pattyn', filename: 'pattyn.svg', width: 329, height: 52 },
    { name: 'Mindray', filename: 'mindray.svg', width: 224, height: 52 },
    { name: 'Biosystems', filename: 'biosystems.svg', width: 284, height: 52 },
    { name: 'Hensoldt', filename: 'hensoldt.svg', width: 215, height: 52 },
    { name: 'Brady', filename: 'brady.svg', width: 274, height: 52 },
    { name: 'Mizuho', filename: 'mizuho.svg', width: 227, height: 52 },
    { name: 'OMV', filename: 'omv.svg', width: 226, height: 64 },
    { name: 'Siemens Energy', filename: 'siemens-energy.svg', width: 152, height: 52 },
    { name: 'HT Group', filename: 'ht-group.svg', width: 309, height: 52 },
    { name: 'WABCO', filename: 'wabco.svg', width: 208, height: 64 },
    { name: 'Linde', filename: 'linde.svg', width: 127, height: 64 },
    { name: 'Nook', filename: 'nook.svg', width: 208, height: 64 },
    { name: 'John Deere', filename: 'john-deere.svg', width: 334, height: 64 },
    { name: 'WEIR', filename: 'weir.svg', width: 167, height: 52 },
    { name: 'Halliburton', filename: 'halliburton.svg', width: 360, height: 52 },
    { name: 'Krones', filename: 'krones.svg', width: 232, height: 72 },
    { name: 'Esko', filename: 'esko.svg', width: 238, height: 48 },
    { name: 'KNDS', filename: 'knds.svg', width: 163, height: 48 },
    { name: 'Teleste', filename: 'teleste.svg', width: 332, height: 48 },
    { name: 'Wabtec', filename: 'wabtec.svg', width: 188, height: 64 },
    { name: 'Konica Minolta', filename: 'konica-minolta.svg', width: 360, height: 52 },
    { name: 'Getinge', filename: 'getinge.svg', width: 351, height: 52 },
  ];

  // Create extended arrays with many copies for ultra-smooth looping
  const extendedLogos1 = [
    ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, 
    ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos
  ]; // 8 copies
  const extendedLogos2 = [
    ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos,
    ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos
  ]; // 8 copies

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Title */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            textAlign: 'left',
            width: '100%',
            ml: '20px',
            mb: { xs: 4, md: 6 },
          }}
        >
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontSize: { xs: 24, md: 36 },
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 400,
              lineHeight: 1.11,
              letterSpacing: '-0.02em',
              color: 'grey.800',
              textAlign: 'left',
              width: '100%',
            }}
          >
            <Box component="span" sx={{ color: 'grey.800' }}>
              We build{' '}
            </Box>
            <Box 
              component="span" 
              sx={{ 
                color: 'primary.main',
                fontWeight: 700,
              }}
            >
              partnerships
            </Box>
            <Box component="span" sx={{ color: 'grey.800' }}>
              {' '}that always come back
            </Box>
          </Typography>
        </Box>

        {/* First Carousel - Left to Right */}
        <CarouselContainer>
          <CarouselTrack direction="left" ref={carousel1Ref}>
            {extendedLogos1.map((logo, index) => (
              <LogoItem key={`carousel1-${logo.filename}-${index}`}>
                <Box
                  component="img"
                  src={`/client-logos/${logo.filename}`}
                  alt={logo.name}
                  sx={{
                    width: `${logo.width * 0.75}px`, // Scale down by 25% for better fit
                    height: `${logo.height * 0.75}px`,
                    objectFit: 'contain',
                    filter: 'grayscale(100%)', // Make logos grayscale
                    opacity: 0.7,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      opacity: 1,
                    },
                  }}
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </LogoItem>
            ))}
          </CarouselTrack>
        </CarouselContainer>

        {/* Second Carousel - Right to Left */}
        <Box sx={{ mt: 2 }}> {/* 16px margin top */}
          <CarouselContainer>
            <CarouselTrack direction="right" ref={carousel2Ref}>
              {extendedLogos2.map((logo, index) => (
                <LogoItem key={`carousel2-${logo.filename}-${index}`}>
                  <Box
                    component="img"
                    src={`/client-logos/${logo.filename}`}
                    alt={logo.name}
                    sx={{
                      width: `${logo.width * 0.75}px`, // Scale down by 25% for better fit
                      height: `${logo.height * 0.75}px`,
                      objectFit: 'contain',
                      filter: 'grayscale(100%)', // Make logos grayscale
                      opacity: 0.7,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        filter: 'grayscale(0%)',
                        opacity: 1,
                      },
                    }}
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </LogoItem>
              ))}
            </CarouselTrack>
          </CarouselContainer>
        </Box>
      </Container>
    </Box>
  );
};

export default ClientsSection; 