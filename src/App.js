import React from 'react';
import { ThemeProvider, createTheme, Box, Typography, useMediaQuery } from '@mui/material';
import LogoNoText from './Group 82.png'; // Ensure the path to the logo is correct

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#007bff',
    },
    background: {
      default: '#000000',
    },
  },
  typography: {
    fontFamily: 'Kosugi Maru, sans-serif',
  },
});

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile devices

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: theme.palette.background.default,
          textAlign: 'center',
          padding: '20px', // Add padding for better mobile view
        }}
      >
        <img
          src={LogoNoText}
          alt="Logo"
          style={{
            height: isMobile ? '50px' : '200px', // Adjust logo size for mobile
            marginBottom: '20px',
          }}
        />
        
        <Typography
          variant={isMobile ? 'h5' : 'h4'} // Adjust font size for mobile
          component="h1"
          color="primary"
        >
          Site Under Construction
        </Typography>
        <Typography
          variant="body1"
          color="primary"
          sx={{ marginTop: '10px', maxWidth: '80%' }} // Responsive text width
        >
          We are working hard to bring you something amazing. Please check back soon!
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
