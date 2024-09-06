import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';

const Why = () => {
  return (
    <Box sx={{ width: '100%', padding: '20px', textAlign: 'center' }}>
      {/* Title */}
      <Typography variant="h4" sx={{ marginBottom: '4rem', fontWeight: 'bold', color: '#333', fontFamily: 'Notable, sans-serif' }}>
        Why Cortex?
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
                Sign Up
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Create an account on our Parent Portal. It only takes a few minutes!
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
                Choose Your Plan
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                A member of our team will contact you using your preferred contact method.
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
                Start Using
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Create an account on our Parent Portal (where the scholarship application is also available )
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginTop: '2rem',
          padding: '10px 20px',
          fontSize: '1rem',
          borderRadius: '15px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default Why;
