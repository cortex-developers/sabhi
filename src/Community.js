import React from 'react';
import {Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Parallax } from 'react-parallax';
import infosession from './infosesh.jpeg'
import infosessionmobile from './infoseshmobile.jpg'

import communitymeeting from './communitymeeting.jpg'
import downloadapp from './downloadapp.png'
import downloadappmobile from './cortexchatmobile.png'

import bridge from './cortexonboarding.jpg'
import clinic from './clinic.jpg'
import partners from './partners.png'
import partnersmobile from './partnersmobile.png'
import week1 from './week1.png'
import week1mobile from './week1mobile.png'

const ParallaxSection = ({ mobileImageUrl, desktopImageUrl, text }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const imageUrl = isMobile ? mobileImageUrl : desktopImageUrl;

  return (
    <Parallax
      bgImage={imageUrl}
      strength={500}
      style={{
        height: '100vh',
      }}
    >
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 10%',
        }}
      >
        <Typography
          component="div"
          sx={{
            backgroundColor: 'black',
            padding: '10px 20px',
            borderRadius: '5px',
            color: 'white',
            maxWidth: '80%',
            width: 'fit-content',
            fontSize: {
              xs: '1rem', // Smaller font size for mobile devices
              sm: '1rem', // Medium font size for tablets
              md: '1rem', // Larger font size for desktops
            },
          }}
        >
          {text}
        </Typography>
      </Box>
    </Parallax>
  );
};


const App = (props) => {
  return (
    <div>
            <ParallaxSection mobileImageUrl = {bridge} desktopImageUrl={bridge} text={"Learn from the Best: Engage with a diverse network of professionals — from NCAA Division 1 athletes to medical doctors and PhDs. Our team is here to share their invaluable insights and experiences, helping you excel in sports, academics, and life."}/>
            <ParallaxSection mobileImageUrl = {communitymeeting} desktopImageUrl={communitymeeting} text={"Connect and Grow: Participate in weekly interactive Zoom calls featuring prominent speakers from various fields, including sports, medicine, and leadership. Engage daily with D1/Pro athletes and doctors through the Cortex Learn blog posts, which are part of our comprehensive curriculum."}/>
            <ParallaxSection mobileImageUrl = {week1mobile} desktopImageUrl={week1} text={"Access Exclusive Resources: Take advantage of our tailored workshops, cutting-edge research, and educational tools dedicated to athlete health. Stay ahead of the game by utilizing the latest scientific findings and health management techniques."}/>
            <ParallaxSection mobileImageUrl = {infosessionmobile} desktopImageUrl={infosession} text={"Make a Difference: By joining Cortex Flex, not only do you enhance your personal brand and visibility, but you also contribute to a larger cause. Help us spread crucial health awareness and positively impact your community and peers."}/>
            <ParallaxSection mobileImageUrl = {clinic} desktopImageUrl={clinic} text={"Enjoy Unique Opportunities: Look forward to in-person events like summer camps and special seminars that are just around the corner. Plus, as part of our commitment to accessibility, all these benefits come at no cost to you — thanks to our generous donors."}/>
            <ParallaxSection mobileImageUrl = {partnersmobile} desktopImageUrl={partners} text={"What We Offer: Science-based performance training, academic/SAT tutoring, college recruitment/admissions coaching, weekly Zoom calls with leaders in sports, medicine, and business, NIL sponsorships through partner brands, and incentive packages with products from our partners."}/>
            <ParallaxSection mobileImageUrl = {downloadappmobile} desktopImageUrl={downloadapp} text={"Get started today by downloading the app!"}/>

{/*       <CssBaseline />
      <GlobalStyle />
      <ContainerStyled>
        <Section>
          <Fade in timeout={2000} sx = {{paddingBottom: "50px"}}>
            <Typography variant="h2">Why join Cortex Community?</Typography>
          </Fade>
          <VideoContainer >
          <Iframe 
            src="https://www.youtube.com/embed/k_L-mPBtVfU?si=uTzb0W6GWnoh5X5E"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></Iframe>
        </VideoContainer>
          <Benefit index={0}>
            <strong>Learn from the Best:</strong> Engage with a diverse network of professionals — from NCAA Division 1 athletes to medical doctors and PhDs. Our team is here to share their invaluable insights and experiences, helping you excel in sports, academics, and life.
          </Benefit>
          <Benefit index={1}>
            <strong>Connect and Grow:</strong> Participate in weekly interactive Zoom calls featuring prominent speakers from various fields, including sports, medicine, and leadership. Engage daily with D1/Pro athletes and doctors through the Cortex Learn blog posts, which are part of our comprehensive curriculum.
          </Benefit>
          <Benefit index={2}>
            <strong>Access Exclusive Resources:</strong> Take advantage of our tailored workshops, cutting-edge research, and educational tools dedicated to athlete health. Stay ahead of the game by utilizing the latest scientific findings and health management techniques.
          </Benefit>
          <Benefit index={3}>
            <strong>Make a Difference:</strong> By joining Cortex Flex, not only do you enhance your personal brand and visibility, but you also contribute to a larger cause. Help us spread crucial health awareness and positively impact your community and peers.
          </Benefit>
          <Benefit index={4}>
            <strong>Enjoy Unique Opportunities:</strong> Look forward to in-person events like summer camps and special seminars that are just around the corner. Plus, as part of our commitment to accessibility, all these benefits come at no cost to you — thanks to our generous donors.
          </Benefit>
          <Benefit index={5}>
            <strong>What We Offer:</strong> Science-based performance training, academic/SAT tutoring, college recruitment/admissions coaching, weekly Zoom calls with leaders in sports, medicine, and business, NIL sponsorships through partner brands, and incentive packages with products from our partners.
          </Benefit>
        </Section>
        <Section>
          <TypeformEmbed />
        </Section>
      </ContainerStyled> */}
      </div>
  );
};

export default App;
