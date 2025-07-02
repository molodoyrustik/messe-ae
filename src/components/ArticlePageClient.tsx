'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';
import { ContactFormModal } from '@/components/ContactFormModal';
import { Article } from '@/components/ArticleCard';

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
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Header />
      
      {/* Hero Section */}
      <Box
        sx={{
          width: '100%',
          aspectRatio: { xs: 'auto', md: '1439.80/626.00' },
          height: { xs: '25rem', md: 'auto' },
          display: 'inline-flex',
          padding: { xs: '1.5rem 1rem', md: '2.5rem 2.4875rem 3.75rem 2.5rem' },
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: { xs: '10rem', md: '25rem' },
          position: 'relative',
          overflow: 'hidden',
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
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
            zIndex: 1,
          },
        }}
      >
        {/* Date in top right */}
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: { xs: '1rem', md: '1.5rem' }, // 24px
            lineHeight: { xs: '1.5rem', md: '1.75rem' }, // 28px
            letterSpacing: '0.02rem',
            textAlign: 'right',
            color: '#FFFFFF',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {articleData.publishDate}
        </Typography>

        {/* Title and Subtitle */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '1rem', md: '1.5rem' }, // 24px
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 400,
              fontSize: { xs: '2rem', md: '3rem' }, // 48px
              lineHeight: { xs: '2.5rem', md: '3.75rem' }, // 60px
              color: '#FFFFFF',
              maxHeight: { xs: 'none', md: '7rem' }, // 112px
            }}
          >
            {articleData.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.5rem' }, // 24px
              lineHeight: { xs: '1.5rem', md: '1.75rem' }, // 28px
              letterSpacing: '0.02rem',
              color: '#FFFFFF',
              maxHeight: { xs: 'none', md: '6rem' }, // 96px
            }}
          >
            {articleData.subtitle}
          </Typography>
        </Box>
      </Box>

      {/* Article Content */}
      <Container maxWidth="xl" sx={{ pt: { xs: '3rem', md: '3.75rem' }, pb: { xs: '3rem', md: '6rem' }, px: { xs: '1rem', md: 0 } }}>
        <Box>
          <Box sx={{ display: 'flex', gap: { xs: 0, md: '5rem' }, flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start', justifyContent: 'space-between' }}>
            {/* Article Body */}
            <Box
              sx={{
                width: { xs: '100%', md: '58rem' }, // 928px
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem', // 40px
              }}
            >
              {/* Article content will be rendered here */}
              <Box
                dangerouslySetInnerHTML={{ __html: articleData.content }}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2.5rem',
                  '& > p:first-of-type': {
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: '1rem',
                    lineHeight: '1.5rem',
                    letterSpacing: '0.02rem',
                    color: '#000',
                    margin: 0,
                  },
                  '& .section': {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  },
                  '& h2': {
                    fontFamily: 'Roboto',
                    fontWeight: 700,
                    fontSize: '2.25rem',
                    lineHeight: '2.5rem',
                    letterSpacing: '0.02rem',
                    color: '#424242',
                    margin: 0,
                  },
                  '& h3': {
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: '1.5rem',
                    lineHeight: '1.75rem',
                    letterSpacing: '0.02rem',
                    color: '#000',
                    margin: 0,
                  },
                  '& p': {
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: '1rem',
                    lineHeight: '1.5rem',
                    letterSpacing: '0.02rem',
                    color: '#000',
                    margin: 0,
                  },
                  '& strong': {
                    fontWeight: 700,
                  },
                  '& .industry-section': {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                  },
                  '& .industry-item': {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  },
                }}
              />
            </Box>

            {/* Next Articles Section */}
            <Box
              sx={{
                width: { xs: '100%', md: '20rem' }, // 320px
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem', // 12px
                mt: { xs: '3rem', md: 0 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontWeight: 700,
                  fontSize: '2.25rem',
                  lineHeight: '2.5rem',
                  letterSpacing: '0.02rem',
                  color: '#424242',
                }}
              >
                Next articles
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem', // 32px
                }}
              >
                {relatedArticles.slice(0, 3).map((article) => (
                  <Box
                    key={article.id}
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: '15rem', // 240px
                        borderRadius: '0.25rem',
                        overflow: 'hidden',
                        backgroundColor: '#F5F5F5',
                      }}
                    >
                      <Box
                        component="img"
                        src={article.image}
                        alt={article.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: 'Roboto',
                        fontWeight: 400,
                        fontSize: '1.5rem',
                        lineHeight: '1.75rem',
                        letterSpacing: '0.02rem',
                        color: '#000',
                        height: '4rem',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {article.title}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: 'Roboto',
                          fontWeight: 400,
                          fontSize: '0.875rem',
                          lineHeight: '1.125rem',
                          letterSpacing: '0.02rem',
                          color: '#000',
                        }}
                      >
                        {article.publishDate}
                      </Typography>
                      <Button
                        endIcon={<ArrowForward />}
                        href={`/articles/${article.slug}`}
                        sx={{
                          height: '2rem',
                          px: '0.3125rem',
                          py: '0.25rem',
                          borderRadius: '0.5rem',
                          color: '#656CAF',
                          fontFamily: 'Roboto',
                          fontWeight: 400,
                          fontSize: '1rem',
                          lineHeight: '1.5rem',
                          letterSpacing: '0.02rem',
                          textTransform: 'none',
                          '&:hover': {
                            backgroundColor: 'rgba(101, 108, 175, 0.08)',
                          },
                          '& .MuiButton-endIcon': {
                            ml: '0.5rem',
                            '& svg': {
                              fontSize: '1rem',
                            },
                          },
                        }}
                      >
                        Read article
                      </Button>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Start Your Project Button */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' },
            mt: { xs: '3rem', md: '3.75rem' },
          }}
        >
          <Button
            variant="contained"
            onClick={() => setContactModalOpen(true)}
            sx={{
              height: '3rem',
              px: '1.25rem',
              py: '0.5rem',
              backgroundColor: '#656CAF',
              borderRadius: '0.5rem',
              boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.20), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#4C53A2',
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: '1.5rem',
                lineHeight: '1.75rem',
                letterSpacing: '0.02rem',
                color: '#FFFFFF',
              }}
            >
              Start Your Project
            </Typography>
          </Button>
        </Box>
      </Container>

      {/* Contact Form Modal */}
      <ContactFormModal
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <FooterSection />
    </Box>
  );
}