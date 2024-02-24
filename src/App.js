import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { createTheme, ThemeProvider, AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import Logo from './sabhi-logo.svg';
import BioGallery from './BioGallery';
import Contact from './Contact';
import UnderConstructionPage from './UnderConstructionPage';
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
              <Typography variant="h6" component="div" >
                <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  CORTEX FLEX
                </RouterLink>
              </Typography>
            </Box>
            <Box>
              <Button color="inherit" component={RouterLink} to="/bios">
                Meet Our Team
              </Button>
              <Button color="inherit" component={RouterLink} to="/story">
                Our Story
              </Button>
              <Button color="inherit" component={RouterLink} to="/resources">
                Resources
              </Button>
              <Button color="inherit" component={RouterLink} to="/contact">
                Contact
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
                  "Our mission is to translate complex scientific knowledge into comprehensible messages to which athletic communities will be receptive; and thus broadly creating better outcomes for athletes on gameday, in the classroom, and in life thereafter."
                </Typography>
              </Box>
            </Box>
          } />
          <Route path="/bios" element={<BioGallery />} />
          <Route path="/story" element={<UnderConstructionPage />} />
          <Route path="/resources" element={<UnderConstructionPage />} />
          <Route path="/contact" element={<Contact />} />
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
