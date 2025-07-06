import { Suspense } from 'react';
import { Metadata } from 'next';
import ProjectsPageContent from './page-content';
import { Box, CircularProgress } from '@mui/material';

export const metadata: Metadata = {
  title: 'Projects',
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

function ProjectsLoading() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <CircularProgress />
    </Box>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<ProjectsLoading />}>
      <ProjectsPageContent />
    </Suspense>
  );
}