'use client';

import { Box, Container, Typography } from '@mui/material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';

const CookiePolicyPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Header />
      <Container maxWidth="xl" sx={{ pt: { xs: '1.5rem', md: '3.75rem' }, pb: 8 }}>
        <Box sx={{ maxWidth: 1360, mx: 'auto', px: { xs: 2, md: 5 } }}>
          {/* Page Header */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: { xs: 36, md: 54 },
                lineHeight: '60px',
                color: '#262626',
                mb: 3,
              }}
            >
              Cookie Policy
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: { xs: 16, md: 18 },
                lineHeight: '28px',
                letterSpacing: '0.02em',
                color: '#7B7B7B',
              }}
            >
              Last updated: January 2025
            </Typography>
          </Box>

          {/* Content Sections */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: { xs: 24, md: 32 },
                  lineHeight: '40px',
                  color: '#262626',
                  mb: 2,
                }}
              >
                1. What Are Cookies
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: '24px',
                  letterSpacing: '0.02em',
                  color: '#000000',
                }}
              >
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site. This Cookie Policy explains what cookies are, how we use them, and your choices regarding cookies.
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: { xs: 24, md: 32 },
                  lineHeight: '40px',
                  color: '#262626',
                  mb: 2,
                }}
              >
                2. How We Use Cookies
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: '24px',
                  letterSpacing: '0.02em',
                  color: '#000000',
                  mb: 2,
                }}
              >
                We use cookies for the following purposes:
              </Typography>
              <Box component="ul" sx={{ pl: 3, m: 0 }}>
                <li>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: '24px',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: '24px',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    <strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: '24px',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    <strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization, such as remembering your preferences.
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: '24px',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    <strong>Marketing Cookies:</strong> These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant advertisements.
                  </Typography>
                </li>
              </Box>
            </Box>

            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: { xs: 24, md: 32 },
                  lineHeight: '40px',
                  color: '#262626',
                  mb: 2,
                }}
              >
                3. Types of Cookies We Use
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 600,
                      fontSize: 18,
                      lineHeight: '24px',
                      letterSpacing: '0.02em',
                      color: '#262626',
                      mb: 1,
                    }}
                  >
                    Session Cookies
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: '24px',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    These are temporary cookies that expire when you close your browser. They are used to maintain your session while you navigate our website.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 600,
                      fontSize: 18,
                      lineHeight: '24px',
                      letterSpacing: '0.02em',
                      color: '#262626',
                      mb: 1,
                    }}
                  >
                    Persistent Cookies
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: '24px',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    These cookies remain on your device for a set period or until you delete them. They help us recognize you when you return to our website and remember your preferences.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: { xs: 24, md: 32 },
                  lineHeight: '40px',
                  color: '#262626',
                  mb: 2,
                }}
              >
                4. Third-Party Cookies
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: '24px',
                  letterSpacing: '0.02em',
                  color: '#000000',
                }}
              >
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website. These third parties may include analytics providers and advertising networks.
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: { xs: 24, md: 32 },
                  lineHeight: '40px',
                  color: '#262626',
                  mb: 2,
                }}
              >
                5. Managing Your Cookie Preferences
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: '24px',
                  letterSpacing: '0.02em',
                  color: '#000000',
                  mb: 2,
                }}
              >
                You have several options for managing cookies:
              </Typography>
              <Box component="ul" sx={{ pl: 3, m: 0 }}>
                <li>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: '24px',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    <strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies.
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: '24px',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    <strong>Cookie Consent Banner:</strong> When you first visit our website, you can choose which categories of cookies to accept through our cookie consent banner.
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: '24px',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    <strong>Opt-Out Links:</strong> Some third-party providers offer opt-out mechanisms for their cookies.
                  </Typography>
                </li>
              </Box>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: '24px',
                  letterSpacing: '0.02em',
                  color: '#000000',
                  mt: 2,
                }}
              >
                Please note that disabling certain cookies may impact the functionality of our website and your user experience.
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: { xs: 24, md: 32 },
                  lineHeight: '40px',
                  color: '#262626',
                  mb: 2,
                }}
              >
                6. Updates to This Policy
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: '24px',
                  letterSpacing: '0.02em',
                  color: '#000000',
                }}
              >
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page with a new "Last updated" date.
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: { xs: 24, md: 32 },
                  lineHeight: '40px',
                  color: '#262626',
                  mb: 2,
                }}
              >
                7. Contact Us
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: '24px',
                  letterSpacing: '0.02em',
                  color: '#000000',
                  mb: 2,
                }}
              >
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
              </Typography>
              <Box sx={{ pl: 2 }}>
                <Typography
                  sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: '24px',
                    letterSpacing: '0.02em',
                    color: '#000000',
                  }}
                >
                  Email: hello@messe.ae
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: '24px',
                    letterSpacing: '0.02em',
                    color: '#000000',
                  }}
                >
                  Phone: +971 4 548 5887
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: '24px',
                    letterSpacing: '0.02em',
                    color: '#000000',
                    mt: 1,
                  }}
                >
                  Address: UAE, Dubai, Dubai Industrial City, KJ Autopart complex, Office building, ground floor, left wing. PO box 118995
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <FooterSection />
    </Box>
  );
};

export default CookiePolicyPage;