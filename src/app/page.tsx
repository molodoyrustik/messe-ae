'use client';

import { Container, Typography, Box, Button } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          py: 4,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Messe AI
        </Typography>
        <Typography variant="h5" component="h2" color="text.secondary" align="center">
          Your intelligent exhibition companion
        </Typography>
        <Button variant="contained" size="large">
          Get Started
        </Button>
      </Box>
    </Container>
  );
}
