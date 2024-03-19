import React from 'react';
import { Container} from '@mui/material';
import GoogleDriveDocument from './GoogleDriveDocument';
//import PdfPreview from './PdfPreview';
//import cfaaapinfo from './cfaaapinfo.pdf'
//import cfaaappromo from './cfaaappromo.pdf'

function Community() {
  return (
    <Container maxWidth="lg" style={{ marginTop: '40px', marginBottom: '300px' }}>
        <GoogleDriveDocument />
    </Container>
  );
}

export default Community;
