'use client';

import { Container, Typography, Box, Button, Stack, Chip } from '@mui/material';
import { Palette, TextFields, SmartButton } from '@mui/icons-material';
import Link from 'next/link';

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
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Welcome to Messe AI
        </Typography>
        <Typography variant="h5" component="h2" color="text.secondary" align="center">
          Your intelligent exhibition companion
        </Typography>

        <Chip
          label="Design System Implemented"
          variant="filled"
          sx={{ mb: 2 }}
        />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
          <Button
            variant="contained"
            size="large"
            component={Link}
            href="/ui-kit"
          >
            Explore UI Kit
          </Button>
          <Button variant="outlined" size="large">
            Get Started
          </Button>
        </Stack>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Design System Features
          </Typography>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            sx={{ mt: 3 }}
            alignItems="center"
          >
            <Box sx={{ textAlign: 'center' }}>
              <Palette sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
              <Typography variant="subtitle1" fontWeight={600}>
                Color Palette
              </Typography>
              <Typography variant="body2" color="text.secondary">
                WCAG compliant colors extracted from Figma
              </Typography>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
              <TextFields sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
              <Typography variant="subtitle1" fontWeight={600}>
                Typography System
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Roboto-based type scale with proper hierarchy
              </Typography>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
              <SmartButton sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
              <Typography variant="subtitle1" fontWeight={600}>
                Button Components
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Three variants with consistent states and sizing
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
