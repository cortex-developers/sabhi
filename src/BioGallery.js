import React, { useState } from 'react';
import { createTheme, ThemeProvider, Grid, Card, CardContent, Typography, CardActions, Button, Modal, Box } from '@mui/material';
import Slider from 'react-slick'; // Import Slider
import "slick-carousel/slick/slick.css"; // Import slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSSimport nate from './nate.jpg'
import nate from './nate.jpg'
import nate2 from './nate2.jpg'
import reza from './reza.jpg'
import dylan from './dylan.jpg'
import dylan2 from './dylan2.jpg'
import dylan3 from './dylan3.jpg'
import dylan4 from './dylan4.jpg'
import olivia from './olivia.jpg'
import olivia2 from './olivia2.jpg'
import dj from './dj.jpg'
import kevin from './kevin.jpg'
import maya from './maya.jpg'
import maya2 from './maya2.jpg'
import puneet from './puneet.jpg'
import puneet2 from './puneet2.jpg'
import ellie from './ellie.jpg'
import ellie2 from './ellie2.jpg'

const bios = [
  // Your bios data here
  {
    name: 'Nate Roy',
    images: [nate, nate2],
    description: 'Football Player & PhD Candidate',
    fullBio: 'Nate is an incoming doctoral student-athlete, studying for a PhD in adolescent psychiatry while playing varsity football at McGill University. He previously played Division 1 football in the Ivy League and published original research on concussions as an undergraduate at Cornell University. He currently works as a clinical research coordinator within Harvard’s Division of Neuropsychiatry and Neuromodulation. In the past, Nate has volunteered as a high school track and field coach and worked as a youth athlete mentor and personal trainer. Within these experiences, it has stood out to him that even though scientific knowledge can be profoundly helpful in athletic endeavors, there is an astonishing lack of application of scientific findings in the realm of athletics. His desire to distribute science in a palatable, engaging, and applicable manner to youth student-athletes led to the development of the CFAA with which his hope is to create better outcomes for student-athletes in uniform, in the classroom, and in life thereafter.'
  },
  {
    name: 'Reza Ashrafi',
    images: [reza],
    description: 'Football Player & Neurobiology Researcher',
    fullBio: 'Reza Ashrafi ‘26 is a current student at Cornell University majoring in neurobiology and behavior. On campus, Reza is part of a biomedical engineering project team where he is currently researching and designing medical assist devices for patients with neurodegenerative diseases. Additionally, he is a member of Cornell’s Varsity Sprint Football team where he plays right tackle. He has previously been involved in community service organizations that sought to provide science education to elementary and middle school children. Through these experiences, he has zeroed in on the importance of scientific communication and how delivery of knowledge and understanding a target audience is a true artform that is continually developed. Within the cortex flex team, Reza hopes to leverage his experiences as a student-athlete, researcher, and volunteer to help foster safer sports.'
  },
  {
    name: 'Maya Hakyal',
    images: [maya, maya2],
    description: 'Tennis Player & Medical Student',
    fullBio: `Maya Haykal, the eldest of eight siblings, embodies the ethos of "work hard, play hard". This
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
    outreach.`
  },
  {
    name: 'Dylan Keusch',
    images: [dylan, dylan2, dylan3, dylan4],
    description: 'Rower, Policy Advocate, & EMT',
    fullBio: 'Dylan Keusch is a senior at Cornell University studying Industrial and Labor Relations with a minor in Health Policy. On campus, Dylan is a member of the Varsity Men’s Lightweight Rowing Team. Throughout his time at Cornell, he has worked on original research on the lack of adequate policy protections for children returning to school after brain injury. He is currently writing his honors senior thesis on the lack of education policy for concussion and how it may contribute to poor life outcomes for survivors. Off campus, he is an intern with the Department of Neurosurgery at Boston Children’s Hospital and is a published author and conference invitee on Moyamoya disease, a rare cerebrovascular disease. He also works on research in neuro-oncology, cerebral palsy, and other cerebrovascular diseases. In addition to his work at Children’s, he is also a Firefighter/EMT in Edgartown, Massachusetts. As a brain injury survivor himself, Dylan recognizes the urgent need for accessible information on the dangers of concussion for young student-athletes. He could not be more excited to work with CFAA!'
  },
  {
    name: 'Olivia Ramil',
    images: [olivia, olivia2],
    description: 'Basketball Player & Non-profit Leader',
    fullBio: 'Olivia Ramil brings a wealth of experience to Cortex Flex Athlete Alliance as a former collegiate athlete, having competed in Division I Basketball for six years across prestigious institutions like Georgetown University, Binghamton University, St. Joseph’s University, and Samford University. Notably ranked by ESPN as the 16th best center in the 2016 Women’s Basketball class out of high school, Olivia balanced her athletic pursuits with scholarly passions, earning both a Bachelor of Science in Nursing and a Masters of Health Administration. In her transition from the court to professional roles, she has served as a Support Coordinator Intern with Samford University’s CAREs Team, Lead Project Manager and Recruiting Coordinator at SaveAround Fundraising, Athlete to Athlete Recruiter, PLAAY Mentor & Project Manager, and Registered School Nurse for Elementary and Middle Schools. As a member of the Cortex Flex Athlete Alliance, Olivia strives to equip and empower athletes, utilizing her varied expertise to nurture success, safety, and fulfillment in their careers and beyond.    '
  },
  {
    name: 'DJ Hampton',
    images: [dj],
    description: 'Athletic Trainer & U.S Army Section Chief',
    fullBio: "DJ Hampton, an ISSA Certified Performance Enhancement Trainer, is the dynamic force behind BoyGuru Fitness. With a passion for cultivating excellence in student athletes, DJ's dual training methods in the physical and cognitive realms sets him apart. Currently Serving as a U.S. Army, combat arms Field Artillery Howitzer Section Chief, he effortlessly applies agile decision-making and creative problem-solving skills honed through tactical situations while also fostering a deliberate and process management mindset garnered through a certification in Program Management and a Green Belt in Six Sigma Methodology. Despite his recent foray into business, DJ's leadership, training, speaking, content creation, and marketing skills converge seamlessly. His mission extends beyond sports, aiming to transform individuals into forces of nature both in their sport and in the sport of life. DJ's diverse skill set positions him as a valuable asset to the Cortex Flex Athlete Alliance, making him a trusted ally for those seeking mastery of self and unparalleled performance enhancement."
  },
  {
    name: 'Kevin Wisniewski',
    images: [kevin],
    description: 'Medical Student & Non-profit Leader',
    fullBio: 'Kevin is a medical student and rising leader within holistic medicine. His skill set sits uniquely at the interface of both scientific research and medical practice, as he has previously conducted research for Pfizer, Boston Scientific, and Verathon in addition to serving as the lead medical assistant to the President of Urology at a leading institution. Outside of medicine, his guidance as the president of USF’s Zeta Beta Tau transformed a struggling organization into an award-winning philanthropic giant over the course of 3 years. Kevin is equipped with the ultimate combination of technical knowledge, passion for service, and tactful leadership. He aims to apply this within CFAA as a trailblazer in disseminating scientific information to the athletic community in a manner that improves lives for years to come.'
  },
  {
    name: 'Ellie Mccarron',
    images: [ellie, ellie2],
    description: 'Graphic Designer',
    fullBio: `An inspired creative excited by the intersection of graphic design, visual art, and advertising, Ellie McCarron has built a portfolio of technical skills, and experiences that position her for success as an emerging Art Director. The Boston University junior has completed intensive creative coursework, as well as an industry internship in Boston for a major non-profit. 
    Ellie was the digital marketing intern for Big Brothers Big Sisters of Eastern Massachusetts, where she contributed fresh strategies as well as new mediums of digital marketing. She helped develop BBBSEM’s presence online across platforms, such as Instagram, Facebook, TikTok, X, and LinkedIn. She learned how to use much of the Adobe Suite in a professional setting.
    She is currently a part of Boston University’s AdLab, the largest student-run advertising agency in the country. She is an Art Director for Under Armour, and has contributed unique, memorable content for them. She is a graphic designer for The BU BUZZ, a student-run lifestyle magazine. Ellie also participated in Boston University’s PRoBono, and provided exclusive graphics for a local non-profit’s social media page. She also has several years of customer service experience under her belt.   							
    At Boston University, Ellie has earned dean’s list honors while completing coursework in media relations, communications writing, advertising, and graphic design.`
  },
  {
    name: 'Puneet Velidi',
    images: [puneet, puneet2],
    description: 'Software Engineer & Neuroscience Researcher',
    fullBio: 'Puneet is currently a software engineer at Walmart Global Tech where he builds web applications. He was a researcher in the Computational Connectomics Lab at Cornell and presented his work on the effect of heavy alcohol use on the brain at OHBM 2023.'
  },

  // More bios...
];

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

function BioGallery() {
  const [open, setOpen] = useState(false);
  const [selectedBio, setSelectedBio] = useState({});

  const handleOpen = (bio) => {
    setSelectedBio(bio);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Modal style
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} sx={{ padding: '20px', marginTop: '20px', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto' }}>
        {bios.map((bio, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <Slider {...sliderSettings}>
                {bio.images.map((image, idx) => (
                  <div key={idx}>
                    <img src={image} alt={bio.name} style={{ width: '100%', height: '375px' }} />
                  </div>
                ))}
              </Slider>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {bio.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {bio.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleOpen(bio)}>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selectedBio.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {selectedBio.fullBio}
          </Typography>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}

export default BioGallery;
