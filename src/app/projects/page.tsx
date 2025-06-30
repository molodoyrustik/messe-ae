'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  CircularProgress,
  Alert,
} from '@mui/material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';
import ProjectCard from '@/components/projects/ProjectCard';
import ErrorBoundary from '@/components/ErrorBoundary';
import { useProjects } from '@/hooks/use-projects';
import { useClients } from '@/hooks/use-clients';
import { ProjectsFilters } from '@/types/api';

const sizeRanges = [
  { label: '< 50 m²', value: { min: 0, max: 49 } },
  { label: '50 - 100 m²', value: { min: 50, max: 100 } },
  { label: '101 - 300 m²', value: { min: 101, max: 300 } },
  { label: '> 300 m²', value: { min: 301, max: 10000 } },
];

export default function ProjectsPage() {
  const [filters, setFilters] = useState<ProjectsFilters>({
    pageSize: 20,
  });
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [selectedSizeRange, setSelectedSizeRange] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<'double-decker' | 'events' | null>(null);

  const { data: projectsData, isLoading: projectsLoading, error: projectsError } = useProjects(filters);
  const { data: clientsData } = useClients();

  const handleClientFilter = (clientSlug: string | null) => {
    setSelectedClient(clientSlug);
    if (clientSlug) {
      setFilters(prev => ({
        ...prev,
        clientSlug: clientSlug,
      }));
    } else {
      setFilters(prev => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { clientSlug, ...rest } = prev;
        return rest;
      });
    }
  };

  const handleSizeFilter = (rangeLabel: string | null) => {
    setSelectedSizeRange(rangeLabel);
    if (!rangeLabel) {
      setFilters(prev => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { minSize, maxSize, ...rest } = prev;
        return rest;
      });
      return;
    }

    const range = sizeRanges.find(r => r.label === rangeLabel);
    if (range) {
      setFilters(prev => ({
        ...prev,
        minSize: range.value.min,
        maxSize: range.value.max,
      }));
    }
  };

  const handleTypeFilter = (type: 'double-decker' | 'events' | null) => {
    setSelectedType(type);
    if (type === 'double-decker') {
      setFilters(prev => ({
        ...prev,
        constructionType: 'double-decker',
      }));
    } else {
      setFilters(prev => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { constructionType, ...rest } = prev;
        return rest;
      });
    }
  };


  return (
    <ErrorBoundary>
      <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
        <Header />
        
        <Container maxWidth="xl" sx={{ pt: '3.75rem', pb: 8 }}>
          <Box sx={{ maxWidth: 1360, mx: 'auto', px: { xs: 2, md: 5 } }}>
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: { xs: 36, md: 54 },
                lineHeight: '60px',
                color: '#262626',
                mb: 3,
              }}
            >
              Projects
            </Typography>
            <Typography
              component="div"
              sx={{
                fontFamily: 'Roboto',
                fontSize: 16,
                lineHeight: '24px',
                letterSpacing: '0.02em',
                color: '#000000',
                maxWidth: 1359,
              }}
            >
              With 20 years of experience, messe.ae has successfully completed over 4,000 projects worldwide. 
              As one of the leading{' '}
              <Box component="span" sx={{ fontWeight: 700 }}>
                exhibition stand builders in UAE
              </Box>
              , we deliver premium{' '}
              <Box component="span" sx={{ fontWeight: 700 }}>
                exhibition stand designs in Dubai and beyond
              </Box>
              . From tailored exhibition stands to creative display stand exhibition solutions, we bring 
              innovation, quality, and expertise to every project. Recognized among top exhibitions companies 
              in Dubai, messe.ae is your trusted exhibition stand contractor for outstanding exhibition design 
              stand and impactful global presence.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography 
              sx={{ 
                fontFamily: 'Roboto',
                fontSize: 24,
                fontWeight: 700,
                lineHeight: '28px',
                letterSpacing: '0.01em',
                color: '#262626',
                mb: 1,
              }}
            >
              Client:
            </Typography>

            <Stack 
              direction="row" 
              spacing={1.5} 
              sx={{ 
                mb: 4,
                flexWrap: 'wrap',
                gap: 1.5,
                maxWidth: 1240,
                position: 'relative',
              }}
            >
              <Chip
                label="All"
                onClick={() => handleClientFilter(null)}
                sx={{
                  backgroundColor: !selectedClient ? '#656CAF' : '#E9EAF4',
                  color: !selectedClient ? '#FFFFFF' : '#656CAF',
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: 24,
                  lineHeight: '28px',
                  letterSpacing: '0.01em',
                  height: 'auto',
                  px: 1.5,
                  py: 1,
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: !selectedClient ? '#4C53A2' : '#C7CAE3',
                  },
                }}
              />
              {clientsData?.data.slice(0, 9).map((client) => (
                <Chip
                  key={client.id}
                  label={client.name}
                  onClick={() => handleClientFilter(selectedClient === client.slug ? null : client.slug)}
                  sx={{
                    backgroundColor: selectedClient === client.slug ? '#656CAF' : '#E9EAF4',
                    color: selectedClient === client.slug ? '#FFFFFF' : '#656CAF',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: 24,
                    lineHeight: '28px',
                    letterSpacing: '0.01em',
                    height: 'auto',
                    px: 1.5,
                    py: 1,
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: selectedClient === client.slug ? '#4C53A2' : '#C7CAE3',
                    },
                  }}
                />
              ))}
              {clientsData && clientsData.data.length > 9 && (
                <Box
                  sx={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: 40,
                    height: 48,
                    background: 'linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
                    pointerEvents: 'none',
                  }}
                />
              )}
            </Stack>

            <Typography 
              sx={{ 
                fontFamily: 'Roboto',
                fontSize: 24,
                fontWeight: 700,
                lineHeight: '28px',
                letterSpacing: '0.01em',
                color: '#262626',
                mb: 1,
              }}
            >
              Stand size:
            </Typography>

            <Stack direction="row" spacing={1.5} sx={{ flexWrap: 'wrap', gap: 1.5 }}>
              <Chip
                label="All"
                onClick={() => {
                  handleSizeFilter(null);
                  handleTypeFilter(null);
                }}
                sx={{
                  backgroundColor: !selectedSizeRange && !selectedType ? '#656CAF' : '#E9EAF4',
                  color: !selectedSizeRange && !selectedType ? '#FFFFFF' : '#656CAF',
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: 24,
                  lineHeight: '28px',
                  letterSpacing: '0.01em',
                  height: 'auto',
                  px: 1.5,
                  py: 1,
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: !selectedSizeRange && !selectedType ? '#4C53A2' : '#C7CAE3',
                  },
                }}
              />
              {sizeRanges.map((range) => (
                <Chip
                  key={range.label}
                  label={range.label}
                  onClick={() => handleSizeFilter(selectedSizeRange === range.label ? null : range.label)}
                  sx={{
                    backgroundColor: selectedSizeRange === range.label ? '#656CAF' : '#E9EAF4',
                    color: selectedSizeRange === range.label ? '#FFFFFF' : '#656CAF',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: 24,
                    lineHeight: '28px',
                    letterSpacing: '0.01em',
                    height: 'auto',
                    px: 1.5,
                    py: 1,
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: selectedSizeRange === range.label ? '#4C53A2' : '#C7CAE3',
                    },
                  }}
                />
              ))}
              <Chip
                label="Double-Deckers"
                onClick={() => handleTypeFilter(selectedType === 'double-decker' ? null : 'double-decker')}
                sx={{
                  backgroundColor: selectedType === 'double-decker' ? '#656CAF' : '#E9EAF4',
                  color: selectedType === 'double-decker' ? '#FFFFFF' : '#656CAF',
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: 24,
                  lineHeight: '28px',
                  letterSpacing: '0.01em',
                  height: 'auto',
                  px: 1.5,
                  py: 1,
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: selectedType === 'double-decker' ? '#4C53A2' : '#C7CAE3',
                  },
                }}
              />
              <Chip
                label="Events"
                onClick={() => handleTypeFilter(selectedType === 'events' ? null : 'events')}
                sx={{
                  backgroundColor: selectedType === 'events' ? '#656CAF' : '#E9EAF4',
                  color: selectedType === 'events' ? '#FFFFFF' : '#656CAF',
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: 24,
                  lineHeight: '28px',
                  letterSpacing: '0.01em',
                  height: 'auto',
                  px: 1.5,
                  py: 1,
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: selectedType === 'events' ? '#4C53A2' : '#C7CAE3',
                  },
                }}
              />
            </Stack>
          </Box>

          {projectsLoading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
              <CircularProgress />
            </Box>
          )}

          {projectsError && (
            <Alert severity="error" sx={{ mb: 4 }}>
              Error loading projects. Please try again later.
            </Alert>
          )}

          {projectsData && (
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 4,
                width: '100%',
                maxWidth: 1360,
              }}
            >
              {projectsData.data.map((project) => (
                <Box
                  key={project.id}
                  sx={{
                    flexBasis: { xs: '100%', md: 'calc(33.333% - 24px)' },
                    maxWidth: { xs: '100%', md: 432 },
                  }}
                >
                  <ProjectCard project={project} />
                </Box>
              ))}
            </Box>
          )}

          {projectsData && projectsData.data.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h6" color="text.secondary">
                No projects found matching your criteria
              </Typography>
            </Box>
          )}
        </Box>
      </Container>

      <FooterSection />
    </Box>
    </ErrorBoundary>
  );
}