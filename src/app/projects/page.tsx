import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { Box, CircularProgress } from '@mui/material';
import ProjectsPageContent from './page-content';

// ISR - revalidate every 300 seconds (5 minutes) 
export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Our Projects - Exhibition Stands Portfolio | Messe.ae',
  description: 'Explore our portfolio of exhibition stands and displays. From small booths to large pavilions, discover our work across Dubai, UAE and worldwide.',
  openGraph: {
    title: 'Our Projects - Exhibition Stands Portfolio | Messe.ae',
    description: 'Browse through our extensive portfolio of custom exhibition stands, trade show booths, and display solutions delivered across various industries.',
    url: 'https://messe.ae/projects',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Projects - Exhibition Stands Portfolio | Messe.ae',
    description: 'Browse through our extensive portfolio of custom exhibition stands, trade show booths, and display solutions.',
  },
};

export default function ProjectsPage() {
  return (
    <Suspense 
      fallback={
        <Box sx={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <CircularProgress />
        </Box>
      }
    >
      <ProjectsPageContent />
    </Suspense>
  );
}