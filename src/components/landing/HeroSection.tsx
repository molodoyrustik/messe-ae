'use client';

import {
  Box,
  Typography,
  Button,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { ContactFormModal } from '@/components/ContactFormModal';
import { useMobileMenu } from '@/contexts/MobileMenuContext';
import { ClientOnly } from '@/components/ClientOnly';
import { SafeVideoPlayer } from '@/components/SafeVideoPlayer';

const HeroSection = () => {
  const [showButton, setShowButton] = useState(true);
  const { isDrawerOpen, isModalOpen, setModalOpen } = useMobileMenu();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        const formTop = contactForm.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const buttonHeight = 48;
        const buttonBottom = (windowHeight * 0.16) + buttonHeight;
        
        const shouldHideButton = formTop < (windowHeight - buttonBottom + 120);
        
        setShowButton(!shouldHideButton);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <Box
      sx={{
        width: '100vw',
        height: { xs: '94dvh', md: 'calc(100vh - 128px)' },
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Video Background */}
      <ClientOnly>
        <SafeVideoPlayer
          src="/videos/hero-video-optimized.mp4"
          mobileSrc="/videos/hero-video-mobile.mp4"
          poster="/images/hero-poster.jpg"
          mobilePoster="/images/hero-poster-mobile-cropped.jpg"
        />
      </ClientOnly>

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 1) 84.13%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <Container 
        maxWidth="xl" 
        sx={{ 
          height: '100%',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Desktop Layout - Bottom Container */}
        <Box 
          sx={{ 
            display: { xs: 'none', md: 'flex' },
            position: 'absolute',
            bottom: '2.5rem',
            left: '2.5rem',
            right: '2.5rem',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {/* Main Title */}
          <Typography
            variant="h1"
            sx={{
              maxWidth: '1084px',
              fontSize: '54px',
              fontWeight: 700,
              lineHeight: '60px',
              letterSpacing: 'normal',
              color: '#FFFFFF',
            }}
          >
            Exhibition Stand Builder & Designer in UAE and around the world
          </Typography>

          {/* Subtitle with mixed styling */}
          <Typography
            component="div"
            sx={{
              fontSize: '34px',
              fontWeight: 400,
              lineHeight: '42px',
              letterSpacing: '-0.025em',
              color: '#FFFFFF',
              maxWidth: '900px',
            }}
          >
            <Box component="span">Your great </Box>
            <Box component="span" sx={{ fontWeight: 700 }}>exhibition stand design</Box>
            <Box component="span"> starts here.</Box>
            <Box component="span" sx={{ display: 'block' }}> </Box>
            <Box component="span" sx={{ fontWeight: 700, color: '#656CAF' }}>Fill in</Box>
            <Box component="span"> the </Box>
            <Box component="span" sx={{ fontWeight: 700, color: '#656CAF' }}>form</Box>
            <Box component="span">, and we will handle the rest.</Box>
          </Typography>

          {/* "20 years" text */}
          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: '1rem', mt: '1rem' }}>
            <Typography
              sx={{
                fontSize: '120px',
                fontWeight: 700,
                lineHeight: '140px',
                color: '#FFFFFF',
              }}
            >
              20
            </Typography>
            <Typography
              sx={{
                fontSize: '34px',
                fontWeight: 400,
                lineHeight: '42px',
                letterSpacing: '-0.025em',
                color: '#FFFFFF',
                alignSelf: 'center',
              }}
            >
              years of award winning expertise
            </Typography>
          </Box>
        </Box>

        {/* Discuss Your Project Button - Desktop Only */}
        <Button
          variant="contained"
          onClick={() => setModalOpen(true)}
          sx={{
            position: 'absolute',
            right: '2.5rem',
            bottom: '24dvh',
            width: '320px',
            height: '48px',
            backgroundColor: 'primary.main',
            borderRadius: '8px',
            boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.20), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
            textTransform: 'none',
            fontSize: '24px',
            fontWeight: 400,
            lineHeight: '28px',
            letterSpacing: 'normal',
            color: '#FFFFFF',
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
            px: '20px',
            py: '8px',
            
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
          }}
        >
          Discuss Your Project
        </Button>

        
        {/* Mobile Layout - Combined bottom block */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '0.5rem',
            left: '1rem',
            right: '1rem',
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'column',
            alignItems: 'stretch',
          }}
        >
          {/* Main Title - Mobile */}
          <Typography
            variant="h1"
            sx={{
              fontSize: '24px',
              fontWeight: 700,
              lineHeight: '28px',
              letterSpacing: '0.01em',
              color: '#FFFFFF',
              mb: '0.75rem', // 12px gap to subtitle
            }}
          >
            Exhibition Stand Builder & Designer in UAE and around the world
          </Typography>

          {/* Subtitle with mixed styling - Mobile */}
          <Typography
            component="div"
            sx={{
              fontSize: '12px',
              fontWeight: 400,
              lineHeight: '16px',
              letterSpacing: '0.04em',
              color: '#FFFFFF',
            }}
          >
            <Box component="span">Your great </Box>
            <Box component="span" sx={{ fontWeight: 700 }}>exhibition stand design</Box>
            <Box component="span"> starts here.</Box>
            <Box component="span"> </Box>
            <Box component="span" sx={{ fontWeight: 700, color: '#656CAF' }}>Fill in</Box>
            <Box component="span"> the </Box>
            <Box component="span" sx={{ fontWeight: 700, color: '#656CAF' }}>form</Box>
            <Box component="span">, and we will handle the rest.</Box>
          </Typography>

          {/* Spacer for button */}
          <Box sx={{ height: '48px', mt: '1.5rem', mb: '1.5rem' }} />
          
          {/* "20 years" text for mobile */}
          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: '8px', mt: '1.5rem' }}>
            <Typography
              sx={{
                fontSize: '60px',
                fontWeight: 700,
                lineHeight: '72px',
                color: '#FFFFFF',
              }}
            >
              20
            </Typography>
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '16px',
                letterSpacing: '0.04em',
                color: '#FFFFFF',
                alignSelf: 'center',
              }}
            >
              years of award winning expertise
            </Typography>
          </Box>
        </Box>
      </Container>
      
      {/* Fixed CTA Button - Mobile */}
      <ClientOnly>
        {isMobile && (
          <Button
            variant="contained"
            fullWidth
            onClick={() => setModalOpen(true)}
            sx={{
              position: 'fixed',
              bottom: '12.5dvh',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 'calc(100% - 2rem)',
              maxWidth: '400px',
              height: '48px',
              backgroundColor: '#656CAF',
              borderRadius: '8px',
              boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.20), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px',
              letterSpacing: '0.02em',
              zIndex: 9999,
              opacity: showButton && !isDrawerOpen && !isModalOpen ? 1 : 0,
              visibility: showButton && !isDrawerOpen && !isModalOpen ? 'visible' : 'hidden',
              transition: 'opacity 0.3s ease, visibility 0.3s ease',
              
              '&:hover': {
                backgroundColor: '#4C53A2',
              },
            }}
          >
            Connect with us
          </Button>
        )}
      </ClientOnly>
      
      {/* Contact Form Modal */}
      <ContactFormModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </Box>
  );
};

export default HeroSection; 