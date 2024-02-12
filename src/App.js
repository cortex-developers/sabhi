import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Import from '@mui/material/styles' for Material-UI v5
import { AppBar, Toolbar, Typography, Button, Container, Grid, TextField, Box } from '@mui/material';

import Logo from './sabhi-logo.svg'; // Replace 'sabhi-logo.png' with the actual path to your logo image

// Importing Kosugi Maru font
import '@fontsource/kosugi-maru';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Black color
    },
    background: {
      default: '#ffffff', // White background
    },
  },
  typography: {
    fontFamily: 'Kosugi Maru, sans-serif', // Set Kosugi Maru as the default font
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img src={Logo} alt="SABHI Logo" style={{ height: '200px' }} />
        <Typography variant="h4" gutterBottom>
          SABHI - Student Athlete Brain Health Initiative
        </Typography>
        <Typography variant="body1" gutterBottom>
          SABHI is dedicated to promoting the brain health of student athletes through education, research, and support programs.
        </Typography>
        <Container maxWidth="sm" style={{ marginTop: '16px' }}>
          <Box textAlign="center">
            <form style={{ display: 'inline-flex', alignItems: 'center' }} noValidate autoComplete="off">
              <TextField id="outlined-basic" label="Email" variant="outlined" size="small" sx={{ marginRight: 1 }} />
              <Button variant="contained" color="primary" size="medium">
                Subscribe
              </Button>
            </form>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
