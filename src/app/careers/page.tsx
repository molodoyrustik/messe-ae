'use client';

import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';
import JobCard, { Job } from '@/components/JobCard';

// Mock jobs data - only 3 jobs as per design
const jobs: Job[] = [
  {
    id: '1',
    title: 'Quantity surveyor',
    department: 'Operations',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '5+ years',
    description: 'As a Quantity Surveyor specialized in events and exhibitions, you will play a crucial role in managing the costs and budgets associated with our projects. You will work closely with the project management team to ensure that financial aspects are meticulously controlled, and resources are optimally allocated. Your expertise will be instrumental in ensuring the profitability and success of our events and exhibitions.',
    requirements: [],
    responsibilities: [],
  },
  {
    id: '2',
    title: 'Project manager',
    department: 'Operations',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Serve as the lead point of contact for all customer account management matters, Build and maintain strong, long-lasting client relationships, Negotiate contracts and close agreements to maximize profits',
    requirements: [],
    responsibilities: [],
  },
  {
    id: '3',
    title: 'Equipment Design Engineer',
    department: 'Engineering',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'We are looking for a technically skilled Equipment Design Engineer for Exhibition Stands to join our dynamic team. In this role, you will be responsible for conceptualizing, designing and ensuring completion drawings on time. You will work closely with project manager, production team and other stakeholders to ensure that all design requirements are met and that the final product aligns with the client\'s vision. You will be expected to provide guidance and support to the production team throughout the project lifecycle.',
    requirements: [],
    responsibilities: [],
  },
];

export default function CareersPage() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Header />
      
      {/* Hero Section */}
      <Container maxWidth="xl" sx={{ pt: '3.75rem', pb: { xs: '3rem', md: '4rem' } }}>
        <Box 
          sx={{ 
            px: { xs: '1rem' }, 
            display: 'grid',
            gridTemplateColumns: '24rem 1fr',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {/* Left Content Block */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {/* Title */}
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: '3rem',
                lineHeight: '3.75rem',
                color: '#262626',
                mb: '0.75rem',
              }}
            >
              Join our team
            </Typography>

            {/* Description */}
            <Typography
              component="div"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: '1rem',
                fontStyle: 'normal',
                lineHeight: '1.5rem',
                letterSpacing: '0.02rem',
                color: '#000',
                '& .company-name': {
                  color: '#262626',
                  fontWeight: 400,
                },
                '& .email-link': {
                  color: '#656CAF',
                  fontWeight: 700,
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  '&:hover': {
                    opacity: 0.8,
                  },
                },
              }}
            >
              At <span className="company-name">messe.ae</span>, we believe that our success is driven by our people. We are always on the lookout for talented, passionate and entrepreneurial exhibition professionals who share our commitment to excellence.
              <br /><br />
              As a member of our team, you will have the opportunity to work on exciting projects across the globe, delivering quality exhibition solutions that exceed our clients' expectations. We offer a collaborative and supportive work environment where innovation and creativity are encouraged and rewarded.
              <br /><br />
              If you are looking for a company where you can achieve your greatest career goals and ambitions, we would love to hear from you. Please send your resume to <span className="email-link">hello@messe.ae</span> and let's start the conversation.
              <br /><br />
              Join us in our journey to shape the future of exhibitions!
            </Typography>
          </Box>

          {/* Right Image */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '56rem',
              aspectRatio: '896 / 464', // Maintains proportional scaling
              borderRadius: '0.5rem',
              overflow: 'hidden',
              backgroundColor: '#F5F5F5',
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=896&h=464&fit=crop"
              alt="Join our team"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* Vacancies Section */}
      <Container maxWidth="xl" sx={{ pb: { xs: '3rem', md: '6rem' } }}>
        <Box sx={{ px: { xs: '1rem' } }}>
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: '2.25rem',
              lineHeight: '2.5rem',
              letterSpacing: '0.01em',
              color: '#262626',
              mb: '3.375rem',
            }}
          >
            Our vacancies
          </Typography>

          {/* Job Cards */}
          <Box
            sx={{
              display: 'flex',
              gap: '2rem',
              justifyContent: 'flex-start',
            }}
          >
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </Box>
        </Box>
      </Container>

      <FooterSection />
    </Box>
  );
}