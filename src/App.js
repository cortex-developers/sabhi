import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { createTheme, ThemeProvider, AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import Logo from './sabhi-logo.svg';
import BiosPage from './BiosPage';

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
      <Router>
        {/* Enhanced Navigation Bar */}
        <AppBar position="static">
          <Toolbar style={{ justifyContent: 'space-between' }}>
            <Box display="flex" alignItems="center">
              <img src={Logo} alt="SABHI Logo" style={{ height: '50px', marginRight: '20px' }} />
              <Typography variant="h6" component="div">
                CORTEX FLEX
              </Typography>
            </Box>
            <Box>
              <Button color="inherit" component={RouterLink} to="/" sx={{ marginRight: '20px' }}>
                Home
              </Button>
              <Button color="inherit" component={RouterLink} to="/bios">
                Meet Our Team
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={
            <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
              <img src={Logo} alt="SABHI Logo" style={{ height: '200px', marginTop: '20px' }} />
              <Typography variant="h4" gutterBottom>
                CORTEX FLEX - ATHLETE ALLIANCE
              </Typography>
              <Typography variant="body1" gutterBottom>
                CORTEX FLEX is dedicated to promoting the brain health of student athletes through education, research, and support programs.
              </Typography>
              <Button variant="contained" color="primary" size="large" href="https://forms.gle/H1oHFAffVSKHwqdQA">
                Join Us
              </Button>
              <Box sx={{
                width: '100%',
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
            </Box>
          } />
          <Route path="/bios" element={<BiosPage />} />
        </Routes>
        {/* Footer */}
        <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 3, mt: 'auto' }}>
          <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body1">
              © {new Date().getFullYear()} CORTEX FLEX ATHLETE ALLIANCE
            </Typography>
            <Typography variant="body2">
              Empowering student athletes for a healthier tomorrow.
            </Typography>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
