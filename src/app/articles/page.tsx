'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Button,
} from '@mui/material';
import { AccessTime, Person } from '@mui/icons-material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';

// Mock articles data
const articles = [
  {
    id: 1,
    title: 'The Future of Exhibition Design in the Middle East',
    excerpt: 'Exploring innovative trends and technologies shaping the exhibition industry across the region.',
    author: 'Sarah Johnson',
    publishDate: '2024-03-15',
    readTime: '5 min read',
    category: 'Industry Insights',
    image: '/article-1.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Sustainable Event Management: A Guide for Organizers',
    excerpt: 'How to create environmentally responsible events without compromising on quality or impact.',
    author: 'Ahmed Al-Rashid',
    publishDate: '2024-03-10',
    readTime: '7 min read',
    category: 'Sustainability',
    image: '/article-2.jpg',
    featured: false,
  },
  {
    id: 3,
    title: 'Digital Integration in Modern Exhibitions',
    excerpt: 'Leveraging technology to enhance visitor experience and engagement at trade shows.',
    author: 'Mohammed Hassan',
    publishDate: '2024-03-05',
    readTime: '6 min read',
    category: 'Technology',
    image: '/article-3.jpg',
    featured: false,
  },
  {
    id: 4,
    title: 'Building Successful Business Networks Through Events',
    excerpt: 'Strategies for creating meaningful connections and lasting partnerships at industry events.',
    author: 'Sarah Johnson',
    publishDate: '2024-02-28',
    readTime: '4 min read',
    category: 'Networking',
    image: '/article-4.jpg',
    featured: false,
  },
  {
    id: 5,
    title: 'The Rise of Hybrid Events in Post-Pandemic Era',
    excerpt: 'How the events industry has adapted to combine physical and virtual experiences.',
    author: 'Ahmed Al-Rashid',
    publishDate: '2024-02-20',
    readTime: '8 min read',
    category: 'Industry Trends',
    image: '/article-5.jpg',
    featured: false,
  },
  {
    id: 6,
    title: 'Cultural Considerations in Middle Eastern Events',
    excerpt: 'Understanding and respecting local customs when organizing international exhibitions.',
    author: 'Mohammed Hassan',
    publishDate: '2024-02-15',
    readTime: '5 min read',
    category: 'Culture',
    image: '/article-6.jpg',
    featured: false,
  },
];

// Article Card Component
const ArticleCard = ({ article, featured = false }: { article: typeof articles[0]; featured?: boolean }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        border: featured ? '2px solid #656CAF' : '1px solid #E0E0E0',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
          borderColor: '#656CAF',
        },
      }}
    >
      <CardMedia
        component="img"
        height={featured ? "250" : "200"}
        image={article.image}
        alt={article.title}
        sx={{
          objectFit: 'cover',
        }}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Chip
            label={article.category}
            size="small"
            sx={{
              backgroundColor: '#E9EAF4',
              color: '#4C53A2',
              fontWeight: 500,
              fontSize: 12,
            }}
          />
          {featured && (
            <Chip
              label="Featured"
              size="small"
              sx={{
                backgroundColor: '#656CAF',
                color: '#FFFFFF',
                fontWeight: 500,
                fontSize: 12,
              }}
            />
          )}
        </Stack>

        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: featured ? 28 : 20,
            lineHeight: featured ? '32px' : '24px',
            letterSpacing: '0.01em',
            color: '#262626',
            mb: 2,
          }}
        >
          {article.title}
        </Typography>
        
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '20px',
            letterSpacing: '0.02em',
            color: '#7B7B7B',
            mb: 3,
          }}
        >
          {article.excerpt}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 'auto' }}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Person sx={{ fontSize: 16, color: '#656CAF' }} />
            <Typography
              variant="body2"
              sx={{
                fontSize: 12,
                color: '#7B7B7B',
              }}
            >
              {article.author}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={0.5}>
            <AccessTime sx={{ fontSize: 16, color: '#656CAF' }} />
            <Typography
              variant="body2"
              sx={{
                fontSize: 12,
                color: '#7B7B7B',
              }}
            >
              {article.readTime}
            </Typography>
          </Stack>

          <Typography
            variant="body2"
            sx={{
              fontSize: 12,
              color: '#7B7B7B',
              ml: 'auto',
            }}
          >
            {new Date(article.publishDate).toLocaleDateString()}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default function ArticlesPage() {
  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Header />
      
      {/* Main Content */}
      <Container maxWidth="xl" sx={{ pt: { xs: 12, md: 20 }, pb: 8 }}>
        <Box sx={{ maxWidth: 1360, mx: 'auto', px: { xs: 2, md: 5 } }}>
          
          {/* Page Header */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: { xs: 36, md: 54 },
                lineHeight: '60px',
                color: '#262626',
                mb: 3,
              }}
            >
              Articles & Insights
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: 16,
                lineHeight: '24px',
                letterSpacing: '0.02em',
                color: '#000000',
                maxWidth: 800,
              }}
            >
              Stay informed with the latest trends, insights, and best practices in the exhibition 
              and events industry. Our expert team shares valuable knowledge to help you succeed.
            </Typography>
          </Box>

          {/* Featured Article */}
          {featuredArticle && (
            <Box sx={{ mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: 32,
                  lineHeight: '40px',
                  color: '#262626',
                  mb: 4,
                }}
              >
                Featured Article
              </Typography>
              <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 8 }}>
                  <ArticleCard article={featuredArticle} featured={true} />
                </Grid>
              </Grid>
            </Box>
          )}

          {/* Regular Articles */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: 32,
                lineHeight: '40px',
                color: '#262626',
                mb: 4,
              }}
            >
              Latest Articles
            </Typography>
            <Grid container spacing={4}>
              {regularArticles.map((article) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={article.id}>
                  <ArticleCard article={article} />
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Load More Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#656CAF',
                color: '#FFFFFF',
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: 16,
                lineHeight: '24px',
                letterSpacing: '0.02em',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
                '&:hover': {
                  backgroundColor: '#4C53A2',
                },
              }}
            >
              Load More Articles
            </Button>
          </Box>

        </Box>
      </Container>

      <FooterSection />
    </Box>
  );
}
