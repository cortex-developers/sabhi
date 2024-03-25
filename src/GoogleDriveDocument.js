import React from 'react';

const GoogleDriveDocument = () => {
  const iframeSrc = "https://drive.google.com/file/d/1U2SYlSuuZNBRNfN0zVVPplNmmPURIQ_t/preview"; // Replace YOUR_EMBED_LINK_HERE with your embed link
  return (
    <div style={{ overflow: 'hidden', paddingBottom: '56.25%', position: 'relative', height: 500 }}>
      <iframe
        src={iframeSrc}
        style={{
          left: 0,
          top: 0,
          height: '100%',
          width: '100%',
          position: 'absolute',
        }}
        frameBorder="0"
        scrolling="no"
        title="Embedded Document"
      ></iframe>
    </div>
  );
};

export default GoogleDriveDocument;