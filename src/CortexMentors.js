import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Grid, Typography, Box } from '@mui/material';
import myamentor from './myamentor.jpg'
import sophiamentor from './sophiamentor.jpg'
import natementor from './natementor.jpg'
import ashlynmentor from './ashlynmentor.jpg'

const CortexMentors = () => {
  const mentors = [
    {
        name: 'Nate Roy',
        background: 'McGill Football Player & MD/PhD Student',
        team: 'Mental Health/Performance',
        bio: 'McGill Football Player & MD/PhD Student',
        image: natementor, // Replace with actual image URL
        teamColor: '#4682B4', // Customizable team text color (steel blue)
        shadowColor: 'rgba(70, 130, 180, 0.3)' // Customizable shadow color (steel blue with transparency)
      },
    {
      name: 'Mya Murray',
      background: 'D1 Basketball Player & MPH Student',
      team: 'Research Team',
      bio: 'John has over 10 years of experience in brain research...',
      image: myamentor, // Replace with actual image URL
      teamColor: '#FF6347', // Customizable team text color (tomato)
      shadowColor: 'rgba(255, 99, 71, 0.3)' // Customizable shadow color (tomato with transparency)
    },
    {
      name: 'Ashlyn Kane',
      background: 'D1 Soccer Player & Graduate Student',
      team: 'College/Career Prep',
      bio: 'Jane specializes in machine learning applications in healthcare...',
      image: ashlynmentor, // Replace with actual image URL
      teamColor: '#4682B4', // Customizable team text color (steel blue)
      shadowColor: 'rgba(70, 130, 180, 0.3)' // Customizable shadow color (steel blue with transparency)
    },
    {
        name: 'Sophia Simenz',
        background: 'Engineer',
        team: 'Development Team',
        bio: 'Alice focuses on building scalable solutions...',
        image: sophiamentor, // Replace with actual image URL
        teamColor: '#32CD32', // Customizable team text color (lime green)
        shadowColor: 'rgba(50, 205, 50, 0.3)' // Customizable shadow color (lime green with transparency)
      }
    // Add more mentors here as needed
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
<Box sx={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <Grid container spacing={4}>
        {mentors.map((mentor, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box
              sx={{
                boxShadow: `0 4px 10px ${mentor.shadowColor}`,
                borderRadius: '10px',
                overflow: 'hidden',
                padding: '10px',
              }}
            >
              <Slider {...settings}>
                <div>
                  <Box
                    sx={{
                      width: '100%',
                      paddingBottom: '161.8%', // This creates the golden ratio 1:1.618 aspect ratio
                      position: 'relative',
                      borderRadius: '10px',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                      }}
                    />
                  </Box>
                </div>
              </Slider>
              <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{mentor.name}</Typography>
                <Typography variant="subtitle1" sx={{ color: 'gray' }}>{mentor.background}</Typography>
                <Typography variant="body1" sx={{ color: mentor.teamColor }}>{mentor.team}</Typography>
                <Typography variant="body2" sx={{ marginTop: '10px' }}>{mentor.bio}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CortexMentors;
