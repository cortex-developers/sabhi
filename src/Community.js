import React, { useEffect } from 'react';
import {Box, CssBaseline, Toolbar, Typography, Container, Grid, Fade } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#007bff',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Kosugi Maru, sans-serif',
  },
});

const GlobalStyle = styled.div`
  body {
    margin: 0;
    font-family: 'Kosugi Maru', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const ContainerStyled = styled(Container)`
  text-align: center;
  margin-top: 16px;
`;


const Section = styled(Box)`
  margin-top: 32px;
  padding: 20px;
`;

const VideoContainer = styled(Box)`
  position: relative;
  padding-bottom: 56.25%; // 16:9 aspect ratio
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
  margin-bottom: 32px;
  animation: fadeIn 2s;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const BenefitSection = styled(Grid)`
  font-size: 1.5rem;
  animation: ${props => (props.index % 2 === 0 ? slideInLeft : slideInRight)} 1.5s forwards;
`;


const TypeformEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="10vh" p={3}>
      <div data-tf-live="01HSTQWY1ZZF4RE19DWXGQY3HG"></div>
    </Box>
  );
};

const Benefit = ({ children, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <BenefitSection container spacing={4} sx={{ marginTop: 2, opacity: inView ? 1 : 0 }} ref={ref} index={index}>
      <Grid item xs={12}>
        <Typography variant="body1" style={{ fontSize: '1.5rem' }}>
          {children}
        </Typography>
      </Grid>
    </BenefitSection>
  );
};

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Toolbar />
      <ContainerStyled>
        <VideoContainer>
          <Iframe
            src="https://www.youtube.com/embed/k_L-mPBtVfU?si=uTzb0W6GWnoh5X5E"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></Iframe>
        </VideoContainer>

        <Section>
          <Fade in timeout={2000}>
            <Typography variant="h2">Why join Cortex Community?</Typography>
          </Fade>
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
      </ContainerStyled>
    </ThemeProvider>
  );
};

export default App;
