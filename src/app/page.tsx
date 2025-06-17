'use client';

import { Container, Typography, Box, Button, Stack, Chip, Grid } from '@mui/material';
import { Palette, TextFields, SmartButton, Input, Label, Navigation } from '@mui/icons-material';
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
            Design System Components
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Palette sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
                <Typography variant="subtitle1" fontWeight={600}>
                  Color Palette
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  WCAG compliant colors extracted from Figma
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <TextFields sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
                <Typography variant="subtitle1" fontWeight={600}>
                  Typography System
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Roboto-based type scale with proper hierarchy
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <SmartButton sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
                <Typography variant="subtitle1" fontWeight={600}>
                  Button Components
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Three variants with consistent states and sizing
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Input sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
                <Typography variant="subtitle1" fontWeight={600}>
                  Form Inputs
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Text fields with floating labels and states
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Label sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
                <Typography variant="subtitle1" fontWeight={600}>
                  Chips
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Interactive chips for filtering and selection
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Navigation sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
                <Typography variant="subtitle1" fontWeight={600}>
                  Menu Items
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Navigation elements with underline indicators
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
