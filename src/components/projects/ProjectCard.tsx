'use client';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { Project } from '@/types/api';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const baseImageUrl = project.images?.[0]?.formats?.medium?.url || 
                       project.images?.[0]?.url;
  
  // Strapi sometimes returns relative URLs, so we need to prepend the base URL
  const imageUrl = baseImageUrl && !baseImageUrl.startsWith('http') 
    ? `https://lovely-idea-e9a72cf425.strapiapp.com${baseImageUrl}`
    : baseImageUrl;

  const formatSize = (size: number) => {
    if (size < 50) return '< 50';
    if (size <= 100) return '50 - 100';
    if (size <= 150) return 'up to 150';
    if (size <= 300) return '101 - 300';
    return '> 300';
  };

  // Count projects for this client (in real app, this would come from API)
  const projectCount = 1;

  return (
    <Box
      component={Link}
      href={`/projects/${project.id}`}
      sx={{
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 2.5,
        '&:hover': {
          '& img': {
            transform: 'scale(1.05)',
          },
        },
      }}
    >
      {imageUrl ? (
        <Box
          component="img"
          src={imageUrl}
          alt={project.client?.name || project.title}
          sx={{
            width: '100%',
            height: { xs: 240, md: 328 },
            objectFit: 'cover',
            borderRadius: '4px',
            transition: 'transform 0.3s ease',
          }}
        />
      ) : (
        <Box
          sx={{
            width: '100%',
            height: { xs: 240, md: 328 },
            backgroundColor: '#E9EAF4',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6" color="text.secondary">
            No Image
          </Typography>
        </Box>
      )}
      
      <Box sx={{ display: 'flex', gap: 2.5, flexDirection: { xs: 'column', md: 'row' } }}>
        <Box sx={{ width: { xs: '100%', md: 296 }, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: { xs: 20, md: 24 },
                lineHeight: '28px',
                letterSpacing: '0.01em',
                color: '#000000',
              }}
            >
              Client:
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: { xs: 20, md: 24 },
                fontWeight: 700,
                lineHeight: '28px',
                letterSpacing: '0.01em',
                color: '#262626',
                flex: 1,
              }}
            >
              {project.client?.name || 'Unknown'}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: 16,
                lineHeight: '24px',
                letterSpacing: '0.02em',
                color: '#000000',
              }}
            >
              Number of projects:
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: 16,
                fontWeight: 700,
                lineHeight: '24px',
                letterSpacing: '0.02em',
                color: '#000000',
                flex: 1,
              }}
            >
              {projectCount}
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ width: { xs: '100%', md: 116 }, display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' }, alignItems: 'center' }}>
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontSize: 16,
              fontWeight: 700,
              lineHeight: '24px',
              letterSpacing: '0.02em',
              color: '#000000',
              textAlign: { xs: 'left', md: 'right' },
            }}
          >
            {formatSize(project.totalSize)} m<sup>2</sup>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}