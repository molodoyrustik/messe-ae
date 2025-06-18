'use client';

import {
  Box,
  Typography,
  Button,
} from '@mui/material';

const HeroSection = () => {

  return (
    <Box
      sx={{
        width: '1440px',
        height: '800px',
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 1) 84.13%)',
        overflow: 'hidden',
        mx: 'auto', // Center the container
        maxWidth: '100vw', // Ensure it doesn't exceed viewport width
      }}
    >
      {/* Main Title */}
      <Typography
        sx={{
          position: 'absolute',
          left: '40px',
          top: '367px',
          width: '1084px',
          fontSize: '54px',
          fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
          fontWeight: 700,
          lineHeight: '60px',
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
          left: '40px',
          top: '511px',
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: 'column',
        }}
      >
        <Typography
          component="span"
          sx={{
            fontSize: '34px',
            fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
            fontWeight: 400,
            lineHeight: '42px',
            letterSpacing: '-0.025em',
            color: '#FFFFFF',
          }}
        >
          Your great{' '}
          <Typography
            component="span"
            sx={{
              fontSize: '34px',
              fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
              fontWeight: 700,
              lineHeight: '42px',
              letterSpacing: '-0.025em',
              color: '#FFFFFF',
            }}
          >
            exhibition stand design
          </Typography>
          {' '}starts here.
        </Typography>
        <Typography
          component="span"
          sx={{
            fontSize: '34px',
            fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
            fontWeight: 700,
            lineHeight: '42px',
            letterSpacing: '-0.025em',
            color: '#656CAF',
            mt: 1,
          }}
        >
          Fill in
          <Typography
            component="span"
            sx={{
              fontSize: '34px',
              fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
              fontWeight: 400,
              lineHeight: '42px',
              letterSpacing: '-0.025em',
              color: '#FFFFFF',
            }}
          >
            {' '}the{' '}
          </Typography>
          form
          <Typography
            component="span"
            sx={{
              fontSize: '34px',
              fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
              fontWeight: 400,
              lineHeight: '42px',
              letterSpacing: '-0.025em',
              color: '#FFFFFF',
            }}
          >
            , and we will handle the rest.
          </Typography>
        </Typography>
      </Box>

      {/* "20" Large Number */}
      <Typography
        sx={{
          position: 'absolute',
          left: '40px',
          top: '619px',
          fontSize: '120px',
          fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
          fontWeight: 700,
          lineHeight: '140px',
          color: '#FFFFFF',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        20
      </Typography>

      {/* "years of award winning expertise" */}
      <Typography
        sx={{
          position: 'absolute',
          left: '190px',
          top: '669px',
          fontSize: '34px',
          fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
          fontWeight: 400,
          lineHeight: '42px',
          letterSpacing: '-0.025em',
          color: '#FFFFFF',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        years of award winning expertise
      </Typography>

      {/* CTA Button */}
      <Box
        sx={{
          position: 'absolute',
          left: '1084px',
          top: '529px',
          width: '316px',
          height: '48px',
          display: 'flex',
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
              fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif',
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
    </Box>
  );
};

export default HeroSection; 