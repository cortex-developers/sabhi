import React, { useState } from 'react';
import {
  Box, TextField, Button, Radio, RadioGroup, FormControlLabel,
  FormControl, FormLabel, Typography, Dialog, DialogActions,
  DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import { db } from './firebaseConfig'; // Ensure this path matches your file structure
import { collection, addDoc } from 'firebase/firestore';

const DonationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [open, setOpen] = useState(false); // State for controlling the Dialog

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const finalAmount = amount === 'other' ? parseInt(customAmount, 10) : parseInt(amount, 10);

    try {
      await addDoc(collection(db, 'donations'), {
        name,
        email,
        amount: finalAmount
      });
      // Open the dialog on successful submission
      setOpen(true);
      // Reset form fields
      setName('');
      setEmail('');
      setAmount('50');
      setCustomAmount('');
    } catch (error) {
      console.error('Error submitting donation:', error);
      alert(`Error submitting donation: ${error.message}`);
    }
  };

  return (
    <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Typography variant="h4" gutterBottom>
        Pledge
      </Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 300 }}>
        <TextField label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} required />
        <TextField label="Email" style={{ marginTop: '5px'}} variant="outlined" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <FormControl component="fieldset">
          <FormLabel component="legend">Pledge Amount</FormLabel>
          <RadioGroup
            row
            aria-label="donation amount"
            name="donation-amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          >
            <FormControlLabel value="25" control={<Radio />} label="$25" />
            <FormControlLabel value="50" control={<Radio />} label="$50" />
            <FormControlLabel value="100" control={<Radio />} label="$100" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            {amount === 'other' && (
              <TextField
                label="Custom Amount"
                type="number"
                variant="outlined"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                required={amount === 'other'}
                InputProps={{ inputProps: { min: 1 } }}
              />
            )}
          </RadioGroup>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Donate
        </Button>
      </form>

      {/* Dialog for confirmation */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Thank You!"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your pledge has been recorded. Thank you for your pledge!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DonationForm;
