'use client';

import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { ArrowBack } from '@mui/icons-material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';
import ArticleCard, { Article } from '@/components/ArticleCard';
import NextLink from 'next/link';

interface CategoryData {
  name: string;
  description: string;
  articles: Article[];
}

interface CategoryPageClientProps {
  categoryKey: string;
  categoryData: CategoryData;
  allCategories: { id: string; name: string }[];
}

export default function CategoryPageClient({ categoryKey, categoryData, allCategories }: CategoryPageClientProps) {
  if (!categoryData) {
    return (
      <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
        <Header />
        <Container maxWidth="xl" sx={{ pt: '3.75rem', pb: { xs: '3rem', md: '6rem' } }}>
          <Typography>Category not found</Typography>
        </Container>
        <FooterSection />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Header />
      
      {/* Main Content */}
      <Container maxWidth="xl" sx={{ pt: '3.75rem', pb: { xs: '3rem', md: '6rem' } }}>
        <Box sx={{ maxWidth: '85rem', mx: 'auto', px: { xs: '1rem', md: '5rem' } }}>
          
          {/* Back Button */}
          <Button
            component={NextLink}
            href="/articles"
            startIcon={<ArrowBack />}
            sx={{
              color: '#656CAF',
              fontFamily: 'Roboto',
              fontWeight: 400,
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              letterSpacing: '0.02em',
              textTransform: 'none',
              mb: 4,
              '&:hover': {
                backgroundColor: 'rgba(101, 108, 175, 0.08)',
              },
            }}
          >
            Back to All Articles
          </Button>

          {/* Page Header */}
          <Box sx={{ mb: { xs: '2rem', md: '3.75rem' }, textAlign: 'center' }}>
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
              {categoryData.name}
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
              {categoryData.description}
            </Typography>
          </Box>

          {/* Category Filter Chips */}
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              mb: { xs: '2rem', md: '3rem' },
              flexWrap: 'wrap',
              gap: 1.5,
              justifyContent: 'center',
            }}
          >
            <Chip
              label="All"
              component={NextLink}
              href="/articles"
              clickable
              sx={{
                backgroundColor: '#F5F5F5',
                color: '#656CAF',
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
                  backgroundColor: '#E9EAF4',
                },
              }}
            />
            {allCategories.map((cat) => (
              <Chip
                key={cat.id}
                label={cat.name}
                component={NextLink}
                href={`/articles/categories/${cat.id}`}
                clickable
                sx={{
                  backgroundColor: cat.id === categoryKey ? '#656CAF' : '#F5F5F5',
                  color: cat.id === categoryKey ? '#FFFFFF' : '#656CAF',
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
                    backgroundColor: cat.id === categoryKey ? '#4C53A2' : '#E9EAF4',
                  },
                }}
              />
            ))}
          </Stack>

          {/* Articles Grid */}
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {categoryData.articles.map((article) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={article.id}>
                <ArticleCard article={article} />
              </Grid>
            ))}
          </Grid>

          {/* Load More Button */}
          {categoryData.articles.length >= 6 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: '3rem', md: '3.75rem' } }}>
              <Button
                variant="outlined"
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
                }}
              >
                Load more
              </Button>
            </Box>
          )}

        </Box>
      </Container>

      <FooterSection />
    </Box>
  );
}