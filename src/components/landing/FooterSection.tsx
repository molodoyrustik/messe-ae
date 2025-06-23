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
  Link,
} from '@mui/material';
import {
  Instagram,
  Facebook,
  LinkedIn,
  WhatsApp,
  Phone,
  Email,
  LocationOn,
} from '@mui/icons-material';
import Image from 'next/image';
import { useState } from 'react';


const FooterSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const menuItems = [
    { label: 'Projects', href: '/projects' },
    { label: 'About Us', href: '/about' },
    { label: 'Articles', href: '/articles' },
    { label: 'Manifestos', href: '/manifestos', isActive: true },
    { label: 'Career', href: '/career' },
    { label: 'Privacy policy', href: '/privacy-policy' },
    { label: 'Cookie policy', href: '/cookie-policy' },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#F5F5F5',
        overflow: 'hidden',
        py: { xs: 4, md: 5 },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: '1rem', md: '2.5rem' } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'auto auto 1fr' },
            gap: { xs: 4, lg: 0 },
            position: 'relative',
          }}
        >
          {/* Left Column - Logo and Contact Info */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'column',
              gap: { xs: 3, md: 6 },
              maxWidth: '320px',
              gridColumn: { xs: '1', lg: '1' },
            }}
          >
            {/* Logo */}
            <Box>
              <Box sx={{ width: { xs: '60px', md: '162px' }, height: { xs: '29px', md: '80px' }, position: 'relative', mb: 1 }}>
                <Image
                  src="/messe-logo.png"
                  alt="Messe.ae"
                  fill
                  sizes="(max-width: 768px) 60px, 162px"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transform: 'scale(1.75)',
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: '3.87px', md: '10.5px' },
                  lineHeight: { xs: '4.43px', md: '12px' },
                  color: '#000000',
                }}
              >
                <Box component="span" sx={{ color: '#656CAF', fontWeight: 700 }}>M</Box>
                <Box component="span" sx={{ fontWeight: 500 }}>arketing and </Box>
                <Box component="span" sx={{ color: '#656CAF', fontWeight: 700 }}>E</Box>
                <Box component="span" sx={{ fontWeight: 500 }}>xhibition </Box>
                <Box component="span" sx={{ color: '#656CAF', fontWeight: 700 }}>S</Box>
                <Box component="span" sx={{ fontWeight: 500 }}>ervices</Box>
              </Typography>
            </Box>

            {/* Company Info */}
            <Stack spacing={3}>
              <Typography
                sx={{
                  fontSize: { xs: '10px', md: '14px' },
                  lineHeight: { xs: '13px', md: '18px' },
                  letterSpacing: { xs: '0.2px', md: '0.28px' },
                  color: '#262626',
                }}
              >
                the part of{' '}
                <Box component="span" sx={{ fontWeight: 700, color: '#000000' }}>
                  Expoglobal Group
                </Box>
              </Typography>

              {/* Social Icons */}
              <Stack direction="row" spacing={1}>
                <IconButton size="small" sx={{ p: 0.5, color: '#262626' }}>
                  <Instagram sx={{ fontSize: { xs: 14, md: 20 } }} />
                </IconButton>
                <IconButton size="small" sx={{ p: 0.5, color: '#262626' }}>
                  <Facebook sx={{ fontSize: { xs: 14, md: 20 } }} />
                </IconButton>
                <IconButton size="small" sx={{ p: 0.5, color: '#262626' }}>
                  <LinkedIn sx={{ fontSize: { xs: 14, md: 20 } }} />
                </IconButton>
                <IconButton size="small" sx={{ p: 0.5, color: '#262626' }}>
                  <WhatsApp sx={{ fontSize: { xs: 14, md: 20 } }} />
                </IconButton>
              </Stack>

              {/* Contact Details */}
              <Stack spacing={1.5}>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <Phone sx={{ fontSize: { xs: 14, md: 20 }, color: '#262626' }} />
                  <Typography
                    sx={{
                      fontSize: { xs: '10px', md: '14px' },
                      lineHeight: { xs: '13px', md: '18px' },
                      letterSpacing: { xs: '0.2px', md: '0.28px' },
                      color: '#262626',
                    }}
                  >
                    +971 4 548 5887
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={0.5} alignItems="center">
                  <Email sx={{ fontSize: { xs: 14, md: 20 }, color: '#262626' }} />
                  <Typography
                    sx={{
                      fontSize: { xs: '10px', md: '14px' },
                      lineHeight: { xs: '13px', md: '18px' },
                      letterSpacing: { xs: '0.2px', md: '0.28px' },
                      color: '#262626',
                    }}
                  >
                    hello@messe.ae
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={0.5} alignItems="flex-start">
                  <LocationOn sx={{ fontSize: { xs: 14, md: 20 }, color: '#262626', mt: 0.25 }} />
                  <Typography
                    sx={{
                      fontSize: { xs: '10px', md: '14px' },
                      lineHeight: { xs: '13px', md: '18px' },
                      letterSpacing: { xs: '0.2px', md: '0.28px' },
                      color: '#262626',
                      flex: 1,
                    }}
                  >
                    UAE, Dubai, Dubai Industrial City, KJ Autopart complex, Office building, ground floor, left wing. PO box 118995
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>

          {/* Middle Column - Navigation Menu */}
          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              flexDirection: 'column',
              gap: 1.5,
              gridColumn: { lg: '2' },
              ml: { lg: 20 },
              mr: { lg: 8 },
              alignSelf: 'end',
              pb: 5,
            }}
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                sx={{
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: 700,
                  lineHeight: '24px',
                  letterSpacing: '0.32px',
                  color: item.isActive ? '#4C53A2' : '#656CAF',
                  fontFamily: 'Roboto',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#4C53A2',
                  },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>

          {/* Mobile Social Icons */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '256px',
              mb: 3,
              order: { xs: -1 },
            }}
          >
            <IconButton size="small" sx={{ p: 0.5, color: '#656CAF' }}>
              <Instagram sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton size="small" sx={{ p: 0.5, color: '#656CAF' }}>
              <Facebook sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton size="small" sx={{ p: 0.5, color: '#656CAF' }}>
              <LinkedIn sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton size="small" sx={{ p: 0.5, color: '#656CAF' }}>
              <WhatsApp sx={{ fontSize: 20 }} />
            </IconButton>
            {/* Empty placeholders for alignment */}
            <Box sx={{ width: 24, height: 24 }} />
            <Box sx={{ width: 24, height: 24 }} />
            <Box sx={{ width: 24, height: 24 }} />
          </Box>

          {/* Right Column - Title and Form */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 3, md: 2.5 },
              gridColumn: { xs: '1', lg: '3' },
              justifySelf: { lg: 'end' },
            }}
          >
            {/* Title - Hidden on mobile */}
            <Typography
              variant="h4"
              sx={{
                display: { xs: 'none', md: 'block' },
                fontSize: '34px',
                fontWeight: 400,
                lineHeight: '42px',
                letterSpacing: '0.34px',
                color: '#262626',
                mb: 2,
              }}
            >
              We're always happy to help
            </Typography>

            {/* Contact Form */}
            <Paper
              elevation={0}
              component="form"
              onSubmit={handleSubmit}
              sx={{
                width: { xs: '100%', lg: '664px' },
                p: { xs: '12px', md: 4 },
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: '20px', md: 2.5 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '12px', md: '16px' },
                  fontWeight: 700,
                  lineHeight: { xs: '16px', md: '24px' },
                  letterSpacing: { xs: '0.04em', md: '0.32px' },
                  color: '#262626',
                }}
              >
                Have a project to discuss? Fill the form below and our experts will contact you within 24 hours.
              </Typography>

              <Stack spacing={{ xs: '12px', md: 1.5 }}>
                <TextField
                  required
                  fullWidth
                  placeholder="Name*"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: { xs: '32px', md: '40px' },
                      '& fieldset': {
                        borderColor: '#C4C4C4',
                        borderRadius: '4px',
                      },
                      '&:hover fieldset': {
                        borderColor: '#656CAF',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#656CAF',
                      },
                    },
                    '& .MuiInputBase-input': {
                      fontSize: { xs: '14px', md: '16px' },
                      lineHeight: { xs: '16px', md: '24px' },
                      letterSpacing: { xs: '0.02em', md: '0.32px' },
                      padding: { xs: '8px 12px', md: '8px 12px' },
                      '&::placeholder': {
                        color: '#7B7B7B',
                        opacity: 1,
                      },
                    },
                  }}
                />
                
                <TextField
                  required
                  fullWidth
                  placeholder="Phone*"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: { xs: '32px', md: '40px' },
                      '& fieldset': {
                        borderColor: '#C4C4C4',
                        borderRadius: '4px',
                      },
                      '&:hover fieldset': {
                        borderColor: '#656CAF',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#656CAF',
                      },
                    },
                    '& .MuiInputBase-input': {
                      fontSize: { xs: '14px', md: '16px' },
                      lineHeight: { xs: '16px', md: '24px' },
                      letterSpacing: { xs: '0.02em', md: '0.32px' },
                      padding: { xs: '8px 12px', md: '8px 12px' },
                      '&::placeholder': {
                        color: '#7B7B7B',
                        opacity: 1,
                      },
                    },
                  }}
                />
                
                <TextField
                  required
                  fullWidth
                  type="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: { xs: '32px', md: '40px' },
                      '& fieldset': {
                        borderColor: '#C4C4C4',
                        borderRadius: '4px',
                      },
                      '&:hover fieldset': {
                        borderColor: '#656CAF',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#656CAF',
                      },
                    },
                    '& .MuiInputBase-input': {
                      fontSize: { xs: '14px', md: '16px' },
                      lineHeight: { xs: '16px', md: '24px' },
                      letterSpacing: { xs: '0.02em', md: '0.32px' },
                      padding: { xs: '8px 12px', md: '8px 12px' },
                      '&::placeholder': {
                        color: '#7B7B7B',
                        opacity: 1,
                      },
                    },
                  }}
                />
              </Stack>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  height: { xs: '32px', md: '48px' },
                  backgroundColor: { xs: '#A64B66', md: '#656CAF' },
                  borderRadius: '8px',
                  fontSize: { xs: '16px', md: '24px' },
                  fontWeight: 400,
                  lineHeight: { xs: '24px', md: '28px' },
                  letterSpacing: { xs: '0.02em', md: '0.24px' },
                  textTransform: 'none',
                  boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)',
                  
                  '&:hover': {
                    backgroundColor: { xs: '#8F3F56', md: '#4C53A2' },
                  },
                }}
              >
                Send
              </Button>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterSection;