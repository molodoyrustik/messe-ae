'use client';

import {
  Box,
  Container,
  Typography,
  Stack,
} from '@mui/material';
import Image from 'next/image';

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '100%',
        maxWidth: { xs: '100%', sm: '320px', md: '320px' },
        overflow: 'hidden',
      }}
    >
      {/* Award Image */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: '239 / 450', // Maintain the ratio from design
          backgroundColor: 'transparent',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${category} - ${client}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        ) : (
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#9E9E9E',
            }}
          >
            <Typography variant="body2">Award Image</Typography>
          </Box>
        )}
      </Box>

      {/* Award Details */}
      <Stack spacing="4px">
        <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 700,
              lineHeight: '18px',
              letterSpacing: '0.28px',
              color: '#000000',
            }}
          >
            Category:
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '18px',
              letterSpacing: '0.28px',
              color: '#000000',
            }}
          >
            {category}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 700,
              lineHeight: '18px',
              letterSpacing: '0.28px',
              color: '#000000',
            }}
          >
            Show:
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '18px',
              letterSpacing: '0.28px',
              color: '#000000',
            }}
          >
            {show}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 700,
              lineHeight: '18px',
              letterSpacing: '0.28px',
              color: '#000000',
            }}
          >
            Client:
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '18px',
              letterSpacing: '0.28px',
              color: '#000000',
            }}
          >
            {client}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 700,
              lineHeight: '18px',
              letterSpacing: '0.28px',
              color: '#262626',
              flexShrink: 0,
            }}
          >
            Article
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '18px',
              letterSpacing: '0.28px',
              color: '#262626',
              flexShrink: 0,
            }}
          >
            at
          </Typography>
          <Typography
            component="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: '14px',
              fontWeight: 700,
              lineHeight: '18px',
              letterSpacing: '0.28px',
              color: '#656CAF',
              textDecoration: 'underline',
              textDecorationColor: '#656CAF',
              cursor: 'pointer',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              flex: 1,
              minWidth: 0,
              
              '&:hover': {
                color: '#4C53A2',
                textDecorationColor: '#4C53A2',
              },
            }}
          >
            {article}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

const AwardsSection = () => {
  const awards = [
    {
      imageUrl: '/awards/award-01.png',
      category: 'Best Pavilion',
      show: 'Big 5',
      client: 'Belgium Pavilion',
      article: 'World Exhibition Stand Awards – The Winners Supplement',
      link: '#',
    },
    {
      imageUrl: '/awards/award-02.png',
      category: 'Double-Deck Exhibit',
      show: 'Interplastica',
      client: 'Sibur Holding PJSC',
      article: 'Exhibitor Magazine',
      link: '#',
    },
    {
      imageUrl: '/awards/award-03.png',
      category: 'Best Sustainable Stand',
      show: 'ADIPEC',
      client: 'Siemens Energy',
      article: 'World Exhibition Stand Awards – The Winners Supplement',
      link: '#',
    },
    {
      imageUrl: '/awards/award-04.png',
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
      <Container maxWidth="xl" sx={{ px: { xs: '1rem', md: '2.5rem' } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: { xs: 3, md: 4 },
            flexWrap: 'wrap',
            width: '100%',
          }}
        >
          {awards.map((award, index) => (
            <Box
              key={index}
              sx={{
                flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 16px)', lg: '0 0 320px' },
                maxWidth: { xs: '100%', sm: 'calc(50% - 16px)', lg: '320px' },
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <AwardCard
                imageUrl={award.imageUrl}
                category={award.category}
                show={award.show}
                client={award.client}
                article={award.article}
                link={award.link}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AwardsSection;