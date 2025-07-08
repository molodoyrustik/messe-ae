import { 
  Box, 
  Typography, 
  Link
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import NextLink from 'next/link';
import { Article } from './ArticleCard';

interface SmallArticleCardProps {
  article: Article;
}

export default function SmallArticleCard({ article }: SmallArticleCardProps) {
  return (
    <Link
      component={NextLink}
      href={`/articles/${article.slug}`}
      sx={{ 
        textDecoration: 'none',
        display: 'block',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '0.25rem',
          alignSelf: 'stretch',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          overflow: 'hidden',
          '&:hover': {
            '& .article-image': {
              transform: 'scale(1.05)',
            },
            '& .article-title': {
              color: '#656CAF',
            },
          },
        }}
      >
        {/* Article Image */}
        <Box
          sx={{
            alignSelf: 'stretch',
            height: '15rem', // 240px
            borderRadius: '0.25rem',
            overflow: 'hidden',
            backgroundColor: '#F5F5F5',
          }}
        >
          <Box
            component="img"
            className="article-image"
            src={article.image}
            alt={article.title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            }}
          />
        </Box>

        {/* Article Title */}
        <Typography
          className="article-title"
          sx={{
            alignSelf: 'stretch',
            fontFamily: 'Roboto',
            fontSize: '0.875rem', // 14px
            fontWeight: 400,
            lineHeight: '1.125rem', // 18px
            letterSpacing: '0.0175rem',
            color: '#000',
            transition: 'color 0.3s ease',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {article.title}
        </Typography>

        {/* Publish Date */}
        <Typography
          sx={{
            alignSelf: 'stretch',
            fontFamily: 'Roboto',
            fontSize: '0.625rem', // 10px
            fontWeight: 400,
            lineHeight: '0.75rem', // 12px
            color: '#000',
          }}
        >
          {article.publishDate}
        </Typography>

        {/* Read Article Button */}
        <Box
          className="read-article"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
            pl: 0,
            pr: '0.3125rem', // 5px
            py: '0.25rem', // 4px
            borderRadius: '0.5rem',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(101, 108, 175, 0.08)',
              '& .article-arrow': {
                transform: 'translateX(0.25rem)',
              },
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontSize: '0.75rem', // 12px
              fontWeight: 400,
              lineHeight: 1, // leading-none
              letterSpacing: '0.025rem', // tracking-wide
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
      </Box>
    </Link>
  );
}