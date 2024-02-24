import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
    Typography,
    Container,
    Box,
    Avatar,
    Grid,
} from '@mui/material';
import '@fontsource/kosugi-maru';

// Import Avatar images
import Avatar1 from './avatar1.jpg'; // Replace with actual paths to your images
import Avatar2 from './avatar2.jpg';
import Avatar3 from './avatar3.jpg';
import Avatar4 from './avatar4.jpg'; // Replace with actual paths to your images
import Avatar5 from './avatar5.jpg';
import Avatar6 from './avatar6.jpg';
import Avatar7 from './avatar7.jpg'; // Replace with actual paths to your images

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
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '40px', paddingBottom: '40px' }}>
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
                        <Grid item xs={12}>
                            <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                                <Avatar alt="Name 2" src={Avatar4} sx={{ width: 180, height: 180, marginBottom: 2 }} />
                                <Typography variant="h6">Olivia Ramil</Typography>
                                <Typography variant="body1" style={{ maxWidth: '80%' }}>
                                    Olivia Ramil brings a wealth of experience to Cortex Flex Athlete Alliance as a former collegiate athlete, having competed in Division I Basketball for six years across prestigious institutions like Georgetown University, Binghamton University, St. Joseph’s University, and Samford University. Notably ranked by ESPN as the 16th best center in the 2016 Women’s Basketball class out of high school, Olivia balanced her athletic pursuits with scholarly passions, earning both a Bachelor of Science in Nursing and a Masters of Health Administration. In her transition from the court to professional roles, she has served as a Support Coordinator Intern with Samford University’s CAREs Team, Lead Project Manager and Recruiting Coordinator at SaveAround Fundraising, Athlete to Athlete Recruiter, PLAAY Mentor & Project Manager, and Registered School Nurse for Elementary and Middle Schools. As a member of the Cortex Flex Athlete Alliance, Olivia strives to equip and empower athletes, utilizing her varied expertise to nurture success, safety, and fulfillment in their careers and beyond.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                                <Avatar alt="Name 2" src={Avatar6} sx={{ width: 180, height: 180, marginBottom: 2 }} />
                                <Typography variant="h6">DJ Hampton</Typography>
                                <Typography variant="body1" style={{ maxWidth: '80%' }}>
                                    DJ Hampton, an ISSA Certified Performance Enhancement Trainer, is the dynamic force behind BoyGuru Fitness. With a passion for cultivating excellence in student athletes, DJ's dual training methods in the physical and cognitive realms sets him apart. Currently Serving as a U.S. Army, combat arms Field Artillery Howitzer Section Chief, he effortlessly applies agile decision-making and creative problem-solving skills honed through tactical situations while also fostering a deliberate and process management mindset garnered through a certification in Program Management and a Green Belt in Six Sigma Methodology. Despite his recent foray into business, DJ's leadership, training, speaking, content creation, and marketing skills converge seamlessly. His mission extends beyond sports, aiming to transform individuals into forces of nature both in their sport and in the sport of life. DJ's diverse skill set positions him as a valuable asset to the Cortex Flex Athlete Alliance, making him a trusted ally for those seeking mastery of self and unparalleled performance enhancement.</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                                <Avatar alt="Name 2" src={Avatar5} sx={{ width: 180, height: 180, marginBottom: 2 }} />
                                <Typography variant="h6">Maya Hakyal</Typography>
                                <Typography variant="body1" style={{ maxWidth: '80%' }}>
                                    Maya Haykal, the eldest of eight siblings, embodies the ethos of "work hard, play hard". This
                                    motto was ingrained in her upbringing, which fueled her academic pursuits and athletic
                                    endeavors. Transitioning from dance to tennis after a teenage injury, Maya's passion for tennis
                                    flourished, leading her to compete at the Division I level at SUNY Binghamton, where she
                                    earned a Bachelor of Science in Biological Sciences and a minor in Anthropology. Her
                                    commitment to research, showcased through her pivotal role as a research assistant on an
                                    NIAAA R01 grant-funded project, extended her impact to promoting responsible alcohol
                                    consumption among student-athletes. Pursuing her aspiration to become a physician, Maya
                                    embarked on her medical education journey at SUNY Upstate Medical University, focusing on
                                    Physical Medicine and Rehabilitation. Throughout medical school, she demonstrated leadership
                                    in Sports Medicine and mentored young athletes through programs like Athlete to Athlete, while
                                    also becoming a certified yoga instructor (RYT 200 hour) to champion accessibility through a
                                    chair yoga program at Organic Yoga & Wellness studio. Maya's scholarly contributions,
                                    particularly her systematic reviews on Vitamin A and Zinc supplementation, underscore her
                                    commitment to pediatric health. With her adeptness in statistical analysis and holistic approach
                                    to well-being, Maya's diverse background makes her an incredible asset to Cortex Flex Athlete
                                    Alliance, showcasing her dedication to athletic mentorship, medical practice, and community
                                    outreach.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                                <Avatar alt="Name 2" src={Avatar7} sx={{ width: 180, height: 180, marginBottom: 2 }} />
                                <Typography variant="h6">Kevin Wisniewski</Typography>
                                <Typography variant="body1" style={{ maxWidth: '80%' }}>
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
