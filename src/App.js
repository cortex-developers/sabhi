import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { createTheme, ThemeProvider, AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import Logo from './sabhi-logo.svg';
import LogoNoText from './sabhi-logo-no-text.svg';
import LogoText from './sabhi-text.svg';
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
              <img src={LogoNoText} alt="SABHI Logo" style={{ height: '45px', marginRight: '20px' }} />
              <Typography variant="h6" component="div" >
                <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <img src={LogoText} alt="SABHI Logo" style={{ height: '30px', marginRight: '20px' }} />
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
              <img src={Logo} alt="SABHI Logo" style={{ height: '400px', marginTop: '20px' }} />
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
                  Our Vision
                </Typography>
                <Typography variant="h6" component="p" sx={{ fontStyle: 'italic', fontSize: '1.25rem', maxWidth: '60%' }}>
                  "Our vision is to create a world where athletics and clinical science exist not as separate entities but as a symbiotically-linked cooperative partnership. We aim to create a powerful network of intermediaries who serve to educate and inspire coaches and athletes as well as to act as advocates before scientific and medical professionals in articulating the range of difficulties that athletes experience. We envision a future where athletes worldwide have full access to the range of evidence-based practices, and where scientists have an elevated understanding of how to help the athlete population. This will culminate in better health and performance outcomes inside and outside of athletics."
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
