'use client';

import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
} from '@mui/material';

const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#000',
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 1) 84%), url('/hero-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
      }}
    >
      {/* Background overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 1) 84%)',
          zIndex: 1,
        }}
      />
      
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 2, 
          color: 'white',
          py: 8,
        }}
      >
        <Stack spacing={4} alignItems="flex-start" maxWidth="800px">
          {/* Main Title */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: 36, md: 54 },
              fontWeight: 700,
              lineHeight: 1.11,
              letterSpacing: '0.01em',
              color: 'white',
            }}
          >
            Exhibition Stand Builder & Designer in UAE and around the world
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: 18, md: 34 },
              fontWeight: 400,
              lineHeight: 1.24,
              letterSpacing: '0.01em',
              color: 'white',
              maxWidth: '600px',
            }}
          >
            Your great exhibition stand design starts here.
            <br />
            Fill in the form, and we will handle the rest.
          </Typography>

          {/* Years Section */}
          <Stack direction="row" alignItems="center" spacing={2} sx={{ my: 4 }}>
            <Typography
              sx={{
                fontSize: { xs: 80, md: 120 },
                fontWeight: 700,
                lineHeight: 1.17,
                color: 'white',
              }}
            >
              20
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 18, md: 34 },
                fontWeight: 400,
                lineHeight: 1.24,
                letterSpacing: '0.01em',
                color: 'white',
              }}
            >
              years of award winning expertise
            </Typography>
          </Stack>

          {/* CTA Button */}
          <Button
            variant="contained"
            size="large"
            sx={{
              minWidth: 316,
              height: 48,
              px: 3,
              py: 1,
              backgroundColor: 'primary.400',
              borderRadius: 1,
              fontSize: 24,
              fontWeight: 400,
              letterSpacing: '0.01em',
              textTransform: 'none',
              boxShadow: theme.customShadows?.button || '0px 3px 1px -2px rgba(0,0,0,0.20), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
              
              '&:hover': {
                backgroundColor: 'primary.500',
                boxShadow: theme.customShadows?.buttonHover,
              },
            }}
          >
            Request a proposal
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection; 