import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, Link, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import wissw from './wissw.png';  // Your letter-sized image

const AutoOpenModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true); // Automatically open modal
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="auto-open-modal"
      aria-describedby="modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          padding: 2,
          borderRadius: 2,
          position: 'relative',
          maxWidth: '40vw',
          maxHeight: '100vh',
          textAlign: 'center',
          overflowY: 'auto',
          '@media (max-width: 600px)': {
            maxWidth: '90vw',  // Adjust modal size for mobile devices
            maxHeight: '90vh',
          },
        }}
      >
        {/* Close Icon Button at the top-right */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'white',  // Set icon color to white
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Image */}
        <img 
          src={wissw}
          alt="Event"
          style={{ 
            width: '100%', 
            height: 'auto', 
            marginBottom: '20px', 
            maxHeight: '70vh',  // Ensure the image doesn't overflow on mobile
            objectFit: 'contain', // Maintain aspect ratio
          }} 
        />

        {/* Underlined Text */}
        <Typography variant="h6" gutterBottom>
          <Link 
            href="https://www.eventbrite.com/e/women-in-sports-stem-webinar-tickets-1015673967177?aff=oddtdtcreator" 
            target="_blank" 
            underline="always"
            rel="noopener noreferrer"
          >
            REGISTER HERE
          </Link>
        </Typography>

        {/* Close Button */}

      </Box>
    </Modal>
  );
};

export default AutoOpenModal;
