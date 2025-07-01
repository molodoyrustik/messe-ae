'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  TextField,
  InputAdornment,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Search, LocationOn, Work } from '@mui/icons-material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';
import JobCard, { Job } from '@/components/JobCard';
import JobModal from '@/components/JobModal';

// Mock jobs data
const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Exhibition Designer',
    department: 'Design',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '5+ years',
    description: 'We are looking for an experienced Exhibition Designer to join our creative team...',
    requirements: [
      '5+ years of experience in exhibition design',
      'Proficiency in 3D design software (3ds Max, SketchUp)',
      'Strong portfolio demonstrating creative exhibition solutions',
      'Excellent communication skills in English',
    ],
    responsibilities: [
      'Create innovative exhibition designs that meet client objectives',
      'Develop detailed 3D renderings and technical drawings',
      'Collaborate with production team to ensure design feasibility',
      'Present design concepts to clients and stakeholders',
    ],
  },
  {
    id: '2',
    title: 'Project Manager',
    department: 'Operations',
    location: 'Abu Dhabi, UAE',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Join our operations team as a Project Manager to oversee exhibition projects...',
    requirements: [
      '3-5 years of project management experience',
      'Experience in events or exhibition industry preferred',
      'PMP certification is a plus',
      'Strong organizational and leadership skills',
    ],
    responsibilities: [
      'Manage exhibition projects from conception to completion',
      'Coordinate with clients, vendors, and internal teams',
      'Ensure projects are delivered on time and within budget',
      'Maintain project documentation and reports',
    ],
  },
  {
    id: '3',
    title: 'Business Development Executive',
    department: 'Sales',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'We seek a dynamic Business Development Executive to expand our client base...',
    requirements: [
      '2-4 years of sales experience in B2B environment',
      'Knowledge of exhibition and events industry',
      'Excellent negotiation and presentation skills',
      'Fluency in English and Arabic preferred',
    ],
    responsibilities: [
      'Identify and pursue new business opportunities',
      'Build and maintain client relationships',
      'Prepare proposals and negotiate contracts',
      'Achieve sales targets and KPIs',
    ],
  },
  {
    id: '4',
    title: 'Marketing Specialist',
    department: 'Marketing',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '2-3 years',
    description: 'Looking for a creative Marketing Specialist to enhance our brand presence...',
    requirements: [
      '2-3 years of marketing experience',
      'Strong knowledge of digital marketing channels',
      'Experience with content creation and social media',
      'Graphic design skills are a plus',
    ],
    responsibilities: [
      'Develop and execute marketing campaigns',
      'Manage social media presence and content',
      'Create marketing materials and presentations',
      'Analyze campaign performance and ROI',
    ],
  },
  {
    id: '5',
    title: '3D Visualizer',
    department: 'Design',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Join our design team as a 3D Visualizer to create stunning exhibition visuals...',
    requirements: [
      '2-4 years of 3D visualization experience',
      'Expert knowledge of 3ds Max, V-Ray, and Adobe Creative Suite',
      'Strong understanding of lighting and materials',
      'Portfolio showcasing photorealistic renderings',
    ],
    responsibilities: [
      'Create high-quality 3D renderings of exhibition designs',
      'Develop walkthrough animations for client presentations',
      'Collaborate with designers on visual concepts',
      'Maintain rendering standards and quality',
    ],
  },
  {
    id: '6',
    title: 'Production Coordinator',
    department: 'Production',
    location: 'Abu Dhabi, UAE',
    type: 'Full-time',
    experience: '1-3 years',
    description: 'We need a detail-oriented Production Coordinator to support our production team...',
    requirements: [
      '1-3 years of experience in production or manufacturing',
      'Knowledge of materials and production processes',
      'Strong organizational and communication skills',
      'Ability to work under pressure and meet deadlines',
    ],
    responsibilities: [
      'Coordinate production schedules and workflows',
      'Liaise with suppliers and vendors',
      'Monitor quality control and standards',
      'Maintain production documentation',
    ],
  },
];

// Filter options
const departments = ['All', 'Design', 'Operations', 'Sales', 'Marketing', 'Production'];
const locations = ['All Locations', 'Dubai, UAE', 'Abu Dhabi, UAE'];

