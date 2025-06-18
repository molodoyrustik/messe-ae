'use client';

import { Box, Container, Typography, Stack } from '@mui/material';
import Header from '@/components/Header';

export default function HeaderDemoPage() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'grey.50' }}>
      <Header />
      
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack spacing={4}>
          <Typography variant="h2" gutterBottom>
            Header Component Demo
          </Typography>
          
          <Typography variant="body1" sx={{ maxWidth: 800 }}>
            This page demonstrates the Messe.ae header component implementation based on the Figma design.
            The header features a sticky navigation bar with blur effect, social media icons, 
            navigation menu items, and a prominent call-to-action button.
          </Typography>
          
          <Box sx={{ height: 1200, backgroundColor: 'background.paper', p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>
              Scroll to see sticky header behavior
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The header will remain at the top of the page as you scroll, with a subtle blur effect
              on the background.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
} 