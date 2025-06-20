'use client';

import { Box, Container, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
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
      component={motion.div}
      whileHover={{ scale: 1.02 }}
      sx={{
        backgroundColor: '#F5F5F5',
        borderRadius: '8px',
        padding: { xs: '16px', md: '12px 16px' },
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
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
          opacity: 1,
          transform: 'translateY(0)',
        },
      }}
    >
      <Box 
        className="advantage-icon"
        sx={{ 
          width: 60, 
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </Box>
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '8px',
        minHeight: '136px',
      }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '20px', md: '24px' },
            lineHeight: 1.17,
            letterSpacing: '0.01em',
            color: '#262626',
          }}
        >
          {title}
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '14px', md: '16px' },
            lineHeight: 1.5,
            letterSpacing: '0.02em',
            color: '#000000',
            flexGrow: 1,
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
          gap: '8px',
          padding: '4px 5px',
          opacity: 0,
          transform: 'translateY(10px)',
          transition: 'all 0.3s ease',
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            lineHeight: 1.5,
            letterSpacing: '0.02em',
            color: theme.palette.primary.main,
          }}
        >
          Learn more
        </Typography>
        <ArrowForwardIcon 
          sx={{ 
            fontSize: '18px',
            color: theme.palette.primary.main,
          }} 
        />
      </Box>
    </Box>
  );
};

const AdvantagesSection = () => {
  const theme = useTheme();

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
        py: { xs: 6, md: 10 },
        backgroundColor: '#FFFFFF',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: '1rem', md: '2.5rem' } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 8 }, alignItems: 'center' }}>
          {/* Section Title */}
          <Typography
            component={motion.h2}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{
              fontSize: { xs: '24px', md: '34px' },
              lineHeight: 1.24,
              fontWeight: 400,
              letterSpacing: '0.01em',
              color: '#262626',
              textAlign: 'justify',
              width: '100%',
            }}
          >
            We proved our expertise by achieving significant awards for outstanding exhibition display stands as one of the leading exhibition stand contractor in Dubai and UAE
          </Typography>

          {/* Advantages Cards */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 3, md: 4 },
              justifyContent: 'center',
              alignItems: 'stretch',
              flexWrap: 'wrap',
              width: '100%',
            }}
          >
            {advantages.map((advantage, index) => (
              <Box
                key={advantage.title}
                sx={{
                  flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 16px)', md: '1 1 calc(25% - 24px)' },
                  maxWidth: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(25% - 24px)' },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{ height: '100%' }}
                >
                  <AdvantageCard {...advantage} />
                </motion.div>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AdvantagesSection; 