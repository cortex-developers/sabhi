import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from '@mui/material';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Ensure you're pointing to the PDF worker correctly
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfPreview = ({ pdf }) => {
  const [numPages, setNumPages] = React.useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from({ length: numPages }, (_, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
      <a href={pdf} style={{ textDecoration: 'none' }} download>
        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Download PDF
        </Button>
      </a>
    </div>
  );
};

export default PdfPreview;
