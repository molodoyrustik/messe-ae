import {
  Dialog,
  DialogContent,
  Drawer,
  IconButton,
  Typography,
  Stack,
  Box,
  Button,
} from '@mui/material';
import { Close, LocationOn, Work } from '@mui/icons-material';
import { Job } from './JobCard';

interface JobModalProps {
  job: Job;
  open: boolean;
  onClose: () => void;
  isMobile: boolean;
}

export default function JobModal({ job, open, onClose, isMobile }: JobModalProps) {
  const content = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <Box sx={{ mb: 3 }}>
        {/* Job Title */}
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: '1.5rem',
            lineHeight: '1.75rem',
            letterSpacing: '0.01em',
            color: '#262626',
            mb: '0.5rem',
          }}
        >
          {job.title}
        </Typography>

        {/* Tags */}
        <Stack direction="row" spacing={0.5} alignItems="center">
          {/* Location Tag */}
          <Box
            sx={{
              px: '0.75rem',
              py: '0.5rem',
              backgroundColor: '#656CAF',
              borderRadius: '62.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <LocationOn sx={{ fontSize: '1rem', color: '#FFFFFF' }} />
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: '0.875rem',
                lineHeight: '1rem',
                letterSpacing: '0.01em',
                color: '#FFFFFF',
              }}
            >
              {job.location}
            </Typography>
          </Box>

          {/* Type Tag */}
          <Box
            sx={{
              px: '0.75rem',
              py: '0.5rem',
              backgroundColor: '#656CAF',
              borderRadius: '62.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Work sx={{ fontSize: '1rem', color: '#FFFFFF' }} />
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: '0.875rem',
                lineHeight: '1rem',
                letterSpacing: '0.01em',
                color: '#FFFFFF',
              }}
            >
              {job.type}
            </Typography>
          </Box>
        </Stack>
      </Box>

      {/* Scrollable Content */}
      <Box sx={{ flex: 1, overflow: 'auto', mb: 3 }}>
        {/* Description */}
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.5rem',
            letterSpacing: '0.02rem',
            color: '#000',
            whiteSpace: 'pre-wrap',
          }}
        >
          {job.description}
        </Typography>

        {/* Additional sections if needed */}
        {job.requirements && job.requirements.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: '1.125rem',
                lineHeight: '1.5rem',
                letterSpacing: '0.01em',
                color: '#262626',
                mb: 1,
              }}
            >
              Requirements
            </Typography>
            <Box component="ul" sx={{ pl: 3, m: 0 }}>
              {job.requirements.map((req, index) => (
                <Typography
                  key={index}
                  component="li"
                  sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: '1rem',
                    lineHeight: '1.5rem',
                    letterSpacing: '0.02rem',
                    color: '#000',
                    mb: 0.5,
                  }}
                >
                  {req}
                </Typography>
              ))}
            </Box>
          </Box>
        )}

        {job.responsibilities && job.responsibilities.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: '1.125rem',
                lineHeight: '1.5rem',
                letterSpacing: '0.01em',
                color: '#262626',
                mb: 1,
              }}
            >
              Key Responsibilities
            </Typography>
            <Box component="ul" sx={{ pl: 3, m: 0 }}>
              {job.responsibilities.map((resp, index) => (
                <Typography
                  key={index}
                  component="li"
                  sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: '1rem',
                    lineHeight: '1.5rem',
                    letterSpacing: '0.02rem',
                    color: '#000',
                    mb: 0.5,
                  }}
                >
                  {resp}
                </Typography>
              ))}
            </Box>
          </Box>
        )}
      </Box>

      {/* Apply Button - Fixed at bottom left */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Button
          variant="contained"
          sx={{
            height: '3rem',
            px: '1.375rem',
            py: '0.5rem',
            backgroundColor: '#656CAF',
            color: '#FFFFFF',
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '1.5rem',
            lineHeight: '1.75rem',
            letterSpacing: '0.01em',
            borderRadius: '0.5rem',
            textTransform: 'none',
            boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)',
            '&:hover': {
              backgroundColor: '#4C53A2',
            },
          }}
        >
          Apply
        </Button>
      </Box>
    </Box>
  );

  if (isMobile) {
    return (
      <Drawer
        anchor="bottom"
        open={open}
        onClose={onClose}
        sx={{
          '& .MuiDrawer-paper': {
            borderTopLeftRadius: '1rem',
            borderTopRightRadius: '1rem',
            maxHeight: '90vh',
            height: 'auto',
            px: '1rem',
            py: '1.5rem',
            pb: 'max(env(safe-area-inset-bottom), 1.5rem)',
          },
        }}
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: '50rem',
          maxWidth: '90vw',
          height: '35rem',
          maxHeight: '90vh',
          borderRadius: '0.5rem',
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
      
      <DialogContent 
        sx={{ 
          p: '2rem',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {content}
      </DialogContent>
    </Dialog>
  );
}