import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import founderImage from './nate.jpg'; // Replace with the path to the founder's image

const AboutUs = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Card>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            A Letter from Our Founder
          </Typography>
          <Grid container spacing={4} alignItems="center">
            {/* Story Content */}
            <Grid item xs={12} sm={8}>
              <Typography variant="body1" paragraph>
                Dear valued customers,
              </Typography>
              <Typography variant="body1" paragraph>
                Cortex Flex began in March 2024 as the Cortex Flex Athlete Alliance, born out of a vision to bridge a crucial gap between sports and science. By May 2024, we earned our 501(c)(3) nonprofit status and quickly began making an impact. In just three months, we were able to secure thousands of dollars in donations, host a clinic for over 20 athletes, and launch a successful podcast and media initiative. We proudly partnered with well-known corporate sponsors like Coca-Cola and Kodiak.
              </Typography>
              <Typography variant="body1" paragraph>
                By August 2024, it became evident that the demand for our mission had outgrown our nonprofit status. This realization led us to transition into Cortex Flex Inc., with our flagship product, theCORTEX. Our new platform is dedicated to education and mentorship, staying true to our founding principle: using science to achieve elite outcomes in the classroom, on the field, and beyond.
              </Typography>
              <Typography variant="body1" paragraph>
                I want to personally thank you for supporting us on this journey. We are excited about the future and remain committed to delivering value through science, mentorship, and innovation. Together, we will continue to empower athletes and students to reach their highest potential.
              </Typography>
              <Typography variant="body1" paragraph>
                Sincerely,
              </Typography>
              <Typography variant="body1">
                <strong>Nate Roy</strong>
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Founder, Cortex Flex
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
  );
};

export default AboutUs;
