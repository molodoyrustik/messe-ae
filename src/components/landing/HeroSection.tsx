'use client';

import {
  Box,
  Typography,
  Button,
  Container,
  Portal,
} from '@mui/material';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        const formTop = contactForm.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const buttonHeight = 48; // Высота кнопки
        const buttonBottom = 80 + buttonHeight; // bottom: 80px + высота кнопки
        
        // Скрывать кнопку на уровне футера, когда расстояние до формы около 120-130px
        const shouldHideButton = formTop < (windowHeight - buttonBottom + 120); // +120px чтобы кнопка исчезала на уровне футера
        
        setShowButton(!shouldHideButton);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: { xs: '580px', md: '800px' },
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Video Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <Box
          component="iframe"
          src="https://player.vimeo.com/video/1066300060?h=1066300060&background=1&controls=0&muted=1&loop=1&autopause=0&dnt=1"
          title="Video background"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
            width: '100vw',
            height: '56.25vw', // 16:9 aspect ratio
            minHeight: '100%',
            minWidth: '177.78vh', // 16:9 aspect ratio
            border: 'none',
            opacity: 1,
          }}
        />
      </Box>

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
        {/* Main Title */}
        <Typography
          sx={{
            position: 'absolute',
            left: { xs: '16px', md: '2.5rem' },
            top: { xs: '256px', md: '367px' },
            maxWidth: { xs: '288px', md: '1084px' },
            fontSize: { xs: '24px', md: '54px' },
            fontWeight: 700,
            lineHeight: { xs: '28px', md: '60px' },
            letterSpacing: { xs: '0.01em', md: 'normal' },
            color: '#FFFFFF',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          Exhibition Stand Builder & Designer in UAE and around the world
        </Typography>

        {/* Subtitle with mixed styling */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '16px', md: '2.5rem' },
            top: { xs: '352px', md: '511px' },
            maxWidth: { xs: '288px', md: '100%' },
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column',
          }}
        >
          <Typography
            component="div"
            sx={{
              fontSize: { xs: '12px', md: '34px' },
              fontWeight: 400,
              lineHeight: { xs: '16px', md: '42px' },
              letterSpacing: { xs: '0.04em', md: '-0.025em' },
              color: '#FFFFFF',
            }}
          >
            <Box component="span">Your great </Box>
            <Box component="span" sx={{ fontWeight: 700 }}>exhibition stand design</Box>
            <Box component="span"> starts here.</Box>
            <Box component="span" sx={{ display: { xs: 'inline', md: 'block' } }}> </Box>
            <Box component="span" sx={{ fontWeight: 700, color: '#656CAF' }}>Fill in</Box>
            <Box component="span"> the </Box>
            <Box component="span" sx={{ fontWeight: 700, color: '#656CAF' }}>form</Box>
            <Box component="span">, and we will handle the rest.</Box>
          </Typography>
        </Box>


        {/* "20" Large Number - Desktop Only */}
        <Typography
          sx={{
            position: 'absolute',
            left: '2.5rem',
            top: '619px',
            fontSize: '120px',
            fontWeight: 700,
            lineHeight: '140px',
            color: '#FFFFFF',
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-start',
          }}
        >
          20
        </Typography>

        {/* "years of award winning expertise" - Desktop Only */}
        <Typography
          sx={{
            position: 'absolute',
            left: 'calc(2.5rem + 150px)',
            top: '669px',
            fontSize: '34px',
            fontWeight: 400,
            lineHeight: '42px',
            letterSpacing: '-0.025em',
            color: '#FFFFFF',
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-start',
          }}
        >
          years of award winning expertise
        </Typography>

        {/* CTA Button - Desktop */}
        <Box
          sx={{
            position: 'absolute',
            right: { xs: '1rem', md: '2.5rem' },
            top: '529px',
            width: '316px',
            height: '48px',
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: '100%',
              height: '100%',
              px: '20px',
              py: '8px',
              backgroundColor: '#656CAF',
              borderRadius: '8px',
              boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.20), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
              textTransform: 'none',
              
              '&:hover': {
                backgroundColor: '#4C53A2',
              },
            }}
          >
            <Typography
              sx={{
                fontSize: '24px',
                fontWeight: 400,
                lineHeight: '28px',
                letterSpacing: '-0.025em',
                color: '#FFFFFF',
                textAlign: 'right',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Request a proposal
            </Typography>
          </Button>
        </Box>
        
        {/* Mobile Layout - Fixed at bottom */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'column',
            alignItems: 'stretch',
            px: '16px',
            pb: '16px',
          }}
        >
          {/* CTA Button - Mobile */}
          <Portal>
            <Button
              variant="contained"
              fullWidth
              onClick={scrollToForm}
              sx={{
                position: 'fixed',
                bottom: '80px',
                left: '50%',
                transform: 'translateX(-50%) translateZ(999px)', // Увеличили значение translateZ
                width: 'calc(100% - 48px)',
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
                zIndex: 99999, // Максимальный z-index для отображения поверх всех элементов
                opacity: showButton ? 1 : 0,
                visibility: showButton ? 'visible' : 'hidden',
                transition: 'opacity 0.3s ease, visibility 0.3s ease',
                // Исправления для артефактов рендеринга
                isolation: 'isolate', // Создает новый stacking context
                willChange: 'opacity, visibility', // Оптимизируем только изменяющиеся свойства
                backfaceVisibility: 'hidden', // Предотвращаем проблемы с 3D трансформациями
                WebkitBackfaceVisibility: 'hidden', // Safari совместимость
                WebkitFontSmoothing: 'antialiased', // Улучшает рендеринг шрифтов
                MozOsxFontSmoothing: 'grayscale', // Firefox на macOS
                // Дополнительные фиксы для мобильного Chrome
                WebkitTransform: 'translateX(-50%) translateZ(999px)',
                
                '&:hover': {
                  backgroundColor: '#4C53A2',
                },
              }}
            >
              Connect with us
            </Button>
          </Portal>
          
          {/* "20 years" text for mobile */}
          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
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
    </Box>
  );
};

export default HeroSection; 