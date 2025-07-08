'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';
import { useProject, useProjects } from '@/hooks/use-projects';
import { use } from 'react';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = use(params);
  
  // Extract documentId from the slug (format: client-name-150m2-documentId)
  const extractDocumentId = (slug: string) => {
    const parts = slug.split('-');
    return parts[parts.length - 1]; // documentId is always the last part
  };
  
  const documentId = extractDocumentId(resolvedParams.slug);
  const { data, isLoading, error } = useProject(documentId);
  
  // Fetch client projects count
  const { data: clientProjectsData } = useProjects({
    clientSlug: data?.data?.client?.slug,
    pageSize: 1, // We only need the count
  });

  if (isLoading) {
    return (
      <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
        <Header />
        <Container maxWidth="xl" sx={{ px: { xs: '1rem', md: '2.5rem' }, pt: { xs: '1.5rem', md: '3.75rem' }, pb: 8 }}>
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
        <Container maxWidth="xl" sx={{ px: { xs: '1rem', md: '2.5rem' }, pt: { xs: '1.5rem', md: '3.75rem' }, pb: 8 }}>
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
      
      <Container maxWidth="xl" sx={{ px: { xs: '1rem', md: '2.5rem' }, pt: { xs: '1.5rem', md: '3.75rem' }, pb: 8 }}>
        <Box sx={{ maxWidth: 1360, mx: 'auto' }}>
          {/* Project Title - using client name */}
          <Typography
            component="h1"
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: { xs: '2.25rem', md: '3.375rem' },
              lineHeight: { xs: '2.75rem', md: '4rem' },
              letterSpacing: '0.02125rem',
              color: '#262626',
              mb: 2,
            }}
          >
            {project.client?.name || 'Client Name'}
          </Typography>

          {/* Number of projects */}
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.25, mb: 3 }}>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: '1rem',
                lineHeight: '1.5rem',
                letterSpacing: '0.02em',
                color: '#000000',
              }}
            >
              Number of projects:
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: '1rem',
                lineHeight: '1.5rem',
                letterSpacing: '0.02em',
                color: '#000000',
              }}
            >
              {clientProjectsData?.meta?.pagination?.total || 0}
            </Typography>
          </Box>

          {/* Client Description */}
          <Box sx={{ mb: 4, maxWidth: 1359 }}>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: '1rem',
                lineHeight: '1.5rem',
                letterSpacing: '0.02rem',
              }}
            >
              {(() => {
                const description = project.description || project.client?.description || '';
                const clientName = project.client?.name || '';
                
                // Check if client name exists in description
                if (clientName && description.includes(clientName)) {
                  const parts = description.split(clientName);
                  return (
                    <>
                      {parts.map((part, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && (
                            <Typography
                              component="span"
                              sx={{
                                fontWeight: 700,
                                color: '#656CAF',
                                textDecoration: 'underline',
                                textDecorationStyle: 'solid',
                                textDecorationSkipInk: 'none',
                              }}
                            >
                              {clientName}
                            </Typography>
                          )}
                          <Typography
                            component="span"
                            sx={{
                              fontWeight: 400,
                              color: '#000000',
                            }}
                          >
                            {part}
                          </Typography>
                        </React.Fragment>
                      ))}
                    </>
                  );
                } else {
                  // If client name not found in description, just show the description
                  return (
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: 400,
                        color: '#000000',
                      }}
                    >
                      {description}
                    </Typography>
                  );
                }
              })()}
            </Typography>
          </Box>

          {/* Images Gallery Section */}
          {project.images && project.images.length > 0 && (
            <Box sx={{ position: 'relative', width: '100%', mb: 6 }}>
              {/* Info bar above images */}
              <Box 
                sx={{ 
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  mb: { xs: 2, md: 3.5 },
                  gap: { xs: 1.5, sm: 2, md: 0 },
                  width: '100%',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 700,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      lineHeight: { xs: '1.5rem', md: '1.75rem' },
                      letterSpacing: '0.02em',
                      color: '#656CAF',
                    }}
                  >
                    Exhibition:
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      lineHeight: { xs: '1.5rem', md: '1.75rem' },
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    {project.eventName}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 700,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      lineHeight: { xs: '1.5rem', md: '1.75rem' },
                      letterSpacing: '0.02em',
                      color: '#656CAF',
                    }}
                  >
                    Year:
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      lineHeight: { xs: '1.5rem', md: '1.75rem' },
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    {new Date(project.eventDate).getFullYear()}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.25 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 700,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      lineHeight: { xs: '1.5rem', md: '1.75rem' },
                      letterSpacing: '0.02em',
                      color: '#656CAF',
                    }}
                  >
                    Space:
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                    <Typography
                      sx={{
                        fontFamily: 'Roboto',
                        fontWeight: 400,
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                        lineHeight: { xs: '1.5rem', md: '1.75rem' },
                        letterSpacing: '0.02em',
                        color: '#000000',
                      }}
                    >
                      {project.totalSize} m
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Roboto',
                        fontWeight: 400,
                        fontSize: { xs: '0.875rem', md: '1.05rem' },
                        lineHeight: 1,
                        color: '#000000',
                        verticalAlign: 'super',
                        position: 'relative',
                        top: '-0.3em',
                      }}
                    >
                      2
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 700,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      lineHeight: { xs: '1.5rem', md: '1.75rem' },
                      letterSpacing: '0.02em',
                      color: '#656CAF',
                    }}
                  >
                    Client:
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      lineHeight: { xs: '1.5rem', md: '1.75rem' },
                      letterSpacing: '0.02em',
                      color: '#000000',
                    }}
                  >
                    {project.referringCompany || project.client?.name}
                  </Typography>
                </Box>
              </Box>

              {/* Three images in a row */}
              <Box 
                sx={{ 
                  display: 'grid',
                  gridTemplateColumns: { 
                    xs: '1fr', 
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)' 
                  },
                  gap: { xs: 1, sm: 1.5, md: 2 },
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
                      height: { xs: '15rem', sm: '18rem', md: '19.75rem' },
                      objectFit: 'cover',
                      borderRadius: '0.5rem',
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