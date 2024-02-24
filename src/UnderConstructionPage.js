import React from 'react';
import { Container, Typography, CircularProgress } from '@mui/material';

function UnderConstructionPage() {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '100px', marginBottom: '560px'}}>
      <CircularProgress style={{ marginBottom: '20px' }} />
      <Typography variant="h4" gutterBottom>
        Page Under Construction
      </Typography>
      <Typography variant="body1">
        We're working hard to finish the development of this page. Check back soon!
      </Typography>
    </Container>
  );
}

export default UnderConstructionPage;
