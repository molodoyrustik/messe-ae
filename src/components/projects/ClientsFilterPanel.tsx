'use client';

import { useState } from 'react';
import {
  Box,
  Typography,
  Checkbox,
  Stack,
  Button,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MobileFilterPanel from './MobileFilterPanel';
import { Client } from '@/types/api';

interface ClientsFilterPanelProps {
  open: boolean;
  onClose: () => void;
  clients: Client[];
  selectedClients: string[];
  onClientSelect: (clientSlug: string | null) => void;
}

export default function ClientsFilterPanel({
  open,
  onClose,
  clients,
  selectedClients,
  onClientSelect,
}: ClientsFilterPanelProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleClientClick = () => {
    onClose();
  };

  return (
    <MobileFilterPanel
      open={open}
      onClose={onClose}
      title=""
      height="auto"
    >
      <Box sx={{ 
        position: 'relative', 
        display: 'flex',
        flexDirection: 'column',
        height: '70vh',
        maxHeight: '37.5rem',
      }}>
        {/* Draggable indicator */}
        <Box
          sx={{
            width: '2.5rem',
            height: '0.25rem',
            backgroundColor: '#E0E0E0',
            borderRadius: '0.25rem',
            mx: 'auto',
            mb: 2,
            flexShrink: 0,
          }}
        />
        
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 2,
            mb: 2,
            flexShrink: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontSize: '1rem',
              fontWeight: 700,
              lineHeight: '1.25rem',
              color: '#424242',
            }}
          >
            Clients
          </Typography>
          <Button
            onClick={() => {
              onClientSelect(null);
              onClose();
            }}
            sx={{
              fontFamily: 'Roboto',
              fontSize: '0.75rem',
              fontWeight: 400,
              color: '#757575',
              textTransform: 'none',
              p: 0,
              minWidth: 'auto',
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#424242',
              },
            }}
          >
            Reset
          </Button>
        </Box>
        
        {/* Search field */}
        {/* <Box sx={{ px: 2, mb: 2 }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Search clients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#9E9E9E', fontSize: '1.25rem' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#F5F5F5',
                borderRadius: '0.5rem',
                '& fieldset': {
                  border: 'none',
                },
                '&:hover': {
                  backgroundColor: '#EEEEEE',
                },
                '&.Mui-focused': {
                  backgroundColor: '#FFFFFF',
                  '& fieldset': {
                    border: '1px solid #656CAF',
                  },
                },
              },
              '& .MuiInputBase-input': {
                fontSize: '0.875rem',
                fontFamily: 'Roboto',
              },
            }}
          />
        </Box> */}
        
        {/* Client list */}
        <Box
          sx={{
            px: 2,
            flex: 1,
            overflowY: 'auto',
            overflowX: 'hidden',
            mb: '5rem', // space for the fixed button
          }}
        >
          <Stack spacing={0} sx={{ gap: 0 }}>
            {filteredClients.length === 0 ? (
              <Typography
                sx={{
                  textAlign: 'center',
                  py: 4,
                  color: '#9E9E9E',
                  fontSize: '0.875rem',
                  fontFamily: 'Roboto',
                }}
              >
                No clients found
              </Typography>
            ) : (
              filteredClients.map((client, index) => (
              <Box
                key={client.id}
                onClick={() => onClientSelect(client.slug)}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  pb: 0.5,
                  borderBottom: '1px solid #E0E0E0',
                  cursor: 'pointer',
                  minHeight: '2rem',
                  '&:last-child': {
                    borderBottom: index === filteredClients.length - 1 ? 'none' : '1px solid #E0E0E0',
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(101, 108, 175, 0.04)',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: '0.875rem',
                    lineHeight: '1rem',
                    color: '#262626',
                  }}
                >
                  {client.name}
                </Typography>
                <Checkbox
                  checked={selectedClients.includes(client.slug)}
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    p: 0,
                    color: '#656CAF',
                    '&.Mui-checked': {
                      color: '#656CAF',
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: '1.25rem',
                    },
                  }}
                />
              </Box>
              ))
            )}
          </Stack>
        </Box>
        
        {/* Bottom button */}
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(8px)',
            zIndex: 1,
          }}
        >
          <Button
            variant="contained"
            fullWidth
            onClick={handleClientClick}
            sx={{
              fontFamily: 'Roboto',
              fontSize: '1rem',
              fontWeight: 400,
              textTransform: 'none',
              backgroundColor: '#656CAF',
              color: '#FFFFFF',
              py: 1,
              borderRadius: '0.5rem',
              boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.20), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
              '&:hover': {
                backgroundColor: '#4C53A2',
              },
            }}
          >
            Done
          </Button>
        </Box>
      </Box>
    </MobileFilterPanel>
  );
}