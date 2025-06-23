'use client';

import {
  Box,
  Typography,
  Button,
  Container,
} from '@mui/material';

const HeroSection = () => {

  return (
    <Box
      sx={{
        width: '100vw',
        height: { xs: '456px', md: '800px' },
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 1) 84.13%)',
        overflow: 'hidden',
      }}
    >
      <Container 
        maxWidth="xl" 
        sx={{ 
          height: '100%',
          position: 'relative',
        }}
      >
        {/* Main Title */}
        <Typography
          sx={{
            position: 'absolute',
            left: { xs: '1rem', md: '2.5rem' },
            top: { xs: '256px', md: '367px' },
            maxWidth: { xs: '288px', md: '1084px' },
            fontSize: { xs: '24px', md: '54px' },
            fontWeight: 700,
            lineHeight: { xs: '28px', md: '60px' },
            letterSpacing: { xs: '0.01em', md: 'normal' },
            color: '#FFFFFF',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          Exhibition Stand Builder & Designer in UAE and around the world
        </Typography>

        {/* Subtitle with mixed styling */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '1rem', md: '2.5rem' },
            top: { xs: '352px', md: '511px' },
            maxWidth: { xs: '288px', md: '100%' },
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column',
          }}
        >
          <Typography
            component="div"
            sx={{
              fontSize: { xs: '12px', md: '34px' },
              fontWeight: 400,
              lineHeight: { xs: '16px', md: '42px' },
              letterSpacing: { xs: '0.04em', md: '-0.025em' },
              color: '#FFFFFF',
            }}
          >
            Your great{' '}
            <Typography
              component="span"
              sx={{
                fontSize: { xs: '12px', md: '34px' },
                fontWeight: 700,
                lineHeight: { xs: '16px', md: '42px' },
                letterSpacing: { xs: '0.04em', md: '-0.025em' },
                color: '#FFFFFF',
              }}
            >
              exhibition stand design
            </Typography>
            {' '}starts here.
            <br />
            <Typography
              component="span"
              sx={{
                fontSize: { xs: '12px', md: '34px' },
                fontWeight: 700,
                lineHeight: { xs: '16px', md: '42px' },
                letterSpacing: { xs: '0.04em', md: '-0.025em' },
                color: '#656CAF',
              }}
            >
              Fill in
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: { xs: '12px', md: '34px' },
                fontWeight: 400,
                lineHeight: { xs: '16px', md: '42px' },
                letterSpacing: { xs: '0.04em', md: '-0.025em' },
                color: '#FFFFFF',
              }}
            >
              {' '}the{' '}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: { xs: '12px', md: '34px' },
                fontWeight: 700,
                lineHeight: { xs: '16px', md: '42px' },
                letterSpacing: { xs: '0.04em', md: '-0.025em' },
                color: '#656CAF',
              }}
            >
              form
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: { xs: '12px', md: '34px' },
                fontWeight: 400,
                lineHeight: { xs: '16px', md: '42px' },
                letterSpacing: { xs: '0.04em', md: '-0.025em' },
                color: '#FFFFFF',
              }}
            >
              , and we will handle the rest.
            </Typography>
          </Typography>
        </Box>

        {/* "20" Large Number - Desktop Only */}
        <Typography
          sx={{
            position: 'absolute',
            left: { xs: '1rem', md: '2.5rem' },
            top: '619px',
            fontSize: '120px',
            fontWeight: 700,
            lineHeight: '140px',
            color: '#FFFFFF',
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-start',
          }}
        >
          20
        </Typography>

        {/* "years of award winning expertise" - Desktop Only */}
        <Typography
          sx={{
            position: 'absolute',
            left: { xs: 'calc(1rem + 150px)', md: 'calc(2.5rem + 150px)' },
            top: '669px',
            fontSize: '34px',
            fontWeight: 400,
            lineHeight: '42px',
            letterSpacing: '-0.025em',
            color: '#FFFFFF',
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-start',
          }}
        >
          years of award winning expertise
        </Typography>

        {/* CTA Button - Desktop Only */}
        <Box
          sx={{
            position: 'absolute',
            right: { xs: '1rem', md: '2.5rem' },
            top: '529px',
            width: '316px',
            height: '48px',
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: '100%',
              height: '100%',
              px: '20px',
              py: '8px',
              backgroundColor: '#656CAF',
              borderRadius: '8px',
              boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.20), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
              textTransform: 'none',
              
              '&:hover': {
                backgroundColor: '#4C53A2',
              },
            }}
          >
            <Typography
              sx={{
                fontSize: '24px',
                fontWeight: 400,
                lineHeight: '28px',
                letterSpacing: '-0.025em',
                color: '#FFFFFF',
                textAlign: 'right',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Request a proposal
            </Typography>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection; 