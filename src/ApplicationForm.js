import React from 'react';
import { Typography, Link, Container, Box} from '@mui/material';
const ApplicationForm = () => {

    return (
        <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: '100vh',
          }}
        >
          <Typography variant="h6" gutterBottom>
            If you are interested in joining our team, please email{' '}
            <Link href="mailto:team@cortexflex.org" color="primary">
              team@cortexflex.org
            </Link>{' '}
            with your CV.
          </Typography>
        </Box>
      </Container>
    );
};

export default ApplicationForm;