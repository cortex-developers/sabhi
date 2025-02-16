import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Steps = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ 
      width: isMobile ? '90%' : '97%', 
      padding: '20px', 
      textAlign: 'center', 
      justifyItems: 'center'}}>
      {/* Title */}
      <Typography variant="h4" sx={{ marginBottom: '4rem', fontWeight: 'bold', color: 'black', fontFamily: 'Notable, sans-serif' }}>
        Getting Started
      </Typography>

      {/* Steps */}
      <Grid container spacing={3}>
        {/* Step 1 */}
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: '100%',
              background: 'linear-gradient(to bottom, #ffffff, #e3f2fd)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  marginBottom: '1rem',
                  fontWeight: 'bold',
                  color: '#2196f3',
                  fontSize: '1.5rem',
                  fontFamily: 'Notable, sans-serif',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    width: '40px',
                    height: '3px',
                    backgroundColor: '#2196f3',
                    transform: 'translateX(-50%)',
                  },
                }}
              >
                Step 1
              </Typography>
              <Typography variant="h6" sx={{ marginBottom: '1rem', color: '#333' }}>
                Schedule a free performance consult for your school, team, or individual athlete.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Step 2 */}
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: '100%',
              background: 'linear-gradient(to bottom, #ffffff, #e8f5e9)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  marginBottom: '1rem',
                  fontWeight: 'bold',
                  color: '#4caf50',
                  fontSize: '1.5rem',
                  fontFamily: 'Notable, sans-serif',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    width: '40px',
                    height: '3px',
                    backgroundColor: '#4caf50',
                    transform: 'translateX(-50%)',
                  },
                }}
              >
                Step 2
              </Typography>
              <Typography variant="h6" sx={{ marginBottom: '1rem', color: '#333' }}>
                Hold Tight! A member of our team will reach out to you within 24 hours.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Step 3 */}
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: '100%',
              background: 'linear-gradient(to bottom, #ffffff, #fff3e0)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  marginBottom: '1rem',
                  fontWeight: 'bold',
                  color: '#ff9800',
                  fontSize: '1.5rem',
                  fontFamily: 'Notable, sans-serif',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    width: '40px',
                    height: '3px',
                    backgroundColor: '#ff9800',
                    transform: 'translateX(-50%)',
                  },
                }}
              >
                Step 3
              </Typography>
              <Typography variant="h6" sx={{ marginBottom: '1rem', color: '#333' }}>
                Start the journey towards your goals! You will be onboarded onto our mobile application and receive an account to login with.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.open("https://calendar.app.google/DiC7jqDvh8C1xHh18")}
        sx={{
          marginTop: '2rem',
          padding: '10px 20px',
          fontSize: '1rem',
          borderRadius: '15px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        }}
      >
        Book a free performance chat
      </Button>
      <Box
        variant="contained"
        color="primary"
        // redirect to EliteCoaches tab
        sx={{
          marginTop: '2rem',
          padding: '10px 20px',
          fontSize: '1rem',
          borderRadius: '15px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        }}
      >
        <i>Developed by Doctors, Amplified by D1 Athlete Mentors</i>
      </Box>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/mentors"
        sx={{
          marginTop: '2rem',
          padding: '10px 20px',
          fontSize: '1rem',
          borderRadius: '15px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        }}
      >
        Meet our team of coaches here
      </Button>
    </Box>
  );
};

export default Steps;
