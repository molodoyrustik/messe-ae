'use client';

import {
  Box,
  Card,
  Container,
  Link,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';
import Services from '@/components/about/Services';
import History from '@/components/about/History';
import Image from 'next/image';

export default function AboutPage() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Header />
      <Container maxWidth="xl" sx={{ px: { xs: '1rem', md: '2.5rem' }, pt: { xs: '1.5rem', md: '3.75rem' }, pb: { xs: 5, sm: 6, md: 7.5 } }}>
        <Box sx={{ mx: 'auto' }}>
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: { xs: '2.25rem', md: '3.375rem' },
                lineHeight: { xs: '2.75rem', md: '4rem' },
                color: '#262626',
                mb: { xs: 2, md: 3 },
              }}
            >
              About us
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: { xs: 16, sm: 24, md: 34 },
                lineHeight: { xs: '24px', sm: '32px', md: '42px' },
                color: '#262626',
                mb: { xs: 0.5, md: 1 },
              }}
            >
              Our story
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: { xs: 14, sm: 15, md: 16 },
                lineHeight: { xs: '18px', sm: '21px', md: '24px' },
                letterSpacing: '0.02em',
                color: '#000000',
                mb: { xs: '26px', md: 4 },
              }}
            >
              For over 20 years, messe.ae has been a trusted <b>exhibition stand designer in Dubai</b>, delivering turnkey solutions across Europe and the Middle East. As part of Expoglobal Group — Nook (custom furniture), 5D (stands in Europe), messe.ae (stands in the Middle East), and Hütt (modular homes) — we offer tailored solutions for different industries. Recognized among top exhibition design companies in Dubai, we create high-quality exhibition stands for Gulfood, The Big 5, Arab Health, and more, ensuring a seamless, at every trade show.
            </Typography>
          </Box>
          <Box sx={{ py: { xs: 0, md: '1.875rem' }, mb: { xs: '2.5rem', md: '5.625rem' } }}>
            <History />
          </Box>
          
          <Services />
          <Card
            sx={{
              borderRadius: 1,
              backgroundColor: '#F5F5F5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              p: {md: 3, xs: 1.5},
              gap: { xs: 1, md: 6 },
              mt: {md: 7.5, xs: 5},
              boxShadow: 'none',
            }}
          >
            <Image
              width={isMd ? 40 : 72}
              height={isMd ? 40 : 72}
              src='about/manifestos.svg'
              alt='manifestos'
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: 0, md: 1.5 }
              }}
            >
              <Typography
                variant='h5'
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: { xs: 16, md: 24 },
                  lineHeight: { xs: '24px', md: '28px' },
                  color: '#262626',
                }}
              >Ethical business manifestos</Typography>
              <Link 
                href="/manifestos" 
                sx={{ 
                  textDecoration: 'none',
                  p: { xs: 0, md: 0.5 },
                  py: { xs: 0.5, md: 0 },
                }}>
                <Typography
                  variant='body1'
                  sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: { xs: 12, md: 16 },
                    lineHeight: { xs: '16px', md: '24px' },
                    letterSpacing: '0.02em',
                    color: '#656CAF',
                  }}
                >Learn more &gt;</Typography>
              </Link>
            </Box>
          </Card>
        </Box>
      </Container>

      <FooterSection />
    </Box>
  );
}
