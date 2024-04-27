import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { useMediaQuery, createTheme, ThemeProvider, AppBar, Card, Toolbar, Typography, Button, Box, Container, IconButton, Link, Drawer, List, ListItem, ListItemText, Grid } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { LinkedIn, Instagram, Email } from '@mui/icons-material'; // Import icons
//import Logo from './sabhi-logo.svg';

import Slideshow from './Slideshow';
import Community from './Community';
//import Article from './Article';
import LogoNoText from './sabhi-logo-no-text.svg';
import LogoText from './sabhi-text.svg';
import BioGallery from './BioGallery';
import Contact from './Contact';
//import UnderConstructionPage from './UnderConstructionPage';
import CortexLearn from './learn.jpg';
import CortexCommunity from './cortexcomm.png';
import Partners from './Partners'
import BlogPosts from './BlogPosts';
import './App.css'
import athlete from './athlete.jpg'
import athletef from './athletef.jpg'
import scientist from './scientist.jpg'
import scientistf from './scientistf.jpg'
import creatives from './creatives.jpg'
import creativesf from './creativesf.jpg'
import doctor from './doctor.jpg'
import doctorf from './doctorf.jpg'
import business from './business.jpg'
import businessf from './businessf.jpg'
import nateathlete from './nateathleteshot.JPEG'
import katyathlete from './katyathleteshot.jpg'
import katyathletedesktop from './katyathleteshotdesktop.jpg'

//import brendanathlete from './brendanathleteshot.jpg'
import oliviathlete from './oliviaathleteshot.png'
import oliviathletemobile from './oliviaathleteshotmobile.jpeg'
import jesusathlete from './jesusaction.jpeg'
import brookeathlete from './brookeathlete.jpg'
import joeathlete from './joeathlete.jpg'
import joeathletemobile from './joeathletemobile.jpg'

import sophiaathlete from './sophiaathlete.jpg'
import mayaathlete from './mayaathlete.jpg'


import natekathlete from './natekathlete.jpg'
import onomeathlete from './onomeathlete.jpg'
import addisonathlete from './addisonathlete.jpg'
//import OurStory from './OurStory';
import ResourcesPage from './ResourcesPage'
import DonationForm from './DonationForm';
import ApplicationForm from './ApplicationForm'
import Disclaimer from './Disclaimer'
import MailChimpForm from './MailChimpForm';

import graphic1 from './graphic1.png'
import graphic2 from './graphic2.png'
import graphic3 from './graphic3.png'
import { styled } from '@mui/material/styles';

const shots=[
  nateathlete, 
  katyathlete, 
  oliviathletemobile, 
  jesusathlete, 
  mayaathlete, 
  brookeathlete, 
  joeathletemobile, 
  sophiaathlete,
  natekathlete,
  onomeathlete,
  addisonathlete
  ]
  const shots2=[
    nateathlete, 
    katyathletedesktop, 
    oliviathlete, 
    jesusathlete, 
    mayaathlete, 
    brookeathlete, 
    joeathlete, 
    sophiaathlete,
    natekathlete,
    onomeathlete,
    addisonathlete
    ]
