import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Typography,
  Button,
  Container,
  Box,
  Avatar,
  Grid,
} from '@mui/material';
import Logo from './sabhi-logo.svg';
import '@fontsource/kosugi-maru';

// Import Avatar images
import Avatar1 from './avatar1.jpg'; // Replace with actual paths to your images
import Avatar2 from './avatar2.jpg';
import Avatar3 from './avatar3.jpg';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#007bff', // Adjust this to match your theme's secondary color
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Kosugi Maru, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
        <img src={Logo} alt="SABHI Logo" style={{ height: '200px', marginTop: '20px' }} />
        <Typography variant="h4" gutterBottom>
          CORTEX FLEX - ATHLETE ALLIANCE
        </Typography>
        <Typography variant="body1" gutterBottom>
          CORTEX FLEX is dedicated to promoting the brain health of student athletes through education, research, and support programs.
        </Typography>

        {/* Join Us Button */}
        <Button variant="contained" color="primary" size="large" href="https://forms.gle/H1oHFAffVSKHwqdQA">
          Join Us
        </Button>

        {/* Centered Stylized Mission Statement */}
        <Box sx={{
          width: '100%', // Ensures the Box takes full width
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginTop: '40px',
          marginBottom: '40px',
        }}>
          <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            Our Mission
          </Typography>
          <Typography variant="h6" component="p" sx={{ fontStyle: 'italic', fontSize: '1.25rem', maxWidth: '60%' }}>
            "Our mission is to empower student athletes with the knowledge and understanding of the profound impact sports can have on both their physical and mental well-being. Through psychoeducation and engaging in-person presentations, we aim to raise awareness of the complexities surrounding brain health in athletics. By fostering a culture of informed decision-making and proactive care, we strive to equip student athletes with the tools and resources they need to prioritize their brain health, both on and off the field."
          </Typography>
        </Box>

        {/* Bio Section with Vertical Avatars and Expanded Side Bios */}
        <Container maxWidth="lg" style={{ marginTop: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Meet Our Team
          </Typography>
          <Grid container spacing={4} direction="column" alignItems="center">
            {/* Adjusted for a vertical layout with more horizontal space for text */}
            <Grid item xs={12}>
              <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                <Avatar alt="Name 1" src={Avatar1} sx={{ width: 180, height: 180, marginBottom: 2 }} />
                <Typography variant="h6">Nate Roy</Typography>
                <Typography variant="body1" style={{ maxWidth: '80%' }}>
                  Nate played Division 1 football in the Ivy League and published original research on concussions as an undergraduate at Cornell University. He currently works as a clinical research coordinator within Harvard’s Division of Neuropsychiatry and Neuromodulation and is committed to play football at McGill University in 2024 as a graduate student of neuroscience. He has previously volunteered as a high school track and field coach and worked as a youth athlete mentor and personal trainer. Within these experiences, it has stood out to him that even though scientific knowledge can be profoundly helpful in athletic endeavors, there is an astonishing lack of application of scientific findings in the realm of athletics. His desire to distribute science in a palatable, engaging, and applicable manner to youth student-athletes led to the development of the CFAA with which his hope is to create better outcomes for student-athletes in uniform, in the classroom, and in life thereafter.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                <Avatar alt="Name 2" src={Avatar2} sx={{ width: 180, height: 180, marginBottom: 2 }} />
                <Typography variant="h6">Reza Ashrafi</Typography>
                <Typography variant="body1" style={{ maxWidth: '80%' }}>
                Reza Ashrafi ‘26 is a current student at Cornell University majoring in neurobiology and behavior. On campus, Reza is part of a biomedical engineering project team where he is currently researching and designing medical assist devices for patients with neurodegenerative diseases. Additionally, he is a member of Cornell’s Varsity Sprint Football team where he plays right tackle. He has previously been involved in community service organizations that sought to provide science education to elementary and middle school children. Through these experiences, he has zeroed in on the importance of scientific communication and how delivery of knowledge and understanding a target audience is a true artform that is continually developed. Within the cortex flex team, Reza hopes to leverage his experiences as a student-athlete, researcher, and volunteer to help foster safer sports. 
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                <Avatar alt="Name 2" src={Avatar3} sx={{ width: 180, height: 180, marginBottom: 2 }} />
                <Typography variant="h6">Dylan Keusch</Typography>
                <Typography variant="body1" style={{ maxWidth: '80%' }}>
                Dylan Keusch is a senior at Cornell University studying Industrial and Labor Relations with a minor in Health Policy. On campus, Dylan is a member of the Varsity Men’s Lightweight Rowing Team. Throughout his time at Cornell, he has worked on original research on the lack of adequate policy protections for children returning to school after brain injury. He is currently writing his honors senior thesis on the lack of education policy for concussion and how it may contribute to poor life outcomes for survivors. Off campus, he is an intern with the Department of Neurosurgery at Boston Children’s Hospital and is a published author and conference invitee on Moyamoya disease, a rare cerebrovascular disease. He also works on research in neuro-oncology, cerebral palsy, and other cerebrovascular diseases. In addition to his work at Children’s, he is also a Firefighter/EMT in Edgartown, Massachusetts. As a brain injury survivor himself, Dylan recognizes the urgent need for accessible information on the dangers of concussion for young student-athletes. He could not be more excited to work with CFAA!
                </Typography>
              </Box>
            </Grid>
            {/* Add more items here for additional team members */}
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
