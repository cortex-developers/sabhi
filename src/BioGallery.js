import React, { useState } from 'react';
import { createTheme, ThemeProvider, Grid, Card, CardContent, Typography, CardActions, Button, Modal, Box, IconButton } from '@mui/material';
import { LinkedIn, Instagram, Email } from '@mui/icons-material'; // Import icons
import CloseIcon from '@mui/icons-material/Close';
import Slider from 'react-slick'; // Import Slider
import "slick-carousel/slick/slick.css"; // Import slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSSimport nate from './nate.jpg'
import nate from './nate.jpg'
import nate2 from './nate2.jpg'
import nate3 from './nate3.jpg'
import nate4 from './nate4.jpg'
import nate5 from './nate5.jpg'
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
import matt from './matt.jpg'
import chris from './chris.jpg'
import chris2 from './chris2.jpg'
import chris3 from './chris3.jpg'
import chris4 from './chris4.jpg'
import jess from './jess.jpg'
import addison from './addison.jpg'
import addison2 from './addison2.jpg'
import onome from './onome.jpg'
import john from './john.jpg'
import john2 from './john2.jpg'
const bios = [
  // Your bios data here
  {
    name: 'Nate Roy',
    images: [nate, nate2, nate4, nate3, nate5],
    description: 'Football Player & PhD Candidate',
    fullBio: 'Nate is an incoming doctoral student-athlete, studying for a PhD in adolescent psychiatry while playing varsity football at McGill University. He previously played Division 1 football in the Ivy League and published original research on concussions as an undergraduate at Cornell University. He currently works as a clinical research coordinator within Harvard’s Division of Neuropsychiatry and Neuromodulation. In the past, Nate has volunteered as a high school track and field coach and worked as a youth athlete mentor and personal trainer. Within these experiences, it has stood out to him that even though scientific knowledge can be profoundly helpful in athletic endeavors, there is an astonishing lack of application of scientific findings in the realm of athletics. His desire to distribute science in a palatable, engaging, and applicable manner to youth student-athletes led to the development of the CFAA with which his hope is to create better outcomes for student-athletes in uniform, in the classroom, and in life thereafter.',
    email: "nate@cortexflex.org",
    linkedin: "http://www.linkedin.com/in/nate-roy-b27543201",
    instagram: "https://www.instagram.com/nate.roy29/"
  },
  {
    name: 'Reza Ashrafi',
    images: [reza],
    description: 'Football Player & Neurobiology Researcher',
    fullBio: 'Reza Ashrafi ‘26 is a current student at Cornell University majoring in neurobiology and behavior. On campus, Reza is part of a biomedical engineering project team where he is currently researching and designing medical assist devices for patients with neurodegenerative diseases. Additionally, he is a member of Cornell’s Varsity Sprint Football team where he plays right tackle. He has previously been involved in community service organizations that sought to provide science education to elementary and middle school children. Through these experiences, he has zeroed in on the importance of scientific communication and how delivery of knowledge and understanding a target audience is a true artform that is continually developed. Within the cortex flex team, Reza hopes to leverage his experiences as a student-athlete, researcher, and volunteer to help foster safer sports.',
    email: "reza@cortexflex.org",
    linkedin: "https://www.linkedin.com/in/reza-ashrafi-b636801ab/",
    instagram: "https://www.instagram.com/reza_ashrafi26/"
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
    fullBio: 'Dylan Keusch is a senior at Cornell University studying Industrial and Labor Relations with a minor in Health Policy. On campus, Dylan is a member of the Varsity Men’s Lightweight Rowing Team. Throughout his time at Cornell, he has worked on original research on the lack of adequate policy protections for children returning to school after brain injury. He is currently writing his honors senior thesis on the lack of education policy for concussion and how it may contribute to poor life outcomes for survivors. Off campus, he is an intern with the Department of Neurosurgery at Boston Children’s Hospital and is a published author and conference invitee on Moyamoya disease, a rare cerebrovascular disease. He also works on research in neuro-oncology, cerebral palsy, and other cerebrovascular diseases. In addition to his work at Children’s, he is also a Firefighter/EMT in Edgartown, Massachusetts. As a brain injury survivor himself, Dylan recognizes the urgent need for accessible information on the dangers of concussion for young student-athletes. He could not be more excited to work with CFAA!',
    linkedin: 'https://www.linkedin.com/in/dylan-keusch-081172144/',
    instagram: 'https://www.instagram.com/dylankeusch/'
  },
  {
    name: 'Olivia Ramil',
    images: [olivia, olivia2],
    description: 'Basketball Player & Non-profit Leader',
    fullBio: 'Olivia Ramil brings a wealth of experience to Cortex Flex Athlete Alliance as a former collegiate athlete, having competed in Division I Basketball for six years across prestigious institutions like Georgetown University, Binghamton University, St. Joseph’s University, and Samford University. Notably ranked by ESPN as the 16th best center in the 2016 Women’s Basketball class out of high school, Olivia balanced her athletic pursuits with scholarly passions, earning both a Bachelor of Science in Nursing and a Masters of Health Administration. In her transition from the court to professional roles, she has served as a Support Coordinator Intern with Samford University’s CAREs Team, Lead Project Manager and Recruiting Coordinator at SaveAround Fundraising, Athlete to Athlete Recruiter, PLAAY Mentor & Project Manager, and Registered School Nurse for Elementary and Middle Schools. As a member of the Cortex Flex Athlete Alliance, Olivia strives to equip and empower athletes, utilizing her varied expertise to nurture success, safety, and fulfillment in their careers and beyond.    '
  },
  {
    name: 'Onome Kessington',
    images: [onome],
    description: 'Football Player & Business Leader',
    fullBio: 'Onome Kessington is a Cornell University graduate completing his degree in Applied Economics and Management. Onome has an array of business experience from International Tax at world rebound beverage company Constellation Brands to Risk Management and Credit at First American Equipment Finance where they specialize in Equipment financing. Onome is a natural born entrepreneur that always looks at how he can add value to any room he is in.'
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
    At Boston University, Ellie has earned dean’s list honors while completing coursework in media relations, communications writing, advertising, and graphic design.`,
    linkedin: 'https://www.linkedin.com/in/elisabeth-mccarron-81580526a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    instagram: 'https://www.instagram.com/elliebelly17?igsh=NHZ6OTlrOGdweWZi&utm_source=qr'
  },
  {
    name: 'Matt Shumway',
    images: [matt],
    description: 'Medical Student & Researcher',
    fullBio: `Matt is a medical student with a strong passion for sports medicine, in particular the detailed training and advocacy for athlete safety. He spent two years during his undergraduate education studying & conducting research alongside a globally recognized developmental psychologist in Charlottesville, Virginia, in addition to conducting and presenting his own research project amongst the world's top scientists at the prestigious National Institutes of Health in Bethesda, Maryland. Matt played football and lacrosse for most of his childhood years, trained in MMA, and has even competed in multiple long distance running events. With his first-hand experiences in contact sports, medical research, and clinical training, his résumé aligns perfectly with the goals of CFAA. Matt is looking forward to advancing the field of CTE research and advocacy, while making sports safer and more enjoyable for the athletes involved.`,
  },
  {
    name: 'Chris Stoneman',
    images: [chris, chris2, chris3, chris4],
    description: 'Football Player & Journalist',
    fullBio: 'Chris is a multifaceted individual who brings a great deal of experience across multiple domains to Cortex Flex Athlete Alliance. He is a student-athlete going into his final semester at Oberlin College, where he plays football as a Defensive Lineman at the Division 3 level and studies political science. Currently, Chris is on leave from Oberlin in order to pursue an internship in financial journalism in Luxembourg and will return to play a final season next fall and graduate in December 2024. A native of Metz, France with an extremely multicultural background, Chris is heavily involved in the development of American football across the globe. He currently works as a content manager, scout and podcast co-host for the Europe’s Elite organization, a social media presence that helps European football players get recruited to American colleges and universities. He is also an experienced coach, most recently taking on the role of defensive coordinator for the Saarland Hurricanes II team (in Saarbrucken, Germany) in 2024. Chris’s experience in football across the globe have granted him a valuable perspective on the world of sport and has motivated him to assist athletes everywhere in perfecting their craft. In joining the CFAA, Chris hopes to distribute the knowledge he has gained over the years and help athletes around the world to create better lives for themselves, both on the field and off.',
    instagram: 'https://www.linkedin.com/in/chris-stoneman-6303571a2/'
  },
  {
    name: 'Jessalyn Pugh',
    images: [jess],
    description: 'Health Sciences Student',
    fullBio: 'Jessalyn is a third-year student at the University of Cincinnati, where she is pursuing a Health Sciences degree with a focus in Minority Health. Her academic journey reflects her commitment to a career in healthcare as she prepares to apply to medical school this coming summer and work towards a career in Emergency Medicine. Beyond the classroom, Jessalyn is a Certified Phlebotomist and works as a Patient Care Assistant on a cardiac step-down and telemetry floor at a branch hospital of Cleveland Clinic. As a former competitive dancer, Jessalyn recognizes the necessity for improved training techniques and heightened emphasis on injury prevention within the realm of athletics. Driven by a deep-rooted commitment to promoting wellness, Jessalyn is passionate about utilizing research and education to mitigate athlete injuries. She aims to contribute to a world where individuals can lead happy and healthy lives, both on and off the field. This commitment underscores her belief in the transformative power of healthcare and education to positively impact communities.',
  },
  {
    name: 'Addison Goodman',
    images: [addison, addison2],
    description: 'Soccer Player & Cognitive Science Student',
    fullBio: `Addison is a third year undergraduate at Cornell University, studying for a degree in Cognitive Science. Before transferring to Cornell, Addison played on the varsity women’s soccer team at a Penn State campus, on which she also served as the team captain. In addition to competing as a collegiate student athlete, Addison volunteered in Elderly Care homes, served as a student government representative, and participated in various clubs. Addison's path took a profound turn when a severe concussion sustained during soccer necessitated months of intensive physical therapy. This experience catalyzed her mission to advocate for better concussion awareness among student athletes. She firmly believes that no athlete should endure such challenges without proper scientific understanding of when to prioritize recovery. Driven by her own journey, Addison strives to pave a smoother path for others facing similar obstacles. She envisions a future where the lives of student athletes, both during their athletic careers and beyond, are enriched through heightened awareness and support systems.`,
    instagram: 'https://www.instagram.com/addi.goodman?igsh=MTV1N3pwcDY0bjZwaA%3D%3D&utm_source=qr'
  },
  {
    name: 'John Marshall',
    images: [john, john2],
    description: 'Lacrosse Player & Business Student',
    fullBio: `John is a senior at Boston University's Questrom School of Business, where he studies Business Analytics. His passion for business started young, leading him to launch his own sneaker reselling venture at the age of 13. This experience fueled his curiosity about how his favorite companies work and the business world as a whole. As a former D1 lacrosse player, John experienced firsthand the mental health challenges and head-related injuries common in competitive sports. From these experiences, he's passionate about joining the Cortex Flex team and using his experiences to educate and support younger athletes going through similar challenges. When not playing or studying, John enjoys going to concerts and is also a talented painter on the side.`
  },
  {
    name: 'Puneet Velidi',
    images: [puneet, puneet2],
    description: 'Software Engineer & Neuroscience Researcher',
    fullBio: 'Puneet is currently a software engineer at Walmart Global Tech where he builds web applications. He was a researcher in the Computational Connectomics Lab at Cornell and presented his work on the effect of heavy alcohol use on the brain at OHBM 2023.',
    email: "puneet@cortexflex.org",
    linkedin: "https://www.linkedin.com/in/puneet-velidi-555b21212"
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
    width: '85%', // Adjusted width for better mobile view
    maxWidth: 375, // Added maxWidth for responsiveness 
    maxHeight: 500,   
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto'
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} sx={{ padding: '20px', marginTop: '20px', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto' }}>
        {bios.map((bio, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <Card>
              <Slider {...sliderSettings}>
                {bio.images.map((image, idx) => (
                  <div key={idx}>
                    <img src={image} alt={bio.name} style={{ width: '100%', height: '100%' }} />
                  </div>
                ))}
              </Slider>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {bio.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ fontSize: '10px' }}>
                  {bio.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleOpen(bio)}>Learn More</Button>
                {bio.linkedin && <IconButton size="small" href={bio.linkedin}><LinkedIn /></IconButton>}
                {bio.instagram && <IconButton size="small" href={bio.instagram}><Instagram /></IconButton>}
                {bio.email && <IconButton size="small" href={`mailto:${bio.email}`}><Email /></IconButton>}
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
          <IconButton sx={{ position: 'absolute', top: 0, right: 0 }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
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

