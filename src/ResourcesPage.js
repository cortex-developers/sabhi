import React from 'react';
import { Box } from '@mui/system';
import Iframe from 'react-iframe'

const ResourcesPage = () => {
/*   const [resources, setResources] = useState([]);

  useEffect(() => {
    async function fetchResources() {
      const spaceId = 'y10zqmp53ure'; // Replace with your space ID
      const accessToken = 'nS-_ikquqQv4RldFYL1pwAN3sgryTJExwxOokbmBYF4'; // Replace with your access token
      const environmentId = 'master';
      const contentTypeId = 'resource';
      const includeLevel = 2; // Adjust based on your content structure

      const response = await fetch(
        `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=${contentTypeId}&include=${includeLevel}`
      );
      const data = await response.json();

      const resourcesWithThumbnails = data.items.map((resource) => {
        if (resource.fields.resourceThumbnail && data.includes.Asset) {
          const imageAsset = data.includes.Asset.find(asset => asset.sys.id === resource.fields.resourceThumbnail.sys.id);
          resource.fields.resourceThumbnailUrl = imageAsset ? imageAsset.fields.file.url : null;
        }
        return resource;
      });

      setResources(resourcesWithThumbnails);
    }

    fetchResources();
  }, []); */

  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Iframe
        url="https://v2-embednotion.com/46963e783c71455e9064ad3f9a45e896"
        width="100%"
        height="100%"
        display="initial"
        position="relative"
        allowFullScreen
      />
    </Box>
/*     <Box sx={{ width: '100%', maxWidth: 768, mx: 'auto', mt: 4 }}>
      {resources.map((resource) => (
        <Accordion key={resource.sys.id} sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={4}>
                {resource.fields.resourceThumbnailUrl && (
                  <Box
                    sx={{
                      width: 60, // Fixed square dimensions
                      height: 60,
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 2,
                    }}
                  >
                    <img
                      src={resource.fields.resourceThumbnailUrl}
                      alt={resource.fields.resourceTitle}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                )}
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">{resource.fields.resourceTitle}</Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>{resource.fields.resourceDescription}</Typography>
            {resource.fields.resourceLink && (
              <Typography variant="body2">
                <a href={resource.fields.resourceLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Visit Website
                </a>
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box> */
  );
};

export default ResourcesPage;
