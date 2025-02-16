import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar, Box } from '@mui/material';
import founderImage from './nate.jpg'; // Replace with the path to the founder's image
import football from './football.jpeg'; // Replace with your background image

const AboutUs = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh', // Ensure the background covers the full viewport height
        backgroundImage: `url(${football})`,
        backgroundSize: 'cover', // Cover the entire area with the background image
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center', // Vertically center the card
        justifyContent: 'center', // Horizontally center the card
        padding: '2rem 0', // Optional padding
      }}
    >
      <Container maxWidth="md">
        <Card sx={{ boxShadow: 3, borderRadius: '16px', padding: '1.5rem' }}>
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom>
              A Letter from Our Founder
            </Typography>
            <Grid container spacing={3} alignItems="flex-start">
              {/* Story Content */}
              <Grid item xs={12} sm={8}>
                <Typography variant="body1" paragraph>
                  Dear Cortex Family,
                </Typography>
                <Typography variant="body1" paragraph>
                  Cortex Flex began in March 2024 as the Cortex Flex Athlete Alliance, driven by a vision to bridge the crucial gap between sports and science. 
                  By May, we secured our 501(c)(3) nonprofit status and hit the ground running. In just three months, we raised thousands in donations, hosted 
                  a clinic serving eight school districts, launched a successful podcast and media initiative, and piloted our global mentorship and education program.
                </Typography>
                <Typography variant="body1" paragraph>
                  As scientists and researchers with athletic backgrounds, we saw firsthand where support is most needed in the student-athlete world. 
                  <strong>Psychological and neurological performance are the missing links</strong> to achieving elite success in sports and life. 
                  Our mission is to provide brain-centered training modalities and mentorship that unlock the X-factor in athletes while 
                  fostering positive life outcomes beyond sports. Through <strong>our flagship program, HeadStrong</strong>, 
                  we invite you to join us on the path to realizing your full potential.
                </Typography>
                <Typography variant="body1" paragraph>
                  With this, I want to express my utmost gratitude for your support. We’re excited about the future and remain committed to delivering 
                  science-driven, mentorship-focused innovation. Together, we will continue to empower athletes and students to realize their full abilities and break boundaries.
                </Typography>
                <Typography variant="body1" paragraph>
                  Sincerely,
                </Typography>
                <Typography variant="body1">
                  <strong>Nate Roy</strong>
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  CEO and Founder, Cortex Flex
                </Typography>
              </Grid>

              {/* Founder Image */}
              <Grid item xs={12} sm={4}>
                <Avatar
                  alt="Nate Roy"
                  src={founderImage}
                  sx={{ width: 200, height: 200, margin: '0 auto' }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default AboutUs;
