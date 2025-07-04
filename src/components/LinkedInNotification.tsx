'use client';

import { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const LinkedInNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isHidden) {
        setIsVisible(true);
      }
    }, 10000); // 10 seconds delay

    return () => clearTimeout(timer);
  }, [isHidden]);

  const handleClose = () => {
    setIsVisible(false);
    setIsHidden(true);
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/company/messe-ae', '_blank');
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 'calc(8rem + 0.75rem)',
        left: 0,
        right: 0,
        zIndex: 1400,
        display: { xs: 'none', md: 'block' },
        animation: 'slideDown 0.5s ease-out',
        '@keyframes slideDown': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-100%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: '1rem', md: '2.5rem' } }}>
        <Box
          sx={{
            position: 'relative',
            width: '27rem',
            height: '15rem', // Увеличиваем чтобы поместился треугольник
            overflow: 'visible', // Позволяем треугольнику выходить за границы
            paddingTop: '12px', // Отступ для треугольника
          }}
        >
          {/* SVG Background */}
          <svg
            width="432"
            height="240"
            viewBox="0 0 432 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            {/* Треугольник-указатель на лого (сверху) */}
            <path
              d="M60 12 L80 0 L100 12 Z"
              fill="#262626"
            />
            {/* Основной прямоугольник нотификации */}
            <rect
              x="0"
              y="12"
              width="432"
              height="228"
              rx="8"
              fill="#262626"
            />
          </svg>
          {/* Close button */}
          <Box
            component="button"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              width: '1rem',
              height: '1rem',
              right: '0.5rem',
              top: '1.25rem', // 0.5rem + 12px от треугольника = 1.25rem
              overflow: 'hidden',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              zIndex: 1,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L8 8M8 8L15 15M8 8L15 1M8 8L1 15"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </Box>

          {/* Content text */}
          <Typography
            sx={{
              position: 'absolute',
              width: '23rem',
              left: '2rem',
              top: '2.25rem', // 1.5rem + 12px от треугольника = 2.25rem
              color: 'var(--Basic-white, #FFF)',
              fontFamily: 'Roboto',
              fontSize: '1rem',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '1.5rem',
              letterSpacing: '0.02rem',
              zIndex: 1,
            }}
          >
            Stay ahead with the latest exhibition trends!
            <br />
            Get expert insights, industry updates, and exhibition stand design tips straight to your feed.
            <br />
            Follow us on LinkedIn to never miss a new article!
          </Typography>

          {/* LinkedIn Button */}
          <Box
            component="button"
            onClick={handleLinkedInClick}
            sx={{
              position: 'absolute',
              display: 'flex',
              width: '23rem',
              height: '3rem',
              padding: '0.5rem 1.375rem',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
              borderRadius: '0.5rem',
              border: '1px solid var(--Primary-purple-200, #A2A9D0)',
              left: '2rem',
              bottom: '2rem',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.2s',
              zIndex: 1,
              '&:hover': {
                borderColor: '#656CAF',
                backgroundColor: 'rgba(101, 108, 175, 0.08)',
              },
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem', // gap-2
              }}
            >
              <Typography
                sx={{
                  color: '#656CAF',
                  fontSize: '1.5rem', // text-2xl
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  lineHeight: '1.75rem', // leading-7
                  letterSpacing: '-0.025em', // tracking-tight
                }}
              >
                Follow us on LinkedIn
              </Typography>
              <Box
                sx={{
                  width: '1rem', // w-4
                  height: '1.5rem', // h-6
                  minHeight: '1.5rem', // min-h-6
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    width: '1.5rem', // w-6
                    height: '1.5rem', // h-6
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    overflow: 'hidden',
                  }}
                >
                  <ArrowForwardIcon
                    sx={{
                      width: '1.25rem', // w-5
                      height: '1.25rem', // h-5
                      position: 'absolute',
                      left: '0.125rem', // left-[2px]
                      top: '0.125rem', // top-[2px]
                      color: '#656CAF',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LinkedInNotification;