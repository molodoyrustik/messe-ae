import { Box, Typography, Link, Stack } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import NextLink from 'next/link';

interface Category {
  id: string;
  name: string;
  href: string;
}

const categories: Category[] = [
  { id: 'expert-insights', name: 'Expert insights', href: '/articles/categories/expert-insights' },
  { id: 'exhibition-trends', name: 'Exhibition stands trends', href: '/articles/categories/exhibition-trends' },
  { id: 'about-messe', name: 'About messe.ae', href: '/articles/categories/about-messe' },
];

export default function CategoriesSection() {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: '20rem' }, // 320px
        height: { xs: 'auto', md: '24rem' }, // 384px
        backgroundColor: '#F5F5F5',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        p: { xs: 2, md: 0 },
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          position: { xs: 'relative', md: 'absolute' },
          left: { xs: 0, md: '2rem' }, // 32px
          top: { xs: 0, md: '1.5rem' }, // 24px
          fontFamily: 'Roboto',
          fontSize: '1.5rem', // 24px
          fontWeight: 700,
          lineHeight: '1.75rem', // 28px
          letterSpacing: '0.01em',
          color: '#7B7B7B',
          mb: { xs: 2, md: 0 },
        }}
      >
        Categories
      </Typography>

      {/* Categories List */}
      <Stack
        sx={{
          position: { xs: 'relative', md: 'absolute' },
          left: { xs: 0, md: '2rem' }, // 32px
          top: { xs: 'auto', md: '4.75rem' }, // 76px
          width: { xs: '100%', md: '16rem' }, // 256px
          gap: '0.5rem',
        }}
      >
        {categories.map((category) => (
          <Link
            key={category.id}
            component={NextLink}
            href={category.href}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              pt: '0.25rem', // 4px
              pb: '0.5rem', // 8px
              borderBottom: '1px solid #E0E0E0',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderBottomColor: '#656CAF',
                '& .category-name': {
                  color: '#656CAF',
                },
                '& .category-arrow': {
                  transform: 'translateX(0.25rem)',
                  color: '#656CAF',
                },
              },
            }}
          >
            <Typography
              className="category-name"
              sx={{
                fontFamily: 'Roboto',
                fontSize: '1rem', // 16px
                fontWeight: 400,
                lineHeight: '1.5rem', // 24px
                letterSpacing: '0.01em',
                color: '#262626',
                transition: 'color 0.3s ease',
              }}
            >
              {category.name}
            </Typography>
            <ArrowForward 
              className="category-arrow"
              sx={{ 
                fontSize: '1rem', 
                color: '#7B7B7B',
                transition: 'all 0.3s ease',
              }} 
            />
          </Link>
        ))}
      </Stack>
    </Box>
  );
}