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
  const isHighCard = category === 'Double-Deck Exhibit' || category === 'International Exhibit';
  
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: { xs: 'center', md: 'flex-start' },
        width: '100%',
        height: { xs: isHighCard ? 'auto' : '176px', md: 'auto' },
        overflow: 'hidden',
      }}
    >
      {/* Inner Container */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: '8px', md: '20px' },
          width: { xs: '144px', md: '100%' },
        }}
      >
        {/* Award Image */}
        <Box
          sx={{
            position: 'relative',
            width: { xs: '80px', md: '100%' },
            height: { xs: isHighCard ? '148px' : '112px', md: 'auto' },
            aspectRatio: { xs: 'unset', md: '239 / 450' },
            backgroundColor: 'transparent',
            borderRadius: '4px',
            overflow: 'hidden',
            flexShrink: 0,
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
        <Stack spacing={{ xs: '2px', md: '4px' }} sx={{ flex: 1, width: '100%' }}>
        <Box sx={{ display: 'flex', gap: '4px', alignItems: 'baseline', flexWrap: 'wrap' }}>
          <Typography
            sx={{
              fontSize: { xs: '10px', md: '14px' },
              fontWeight: 700,
              lineHeight: { xs: '12px', md: '18px' },
              letterSpacing: { xs: 'normal', md: '0.28px' },
              color: '#000000',
              flexShrink: 0,
            }}
          >
            Category:
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '10px', md: '14px' },
              fontWeight: 400,
              lineHeight: { xs: '12px', md: '18px' },
              letterSpacing: { xs: 'normal', md: '0.28px' },
              color: '#000000',
            }}
          >
            {category}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '4px', alignItems: 'baseline', flexWrap: 'wrap' }}>
          <Typography
            sx={{
              fontSize: { xs: '10px', md: '14px' },
              fontWeight: 700,
              lineHeight: { xs: '12px', md: '18px' },
              letterSpacing: { xs: 'normal', md: '0.28px' },
              color: '#000000',
            }}
          >
            Show:
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '10px', md: '14px' },
              fontWeight: 400,
              lineHeight: { xs: '12px', md: '18px' },
              letterSpacing: { xs: 'normal', md: '0.28px' },
              color: '#000000',
            }}
          >
            {show}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '4px', alignItems: 'baseline', flexWrap: 'wrap' }}>
          <Typography
            sx={{
              fontSize: { xs: '10px', md: '14px' },
              fontWeight: 700,
              lineHeight: { xs: '12px', md: '18px' },
              letterSpacing: { xs: 'normal', md: '0.28px' },
              color: '#000000',
            }}
          >
            Client:
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '10px', md: '14px' },
              fontWeight: 400,
              lineHeight: { xs: '12px', md: '18px' },
              letterSpacing: { xs: 'normal', md: '0.28px' },
              color: '#000000',
            }}
          >
            {client}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '4px', alignItems: 'baseline', flexWrap: 'wrap' }}>
          <Typography
            sx={{
              fontSize: { xs: '10px', md: '14px' },
              fontWeight: 700,
              lineHeight: { xs: '12px', md: '18px' },
              letterSpacing: { xs: 'normal', md: '0.28px' },
              color: '#000000',
              flexShrink: 0,
            }}
          >
            Article
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '10px', md: '14px' },
              fontWeight: 400,
              lineHeight: { xs: '12px', md: '18px' },
              letterSpacing: { xs: 'normal', md: '0.28px' },
              color: { xs: '#424242', md: '#262626' },
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
              fontSize: { xs: '10px', md: '14px' },
              fontWeight: 400,
              lineHeight: { xs: '12px', md: '18px' },
              letterSpacing: { xs: 'normal', md: '0.28px' },
              color: '#656CAF',
              textDecoration: 'underline',
              textDecorationColor: '#656CAF',
              cursor: 'pointer',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: { xs: 'normal', md: 'nowrap' },
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
      imageUrl: '/awards/award-03.png',
      category: 'Best Sustainable Stand',
      show: 'ADIPEC',
      client: 'Siemens Energy',
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
        py: { xs: 4, md: 8 },
        backgroundColor: { xs: '#F5F5F5', md: '#FFFFFF' },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: '1rem', md: '2.5rem' } }}>
        {/* Mobile Title */}
        <Box
          sx={{
            display: { xs: 'block', md: 'none' },
            mb: 3,
            px: 0,
            width: '100%',
          }}
        >
          <Typography
            sx={{
              fontSize: '12px',
              lineHeight: '16px',
              letterSpacing: '0.04em',
              textAlign: 'justify',
              color: '#424242',
            }}
          >
            We proved our expertise by achieving significant awards for outstanding{' '}
            <Box component="span" sx={{ fontWeight: 700 }}>exhibition display stands</Box>
            {' '}as one of the leading{' '}
            <Box component="span" sx={{ color: '#656CAF', fontWeight: 700 }}>exhibition stand contractor in Dubai and UAE</Box>
          </Typography>
        </Box>
        
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: '8px', md: 4 },
            width: '100%',
            maxWidth: { xs: '100%', md: 'none' },
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
      </Container>
    </Box>
  );
};

export default AwardsSection;