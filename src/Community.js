import React from 'react';
import { Container} from '@mui/material';
import GoogleDriveDocument from './GoogleDriveDocument';
//import PdfPreview from './PdfPreview';
//import cfaaapinfo from './cfaaapinfo.pdf'
//import cfaaappromo from './cfaaappromo.pdf'
import { useEffect } from 'react';

const TypeformEmbed = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;

    // Append script to the body
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div data-tf-live="01HSTQWY1ZZF4RE19DWXGQY3HG"></div>;
};

function Community() {
  return (
    <>
    <TypeformEmbed />
    <Container maxWidth="lg" style={{ marginTop: '40px', marginBottom: '300px' }}>
        <GoogleDriveDocument />
    </Container>
    </>
  );
}

export default Community;
