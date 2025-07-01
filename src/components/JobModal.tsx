import {
  Dialog,
  DialogContent,
  Drawer,
  IconButton,
  Typography,
  Stack,
  Chip,
  Box,
  Divider,
  Button,
} from '@mui/material';
import { Close, LocationOn, Work, AccessTime } from '@mui/icons-material';
import { Job } from './JobCard';

interface JobModalProps {
  job: Job;
  open: boolean;
  onClose: () => void;
  isMobile: boolean;
}

export default function JobModal({ job, open, onClose, isMobile }: JobModalProps) {
  const content = (
    <>
      {/* Header with close button */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          mb: 3,
        }}
      >
        <Box sx={{ flex: 1 }}>
          {/* Department Chip */}
          <Chip
            label={job.department}
            size="small"
            sx={{
              backgroundColor: '#E9EAF4',
              color: '#656CAF',
              fontFamily: 'Roboto',
              fontWeight: 500,
              fontSize: '0.75rem',
              lineHeight: '1rem',
              letterSpacing: '0.02em',
              height: '1.5rem',
              borderRadius: '0.25rem',
              mb: 2,
              '& .MuiChip-label': {
                px: '0.75rem',
              },
            }}
          />

          {/* Job Title */}
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: { xs: '1.5rem', md: '2rem' },
              lineHeight: { xs: '2rem', md: '2.5rem' },
              letterSpacing: '0.01em',
              color: '#262626',
              mb: 2,
            }}
          >
            {job.title}
          </Typography>

          {/* Job Details */}
          <Stack spacing={1}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <LocationOn sx={{ fontSize: '1.25rem', color: '#7B7B7B' }} />
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  letterSpacing: '0.02em',
                  color: '#7B7B7B',
                }}
              >
                {job.location}
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <Work sx={{ fontSize: '1.25rem', color: '#7B7B7B' }} />
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  letterSpacing: '0.02em',
                  color: '#7B7B7B',
                }}
              >
                {job.type}
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <AccessTime sx={{ fontSize: '1.25rem', color: '#7B7B7B' }} />
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  letterSpacing: '0.02em',
                  color: '#7B7B7B',
                }}
              >
                {job.experience} experience
              </Typography>
            </Stack>
          </Stack>
        </Box>

        <IconButton
          onClick={onClose}
          sx={{
            color: '#7B7B7B',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
          }}
        >
          <Close />
        </IconButton>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Job Description */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            letterSpacing: '0.01em',
            color: '#262626',
            mb: 2,
          }}
        >
          About the Role
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.75rem',
            letterSpacing: '0.02em',
            color: '#262626',
          }}
        >
          {job.description}
        </Typography>
      </Box>

      {/* Requirements */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            letterSpacing: '0.01em',
            color: '#262626',
            mb: 2,
          }}
        >
          Requirements
        </Typography>
        <Box component="ul" sx={{ pl: 3, m: 0 }}>
          {job.requirements.map((req, index) => (
            <Typography
              key={index}
              component="li"
              variant="body1"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: '1rem',
                lineHeight: '1.75rem',
                letterSpacing: '0.02em',
                color: '#262626',
                mb: 1,
              }}
            >
              {req}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Responsibilities */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            letterSpacing: '0.01em',
            color: '#262626',
            mb: 2,
          }}
        >
          Key Responsibilities
        </Typography>
        <Box component="ul" sx={{ pl: 3, m: 0 }}>
          {job.responsibilities.map((resp, index) => (
            <Typography
              key={index}
              component="li"
              variant="body1"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: '1rem',
                lineHeight: '1.75rem',
                letterSpacing: '0.02em',
                color: '#262626',
                mb: 1,
              }}
            >
              {resp}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Apply Button */}
      <Box sx={{ pt: 2 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#656CAF',
            color: '#FFFFFF',
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.5rem',
            letterSpacing: '0.02em',
            py: '0.75rem',
            borderRadius: '0.5rem',
            textTransform: 'none',
            boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
            '&:hover': {
              backgroundColor: '#4C53A2',
            },
          }}
        >
          Apply for this position
        </Button>
      </Box>
    </>
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
            px: 2,
            py: 3,
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
      maxWidth="md"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '0.75rem',
          maxHeight: '90vh',
        },
      }}
    >
      <DialogContent sx={{ p: { xs: 3, md: 4 } }}>
        {content}
      </DialogContent>
    </Dialog>
  );
}