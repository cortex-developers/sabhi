import {React, useState} from 'react';
import { Container, Typography, TextField, Button, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { db } from './firebaseConfig'; // Import the Firebase configuration
import { collection, addDoc } from 'firebase/firestore';

function ContactPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleClose = () => {
      setOpen(false);
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      try {
          await addDoc(collection(db, 'contacts'), {
              firstName,
              lastName,
              email,
              message
          });
          setOpen(true);
          setFirstName('');
          setLastName('');
          setEmail('');
          setMessage('');
      } catch (error) {
          console.error('Error submitting donation:', error);
          alert(`Error submitting donation: ${error.message}`);
      }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '40px', marginBottom: '300px' }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        We'd love to hear from you! Please fill out the form below and we will get in touch with you shortly.
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
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
              onChange={(e) => setFirstName(e.target.value)}
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
              onChange={(e) => setLastName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
      <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{"Thank You!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Your message has been received. Thank you for you for reaching out!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
      
    </Container>
  );
}

export default ContactPage;
