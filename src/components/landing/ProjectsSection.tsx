'use client';

import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Card,
} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

interface ProjectCategoryProps {
  title: string;
  backgroundImage: string;
  gradient: string;
}

const ProjectCategory = ({ title, backgroundImage, gradient }: ProjectCategoryProps) => {
  return (
    <Card
      sx={{
        position: 'relative',
        width: 316,
        height: 400,
        borderRadius: 0.5,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: gradient,
          zIndex: 1,
        }}
      />

      {/* Navigation Arrows */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: 16,
          transform: 'translateY(-50%)',
          zIndex: 2,
          cursor: 'pointer',
        }}
      >
        <ArrowBackIos sx={{ color: 'white', fontSize: 24 }} />
      </Box>
      
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: 16,
          transform: 'translateY(-50%)',
          zIndex: 2,
          cursor: 'pointer',
        }}
      >
        <ArrowForwardIos sx={{ color: 'white', fontSize: 24 }} />
      </Box>

      {/* Title */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 24,
          left: 24,
          right: 24,
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 34,
            fontWeight: 700,
            lineHeight: 1.24,
            letterSpacing: '0.01em',
            color: 'white',
          }}
        >
          {title}
        </Typography>
      </Box>
    </Card>
  );
};

const ProjectsSection = () => {
  const projectCategories = [
    {
      title: '< 100 m²',
      backgroundImage: '/projects/small-stands.jpg',
      gradient: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 10.1%, rgba(0, 0, 0, 0) 28.37%)',
    },
    {
      title: '100 m - 300 m',
      backgroundImage: '/projects/medium-stands.jpg',
      gradient: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 10.1%, rgba(0, 0, 0, 0) 28.37%)',
    },
    {
      title: '> 300 m',
      backgroundImage: '/projects/large-stands.jpg',
      gradient: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 10.1%, rgba(0, 0, 0, 0) 28.37%)',
    },
    {
      title: 'Double-deckers',
      backgroundImage: '/projects/double-deck.jpg',
      gradient: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 10.1%, rgba(0, 0, 0, 0) 28.37%)',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={6} alignItems="center">
          {/* Section Title */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 36, md: 54 },
              fontWeight: 700,
              lineHeight: 1.11,
              letterSpacing: '0.01em',
              color: 'text.primary',
              textAlign: 'center',
            }}
          >
            Our Projects
          </Typography>

          {/* Projects Grid */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 4,
              flexWrap: { xs: 'wrap', xl: 'nowrap' },
              width: { xs: '100%', xl: 1360 },
            }}
          >
            {projectCategories.map((category, index) => (
              <ProjectCategory
                key={index}
                title={category.title}
                backgroundImage={category.backgroundImage}
                gradient={category.gradient}
              />
            ))}
          </Box>

          {/* Subtitle and CTA */}
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: 24, md: 34 },
                fontWeight: 400,
                lineHeight: 1.24,
                letterSpacing: '0.01em',
                color: 'text.primary',
                maxWidth: 800,
              }}
            >
              Take the first step towards exhibition success.
              <br />
                             Let&apos;s start planning your standout exhibition experience
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                minWidth: 316,
                height: 48,
                px: 3,
                py: 1,
                backgroundColor: 'primary.400',
                borderRadius: 1,
                fontSize: 24,
                fontWeight: 400,
                letterSpacing: '0.01em',
                textTransform: 'none',
                boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.20), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
                
                '&:hover': {
                  backgroundColor: 'primary.500',
                },
              }}
            >
              Plan your perfect stand
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default ProjectsSection; 