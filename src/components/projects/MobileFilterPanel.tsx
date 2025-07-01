'use client';

import { ReactNode } from 'react';
import {
  Box,
  Drawer,
  Typography,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface MobileFilterPanelProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  height?: string;
}

export default function MobileFilterPanel({
  open,
  onClose,
  title,
  children,
  height = '70vh',
}: MobileFilterPanelProps) {
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          borderTopLeftRadius: '1.5rem',
          borderTopRightRadius: '1.5rem',
          height,
          backgroundColor: '#FFFFFF',
        },
      }}
    >
      <Box sx={{ height: '100%', position: 'relative' }}>
        {title && (
          <Box sx={{ p: 2.5 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  lineHeight: '1.25rem',
                  color: '#262626',
                }}
              >
                {title}
              </Typography>
              <IconButton
                onClick={onClose}
                sx={{
                  p: 0.5,
                  color: '#262626',
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        )}
        {children}
      </Box>
    </Drawer>
  );
}