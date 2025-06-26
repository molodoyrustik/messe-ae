'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  styled,
} from '@mui/material';

// Container for the carousel
const CarouselContainer = styled(Box)<{ $isMobile?: boolean }>(({ $isMobile = false }) => ({
  overflow: 'hidden',
  position: 'relative',
  height: $isMobile ? '1.75rem' : '64px', // Mobile: 1.75rem (28px), Desktop: 64px
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
const CarouselTrack = styled(Box)<{ direction?: 'left' | 'right'; duration?: number; $isMobile?: boolean }>(
  ({ direction = 'left', duration = 120, $isMobile = false }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: $isMobile ? '2rem' : '120px', // Mobile: 2rem, Desktop: 120px
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
const LogoItem = styled(Box)<{ $isMobile?: boolean }>(({ $isMobile = false }) => ({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: $isMobile ? 'auto' : '200px', // Mobile: auto, Desktop: 200px
}));

const ClientsSection = () => {
  // Based on Figma design - Line 1 (Customer_1_web) - 40 logos
  const desktopLine1 = [
    { name: 'Amazon Web Services', filename: 'amazon-web-services.svg' },
    { name: 'Genesis', filename: 'genesis.svg' },
    { name: 'Canon', filename: 'canon.svg' },
    { name: 'Porsche', filename: 'porsche.svg' },
    { name: 'Hapag Lloyd', filename: 'hapag-lloyd.svg' },
    { name: 'Infiniti', filename: 'infiniti.svg' },
    { name: 'Siemens', filename: 'siemens.svg' },
    { name: 'AO Trauma', filename: 'ao-trauma.svg' },
    { name: 'Tomra', filename: 'tomra.svg' },
    { name: 'Anduril', filename: 'anduril.svg' },
    { name: 'REC Solar', filename: 'rec-solar.svg' },
    { name: 'Alvo', filename: 'alvo.svg' },
    { name: 'Diehl', filename: 'diehl.svg' },
    { name: 'Medela', filename: 'medela.svg' },
    { name: 'Arjo', filename: 'arjo.svg' },
    { name: 'Abbott', filename: 'abbott.svg' },
    { name: 'Soltec', filename: 'soltec.svg' },
    { name: 'Pattyn', filename: 'pattyn.svg' },
    { name: 'Mindray', filename: 'mindray.svg' },
    { name: 'Biosystems', filename: 'biosystems.svg' },
    { name: 'Hensoldt', filename: 'hensoldt.svg' },
    { name: 'Brady', filename: 'brady.svg' },
    { name: 'Mizuho', filename: 'mizuho.svg' },
    { name: 'OMV', filename: 'omv.svg' },
    { name: 'Siemens Energy', filename: 'siemens-energy.svg' },
    { name: 'HT Group', filename: 'ht-group.svg' },
    { name: 'WABCO', filename: 'wabco.svg' },
    { name: 'Linde', filename: 'linde.svg' },
    { name: 'Nook', filename: 'nook.svg' },
    { name: 'John Deere', filename: 'john-deere.svg' },
    { name: 'WEIR', filename: 'weir.svg' },
    { name: 'Halliburton', filename: 'halliburton.svg' },
    { name: 'Krones', filename: 'krones.svg' },
    { name: 'Esko', filename: 'esko.svg' },
    { name: 'KNDS', filename: 'knds.svg' },
    { name: 'Teleste', filename: 'teleste.svg' },
    { name: 'Exxon Mobil', filename: 'exxon-mobil.svg' },
    { name: 'Wabtec', filename: 'wabtec.svg' },
    { name: 'Konica Minolta', filename: 'konica-minolta.svg' },
    { name: 'Getinge', filename: 'getinge.svg' },
  ];

  // Based on Figma design - Line 2 (Customer_2_web) - 40 logos  
  const desktopLine2 = [
    { name: 'Sudpack', filename: 'sudpack.svg' },
    { name: 'Diamond Aircraft', filename: 'diamond-aircraft.svg' },
    { name: 'Zimmer', filename: 'zimmer.svg' },
    { name: 'Sessa', filename: 'sessa.svg' },
    { name: 'THK', filename: 'thk.svg' },
    { name: 'Sanlorenzo', filename: 'sanlorenzo.svg' },
    { name: 'Damen', filename: 'damen.svg' },
    { name: 'Smiths Detection', filename: 'smiths-detection.svg' },
    { name: 'Rational', filename: 'rational.svg' },
    { name: 'Admartime', filename: 'admartime.svg' },
    { name: 'Aramco', filename: 'aramco.svg' },
    { name: 'Rowe', filename: 'rowe.svg' },
    { name: 'Lyondellbasell', filename: 'lyondellbasell.svg' },
    { name: 'Jeppesen', filename: 'jeppesen.svg' },
    { name: 'Tosoh', filename: 'tosoh.svg' },
    { name: 'Ansell', filename: 'ansell.svg' },
    { name: 'Wolf Oil', filename: 'wolf-oil.svg' },
    { name: 'Canadian Solar', filename: 'canadian-solar.svg' },
    { name: 'Drager', filename: 'drager.svg' },
    { name: 'Welltec', filename: 'welltec.svg' },
    { name: 'Schneider Electric', filename: 'schneider-electric.svg' },
    { name: 'Linet', filename: 'linet.svg' },
    { name: 'Tikkurila', filename: 'tikkurila.svg' },
    { name: 'Penumbra', filename: 'penumbra.svg' },
    { name: 'Simonswerk', filename: 'simonswerk.svg' },
    { name: 'Envision', filename: 'envision.svg' },
    { name: 'Alstom', filename: 'alstom.svg' },
    { name: 'Siemens Healthineers', filename: 'siemens-healthineers.svg' },
    { name: 'Smart', filename: 'smart.svg' },
    { name: 'Nobel Biocare', filename: 'nobel-biocare.svg' },
    { name: 'Flonq', filename: 'flonq.svg' },
    { name: 'ATI', filename: 'ati.svg' },
    { name: 'Jaguar', filename: 'jaguar.svg' },
    { name: 'Kaspersky', filename: 'kaspersky.svg' },
    { name: 'Nissan', filename: 'nissan.svg' },
    { name: 'Red Hat', filename: 'red-hat.svg' },
    { name: 'Caterpillar', filename: 'caterpillar.svg' },
    { name: 'Samsung Medison', filename: 'samsung-medison.svg' },
    { name: 'Visa', filename: 'visa.svg' },
  ];

  // Mobile version - 3 lines as per Figma design
  const mobileLine1 = [
    { name: 'Amazon Web Services', filename: 'amazon-web-services.svg' },
    { name: 'Genesis', filename: 'genesis.svg' },
    { name: 'Canon', filename: 'canon.svg' },
    { name: 'Porsche', filename: 'porsche.svg' },
    { name: 'Hapag Lloyd', filename: 'hapag-lloyd.svg' },
    { name: 'Infiniti', filename: 'infiniti.svg' },
    { name: 'Siemens', filename: 'siemens.svg' },
    { name: 'AO Trauma', filename: 'ao-trauma.svg' },
    { name: 'Tomra', filename: 'tomra.svg' },
    { name: 'Anduril', filename: 'anduril.svg' },
    { name: 'REC Solar', filename: 'rec-solar.svg' },
    { name: 'Alvo', filename: 'alvo.svg' },
    { name: 'Diehl', filename: 'diehl.svg' },
    { name: 'Medela', filename: 'medela.svg' },
    { name: 'Arjo', filename: 'arjo.svg' },
    { name: 'Abbott', filename: 'abbott.svg' },
    { name: 'Soltec', filename: 'soltec.svg' },
    { name: 'Pattyn', filename: 'pattyn.svg' },
    { name: 'Mindray', filename: 'mindray.svg' },
    { name: 'Biosystems', filename: 'biosystems.svg' },
    { name: 'Hensoldt', filename: 'hensoldt.svg' },
    { name: 'Brady', filename: 'brady.svg' },
    { name: 'Mizuho', filename: 'mizuho.svg' },
    { name: 'OMV', filename: 'omv.svg' },
    { name: 'Siemens Energy', filename: 'siemens-energy.svg' },
    { name: 'HT Group', filename: 'ht-group.svg' },
    { name: 'WABCO', filename: 'wabco.svg' },
  ];

  const mobileLine2 = [
    { name: 'Lyondellbasell', filename: 'lyondellbasell.svg' },
    { name: 'Rowe', filename: 'rowe.svg' },
    { name: 'Aramco', filename: 'aramco.svg' },
    { name: 'Admartime', filename: 'admartime.svg' },
    { name: 'Rational', filename: 'rational.svg' },
    { name: 'Smiths Detection', filename: 'smiths-detection.svg' },
    { name: 'Damen', filename: 'damen.svg' },
    { name: 'Sanlorenzo', filename: 'sanlorenzo.svg' },
    { name: 'THK', filename: 'thk.svg' },
    { name: 'Sessa', filename: 'sessa.svg' },
    { name: 'Zimmer', filename: 'zimmer.svg' },
    { name: 'Diamond Aircraft', filename: 'diamond-aircraft.svg' },
    { name: 'Sudpack', filename: 'sudpack.svg' },
    { name: 'Getinge', filename: 'getinge.svg' },
    { name: 'Konica Minolta', filename: 'konica-minolta.svg' },
    { name: 'Wabtec', filename: 'wabtec.svg' },
    { name: 'Exxon Mobil', filename: 'exxon-mobil.svg' },
    { name: 'Teleste', filename: 'teleste.svg' },
    { name: 'KNDS', filename: 'knds.svg' },
    { name: 'Esko', filename: 'esko.svg' },
    { name: 'Krones', filename: 'krones.svg' },
    { name: 'Halliburton', filename: 'halliburton.svg' },
    { name: 'WEIR', filename: 'weir.svg' },
    { name: 'John Deere', filename: 'john-deere.svg' },
    { name: 'Nook', filename: 'nook.svg' },
    { name: 'Linde', filename: 'linde.svg' },
  ];

  const mobileLine3 = [
    { name: 'Visa', filename: 'visa.svg' },
    { name: 'Samsung Medison', filename: 'samsung-medison.svg' },
    { name: 'Caterpillar', filename: 'caterpillar.svg' },
    { name: 'Red Hat', filename: 'red-hat.svg' },
    { name: 'Nissan', filename: 'nissan.svg' },
    { name: 'Kaspersky', filename: 'kaspersky.svg' },
    { name: 'Jaguar', filename: 'jaguar.svg' },
    { name: 'ATI', filename: 'ati.svg' },
    { name: 'Flonq', filename: 'flonq.svg' },
    { name: 'Nobel Biocare', filename: 'nobel-biocare.svg' },
    { name: 'Smart', filename: 'smart.svg' },
    { name: 'Siemens Healthineers', filename: 'siemens-healthineers.svg' },
    { name: 'Alstom', filename: 'alstom.svg' },
    { name: 'Envision', filename: 'envision.svg' },
    { name: 'Simonswerk', filename: 'simonswerk.svg' },
    { name: 'Penumbra', filename: 'penumbra.svg' },
    { name: 'Tikkurila', filename: 'tikkurila.svg' },
    { name: 'Linet', filename: 'linet.svg' },
    { name: 'Schneider Electric', filename: 'schneider-electric.svg' },
    { name: 'Welltec', filename: 'welltec.svg' },
    { name: 'Drager', filename: 'drager.svg' },
    { name: 'Canadian Solar', filename: 'canadian-solar.svg' },
    { name: 'Wolf Oil', filename: 'wolf-oil.svg' },
    { name: 'Ansell', filename: 'ansell.svg' },
    { name: 'Tosoh', filename: 'tosoh.svg' },
    { name: 'Jeppesen', filename: 'jeppesen.svg' },
  ];

  // Create extended arrays for smooth looping
  const extendedDesktopLine1 = [...desktopLine1, ...desktopLine1];
  const extendedDesktopLine2 = [...desktopLine2, ...desktopLine2];
  const extendedMobileLine1 = [...mobileLine1, ...mobileLine1];
  const extendedMobileLine2 = [...mobileLine2, ...mobileLine2];
  const extendedMobileLine3 = [...mobileLine3, ...mobileLine3];

  const renderLogoLine = (logos: { name: string; filename: string }[], lineKey: string, direction: 'left' | 'right', duration: number = 120, isMobile: boolean = false) => (
    <CarouselContainer $isMobile={isMobile}>
      <CarouselTrack direction={direction} duration={duration} $isMobile={isMobile}>
        {logos.map((logo, index) => (
          <LogoItem key={`${lineKey}-${logo.filename}-${index}`} $isMobile={isMobile}>
            <Box
              component="img"
              src={`/client-logos/${logo.filename}`}
              alt={logo.name}
              sx={{
                maxWidth: isMobile ? '160px' : '200px', // Mobile: smaller logos
                maxHeight: isMobile ? '20px' : '48px', // Mobile: 20px height
                objectFit: 'contain',
                filter: isMobile ? 'grayscale(100%)' : 'none', // Mobile: grayscale by default
                opacity: isMobile ? 0.7 : 1, // Mobile: reduced opacity
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  filter: 'grayscale(0%)', // Color on hover for both mobile and desktop
                  opacity: 1,
                },
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </LogoItem>
        ))}
      </CarouselTrack>
    </CarouselContainer>
  );

  return (
    <Box
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
            justifyContent: { xs: 'center', md: 'flex-start' }, // Mobile: center, Desktop: left
            textAlign: { xs: 'center', md: 'left' }, // Mobile: center, Desktop: left
            width: '100%',
            mb: { xs: '1rem', md: 6 }, // Mobile: 1rem, Desktop: 6 (48px)
          }}
        >
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontSize: { xs: '0.75rem', md: 36 }, // Mobile: 0.75rem (12px), Desktop: 36px
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: { xs: '1rem', md: 1.11 }, // Mobile: 1rem (16px), Desktop: 1.11
              letterSpacing: { xs: '0.03rem', md: '-0.02em' }, // Mobile: 0.03rem, Desktop: -0.02em
              color: 'grey.800',
              textAlign: { xs: 'center', md: 'left' }, // Mobile: center, Desktop: left
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