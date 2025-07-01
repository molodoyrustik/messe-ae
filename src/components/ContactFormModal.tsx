'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
} from '@mui/material';

interface ContactFormModalProps {
  open: boolean;
  onClose: () => void;
}

export const ContactFormModal = ({ open, onClose }: ContactFormModalProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (field: keyof typeof formData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    onClose();
  };

  const formContent = (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '1.25rem', md: '1.25rem' },
        width: '100%',
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          color: 'grey.800',
          fontSize: { xs: '0.875rem', md: '1rem' },
          lineHeight: { xs: '1rem', md: '1.5rem' },
          letterSpacing: 'tight',
        }}
      >
        Have a project to discuss? Fill the form below and our experts will contact you within 24 hours.
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <TextField
          required
          fullWidth
          placeholder="Name"
          value={formData.name}
          onChange={handleChange('name')}
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              height: { xs: '2.5rem', md: 'auto' },
              borderRadius: '0.25rem',
              '& fieldset': {
                borderColor: 'grey.300',
              },
            },
            '& .MuiInputBase-input': {
              px: '0.75rem',
              py: { xs: '0.5rem', md: '0.5rem' },
              fontSize: '1rem',
              color: 'grey.500',
              '&::placeholder': {
                color: 'grey.500',
                opacity: 1,
              },
            },
          }}
        />
        
        <TextField
          required
          fullWidth
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange('phone')}
          variant="outlined"
          type="tel"
          sx={{
            '& .MuiOutlinedInput-root': {
              height: { xs: '2.5rem', md: 'auto' },
              borderRadius: '0.25rem',
              '& fieldset': {
                borderColor: 'grey.300',
              },
            },
            '& .MuiInputBase-input': {
              px: '0.75rem',
              py: { xs: '0.5rem', md: '0.5rem' },
              fontSize: '1rem',
              color: 'grey.500',
              '&::placeholder': {
                color: 'grey.500',
                opacity: 1,
              },
            },
          }}
        />
        
        <TextField
          required
          fullWidth
          placeholder="Email"
          value={formData.email}
          onChange={handleChange('email')}
          variant="outlined"
          type="email"
          sx={{
            '& .MuiOutlinedInput-root': {
              height: { xs: '2.5rem', md: 'auto' },
              borderRadius: '0.25rem',
              '& fieldset': {
                borderColor: 'grey.300',
              },
            },
            '& .MuiInputBase-input': {
              px: '0.75rem',
              py: { xs: '0.5rem', md: '0.5rem' },
              fontSize: '1rem',
              color: 'grey.500',
              '&::placeholder': {
                color: 'grey.500',
                opacity: 1,
              },
            },
          }}
        />
      </Box>

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          height: { xs: 'auto', md: '3rem' },
          fontSize: { xs: '1rem', md: '1.5rem' },
          lineHeight: { xs: '1.5rem', md: '1.75rem' },
          textTransform: 'none',
          fontWeight: 400,
          borderRadius: '0.5rem',
          backgroundColor: '#656CAF',
          boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.20), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
          mb: { xs: '0.75rem', md: 0 },
          // Force exact padding values
          padding: { xs: '0.375rem 1rem !important', md: '0.5rem 1.25rem' },
          '&:hover': {
            backgroundColor: '#4C53A2',
          },
        }}
      >
        Send
      </Button>
    </Box>
  );

  // Mobile Bottom Sheet
  if (isMobile) {
    return (
      <Drawer
        anchor="bottom"
        open={open}
        onClose={onClose}
        sx={{
          '& .MuiDrawer-paper': {
            borderTopLeftRadius: '1.25rem',
            borderTopRightRadius: '1.25rem',
            maxHeight: '90dvh',
            height: 'auto',
            px: '1rem',
            py: '0.75rem',
            pb: 'max(env(safe-area-inset-bottom), 0.75rem)',
            backgroundColor: 'white',
          },
        }}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Drag Handle */}
          <Box
            sx={{
              width: '5rem',
              height: '0.25rem',
              backgroundColor: 'grey.200',
              borderRadius: '0.125rem',
              margin: '0.25rem auto 0.75rem',
              flexShrink: 0,
            }}
          />
          
          <Box
            sx={{
              flex: 1,
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {formContent}
          </Box>
        </Box>
      </Drawer>
    );
  }

  // Desktop Dialog
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: '41.5rem',
          maxWidth: '90vw',
          borderRadius: '0.5rem',
          p: '1.5rem 2rem',
          overflow: 'visible',
          position: 'relative',
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: '0',
          top: '-2rem',
          color: 'white',
          backgroundColor: 'transparent',
          p: 0,
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 18L18 6M18 18L6 6" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </IconButton>
      
      <DialogContent sx={{ p: 0 }}>
        {formContent}
      </DialogContent>
    </Dialog>
  );
};