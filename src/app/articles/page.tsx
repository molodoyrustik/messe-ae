'use client';

import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';
import ArticleCard, { Article } from '@/components/ArticleCard';
import BigArticle from '@/components/BigArticle';
import CategoriesSection from '@/components/CategoriesSection';
import ArticleListItem from '@/components/ArticleListItem';

// Mock articles data
const articles: Article[] = [
  {
    id: 1,
    slug: 'exhibition-stand-design-adapting',
    title: 'Exhibition Stand Design: Adapting to Different Industries',
    excerpt: 'Exploring innovative trends and technologies shaping the exhibition industry across the region.',
    publishDate: 'Few days ago',
    readTime: '5 min',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop',
  },
  {
    id: 2,
    slug: 'lighting-exhibition-stands',
    title: 'Lighting of Exhibition Stands: How to Make Your Brand Shine',
    excerpt: 'How to create environmentally responsible events without compromising on quality or impact.',
    publishDate: '5 February 2025',
    readTime: '7 min',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    slug: 'digital-integration-exhibitions',
    title: 'Digital Integration in Modern Exhibition Design',
    excerpt: 'Leveraging technology to enhance visitor experience and engagement at trade shows.',
    publishDate: '3 February 2025',
    readTime: '6 min',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    slug: 'sustainable-exhibition-practices',
    title: 'Sustainable Practices in Exhibition Industry',
    excerpt: 'Strategies for creating meaningful connections and lasting partnerships at industry events.',
    publishDate: '28 January 2025',
    readTime: '4 min',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    slug: 'future-of-trade-shows',
    title: 'The Future of Trade Shows in Post-Pandemic Era',
    excerpt: 'How the events industry has adapted to combine physical and virtual experiences.',
    publishDate: '20 January 2025',
    readTime: '8 min',
    category: 'Trends',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    slug: 'exhibition-budget-optimization',
    title: 'Optimizing Your Exhibition Budget for Maximum Impact',
    excerpt: 'Understanding and respecting local customs when organizing international exhibitions.',
    publishDate: '15 January 2025',
    readTime: '5 min',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop',
  },
];

export default function ArticlesPage() {
  const latestArticle = articles[0]; // Get the latest article for BigArticle
  const otherArticles = articles.slice(1); // Get remaining articles

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

          {/* Big Article and Categories Section */}
          <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: { xs: '3rem', md: '4rem' } }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <BigArticle article={latestArticle} />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                <CategoriesSection />
              </Box>
            </Grid>
          </Grid>

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
            {otherArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </Box>

          {/* Articles List - Mobile */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: '100%',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '0.75rem',
            }}
          >
            {otherArticles.map((article, index) => (
              <ArticleListItem 
                key={article.id} 
                article={article} 
                isLast={index === otherArticles.length - 1}
              />
            ))}
          </Box>

          {/* Load More Button */}
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

        </Box>
      </Container>

      <FooterSection />
    </Box>
  );
}