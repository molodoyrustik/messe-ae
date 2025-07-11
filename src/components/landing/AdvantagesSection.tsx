'use client';

import { Box, Container, Typography, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { IFESIcon, EUIcon, BoxesIcon, SupportIcon } from '@/components/icons/AdvantageIcons';

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

const AdvantageCard = ({ icon, title, description, href }: AdvantageCardProps) => {
  const theme = useTheme();

  const cardContent = (
    <Box
      data-advantage-card={title.toLowerCase().replace(/\s+/g, '-')}
      sx={{
        backgroundColor: '#F5F5F5',
        borderRadius: { xs: '0.5rem', md: '8px' },
        padding: { xs: '0.75rem', md: '1.25rem 1.5rem' },
        width: '100%',
        height: { xs: '14.25rem', md: '20rem' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'flex-start', md: 'stretch' },
        justifyContent: { xs: 'flex-start', md: 'center' },
        gap: { xs: '0.5rem', md: '1rem' },
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '& .advantage-icon': {
          filter: 'grayscale(100%)',
          opacity: 0.7,
          transition: 'all 0.3s ease',
        },
        '&:hover': {
          transform: 'scale(1.05)',
          '& .advantage-icon': {
            filter: 'grayscale(0%)',
            opacity: 1,
          },
        },
      }}
    >
      <Box 
        className="advantage-icon"
        data-icon
        sx={{ 
          width: '100%',
          height: { xs: '2.5rem', md: '3.5rem' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          overflow: 'hidden',
          '& img': {
            objectPosition: { xs: 'left center', md: 'center' },
          },
        }}
      >
        {icon}
      </Box>
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '8px',
        flex: 1,
        minHeight: 0,
        overflow: 'hidden', // Add overflow hidden to container
      }}>
        <Typography
          variant="h5"
          data-title
          sx={{
            fontWeight: 700,
            fontSize: { xs: '0.875rem', md: '1.5rem' },
            lineHeight: { xs: '1.125rem', md: '1.75rem' },
            letterSpacing: { xs: '0.0175rem', md: '0.01em' },
            color: '#262626',
            textAlign: { xs: 'left', md: 'inherit' },
          }}
        >
          {title}
        </Typography>
        
        <Box sx={{ 
          overflow: 'hidden',
          flex: 1,
          position: 'relative',
        }}>
          <Typography
            variant="body1"
            data-description
            sx={{
              fontSize: { xs: '0.75rem', md: '1rem' },
              lineHeight: { xs: '1rem', md: '1.5rem' },
              letterSpacing: { xs: '0.04em', md: '0.02em' },
              color: '#000000',
              textAlign: { xs: 'left', md: 'inherit' },
              display: '-webkit-box',
              WebkitLineClamp: { xs: 5, md: 6 },
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              wordBreak: 'break-word',
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>

      <Box
        className="learn-more-btn"
        data-learn-more
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          opacity: 1,
          transform: 'none',
          transition: 'all 0.3s ease',
          marginTop: 'auto',
          flexShrink: 0,
          alignSelf: 'flex-start',
          cursor: href ? 'pointer' : 'default',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '0.75rem', md: '1rem' },
            lineHeight: { xs: '1rem', md: '1.5rem' },
            letterSpacing: { xs: '0.04em', md: '0.02em' },
            color: theme.palette.primary.main,
          }}
        >
          Learn more
        </Typography>
        <ArrowForwardIcon 
          sx={{ 
            fontSize: { xs: '1rem', md: '1.125rem' },
            color: theme.palette.primary.main,
          }} 
        />
      </Box>
    </Box>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

const AdvantagesSection = () => {

  const advantages = [
    {
      title: 'Worldwide recognition',
      description: 'As part of IFES, we uphold a strict Code of Conduct, ensuring quality and professionalism in every project',
      icon: <IFESIcon />,
      href: '/articles/worldwide-recognition',
    },
    {
      title: 'Own production',
      description: 'Messe.ae boasts own production facilities in Dubai, allowing us to maintain full control over quality and timelines',
      icon: <BoxesIcon />,
      href: '/articles/own-production',
    },
    {
      title: 'European standards',
      description: 'We deliver exceptional exhibition stands that meet the highest European benchmarks, ensuring your brand excels at every event',
      icon: <EUIcon />,
      href: '/articles/european-standards',
    },
    {
      title: 'Trusted Support',
      description: 'Throughout every stage of your project our team is dedicated to providing clear communication, ensuring a seamless experience from start to finish',
      icon: <SupportIcon />,
      href: '/articles/trusted-support',
    },
  ];

  return (
    <Box
      component="section"
      data-section="advantages"
      sx={{
        pt: { xs: '1.25rem', md: '2.5rem' },
        pb: { xs: '1.25rem', md: '6.25rem' },
        backgroundColor: '#FFFFFF',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: '1rem', md: '2.5rem' } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 8 }, alignItems: 'center' }}>
          {/* Advantages Cards */}
          <Box
            data-advantages-grid
            sx={{
              display: 'grid',
              gridTemplateColumns: { 
                xs: 'repeat(2, 1fr)', 
                sm: 'repeat(2, 1fr)', 
                md: 'repeat(4, 1fr)' 
              },
              gap: { xs: '0.75rem', sm: '1.5rem', md: '2rem' },
              width: '100%',
            }}
          >
            {advantages.map((advantage, index) => (
              <Box
                key={advantage.title}
                sx={{
                  animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
                  '@keyframes fadeInUp': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateY(20px)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateY(0)',
                    },
                  },
                }}
              >
                <AdvantageCard {...advantage} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AdvantagesSection; 