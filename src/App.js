import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Typography,
  Button,
  Container,
  Box,
  Avatar,
  Grid,
} from '@mui/material';
import Logo from './sabhi-logo.svg';
import '@fontsource/kosugi-maru';

// Import Avatar images
import Avatar1 from './avatar1.jpg'; // Replace with actual paths to your images
//import Avatar2 from './avatar2.jpg';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#007bff', // Adjust this to match your theme's secondary color
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Kosugi Maru, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
        <img src={Logo} alt="SABHI Logo" style={{ height: '200px', marginTop: '20px' }} />
        <Typography variant="h4" gutterBottom>
          CORTEX FLEX - ATHLETE WELLNESS ASSOCIATION
        </Typography>
        <Typography variant="body1" gutterBottom>
          CORTEX FLEX is dedicated to promoting the brain health of student athletes through education, research, and support programs.
        </Typography>

        {/* Join Us Button */}
        <Button variant="contained" color="primary" size="large" href="https://forms.gle/H1oHFAffVSKHwqdQA">
          Join Us
        </Button>

        {/* Centered Stylized Mission Statement */}
        <Box sx={{
          width: '100%', // Ensures the Box takes full width
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginTop: '40px',
          marginBottom: '40px',
        }}>
          <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            Our Mission
          </Typography>
          <Typography variant="h6" component="p" sx={{ fontStyle: 'italic', fontSize: '1.25rem', maxWidth: '60%' }}>
          "Our mission is to empower student athletes with the knowledge and understanding of the profound impact sports can have on both their physical and mental well-being. Through psychoeducation and engaging in-person presentations, we aim to raise awareness of the complexities surrounding brain health in athletics. By fostering a culture of informed decision-making and proactive care, we strive to equip student athletes with the tools and resources they need to prioritize their brain health, both on and off the field."
          </Typography>
        </Box>

        {/* Bio Section with Larger Avatars and Side Bios */}
        <Container maxWidth="lg" style={{ marginTop: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Meet Our Team
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center">
                <Avatar alt="Name 1" src={Avatar1} sx={{ width: 180, height: 180, marginRight: 2 }} />
                <Box>
                  <Typography variant="h6">Nate Roy</Typography>
                  <Typography variant="body1">Cornell Football Alum, Neuro Researcher.</Typography>
                </Box>
              </Box>
            </Grid>
            {/* 
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center">
                <Avatar alt="Name 2" src={Avatar2} sx={{ width: 180, height: 180, marginRight: 2 }} />
                <Box>
                  <Typography variant="h6">Name 2</Typography>
                  <Typography variant="body1">Position 2 - A short bio highlighting experience or role within the team.</Typography>
                </Box>
              </Box>
            </Grid>
Add more items here for additional team members */}
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
