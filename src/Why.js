import React from 'react';
import { Box, Card, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material';
import pc2 from './pc2.png';
import ps from './ps.png';
const desktopImages = [ps, pc2];

const Why = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Detect mobile screens

  // Text to display on mobile in place of images
  const mobileTexts = [
    "Elite performance researchers unlocking your athlete's path to their fullest potential.",
    "Elite athlete mentors guiding your athlete's utilization of Cortex performance science."
  ];

  return (
    <Box
      sx={{
        width: '100vw',
        height: '170vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: '1rem',
          fontWeight: 'bold',
          color: 'black',
          fontFamily: 'Notable, sans-serif',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Why Cortex?
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          width: isMobile ? '70%' : '90%',
          marginBottom: '2rem',
          color: 'gray',
          fontFamily: 'Monteserrat, sans-serif',
          fontSize: isMobile ? '0.9rem' :'1.7rem',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
Our doctors and scientists provide elite performance guidance that replaces the misinformation of social media. Our athlete mentors motivate learning and application uniquely as they utilize their high understanding of the student-athlete experience.      </Typography>

      {/* Map through either images for desktop or text for mobile */}
      {(isMobile ? mobileTexts : desktopImages).map((content, index) => (
        <>
        <Card
          key={index}
          sx={{
            width: isMobile ? '70%' : '90%', // Cards take up 80% of the width on desktop, 100% on mobile
            aspectRatio: isMobile ? '1 / 1' : '2 / 1', // 1:1 aspect ratio for mobile, 2:1 for desktop
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '24px', // More rounded corners
            boxShadow: 'none', // Remove shadow
            background: index === 0
              ? 'linear-gradient(135deg, rgba(101, 137, 198, 0.95), rgba(51, 87, 158, 0.9))'  // Darker gradient for first card
              : 'linear-gradient(135deg, rgba(231, 82, 37, 0.95), rgba(181, 52, 17, 0.9))', // Matte finish gradient for second card
            backgroundBlendMode: 'multiply', // Add a matte effect to the gradient
            padding: isMobile ? '20px' : '0', // Padding for text on mobile
          }}
        >
          {isMobile ? (
            <Typography
              variant="h6"
              sx={{ color: 'white', textAlign: 'center',fontFamily: 'Notable, sans-serif',
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
              }}
            >
              {content}
            </Typography>
            
          ) : (
            <CardMedia
              component="img"
              image={content}
              alt={`Image ${index + 1}`}
              sx={{
                width: '100%',
                height: '100%', // Ensure the image takes up the full card space
                objectFit: 'contain', // Prevent cropping of images
                borderRadius: 'inherit', // Ensure image corners match card corners
              }}
            />
          )}
        </Card>
        
        </>
      ))}
    </Box>
  );
};

export default Why;
