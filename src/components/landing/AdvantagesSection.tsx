'use client';

import {
  Box,
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import {
  EmojiEvents,
  EuroSymbol,
  Inventory,
  SupportAgent,
} from '@mui/icons-material';

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

const AdvantageCard = ({ icon, title, description, buttonText }: AdvantageCardProps) => {
  
  return (
    <Card
      sx={{
        width: 316,
        backgroundColor: 'grey.50',
        borderRadius: 1,
        boxShadow: 'none',
        border: '1px solid',
        borderColor: 'grey.200',
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Stack spacing={1.5}>
          {/* Icon */}
          <Box
            sx={{
              width: 64,
              height: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'grey.100',
              borderRadius: 1,
              color: 'grey.600',
            }}
          >
            {icon}
          </Box>

          {/* Content */}
          <Stack spacing={1} sx={{ height: 136 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: 24,
                fontWeight: 700,
                lineHeight: 1.17,
                letterSpacing: '0.01em',
                color: 'text.primary',
              }}
            >
              {title}
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                fontSize: 16,
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: '0.02em',
                color: 'grey.800',
                flex: 1,
              }}
            >
              {description}
            </Typography>
          </Stack>

          {/* Button */}
          <Button
            variant="text"
            endIcon={
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                →
              </Box>
            }
            sx={{
              justifyContent: 'flex-start',
              px: 0.5,
              py: 0.5,
              height: 32,
              fontSize: 16,
              fontWeight: 400,
              letterSpacing: '0.02em',
              color: 'primary.400',
              textTransform: 'none',
              
              '&:hover': {
                backgroundColor: 'transparent',
                color: 'primary.600',
              },
            }}
          >
            {buttonText}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: <EmojiEvents sx={{ fontSize: 32 }} />,
      title: 'Worldwide recognition',
      description: 'As part of IFES, we uphold a strict Code of Conduct, ensuring quality and professionalism in every project',
      buttonText: 'Learn more',
    },
    {
      icon: <EuroSymbol sx={{ fontSize: 32 }} />,
      title: 'European standards',
      description: 'We deliver exceptional exhibition stands that meet the highest European benchmarks, ensuring your brand excels at every event',
      buttonText: 'Learn more',
    },
    {
      icon: <Inventory sx={{ fontSize: 32 }} />,
      title: 'Own production',
      description: 'Messe.ae boasts own production facilities in Dubai, allowing us to maintain full control over quality and timelines',
      buttonText: 'Learn more',
    },
    {
      icon: <SupportAgent sx={{ fontSize: 32 }} />,
      title: 'Trusted Support',
      description: 'Throughout every stage of your project our team is dedicated to providing clear communication, ensuring a seamless experience from start to finish',
      buttonText: 'Learn more',
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
        <Stack spacing={6}>
          {/* Section Title */}
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: 24, md: 34 },
              fontWeight: 400,
              lineHeight: 1.24,
              letterSpacing: '0.01em',
              color: 'text.primary',
              textAlign: 'justify',
              maxWidth: '1000px',
              margin: '0 auto',
            }}
          >
            We proved our expertise by achieving significant awards for outstanding exhibition display stands as one of the leading exhibition stand contractor in Dubai and UAE
          </Typography>

          {/* Advantages Grid */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 4,
              flexWrap: { xs: 'wrap', lg: 'nowrap' },
            }}
          >
            {advantages.map((advantage, index) => (
              <AdvantageCard
                key={index}
                icon={advantage.icon}
                title={advantage.title}
                description={advantage.description}
                buttonText={advantage.buttonText}
              />
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default AdvantagesSection; 