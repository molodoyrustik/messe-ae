'use client';

import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';
import ArticleCard, { Article } from '@/components/ArticleCard';
import SmallArticleCard from '@/components/SmallArticleCard';

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

export default function CategoryPageClient({ categoryData }: CategoryPageClientProps) {
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
      <Container maxWidth="xl" sx={{ px: { xs: '1rem', md: '2.5rem' }, pt: { xs: '1.5rem', md: '3.75rem' }, pb: { xs: '3rem', md: '6rem' } }}>
        <Box sx={{ mx: 'auto' }}>
          
          {/* Page Header */}
          <Box sx={{ mb: { xs: '2rem', md: '3rem' } }}>
            <Typography
              variant="h1"
              data-id="category-page-title"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: { xs: '2.25rem', md: '3.375rem' },
                lineHeight: { xs: '2.75rem', md: '3.75rem' },
                letterSpacing: '0',
                color: '#262626',
                mb: { xs: '0.5rem', md: '0.75rem' },
              }}
            >
              {categoryData.name}
            </Typography>
            <Typography
              variant="body1"
              data-id="category-page-description"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: { xs: '0.875rem', md: '1rem' },
                lineHeight: { xs: '1.25rem', md: '1.5rem' },
                letterSpacing: '0.02rem',
                color: '#000',
                maxWidth: '50rem',
              }}
            >
              {categoryData.description}
            </Typography>
          </Box>

          {/* Articles Grid - Desktop */}
          <Box
            data-id="category-articles-grid"
            sx={{
              display: { xs: 'none', md: 'grid' },
              width: '100%',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
            }}
          >
            {categoryData.articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </Box>

          {/* Articles Grid - Mobile */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: '100%',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '1.5rem',
            }}
          >
            {categoryData.articles.map((article) => (
              <SmallArticleCard key={article.id} article={article} />
            ))}
          </Box>

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