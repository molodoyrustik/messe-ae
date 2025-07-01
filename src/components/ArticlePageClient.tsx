'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  Breadcrumbs,
  Link,
  Button,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { AccessTime, ArrowBack, Share } from '@mui/icons-material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import ArticleCard, { Article } from '@/components/ArticleCard';

interface ArticleData {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  category: string;
  heroImage: string;
  content: string;
}

interface ArticlePageClientProps {
  articleData: ArticleData;
  relatedArticles: Article[];
}

export default function ArticlePageClient({ articleData, relatedArticles }: ArticlePageClientProps) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Header />
      
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '50vh', md: '60vh' },
          minHeight: { xs: '25rem', md: '30rem' },
          overflow: 'hidden',
          mt: { xs: 0, md: 0 },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${articleData.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
            },
          }}
        />
        
        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            pb: { xs: 4, md: 6 },
          }}
        >
          <Box sx={{ maxWidth: '85rem', mx: 'auto', px: { xs: '1rem', md: '5rem' }, width: '100%' }}>
            {/* Breadcrumbs */}
            <Breadcrumbs
              sx={{
                mb: 3,
                '& .MuiBreadcrumbs-ol': {
                  color: '#FFFFFF',
                },
                '& .MuiBreadcrumbs-separator': {
                  color: '#FFFFFF',
                },
              }}
            >
              <Link
                component={NextLink}
                href="/"
                sx={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Home
              </Link>
              <Link
                component={NextLink}
                href="/articles"
                sx={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Articles
              </Link>
              <Typography color="#FFFFFF">{articleData.category}</Typography>
            </Breadcrumbs>

            {/* Article Meta */}
            <Stack spacing={3}>
              <Chip
                label={articleData.category}
                size="small"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  fontFamily: 'Roboto',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  lineHeight: '1.25rem',
                  letterSpacing: '0.02em',
                  height: '2rem',
                  borderRadius: '0.5rem',
                  alignSelf: 'flex-start',
                  backdropFilter: 'blur(10px)',
                  '& .MuiChip-label': {
                    px: '1rem',
                  },
                }}
              />

              <Typography
                variant="h1"
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '3rem' },
                  lineHeight: { xs: '2.5rem', md: '3.5rem' },
                  letterSpacing: '0.01em',
                  color: '#FFFFFF',
                  maxWidth: '50rem',
                }}
              >
                {articleData.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: { xs: '1.5rem', md: '1.75rem' },
                  letterSpacing: '0.02em',
                  color: '#FFFFFF',
                  maxWidth: '50rem',
                  opacity: 0.9,
                }}
              >
                {articleData.subtitle}
              </Typography>

              <Stack direction="row" alignItems="center" spacing={3}>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
                    letterSpacing: '0.02em',
                    color: '#FFFFFF',
                    textTransform: 'uppercase',
                  }}
                >
                  {articleData.publishDate}
                </Typography>

                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <AccessTime sx={{ fontSize: '1.25rem', color: '#FFFFFF' }} />
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Roboto',
                      fontSize: '0.875rem',
                      lineHeight: '1.25rem',
                      letterSpacing: '0.02em',
                      color: '#FFFFFF',
                    }}
                  >
                    {articleData.readTime}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Article Content */}
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Box sx={{ maxWidth: '85rem', mx: 'auto', px: { xs: '1rem', md: '5rem' } }}>
          <Grid container spacing={{ xs: 4, md: 8 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              {/* Action Buttons */}
              <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                <Button
                  startIcon={<ArrowBack />}
                  onClick={() => router.back()}
                  sx={{
                    color: '#656CAF',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
                    letterSpacing: '0.02em',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(101, 108, 175, 0.08)',
                    },
                  }}
                >
                  Back to Articles
                </Button>
                <Button
                  startIcon={<Share />}
                  onClick={handleShare}
                  sx={{
                    color: '#656CAF',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
                    letterSpacing: '0.02em',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(101, 108, 175, 0.08)',
                    },
                  }}
                >
                  {copied ? 'Copied!' : 'Share'}
                </Button>
              </Stack>

              {/* Article Body */}
              <Box
                dangerouslySetInnerHTML={{ __html: articleData.content }}
                sx={{
                  '& p': {
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: '1rem',
                    lineHeight: '1.75rem',
                    letterSpacing: '0.02em',
                    color: '#262626',
                    marginBottom: '1.5rem',
                  },
                  '& h2': {
                    fontFamily: 'Roboto',
                    fontWeight: 700,
                    fontSize: '1.75rem',
                    lineHeight: '2.25rem',
                    letterSpacing: '0.01em',
                    color: '#262626',
                    marginTop: '2.5rem',
                    marginBottom: '1.5rem',
                  },
                  '& ul, & ol': {
                    paddingLeft: '1.5rem',
                    marginBottom: '1.5rem',
                  },
                  '& li': {
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: '1rem',
                    lineHeight: '1.75rem',
                    letterSpacing: '0.02em',
                    color: '#262626',
                    marginBottom: '0.5rem',
                  },
                }}
              />

              {/* Author Info */}
              <Box
                sx={{
                  mt: 6,
                  pt: 4,
                  borderTop: '1px solid #E0E0E0',
                }}
              >
                <Stack spacing={1}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 500,
                      fontSize: '1.125rem',
                      lineHeight: '1.5rem',
                      letterSpacing: '0.01em',
                      color: '#262626',
                    }}
                  >
                    {articleData.author}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: '0.875rem',
                      lineHeight: '1.25rem',
                      letterSpacing: '0.02em',
                      color: '#7B7B7B',
                    }}
                  >
                    {articleData.authorRole}
                  </Typography>
                </Stack>
              </Box>
            </Grid>

            {/* Sidebar */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ position: 'sticky', top: '6rem' }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    lineHeight: '2rem',
                    letterSpacing: '0.01em',
                    color: '#262626',
                    mb: 3,
                  }}
                >
                  Related Articles
                </Typography>
                <Stack spacing={3}>
                  {relatedArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <FooterSection />
    </Box>
  );
}