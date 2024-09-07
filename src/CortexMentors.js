import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Grid, Typography, Box } from '@mui/material';
import myamentor from './myamentor.jpg'
import sophiamentor from './sophiamentor.jpg'
import natementor from './natementor.jpeg'
import ashlynmentor from './ashlynmentor.jpg'
import ellamentor from './ellamentor.jpg'
import tylermentor from './tylermentor.png'
import sophiementor from './sophiementor.jpg'
import rachelmentor from './rachelmentor.jpg'
import joementor from './joementor.jpeg'
import jesusmentor from './jesusmentor.png'
import brookementor from './brookementor.jpg'
const CortexMentors = () => {
  const mentors = [
    {
        name: 'Nate Roy',
        background: 'McGill Football Player & MD/PhD Student',
        team: 'Mental Health/Performance',
        bio: 'Nate is passionate about helping athletes reach their fullest potential. His research and mission with the organization is to improve student-athlete outcomes in game and in the classroom. As one of the few PhD student-athletes in the world, he knows what it takes to reach the height of multiple domains.',
        image: natementor, // Replace with actual image URL
        teamColor: 'rgba(237, 27, 47)', // Customizable team text color (steel blue)
        shadowColor: 'rgba(237, 27, 47, 0.3)' // Customizable shadow color (steel blue with transparency)
      },
      {
        name: 'Tyler Thiele, DPT',
        background: 'Doctor of Physical Therapy',
        team: 'Physical Health/Performance',
        bio: `Tyler's mission in Cortex Flex is to reduce injuries and optimize physical health through the getting basics right and creating a solid foundation for your student-athlete.`,
        image: tylermentor, // Replace with actual image URL
        teamColor: 'rgba(1, 49, 89)', // Customizable team text color (steel blue)
        shadowColor: 'rgba(1, 49, 89, 0.3)' // Customizable shadow color (steel blue with transparency)
      },
      {
        name: 'Ashlyn Kane',
        background: 'D1 Soccer Player & Graduate Student',
        team: 'College/Career Prep',
        bio: 'Ashlyn aims to help student athletes suceed outside of their sport and learn to use their platform whether that be in business, college, or beyond',
        image: ashlynmentor, // Replace with actual image URL
        teamColor: 'rgba(102, 0, 0)', // Customizable team text color (steel blue)
        shadowColor: 'rgba(102, 0, 0, 0.3)' // Customizable shadow color (steel blue with transparency)
      },
    {
      name: 'Mya Murray',
      background: 'D1 Basketball Player & MPH Student',
      team: 'College/Career Prep',
      bio: 'An Ivy League grad, Mya knows what it takes to be academically succesfully while being a dedicated athlete. She aims to help student-athletes find a balance in pursuing their multi-dimensional lives.',
      image: myamentor, // Replace with actual image URL
      teamColor: 'rgba(20, 35, 75)', // Customizable team text color (steel blue)
      shadowColor: 'rgba(20, 35, 75, 0.3)' // Customizable shadow color (steel blue with transparency)
    },
    {
        name: 'Sophie Calabrese',
        background: 'National-level Rower',
        team: 'Mental Health/Performance',
        bio: 'As a national-level rower, Sophie knows what it takes to perform on the biggest stages and aims to share some tips and tricks to help your student athlete get there.',
        image: sophiementor, // Replace with actual image URL
        teamColor: 'rgba(191, 87, 0)', // Customizable team text color (steel blue)
        shadowColor: 'rgba(191, 87, 0, 0.3)' // Customizable shadow color (steel blue with transparency)
      },
      {
        name: 'Rachel Zun',
        background: 'Former D1 Gymnast',
        team: 'College/Career Prep',
        bio: 'Balancing pre-med studies with a busy gymnastics schedule, Rachel knows about the pressure student athletes face and aims to help students navigate the pressure.',
        image: rachelmentor, // Replace with actual image URL
        teamColor: 'rgba(166, 25, 46)', // Customizable team text color (steel blue)
        shadowColor: 'rgba(166, 25, 46, 0.3)' // Customizable shadow color (steel blue with transparency)
      },
      {
        name: 'Joe Curtis',
        background: 'D1 Wrestler',
        team: 'Physical Health/Performance',
        bio: 'As a D1 Wrestler, Joe has gone through grueling strength and conditioning workouts and has learned the secrets to physical performance.',
        image: joementor, // Replace with actual image URL
        teamColor: 'rgba(155,221,255)', // Customizable team text color (lime green)
        shadowColor: 'rgba(155,221,255, 0.3)' // Customizable shadow color (lime green with transparency)
      },
    {
        name: 'Ella Stroehmann',
        background: 'D1 Volleyball Player & Pre-med Student',
        team: 'Nutrition & Supplementation',
        bio: 'As a pre-med student-athlete, Ella knows the importance of taking care of your health - to that end, she aims to share how she fuels her performances inside and outside the classroom with thCORTEX Community',
        image: ellamentor, // Replace with actual image URL
        teamColor: 'rgba(0, 61, 165)', // Customizable team text color (lime green)
        shadowColor: 'rgba(0, 61, 165, 0.3)' // Customizable shadow color (lime green with transparency)
      },

    {
        name: 'Sophia Simenz',
        background: 'D1 Rower & Neuroscience Student',
        team: 'Mental Health/Performance ',
        bio: 'As an Ivy League neuroscience student-athlete, Sophia embodies the phrase student-athlete and aims to share the mental routines and habits she built to create elite outcomes.',
        image: sophiamentor, // Replace with actual image URL
        teamColor: 'rgba(155,221,255)', // Customizable team text color (lime green)
        shadowColor: 'rgba(155,221,255, 0.3)' // Customizable shadow color (lime green with transparency)
      },
      {
        name: 'Jesus Salazar',
        background: 'Professional Soccer Player',
        team: 'Physical Health/Performance',
        bio: 'As a professional athlete, Jesus has suceeded where many others have failed and has learned a few tips and tricks along the way that can give your student athlete an edge.',
        image: jesusmentor, // Replace with actual image URL
        teamColor: 'rgba(30,22,86)', // Customizable team text color (lime green)
        shadowColor: 'rgba(30,22,86, 0.3)' // Customizable shadow color (lime green with transparency)
      },
      {
        name: 'Brooke Miller',
        background: 'D1 Soccer Player',
        team: 'Nutrition & Supplementation',
        bio: 'Brooke takes a holistic approach to nutrition and aims to help student-athletes build a healthy relationship with food.',
        image: brookementor, // Replace with actual image URL
        teamColor: 'rgba(30,22,86)', // Customizable team text color (lime green)
        shadowColor: 'rgba(30,22,86, 0.3)' // Customizable shadow color (lime green with transparency)
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
                <Typography variant="subtitle1" sx={{ color: mentor.teamColor }}>{mentor.background}</Typography>
                <Typography variant="body1" sx={{ color: 'gray' }}>{mentor.team}</Typography>
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
