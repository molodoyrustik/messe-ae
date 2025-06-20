'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  styled,
} from '@mui/material';
import Image from 'next/image';


// Project card with hover effects
const ProjectCard = styled(Box)(() => ({
  width: '100%',
  height: '480px',
  borderRadius: '8px',
  overflow: 'hidden',
  position: 'relative',
  filter: 'grayscale(100%)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  
  '&:hover': {
    filter: 'grayscale(0%)',
    transform: 'translateY(-4px)',
    boxShadow: '0px 8px 24px rgba(0,0,0,0.15)',
  },
}));

// Navigation arrow button
const NavButton = styled(Box)(() => ({
  width: '48px',
  height: '48px',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 2,
  
  '& .arrow': {
    width: '12px',
    height: '24px',
    border: '4px solid white',
    borderLeft: 'none',
    borderBottom: 'none',
    borderRadius: '2px',
  },
  
  '&.left': {
    left: 0,
    '& .arrow': {
      transform: 'rotate(-135deg)',
    },
  },
  
  '&.right': {
    right: 0,
    '& .arrow': {
      transform: 'rotate(45deg)',
    },
  },
}));

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: '< 100 m²',
      image: '/projects/small-stands.svg',
    },
    {
      id: 2,
      title: '100 m - 300 m²',
      image: '/projects/medium-stands.svg',
    },
    {
      id: 3,
      title: '> 300 m²',
      image: '/projects/large-stands.svg',
    },
    {
      id: 4,
      title: 'Double-deckers',
      image: '/projects/double-deck.svg',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: '1rem', md: '2.5rem' } }}>
        {/* Section Title */}
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: 32, md: 48 },
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 700,
            lineHeight: { xs: '40px', md: '60px' },
            color: 'grey.800',
            textAlign: 'left',
            mb: { xs: 4, md: 6 },
          }}
        >
          Our Projects
        </Typography>

        {/* Projects Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: { xs: 3, md: 4 },
            mb: { xs: 6, md: 8 },
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              {/* Background Image with gradient overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 100%)',
                    zIndex: 1,
                  },
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Box>

              {/* Project Title */}
              <Typography
                variant="h4"
                sx={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  fontSize: { xs: 28, md: 36 },
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 700,
                  lineHeight: '40px',
                  letterSpacing: '-0.02em',
                  color: 'white',
                  textShadow: '0px 2px 8px rgba(0,0,0,0.3)',
                  zIndex: 2,
                }}
              >
                {project.title}
              </Typography>

              {/* Navigation Arrows */}
              <NavButton className="left">
                <div className="arrow" />
              </NavButton>
              
              <NavButton className="right">
                <div className="arrow" />
              </NavButton>
            </ProjectCard>
          ))}
        </Box>

        {/* Call to Action Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* CTA Text */}
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: 24, md: 36 },
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 400,
              lineHeight: '40px',
              letterSpacing: '-0.02em',
              color: 'grey.800',
              maxWidth: { md: '800px', lg: '1000px' },
            }}
          >
            Take the first step towards exhibition success.
            <br />
            Let&apos;s start planning your{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              standout
            </Box>{' '}
            exhibition{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              experience
            </Box>
          </Typography>

          {/* CTA Button */}
          <Button
            variant="contained"
            size="large"
            sx={{
              width: { xs: '100%', md: '320px' },
              height: '48px',
              px: 5,
              py: 2,
              backgroundColor: 'primary.main',
              borderRadius: '8px',
              boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.20), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
              fontSize: { xs: 18, md: 24 },
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 400,
              lineHeight: '28px',
              letterSpacing: '-0.02em',
              textTransform: 'none',
              color: 'white',
              
              '&:hover': {
                backgroundColor: 'primary.dark',
                transform: 'translateY(-2px)',
                boxShadow: '0px 6px 12px rgba(0,0,0,0.25)',
              },
            }}
          >
            Plan your perfect stand
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection; 