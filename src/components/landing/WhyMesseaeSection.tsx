'use client';

import {
  Box,
  Container,
  Typography,
} from '@mui/material';

const WhyMesseaeSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        minHeight: { xs: 300, md: 400 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `
          linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 82.25%),
          url('/parallax-bg.jpg')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: { md: 'fixed' },
        backgroundRepeat: 'no-repeat',
        color: 'white',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 82.25%)',
          zIndex: 1,
        }}
      />
      
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 2,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: 36, md: 54 },
            fontWeight: 700,
            lineHeight: 1.11,
            letterSpacing: '0.01em',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          Why messe.ae only?
        </Typography>
      </Container>
    </Box>
  );
};

export default WhyMesseaeSection; 