import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import donate from './donate.png'
/* import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore'; */

const DonationForm = () => {
    /*     const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [donationAmount, setDonationAmount] = useState('');
        const [donationType, setDonationType] = useState('oneTime');
        const [open, setOpen] = useState(false);
    
        const handleClose = () => {
            setOpen(false);
        };
    
        const handleSubmit = async (event) => {
            event.preventDefault();
            const finalAmount = parseInt(donationAmount, 10);
    
            try {
                await addDoc(collection(db, 'donations'), {
                    name,
                    email,
                    amount: finalAmount,
                    type: donationType, 
                });
                setOpen(true);
                setName('');
                setEmail('');
                setDonationAmount('');
            } catch (error) {
                console.error('Error submitting donation:', error);
                alert(`Error submitting donation: ${error.message}`);
            }
        }; */

    return (
        /*   <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
  
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 300 }}>
                  <TextField label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} required />
                  <TextField label="Email" variant="outlined" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <TextField 
                      label="Amount" 
                      variant="outlined" 
                      type="number" 
                      value={donationAmount} 
                      onChange={(e) => setDonationAmount(e.target.value)} 
                      required 
                      InputProps={{ inputProps: { min: 1 } }}
                      style={{ marginTop: '5px' }}
                  />
                  <FormControl component="fieldset" style={{ marginTop: '10px' }}>
                      <FormLabel component="legend">Donation Type</FormLabel>
                      <RadioGroup
                          row
                          aria-label="donation type"
                          name="donation-type"
                          value={donationType}
                          onChange={(e) => setDonationType(e.target.value)}
                      >
                          <FormControlLabel value="oneTime" control={<Radio />} label="One-Time" />
                          <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
                      </RadioGroup>
                  </FormControl>
                  <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
                      Pledge
                  </Button>
              </form>
  
              <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>{"Thank You!"}</DialogTitle>
                  <DialogContent>
                      <DialogContentText>
                          Your pledge has been recorded. Thank you for your support!
                      </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                      <Button onClick={handleClose}>Close</Button>
                  </DialogActions>
              </Dialog>
          </Box> */
        <>
            <Card variant="outlined" sx={{ marginBottom: '20px', border: 0, boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
                <Box sx={{ paddingTop: '20px' }}>
                <CardMedia
                    component="img"
                    height="100"
                    image= {donate}   // Update this path to where your image is stored
                    alt="Cortex Flex Donation Form"
                    sx={{objectFit: "contain" }}

                />
                </Box>
                <CardContent>
                    <Box mt={2} sx={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '4px' }}>
                        <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
                            Did You Know?
                        </Typography>
                        <Typography variant="body1" align="center">
                            Cortex Flex is recognized as a 501(c)(3) nonprofit. Your donations are 100% tax deductible.
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
            <Box style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '1200px' }}>
                <iframe
                    title='Donation form powered by Zeffy'
                    style={{ position: 'absolute', border: '0', top: '0', left: '0', bottom: '0', right: '0', width: '100%', height: '100%' }}
                    src='https://www.zeffy.com/en-US/embed/donation-form/78fca37f-e625-4f14-b2e4-f1d5ba036da1'
                    allow="payment"
                ></iframe>
            </Box>
        </>
    );
};

export default DonationForm;
