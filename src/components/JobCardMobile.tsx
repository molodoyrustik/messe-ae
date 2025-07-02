import { 
  Box,
  Typography, 
  Stack,
  Button,
} from '@mui/material';
import { LocationOn, Work, ArrowForward } from '@mui/icons-material';
import { Job } from './JobCard';

interface JobCardMobileProps {
  job: Job;
  onClick?: () => void;
}

export default function JobCardMobile({ job, onClick }: JobCardMobileProps) {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: '100%',
        padding: '0.5rem 0.75rem',
        borderRadius: '0.5rem',
        border: '1px solid',
        borderColor: '#E9EAF4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: '1rem',
        overflow: 'hidden',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.3s ease',
        '&:hover': onClick ? {
          borderColor: '#656CAF',
        } : {},
      }}
    >
      {/* Header Section */}
      <Box sx={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {/* Job Title */}
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: '1rem',
            lineHeight: '1.5rem',
            letterSpacing: '0.01em',
            color: '#262626',
          }}
        >
          {job.title}
        </Typography>

        {/* Tags */}
        <Stack direction="row" spacing={0.5} alignItems="center" flexWrap="wrap">
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

      {/* Description */}
      <Box
        sx={{
          alignSelf: 'stretch',
          height: '7rem',
          overflow: 'hidden',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: '1rem',
            letterSpacing: '0.01em',
            color: '#000',
            display: '-webkit-box',
            WebkitLineClamp: 7,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {job.description}
        </Typography>
      </Box>

      {/* Read More Button */}
      <Button
        variant="text"
        endIcon={<ArrowForward />}
        sx={{
          height: '2rem',
          px: '0.3125rem',
          py: '0.25rem',
          borderRadius: '0.5rem',
          textTransform: 'none',
          color: '#656CAF',
          fontFamily: 'Roboto',
          fontWeight: 400,
          fontSize: '1rem',
          lineHeight: '1.5rem',
          letterSpacing: '0.02rem',
          '&:hover': {
            backgroundColor: 'rgba(101, 108, 175, 0.08)',
          },
          '& .MuiButton-endIcon': {
            ml: '0.5rem',
            '& svg': {
              fontSize: '1rem',
            },
          },
        }}
      >
        Read more
      </Button>
    </Box>
  );
}