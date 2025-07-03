'use client';

import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';
import { useProject } from '@/hooks/use-projects';
import { use } from 'react';

interface ProjectPageProps {
  params: Promise<{
    documentId: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = use(params);
  const { data, isLoading, error } = useProject(resolvedParams.documentId);

  if (isLoading) {
    return (
      <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
        <Header />
        <Container maxWidth="xl" sx={{ pt: '3.75rem', pb: 8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress />
          </Box>
        </Container>
      </Box>
    );
  }

  if (error || !data) {
    return (
      <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
        <Header />
        <Container maxWidth="xl" sx={{ pt: '3.75rem', pb: 8 }}>
          <Alert severity="error">
            Project not found. Please check the URL and try again.
          </Alert>
        </Container>
      </Box>
    );
  }

  const project = data.data;

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Header />
      
      <Container maxWidth="xl" sx={{ pt: '3.75rem', pb: 8 }}>
        <Box sx={{ maxWidth: 1360, mx: 'auto', px: { xs: 2, md: 5 } }}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: { xs: 28, md: 34 },
              lineHeight: '42px',
              letterSpacing: '0.01em',
              color: '#262626',
              mb: 3,
            }}
          >
            {project.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '24px',
              letterSpacing: '0.02em',
              color: '#000000',
              mb: 4,
              maxWidth: 1359,
            }}
          >
            {project.client?.name || 'Client'}, founded in 1993, is a global leader in enterprise open-source solutions, best known for Red Hat Enterprise Linux (RHEL). It drives innovation in hybrid cloud, Kubernetes (OpenShift), automation (Ansible), and cloud infrastructure (OpenStack). Following a community-driven model, Red Hat develops secure, scalable, and reliable software. Acquired by IBM in 2019, it operates independently, integrating with IBM&apos;s cloud and AI strategy while maintaining its open-source philosophy.
          </Typography>

          {/* Images Gallery Section */}
          {project.images && project.images.length > 0 && (
            <Box sx={{ position: 'relative', width: '100%', height: { xs: 'auto', md: 384 }, mb: 6 }}>
              {/* Info bar above images */}
              <Box 
                sx={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 3,
                  gap: { xs: 2, md: 4 },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 700,
                      fontSize: 24,
                      lineHeight: '28px',
                      letterSpacing: '0.01em',
                      color: '#656CAF',
                    }}
                  >
                    Exhibition:
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: 24,
                      lineHeight: '28px',
                      letterSpacing: '0.01em',
                      color: '#000000',
                    }}
                  >
                    {project.eventName}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 700,
                      fontSize: 24,
                      lineHeight: '28px',
                      letterSpacing: '0.01em',
                      color: '#656CAF',
                    }}
                  >
                    Year:
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: 24,
                      lineHeight: '28px',
                      letterSpacing: '0.01em',
                      color: '#000000',
                    }}
                  >
                    {new Date(project.eventDate).getFullYear()}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 700,
                      fontSize: 24,
                      lineHeight: '28px',
                      letterSpacing: '0.01em',
                      color: '#656CAF',
                    }}
                  >
                    Space:
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: 24,
                      lineHeight: '28px',
                      letterSpacing: '0.01em',
                      color: '#000000',
                    }}
                  >
                    {project.totalSize} m<sup>2</sup>
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 700,
                      fontSize: 24,
                      lineHeight: '28px',
                      letterSpacing: '0.01em',
                      color: '#656CAF',
                    }}
                  >
                    Client:
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: 24,
                      lineHeight: '28px',
                      letterSpacing: '0.01em',
                      color: '#000000',
                    }}
                  >
                    {project.client?.name}
                  </Typography>
                </Box>
              </Box>

              {/* Three images in a row */}
              <Box 
                sx={{ 
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                  gap: 2,
                  width: '100%',
                }}
              >
                {project.images.slice(0, 3).map((image, index) => (
                  <Box
                    key={image.id || index}
                    component="img"
                    src={
                      image.url && !image.url.startsWith('http')
                        ? `https://lovely-idea-e9a72cf425.strapiapp.com${image.url}`
                        : image.url
                    }
                    alt={image.alternativeText || `${project.title} - Image ${index + 1}`}
                    sx={{
                      width: '100%',
                      height: { xs: 240, md: 316 },
                      objectFit: 'cover',
                      borderRadius: '8px',
                    }}
                  />
                ))}
              </Box>
            </Box>
          )}


        </Box>
      </Container>

      <FooterSection />
    </Box>
  );
}