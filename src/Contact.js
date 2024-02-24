import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

function ContactPage() {
  return (
    <Container maxWidth="md" style={{ marginTop: '40px', marginBottom: '300px' }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        We'd love to hear from you! Please fill out the form below and we will get in touch with you shortly.
      </Typography>
      {<form noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email Address"
              fullWidth
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="message"
              name="message"
              label="Message"
              fullWidth
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" disabled>
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>}
    </Container>
  );
}

export default ContactPage;
