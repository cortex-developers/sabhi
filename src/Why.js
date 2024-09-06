import React, { useState } from 'react';
import { Box, Tabs, Tab, useMediaQuery, useTheme, Typography } from '@mui/material';
//import { useNavigate } from 'react-router';
import pc from './pc.png'
import ps from './ps.png'

import pcmobile from './pcmobile.png'
import psmobile from './psmobile.png'


const mobileImages = [
  pcmobile,
  psmobile,
];

const desktopImages = [
  pc,
  ps,
];

const Why = () => {
  //const navigate = useNavigate(); // Initialize the hook
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Detect mobile screens
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Get the appropriate image list based on the screen size
  const images = isMobile ? mobileImages : desktopImages;

  return (
    <Box sx={{ width: '100%', padding: '20px', textAlign: 'center' }}>
            <Typography variant="h4" sx={{ marginBottom: '4rem', fontWeight: 'bold', color: '#333', fontFamily: 'Notable, sans-serif' }}>
        Why Cortex?
      </Typography>
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="responsive tabs with images"
        centered
      >
        <Tab label="Cortex Curriculum" />
        <Tab label="Cortex Performance Science" />
      </Tabs>

      {/* Display the selected image */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={2} // Margin-top for some spacing
      >
        <img
          src={images[value]} // Show the corresponding image based on the selected tab
          alt={`Tab ${value + 1}`}
          style={{
            width: isMobile ? '100%' : '50%', // Adjust image size based on screen size
          }}
        />
      </Box>
    </Box>

      {/* Button 
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/mentors')}
        sx={{
          marginTop: '2rem',
          padding: '10px 20px',
          fontSize: '1rem',
          borderRadius: '15px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        }}
      >
        View Mentors
      </Button>
      */}
    </Box>
  );
};

export default Why;
