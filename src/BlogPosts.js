import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Modal, Typography, Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // For closing/minimizing the modal
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info'; // Import the Info icon
import remarkSubSuper from 'remark-sub-super';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(true); // State to control the modal open state

  useEffect(() => {
    async function fetchPosts() {
      const spaceId = 'y10zqmp53ure';
      const accessToken = 'nS-_ikquqQv4RldFYL1pwAN3sgryTJExwxOokbmBYF4';
      const environmentId = 'master'; // or your custom environment ID
      const contentTypeId = 'blogPost';
      const includeLevel = 2;

      const response = await fetch(
        `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=${contentTypeId}&include=${includeLevel}`
      );
      const data = await response.json();

      const postsWithImageUrls = data.items.map((post) => {
        if (post.fields.titleImage && data.includes.Asset) {
          const imageAsset = data.includes.Asset.find(asset => asset.sys.id === post.fields.titleImage.sys.id);
          post.fields.titleImageUrl = imageAsset ? imageAsset.fields.file.url : null;
        }
        return post;
      });

      setPosts(postsWithImageUrls);
    }
    fetchPosts();
  }, []);

  const toggleExpand = (id) => {
    setPosts(posts.map(post => {
      if (post.sys.id === id) {
        post.isExpanded = !post.isExpanded;
      }
      return post;
    }));
  };
  const handleClose = () => setOpen(false); // Function to close/minimize the modal

  // Modal style
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%', // Adjusted width for better mobile view
    maxWidth: 375, // Added maxWidth for responsiveness 
    maxHeight: 500,   
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto'
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}>
            Introducing Cortex Learn
          </Typography>
          <Typography variant="body1" paragraph>
            Our role at <strong>Cortex Flex</strong> is clear: we act as the intermediaries between the scientific field and you, the athletes. That’s because many of us were (or still are) athletes ourselves, who have now entered fields like medicine or scientific research.
          </Typography>
          <Typography variant="body1" paragraph>
            We’re biased, but we think science rocks. It can also be very, very confusing. Don’t sweat it, though, we’re here to break down difficult-to-understand scientific papers and provide you with all the information you need to know.
          </Typography>
          <Typography variant="body1" paragraph>
            Our folks on the science team will be creating blog posts summarizing useful, up-to-date scientific papers with tips and techniques to keep you healthy on and off the field. Our research team will be conducting surveys with our audience to collect valuable data points to help us understand what we need to teach.
          </Typography>
          <Typography variant="body1" paragraph>
            Check back weekly for new posts. If you have a question that you want answered, reach out to us on social media!
          </Typography>
          <Typography variant="body1" paragraph>
            At <strong>Cortex Flex</strong>, we’ll do the research for you so you can focus on excelling in your sport, in the classroom, and in life.
          </Typography>
        </Box>
      </Modal>

      <Box sx={{ display: 'flex', justifyContent: 'left', marginLeft: "25px", mt: 2 }}>
      <IconButton onClick={() => setOpen(true)} aria-label="show introduction" color="primary" size="small">
          <InfoIcon />
        </IconButton>
        {/*<Typography
          variant="caption"
          sx={{
            fontFamily: 'Kosugi Maru, sans-serif',
            ml: 1, // Margin left to space out the text from the icon
            fontSize: '0.75rem', // Adjust the font size as needed
          }}
        >
          Show Introduction
        </Typography> */}
      </Box>
      <Box sx={{ width: '80%', maxWidth: 768, mx: 'auto', mt: 4, px: 2 }}>
        {posts.map((post) => (
          <Box key={post.sys.id} sx={{ mb: 5 }}>
            {post.fields.titleImageUrl && (
              <img
                src={post.fields.titleImageUrl}
                alt={post.fields.title}
                style={{ width: '100%', height: 'auto', borderRadius: matches ? '8px' : '0', marginTop: '20px', cursor: 'pointer' }}
                onClick={() => toggleExpand(post.sys.id)} // Make image clickable to expand/collapse post body
              />
            )}
            <Typography
              variant="h4"
              component="h2"
              sx={{ my: 2, fontWeight: 'bold', cursor: 'pointer' }}
              onClick={() => toggleExpand(post.sys.id)} // Make title clickable to expand/collapse post body
            >
              {post.fields.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 2 }}>
              Published on: {new Date(post.fields.publishedOn).toLocaleDateString()} by {post.fields.authors.join(', ')}
            </Typography>
            <Typography gutterBottom></Typography>
            <Typography variant="body1">{post.fields.lede}</Typography>
            <IconButton onClick={() => toggleExpand(post.sys.id)} sx={{ p: 0 }}>
              {post.isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            {post.isExpanded && (
              <ReactMarkdown
              remarkPlugins={[remarkSubSuper]}
              >{post.fields.body}</ReactMarkdown>
            )}
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default BlogPosts;

