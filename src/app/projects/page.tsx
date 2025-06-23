'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Button,
} from '@mui/material';
import { LocationOn, AccessTime } from '@mui/icons-material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';

// Mock project data based on Figma design
const projects = [
  {
    id: 1,
    title: 'Dubai International Exhibition',
    location: 'Dubai, UAE',
    date: '2024-03-15',
    tags: ['Exhibition', 'Technology'],
    image: '/project-1.jpg',
    description: 'A comprehensive exhibition showcasing the latest in technology and innovation.',
  },
  {
    id: 2,
    title: 'Abu Dhabi Business Summit',
    location: 'Abu Dhabi, UAE',
    date: '2024-02-20',
    tags: ['Business', 'Summit'],
    image: '/project-2.jpg',
    description: 'Annual business summit bringing together industry leaders and entrepreneurs.',
  },
  {
    id: 3,
    title: 'Sharjah Cultural Festival',
    location: 'Sharjah, UAE',
    date: '2024-01-10',
    tags: ['Culture', 'Festival'],
    image: '/project-3.jpg',
    description: 'Celebrating the rich cultural heritage of the UAE through art and exhibitions.',
  },
  {
    id: 4,
    title: 'Qatar Trade Fair',
    location: 'Doha, Qatar',
    date: '2023-12-05',
    tags: ['Trade', 'International'],
    image: '/project-4.jpg',
    description: 'International trade fair connecting businesses across the Middle East.',
  },
  {
    id: 5,
    title: 'Kuwait Innovation Expo',
    location: 'Kuwait City, Kuwait',
    date: '2023-11-18',
    tags: ['Innovation', 'Expo'],
    image: '/project-5.jpg',
    description: 'Showcasing cutting-edge innovations and technological advancements.',
  },
  {
    id: 6,
    title: 'Bahrain Healthcare Conference',
    location: 'Manama, Bahrain',
    date: '2023-10-22',
    tags: ['Healthcare', 'Conference'],
    image: '/project-6.jpg',
    description: 'Leading healthcare professionals discussing future medical technologies.',
  },
];

// Project Card Component
const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        border: '2px solid #A2A9D0',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
        sx={{
          objectFit: 'cover',
        }}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: 24,
            lineHeight: '28px',
            letterSpacing: '0.01em',
            color: '#262626',
            mb: 2,
          }}
        >
          {project.title}
        </Typography>
        
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '24px',
            letterSpacing: '0.02em',
            color: '#262626',
            mb: 2,
          }}
        >
          {project.description}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <LocationOn sx={{ fontSize: 16, color: '#656CAF' }} />
          <Typography
            variant="body2"
            sx={{
              fontSize: 14,
              color: '#7B7B7B',
            }}
          >
            {project.location}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <AccessTime sx={{ fontSize: 16, color: '#656CAF' }} />
          <Typography
            variant="body2"
            sx={{
              fontSize: 14,
              color: '#7B7B7B',
            }}
          >
            {new Date(project.date).toLocaleDateString()}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                backgroundColor: '#E9EAF4',
                color: '#4C53A2',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: '#C7CAE3',
                },
              }}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default function ProjectsPage() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Header />
      
      {/* Main Content */}
      <Container maxWidth="xl" sx={{ pt: { xs: 12, md: 20 }, pb: 8 }}>
        <Box sx={{ maxWidth: 1360, mx: 'auto', px: { xs: 2, md: 5 } }}>
          {/* Page Header */}
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
              Our Projects
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
                maxWidth: 800,
              }}
            >
              Discover our portfolio of successful exhibitions, conferences, and events across the Middle East. 
              Each project represents our commitment to excellence and innovation in marketing and exhibition services.
            </Typography>
          </Box>

          {/* Projects Grid */}
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={project.id}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>

          {/* Load More Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#656CAF',
                color: '#FFFFFF',
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: 16,
                lineHeight: '24px',
                letterSpacing: '0.02em',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
                '&:hover': {
                  backgroundColor: '#4C53A2',
                },
              }}
            >
              Load More Projects
            </Button>
          </Box>
        </Box>
      </Container>

      <FooterSection />
    </Box>
  );
}
