'use client';

import {
  Box,
  Container,
  Typography,
} from '@mui/material';

const WhyMesseaeSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        {/* Здесь будет контент секции Why messe.ae only? */}
        {/* Заголовок теперь находится в ParallaxSection */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: 16, md: 18 },
            lineHeight: 1.6,
            color: 'text.primary',
            textAlign: 'center',
            mb: 4,
          }}
        >
          Контент для секции Why messe.ae only? будет добавлен здесь.
        </Typography>
      </Container>
    </Box>
  );
};

export default WhyMesseaeSection; 