import { 
  Card, 
  CardContent, 
  Typography, 
  Stack,
  Chip,
  Box,
} from '@mui/material';
import { LocationOn, Work, AccessTime } from '@mui/icons-material';

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

export default function JobCard({ job, onClick }: JobCardProps) {
  return (
    <Card
      onClick={onClick}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '0.75rem',
        border: '1px solid #E0E0E0',
        boxShadow: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-0.25rem)',
          boxShadow: '0 0.5rem 1.5rem rgba(0,0,0,0.1)',
          borderColor: '#656CAF',
        },
      }}
    >
      <CardContent 
        sx={{ 
          p: { xs: '1.5rem', md: '2rem' },
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Department Chip */}
        <Box sx={{ mb: 2 }}>
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
              '& .MuiChip-label': {
                px: '0.75rem',
              },
            }}
          />
        </Box>

        {/* Job Title */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: { xs: '1.125rem', md: '1.25rem' },
            lineHeight: { xs: '1.5rem', md: '1.75rem' },
            letterSpacing: '0.01em',
            color: '#262626',
            mb: 1.5,
          }}
        >
          {job.title}
        </Typography>

        {/* Job Details */}
        <Stack spacing={1} sx={{ mb: 2 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <LocationOn sx={{ fontSize: '1rem', color: '#7B7B7B' }} />
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Roboto',
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
                letterSpacing: '0.02em',
                color: '#7B7B7B',
              }}
            >
              {job.location}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Work sx={{ fontSize: '1rem', color: '#7B7B7B' }} />
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Roboto',
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
                letterSpacing: '0.02em',
                color: '#7B7B7B',
              }}
            >
              {job.type}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <AccessTime sx={{ fontSize: '1rem', color: '#7B7B7B' }} />
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Roboto',
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
                letterSpacing: '0.02em',
                color: '#7B7B7B',
              }}
            >
              {job.experience}
            </Typography>
          </Stack>
        </Stack>

        {/* Description Preview */}
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            letterSpacing: '0.02em',
            color: '#7B7B7B',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            mt: 'auto',
          }}
        >
          {job.description}
        </Typography>

        {/* View Details Link */}
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            letterSpacing: '0.02em',
            color: '#656CAF',
            mt: 2,
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          View details →
        </Typography>
      </CardContent>
    </Card>
  );
}