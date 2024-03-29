import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import clf from './clf.png'
// Sample data for partner logos
const partners = [
  { name: 'Concussion Legacy Foundation', logo: clf },

  // Add more partners as needed
];

const Partners = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Our Partners
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {partners.map((partner, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box
              component="img"
              sx={{
                height: 100,
                width: 'auto',
                maxWidth: '100%',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              src={partner.logo}
              alt={partner.name}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Partners;
