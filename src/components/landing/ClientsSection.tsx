'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  styled,
} from '@mui/material';

// Container for the carousel
const CarouselContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$isMobile',
})<{ $isMobile?: boolean }>(({ $isMobile = false }) => ({
  overflow: 'hidden',
  position: 'relative',
  height: $isMobile ? '32px' : '64px', // Mobile: 32px for better quality, Desktop: 64px
  width: '100%',
  isolation: 'isolate',
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  transform: 'translateZ(0)',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    width: $isMobile ? '1rem' : '100px', // Mobile uses 1rem (equal to screen padding)
    height: '100%',
    zIndex: 2,
    pointerEvents: 'none',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
  },
  '&::before': {
    left: 0,
    background: 'linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))',
  },
  '&::after': {
    right: 0,
    background: 'linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))',
  },
}));

// Track that moves continuously
const CarouselTrack = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$isMobile' && prop !== 'direction' && prop !== 'duration',
})<{ direction?: 'left' | 'right'; duration?: number; $isMobile?: boolean }>(
  ({ direction = 'left', duration = 120, $isMobile = false }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: $isMobile ? '2rem' : '7.5rem', // Mobile: 2rem, Desktop: 7.5rem
    height: '100%',
    width: 'max-content',
    animation: direction === 'left' 
      ? `scrollLeft ${duration}s linear infinite`
      : `scrollRight ${duration}s linear infinite`,
    willChange: 'transform',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    '&:hover': {
      animationPlayState: 'paused',
    },
    '@keyframes scrollLeft': {
      '0%': {
        transform: 'translateX(0)',
      },
      '100%': {
        transform: 'translateX(-50%)', // Move half the width (duplicate content)
      },
    },
    '@keyframes scrollRight': {
      '0%': {
        transform: 'translateX(-50%)',
      },
      '100%': {
        transform: 'translateX(0)',
      },
    },
  })
);



// Logo item container
const LogoItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$isMobile',
})<{ $isMobile?: boolean }>(({ $isMobile = false }) => ({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: $isMobile ? '32px' : '64px', // Increased mobile height for better quality
}));

