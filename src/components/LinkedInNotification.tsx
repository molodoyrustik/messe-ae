'use client';

import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

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
        top: { 
          xs: 56 + 12, // Высота мобильного хедера + отступ
          md: 128 + 12 // Высота десктопного хедера (36px topbar + 92px header) + отступ
        },
        left: {
          xs: '1rem',
          md: 'max(2.5rem, calc((100vw - 1536px) / 2 + 2.5rem))' // Точно выравниваемся с логотипом
        },
        width: '27rem',
        maxWidth: 'calc(100vw - 2rem)', // Не выходим за границы экрана
        zIndex: 1400,
        display: { xs: 'none', md: 'block' },
        animation: 'slideDown 0.5s ease-out',
        pointerEvents: 'none',
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
        <Box
          sx={{
            position: 'relative',
            width: '27rem',
            height: '15rem', // Увеличиваем чтобы поместился треугольник
            overflow: 'visible', // Позволяем треугольнику выходить за границы
            paddingTop: '12px', // Отступ для треугольника
            pointerEvents: 'auto', // Включаем клики только для содержимого
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
          
          {/* Triangle pointer */}
          <Box
            sx={{
              position: 'absolute',
              top: '-5px',
              left: '50px', // Примерно по центру логотипа Messe.ae
            }}
          >
            <svg 
              width="20" 
              height="21.68" 
              viewBox="0 0 20 21.68" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon 
                points="10,0 0,21.68 20,21.68" 
                fill="#262626"
              />
            </svg>
          </Box>
          
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
                  width: '1.5rem',
                  height: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.7778 2C20.9881 2 22 3.01185 22 4.22222V19.7778C22 20.9881 20.9881 22 19.7778 22H4.22222C3.01185 22 2 20.9881 2 19.7778V4.22222C2 3.01185 3.01185 2 4.22222 2H19.7778ZM19.2222 19.2222V13.3333C19.2222 12.3727 18.8406 11.4513 18.1613 10.772C17.482 10.0927 16.5607 9.71111 15.6 9.71111C14.6556 9.71111 13.5556 10.2889 13.0222 11.1556V9.92222H9.92222V19.2222H13.0222V13.7444C13.0222 12.8889 13.7111 12.1889 14.5667 12.1889C14.9792 12.1889 15.3749 12.3528 15.6666 12.6445C15.9583 12.9362 16.1222 13.3319 16.1222 13.7444V19.2222H19.2222ZM6.31111 8.17778C6.80618 8.17778 7.28098 7.98111 7.63104 7.63104C7.98111 7.28098 8.17778 6.80618 8.17778 6.31111C8.17778 5.27778 7.34444 4.43333 6.31111 4.43333C5.81309 4.43333 5.33547 4.63117 4.98332 4.98332C4.63117 5.33547 4.43333 5.81309 4.43333 6.31111C4.43333 7.34444 5.27778 8.17778 6.31111 8.17778ZM7.85556 19.2222V9.92222H4.77778V19.2222H7.85556Z"
                    fill="#656CAF"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>
    </Box>
  );
};

export default LinkedInNotification;