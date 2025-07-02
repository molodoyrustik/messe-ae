'use client';

import { Box, Container, Typography } from '@mui/material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';

const PrivacyPolicyPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Header />
      <Container maxWidth="xl" sx={{ pt: { xs: '1.5rem', md: '3.75rem' }, pb: '8rem', px: { xs: '1rem', md: '2.5rem' } }}>
          {/* Page Header */}
          <Box sx={{ mb: { xs: '1.5rem', md: '2rem' } }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: { xs: '2.25rem', md: '3.125rem' },
                lineHeight: { xs: '2.5rem', md: '3.75rem' },
                color: '#262626',
              }}
            >
              Privacy policy
            </Typography>
          </Box>

          {/* Content Sections */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '1.5rem', md: '1.5rem' } }}>
            {/* Personal data management */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '0.25rem', md: '0.5rem' } }}>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: { xs: '1rem', md: '2.125rem' },
                  lineHeight: { xs: '1.5rem', md: '2.5rem' },
                  letterSpacing: { xs: '0.32px', md: '0.32px' },
                  color: '#262626',
                }}
              >
                Personal data management
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  lineHeight: { xs: '1.125rem', md: '1.5rem' },
                  letterSpacing: { xs: '0.28px', md: '0.32px' },
                  color: '#000000',
                  maxWidth: '85rem',
                }}
              >
                The website messe.ae uses the Secure Sockets Layer (SSL) technology, encrypting and transmitting all information without risk.
              </Typography>
            </Box>

            {/* Personal data */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '0.25rem', md: '0.5rem' } }}>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: { xs: '1rem', md: '2.125rem' },
                  lineHeight: { xs: '1.5rem', md: '2.5rem' },
                  letterSpacing: { xs: '0.32px', md: '0.32px' },
                  color: '#262626',
                }}
              >
                Personal data
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  lineHeight: { xs: '1.125rem', md: '1.5rem' },
                  letterSpacing: { xs: '0.28px', md: '0.32px' },
                  color: '#000000',
                  maxWidth: '85rem',
                }}
              >
                Website messe.ae does not collect your personal data. All data collected, such as browser version, operating system version, screen resolution, visited pages, etc., are impersonal in nature.
              </Typography>
            </Box>
          </Box>
      </Container>
      <FooterSection />
    </Box>
  );
};

export default PrivacyPolicyPage;