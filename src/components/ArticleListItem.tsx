import { 
  Box, 
  Typography, 
  Link
} from '@mui/material';
import NextLink from 'next/link';
import { Article } from './ArticleCard';

interface ArticleListItemProps {
  article: Article;
  isLast?: boolean;
}

export default function ArticleListItem({ article, isLast = false }: ArticleListItemProps) {
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
          borderBottom: isLast ? 'none' : '1px solid #E9E9E9',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            '& .article-title': {
              color: '#656CAF',
            },
          },
        }}
      >
        {/* Article Title */}
        <Typography
          className="article-title"
          sx={{
            fontFamily: 'Roboto',
            fontSize: '0.875rem', // 14px
            fontWeight: 400,
            lineHeight: '1.125rem', // 18px
            letterSpacing: '0.0175rem',
            color: '#000000',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            alignSelf: 'stretch',
            transition: 'color 0.3s ease',
            mb: '0.25rem', // 4px gap to date
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
            color: '#000000',
            alignSelf: 'stretch',
            pb: '0.5rem', // 8px to bottom border
          }}
        >
          {article.publishDate}
        </Typography>
      </Box>
    </Link>
  );
}