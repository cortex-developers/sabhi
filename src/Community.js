import React from 'react';
import GoogleDriveDocument from './GoogleDriveDocument';
import { Box, Container } from '@mui/system';
//import PdfPreview from './PdfPreview';
//import cfaaapinfo from './cfaaapinfo.pdf'
//import cfaaappromo from './cfaaappromo.pdf'
import { useEffect } from 'react';

const TypeformEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Styling the Box to center and pad the Typeform embed
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="10vh" p={3}>
      <div data-tf-live="01HSTQWY1ZZF4RE19DWXGQY3HG"></div>
    </Box>
  );
};

function Community() {
  return (
    <>
      <TypeformEmbed />
      <Container maxWidth="lg" style={{ marginTop: '40px', marginBottom: '40px' }}>
        <GoogleDriveDocument />
      </Container>
    </>
  );
}

export default Community;
