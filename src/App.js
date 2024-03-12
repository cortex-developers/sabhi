import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { useMediaQuery, createTheme, ThemeProvider, AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Link, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { LinkedIn, Instagram, Email } from '@mui/icons-material'; // Import icons
import Logo from './sabhi-logo.svg';
import LogoNoText from './sabhi-logo-no-text.svg';
import LogoText from './sabhi-text.svg';
import BioGallery from './BioGallery';
import Contact from './Contact';
import UnderConstructionPage from './UnderConstructionPage';
import BlogPosts from './BlogPosts';
import './App.css'
//import OurStory from './OurStory';
import ResourcesPage from './ResourcesPage'
import DonationForm from './DonationForm';
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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const drawer = (
    <ThemeProvider theme={theme}>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <List>
          <ListItem button component={RouterLink} to="/blog" >
            <ListItemText primary="Cortex Learn" primaryTypographyProps={{ fontWeight: 'bold' }}/>
          </ListItem>
          <ListItem button component={RouterLink} to="/bios">
            <ListItemText primary="Meet Our Team" />
          </ListItem>
          <ListItem button component={RouterLink} to="/story">
            <ListItemText primary="Our Story" />
          </ListItem>
          <ListItem button component={RouterLink} to="/resources">
            <ListItemText primary="Resources" />
          </ListItem>
          <ListItem button component={RouterLink} to="/contact">
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button component={RouterLink} to="/give">
            <ListItemText primary="Give" />
          </ListItem>
          {/* Repeat for other links */}
        </List>
      </Box>
    </ThemeProvider>
  );
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh"> {/* Adjusted for flex layout */}
          {/* Enhanced Navigation Bar */}
          <AppBar position="static">
            <Toolbar style={{ justifyContent: 'center' }}> {/* Center the Toolbar items */}
              {/* Logo Items Box, adjust margin to slightly move it to the right */}
              <Box display="flex" alignItems="center" style={{ marginRight: '20px' }}> {/* Adjust marginRight to control spacing */}
                <img src={LogoNoText} alt="SABHI Logo" style={{ height: '25px', marginRight: '10px' }} />
                <Typography variant="h6" component="div" >
                  <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img src={LogoText} alt="SABHI Logo" style={{ height: '15px' }} />
                  </RouterLink>
                </Typography>
              </Box>
              {/* Navbar Items Box */}
              {isMobile ? (
                <>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                    anchor="right"
                    open={mobileMenuOpen}
                    onClose={handleDrawerToggle}
                    sx={{
                      '& .MuiDrawer-paper': {
                        backgroundColor: '#000', // Sets the Drawer's background color to black
                        color: '#fff', // Sets the text color inside the Drawer to white
                      },
                    }}
                  >
                    {drawer}
                  </Drawer>
                </>
              ) : (
                <>
                  <Box display="flex" style={{ marginLeft: '20px' }}> {/* Adjust marginLeft to control spacing */}
                    <Button color="inherit" component={RouterLink} to="/blog" sx={{
                      fontWeight: 'bold', // Increases font weight                //animation: 'undulateColor 2s infinite',
                      // You can adjust the colors and duration as needed
                    }}>
                      Cortex Learn
                    </Button>
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
                    <Button color="inherit" component={RouterLink} to="/give">
                      Give
                    </Button>
                  </Box>
                </>
              )}

            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={
              <div>
                <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
                  <img src={Logo} alt="SABHI Logo" style={{ height: '200px', marginTop: '20px' }} />
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
                    <Typography variant="h6" component="p" sx={{ fontStyle: 'italic', fontSize: '1.25rem', maxWidth: '85%' }}>
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
                    <Typography variant="h6" component="p" sx={{ fontStyle: 'italic', fontSize: '0.75rem', maxWidth: '85%' }}>
                      "Our vision is to create a world where athletics and clinical science exist not as separate entities but as a symbiotically-linked cooperative partnership. We aim to create a powerful network of intermediaries who serve to educate and inspire coaches and athletes as well as to act as advocates before scientific and medical professionals in articulating the range of difficulties that athletes experience. We envision a future where athletes worldwide have full access to the range of evidence-based practices, and where scientists have an elevated understanding of how to help the athlete population. This will culminate in better health and performance outcomes inside and outside of athletics."
                    </Typography>
                  </Box>
                </Box>
                {/* Connect with Us Section */}
                <Box component="section" sx={{ bgcolor: 'background.paper', color: 'text.primary', py: 3, textAlign: 'center' }}>
                  <Typography variant="h6" gutterBottom>
                    Connect with Us
                  </Typography>
                  <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Link href="https://www.linkedin.com/company/cortex-flex-athlete-alliance/about/" target="_blank" color="inherit">
                      <IconButton>
                        <LinkedIn fontSize="large" />
                      </IconButton>
                    </Link>
                    <Link href="https://www.instagram.com/cortexflex" target="_blank" color="inherit">
                      <IconButton>
                        <Instagram fontSize="large" />
                      </IconButton>
                    </Link>
                    <Link href="mailto:team@cortexflex.org" color="inherit">
                      <IconButton>
                        <Email fontSize="large" />
                      </IconButton>
                    </Link>
                  </Box>
                </Box>
              </div>
            } />
            <Route path="/bios" element={<BioGallery />} />
            <Route path="/story" element={<UnderConstructionPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogPosts />} />
            <Route path="/give" element={<DonationForm />} />

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
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
