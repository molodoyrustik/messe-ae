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
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';
import ArticleCard, { Article } from '@/components/ArticleCard';
import NextLink from 'next/link';

// Mock articles data
const articles: Article[] = [
  {
    id: 1,
    slug: 'future-exhibition-design-middle-east',
    title: 'The Future of Exhibition Design',
    excerpt: 'Exploring innovative trends and technologies shaping the exhibition industry across the region.',
    publishDate: '15 mar 2024',
    readTime: '5 min',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    slug: 'sustainable-event-management',
    title: 'Sustainable Event Management',
    excerpt: 'How to create environmentally responsible events without compromising on quality or impact.',
    publishDate: '10 mar 2024',
    readTime: '7 min',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    slug: 'digital-integration-exhibitions',
    title: 'Digital Integration in Exhibitions',
    excerpt: 'Leveraging technology to enhance visitor experience and engagement at trade shows.',
    publishDate: '05 mar 2024',
    readTime: '6 min',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    slug: 'business-networking-events',
    title: 'Building Business Networks',
    excerpt: 'Strategies for creating meaningful connections and lasting partnerships at industry events.',
    publishDate: '28 feb 2024',
    readTime: '4 min',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    slug: 'hybrid-events-post-pandemic',
    title: 'The Rise of Hybrid Events',
    excerpt: 'How the events industry has adapted to combine physical and virtual experiences.',
    publishDate: '20 feb 2024',
    readTime: '8 min',
    category: 'Trends',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    slug: 'cultural-considerations-events',
    title: 'Cultural Considerations in Events',
    excerpt: 'Understanding and respecting local customs when organizing international exhibitions.',
    publishDate: '15 feb 2024',
    readTime: '5 min',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop',
  },
];

export default function ArticlesPage() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Header />
      
      {/* Main Content */}
      <Container maxWidth="xl" sx={{ pt: '3.75rem', pb: { xs: '3rem', md: '6rem' } }}>
        <Box sx={{ maxWidth: '85rem', mx: 'auto', px: { xs: '1rem', md: '5rem' } }}>
          
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
              Articles
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
              Stay informed with the latest trends, insights, and best practices in the exhibition 
              and events industry
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
              clickable
              sx={{
                backgroundColor: '#656CAF',
                color: '#FFFFFF',
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
                  backgroundColor: '#4C53A2',
                },
              }}
            />
            <Chip
              label="Design"
              component={NextLink}
              href="/articles/categories/design"
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
            <Chip
              label="Sustainability"
              component={NextLink}
              href="/articles/categories/sustainability"
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
            <Chip
              label="Technology"
              component={NextLink}
              href="/articles/categories/technology"
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
            <Chip
              label="Business"
              component={NextLink}
              href="/articles/categories/business"
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
            <Chip
              label="Trends"
              component={NextLink}
              href="/articles/categories/trends"
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
            <Chip
              label="Culture"
              component={NextLink}
              href="/articles/categories/culture"
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
          </Stack>

          {/* Articles Grid */}
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {articles.map((article) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={article.id}>
                <ArticleCard article={article} />
              </Grid>
            ))}
          </Grid>

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
