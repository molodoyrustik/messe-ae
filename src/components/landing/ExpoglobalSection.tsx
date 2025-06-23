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
        py: { xs: 6, md: 8 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: '1rem', md: '2.5rem' } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 4,
            alignItems: 'flex-start',
            flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
          {/* Expoglobal Logo */}
          <Box
            sx={{
              width: { xs: '100%', sm: '320px', lg: '320px' },
              height: { xs: '200px', sm: '144px' },
              position: 'relative',
              overflow: 'hidden',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
          <Stack spacing={1.25} sx={{ flex: 1, maxWidth: { xs: '100%', lg: '1012px' } }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: '0.02em',
                color: '#000000',
                textAlign: 'justify',
              }}
            >
              Messe.ae is part of{' '}
              <Box 
                component={Link}
                href="#"
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
                href="#"
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
                href="#"
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
                href="#"
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
              endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
              sx={{
                justifyContent: 'flex-start',
                px: 0.625,
                py: 0.5,
                height: 32,
                fontSize: 16,
                fontWeight: 400,
                letterSpacing: '0.02em',
                color: '#656CAF',
                textTransform: 'none',
                alignSelf: 'flex-start',
                
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#4C53A2',
                  '& .MuiSvgIcon-root': {
                    color: '#4C53A2',
                  },
                },
                
                '& .MuiButton-endIcon': {
                  ml: 1,
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