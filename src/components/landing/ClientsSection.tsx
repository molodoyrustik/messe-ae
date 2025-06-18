'use client';

import {
  Box,
  Container,
  Typography,
  styled,
  keyframes,
} from '@mui/material';

// Animation for the marquee effect
const marquee = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MarqueeContainer = styled(Box)({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  position: 'relative',
  height: '64px', // 16 * 4 = 64px from TW h-16
});

const MarqueeContent = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '112px', // 28 * 4 = 112px from TW gap-28
  animation: `${marquee} 420s linear infinite`, // Уменьшена скорость в 3 раза
  '&:hover': {
    animationPlayState: 'paused',
  },
});

const ClientsSection = () => {
  // Real client logos with their actual filenames from the downloaded logos
  const clientLogos = [
    { name: 'Amazon Web Services', filename: 'amazon-web-services.svg', width: 128, height: 64 }, // w-32 h-16
    { name: 'Genesis', filename: 'genesis.svg', width: 242, height: 48 }, // w-60 h-12
    { name: 'Canon', filename: 'canon.svg', width: 228, height: 48 }, // w-56 h-12
    { name: 'Porsche', filename: 'porsche.svg', width: 360, height: 52 }, // w-96 h-12
    { name: 'Hapag Lloyd', filename: 'hapag-lloyd.svg', width: 337, height: 52 }, // w-80 h-12
    { name: 'Infiniti', filename: 'infiniti.svg', width: 360, height: 52 }, // w-96 h-12
    { name: 'Siemens', filename: 'siemens.svg', width: 298, height: 48 }, // w-72 h-12
    { name: 'AO Trauma', filename: 'ao-trauma.svg', width: 115, height: 72 }, // w-28 self-stretch
    { name: 'Tomra', filename: 'tomra.svg', width: 291, height: 52 }, // w-72 h-12
    { name: 'Anduril', filename: 'anduril.svg', width: 284, height: 52 }, // w-72 h-12
    { name: 'Canadian Solar', filename: 'canadian-solar.svg', width: 168, height: 64 }, // w-40 h-16
    { name: 'Alvo', filename: 'alvo.svg', width: 169, height: 72 }, // w-44 h-16
    { name: 'Diehl', filename: 'diehl.svg', width: 293, height: 48 }, // w-72 h-12
    { name: 'Medela', filename: 'medela.svg', width: 272, height: 52 }, // w-64 h-12
    { name: 'Arjo', filename: 'arjo.svg', width: 223, height: 52 }, // w-56 h-12
    { name: 'Abbott', filename: 'abbott.svg', width: 202, height: 52 }, // w-52 h-12
    { name: 'Soltec', filename: 'soltec.svg', width: 181, height: 64 }, // w-44 h-16
    { name: 'Pattyn', filename: 'pattyn.svg', width: 329, height: 52 }, // w-80 h-12
    { name: 'Mindray', filename: 'mindray.svg', width: 224, height: 52 }, // w-56 h-12
    { name: 'Biosystems', filename: 'biosystems.svg', width: 284, height: 52 }, // w-72 h-12
    { name: 'Hensoldt', filename: 'hensoldt.svg', width: 215, height: 52 }, // w-52 h-12
    { name: 'Brady', filename: 'brady.svg', width: 274, height: 52 }, // w-72 h-12
    { name: 'Mizuho', filename: 'mizuho.svg', width: 227, height: 52 }, // w-56 h-12
    { name: 'OMV', filename: 'omv.svg', width: 226, height: 64 }, // w-56 h-16
    { name: 'Siemens Energy', filename: 'siemens-energy.svg', width: 152, height: 52 }, // w-36 h-12
    { name: 'HT Group', filename: 'ht-group.svg', width: 309, height: 52 }, // w-80 h-12
    { name: 'WABCO', filename: 'wabco.svg', width: 208, height: 64 }, // w-52 h-16
    { name: 'Linde', filename: 'linde.svg', width: 127, height: 64 }, // w-32 h-16
    { name: 'Nook', filename: 'nook.svg', width: 208, height: 64 }, // w-52 h-16
    { name: 'John Deere', filename: 'john-deere.svg', width: 334, height: 64 }, // w-80 h-16
    { name: 'WEIR', filename: 'weir.svg', width: 167, height: 52 }, // w-40 h-12
    { name: 'Halliburton', filename: 'halliburton.svg', width: 360, height: 52 }, // w-96 h-12
    { name: 'Krones', filename: 'krones.svg', width: 232, height: 72 }, // w-56 h-16
    { name: 'Esko', filename: 'esko.svg', width: 238, height: 48 }, // w-60 h-12
    { name: 'KNDS', filename: 'knds.svg', width: 163, height: 48 }, // w-40 h-12
    { name: 'Teleste', filename: 'teleste.svg', width: 332, height: 48 }, // w-80 h-12
    // { name: 'ExxonMobil', filename: 'exxonmobil.svg', width: 276, height: 52 }, // w-72 h-12
    { name: 'Wabtec', filename: 'wabtec.svg', width: 188, height: 64 }, // w-48 h-16
    { name: 'Konica Minolta', filename: 'konica-minolta.svg', width: 360, height: 52 }, // w-96 h-12
    { name: 'Getinge', filename: 'getinge.svg', width: 351, height: 52 }, // w-80 h-12
  ];

  // Duplicate the logos to create seamless loop
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Title */}
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: 24, md: 34 },
            fontWeight: 400,
            lineHeight: 1.24,
            letterSpacing: '0.01em',
            color: 'text.primary',
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
          }}
        >
          We build partnerships that always come back
        </Typography>

        {/* Marquee Container */}
        <MarqueeContainer>
          <MarqueeContent>
            {duplicatedLogos.map((logo, index) => (
              <Box
                key={`${logo.filename}-${index}`}
                component="img"
                src={`/client-logos/${logo.filename}`}
                alt={logo.name}
                sx={{
                  width: `${logo.width * 0.75}px`, // Scale down by 25% for better fit
                  height: `${logo.height * 0.75}px`,
                  objectFit: 'contain',
                  filter: 'grayscale(100%)', // Make logos grayscale
                  opacity: 0.7,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                    opacity: 1,
                  },
                }}
                onError={(e) => {
                  // Fallback if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            ))}
          </MarqueeContent>
        </MarqueeContainer>
      </Container>
    </Box>
  );
};

export default ClientsSection; 