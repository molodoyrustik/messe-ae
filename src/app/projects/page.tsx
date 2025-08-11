import React from 'react';
import { Metadata } from 'next';
import {
  Box,
  Container,
  Typography,
  Alert,
  Button
} from '@mui/material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';
import ProjectCard from '@/components/projects/ProjectCard';
import ErrorBoundary from '@/components/ErrorBoundary';
import { projectsApi } from '@/lib/api/projects';
import { clientsApi } from '@/lib/api/clients';
import { ProjectsResponse, ClientsResponse } from '@/types/api';

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

export default async function ProjectsPage() {
  let projectsData: ProjectsResponse | undefined;
  let clientsData: ClientsResponse | undefined;
  let error: unknown;

  try {
    // Load initial projects and clients data
    const [projects, clients] = await Promise.all([
      projectsApi.getProjects({ page: 1, pageSize: 12 }),
      clientsApi.getClientsWithProjectCounts()
    ]);
    projectsData = projects;
    clientsData = clients;
  } catch (e) {
    error = e;
    console.error('Error loading projects:', e);
  }

  if (error) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Container maxWidth="xl" sx={{ flex: 1, px: { xs: '1rem', md: '2.5rem' }, pt: { xs: '1.5rem', md: '3.75rem' }, pb: { xs: 5, md: 7.5 } }}>
          <Alert severity="error" sx={{ mb: 3 }}>
            Failed to load projects. Please try again later.
          </Alert>
        </Container>
        <FooterSection />
      </Box>
    );
  }

  // Enrich projects with client project counts
  const enrichedProjects = projectsData?.data.map(project => {
    if (project.client?.slug && clientsData?.data) {
      const clientWithCount = clientsData.data.find(c => c.slug === project.client?.slug);
      if (clientWithCount?.projectCount !== undefined && project.client) {
        return {
          ...project,
          client: {
            ...project.client,
            projectCount: clientWithCount.projectCount
          }
        };
      }
    }
    return project;
  }) || [];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <Container maxWidth="xl" sx={{ flex: 1, px: { xs: '1rem', md: '2.5rem' }, pt: { xs: '1.5rem', md: '3.75rem' }, pb: { xs: 5, md: 7.5 } }}>
        
        {/* Header with Title */}
        <Box sx={{ mb: { xs: 1.5, md: 4 } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Roboto',
                fontSize: { xs: '2.25rem', md: '3.375rem' },
                fontWeight: 700,
                lineHeight: { xs: '2.75rem', md: '4rem' },
                color: '#262626',
              }}
            >
              Our Projects
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: { xs: '0.875rem', md: '1rem' },
                fontWeight: 400,
                lineHeight: { xs: '1.125rem', md: '1.5rem' },
                letterSpacing: '0.02rem',
                color: '#000',
                mt: { xs: 0.5, md: 0.75 },
                maxWidth: '1359px',
              }}
            >
              With 20 years of experience, messe.ae has successfully completed over 4,000 projects worldwide. As one of the leading{' '}
              <Box component="span" sx={{ fontWeight: 700 }}>
                exhibition stand builders in UAE
              </Box>
              , we deliver premium{' '}
              <Box component="span" sx={{ fontWeight: 700 }}>
                exhibition stand designs in Dubai and beyond
              </Box>
              . From tailored exhibition stands to creative display stand exhibition solutions, we bring innovation, quality, and expertise to every project. Recognized among top exhibitions companies in Dubai, messe.ae is your trusted exhibition stand contractor for outstanding exhibition design stand and impactful global presence.
            </Typography>
          </Box>
        </Box>
        
        {/* Note: Full filtering functionality will need client-side interaction */}
        {/* This is a simplified server-rendered version showing all projects */}
        <Box sx={{ mb: 4, mt: 4 }}>
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontSize: '1rem',
              fontWeight: 700,
              lineHeight: '1.5rem',
              letterSpacing: '0.02rem',
              color: '#000',
              mb: 1,
            }}
          >
            All Projects
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontSize: '0.875rem',
              fontWeight: 400,
              lineHeight: '1.25rem',
              letterSpacing: '0.02rem',
              color: '#666',
              mb: 2,
            }}
          >
            For advanced filtering options, please wait for the page to fully load.
          </Typography>
        </Box>
        
        {/* Projects Grid */}
        {enrichedProjects.length > 0 && (
          <ErrorBoundary>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                },
                gap: { xs: 2, md: 3 },
                mb: 4,
              }}
            >
              {enrichedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </Box>
          </ErrorBoundary>
        )}
        
        {/* Pagination - Basic version */}
        {projectsData && projectsData.meta.pagination.pageCount > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 4 }}>
            {Array.from({ length: Math.min(projectsData.meta.pagination.pageCount, 5) }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={page === 1 ? 'contained' : 'outlined'}
                href={page === 1 ? '/projects' : `/projects?page=${page}`}
                sx={{
                  minWidth: { xs: '36px', md: '40px' },
                  height: { xs: '36px', md: '40px' },
                  p: 0,
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        )}
      </Container>
      
      <FooterSection />
    </Box>
  );
}