import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Modal, Typography, Box, IconButton, useMediaQuery, useTheme, Link, Autocomplete, TextField, CircularProgress
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import ShareIcon from '@mui/icons-material/Share';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ReactGA4 from 'react-ga4';

const ImageSkeleton = ({ aspectRatio = '56.25%' }) => {
  return <div style={{ backgroundColor: '#eee', width: '100%', paddingTop: aspectRatio }}></div>;
};

const LoadableImage = ({ src, alt, style, height = '300px' }) => {
  const [loaded, setLoaded] = useState(false);
  const enhancedStyle = {
    ...style,
    width: '100%',
    height: height, // Set the image height
    objectFit: 'cover', // Ensures the image covers the area without distortion
    display: loaded ? 'block' : 'none'
  };
  return (
    <>
      {!loaded && <ImageSkeleton />}
      <img
        src={src}
        alt={alt}
        style={enhancedStyle}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </>
  );
};

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [tags, setTags] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [open, setOpen] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const slugify = (text) => text.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-');

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setSnackbarMessage('Link copied to clipboard!');
      setSnackbarOpen(true);
    } catch (err) {
      console.error('Failed to copy: ', err);
      setSnackbarMessage('Failed to copy link.');
      setSnackbarOpen(true);
    }
  };

  const handleShareClick = (title) => {
    const slug = slugify(title);
    const url = `${window.location.origin}/blog#${encodeURIComponent(slug)}`;
    copyToClipboard(url);
  };

  useEffect(() => {
    ReactGA4.initialize('G-HXLKWG3PW7');
    const fetchData = async () => {
      try {
        const postsResponse = await fetch(`https://cdn.contentful.com/spaces/y10zqmp53ure/environments/master/entries?access_token=nS-_ikquqQv4RldFYL1pwAN3sgryTJExwxOokbmBYF4&content_type=blogPost&include=2`);
        const postsData = await postsResponse.json();
        const fetchedPosts = postsData.items.map(post => ({
          ...post,
          fields: { ...post.fields, titleImageUrl: postsData.includes.Asset.find(asset => asset.sys.id === post.fields.titleImage.sys.id)?.fields.file.url }
        }));
        setPosts(fetchedPosts);
        setFilteredPosts(fetchedPosts);
        setIsLoading(false); // Data is loaded

        const tagsResponse = await fetch(`https://cdn.contentful.com/spaces/y10zqmp53ure/environments/master/tags?access_token=nS-_ikquqQv4RldFYL1pwAN3sgryTJExwxOokbmBYF4`);
        const tagsData = await tagsResponse.json();
        setTags(tagsData.items.map(tag => ({ id: tag.sys.id, name: tag.name })));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const navigateToPostByTitle = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const postImageElement = document.getElementById(`image-${hash}`);  // Target the image container
        if (postImageElement) {
          postImageElement.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
      }
    };
  
    if (!isLoading) {
      navigateToPostByTitle();
    }
  }, [isLoading, posts]); 

  useEffect(() => {
    const handleHashChange = () => {
      // Automatically close the modal if there's a hash in the URL
      if (window.location.hash) {
        setOpen(false);
      } else {
        // Optionally open it if there's no hash, depending on your UX needs
        setOpen(true);
      }
    };

    // Call when the component mounts
    handleHashChange();

    // Listen for hash changes to adjust modal visibility accordingly
    window.addEventListener('hashchange', handleHashChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  const toggleExpand = (id) => {

    setPosts(posts.map(post => {
      if (post.sys.id === id) {
        post.isExpanded = !post.isExpanded;
        if (post.isExpanded) {
          ReactGA4.event({
            category: 'Articles', // Optional for GA4
            action: 'expand_article',
            label: post.fields.title, // Optional for GA4
            value: 1, // Optional
          });
        }
      }
      return post;
    }));
  };

  useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(post => post.metadata.tags.some(tag => selectedTags.includes(tag.sys.id)));
      setFilteredPosts(filtered);
    }
  }, [selectedTags, posts]);

  const handleTagChange = (event, values) => {
    setSelectedTags(values.map(v => v.id));
  };

  const handleClose = () => setOpen(false); // Function to close/minimize the modal
  if (isLoading) {
    return <CircularProgress />;
  }
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
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 2, width: 'auto' }}>
        <Autocomplete
          multiple
          id="tags-filter"
          options={tags}  // Assuming tags is an array of objects like [{ id: 'tag1', name: 'Tag 1' }, ...]
          getOptionLabel={(option) => option.name}  // Specifies how to get the string label for each option
          onChange={handleTagChange}  // Handle changes
          renderInput={(params) => <TextField {...params} label="Filter by tags" placeholder="Tags" sx={{minWidth: '250px' }}/>}
          value={tags.filter(tag => selectedTags.includes(tag.id))}  // Controls the current value based on selected tags
        />
      </Box>
      <Box sx={{ width: '80%', maxWidth: 768, mx: 'auto', mt: 4, px: 2 }}>
        {filteredPosts.map((post) => (
          <Box key={post.sys.id} id={slugify(post.fields.title)} sx={{ mb: 5 }}>
            {post.fields.titleImageUrl && (
              <LoadableImage
                src={post.fields.titleImageUrl}
                alt={post.fields.title}
                height="500px"
                id={`image-${slugify(post.fields.title)}`}
                style={{ borderRadius: matches ? '8px' : '0', marginTop: '20px', cursor: 'pointer' }}
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
              Published on: {new Date(post.fields.publishedOn).toLocaleDateString()} by
              {post.fields.authors.map((author, index) => (
                <span key={slugify(author)}>
                  {index > 0 && ", "} {/* Add a comma before names except the first one */}
                  <Link href={`/bios#${slugify(author)}`} style={{ textDecoration: 'none' }}>
                    {author}
                  </Link>
                </span>
              ))}
            </Typography>
            <IconButton onClick={() => handleShareClick(post.fields.title)} aria-label="share">
              <ShareIcon />
            </IconButton>
            <Typography gutterBottom></Typography>
            <Typography variant="body1">{post.fields.lede}</Typography>
            <IconButton onClick={() => toggleExpand(post.sys.id)} sx={{ p: 0 }}>
              {post.isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            {post.isExpanded && (
              <ReactMarkdown>{post.fields.body}</ReactMarkdown>
            )}
          </Box>
        ))}
      </Box>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default BlogPosts;

