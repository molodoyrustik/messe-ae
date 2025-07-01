'use client';

import {
  Box,
  Typography,
  Checkbox,
  Stack,
  Button,
} from '@mui/material';
import MobileFilterPanel from './MobileFilterPanel';

interface StandSizeFilterPanelProps {
  open: boolean;
  onClose: () => void;
  selectedSizeRanges: string[];
  selectedTypes: string[];
  onSizeSelect: (sizeRange: string | null) => void;
  onTypeSelect: (type: 'double-decker' | 'events' | null) => void;
}

const sizeRanges = [
  { label: '< 50 m²', value: { min: 0, max: 49 } },
  { label: '50 - 100 m²', value: { min: 50, max: 100 } },
  { label: '101 - 300 m²', value: { min: 101, max: 300 } },
  { label: '> 300 m²', value: { min: 301, max: 10000 } },
];

export default function StandSizeFilterPanel({
  open,
  onClose,
  selectedSizeRanges,
  selectedTypes,
  onSizeSelect,
  onTypeSelect,
}: StandSizeFilterPanelProps) {
  const handleItemClick = () => {
    onClose();
  };

  return (
    <MobileFilterPanel
      open={open}
      onClose={onClose}
      title=""
      height="auto"
    >
      <Box sx={{ position: 'relative', minHeight: '19.5rem', maxHeight: '24.125rem' }}>
        {/* Draggable indicator */}
        <Box
          sx={{
            width: '2.5rem',
            height: '0.25rem',
            backgroundColor: '#E0E0E0',
            borderRadius: '0.25rem',
            mx: 'auto',
            mb: 2,
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
            Stand size
          </Typography>
          <Button
            onClick={() => {
              onSizeSelect(null);
              onTypeSelect(null);
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
        {/* Size list */}
        <Box
          sx={{
            px: 2,
            height: 'calc(100% - 8.5rem)',
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          <Stack spacing={0} sx={{ gap: 0 }}>
            {sizeRanges.map((range, index) => (
              <Box
                key={range.label}
                onClick={() => onSizeSelect(range.label)}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  pb: 0.5,
                  borderBottom: '1px solid #E0E0E0',
                  cursor: 'pointer',
                  minHeight: '2rem',
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
                      {range.label.split('m²')[0]}m<sup style={{ fontSize: '0.625rem' }}>2</sup>
                      {range.label.split('m²')[1]}
                    </>
                  ) : (
                    range.label
                  )}
                </Typography>
                <Checkbox
                  checked={selectedSizeRanges.includes(range.label)}
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
            ))}
            <Box
              onClick={() => onTypeSelect('double-decker')}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pb: 0.5,
                borderBottom: '1px solid #E0E0E0',
                cursor: 'pointer',
                minHeight: '2rem',
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
            <Box
              onClick={() => onTypeSelect('events')}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pb: 0.5,
                cursor: 'pointer',
                minHeight: '2rem',
                '&:last-child': {
                  borderBottom: 'none',
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
                Events
              </Typography>
              <Checkbox
                checked={selectedTypes.includes('events')}
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
            onClick={handleItemClick}
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