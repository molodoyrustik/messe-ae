'use client';

import { useState } from 'react';
import {
  Box,
  Typography,
  Chip,
  Stack,
  Button,
  // Divider,
  Checkbox,
  // TextField,
  // InputAdornment,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// import SearchIcon from '@mui/icons-material/Search';
import MobileFilterPanel from './MobileFilterPanel';
import { Client } from '@/types/api';

interface CombinedFilterPanelProps {
  open: boolean;
  onClose: () => void;
  clients: Client[];
  selectedClients: string[];
  selectedSizeRanges: string[];
  selectedTypes: string[];
  onClientSelect: (clientSlug: string | null) => void;
  onSizeSelect: (sizeRange: string | null) => void;
  onTypeSelect: (type: 'double-decker' | 'events' | null) => void;
  onReset: () => void;
}

const sizeRanges = [
  { label: '< 50 m²', value: { min: 0, max: 49 } },
  { label: '50 - 100 m²', value: { min: 50, max: 100 } },
  { label: '101 - 300 m²', value: { min: 101, max: 300 } },
  { label: '> 300 m²', value: { min: 301, max: 10000 } },
];

export default function CombinedFilterPanel({
  open,
  onClose,
  clients,
  selectedClients,
  selectedSizeRanges,
  selectedTypes,
  onClientSelect,
  onSizeSelect,
  onTypeSelect,
  onReset,
}: CombinedFilterPanelProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleReset = () => {
    onReset();
    setSearchQuery('');
    onClose();
  };

  return (
    <MobileFilterPanel
      open={open}
      onClose={onClose}
      title=""
      height="100vh"
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header with active filters */}
      <Box 
        sx={{ 
          flexShrink: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid #E0E0E0',
          px: 2,
          pt: 2,
          pb: 2,
          maxHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, flexShrink: 0 }}>
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontSize: '1rem',
              fontWeight: 700,
              lineHeight: '1.25rem',
              color: '#262626',
            }}
          >
            Filters
          </Typography>
          <Button
            onClick={handleReset}
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
        
        {/* Active filters display with scroll */}
        {(selectedClients.length > 0 || selectedSizeRanges.length > 0 || selectedTypes.length > 0) && (
          <Box
            sx={{
              overflowY: 'auto',
              overflowX: 'hidden',
              // Hide scrollbar but keep functionality
              '&::-webkit-scrollbar': {
                width: '0.25rem',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#E0E0E0',
                borderRadius: '0.125rem',
              },
              scrollbarWidth: 'thin',
              scrollbarColor: '#E0E0E0 transparent',
            }}
          >
            <Stack direction="row" spacing={1} sx={{ 
              flexWrap: 'wrap', 
              gap: 1, 
              pr: 0.5,
              '& .MuiChip-root:first-child': {
                ml: 1,
              },
            }}>
              {selectedClients.map(clientSlug => {
                const client = clients.find(c => c.slug === clientSlug);
                return client ? (
                  <Chip
                    key={clientSlug}
                    label={client.name}
                    onDelete={() => onClientSelect(clientSlug)}
                    deleteIcon={<CloseIcon sx={{ fontSize: '1rem' }} />}
                    sx={{
                      backgroundColor: '#656CAF',
                      color: '#FFFFFF',
                      fontFamily: 'Roboto',
                      fontSize: '1rem',
                      height: 'auto',
                      px: 1,
                      py: 0.5,
                      '& .MuiChip-deleteIcon': {
                        color: '#FFFFFF',
                        ml: 0.5,
                      },
                    }}
                  />
                ) : null;
              })}
              {selectedSizeRanges.map(range => (
                <Chip
                  key={range}
                  label={range}
                  onDelete={() => onSizeSelect(range)}
                  deleteIcon={<CloseIcon sx={{ fontSize: '1rem' }} />}
                  sx={{
                    backgroundColor: '#656CAF',
                    color: '#FFFFFF',
                    fontFamily: 'Roboto',
                    fontSize: '1rem',
                    height: 'auto',
                    px: 1,
                    py: 0.5,
                    '& .MuiChip-deleteIcon': {
                      color: '#FFFFFF',
                      ml: 0.5,
                    },
                  }}
                />
              ))}
              {selectedTypes.map(type => (
                <Chip
                  key={type}
                  label={type === 'double-decker' ? 'Double-Deckers' : 'Events'}
                  onDelete={() => onTypeSelect(type as 'double-decker' | 'events')}
                  deleteIcon={<CloseIcon sx={{ fontSize: '1rem' }} />}
                  sx={{
                    backgroundColor: '#656CAF',
                    color: '#FFFFFF',
                    fontFamily: 'Roboto',
                    fontSize: '1rem',
                    height: 'auto',
                    px: 1,
                    py: 0.5,
                    '& .MuiChip-deleteIcon': {
                      color: '#FFFFFF',
                      ml: 0.5,
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>
        )}
      </Box>

      {/* Main content with scroll */}
      <Box 
        sx={{ 
          flex: 1,
          overflowY: 'auto',
          px: 2,
          pt: 2,
          pb: '6rem',
        }}
      >
        {/* Clients section */}
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontSize: '1rem',
              fontWeight: 700,
              lineHeight: '1.25rem',
              color: '#424242',
              mb: 1.5,
            }}
          >
            Clients
          </Typography>
          
          {/* Search field */}
          {/* <TextField
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
              mb: 1.5,
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
          /> */}
          
          <Box
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: '0.5rem',
              p: 1.5,
              maxHeight: '10rem',
              overflowY: 'auto',
            }}
          >
            <Stack spacing={0}>
              {filteredClients.length === 0 ? (
                <Typography
                  sx={{
                    textAlign: 'center',
                    py: 2,
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
                    py: 1,
                    borderBottom: index < clients.length - 1 ? '1px solid #E0E0E0' : 'none',
                    cursor: 'pointer',
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
        </Box>

        {/* Stand size section */}
        <Box>
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontSize: '1rem',
              fontWeight: 700,
              lineHeight: '1.25rem',
              color: '#424242',
              mb: 1.5,
            }}
          >
            Stand size
          </Typography>
          <Box
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: '0.5rem',
              p: 1.5,
            }}
          >
            <Stack spacing={0}>
              {sizeRanges.map((range, index) => (
                <Box
                  key={range.label}
                  onClick={() => onSizeSelect(range.label)}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 1,
                    borderBottom: index < sizeRanges.length - 1 ? '1px solid #E0E0E0' : 'none',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: 'rgba(101, 108, 175, 0.04)',
                    },
                  }}
                >
                  <Typography
                    component="div"
                    sx={{
                      fontFamily: 'Roboto',
                      fontSize: '0.875rem',
                      lineHeight: '1rem',
                      color: '#262626',
                    }}
                  >
                    {range.label.includes('m²') ? (
                      <>
                        {range.label.split('m²')[0]}m<sup style={{ fontSize: '0.75rem' }}>2</sup>
                        {range.label.split('m²')[1]}
                      </>
                    ) : (
                      range.label
                    )}
                  </Typography>
                  <Checkbox
                    checked={selectedSizeRanges.includes(range.label)}
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
              ))}
              <Box
                onClick={() => onTypeSelect('double-decker')}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  py: 1,
                  borderBottom: '1px solid #E0E0E0',
                  cursor: 'pointer',
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
                  Double-Deckers
                </Typography>
                <Checkbox
                  checked={selectedTypes.includes('double-decker')}
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
              <Box
                onClick={() => onTypeSelect('events')}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  py: 1,
                  cursor: 'pointer',
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
                  Events
                </Typography>
                <Checkbox
                  checked={selectedTypes.includes('events')}
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
            </Stack>
          </Box>
        </Box>
      </Box>

      {/* Bottom button */}
      <Box
        sx={{
          flexShrink: 0,
          p: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(8px)',
          borderTop: '1px solid #E0E0E0',
        }}
      >
        <Button
          variant="contained"
          fullWidth
          onClick={onClose}
          sx={{
            fontFamily: 'Roboto',
            fontSize: '1rem',
            fontWeight: 400,
            textTransform: 'none',
            backgroundColor: '#656CAF',
            color: '#FFFFFF',
            py: 1.5,
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