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
        justifyContent: { xs:  'flex-start', md:  'center' },
        alignItems: { xs: 'center', md: 'flex-start' },
        width: '100%',
        height: 'auto',
        overflow: 'hidden',
      }}
    >
      {/* Inner Container */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: '0.5rem', md: '1.25rem' },
          width: { xs: '9rem', md: '100%' },
          maxWidth: { md: '320px' },
        }}
      >
        {/* Award Image */}
        <Box
          sx={{
            position: 'relative',
            width: { xs: '5rem', md: '100%' },
            maxWidth: { md: '240px' },
            height: { xs: isHighCard ? '9.25rem' : '7rem', md: '450px' },
            backgroundColor: 'transparent',
            borderRadius: '4px',
            overflow: 'hidden',
            flexShrink: 0,
            '& img': {
              objectPosition: { xs: 'left center !important', md: 'center !important' },
            },
          }}
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`${category} - ${client}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
              style={{
                objectFit: 'contain',
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
        <Stack spacing={{ xs: '0.125rem', md: '0.25rem' }} sx={{ flex: 1, width: '100%' }}>
        <Box sx={{ display: 'flex', gap: '0.25rem', alignItems: 'baseline', flexWrap: 'nowrap' }}>
          <Typography
            sx={{
              fontSize: { xs: '0.625rem', md: '0.875rem' },
              fontWeight: 700,
              lineHeight: { xs: '0.75rem', md: '1.125rem' },
              letterSpacing: { xs: 'normal', md: '0.28px' },
              color: '#000000',
              flexShrink: 0,
            }}
          >
            Category:
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.625rem', md: '0.875rem' },
              fontWeight: 400,
              lineHeight: { xs: '0.75rem', md: '1.125rem' },
              letterSpacing: { xs: 'normal', md: '0.28px' },
              color: '#000000',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              flex: 1,
              minWidth: 0,
            }}
          >
            {category}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '0.25rem', alignItems: 'baseline', flexWrap: 'nowrap' }}>
          <Typography
            sx={{
              fontSize: { xs: '0.625rem', md: '0.875rem' },
              fontWeight: 700,
              lineHeight: { xs: '0.75rem', md: '1.125rem' },
              letterSpacing: { xs: 'normal', md: '0.28px' },
              color: '#000000',
              flexShrink: 0,
            }}
          >
            Show:
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.625rem', md: '0.875rem' },
              fontWeight: 400,
              lineHeight: { xs: '0.75rem', md: '1.125rem' },
              letterSpacing: { xs: 'normal', md: '0.28px' },
              color: '#000000',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              flex: 1,
              minWidth: 0,
            }}
          >
            {show}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '0.25rem', alignItems: 'baseline', flexWrap: 'nowrap' }}>
          <Typography
            sx={{
              fontSize: { xs: '0.625rem', md: '0.875rem' },
              fontWeight: 700,
              lineHeight: { xs: '0.75rem', md: '1.125rem' },
              letterSpacing: { xs: 'normal', md: '0.28px' },
              color: '#000000',
              flexShrink: 0,
            }}
          >
            Client:
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.625rem', md: '0.875rem' },
              fontWeight: 400,
              lineHeight: { xs: '0.75rem', md: '1.125rem' },
              letterSpacing: { xs: 'normal', md: '0.28px' },
              color: '#000000',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              flex: 1,
              minWidth: 0,
            }}
          >
            {client}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '0.25rem', alignItems: 'baseline', flexWrap: 'nowrap' }}>
          <Typography
            sx={{
              fontSize: { xs: '0.625rem', md: '0.875rem' },
              fontWeight: 700,
              lineHeight: { xs: '0.75rem', md: '1.125rem' },
              letterSpacing: { xs: 'normal', md: '0.28px' },
              color: '#000000',
              flexShrink: 0,
            }}
          >
            Article
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.625rem', md: '0.875rem' },
              fontWeight: 400,
              lineHeight: { xs: '0.75rem', md: '1.125rem' },
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
              fontSize: { xs: '0.625rem', md: '0.875rem' },
              fontWeight: 700,
              lineHeight: { xs: '0.75rem', md: '1.125rem' },
              letterSpacing: { xs: 'normal', md: '0.28px' },
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
    </Box>
  );
};

const AwardsSection = () => {
  // Мобильная версия - исходный порядок
  const mobileAwards = [
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

  // Десктопная версия - новый порядок
  const desktopAwards = [
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
        pt: { xs: 4, md: 0 },
        pb: { xs: 4, md: '6.25rem' },
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
              fontSize: '0.75rem',
              lineHeight: '1rem',
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
        
        {/* Mobile Grid */}
        <Box
          sx={{
            display: { xs: 'grid', md: 'none' },
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.5rem',
            width: '100%',
          }}
        >
          {mobileAwards.map((award, index) => (
            <AwardCard
              key={`mobile-${index}`}
              imageUrl={award.imageUrl}
              category={award.category}
              show={award.show}
              client={award.client}
              article={award.article}
              link={award.link}
            />
          ))}
        </Box>

        {/* Desktop Title */}
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            mb: '2.5rem',
            maxWidth: '1360px',
            mx: 'auto',
          }}
        >
          <Typography
            sx={{
              fontSize: '2.25rem', // 36px (text-4xl in Tailwind)
              lineHeight: '2.5rem', // 40px (leading-10 in Tailwind)
              letterSpacing: '-0.025em', // tracking-tight in Tailwind
              textAlign: 'justify',
              color: '#262626',
            }}
          >
            We proved our expertise by achieving significant awards for outstanding{' '}
            <Box component="span" sx={{ fontWeight: 700 }}>exhibition display stands</Box>
            {' '}as one of the leading{' '}
            <Box component="span" sx={{ color: '#656CAF', fontWeight: 700 }}>exhibition stand contractor in Dubai and UAE</Box>
          </Typography>
        </Box>
        
        {/* Desktop Grid */}
        <Box
          sx={{
            display: { xs: 'none', md: 'grid' },
            gridTemplateColumns: { 
              md: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)'
            },
            gap: '20px',
            width: '100%',
            maxWidth: '1360px',
            mx: 'auto',
          }}
        >
          {desktopAwards.map((award, index) => (
            <AwardCard
              key={`desktop-${index}`}
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