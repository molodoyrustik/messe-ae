'use client';

import { Box, Container, Typography, Link } from '@mui/material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';

const CookiePolicyPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Header />
      <Container maxWidth="xl" sx={{ pt: { xs: '1.5rem', md: '3.75rem' }, pb: '8rem', px: { xs: '1rem', md: '2.5rem' } }}>
          {/* Content Sections */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '1.5rem', md: '1.5rem' } }}>
            {/* What Are Cookies? */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '0.25rem', md: '0.5rem' } }}>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: { xs: '1rem', md: '2.125rem' },
                  lineHeight: { xs: '1.5rem', md: '2.625rem' },
                  letterSpacing: { xs: '0.32px', md: '0.34px' },
                  color: '#262626',
                }}
              >
                What Are Cookies?
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  lineHeight: { xs: '1.125rem', md: '1.5rem' },
                  letterSpacing: { xs: '0.28px', md: '0.32px' },
                  color: '#000000',
                }}
              >
                Cookies are small text files stored on your computer, mobile phone, or other device when you visit a website. These files enable websites to recognize users on subsequent visits and facilitate various functionalities. Cookies play a crucial role in enhancing your internet experience by remembering preferences, user IDs, and shopping basket contents, among other functions.
                <br />
                <br />
                While cookies primarily collect anonymous data to improve user experience, some may track browsing patterns and approximate geographical locations. It's important to note that cookies do not contain personally identifiable information.
              </Typography>
            </Box>

            {/* How Do We Use Cookies? */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '0.25rem', md: '0.5rem' } }}>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: { xs: '1rem', md: '2.125rem' },
                  lineHeight: { xs: '1.5rem', md: '2.625rem' },
                  letterSpacing: { xs: '0.32px', md: '0.34px' },
                  color: '#262626',
                }}
              >
                How Do We Use Cookies?
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  lineHeight: { xs: '1.125rem', md: '1.5rem' },
                  letterSpacing: { xs: '0.28px', md: '0.32px' },
                  color: '#000000',
                }}
              >
                We utilize cookies for multiple purposes, including analyzing website performance and delivering personalized content to users. These cookies help us understand user behavior, improve our services, and tailor your experience on the site.
                <br />
                <br />
                We prioritize user privacy and use cookies responsibly to enhance our services. Disabling cookies may adversely affect your experience on the Website.
              </Typography>
            </Box>

            {/* Types of Cookies We Use */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '0.25rem', md: '0.5rem' } }}>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: { xs: '1rem', md: '2.125rem' },
                  lineHeight: { xs: '1.5rem', md: '2.625rem' },
                  letterSpacing: { xs: '0.32px', md: '0.34px' },
                  color: '#262626',
                }}
              >
                Types of Cookies We Use
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  lineHeight: { xs: '1.125rem', md: '1.5rem' },
                  letterSpacing: { xs: '0.28px', md: '0.32px' },
                  color: '#000000',
                }}
              >
                Cookies can be categorized into two main types: persistent cookies and session cookies. Additionally, cookies serve different functions such as strictly necessary, performance, functionality, and advertising/targeting.
                <br />
                <br />
                <strong>Strictly Necessary Cookies:</strong> Essential for basic website functionalities like registration and shopping baskets. These cookies do not gather information for marketing purposes.
                <br />
                <strong>Performance Cookies:</strong> Collect anonymous data for statistical analysis to improve user experience.
                <br />
                <strong>Functionality Cookies:</strong> Customize website appearance and provide personalized services based on user preferences.
                <br />
                <strong>Advertising and Targeting Cookies:</strong> Deliver relevant advertisements and track ad campaign effectiveness without identifying individuals.
              </Typography>
            </Box>

            {/* How to Control Your Cookies */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '0.25rem', md: '0.5rem' } }}>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: { xs: '1rem', md: '2.125rem' },
                  lineHeight: { xs: '1.5rem', md: '2.625rem' },
                  letterSpacing: { xs: '0.32px', md: '0.34px' },
                  color: '#262626',
                }}
              >
                How to Control Your Cookies
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  lineHeight: { xs: '1.125rem', md: '1.5rem' },
                  letterSpacing: { xs: '0.28px', md: '0.32px' },
                  color: '#000000',
                }}
              >
                Although most browsers accept cookies automatically, you have the option to manage your cookie preferences. You can delete cookies, block third-party cookies, or adjust browser settings to notify you when a cookie is issued. However, disabling cookies may result in reduced website functionality.
                <br />
                <br />
                For more information on managing cookies, refer to the specific settings in your browser. Additionally, you can visit Youronlinechoices.com to opt out of targeted advertising cookies.
              </Typography>
            </Box>

            {/* User Agreement */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '0.25rem', md: '0.5rem' } }}>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: { xs: '1rem', md: '2.125rem' },
                  lineHeight: { xs: '1.5rem', md: '2.625rem' },
                  letterSpacing: { xs: '0.32px', md: '0.34px' },
                  color: '#262626',
                }}
              >
                User Agreement
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  lineHeight: { xs: '1.125rem', md: '1.5rem' },
                  letterSpacing: { xs: '0.28px', md: '0.32px' },
                  color: '#000000',
                }}
              >
                By continuing to use our site, you consent to the placement of cookies on your device. Please note that disabling cookies may impact certain website features, such as leaving comments. We strive to provide you with the best possible experience on{' '}
                <Link
                  href="/"
                  sx={{
                    color: '#656CAF',
                    fontWeight: 700,
                    textDecoration: 'underline',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  messe.ae
                </Link>
                , and cookies play a vital role in achieving this goal.
              </Typography>
            </Box>
          </Box>
      </Container>
      <FooterSection />
    </Box>
  );
};

export default CookiePolicyPage;