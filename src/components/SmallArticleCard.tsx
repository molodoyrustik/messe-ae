import { 
  Box, 
  Typography, 
  Link
} from '@mui/material';
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
            width: '100%',
            height: '10rem', // 160px
            borderRadius: '0.5rem',
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
            fontFamily: 'Roboto',
            fontSize: '0.875rem', // 14px
            fontWeight: 400,
            lineHeight: '1rem', // 16px
            letterSpacing: '0.01em',
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
            fontFamily: 'Roboto',
            fontSize: '0.625rem', // 10px
            fontWeight: 400,
            lineHeight: '0.75rem', // 12px
            color: '#000',
          }}
        >
          {article.publishDate}
        </Typography>
      </Box>
    </Link>
  );
}