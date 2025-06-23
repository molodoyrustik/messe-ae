'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import Header from '@/components/Header';
import FooterSection from '@/components/landing/FooterSection';

// Team member data
const teamMembers = [
  {
    id: 1,
    name: 'Ahmed Al-Rashid',
    position: 'CEO & Founder',
    description: 'Leading the company with over 15 years of experience in exhibition management.',
    image: '/team-1.jpg',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    position: 'Creative Director',
    description: 'Bringing innovative design solutions to every project with international expertise.',
    image: '/team-2.jpg',
  },
  {
    id: 3,
    name: 'Mohammed Hassan',
    position: 'Operations Manager',
    description: 'Ensuring seamless execution of events with meticulous attention to detail.',
    image: '/team-3.jpg',
  },
];

// Company values
const values = [
  {
    title: 'Excellence',
    description: 'We strive for perfection in every project, delivering exceptional results that exceed expectations.',
  },
  {
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and creative solutions to stay ahead of industry trends.',
  },
  {
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and ethical practices in all our relationships.',
  },
  {
    title: 'Partnership',
    description: 'We build lasting relationships with our clients, treating their success as our own.',
  },
];

export default function AboutPage() {

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Header />
      
      {/* Main Content */}
      <Container maxWidth="xl" sx={{ pt: { xs: 12, md: 20 }, pb: 8 }}>
        <Box sx={{ maxWidth: 1360, mx: 'auto', px: { xs: 2, md: 5 } }}>
          
          {/* Hero Section */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: { xs: 36, md: 54 },
                lineHeight: '60px',
                color: '#262626',
                mb: 3,
              }}
            >
              About Messe.ae
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: 18,
                lineHeight: '28px',
                letterSpacing: '0.02em',
                color: '#000000',
                maxWidth: 800,
                mb: 4,
              }}
            >
              We are a leading marketing and exhibition services company based in Dubai, UAE. 
              As part of the Expoglobal Group, we bring together decades of experience in creating 
              memorable events and exhibitions that connect businesses and drive growth across the Middle East.
            </Typography>
          </Box>

          {/* Mission & Vision */}
          <Grid container spacing={6} sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  p: 4,
                  border: '2px solid #A2A9D0',
                  borderRadius: 2,
                  backgroundColor: '#F8F9FF',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 700,
                    fontSize: 32,
                    lineHeight: '40px',
                    color: '#4C53A2',
                    mb: 3,
                  }}
                >
                  Our Mission
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: '24px',
                    letterSpacing: '0.02em',
                    color: '#262626',
                  }}
                >
                  To deliver exceptional marketing and exhibition services that create meaningful connections, 
                  drive business growth, and contribute to the economic development of the region through 
                  innovative event solutions and strategic partnerships.
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  p: 4,
                  border: '2px solid #A2A9D0',
                  borderRadius: 2,
                  backgroundColor: '#F8F9FF',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 700,
                    fontSize: 32,
                    lineHeight: '40px',
                    color: '#4C53A2',
                    mb: 3,
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: '24px',
                    letterSpacing: '0.02em',
                    color: '#262626',
                  }}
                >
                  To be the premier marketing and exhibition services provider in the Middle East, 
                  recognized for our innovation, excellence, and commitment to creating world-class 
                  events that inspire, educate, and connect global communities.
                </Typography>
              </Card>
            </Grid>
          </Grid>

          {/* Company Values */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: { xs: 32, md: 42 },
                lineHeight: '50px',
                color: '#262626',
                mb: 4,
                textAlign: 'center',
              }}
            >
              Our Values
            </Typography>
            <Grid container spacing={4}>
              {values.map((value, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      p: 3,
                      border: '1px solid #E0E0E0',
                      borderRadius: 2,
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                        borderColor: '#656CAF',
                      },
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: 'Roboto',
                        fontWeight: 700,
                        fontSize: 24,
                        lineHeight: '28px',
                        color: '#4C53A2',
                        mb: 2,
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: 'Roboto',
                        fontWeight: 400,
                        fontSize: 14,
                        lineHeight: '20px',
                        color: '#262626',
                      }}
                    >
                      {value.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Team Section */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: { xs: 32, md: 42 },
                lineHeight: '50px',
                color: '#262626',
                mb: 4,
                textAlign: 'center',
              }}
            >
              Meet Our Team
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {teamMembers.map((member) => (
                <Grid item xs={12} sm={6} md={4} key={member.id}>
                  <Card
                    sx={{
                      textAlign: 'center',
                      border: '2px solid #A2A9D0',
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: 250,
                        backgroundColor: '#F5F5F5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#7B7B7B',
                          fontSize: 14,
                        }}
                      >
                        Photo Coming Soon
                      </Typography>
                    </Box>
                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: 'Roboto',
                          fontWeight: 700,
                          fontSize: 20,
                          lineHeight: '24px',
                          color: '#262626',
                          mb: 1,
                        }}
                      >
                        {member.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontFamily: 'Roboto',
                          fontWeight: 500,
                          fontSize: 16,
                          lineHeight: '20px',
                          color: '#656CAF',
                          mb: 2,
                        }}
                      >
                        {member.position}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'Roboto',
                          fontWeight: 400,
                          fontSize: 14,
                          lineHeight: '20px',
                          color: '#7B7B7B',
                        }}
                      >
                        {member.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

        </Box>
      </Container>

      <FooterSection />
    </Box>
  );
}
