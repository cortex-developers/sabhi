import React from 'react';
import { Box, Card, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material';
//import pc from './pc.png';
import pc2 from './pc2.png'
import ps from './ps.png';
import pcmobile from './pcmobile.png';
import psmobile from './psmobile.png';

const mobileImages = [psmobile, pcmobile];
const desktopImages = [ps, pc2];

const Why = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Detect mobile screens

  // Get the appropriate image list based on the screen size
  const images = isMobile ? mobileImages : desktopImages;

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: '4rem',
          fontWeight: 'bold',
          color: '#333',
          fontFamily: 'Notable, sans-serif',
          textAlign: 'center',
        }}
      >
        Why Cortex?
      </Typography>

      {images.map((image, index) => (
        <Card
          key={index}
          sx={{
            width: isMobile ? '100%' : '80%', // Cards take up 80% of the width on desktop, 100% on mobile
            aspectRatio: isMobile ? '1 / 1' : '2 / 1', // 1:1 aspect ratio for mobile, 2:1 for desktop
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '24px', // More rounded corners
            boxShadow: 'none', // Remove shadow
            background: index === 0 
            ? 'linear-gradient(135deg, rgba(101, 137, 198, 0.95), rgba(51, 87, 158, 0.9))'  // Darker, consistent gradient for first card
            : 'linear-gradient(135deg, rgba(231, 82, 37, 0.95), rgba(181, 52, 17, 0.9))', // Matte finish gradient for second card
            backgroundBlendMode: 'multiply', // Add a matte effect to the gradient
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt={`Image ${index + 1}`}
            sx={{
              width: '100%',
              height: '100%', // Ensure the image takes up the full card space
              objectFit: 'contain', // Prevent cropping of images
              borderRadius: 'inherit', // Ensure image corners match card corners
            }}
          />
        </Card>
      ))}
    </Box>
  );
};

export default Why;
