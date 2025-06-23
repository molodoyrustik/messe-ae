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
        padding: { xs: '12px', md: '12px 16px' },
        width: '100%',
        height: { xs: '228px', md: '100%' },
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '8px', md: '12px' },
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
          width: { xs: '112px', md: '60px' },
          height: { xs: '40px', md: '60px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'flex-start', md: 'center' },
        }}
      >
        {icon}
      </Box>
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '8px',
        flex: 1,
      }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '14px', md: '24px' },
            lineHeight: { xs: '16px', md: '28px' },
            letterSpacing: '0.01em',
            color: '#424242',
          }}
        >
          {title}
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '12px', md: '16px' },
            lineHeight: { xs: '16px', md: '24px' },
            letterSpacing: { xs: '0.04em', md: '0.02em' },
            color: '#000000',
            maxHeight: { xs: '96px', md: 'none' },
            overflow: { xs: 'hidden', md: 'visible' },
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
          gap: '4px',
          opacity: { xs: 1, md: 0 },
          transform: { xs: 'none', md: 'translateY(10px)' },
          transition: 'all 0.3s ease',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '12px', md: '16px' },
            lineHeight: { xs: '16px', md: '24px' },
            letterSpacing: { xs: '0.04em', md: '0.02em' },
            color: theme.palette.primary.main,
          }}
        >
          Learn more
        </Typography>
        <ArrowForwardIcon 
          sx={{ 
            fontSize: { xs: '16px', md: '18px' },
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
          {/* Section Title - Hidden on mobile */}
          <Typography
            component={motion.h2}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{
              display: { xs: 'none', md: 'block' },
              fontSize: '34px',
              lineHeight: '42px',
              fontWeight: 400,
              letterSpacing: '0.01em',
              color: '#262626',
              textAlign: 'justify',
              width: '100%',
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
              gap: { xs: '8px', md: 4 },
              width: '100%',
            }}
          >
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AdvantageCard {...advantage} />
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AdvantagesSection; 