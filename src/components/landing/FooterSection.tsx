'use client';

import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  TextField,
  Paper,
  IconButton,
} from '@mui/material';
import {
  Instagram,
  Facebook,
  LinkedIn,
  WhatsApp,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';

const FooterSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: 'grey.50',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: '1rem', md: '2.5rem' } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 6,
            alignItems: 'flex-start',
            flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
          {/* Left Side - Company Info */}
          <Stack spacing={3} sx={{ flex: 1, maxWidth: { xs: '100%', lg: '60%' } }}>
            {/* Logo */}
            <Stack spacing={1}>
              <Box
                sx={{
                  width: 128,
                  height: 32,
                  backgroundColor: 'grey.200',
                  borderRadius: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="body2" color="grey.600">
                  Logo
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: 8,
                  fontWeight: 700,
                  lineHeight: 1.5,
                  color: 'grey.800',
                }}
              >
                Marketing and Exhibition Services
              </Typography>
            </Stack>

            {/* Title */}
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: 24, md: 34 },
                fontWeight: 400,
                lineHeight: 1.24,
                letterSpacing: '0.01em',
                color: 'text.primary',
              }}
            >
              We&apos;re always happy to help
            </Typography>

            {/* Navigation Links */}
            <Box
              sx={{
                display: 'flex',
                gap: 1.5,
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              {['Projects', 'About Us', 'Articles', 'Manifestos', 'Career', 'Privacy policy', 'Cookie policy'].map((link, index) => (
                <Button
                  key={index}
                  variant="text"
                  sx={{
                    fontSize: 16,
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    color: index === 3 ? 'primary.500' : 'primary.400',
                    textTransform: 'none',
                    px: 0,
                    py: 0.5,
                    minWidth: 'auto',
                    
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: 'primary.600',
                    },
                  }}
                >
                  {link}
                </Button>
              ))}
            </Box>

            {/* Contact Info */}
            <Stack spacing={3}>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  color: 'text.primary',
                }}
              >
                the part of Expoglobal Group
              </Typography>

              {/* Social Icons */}
              <Stack direction="row" spacing={1.5}>
                <IconButton size="small" sx={{ color: 'text.primary' }}>
                  <Instagram />
                </IconButton>
                <IconButton size="small" sx={{ color: 'text.primary' }}>
                  <Facebook />
                </IconButton>
                <IconButton size="small" sx={{ color: 'text.primary' }}>
                  <LinkedIn />
                </IconButton>
                <IconButton size="small" sx={{ color: 'text.primary' }}>
                  <WhatsApp />
                </IconButton>
                <IconButton size="small" sx={{ color: 'text.primary' }}>
                  <Email />
                </IconButton>
              </Stack>

              {/* Contact Details */}
              <Stack spacing={1.5}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Phone sx={{ fontSize: 16, color: 'text.primary' }} />
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 400,
                      letterSpacing: '0.02em',
                      color: 'text.primary',
                    }}
                  >
                    +971 4 548 5887
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <Email sx={{ fontSize: 16, color: 'text.primary' }} />
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 400,
                      letterSpacing: '0.02em',
                      color: 'text.primary',
                    }}
                  >
                    hello@messe.ae
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <LocationOn sx={{ fontSize: 16, color: 'text.primary', mt: 0.25 }} />
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 400,
                      letterSpacing: '0.02em',
                      color: 'text.primary',
                      flex: 1,
                    }}
                  >
                    UAE, Dubai, Dubai Industrial City, KJ Autopart complex,
                    Office building, ground floor, left wing. PO box 118995
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          {/* Right Side - Contact Form */}
          <Paper
            elevation={0}
            sx={{
              width: { xs: '100%', lg: 664 },
              p: 4,
              backgroundColor: 'background.paper',
              borderRadius: 1,
            }}
          >
            <Stack spacing={2.5}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  color: 'text.primary',
                }}
              >
                Have a project to discuss? Fill the form below and our
                experts will contact you within 24 hours.
              </Typography>

              <Stack spacing={1.5}>
                <TextField
                  label="Name*"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'grey.400',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: 16,
                      color: 'grey.600',
                    },
                  }}
                />
                
                <TextField
                  label="Phone*"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'grey.400',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: 16,
                      color: 'grey.600',
                    },
                  }}
                />
                
                <TextField
                  label="Email*"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'grey.400',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: 16,
                      color: 'grey.600',
                    },
                  }}
                />
              </Stack>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  height: 48,
                  backgroundColor: 'primary.400',
                  borderRadius: 1,
                  fontSize: 24,
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  textTransform: 'none',
                  boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.20), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
                  
                  '&:hover': {
                    backgroundColor: 'primary.500',
                  },
                }}
              >
                Send
              </Button>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterSection; 