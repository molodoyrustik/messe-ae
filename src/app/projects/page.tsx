'use client';

import { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  CircularProgress,
  Alert,
  useMediaQuery,
  useTheme,
  IconButton,
  Button,
} from '@mui/material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';
import ProjectCard from '@/components/projects/ProjectCard';
import ErrorBoundary from '@/components/ErrorBoundary';
import ClientsFilterPanel from '@/components/projects/ClientsFilterPanel';
import StandSizeFilterPanel from '@/components/projects/StandSizeFilterPanel';
import CombinedFilterPanel from '@/components/projects/CombinedFilterPanel';
import FilterIcon from '@/components/icons/FilterIcon';
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [filters, setFilters] = useState<ProjectsFilters>({
    page: 1,
    pageSize: 12,
  });
  const [selectedClients, setSelectedClients] = useState<string[]>([]);
  const [selectedSizeRanges, setSelectedSizeRanges] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  
  const [clientsFilterOpen, setClientsFilterOpen] = useState(false);
  const [standSizeFilterOpen, setStandSizeFilterOpen] = useState(false);
  const [combinedFilterOpen, setCombinedFilterOpen] = useState(false);

  const { data: projectsData, isLoading: projectsLoading, error: projectsError } = useProjects(filters);
  const { data: clientsData } = useClients();
  
  const hasActiveFilters = useMemo(() => {
    return selectedClients.length > 0 || selectedSizeRanges.length > 0 || selectedTypes.length > 0;
  }, [selectedClients, selectedSizeRanges, selectedTypes]);
  
  const activeFilterValues = useMemo(() => {
    const values: string[] = [];
    if (selectedClients.length > 0 && clientsData) {
      selectedClients.forEach(slug => {
        const client = clientsData.data.find(c => c.slug === slug);
        if (client) values.push(client.name);
      });
    }
    selectedSizeRanges.forEach(range => values.push(range));
    selectedTypes.forEach(type => {
      if (type === 'double-decker') values.push('Double-Deckers');
      if (type === 'events') values.push('Events');
    });
    return values;
  }, [selectedClients, selectedSizeRanges, selectedTypes, clientsData]);

  const handleClientFilter = (clientSlug: string | null) => {
    if (clientSlug === null) {
      setSelectedClients([]);
      setFilters(prev => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { clientSlugs, ...rest } = prev;
        return rest;
      });
    } else {
      const newClients = selectedClients.includes(clientSlug)
        ? selectedClients.filter(c => c !== clientSlug)
        : [...selectedClients, clientSlug];
      
      setSelectedClients(newClients);
      
      if (newClients.length > 0) {
        setFilters(prev => ({
          ...prev,
          page: 1,
          clientSlugs: newClients,
        }));
      } else {
        setFilters(prev => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { clientSlugs, ...rest } = prev;
          return { ...rest, page: 1 };
        });
      }
    }
  };

  const handleSizeFilter = (rangeLabel: string | null) => {
    if (rangeLabel === null) {
      setSelectedSizeRanges([]);
      setFilters(prev => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { sizeRanges: _, ...rest } = prev;
        return rest;
      });
    } else {
      const newRanges = selectedSizeRanges.includes(rangeLabel)
        ? selectedSizeRanges.filter(r => r !== rangeLabel)
        : [...selectedSizeRanges, rangeLabel];
      
      setSelectedSizeRanges(newRanges);
      
      if (newRanges.length > 0) {
        // Convert selected ranges to size filter
        const ranges = newRanges.map(label => sizeRanges.find(r => r.label === label)).filter(Boolean);
        if (ranges.length > 0) {
          setFilters(prev => ({
            ...prev,
            page: 1,
            sizeRanges: ranges.map(r => r!.value),
          }));
        }
      } else {
        setFilters(prev => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { sizeRanges: _, ...rest } = prev;
          return { ...rest, page: 1 };
        });
      }
    }
  };

  const handleTypeFilter = (type: 'double-decker' | 'events' | null) => {
    if (type === null) {
      setSelectedTypes([]);
      setFilters(prev => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { constructionTypes, ...rest } = prev;
        return rest;
      });
    } else {
      const newTypes = selectedTypes.includes(type)
        ? selectedTypes.filter(t => t !== type)
        : [...selectedTypes, type];
      
      setSelectedTypes(newTypes);
      
      if (newTypes.length > 0) {
        setFilters(prev => ({
          ...prev,
          page: 1,
          constructionTypes: newTypes,
        }));
      } else {
        setFilters(prev => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { constructionTypes, ...rest } = prev;
          return { ...rest, page: 1 };
        });
      }
    }
  };

  const handleResetFilters = () => {
    setSelectedClients([]);
    setSelectedSizeRanges([]);
    setSelectedTypes([]);
    setFilters({ page: 1, pageSize: 12 });
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
            {!isMobile && (
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
            )}

            {isMobile ? (
              <Box sx={{ mb: 4, position: 'relative' }}>
                <Box 
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    pr: hasActiveFilters ? 5 : 0,
                    '&::-webkit-scrollbar': {
                      display: 'none',
                    },
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                >
                  <Chip
                    label={selectedClients.length > 0 
                      ? `Clients: ${activeFilterValues.filter(v => !selectedSizeRanges.includes(v) && v !== 'Double-Deckers' && v !== 'Events').join(', ')}`
                      : 'Clients'
                    }
                    onClick={() => hasActiveFilters ? setCombinedFilterOpen(true) : setClientsFilterOpen(true)}
                    sx={{
                      backgroundColor: selectedClients.length > 0 ? '#656CAF' : '#E9EAF4',
                      color: selectedClients.length > 0 ? '#FFFFFF' : '#656CAF',
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: '1rem',
                      lineHeight: '1.25rem',
                      height: 'auto',
                      px: 1.5,
                      py: 0.75,
                      borderRadius: '0.5rem',
                      flexShrink: 0,
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                    }}
                  />
                  <Chip
                    label={(selectedSizeRanges.length > 0 || selectedTypes.length > 0)
                      ? `Stand size: ${activeFilterValues.filter(v => selectedSizeRanges.includes(v) || v === 'Double-Deckers' || v === 'Events').join(', ')}`
                      : 'Stand size'
                    }
                    onClick={() => hasActiveFilters ? setCombinedFilterOpen(true) : setStandSizeFilterOpen(true)}
                    sx={{
                      backgroundColor: (selectedSizeRanges.length > 0 || selectedTypes.length > 0) ? '#656CAF' : '#E9EAF4',
                      color: (selectedSizeRanges.length > 0 || selectedTypes.length > 0) ? '#FFFFFF' : '#656CAF',
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: '1rem',
                      lineHeight: '1.25rem',
                      height: 'auto',
                      px: 1.5,
                      py: 0.75,
                      borderRadius: '0.5rem',
                      flexShrink: 0,
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                    }}
                  />
                </Box>
                {hasActiveFilters && (
                  <>
                    {/* Gradient overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        right: '2rem',
                        top: 0,
                        bottom: 0,
                        width: '2rem',
                        height: '100%',
                        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)',
                        pointerEvents: 'none',
                      }}
                    />
                    {/* White background for icon */}
                    <Box
                      sx={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: '2rem',
                        backgroundColor: '#FFFFFF',
                      }}
                    />
                    {/* Filter icon button */}
                    <IconButton
                      onClick={() => setCombinedFilterOpen(true)}
                      sx={{
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        p: 0.5,
                        color: '#656CAF',
                        '&:hover': {
                          backgroundColor: 'rgba(101, 108, 175, 0.04)',
                        },
                      }}
                    >
                      <FilterIcon />
                    </IconButton>
                  </>
                )}
              </Box>
            ) : (
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
                  backgroundColor: selectedClients.length === 0 ? '#656CAF' : '#E9EAF4',
                  color: selectedClients.length === 0 ? '#FFFFFF' : '#656CAF',
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
                    backgroundColor: selectedClients.length === 0 ? '#4C53A2' : '#C7CAE3',
                  },
                }}
              />
              {clientsData?.data.slice(0, 9).map((client) => (
                <Chip
                  key={client.id}
                  label={client.name}
                  onClick={() => handleClientFilter(client.slug)}
                  sx={{
                    backgroundColor: selectedClients.includes(client.slug) ? '#656CAF' : '#E9EAF4',
                    color: selectedClients.includes(client.slug) ? '#FFFFFF' : '#656CAF',
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
                      backgroundColor: selectedClients.includes(client.slug) ? '#4C53A2' : '#C7CAE3',
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
            )}

            {!isMobile && (
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
            )}

            {!isMobile && (
              <Stack direction="row" spacing={1.5} sx={{ flexWrap: 'wrap', gap: 1.5 }}>
              <Chip
                label="All"
                onClick={() => {
                  handleSizeFilter(null);
                  handleTypeFilter(null);
                }}
                sx={{
                  backgroundColor: selectedSizeRanges.length === 0 && selectedTypes.length === 0 ? '#656CAF' : '#E9EAF4',
                  color: selectedSizeRanges.length === 0 && selectedTypes.length === 0 ? '#FFFFFF' : '#656CAF',
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
                    backgroundColor: selectedSizeRanges.length === 0 && selectedTypes.length === 0 ? '#4C53A2' : '#C7CAE3',
                  },
                }}
              />
              {sizeRanges.map((range) => (
                <Chip
                  key={range.label}
                  label={range.label}
                  onClick={() => handleSizeFilter(range.label)}
                  sx={{
                    backgroundColor: selectedSizeRanges.includes(range.label) ? '#656CAF' : '#E9EAF4',
                    color: selectedSizeRanges.includes(range.label) ? '#FFFFFF' : '#656CAF',
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
                      backgroundColor: selectedSizeRanges.includes(range.label) ? '#4C53A2' : '#C7CAE3',
                    },
                  }}
                />
              ))}
              <Chip
                label="Double-Deckers"
                onClick={() => handleTypeFilter('double-decker')}
                sx={{
                  backgroundColor: selectedTypes.includes('double-decker') ? '#656CAF' : '#E9EAF4',
                  color: selectedTypes.includes('double-decker') ? '#FFFFFF' : '#656CAF',
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
                    backgroundColor: selectedTypes.includes('double-decker') ? '#4C53A2' : '#C7CAE3',
                  },
                }}
              />
              <Chip
                label="Events"
                onClick={() => handleTypeFilter('events')}
                sx={{
                  backgroundColor: selectedTypes.includes('events') ? '#656CAF' : '#E9EAF4',
                  color: selectedTypes.includes('events') ? '#FFFFFF' : '#656CAF',
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
                    backgroundColor: selectedTypes.includes('events') ? '#4C53A2' : '#C7CAE3',
                  },
                }}
              />
              </Stack>
            )}
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

          {/* Pagination */}
          {projectsData && projectsData.meta.pagination.pageCount > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, gap: 2 }}>
              <Button
                variant="outlined"
                onClick={() => setFilters(prev => ({ ...prev, page: Math.max(1, (prev.page || 1) - 1) }))}
                disabled={filters.page === 1 || projectsLoading}
                sx={{
                  color: '#656CAF',
                  borderColor: '#656CAF',
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  letterSpacing: '0.02em',
                  px: '2rem',
                  py: '0.75rem',
                  borderRadius: '0.5rem',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#656CAF',
                    color: '#FFFFFF',
                    borderColor: '#656CAF',
                  },
                  '&:disabled': {
                    borderColor: '#ccc',
                    color: '#ccc',
                  },
                }}
              >
                Previous
              </Button>
              
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  px: 2,
                  fontFamily: 'Roboto',
                  fontSize: '1rem',
                  color: '#262626',
                }}
              >
                Page {filters.page || 1} of {projectsData.meta.pagination.pageCount}
              </Typography>
              
              <Button
                variant="outlined"
                onClick={() => setFilters(prev => ({ ...prev, page: Math.min(projectsData.meta.pagination.pageCount, (prev.page || 1) + 1) }))}
                disabled={filters.page === projectsData.meta.pagination.pageCount || projectsLoading}
                sx={{
                  color: '#656CAF',
                  borderColor: '#656CAF',
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  letterSpacing: '0.02em',
                  px: '2rem',
                  py: '0.75rem',
                  borderRadius: '0.5rem',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#656CAF',
                    color: '#FFFFFF',
                    borderColor: '#656CAF',
                  },
                  '&:disabled': {
                    borderColor: '#ccc',
                    color: '#ccc',
                  },
                }}
              >
                Next
              </Button>
            </Box>
          )}
        </Box>
      </Container>

      <FooterSection />
      
      {isMobile && clientsData && (
        <>
          <ClientsFilterPanel
            open={clientsFilterOpen}
            onClose={() => setClientsFilterOpen(false)}
            clients={clientsData.data}
            selectedClients={selectedClients}
            onClientSelect={handleClientFilter}
          />
          
          <StandSizeFilterPanel
            open={standSizeFilterOpen}
            onClose={() => setStandSizeFilterOpen(false)}
            selectedSizeRanges={selectedSizeRanges}
            selectedTypes={selectedTypes}
            onSizeSelect={handleSizeFilter}
            onTypeSelect={handleTypeFilter}
          />
          
          <CombinedFilterPanel
            open={combinedFilterOpen}
            onClose={() => setCombinedFilterOpen(false)}
            clients={clientsData.data}
            selectedClients={selectedClients}
            selectedSizeRanges={selectedSizeRanges}
            selectedTypes={selectedTypes}
            onClientSelect={handleClientFilter}
            onSizeSelect={handleSizeFilter}
            onTypeSelect={handleTypeFilter}
            onReset={handleResetFilters}
          />
        </>
      )}
    </Box>
    </ErrorBoundary>
  );
}