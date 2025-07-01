import { Box, Typography, Link } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import NextLink from 'next/link';
import { Article } from './ArticleCard';

interface BigArticleProps {
  article: Article;
}

export default function BigArticle({ article }: BigArticleProps) {
  return (
    <Link
      component={NextLink}
      href={`/articles/${article.slug}`}
      sx={{ textDecoration: 'none', display: 'block' }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '63.25rem', // 1012px
          height: { xs: '20rem', md: '24rem' }, // 384px
          position: 'relative',
          borderRadius: '0.5rem',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            '& .overlay-content': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
          },
        }}
      >
        {/* Background Image */}
        <Box
          component="img"
          src={article.image}
          alt={article.title}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Content Overlay */}
        <Box
          className="overlay-content"
          sx={{
            position: 'absolute',
            left: { xs: '0', md: '29rem' }, // 464px
            top: { xs: 'auto', md: '18rem' }, // 288px
            bottom: { xs: '0', md: 'auto' },
            width: { xs: '100%', md: '34.25rem' }, // 548px
            height: { xs: 'auto', md: '9rem' }, // 144px
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderTopLeftRadius: { xs: '0', md: '0.5rem' },
            borderTopRightRadius: { xs: '0.5rem', md: '0' },
            overflow: 'hidden',
            transition: 'background-color 0.3s ease',
            p: { xs: 2, md: 0 },
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              position: { xs: 'relative', md: 'absolute' },
              left: { xs: 0, md: '2rem' }, // 32px
              top: { xs: 0, md: '1.5rem' }, // 24px
              width: { xs: '100%', md: '30.25rem' }, // 484px
              height: { xs: 'auto', md: '4rem' }, // 64px
              fontFamily: 'Roboto',
              fontSize: { xs: '1.25rem', md: '1.5rem' }, // 24px
              fontWeight: 400,
              lineHeight: { xs: '1.5rem', md: '1.75rem' }, // 28px
              letterSpacing: '0.01em',
              color: '#262626',
              display: '-webkit-box',
              WebkitLineClamp: { xs: 3, md: 2 },
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {article.title}
          </Typography>

          {/* Bottom Info */}
          <Box
            sx={{
              position: { xs: 'relative', md: 'absolute' },
              left: { xs: 0, md: '2rem' }, // 32px
              top: { xs: 'auto', md: '6.5rem' }, // 104px
              width: { xs: '100%', md: '30.25rem' }, // 484px
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: { xs: 2, md: 0 },
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: '0.875rem', // 14px
                fontWeight: 400,
                lineHeight: '1.25rem', // 20px
                letterSpacing: '0.01em',
                color: '#262626',
              }}
            >
              {article.publishDate}
            </Typography>

            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                px: '0.3125rem', // 5px
                py: '0.25rem', // 4px
                borderRadius: '0.5rem',
                '&:hover': {
                  backgroundColor: 'rgba(101, 108, 175, 0.08)',
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: '1rem', // 16px
                  fontWeight: 400,
                  lineHeight: '1.5rem', // 24px
                  letterSpacing: '0.01em',
                  color: '#656CAF',
                }}
              >
                Read article
              </Typography>
              <ArrowForward sx={{ fontSize: '1rem', color: '#656CAF' }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}