import { 
  Card, 
  CardContent, 
  CardMedia, 
  Chip, 
  Stack, 
  Typography, 
  Link,
  Box 
} from '@mui/material';
import { AccessTime } from '@mui/icons-material';
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
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '0.75rem',
          overflow: 'hidden',
          boxShadow: 'none',
          border: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-0.5rem)',
            '& .article-image': {
              transform: 'scale(1.05)',
            },
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '0.75rem',
            backgroundColor: '#F5F5F5',
            aspectRatio: { xs: '16/9', md: '4/3' },
          }}
        >
          <CardMedia
            component="img"
            image={article.image}
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
        <CardContent sx={{ p: 0, pt: '1.5rem' }}>
          <Stack spacing={1}>
            <Chip
              label={article.category}
              size="small"
              sx={{
                backgroundColor: '#F5F5F5',
                color: '#656CAF',
                fontFamily: 'Roboto',
                fontWeight: 500,
                fontSize: '0.75rem',
                lineHeight: '1rem',
                letterSpacing: '0.02em',
                height: '1.5rem',
                borderRadius: '0.25rem',
                alignSelf: 'flex-start',
                '& .MuiChip-label': {
                  px: '0.75rem',
                },
              }}
            />

            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: { xs: '1.125rem', md: '1.25rem' },
                lineHeight: { xs: '1.5rem', md: '1.75rem' },
                letterSpacing: '0.01em',
                color: '#262626',
              }}
            >
              {article.title}
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
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {article.excerpt}
            </Typography>

            <Stack direction="row" alignItems="center" spacing={2} sx={{ pt: 1 }}>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: '0.75rem',
                  lineHeight: '1rem',
                  letterSpacing: '0.02em',
                  color: '#7B7B7B',
                  textTransform: 'uppercase',
                }}
              >
                {article.publishDate}
              </Typography>

              <Stack direction="row" alignItems="center" spacing={0.5}>
                <AccessTime sx={{ fontSize: '1rem', color: '#7B7B7B' }} />
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: '0.75rem',
                    lineHeight: '1rem',
                    letterSpacing: '0.02em',
                    color: '#7B7B7B',
                  }}
                >
                  {article.readTime}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
}