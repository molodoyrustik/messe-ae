import { 
  Box, 
  Typography, 
  Link,
  Stack 
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import NextLink from 'next/link';

export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  category: string;
  image: string;
}

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      component={NextLink}
      href={`/articles/${article.slug}`}
      sx={{ textDecoration: 'none' }}
    >
      <Box
        sx={{
          display: 'flex',
          width: { xs: '100%', md: '27rem' }, // 432px
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '0.75rem', // 12px
          flexShrink: 0,
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'translateY(-0.25rem)',
            '& .article-image': {
              transform: 'scale(1.05)',
            },
            '& .read-article': {
              color: '#4C53A2',
              '& .article-arrow': {
                transform: 'translateX(0.25rem)',
              },
            },
          },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: '100%',
            height: { xs: '13.5rem', md: '15rem' }, // 240px
            position: 'relative',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            backgroundColor: '#F5F5F5',
          }}
        >
          <Box
            component="img"
            src={article.image}
            alt={article.title}
            className="article-image"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            }}
          />
        </Box>

        {/* Title */}
        <Typography
          sx={{
            alignSelf: 'stretch',
            height: { xs: 'auto', md: '4rem' }, // 64px
            fontFamily: 'Roboto',
            fontSize: { xs: '1.25rem', md: '1.5rem' }, // 24px
            fontWeight: 400,
            lineHeight: { xs: '1.5rem', md: '1.75rem' }, // 28px
            letterSpacing: '0.01em',
            color: '#7B7B7B',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {article.title}
        </Typography>

        {/* Bottom Info */}
        <Stack
          direction="row"
          sx={{
            alignSelf: 'stretch',
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
              color: '#262626',
            }}
          >
            {article.publishDate}
          </Typography>

          <Box
            className="read-article"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              px: '0.3125rem', // 5px
              py: '0.25rem', // 4px
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease',
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
                transition: 'color 0.3s ease',
              }}
            >
              Read article
            </Typography>
            <ArrowForward 
              className="article-arrow"
              sx={{ 
                fontSize: '1rem', 
                color: '#656CAF',
                transition: 'all 0.3s ease',
              }} 
            />
          </Box>
        </Stack>
      </Box>
    </Link>
  );
}