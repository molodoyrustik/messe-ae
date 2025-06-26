'use client';

import { Box, Container, Typography, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IFESIcon, EUIcon, BoxesIcon, SupportIcon } from '@/components/icons/AdvantageIcons';

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AdvantageCard = ({ icon, title, description }: AdvantageCardProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        '&:hover': {
          transform: 'scale(1.02)',
        },
        backgroundColor: '#F5F5F5',
        borderRadius: '8px',
        padding: { xs: '1rem', md: '1.25rem 1.5rem' },
        width: '100%',
        height: { xs: '14.25rem', md: '20rem' },
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '0.75rem', md: '1rem' },
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover .advantage-icon': {
          '& svg path': {
            transition: 'fill 0.3s ease',
          },
          '& .icon-primary': {
            fill: '#7F87BD',
          },
          '& .icon-secondary': {
            fill: '#4C53A2',
          },
          '& .icon-tertiary': {
            fill: '#A2A9D0',
          },
        },
        '&:hover .learn-more-btn': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Box 
        className="advantage-icon"
        sx={{ 
          width: { xs: 'auto', md: 'auto' },
          height: { xs: '3rem', md: '4rem' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'flex-start', md: 'center' },
          '& svg': {
            width: { xs: 'auto', md: '3.5rem' },
            height: { xs: '2.5rem', md: '3.5rem' },
            maxWidth: { xs: '7.5rem', md: '8.75rem' },
          },
        }}
      >
        {icon}
      </Box>
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '0.5rem',
        flex: 1,
        minHeight: 0,
      }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '0.875rem', md: '1.5rem' },
            lineHeight: { xs: '1.125rem', md: '1.75rem' },
            letterSpacing: { xs: '0.0175rem', md: '0.01em' },
            color: '#262626',
          }}
        >
          {title}
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '0.75rem', md: '1rem' },
            lineHeight: { xs: '1rem', md: '1.5rem' },
            letterSpacing: { xs: '0.04em', md: '0.02em' },
            color: '#000000',
            display: '-webkit-box',
            WebkitLineClamp: { xs: 4, md: 6 },
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            flex: 1,
          }}
        >
          {description}
        </Typography>
      </Box>

      <Box
        className="learn-more-btn"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          opacity: 1,
          transform: 'none',
          transition: 'all 0.3s ease',
          marginTop: 'auto',
          flexShrink: 0,
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
};

const AdvantagesSection = () => {

  const advantages = [
    {
      title: 'Worldwide recognition',
      description: 'As part of IFES, we uphold a strict Code of Conduct, ensuring quality and professionalism in every project',
      icon: <IFESIcon />,
    },
    {
      title: 'European standards',
      description: 'We deliver exceptional exhibition stands that meet the highest European benchmarks, ensuring your brand excels at every event',
      icon: <EUIcon />,
    },
    {
      title: 'Own production',
      description: 'Messe.ae boasts own production facilities in Dubai, allowing us to maintain full control over quality and timelines',
      icon: <BoxesIcon />,
    },
    {
      title: 'Trusted Support',
      description: 'Throughout every stage of your project our team is dedicated to providing clear communication, ensuring a seamless experience from start to finish',
      icon: <SupportIcon />,
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: '1.25rem', md: '1.25rem' },
        backgroundColor: '#FFFFFF',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: '1rem', md: '2.5rem' } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 8 }, alignItems: 'center' }}>
          {/* Desktop Title */}
          <Typography
            component="h2"
            sx={{
              display: { xs: 'none', md: 'block' },
              fontSize: '34px',
              lineHeight: '42px',
              fontWeight: 400,
              letterSpacing: '0.01em',
              color: '#262626',
              textAlign: 'justify',
              width: '100%',
              animation: 'fadeInUp 0.6s ease both',
            }}
          >
            <Box component="span">We proved our expertise by achieving significant awards for outstanding </Box>
            <Box component="span" sx={{ fontWeight: 400 }}>exhibition display stands</Box>
            <Box component="span"> as one of the leading </Box>
            <Box component="span" sx={{ fontWeight: 400 }}>exhibition stand contractor in Dubai and UAE</Box>
          </Typography>

          {/* Advantages Cards */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: { xs: '0.75rem', sm: '0.5rem', md: '1rem' },
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