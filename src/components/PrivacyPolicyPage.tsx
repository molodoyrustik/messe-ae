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
          <Box sx={{ mb: '6rem' }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: { xs: '2.25rem', md: '3.375rem' },
                lineHeight: '3.75rem',
                color: '#262626',
                mb: '3rem',
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: '1.75rem',
                letterSpacing: '0.02em',
                color: '#7B7B7B',
              }}
            >
              Last updated: January 2025
            </Typography>
          </Box>

          {/* Content Sections */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  lineHeight: '2.5rem',
                  color: '#262626',
                  mb: '2rem',
                }}
              >
                1. Introduction
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  letterSpacing: '0.02em',
                  color: '#000000',
                }}
              >
                Messe.ae ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website messe.ae, use our services, or engage with us in other ways.
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  lineHeight: '2.5rem',
                  color: '#262626',
                  mb: '2rem',
                }}
              >
                2. Information We Collect
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  letterSpacing: '0.02em',
                  color: '#000000',
                  mb: '2rem',
                }}
              >
                We collect information you provide directly to us, such as when you:
              </Typography>
              <Box component="ul" sx={{ pl: '3rem', m: 0 }}>
                <li>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: '1rem',
                      lineHeight: '1.5rem',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    Fill out our contact form
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: '1rem',
                      lineHeight: '1.5rem',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    Request information about our services
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: '1rem',
                      lineHeight: '1.5rem',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    Subscribe to our newsletter
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: '1rem',
                      lineHeight: '1.5rem',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    Communicate with us via email or phone
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
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  lineHeight: '2.5rem',
                  color: '#262626',
                  mb: '2rem',
                }}
              >
                3. How We Use Your Information
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  letterSpacing: '0.02em',
                  color: '#000000',
                  mb: '2rem',
                }}
              >
                We use the information we collect to:
              </Typography>
              <Box component="ul" sx={{ pl: '3rem', m: 0 }}>
                <li>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: '1rem',
                      lineHeight: '1.5rem',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    Provide, operate, and maintain our services
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: '1rem',
                      lineHeight: '1.5rem',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    Process and complete transactions
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: '1rem',
                      lineHeight: '1.5rem',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    Send you technical notices and support messages
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: '1rem',
                      lineHeight: '1.5rem',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    Respond to your comments and questions
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: '1rem',
                      lineHeight: '1.5rem',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    Send you marketing communications (with your consent)
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
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  lineHeight: '2.5rem',
                  color: '#262626',
                  mb: '2rem',
                }}
              >
                4. Data Security
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  letterSpacing: '0.02em',
                  color: '#000000',
                }}
              >
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  lineHeight: '2.5rem',
                  color: '#262626',
                  mb: '2rem',
                }}
              >
                5. Your Rights
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  letterSpacing: '0.02em',
                  color: '#000000',
                  mb: '2rem',
                }}
              >
                You have the right to:
              </Typography>
              <Box component="ul" sx={{ pl: '3rem', m: 0 }}>
                <li>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: '1rem',
                      lineHeight: '1.5rem',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    Access your personal information
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: '1rem',
                      lineHeight: '1.5rem',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    Correct inaccurate data
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: '1rem',
                      lineHeight: '1.5rem',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    Request deletion of your data
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: '1rem',
                      lineHeight: '1.5rem',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    Object to processing of your data
                  </Typography>
                </li>
                <li>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: '1rem',
                      lineHeight: '1.5rem',
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    Withdraw consent at any time
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
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  lineHeight: '2.5rem',
                  color: '#262626',
                  mb: '2rem',
                }}
              >
                6. Contact Us
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  letterSpacing: '0.02em',
                  color: '#000000',
                  mb: '2rem',
                }}
              >
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </Typography>
              <Box sx={{ pl: 2 }}>
                <Typography
                  sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: '1rem',
                    lineHeight: '1.5rem',
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
                    fontSize: '1rem',
                    lineHeight: '1.5rem',
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
                    fontSize: '1rem',
                    lineHeight: '1.5rem',
                    letterSpacing: '0.02em',
                    color: '#000000',
                    mt: '1rem',
                  }}
                >
                  Address: UAE, Dubai, Dubai Industrial City, KJ Autopart complex, Office building, ground floor, left wing. PO box 118995
                </Typography>
              </Box>
            </Box>
          </Box>
      </Container>
      <FooterSection />
    </Box>
  );
};

export default PrivacyPolicyPage;