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
import BigArticle from '@/components/BigArticle';
import CategoriesSection from '@/components/CategoriesSection';
import ArticleListItem from '@/components/ArticleListItem';
import { useArticles } from '@/hooks/use-articles';
import { Article } from '@/types/api';

export default function ArticlesPage() {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState<Article[]>([]);
  const [latestArticle, setLatestArticle] = useState<Article | null>(null);
  
  const { data, isLoading, error } = useArticles({ 
    page, 
    pageSize: page === 1 ? 6 : 5 // Load 6 on first page (1 for big + 5 for grid), 5 on subsequent pages
  });

  // Update articles when data changes
  if (data && data.data.length > 0) {
    if (page === 1 && !latestArticle) {
      setLatestArticle(data.data[0]);
      setArticles(data.data.slice(1));
    } else if (page > 1) {
      const newArticles = data.data.filter(
        (article) => !articles.some((a) => a.id === article.id)
      );
      if (newArticles.length > 0) {
        setArticles((prev) => [...prev, ...newArticles]);
      }
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
      <Container maxWidth="xl" sx={{ pt: '3.75rem', pb: { xs: '3rem', md: '6rem' } }}>
        <Box sx={{ mx: 'auto', px: { xs: '1rem' } }}>
          
          {/* Page Header */}
          <Box sx={{ mb: { xs: '2rem', md: '3rem' } }}>
            <Typography
              variant="h1"
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
              Messe.ae blog
            </Typography>
            <Typography
              variant="body1"
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
              Stay informed with the latest trends, insights, and best practices in the exhibition 
              and events industry
            </Typography>
          </Box>

          {/* Loading state */}
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
          {!isLoading && !error && latestArticle && (
            <>
              {/* Big Article and Categories Section */}
              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' },
                gap: '2rem',
                mb: { xs: '3rem', md: '4rem' },
                width: '100%'
              }}>
                <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 auto' }, minWidth: 0 }}>
                  <BigArticle article={{
                    id: latestArticle.id,
                    slug: latestArticle.slug,
                    title: latestArticle.title,
                    excerpt: latestArticle.text.substring(0, 150) + '...',
                    publishDate: new Date(latestArticle.createDate).toLocaleDateString('en-US', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    }),
                    readTime: '5 min',
                    category: latestArticle.category?.title || 'Articles',
                    image: latestArticle.image?.url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop',
                  }} />
                </Box>
                <Box sx={{ 
                  flexShrink: 0,
                  width: { xs: '100%', md: '20rem' }
                }}>
                  <CategoriesSection />
                </Box>
              </Box>

              {/* Articles Grid - Desktop */}
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  width: '100%',
                  alignItems: 'center',
                  alignContent: 'center',
                  gap: '2rem',
                  flexWrap: 'wrap',
                }}
              >
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={{
                    id: article.id,
                    slug: article.slug,
                    title: article.title,
                    excerpt: article.text.substring(0, 150) + '...',
                    publishDate: new Date(article.createDate).toLocaleDateString('en-US', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    }),
                    readTime: '5 min',
                    category: article.category?.title || 'Articles',
                    image: article.image?.url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
                  }} />
                ))}
              </Box>

              {/* Articles List - Mobile */}
              <Box
                sx={{
                  display: { xs: 'block', md: 'none' },
                  width: '100%',
                }}
              >
                {/* Top Articles heading */}
                <Typography
                  sx={{
                    color: '#262626',
                    fontFamily: 'Roboto',
                    fontSize: '1rem',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '1.5rem',
                    letterSpacing: '0.02rem',
                    mb: '1rem',
                  }}
                >
                  Top Articles
                </Typography>
                
                {/* Articles container */}
                <Box
                  sx={{
                    display: 'flex',
                    pb: '0.5rem',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '0.25rem',
                    alignSelf: 'stretch',
                    borderBottom: '1px solid #E9E9E9',
                  }}
                >
                  {articles.map((article, index) => (
                  <ArticleListItem 
                    key={article.id} 
                    article={{
                      id: article.id,
                      slug: article.slug,
                      title: article.title,
                      excerpt: article.text.substring(0, 150) + '...',
                      publishDate: new Date(article.createDate).toLocaleDateString('en-US', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      }),
                      readTime: '5 min',
                      category: article.category?.title || 'Articles',
                      image: article.image?.url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
                    }}
                    isLast={index === articles.length - 1}
                  />
                  ))}
                </Box>
              </Box>

              {/* Load More Button */}
              {hasMore && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: '3rem', md: '3.75rem' } }}>
                  <Button
                    variant="outlined"
                    onClick={handleLoadMore}
                    disabled={isLoading}
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
                      '&:disabled': {
                        borderColor: '#ccc',
                        color: '#ccc',
                      },
                    }}
                  >
                    {isLoading ? 'Loading...' : 'Load more'}
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