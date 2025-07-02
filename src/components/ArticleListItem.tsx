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
          gap: '0.25rem', // 4px gap between title and date
          pb: '0.5rem', // 8px bottom padding
          borderBottom: isLast ? 'none' : '1px solid #E0E0E0',
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
            lineHeight: '1rem', // 16px
            letterSpacing: '0.01em',
            color: '#000000',
            transition: 'color 0.3s ease',
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
          }}
        >
          {article.publishDate}
        </Typography>
      </Box>
    </Link>
  );
}