export default function CareersPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Filter jobs based on selections
  const filteredJobs = jobs.filter((job) => {
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All Locations' || job.location === selectedLocation;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedJob(null), 300);
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Header />
      
      {/* Main Content */}
      <Container maxWidth="xl" sx={{ pt: '3.75rem', pb: { xs: '3rem', md: '6rem' } }}>
        <Box sx={{ maxWidth: '85rem', mx: 'auto', px: { xs: '1rem', md: '5rem' } }}>
          
          {/* Page Header */}
          <Box sx={{ mb: { xs: '2rem', md: '3rem' }, textAlign: 'center' }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: { xs: '2.25rem', md: '3.375rem' },
                lineHeight: { xs: '2.75rem', md: '3.75rem' },
                letterSpacing: '0.01em',
                color: '#262626',
                mb: { xs: '1rem', md: '1.5rem' },
              }}
            >
              Join Our Team
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: { xs: '0.875rem', md: '1rem' },
                lineHeight: { xs: '1.25rem', md: '1.5rem' },
                letterSpacing: '0.02em',
                color: '#7B7B7B',
                maxWidth: '50rem',
                mx: 'auto',
              }}
            >
              Be part of a dynamic team that creates exceptional exhibition experiences across the Middle East
            </Typography>
          </Box>

          {/* Search and Filters */}
          <Stack spacing={3} sx={{ mb: { xs: '2rem', md: '3rem' } }}>
            {/* Search Bar */}
            <TextField
              fullWidth
              placeholder="Search positions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: '#7B7B7B' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                maxWidth: { md: '30rem' },
                mx: 'auto',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '0.5rem',
                  backgroundColor: '#F5F5F5',
                  '& fieldset': {
                    border: 'none',
                  },
                  '&:hover fieldset': {
                    border: 'none',
                  },
                  '&.Mui-focused fieldset': {
                    border: '1px solid #656CAF',
                  },
                },
                '& .MuiInputBase-input': {
                  fontFamily: 'Roboto',
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  letterSpacing: '0.02em',
                  padding: '0.75rem 1rem',
                },
              }}
            />

            {/* Filter Chips */}
            <Stack spacing={2}>
              {/* Department Filters */}
              <Stack
                direction="row"
                spacing={1.5}
                sx={{
                  flexWrap: 'wrap',
                  gap: 1.5,
                  justifyContent: 'center',
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Work sx={{ fontSize: '1.25rem', color: '#7B7B7B' }} />
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Roboto',
                      fontSize: '0.875rem',
                      lineHeight: '1.25rem',
                      letterSpacing: '0.02em',
                      color: '#7B7B7B',
                      minWidth: 'fit-content',
                    }}
                  >
                    Department:
                  </Typography>
                </Stack>
                {departments.map((dept) => (
                  <Chip
                    key={dept}
                    label={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    sx={{
                      backgroundColor: selectedDepartment === dept ? '#656CAF' : '#F5F5F5',
                      color: selectedDepartment === dept ? '#FFFFFF' : '#656CAF',
                      fontFamily: 'Roboto',
                      fontWeight: 500,
                      fontSize: '0.875rem',
                      lineHeight: '1.25rem',
                      letterSpacing: '0.02em',
                      height: '2rem',
                      borderRadius: '1rem',
                      '& .MuiChip-label': {
                        px: '1rem',
                      },
                      '&:hover': {
                        backgroundColor: selectedDepartment === dept ? '#4C53A2' : '#E9EAF4',
                      },
                    }}
                  />
                ))}
              </Stack>

              {/* Location Filters */}
              <Stack
                direction="row"
                spacing={1.5}
                sx={{
                  flexWrap: 'wrap',
                  gap: 1.5,
                  justifyContent: 'center',
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <LocationOn sx={{ fontSize: '1.25rem', color: '#7B7B7B' }} />
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Roboto',
                      fontSize: '0.875rem',
                      lineHeight: '1.25rem',
                      letterSpacing: '0.02em',
                      color: '#7B7B7B',
                      minWidth: 'fit-content',
                    }}
                  >
                    Location:
                  </Typography>
                </Stack>
                {locations.map((loc) => (
                  <Chip
                    key={loc}
                    label={loc}
                    onClick={() => setSelectedLocation(loc)}
                    sx={{
                      backgroundColor: selectedLocation === loc ? '#656CAF' : '#F5F5F5',
                      color: selectedLocation === loc ? '#FFFFFF' : '#656CAF',
                      fontFamily: 'Roboto',
                      fontWeight: 500,
                      fontSize: '0.875rem',
                      lineHeight: '1.25rem',
                      letterSpacing: '0.02em',
                      height: '2rem',
                      borderRadius: '1rem',
                      '& .MuiChip-label': {
                        px: '1rem',
                      },
                      '&:hover': {
                        backgroundColor: selectedLocation === loc ? '#4C53A2' : '#E9EAF4',
                      },
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </Stack>

          {/* Results Count */}
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'Roboto',
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              letterSpacing: '0.02em',
              color: '#7B7B7B',
              mb: 3,
              textAlign: 'center',
            }}
          >
            Showing {filteredJobs.length} open position{filteredJobs.length !== 1 ? 's' : ''}
          </Typography>

          {/* Jobs Grid */}
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {filteredJobs.map((job) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={job.id}>
                <JobCard job={job} onClick={() => handleJobClick(job)} />
              </Grid>
            ))}
          </Grid>

          {/* Empty State */}
          {filteredJobs.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 500,
                  fontSize: '1.25rem',
                  lineHeight: '1.75rem',
                  letterSpacing: '0.01em',
                  color: '#262626',
                  mb: 1,
                }}
              >
                No positions found
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: '0.875rem',
                  lineHeight: '1.25rem',
                  letterSpacing: '0.02em',
                  color: '#7B7B7B',
                }}
              >
                Try adjusting your filters or search query
              </Typography>
            </Box>
          )}

        </Box>
      </Container>

      {/* Job Modal */}
      {selectedJob && (
        <JobModal
          job={selectedJob}
          open={modalOpen}
          onClose={handleCloseModal}
          isMobile={isMobile}
        />
      )}

      <FooterSection />
    </Box>
  );
}