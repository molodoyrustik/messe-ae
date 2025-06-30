'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';
import DownloadIcon from '@/components/icons/DownloadIcon';

const manifestos = [
  { title: 'Quality Policy' },
  { title: 'Health and safety Policy' },
  { title: 'Environment Policy' },
  { title: 'Worker welfare commitment' },
  { title: 'Anti-corruption Policy' },
  { title: 'Environment Audit' },
];


export default function ManifestosPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <Header />
      
      <Box sx={{ pt: { xs: '3.75rem', md: '3.75rem' }, pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: '2.5rem' } }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '24px', md: '48px' },
              lineHeight: { xs: '28px', md: '60px' },
              fontWeight: 700,
              mb: { xs: '48px', md: '72px' },
              color: 'grey.800'
            }}
          >
            Ethical business manifestos
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              mb: { xs: '24px', md: '96px' },
              color: 'grey.900',
              fontSize: { xs: '14px', md: '16px' },
              lineHeight: { xs: '16px', md: '24px' },
              letterSpacing: '0.02em'
            }}
          >
            At messe.ae, we are guided by strong ethical values in everything we do. We hold ourselves accountable to the highest standards of integrity, fairness, and responsibility — towards people, partners, and the planet. Ethical conduct is not just a principle for us, it is the foundation of every project we deliver.
          </Typography>
          
          {isMobile ? (
            // Mobile layout - single column
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {manifestos.map((manifesto, index) => (
                <Card
                  key={index}
                  sx={{
                    p: '12px',
                    border: '1px solid',
                    borderColor: 'primary.200',
                    boxShadow: 'none',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    width: '100%'
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: 'grey.800',
                      fontSize: '16px',
                      lineHeight: '24px',
                      letterSpacing: '0.025em'
                    }}
                  >
                    {manifesto.title}
                  </Typography>
                  
                  <Button
                    variant="text"
                    endIcon={<DownloadIcon />}
                    sx={{
                      justifyContent: 'flex-start',
                      p: 0,
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '0.04em',
                      color: 'primary.main',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: 'transparent'
                      },
                      '& .MuiButton-endIcon': {
                        ml: '4px',
                        '& svg': {
                          width: '16px',
                          height: '16px'
                        }
                      }
                    }}
                  >
                    Download
                  </Button>
                </Card>
              ))}
            </Box>
          ) : (
            // Desktop layout - 2 rows x 3 columns with CSS Grid
            <Box 
              sx={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 27rem))',
                gap: 4,
                justifyContent: 'start'
              }}
            >
              {manifestos.map((manifesto, index) => (
                <Card
                  key={index}
                  sx={{
                    p: '1.5rem 2rem',
                    border: '2px solid',
                    borderColor: 'primary.200',
                    boxShadow: 'none',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                    width: '27rem',
                    flexShrink: 0
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: 'grey.800',
                      fontSize: '24px',
                      lineHeight: '28px',
                      letterSpacing: '0.025em'
                    }}
                  >
                    {manifesto.title}
                  </Typography>
                  
                  <Button
                    variant="text"
                    endIcon={<DownloadIcon />}
                    sx={{
                      justifyContent: 'flex-start',
                      p: '4px 5px',
                      height: '32px',
                      fontSize: '16px',
                      lineHeight: '24px',
                      letterSpacing: '0.025em',
                      color: 'primary.main',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: 'transparent'
                      },
                      '& .MuiButton-endIcon': {
                        ml: '8px',
                        '& svg': {
                          width: '18px',
                          height: '18px'
                        }
                      }
                    }}
                  >
                    Download
                  </Button>
                </Card>
              ))}
            </Box>
          )}
        </Container>
      </Box>
      
      <FooterSection />
    </>
  );
}
