'use client';

import {
  Box,
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
} from '@mui/material';

interface AwardCardProps {
  imageUrl: string;
  category: string;
  show: string;
  client: string;
  article: string;
  link: string;
}

const AwardCard = ({ imageUrl, category, show, client, article, link }: AwardCardProps) => {
  return (
    <Card
      sx={{
        width: 316,
        backgroundColor: 'background.paper',
        borderRadius: 1,
        boxShadow: 'none',
        border: '1px solid',
        borderColor: 'grey.200',
      }}
    >
      <CardContent sx={{ p: 2.5 }}>
        <Stack spacing={2.5}>
          {/* Award Image */}
          <Box
            sx={{
              width: '100%',
              height: 200,
              backgroundColor: 'grey.100',
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {!imageUrl && (
              <Typography variant="body2" color="grey.500">
                Award Image
              </Typography>
            )}
          </Box>

          {/* Award Details */}
          <Stack spacing={0.5}>
            <Stack direction="row" spacing={0.5} alignItems="baseline">
              <Typography
                variant="body2"
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  color: 'grey.800',
                }}
              >
                Category:
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  color: 'grey.800',
                }}
              >
                {category}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.5} alignItems="baseline">
              <Typography
                variant="body2"
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  color: 'grey.800',
                }}
              >
                Show:
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  color: 'grey.800',
                }}
              >
                {show}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.5} alignItems="baseline">
              <Typography
                variant="body2"
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  color: 'grey.800',
                }}
              >
                Client:
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  color: 'grey.800',
                }}
              >
                {client}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.5} alignItems="baseline" sx={{ mt: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  color: 'text.primary',
                }}
              >
                Article
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  color: 'text.primary',
                }}
              >
                at
              </Typography>
              <Typography
                component="a"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                variant="body2"
                sx={{
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  color: 'primary.400',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  
                  '&:hover': {
                    color: 'primary.600',
                  },
                }}
              >
                {article}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

const AwardsSection = () => {
  const awards = [
    {
      imageUrl: '/awards/award-1.jpg',
      category: 'Best Pavilion',
      show: 'Big 5',
      client: 'Belgium Pavilion',
      article: 'World Exhibition Stand Awards – The Winners Supplement',
      link: '#',
    },
    {
      imageUrl: '/awards/award-2.jpg',
      category: 'Double-Deck Exhibit',
      show: 'Interplastica',
      client: 'Sibur Holding PJSC',
      article: 'Exhibitor Magazine',
      link: '#',
    },
    {
      imageUrl: '/awards/award-3.jpg',
      category: 'Best Sustainable Stand',
      show: 'ADIPEC',
      client: 'Siemens Energy',
      article: 'World Exhibition Stand Awards – The Winners Supplement',
      link: '#',
    },
    {
      imageUrl: '/awards/award-4.jpg',
      category: 'International Exhibit',
      show: 'Dubai International Boat show',
      client: 'Amels',
      article: 'Exhibitor Magazine',
      link: '#',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={6} alignItems="center">
          {/* Awards Grid */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: 4,
              flexWrap: { xs: 'wrap', lg: 'nowrap' },
            }}
          >
            {awards.map((award, index) => (
              <AwardCard
                key={index}
                imageUrl={award.imageUrl}
                category={award.category}
                show={award.show}
                client={award.client}
                article={award.article}
                link={award.link}
              />
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default AwardsSection; 