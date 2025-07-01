'use client';

import { Box, Container, Typography } from '@mui/material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';

const PrivacyPolicyPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Header />
      <Container maxWidth="xl" sx={{ pt: { xs: '1.5rem', md: '3.75rem' }, pb: '8rem', px: { xs: '1rem', md: '2.5rem' } }}>
          {/* Content Sections */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '1.5rem', md: '1.5rem' } }}>
            {/* Introduction */}
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
                Introduction
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
                Messe.ae ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website messe.ae, use our services, or engage with us in other ways.
              </Typography>
            </Box>

            {/* Information We Collect */}
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
                Information We Collect
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
                We collect information you provide directly to us, such as when you:
                <br />
                <br />
                • Fill out our contact form
                <br />
                • Request information about our services
                <br />
                • Subscribe to our newsletter
                <br />
                • Communicate with us via email or phone
              </Typography>
            </Box>

            {/* How We Use Your Information */}
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
                How We Use Your Information
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
                We use the information we collect to:
                <br />
                <br />
                • Provide, operate, and maintain our services
                <br />
                • Process and complete transactions
                <br />
                • Send you technical notices and support messages
                <br />
                • Respond to your comments and questions
                <br />
                • Send you marketing communications (with your consent)
              </Typography>
            </Box>

            {/* Data Security */}
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
                Data Security
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
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </Typography>
            </Box>

            {/* Your Rights */}
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
                Your Rights
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
                You have the right to:
                <br />
                <br />
                • Access your personal information
                <br />
                • Correct inaccurate data
                <br />
                • Request deletion of your data
                <br />
                • Object to processing of your data
                <br />
                • Withdraw consent at any time
              </Typography>
            </Box>

            {/* Contact Us */}
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
                Contact Us
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
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                <br />
                <br />
                Email: hello@messe.ae
                <br />
                Phone: +971 4 548 5887
                <br />
                <br />
                Address: UAE, Dubai, Dubai Industrial City, KJ Autopart complex, Office building, ground floor, left wing. PO box 118995
              </Typography>
            </Box>
          </Box>
      </Container>
      <FooterSection />
    </Box>
  );
};

export default PrivacyPolicyPage;