const texts = [
"In my route to Division 1 football, I went through many difficult experiences physically and mentally which I now see as completely avoidable if the proper intervention had been present. In the last few years, learning to apply my neuroscience background to training and daily life has prompted enhanced happiness, health, and success athletically, academically, and otherwise. I want to help others find the same.",
"As a Division 1 student-athlete who has experienced many injuries, I have seen firsthand the lack of translation between science and athletics. Cortex Flex gives me a platform and an opportunity to bridge the ever-growing gap between science and athletics, bringing in evidence-based practices that would have helped me throughout my college career.",
"Having competed at the NCAA Division I Level for 6 years, and playing competitively for over 10 years before that, my basketball journey consisted of many highs and lows on the court and off. By joining Cortex Flex and bridging the gap between athletes and medical research/science, I hope to promote holistically happy and healthy sports careers for all athletes to come.",
"The journey to becoming a Division 1 / Professional athlete is one full of many challenges, over half of them being mental, leading to there being many times throughout the past years I allowed my success as an athlete define what I felt I was worthy of as a human being. My specific role in Cortex Flex will give me a platform to teach young athletes about the ability to care for themselves and create a healthier mindset.",
`Drawing from my experience as a Division I tennis player and navigating numerous injuries, I’ve come to understand the immense value of a solid support system, but it was during my medical school journey that I recognized the gap between the medical knowledge a physician has and the practical understanding from the patient’s point of view. As I pursue training during residency in the Physical Medicine and Rehabilitation field, I am dedicated to fostering growth within the Cortex Flex community to help create a space where young athletes can access the insights and guidance they need to fill their potential both on and off the court.`,
`As a current Division I soccer player and Integrative Health and Wellness major, I’ve gained a unique perspective to the intersection of sports and holistic well-being. My passion for both soccer and health has driven me to explore ways to optimize performance and promote overall wellness for young athletes and athletes in general. I am deeply interested in joining forces with Cortex Flex to highlight the significance of health in sports and beyond. Through our collaboration, my goal is to grow my experiences and education to advocate for comprehensive health initiatives within the athletic community.`,
`As a wrestler at the D1 level, I’ve been through times where I’ve had to “tough it out” whether mentally or physically countless times because that’s what you’re taught to do.  I’ve learned that while mental and physical toughness are imperative to excel, it’s more important to back your trainings by science to improve results and protect your long-term safety.  I’m excited to assist Cortex Flex in being that bridge between Science and Athletics!`,
`Living as both a Division 1 athlete and a student of sport science showed me the possibilities that merging these two disciplines can have. My training and well-being benefited immensely from the first-hand knowledge I gained from my degree in exercise science. I want to bring this experience to others through Cortex Flex because I believe it has the power to change lives.`,
`As a Division 1 athlete I have gone through my shares of injuries and recognize the lack of continuity between medical research and athletes. I believe in Cortex Flex having the ability to make an impact and bridge the gap between the two sides, and I hope to be able to help athletes handle their injuries better both mentally and physically.`,
`As a former Division 1 athlete I went through a pretty tough injury my senior year. No one talks about all the hard work you put in and how it can all end on one play or one lift. Cortex Flex now gives you a platform to talk to other athletes about what you’re going through mentally and physically. I wish I had a group like this when I was going through what I was going through.`,
`My athletic experience leading up to and in college exposed me to issues that no one should have to face. Now, I want to share practical knowledge that could have made a world of difference for me – and countless other student-athletes. By bridging the gap between science, athletics, and academics, we can prevent a lot of pain and frustration. While I can't rewind the clock, I'm passionate about empowering future athletes to thrive.`
] 

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

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const images = [
    graphic1,
    graphic2,
    graphic3,
    // Add more image paths as needed
  ];
  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const drawer = (
    <ThemeProvider theme={theme}>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <List>
          <ListItem button component={RouterLink} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={RouterLink} to="/blog" >
            <img src={CortexLearn} alt="SABHI Logo" style={{ height: '10px', marginRight: '10px' }} />
          </ListItem>
          <ListItem button component={RouterLink} to="/community" >
            <img src={CortexCommunity} alt="SABHI Logo" style={{ height: '10px', marginRight: '10px' }} />
          </ListItem>
          <ListItem button component={RouterLink} to="/bios">
            <ListItemText primary="Meet Our Team" />
          </ListItem>
          <ListItem button component={RouterLink} to="/join">
            <ListItemText primary="Join Our Team!" />
          </ListItem>
          <ListItem button component={RouterLink} to="/story">
            <ListItemText primary="Our Story" />
          </ListItem>
          <ListItem button component={RouterLink} to="/resources">
            <ListItemText primary="Resources" />
          </ListItem>
          <ListItem button component={RouterLink} to="/partners">
            <ListItemText primary="Our Partners" />
          </ListItem>
          {/*           <ListItem button component={RouterLink} to="/contact">
            <ListItemText primary="Contact" />
          </ListItem> */}
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
                    <Button color="inherit" component={RouterLink} to="/">
                      Home
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/blog" sx={{
                      fontWeight: 'bold', // Increases font weight                //animation: 'undulateColor 2s infinite',
                      // You can adjust the colors and duration as needed
                    }}>
                      <img src={CortexLearn} alt="SABHI Logo" style={{ height: '10px', marginRight: '10px' }} />

                    </Button>
                    <Button color="inherit" component={RouterLink} to="/community" sx={{
                      fontWeight: 'bold', // Increases font weight                //animation: 'undulateColor 2s infinite',
                      // You can adjust the colors and duration as needed
                    }}>
                      <img src={CortexCommunity} alt="SABHI Logo" style={{ height: '10px', marginRight: '10px' }} />

                    </Button>
                    <Button color="inherit" component={RouterLink} to="/bios">
                      Meet Our Team
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/join">
                      Join Our Team!
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/story">
                      Our Story
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/resources">
                      Resources
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/partners">
                      Our Partners
                    </Button>
                    {/*                     <Button color="inherit" component={RouterLink} to="/contact">
                      Contact
                    </Button> */}
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
                <Slideshow fontSize='2rem' images={[athlete, scientistf, doctor, creativesf, business, athletef, scientist, doctorf, creatives, businessf]} texts={["  ATHLETES.", " SCIENTISTS.", " DOCTORS.", " CREATIVES.", " BUSINESSPEOPLE.", "  ATHLETES.", " SCIENTISTS.", " DOCTORS.", " CREATIVES.", " BUSINESSPEOPLE."]} showArrows={false}></Slideshow>
                <Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
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
                    <Grid container spacing={2}>
                      {images.map((image, index) => (
                        <Grid item xs={12} sm={12} md={12} key={index}>
                          <Img alt={`Image ${index + 1}`} src={image} />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                  <Card
                    sx={{
                      width: '50%', // Sets the width of the Card to 50% of the screen
                      marginTop: '50px',
                      color: 'white',
                      fontWeight: 'bold',
                      marginBottom: '20px',
                      backgroundColor: 'black',
                      padding: '10px',
                    }}
                  >
                    <Typography
                      variant="h4"
                      component="p"
                    >
                      Our Mission
                    </Typography>
                    <Typography
                      variant="h6"
                      component="p"
                    >
                      "Our mission is to translate complex scientific knowledge into comprehensible messages to which athletic communities will be receptive and thus to broadly create better outcomes for athletes on gameday, in the classroom, and in life thereafter."
                    </Typography>
                  </Card>

                  <Card
                    sx={{
                      width: '50%', // Ensures that this Card also has a width of 50% of the screen
                      marginTop: '50px',
                      color: 'white',
                      fontWeight: 'bold',
                      marginBottom: '20px',
                      backgroundColor: 'black',
                      padding: '10px',
                    }}
                  >
                    <Typography
                      variant="h4"
                      component="p"
                      sx={{
                        fontWeight: 'bold',
                        marginBottom: '20px'
                      }}
                    >
                      Our Vision
                    </Typography>
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{
                        fontStyle: 'italic',
                        fontSize: '0.75rem',
                        maxWidth: '85%'
                      }}
                    >
                      "Our vision is to create a world where athletics and clinical science exist not as separate entities but as a symbiotically-linked cooperative partnership. We aim to create a powerful network of intermediaries who serve to educate and inspire coaches and athletes as well as to act as advocates before scientific and medical professionals in articulating the range of difficulties that athletes experience. We envision a future where athletes worldwide have full access to the range of evidence-based practices, and where scientists have an elevated understanding of how to help the athlete population. This will culminate in better health and performance outcomes inside and outside of athletics."
                    </Typography>

                  </Card>

                  <MailChimpForm/>
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
            <Route path="/story" element={
              isMobile ?
                (<Slideshow slideDuration={15000} textColor='white' textSize='0.5rem' images= {shots} texts={texts} enableTypingEffect={false}></Slideshow>) : (<Slideshow slideDuration={15000} textColor='white' textSize='1rem' images={shots2} texts={texts} enableTypingEffect={false}></Slideshow>)


            } />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogPosts />} />
            <Route path="/give" element={<DonationForm />} />
            <Route path="/join" element={<ApplicationForm />} />
            <Route path="/community" element={<Community />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
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
              <a href='/disclaimer' style={{ color: 'inherit', textDecoration: 'underline' }}>Disclaimer</a>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
