import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { useMediaQuery, createTheme, ThemeProvider, AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemText} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Pricing from './Pricing'
import thecortex from "./thecortex.mp4";
import thecortexmobile from "./thecortexmobile.mp4";
import LogoNoText from './Group 82.png';
import BioGallery from './BioGallery';
import BlogPosts from './BlogPosts';
import './App.css'
import Disclaimer from './Disclaimer'


import ReactGA4 from 'react-ga4';
import MyComponent from './Test';


const useGA4PageTracking = () => {
  useEffect(() => {
    ReactGA4.initialize('G-HXLKWG3PW7');
    // Track the initial page load
    ReactGA4.send({ hitType: 'pageview', page_path: window.location.pathname + window.location.search });
  }, []);

  useEffect(() => {
    const trackPage = () => {
      ReactGA4.send({ hitType: 'pageview', page_path: window.location.pathname + window.location.search });
    };

    // Listen for changes in the route
    window.addEventListener('popstate', trackPage);
    window.addEventListener('pushState', trackPage);
    window.addEventListener('replaceState', trackPage);

    return () => {
      window.removeEventListener('popstate', trackPage);
      window.removeEventListener('pushState', trackPage);
      window.removeEventListener('replaceState', trackPage);
    };
  }, []);
};

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
  flex: 1
});

/* 
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
 */
function App() {
  useEffect(() => {
    // Function to remove specific query parameters
    const cleanUpUrl = () => {
      const url = new URL(window.location.href);
      const params = url.searchParams;

      // List of parameter names to remove
      const removeParams = ['utm_source', 'utm_medium', 'utm_campaign', 'mc_cid', 'mc_eid'];

      // Remove unwanted parameters
      removeParams.forEach(param => params.delete(param));

      // Build the new URL without the unwanted parameters
      const newUrl = `${url.origin}${url.pathname}${params.toString() ? `?${params}` : ''}${url.hash}`;

      // Replace the URL in the history without reloading the page
      window.history.replaceState({}, '', newUrl);
    };

    cleanUpUrl();
  }, []);
  useGA4PageTracking();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const drawer = (
    <ThemeProvider theme={theme}>
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        <ListItem button component={RouterLink} to="/blog">
          <Button color="inherit" style={{ height: '25px', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>
            <Typography component="span" style={{ color: '#6589C6', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>CORTEX</Typography>
            <Typography component="span" style={{ color: '#E75225', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>LEARN</Typography>
          </Button>
        </ListItem>
        <ListItem button component={RouterLink} to="/mentors">
          <Button color="inherit" style={{ height: '25px', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>
            <Typography component="span" style={{ color: '#6589C6', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>CORTEX</Typography>
            <Typography component="span" style={{ color: '#E75225', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>MENTORS</Typography>
          </Button>
        </ListItem>
        <ListItem button component={RouterLink} to="/portal">
          <Button color="inherit" style={{ height: '25px', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>
            PARENT PORTAL
          </Button>
        </ListItem>
      </List>
    </Box>
  </ThemeProvider>
  );
  return (
    <div>
      <style>
      {`@import url('https://fonts.googleapis.com/css2?family=Notable&display=swap');`}
      </style>
    <ThemeProvider theme={theme}>
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh"> {/* Adjusted for flex layout */}
          {/* Enhanced Navigation Bar */}
          <AppBar position="static">
            <Toolbar style={{ justifyContent: 'center' }}> {/* Center the Toolbar items */}
              {/* Logo Items Box, adjust margin to slightly move it to the right */}
              <Box display="flex" alignItems="center" style={{ marginRight: '10px' }}> {/* Adjust marginRight to control spacing */}
                <Typography variant="h6" component="div" >
                  <RouterLink to="/">
                  <img src={LogoNoText} alt="SABHI Logo" style={{ height: '25px', marginTop: '10px'}} />
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
                    <Button color="inherit" component={RouterLink} to="/blog"                           style={{ height: '25px', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}
                    >
                        <Typography component="span" style={{ color: '#6589C6', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>CORTEX</Typography>
                        <Typography component="span" style={{ color: '#E75225', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>LEARN</Typography>
                    </Button>

                    <Button color="inherit" component={RouterLink} to="/mentors" style={{ height: '25px', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>
                        <Typography component="span" style={{ color: '#6589C6', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>CORTEX</Typography>
                        <Typography component="span" style={{ color: '#E75225', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>MENTORS</Typography>
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/portal"   style={{ height: '25px', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}                    >
                      PARENT PORTAL
                    </Button>
                  </Box>
                </>
              )}

            </Toolbar>
          </AppBar>

          <div>
          <Routes>
            <Route path="/" element=
{isMobile ? (
  <Box sx={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: -1,
        }}
      >
        <source src={thecortexmobile} type="video/mp4" />
        {/* Add more <source> tags for different video formats */}
        Your browser does not support the video tag.
      </video>
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <a href="https://cortexflex.org/info" style={{ textDecoration: 'none', width: '100%' }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
            }}
          >
            GET STARTED NOW!
          </Button>
        </a>
      </Box>
      <Pricing></Pricing>
  </Box>
) : 
( 
<div>
  <Box sx={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
  <video
    autoPlay
    loop
    muted
    playsInline
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: 'translate(-50%, -50%)',
      zIndex: -1,
    }}
  >
    <source src={thecortex} type="video/mp4" />
    {/* Add more <source> tags for different video formats */}
    Your browser does not support the video tag.
  </video>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      textAlign: 'center',
      zIndex: 1,
    }}
  >
    <a href="https://cortexflex.org/info" style={{ textDecoration: 'none' }}>
      <Button variant="contained" color="primary">
      GET STARTED NOW!
      </Button>
    </a>
  </Box>
  
</Box> 
<Pricing></Pricing>

</div>
)

}       
          
            />
            <Route path="/research" element={<BioGallery />} />
            <Route path="/blog" element={<BlogPosts />} />
            <Route path="/portal" element={    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="https://cortexflex.copilot.app"
        title="Parent Portal"
        style={{ width: '100%', height: '100%', border: 'none' }}
        allowFullScreen
      ></iframe>
    </div>} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/info" element={<MyComponent/>} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>

        </div>
          {/* Footer */}
          <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 3, mt: 'auto' }}>
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body1">
                © {new Date().getFullYear()} CORTEX FLEX INC.
              </Typography>
              <Typography variant="body2">
                SPORTS X SCIENCE
              </Typography>
              <a href='/disclaimer' style={{ color: 'inherit', textDecoration: 'underline' }}>Disclaimer</a>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
