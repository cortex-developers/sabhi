/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { useMediaQuery, createTheme, ThemeProvider, AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Pricing from './Pricing'
import sports from './sports.jpg'
import AboutUs from './AboutUs';
import Features from './Features';
import Steps from './Steps'
import Why from './Why'
import train from './train5.mp4';
//import ella from './reel covers_20240903_202826_0000.png'
import LogoNoText from './Group 82.png';
import CortexMentors from './CortexMentors'
import BlogPosts from './BlogPosts';
import './App.css'
import Disclaimer from './Disclaimer'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArticlePage from './ArticlePage';

import ReactGA4 from 'react-ga4';


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
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 10000, // Time (in ms) between each slide
  pauseOnHover: true, 
  fade: true, // This makes the transition fade
}


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
    fontFamily: 'Montserrat, sans-serif',
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
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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
            <Typography component="span" style={{ color: '#6589C6', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>Elite</Typography>
            <Typography component="span" style={{ color: '#E75225', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>Coaches</Typography>
          </Button>
        </ListItem>
        <ListItem button component={RouterLink} to="/portal">
          <Button color="inherit" style={{ height: '25px', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>
            PARENT PORTAL
          </Button>
        </ListItem>
        <ListItem button component={RouterLink} to="/about">
          <Button color="inherit" style={{ height: '25px', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>
            ABOUT US
          </Button>
        </ListItem>
        <ListItem button component={RouterLink} to="/signup">
                    <Button color="inherit" component={RouterLink} to="/signup"   style={{ height: '25px', fontSize: '12.5px', fontFamily: 'Notable, sans-serif', 
                     }}                    >
                      SIGN UP
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
        <Box display="flex" flexDirection="column" minHeight="100vh" > {/* Adjusted for flex layout */}
          {/* Enhanced Navigation Bar */}
          <AppBar position="static" sx={{zIndex: 1}}>
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
                        <Typography component="span" style={{ color: '#6589C6', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>Elite</Typography>
                        <Typography component="span" style={{ color: '#E75225', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>Performance</Typography>
                        <Typography component="span" style={{ color: '#6589C6', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>Science</Typography>

                    </Button>

                    <Button color="inherit" component={RouterLink} to="/mentors" style={{ height: '25px', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>
                        <Typography component="span" style={{ color: '#6589C6', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>Elite</Typography>
                        <Typography component="span" style={{ color: '#E75225', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}>Coaches</Typography>
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/portal"   style={{ height: '25px', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}                    >
                      PARENT PORTAL
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/about"   style={{ height: '25px', fontSize: '12.5px', fontFamily: 'Notable, sans-serif' }}                    >
                      ABOUT US
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/signup"   style={{ height: '25px', fontSize: '12.5px', fontFamily: 'Notable, sans-serif', 
                     }}                    >
                      SIGN UP
                    </Button>
                  </Box>
                </>
              )}

            </Toolbar>
          </AppBar>

          <div>
          <Routes>
            <Route path="/" element=

 // Import your custom styles
 <div>
 {isMobile ? (
  // Mobile Version
  <Box
    sx={{
      height: '100vh', // Full viewport height for mobile
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center', // Center content vertically
      padding: '3px',
      backgroundColor: '#ffffff',
      textAlign: 'center',
      '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${sports})`,
      backgroundRepeat: 'repeat',
      backgroundSize: 'cover',
      filter: 'grayscale(30%) opacity(0.2)',
      zIndex: 0,
      pointerEvents: 'none',
    }
    }}
  >
    {/* Mobile-specific content */}
    <Typography variant="h4" sx={{ marginBottom: '0.9rem', fontSize: '1.5rem', fontFamily: 'Notable, sans-serif' }}>
      theCORTEX: ELITE PERFORMANCE FACTORY
    </Typography>
    <Typography variant="body1" sx={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
      A comprehensive mentorship and educational platform for your student-athlete:
    </Typography>

    <List sx={{ padding: '0 5px' }}>
      <ListItem>
        <Typography variant="body1" sx={{ fontSize: '0.75rem' }}>
          1. Optimize <span style={{ backgroundColor: 'yellow' }}>athletic</span> performance with personalized guidance from top-tier performance scientists.
        </Typography>
      </ListItem>
      <ListItem>
        <Typography variant="body1" sx={{ fontSize: '0.75rem' }}>
          2. Improve <span style={{ backgroundColor: 'yellow' }}>academic</span> performance with the help of elite tutors and coaches, tailored to your needs.
        </Typography>
      </ListItem>
      <ListItem>
        <Typography variant="body1" sx={{ fontSize: '0.75rem' }}>
          3. Develop an elite <span style={{ backgroundColor: 'yellow' }}>mindset</span> with the help of athletes who were champions in their sports.
        </Typography>
      </ListItem>
      <ListItem>
         <Typography variant="body1" sx={{ fontSize: '0.75rem' }}>
           4. Evidence-based <span style={{ backgroundColor: 'yellow' }}>nutritional</span> advice from athletic professionals and professional athletes.
         </Typography>
       </ListItem>

       <ListItem>
         <Typography variant="body1" sx={{ fontSize: '0.75rem' }}>
           5. Learn the secrets behind a successful <span style={{ backgroundColor: 'yellow' }}>college recruitment</span> process with insider tips and strategies.
         </Typography>
       </ListItem>

       <ListItem>
         <Typography variant="body1" sx={{ fontSize: '0.75rem' }}>
           6. All backed by a <span style={{ backgroundColor: 'yellow' }}>custom curriculum</span> built by doctors and athletic professionals, ensuring a holistic approach.
         </Typography>
       </ListItem>
    </List>

    {/* Mobile-specific buttons */}
    <Box sx={{ marginTop: '2rem' }}>
      <Button
        variant="contained"
        onClick={() => document.getElementById('steps-section').scrollIntoView()}
        sx={{
          margin: '0 5px',
          padding: '10px 15px',
          fontSize: '0.9rem',
          backgroundColor: '#E75225',
          color: 'white',
          borderRadius: '10px',
          '&:hover': { backgroundColor: '#d6451c' },
        }}
      >
        Get Started
      </Button>
      <Button
        variant="contained"
        onClick={() => document.getElementById('pricing-section').scrollIntoView()}
        sx={{
          margin: '0 5px',
          padding: '10px 15px',
          fontSize: '0.9rem',
          backgroundColor: '#6589C6',
          color: 'white',
          borderRadius: '10px',
          '&:hover': { backgroundColor: '#5B7FBC' },
        }}
      >
        Pricing
      </Button>
    </Box>
  </Box>
) : (
  // Desktop/Tablet Version
<Box
 sx={{
   fontFamily: 'Notable, sans-serif',
   minHeight: '90vh', // Ensure the box takes up at least 90% of the viewport height
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   textAlign: 'center',
   position: 'relative',
   padding: { xs: '10px', md: '20px' }, // Reduce padding for smaller screens
   overflow: 'hidden',
   backgroundColor: '#ffffff',
   backgroundSize: 'cover',
   '&::before': {
     content: '""',
     position: 'absolute',
     top: 0,
     left: 0,
     width: '100%',
     height: '100%',
     backgroundImage: `url(${sports})`,
     backgroundRepeat: 'repeat',
     backgroundSize: 'cover',
     filter: 'grayscale(30%) opacity(0.2)',
     zIndex: 0,
     pointerEvents: 'none',
   },
   '@media (max-width: 320px)': { // For smaller screens like iPhone SE
     padding: '10px',
     minHeight: '100vh', // Ensure it fully fits the viewport
     '& h3': {
       fontSize: '1.5rem', // Adjust typography size for smaller screens
     },
     '& h6': {
       fontSize: '1rem',
     },
     '& .MuiListItem-root': {
       fontSize: '0.9rem', // Adjust font size in list items
     },
   },
 }}
>
 <Box
   sx={{
     display: 'flex',
     flexDirection: { xs: 'column', md: 'row' }, // Stacks on mobile, row on desktop
     alignItems: 'center',
     justifyContent: 'center',
     width: isMobile? '80%':'100%',
     maxWidth: '1200px',
     marginBottom: '2rem',
   }}
 >
   {/* Text Section */}
   <Box sx={{ flexBasis: '50%', padding: '10px', textAlign: { xs: 'center', md: 'left' } }}>
     <Typography variant="h3" sx={{ marginBottom: '1rem', fontFamily: 'Notable, sans-serif', opacity: 1 }}>
       theCORTEX: ELITE PERFORMANCE FACTORY
     </Typography>
     <Typography variant="h6" gutterBottom>
       A comprehensive mentorship and educational platform for your student-athlete:
     </Typography>

     <List>
       <ListItem>
         <Typography variant="body1">
           1. Optimize <span style={{ backgroundColor: 'yellow' }}>athletic </span>performance with personalized guidance from top-tier performance scientists.
         </Typography>
       </ListItem>

       <ListItem>
         <Typography variant="body1">
           2. Improve <span style={{ backgroundColor: 'yellow' }}>academic</span> performance with the help of elite tutors and coaches, tailored to your needs.
         </Typography>
       </ListItem>

       <ListItem>
         <Typography variant="body1">
           3. Develop an elite <span style={{ backgroundColor: 'yellow' }}>mindset</span> with the help of athletes who were champions in their sports.
         </Typography>
       </ListItem>

       <ListItem>
         <Typography variant="body1">
           4. Evidence-based <span style={{ backgroundColor: 'yellow' }}>nutritional</span> advice from athletic professionals and professional athletes.
         </Typography>
       </ListItem>

       <ListItem>
         <Typography variant="body1">
           5. Learn the secrets behind a successful <span style={{ backgroundColor: 'yellow' }}>college recruitment</span> process with insider tips and strategies.
         </Typography>
       </ListItem>

       <ListItem>
         <Typography variant="body1">
           6. All backed by a <span style={{ backgroundColor: 'yellow' }}>custom curriculum</span> built by doctors and athletic professionals, ensuring a holistic approach.
         </Typography>
       </ListItem>
     </List>
   </Box>

   {/* Slideshow Section - Excluded on mobile */}
   {!isMobile && (
     <Box
       sx={{
         flexBasis: '50%',
         padding: '20px',
         position: 'relative',
         overflow: 'hidden',
       }}
     >
       <Slider {...settings}>
         <div>
           <video
             src={train}
             alt="Slide 1"
             autoPlay
             muted
             playsInline
             style={{
               width: '70%',
               filter: 'brightness(1)',
               opacity: '1',
               borderRadius: '15px', // Rounded corners
               boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
               position: 'relative',
               zIndex: 1,
             }}
           />
         </div>
       </Slider>
     </Box>
   )}
 </Box>

 {/* Call to Action Buttons */}
 <Box sx={{ marginTop: '2rem' }}>
   <Button
     variant="contained"
     onClick={() => document.getElementById('steps-section').scrollIntoView()}
     sx={{
       margin: '0 10px',
       padding: '10px 20px',
       fontSize: '1rem',
       backgroundColor: '#E75225',
       color: 'white',
       borderRadius: '15px',
       '&:hover': { backgroundColor: '#d6451c' },
     }}
   >
     Get Started
   </Button>
   <Button
     variant="contained"
     onClick={() => document.getElementById('pricing-section').scrollIntoView()}
     sx={{
       margin: '0 10px',
       padding: '10px 20px',
       fontSize: '1rem',
       backgroundColor: '#6589C6',
       color: 'white',
       borderRadius: '15px',
       '&:hover': { backgroundColor: '#5B7FBC' },
     }}
   >
     Pricing
   </Button>
 </Box>
</Box>
)}


<div id="steps-section">
        <Steps />
      </div>
      <Features></Features>

<Why></Why>
<div id="pricing-section">
        <Pricing />
      </div>
      </div> 
            />
            <Route path="/mentors" element={<CortexMentors/>} />
            <Route path="/blog" element={<BlogPosts/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/article/:id/:slug" element={<ArticlePage />} /> {/* Route with id and slug */}
            <Route path="/portal" element={    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="https://cortex.copilot.app"
        title="Parent Portal"
        style={{ width: '100%', height: '100%', border: 'none' }}
        allowFullScreen
      ></iframe>
    </div>} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route 
  path="/signup" 
  element={
    <div style={{ height: '100vh', overflow: 'hidden' }}>
    <iframe 
      className="airtable-embed" 
      title='airtable'
      src="https://airtable.com/embed/apphPc3F6NvvkOBNg/shr4NtUH9P6YyP4bW" 
      onMouseWheel="" 
      style={{ width: '100%', height: '100%', border: 'none' }}
    />
    </div>
  } 
/>
          </Routes>

        </div>
          {/* Footer */}
          <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 3, mt: 'auto' }}>
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body1">
                © {new Date().getFullYear()} CORTEX FLEX INC.
              </Typography>
              <Typography variant="body2">
                ELITE PERFORMANCE SCIENCE
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
