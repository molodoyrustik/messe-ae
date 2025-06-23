'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { Download } from '@mui/icons-material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';

// Manifesto documents data based on Figma design
const manifestos = [
  {
    id: 1,
    title: 'Quality Policy',
    description: 'Our comprehensive quality management system and commitment to excellence in all our services.',
    downloadUrl: '/documents/quality-policy.pdf',
  },
  {
    id: 2,
    title: 'Health and Safety Policy',
    description: 'Our dedication to maintaining the highest standards of health and safety in all our operations.',
    downloadUrl: '/documents/health-safety-policy.pdf',
  },
  {
    id: 3,
    title: 'Environmental Policy',
    description: 'Our commitment to environmental responsibility and sustainable business practices.',
    downloadUrl: '/documents/environmental-policy.pdf',
  },
  {
    id: 4,
    title: 'Code of Conduct',
    description: 'The ethical principles and professional standards that guide our business operations.',
    downloadUrl: '/documents/code-of-conduct.pdf',
  },
  {
    id: 5,
    title: 'Environment Audit',
    description: 'Regular environmental assessments and our commitment to continuous improvement.',
    downloadUrl: '/documents/environment-audit.pdf',
  },
  {
    id: 6,
    title: 'Corporate Social Responsibility',
    description: 'Our initiatives and commitments to giving back to the community and society.',
    downloadUrl: '/documents/csr-policy.pdf',
  },
];

// Manifesto Card Component
const ManifestoCard = ({ manifesto }: { manifesto: typeof manifestos[0] }) => {
  const handleDownload = () => {
    // In a real application, this would trigger the actual download
    console.log(`Downloading: ${manifesto.title}`);
    // window.open(manifesto.downloadUrl, '_blank');
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        p: 4,
        border: '2px solid #A2A9D0',
        borderRadius: 2,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 0 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: 24,
            lineHeight: '28px',
            letterSpacing: '0.01em',
            color: '#262626',
            mb: 3,
          }}
        >
          {manifesto.title}
        </Typography>
        
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '24px',
            letterSpacing: '0.02em',
            color: '#262626',
            mb: 3,
            flexGrow: 1,
          }}
        >
          {manifesto.description}
        </Typography>

        <Button
          variant="text"
          onClick={handleDownload}
          startIcon={<Download sx={{ fontSize: 18 }} />}
          sx={{
            color: '#656CAF',
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '24px',
            letterSpacing: '0.02em',
            textTransform: 'none',
            p: 0,
            justifyContent: 'flex-start',
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#4C53A2',
            },
          }}
        >
          Download
        </Button>
      </CardContent>
    </Card>
  );
};

export default function ManifestosPage() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Header />
      
      {/* Main Content */}
      <Container maxWidth="xl" sx={{ pt: { xs: 12, md: 20 }, pb: 8 }}>
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
              Ethical business manifestos
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: 16,
                lineHeight: '24px',
                letterSpacing: '0.02em',
                color: '#000000',
                maxWidth: 1359,
                mb: 4,
              }}
            >
              At messe.ae, we are guided by strong ethical values in everything we do. 
              We hold ourselves accountable to the highest standards of integrity, fairness, 
              and responsibility — towards people, partners, and the planet. Ethical conduct 
              is not just a principle for us, it is the foundation of every project we deliver.
            </Typography>
          </Box>

          {/* Manifestos Grid */}
          <Grid container spacing={4}>
            {manifestos.map((manifesto) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={manifesto.id}>
                <ManifestoCard manifesto={manifesto} />
              </Grid>
            ))}
          </Grid>

          {/* Additional Information */}
          <Box sx={{ mt: 8, p: 4, backgroundColor: '#F8F9FF', borderRadius: 2 }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: 32,
                lineHeight: '40px',
                color: '#4C53A2',
                mb: 3,
                textAlign: 'center',
              }}
            >
              Our Commitment to Excellence
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: 16,
                lineHeight: '24px',
                letterSpacing: '0.02em',
                color: '#262626',
                textAlign: 'center',
                maxWidth: 800,
                mx: 'auto',
              }}
            >
              These documents represent our unwavering commitment to maintaining the highest 
              standards in all aspects of our business. They serve as our guide for ethical 
              decision-making and ensure that we continue to deliver exceptional value to our 
              clients while contributing positively to our community and environment.
            </Typography>
          </Box>

          {/* Contact Section */}
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: 24,
                lineHeight: '28px',
                color: '#262626',
                mb: 2,
              }}
            >
              Questions about our policies?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: 16,
                lineHeight: '24px',
                letterSpacing: '0.02em',
                color: '#7B7B7B',
                mb: 3,
              }}
            >
              Contact our team for more information about our ethical business practices.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#656CAF',
                color: '#FFFFFF',
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: 16,
                lineHeight: '24px',
                letterSpacing: '0.02em',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
                '&:hover': {
                  backgroundColor: '#4C53A2',
                },
              }}
            >
              Contact Us
            </Button>
          </Box>

        </Box>
      </Container>

      <FooterSection />
    </Box>
  );
}
