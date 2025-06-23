'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

// Project categories data
const projectCategories = [
  {
    id: 'small',
    title: '< 100 m',
    subtitle: '²',
    slug: 'under-100',
    projects: [
      { id: 1, image: '/projects/project-small.jpg', name: 'Belgium Pavilion' },
      { id: 2, image: '/projects/project-medium.jpg', name: 'Tech Expo Stand' },
      { id: 3, image: '/projects/project-large.jpg', name: 'Innovation Hub' },
    ],
  },
  {
    id: 'medium',
    title: '100 m - 300 m',
    subtitle: '²',
    slug: '100-300',
    projects: [
      { id: 4, image: '/projects/project-medium.jpg', name: 'Energy Summit' },
      { id: 5, image: '/projects/project-large.jpg', name: 'Auto Show 2023' },
      { id: 6, image: '/projects/project-small.jpg', name: 'Digital Forum' },
    ],
  },
  {
    id: 'large',
    title: '> 300 m',
    subtitle: '²',
    slug: 'over-300',
    projects: [
      { id: 7, image: '/projects/project-large.jpg', name: 'World Expo Pavilion' },
      { id: 8, image: '/projects/project-double.jpg', name: 'Corporate Showcase' },
      { id: 9, image: '/projects/project-medium.jpg', name: 'Industry 4.0' },
    ],
  },
  {
    id: 'double',
    title: 'Double-deckers',
    subtitle: '',
    slug: 'double-deckers',
    projects: [
      { id: 10, image: '/projects/project-double.jpg', name: 'Two-Story Pavilion' },
      { id: 11, image: '/projects/project-small.jpg', name: 'Executive Lounge' },
      { id: 12, image: '/projects/project-large.jpg', name: 'VIP Experience' },
    ],
  },
];

// Project Card Component
const ProjectCard = ({ category, currentIndex, onNavigate }: {
  category: typeof projectCategories[0];
  currentIndex: number;
  onNavigate: (direction: 'prev' | 'next') => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const currentProject = category.projects[currentIndex];

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '400px', md: '480px' },
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: '4px',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
          filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
          transform: isHovered ? 'scale(1, 1.1)' : 'scale(1)',
          transformOrigin: 'center center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 100%)',
            zIndex: 1,
          },
        }}
      >
      {/* Background Images with Slide Animation */}
      <Link href={`/projects/${category.slug}`} style={{ position: 'absolute', inset: 0 }}>
        {category.projects.map((project, index) => (
          <Box
            key={project.id}
            sx={{
              position: 'absolute',
              inset: 0,
              opacity: index === currentIndex ? 1 : 0,
              transform: `translateX(${(index - currentIndex) * 100}%)`,
              transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
            }}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </Box>
        ))}
      </Link>

      {/* Title */}
      <Typography
        sx={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          fontSize: { xs: '28px', md: '36px' },
          fontWeight: 700,
          lineHeight: '40px',
          letterSpacing: '-0.02em',
          color: '#FFFFFF',
          zIndex: 2,
        }}
      >
        {category.title}
        {category.subtitle && <sup>{category.subtitle}</sup>}
      </Typography>

      {/* Progress Indicators */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          zIndex: 2,
        }}
      >
        {category.projects.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              opacity: index === currentIndex ? 1 : 0.4,
              transition: 'opacity 0.3s ease',
            }}
          />
        ))}
      </Box>

      </Box>
      
      {/* Navigation Buttons - Outside the scaling container */}
      <Box
        onClick={(e) => {
          e.stopPropagation();
          onNavigate('prev');
        }}
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 3,
        }}
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M30 36L18 24L30 12" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Box>

      <Box
        onClick={(e) => {
          e.stopPropagation();
          onNavigate('next');
        }}
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 3,
        }}
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M18 36L30 24L18 12" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Box>
    </Box>
  );
};

const ProjectsSection = () => {
  // Track current project index for each category
  const [currentIndices, setCurrentIndices] = useState<Record<string, number>>(
    projectCategories.reduce((acc, cat) => ({ ...acc, [cat.id]: 0 }), {})
  );

  const handleNavigate = (categoryId: string, direction: 'prev' | 'next') => {
    const category = projectCategories.find(cat => cat.id === categoryId);
    if (!category) return;

    const currentIndex = currentIndices[categoryId];
    const projectCount = category.projects.length;
    let newIndex = currentIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % projectCount;
    } else {
      newIndex = currentIndex === 0 ? projectCount - 1 : currentIndex - 1;
    }

    setCurrentIndices(prev => ({ ...prev, [categoryId]: newIndex }));
  };

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
            fontWeight: 700,
            lineHeight: { xs: '40px', md: '60px' },
            color: 'grey.800',
            textAlign: 'left',
            mb: { xs: 4, md: 6 },
          }}
        >
          Our Projects
        </Typography>

        {/* Projects Grid - Desktop */}
        <Box
          sx={{
            display: { xs: 'none', md: 'grid' },
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 4,
            mb: 8,
          }}
        >
          {projectCategories.map((category) => (
            <ProjectCard
              key={category.id}
              category={category}
              currentIndex={currentIndices[category.id] || 0}
              onNavigate={(direction) => handleNavigate(category.id, direction)}
            />
          ))}
        </Box>

        {/* Projects Carousel - Mobile */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            gap: 2,
            overflowX: 'auto',
            pb: 2,
            mb: 4,
            mx: { xs: -2, sm: 0 },
            px: { xs: 2, sm: 0 },
            scrollSnapType: 'x mandatory',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {projectCategories.map((category) => (
            <Box
              key={category.id}
              sx={{
                minWidth: { xs: '280px', sm: '320px' },
                scrollSnapAlign: 'start',
              }}
            >
              <ProjectCard
                category={category}
                currentIndex={currentIndices[category.id] || 0}
                onNavigate={(direction) => handleNavigate(category.id, direction)}
              />
            </Box>
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
            sx={{
              fontSize: { xs: '24px', md: '36px' },
              fontWeight: 400,
              lineHeight: { xs: '32px', md: '42px' },
              letterSpacing: '-0.025em',
              color: '#424242',
              maxWidth: { md: '800px', lg: '1000px' },
            }}
          >
            <Box component="span">Take the first step towards </Box>
            <Box component="span" sx={{ fontWeight: 700 }}>exhibition success</Box>
            <Box component="span">.</Box>
            <Box component="br" />
            <Box component="span">Let's start planning your </Box>
            <Box component="span" sx={{ fontWeight: 700, color: '#656CAF' }}>standout</Box>
            <Box component="span"> exhibition </Box>
            <Box component="span" sx={{ fontWeight: 700, color: '#656CAF' }}>experience</Box>
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