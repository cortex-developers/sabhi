import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import clf from './clf.png'
import cpfb from './cpfb.png'
import ucsf from './ucsf.png'
import ppn from './ppn.png'
import lmnt from './lmnt.png'
import cse from './cse.png'
import sssd from './sssd.png'
import d1fuel from './d1fuel.png'
import coco from './coco.png'
import orgain from './orgain.jpg'
import barebells from './barebells.png'
// Sample data for partner logos
const partners = [
  { name: 'Concussion Legacy Foundation', logo: clf },
  { name: 'Community Partnership Funding Board', logo: cpfb },
  { name: 'UCSF Sports Medicine Center', logo: ucsf },
  { name: 'Potential Power Nutrition', logo: ppn },
  { name: 'LMNT', logo: lmnt },
  { name: 'Clean Simple Eats', logo: cse },
  { name: 'South Side High School', logo: sssd },
  { name: 'D1 Fuel', logo: d1fuel },
  { name: 'Barebells', logo: barebells },
  { name: 'Computational Connectomics Lab', logo: coco },
  { name: 'Orgain', logo: orgain },

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
                maxHeight: '70%',
                width: 'auto',
                height: 'auto',
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
