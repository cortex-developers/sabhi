import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider, Grid, Card, CardContent, Typography, CardActions, Button, Modal, Box, IconButton } from '@mui/material';
import { LinkedIn, Instagram, Email } from '@mui/icons-material'; // Import icons
import { createClient } from 'contentful';
import CloseIcon from '@mui/icons-material/Close';
import Slider from 'react-slick'; // Import Slider
import "slick-carousel/slick/slick.css"; // Import slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSSimport nate from './nate.jpg'

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

const client = createClient({
  space: 'y10zqmp53ure',
  accessToken: 'nS-_ikquqQv4RldFYL1pwAN3sgryTJExwxOokbmBYF4'
});

function BioGallery() {
  const [bios, setBios] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedBio, setSelectedBio] = useState({});

  useEffect(() => {
    // Fetch bios from Contentful
    const fetchBios = async () => {
      const response = await client.getEntries({
        content_type: 'bio',
        include: 2 // Adjust if necessary, depending on the depth of linked entries/assets you need
      });
    
      // Adapt the logic to handle multiple images per bio
      const biosWithImageUrls = response.items.map((bio) => {
        if (bio.fields.images && response.includes.Asset) {
          // Map each image in the bio to its URL by finding the corresponding asset
          bio.fields.imageUrls = bio.fields.images.map(imageLink => {
            const imageAsset = response.includes.Asset.find(asset => asset.sys.id === imageLink.sys.id);
            return imageAsset ? imageAsset.fields.file.url : null;
          }).filter(url => url !== null); // Filter out any nulls in case some images aren't found
        } else {
          bio.fields.imageUrls = []; // Ensure we always have an imageUrls field, even if it's empty
        }
    
        // Adjust the object structure as needed for your component
        return {
          name: bio.fields.name || 'No Name',
          description: bio.fields.description || 'No Description',
          images: bio.fields.imageUrls, // Use the resolved image URLs
          linkedin: bio.fields.linkedin || '',
          instagram: bio.fields.instagram || '',
          email: bio.fields.email || '',
          fullBio: bio.fields.fullBio || 'No Full Bio Available'
        };
      });
    
      setBios(biosWithImageUrls);
    };

    fetchBios();
  }, []);

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

