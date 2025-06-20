'use client';

import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
} from '@mui/material';

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
          {/* Expoglobal Logos */}
          <Box
            sx={{
              width: { xs: '100%', lg: 346 },
              height: { xs: 200, lg: 300 },
              backgroundColor: 'grey.100',
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: 'url(/expoglobal-branding.jpg)',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Typography variant="body2" color="grey.500">
              Expoglobal Branding
            </Typography>
          </Box>

          {/* Content */}
          <Stack spacing={1.25} sx={{ flex: 1, maxWidth: { xs: '100%', lg: 1012 } }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: '0.02em',
                color: 'grey.800',
                textAlign: 'justify',
              }}
            >
              Messe.ae is part of Expoglobal Group, an international holding based in Belgium, 
              specializing in B2B and B2C markets with customized solutions in the event industry, 
              personalized furniture, and mobile homes. The group includes Nook (customized furniture), 
              5D (exhibition stands in Europe), messe.ae (exhibition stands in the Middle East), 
              and Hütt (mobile homes). Messe.ae offers European-quality exhibition stand design in Dubai, 
              acting as one of the leading exhibition stand contractors in UAE. We create innovative expo 
              stand designs, exhibit display stands, and deliver seamless execution for every stand in exhibition.
            </Typography>

            <Button
              variant="text"
              endIcon={
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  →
                </Box>
              }
              sx={{
                justifyContent: 'flex-start',
                px: 0.625,
                py: 0.5,
                height: 32,
                fontSize: 16,
                fontWeight: 400,
                letterSpacing: '0.02em',
                color: 'primary.400',
                textTransform: 'none',
                
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'primary.600',
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