const ClientsSection = () => {
  // Based on Figma design - Line 1 (Customer_1_web) - 40 logos
  const desktopLine1 = [
    { name: 'Amazon Web Services', filename: 'amazon-web-services.png' },
    { name: 'Genesis', filename: 'genesis.png' },
    { name: 'Canon', filename: 'canon.png' },
    { name: 'Porsche', filename: 'porsche.png' },
    { name: 'Hapag Lloyd', filename: 'hapag-lloyd.png' },
    { name: 'Infiniti', filename: 'infiniti.png' },
    { name: 'Siemens', filename: 'siemens.png' },
    { name: 'AO Trauma', filename: 'ao-trauma.png' },
    { name: 'Tomra', filename: 'tomra.png' },
    { name: 'Anduril', filename: 'anduril.png' },
    { name: 'REC Solar', filename: 'rec-solar.png' },
    { name: 'Alvo', filename: 'alvo.png' },
    { name: 'Diehl', filename: 'diehl.png' },
    { name: 'Medela', filename: 'medela.png' },
    { name: 'Arjo', filename: 'arjo.png' },
    { name: 'Abbott', filename: 'abbott.png' },
    { name: 'Soltec', filename: 'soltec.png' },
    { name: 'Pattyn', filename: 'pattyn.png' },
    { name: 'Mindray', filename: 'mindray.png' },
    { name: 'Biosystems', filename: 'biosystems.png' },
    { name: 'Hensoldt', filename: 'hensoldt.png' },
    { name: 'Brady', filename: 'brady.png' },
    { name: 'Mizuho', filename: 'mizuho.png' },
    { name: 'OMV', filename: 'omv.png' },
    { name: 'Siemens Energy', filename: 'siemens-energy.png' },
    { name: 'HT Group', filename: 'ht-group.png' },
    { name: 'WABCO', filename: 'wabco.png' },
    { name: 'Linde', filename: 'linde.png' },
    { name: 'Nook', filename: 'nook.png' },
    { name: 'John Deere', filename: 'john-deere.png' },
    { name: 'WEIR', filename: 'weir.png' },
    { name: 'Halliburton', filename: 'halliburton.png' },
    { name: 'Krones', filename: 'krones.png' },
    { name: 'Esko', filename: 'esko.png' },
    { name: 'KNDS', filename: 'knds.png' },
    { name: 'Teleste', filename: 'teleste.png' },
    { name: 'Exxon Mobil', filename: 'exxon-mobil.png' },
    { name: 'Wabtec', filename: 'wabtec.png' },
    { name: 'Konica Minolta', filename: 'konica-minolta.png' },
    { name: 'Getinge', filename: 'getinge.png' },
  ];

  // Based on Figma design - Line 2 (Customer_2_web) - 40 logos  
  const desktopLine2 = [
    { name: 'Sudpack', filename: 'sudpack.png' },
    { name: 'Diamond Aircraft', filename: 'diamond-aircraft.png' },
    { name: 'Zimmer', filename: 'zimmer.png' },
    { name: 'Sessa', filename: 'sessa.png' },
    { name: 'THK', filename: 'thk.png' },
    { name: 'Sanlorenzo', filename: 'sanlorenzo.png' },
    { name: 'Damen', filename: 'damen.png' },
    { name: 'Smiths Detection', filename: 'smiths-detection.png' },
    { name: 'Rational', filename: 'rational.png' },
    { name: 'Admartime', filename: 'admartime.png' },
    { name: 'Aramco', filename: 'aramco.png' },
    { name: 'Rowe', filename: 'rowe.png' },
    { name: 'Lyondellbasell', filename: 'lyondellbasell.png' },
    { name: 'Jeppesen', filename: 'jeppesen.png' },
    { name: 'Tosoh', filename: 'tosoh.png' },
    { name: 'Ansell', filename: 'ansell.png' },
    { name: 'Wolf Oil', filename: 'wolf-oil.png' },
    { name: 'Canadian Solar', filename: 'canadian-solar.png' },
    { name: 'Drager', filename: 'drager.png' },
    { name: 'Welltec', filename: 'welltec.png' },
    { name: 'Schneider Electric', filename: 'schneider-electric.png' },
    { name: 'Linet', filename: 'linet.png' },
    { name: 'Tikkurila', filename: 'tikkurila.png' },
    { name: 'Penumbra', filename: 'penumbra.png' },
    { name: 'Simonswerk', filename: 'simonswerk.png' },
    { name: 'Envision', filename: 'envision.png' },
    { name: 'Alstom', filename: 'alstom.png' },
    { name: 'Siemens Healthineers', filename: 'siemens-healthineers.png' },
    { name: 'Smart', filename: 'smart.png' },
    { name: 'Nobel Biocare', filename: 'nobel-biocare.png' },
    { name: 'Flonq', filename: 'flonq.png' },
    { name: 'ATI', filename: 'ati.png' },
    { name: 'Jaguar', filename: 'jaguar.png' },
    { name: 'Kaspersky', filename: 'kaspersky.png' },
    { name: 'Nissan', filename: 'nissan.png' },
    { name: 'Red Hat', filename: 'red-hat.png' },
    { name: 'Caterpillar', filename: 'caterpillar.png' },
    { name: 'Samsung Medison', filename: 'samsung-medison.png' },
    { name: 'Visa', filename: 'visa.png' },
  ];

  // Mobile version - 3 lines as per Figma design
  const mobileLine1 = [
    { name: 'Amazon Web Services', filename: 'amazon-web-services.png' },
    { name: 'Genesis', filename: 'genesis.png' },
    { name: 'Canon', filename: 'canon.png' },
    { name: 'Porsche', filename: 'porsche.png' },
    { name: 'Hapag Lloyd', filename: 'hapag-lloyd.png' },
    { name: 'Infiniti', filename: 'infiniti.png' },
    { name: 'Siemens', filename: 'siemens.png' },
    { name: 'AO Trauma', filename: 'ao-trauma.png' },
    { name: 'Tomra', filename: 'tomra.png' },
    { name: 'Anduril', filename: 'anduril.png' },
    { name: 'REC Solar', filename: 'rec-solar.png' },
    { name: 'Alvo', filename: 'alvo.png' },
    { name: 'Diehl', filename: 'diehl.png' },
    { name: 'Medela', filename: 'medela.png' },
    { name: 'Arjo', filename: 'arjo.png' },
    { name: 'Abbott', filename: 'abbott.png' },
    { name: 'Soltec', filename: 'soltec.png' },
    { name: 'Pattyn', filename: 'pattyn.png' },
    { name: 'Mindray', filename: 'mindray.png' },
    { name: 'Biosystems', filename: 'biosystems.png' },
    { name: 'Hensoldt', filename: 'hensoldt.png' },
    { name: 'Brady', filename: 'brady.png' },
    { name: 'Mizuho', filename: 'mizuho.png' },
    { name: 'OMV', filename: 'omv.png' },
    { name: 'Siemens Energy', filename: 'siemens-energy.png' },
    { name: 'HT Group', filename: 'ht-group.png' },
    { name: 'WABCO', filename: 'wabco.png' },
  ];

  const mobileLine2 = [
    { name: 'Lyondellbasell', filename: 'lyondellbasell.png' },
    { name: 'Rowe', filename: 'rowe.png' },
    { name: 'Aramco', filename: 'aramco.png' },
    { name: 'Admartime', filename: 'admartime.png' },
    { name: 'Rational', filename: 'rational.png' },
    { name: 'Smiths Detection', filename: 'smiths-detection.png' },
    { name: 'Damen', filename: 'damen.png' },
    { name: 'Sanlorenzo', filename: 'sanlorenzo.png' },
    { name: 'THK', filename: 'thk.png' },
    { name: 'Sessa', filename: 'sessa.png' },
    { name: 'Zimmer', filename: 'zimmer.png' },
    { name: 'Diamond Aircraft', filename: 'diamond-aircraft.png' },
    { name: 'Sudpack', filename: 'sudpack.png' },
    { name: 'Getinge', filename: 'getinge.png' },
    { name: 'Konica Minolta', filename: 'konica-minolta.png' },
    { name: 'Wabtec', filename: 'wabtec.png' },
    { name: 'Exxon Mobil', filename: 'exxon-mobil.png' },
    { name: 'Teleste', filename: 'teleste.png' },
    { name: 'KNDS', filename: 'knds.png' },
    { name: 'Esko', filename: 'esko.png' },
    { name: 'Krones', filename: 'krones.png' },
    { name: 'Halliburton', filename: 'halliburton.png' },
    { name: 'WEIR', filename: 'weir.png' },
    { name: 'John Deere', filename: 'john-deere.png' },
    { name: 'Nook', filename: 'nook.png' },
    { name: 'Linde', filename: 'linde.png' },
  ];

  const mobileLine3 = [
    { name: 'Visa', filename: 'visa.png' },
    { name: 'Samsung Medison', filename: 'samsung-medison.png' },
    { name: 'Caterpillar', filename: 'caterpillar.png' },
    { name: 'Red Hat', filename: 'red-hat.png' },
    { name: 'Nissan', filename: 'nissan.png' },
    { name: 'Kaspersky', filename: 'kaspersky.png' },
    { name: 'Jaguar', filename: 'jaguar.png' },
    { name: 'ATI', filename: 'ati.png' },
    { name: 'Flonq', filename: 'flonq.png' },
    { name: 'Nobel Biocare', filename: 'nobel-biocare.png' },
    { name: 'Smart', filename: 'smart.png' },
    { name: 'Siemens Healthineers', filename: 'siemens-healthineers.png' },
    { name: 'Alstom', filename: 'alstom.png' },
    { name: 'Envision', filename: 'envision.png' },
    { name: 'Simonswerk', filename: 'simonswerk.png' },
    { name: 'Penumbra', filename: 'penumbra.png' },
    { name: 'Tikkurila', filename: 'tikkurila.png' },
    { name: 'Linet', filename: 'linet.png' },
    { name: 'Schneider Electric', filename: 'schneider-electric.png' },
    { name: 'Welltec', filename: 'welltec.png' },
    { name: 'Drager', filename: 'drager.png' },
    { name: 'Canadian Solar', filename: 'canadian-solar.png' },
    { name: 'Wolf Oil', filename: 'wolf-oil.png' },
    { name: 'Ansell', filename: 'ansell.png' },
    { name: 'Tosoh', filename: 'tosoh.png' },
    { name: 'Jeppesen', filename: 'jeppesen.png' },
  ];

  // Create extended arrays for smooth looping
  const extendedDesktopLine1 = [...desktopLine1, ...desktopLine1];
  const extendedDesktopLine2 = [...desktopLine2, ...desktopLine2];
  const extendedMobileLine1 = [...mobileLine1, ...mobileLine1];
  const extendedMobileLine2 = [...mobileLine2, ...mobileLine2];
  const extendedMobileLine3 = [...mobileLine3, ...mobileLine3];

  const renderLogoLine = (logos: { name: string; filename: string }[], lineKey: string, direction: 'left' | 'right', duration: number = 120, isMobile: boolean = false) => {
    return (
    <CarouselContainer $isMobile={isMobile}>
      <CarouselTrack direction={direction} duration={duration} $isMobile={isMobile}>
        {logos.map((logo, index) => (
          <LogoItem key={`${lineKey}-${logo.filename}-${index}`} $isMobile={isMobile}>
            {isMobile ? (
              // Для мобильных используем picture с srcset
              <Box
                component="picture"
                sx={{
                  height: '28px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box
                  component="img"
                  src={`/client-logos/${logo.filename}`}
                  srcSet={`/client-logos/${logo.filename} 1x, /client-logos/${logo.filename} 2x`}
                  alt={logo.name}
                  sx={{
                    height: '28px',
                    width: 'auto',
                    maxWidth: '120px',
                    objectFit: 'contain',
                    filter: 'grayscale(100%) contrast(1.2)',
                    opacity: 0.9,
                    transition: 'all 0.3s ease',
                    imageRendering: '-webkit-optimize-contrast',
                    WebkitImageRendering: '-webkit-optimize-contrast',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)',
                  }}
                />
              </Box>
            ) : (
              // Для десктопа оставляем как было
              <Box
                component="img"
                src={`/client-logos/${logo.filename}`}
                alt={logo.name}
                sx={{
                  height: { sm: '36px', md: '48px' },
                  width: 'auto',
                  maxWidth: { sm: '160px', md: '180px' },
                  objectFit: 'contain',
                  filter: 'grayscale(100%) contrast(1.2)',
                  opacity: 0.7,
                  transition: 'all 0.3s ease',
                  imageRendering: 'auto',
                  WebkitImageRendering: 'auto',
                  '&:hover': {
                    filter: 'grayscale(0%) contrast(1)',
                    opacity: 1,
                  },
                }}
              />
            )}
          </LogoItem>
        ))}
      </CarouselTrack>
    </CarouselContainer>
    );
  };

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: '2.5rem', md: 8 }, // Mobile: 2.5rem, Desktop: 8 (64px)
        pb: { xs: 0, md: 8 }, // Mobile: 0, Desktop: 8 (64px)
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: '1rem', md: '2.5rem' } }}>
        {/* Section Title */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'flex-start', md: 'flex-start' }, // Mobile: left, Desktop: left
            textAlign: { xs: 'left', md: 'left' }, // Mobile: left, Desktop: left
            width: '100%',
            mb: { xs: '1rem', md: 6 }, // Mobile: 1rem, Desktop: 6 (48px)
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '0.75rem', sm: '1.5rem', md: 36 },
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: { xs: '1rem', sm: '1.75rem', md: 1.11 },
              letterSpacing: { xs: '0.03rem', sm: '0.01em', md: '-0.02em' },
              color: '#262626', // Direct color for grey.800
              textAlign: { xs: 'left', md: 'left' }, // Mobile: left, Desktop: left
              width: '100%',
            }}
          >
            <Box component="span" sx={{ color: '#262626', fontWeight: 400 }}>
              We build{' '}
            </Box>
            <Box 
              component="span" 
              sx={{ 
                color: '#656CAF',
                fontWeight: { xs: 400, md: 700 }, // Mobile: 400, Desktop: 700
              }}
            >
              partnerships
            </Box>
            <Box component="span" sx={{ color: '#262626', fontWeight: 400 }}>
              {' '}that always come back
            </Box>
          </Typography>
        </Box>

        {/* Desktop Layout - 2 Lines */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {/* Desktop Line 1 - Left to Right */}
          {renderLogoLine(extendedDesktopLine1, 'desktop-line1', 'left', 180, false)}
          
          {/* Desktop Line 2 - Right to Left */}
          <Box sx={{ mt: '32px' }}>
            {renderLogoLine(extendedDesktopLine2, 'desktop-line2', 'right', 200, false)}
          </Box>
        </Box>

        {/* Mobile Layout - 3 Lines */}
        <Box sx={{ display: { xs: 'block', md: 'none' }, mb: { xs: '2.75rem', md: 0 } }}>
          {/* Mobile Line 1 - Left to Right */}
          {renderLogoLine(extendedMobileLine1, 'mobile-line1', 'left', 100, true)}
          
          {/* Mobile Line 2 - Right to Left */}
          <Box sx={{ mt: '0.25rem' }}>
            {renderLogoLine(extendedMobileLine2, 'mobile-line2', 'right', 120, true)}
          </Box>
          
          {/* Mobile Line 3 - Left to Right */}
          <Box sx={{ mt: '0.25rem' }}>
            {renderLogoLine(extendedMobileLine3, 'mobile-line3', 'left', 110, true)}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ClientsSection; 