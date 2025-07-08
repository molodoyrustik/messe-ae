'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  CircularProgress,
} from '@mui/material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';
import ArticleCard from '@/components/ArticleCard';
import SmallArticleCard from '@/components/SmallArticleCard';
import { useArticles } from '@/hooks/use-articles';
import { formatArticleDate } from '@/utils/date';

interface CategoryClientPageProps {
  categorySlug: string;
  categoryData: {
    title: string;
    description: string;
  };
}

export default function CategoryClientPage({ categorySlug, categoryData }: CategoryClientPageProps) {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState<any[]>([]);
  
  const { data, isLoading, error } = useArticles({ 
    page, 
    pageSize: 6,
    categorySlug
  });

  // Update articles when data changes
  if (data && data.data.length > 0) {
    const newArticles = data.data.filter(
      (article) => !articles.some((a) => a.id === article.id)
    );
    if (newArticles.length > 0) {
      setArticles((prev) => [...prev, ...newArticles]);
    }
  }

  const hasMore = data ? page < data.meta.pagination.pageCount : false;

  const handleLoadMore = () => {
    if (hasMore) {
      setPage((prev) => prev + 1);
    }
  };

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
              {categoryData.title}
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

          {/* Loading state for first load */}
          {isLoading && page === 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: '3rem' }}>
              <CircularProgress sx={{ color: '#656CAF' }} />
            </Box>
          )}

          {/* Error state */}
          {error && (
            <Box sx={{ textAlign: 'center', py: '3rem' }}>
              <Typography variant="body1" color="error">
                Failed to load articles. Please try again later.
              </Typography>
            </Box>
          )}

          {/* Content */}
          {articles.length > 0 && (
            <>
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
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={{
                    id: article.id,
                    slug: article.slug,
                    title: article.title,
                    excerpt: article.text.substring(0, 150) + '...',
                    publishDate: formatArticleDate(article.createDate),
                    readTime: '5 min',
                    category: article.category?.title || categoryData.title,
                    image: article.image?.url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
                  }} />
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
                {articles.map((article) => (
                  <SmallArticleCard key={article.id} article={{
                    id: article.id,
                    slug: article.slug,
                    title: article.title,
                    excerpt: article.text.substring(0, 150) + '...',
                    publishDate: formatArticleDate(article.createDate),
                    readTime: '5 min',
                    category: article.category?.title || categoryData.title,
                    image: article.image?.url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
                  }} />
                ))}
              </Box>

              {/* Loading indicator for more articles */}
              {isLoading && page > 1 && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: '2rem', md: '2rem' } }}>
                  <CircularProgress sx={{ color: '#656CAF' }} />
                </Box>
              )}

              {/* Load More Button */}
              {hasMore && !isLoading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: '3rem', md: '3.75rem' } }}>
                  <Button
                    variant="outlined"
                    onClick={handleLoadMore}
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
            </>
          )}

        </Box>
      </Container>

      <FooterSection />
    </Box>
  );
}