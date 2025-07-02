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
            left: { xs: '0', md: 'auto' },
            right: { xs: '0', md: '0' },
            top: { xs: 'auto', md: 'auto' },
            bottom: { xs: '0', md: '0' },
            width: { xs: '100%', md: '34.25rem' }, // 548px
            height: { xs: 'auto', md: '9.5rem' }, // 152px
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderTopLeftRadius: { xs: '0', md: '0.25rem' },
            borderTopRightRadius: { xs: '0.5rem', md: '0' },
            borderBottomLeftRadius: '0',
            borderBottomRightRadius: '0',
            overflow: 'hidden',
            transition: 'background-color 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            gap: '1rem',
            p: { xs: '1rem', md: '1.5rem 2rem 1rem 2rem' },
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              width: '100%',
              fontFamily: 'Roboto',
              fontSize: { xs: '1.25rem', md: '1.5rem' }, // 24px
              fontWeight: 400,
              lineHeight: { xs: '1.5rem', md: '1.75rem' }, // 28px
              letterSpacing: '0.01em',
              color: '#000',
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
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: '0.875rem', // 14px
                fontWeight: 400,
                lineHeight: '1.25rem', // 20px
                letterSpacing: '0.01em',
                color: '#000',
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