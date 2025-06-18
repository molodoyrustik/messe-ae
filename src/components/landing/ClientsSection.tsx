'use client';

import {
  Box,
  Container,
  Typography,
  Stack,
} from '@mui/material';

const ClientsSection = () => {
  // Placeholder client logos - in real app these would be actual logo URLs
  const clientLogos = [
    '/clients/client-1.png',
    '/clients/client-2.png',
    '/clients/client-3.png',
    '/clients/client-4.png',
    '/clients/client-5.png',
    '/clients/client-6.png',
    '/clients/client-7.png',
    '/clients/client-8.png',
    '/clients/client-9.png',
    '/clients/client-10.png',
    '/clients/client-11.png',
    '/clients/client-12.png',
    '/clients/client-13.png',
    '/clients/client-14.png',
    '/clients/client-15.png',
    '/clients/client-16.png',
    '/clients/client-17.png',
    '/clients/client-18.png',
    '/clients/client-19.png',
    '/clients/client-20.png',
  ];

  const LogoGrid = ({ logos, startIndex, count }: { logos: string[], startIndex: number, count: number }) => (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: { xs: 8, md: 15 },
        overflowX: 'auto',
        pb: 2,
        '&::-webkit-scrollbar': { display: 'none' },
        scrollbarWidth: 'none',
      }}
    >
      {logos.slice(startIndex, startIndex + count).map((logo, index) => (
        <Box
          key={index}
          sx={{
            minWidth: { xs: 80, md: 120 },
            height: { xs: 40, md: 60 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'grey.100',
            borderRadius: 1,
            p: 1,
            opacity: 0.7,
            transition: 'opacity 0.3s ease',
            '&:hover': {
              opacity: 1,
            },
          }}
        >
          {/* Placeholder for logo */}
          <Typography
            variant="caption"
            sx={{
              color: 'grey.600',
              textAlign: 'center',
              fontSize: { xs: 10, md: 12 },
            }}
          >
            Logo {startIndex + index + 1}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={4}>
          {/* Section Title */}
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: 24, md: 34 },
              fontWeight: 400,
              lineHeight: 1.24,
              letterSpacing: '0.01em',
              color: 'text.primary',
              textAlign: 'center',
              mb: { xs: 2, md: 4 },
            }}
          >
            We build partnerships that always come back
          </Typography>

          {/* First row of logos */}
          <LogoGrid logos={clientLogos} startIndex={0} count={20} />
          
          {/* Second row of logos */}
          <LogoGrid logos={clientLogos} startIndex={20} count={20} />
        </Stack>
      </Container>
    </Box>
  );
};

export default ClientsSection; 