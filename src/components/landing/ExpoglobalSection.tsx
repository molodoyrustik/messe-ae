'use client';

import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import Image from 'next/image';

const ExpoglobalSection = () => {
  return (
    <Box
      sx={{
        pt: { xs: 6, md: 0 },
        pb: { xs: 6, md: '3.75rem' },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: '1rem', md: '2.5rem' } }}>
        <Box
          sx={{
            display: { xs: 'flex', md: 'grid' },
            gridTemplateColumns: { md: '1fr 3fr' },
            gap: { xs: 4, md: '20px' },
            alignItems: 'flex-start',
            flexDirection: { xs: 'column', md: 'unset' },
            maxWidth: '1360px',
            mx: 'auto',
          }}
        >
          {/* Expoglobal Logo */}
          <Box
            sx={{
              width: { xs: '100%', sm: '320px', md: '100%' },
              maxWidth: { md: '320px' },
              height: { xs: '80px', sm: '144px' },
              position: 'relative',
              overflow: 'hidden',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'flex-start', sm: 'center' },
            }}
          >
            <Image
              src="/expoglobal-branding.svg"
              alt="Expoglobal Group"
              width={320}
              height={144}
              style={{
                objectFit: 'contain',
                width: '100%',
                height: '100%',
              }}
            />
          </Box>

          {/* Content */}
          <Stack spacing={1.25} sx={{ flex: 1, pt: { xs: 0, md: '60px' } }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '12px', md: 16 },
                fontWeight: 400,
                lineHeight: { xs: '16px', md: 1.5 },
                letterSpacing: { xs: '0.04em', md: '0.02em' },
                color: '#000000',
                textAlign: 'justify',
              }}
            >
              Messe.ae is part of{' '}
              <Box 
                component={Link}
                href="https://expoglobal.group/#about_us"
                sx={{
                  color: '#656CAF',
                  fontWeight: 700,
                  textDecoration: 'underline',
                  textDecorationColor: '#656CAF',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#4C53A2',
                    textDecorationColor: '#4C53A2',
                  },
                }}
              >
                Expoglobal Group
              </Box>
              , an international holding based in Belgium, specializing in B2B and B2C markets with customized solutions in the event industry, personalized furniture, and mobile homes. The group includes{' '}
              <Box 
                component={Link}
                href="https://nook-me.com/"
                sx={{
                  color: '#656CAF',
                  fontWeight: 700,
                  textDecoration: 'underline',
                  textDecorationColor: '#656CAF',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#4C53A2',
                    textDecorationColor: '#4C53A2',
                  },
                }}
              >
                Nook
              </Box>
              {' '}(customized furniture),{' '}
              <Box 
                component={Link}
                href="https://fived.be/#solutions"
                sx={{
                  color: '#656CAF',
                  fontWeight: 700,
                  textDecoration: 'underline',
                  textDecorationColor: '#656CAF',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#4C53A2',
                    textDecorationColor: '#4C53A2',
                  },
                }}
              >
                5D
              </Box>
              {' '}(exhibition stands in Europe), messe.ae (exhibition stands in the Middle East), and{' '}
              <Box 
                component={Link}
                href="https://huett.be/"
                sx={{
                  color: '#656CAF',
                  fontWeight: 700,
                  textDecoration: 'underline',
                  textDecorationColor: '#656CAF',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#4C53A2',
                    textDecorationColor: '#4C53A2',
                  },
                }}
              >
                Hütt
              </Box>
              {' '}(mobile homes).{' '}
              <Box 
                component="span"
                sx={{
                  color: '#656CAF',
                  fontWeight: 700,
                }}
              >
                Messe.ae
              </Box>
              {' '}offers European-quality{' '}
              <Box 
                component="span"
                sx={{
                  fontWeight: 700,
                }}
              >
                exhibition stand design in Dubai
              </Box>
              , acting as one of the leading{' '}
              <Box 
                component="span"
                sx={{
                  fontWeight: 700,
                }}
              >
                exhibition stand contractors in UAE
              </Box>
              . We create innovative expo stand designs, exhibit display stands, and deliver seamless execution for every stand in exhibition.
            </Typography>

            <Button
              variant="text"
              endIcon={<ArrowForwardIcon sx={{ fontSize: { xs: '12px', md: 16 } }} />}
              sx={{
                justifyContent: 'flex-start',
                px: { xs: 0.5, md: 0.625 },
                py: { xs: 0.25, md: 0.5 },
                height: { xs: '20px', md: 32 },
                fontSize: { xs: '12px', md: 16 },
                fontWeight: 400,
                letterSpacing: { xs: '0.04em', md: '0.02em' },
                color: '#656CAF',
                textTransform: 'none',
                alignSelf: 'flex-start',
                minWidth: { xs: '120px', md: '150px' },
                
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#4C53A2',
                  '& .MuiSvgIcon-root': {
                    color: '#4C53A2',
                  },
                },
                
                '& .MuiButton-endIcon': {
                  ml: { xs: 0.5, md: 1 },
                },
              }}
            >
              Get to Know Us
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ExpoglobalSection;