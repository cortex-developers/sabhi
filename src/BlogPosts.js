import React, { useState, useEffect } from 'react';
import {
  Typography, Box, IconButton, useMediaQuery, Autocomplete, TextField, CircularProgress, Card, CardMedia, Grid
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import ps from './ps6.png';

const slugify = (text) => text.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-');

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const isMobile = useMediaQuery('(max-width:600px)');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); // Hook for navigation
  const [tags, setTags] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

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

  const handleShareClick = (id , slug) => {
    const url = `${window.location.origin}/article/${id}/${slug}`;
    copyToClipboard(url);
  };

  useEffect(() => {
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
        setIsLoading(false);

        const tagsResponse = await fetch(`https://cdn.contentful.com/spaces/y10zqmp53ure/environments/master/tags?access_token=nS-_ikquqQv4RldFYL1pwAN3sgryTJExwxOokbmBYF4`);
        const tagsData = await tagsResponse.json();
        setTags(tagsData.items.map(tag => ({ id: tag.sys.id, name: tag.name })));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleTagChange = (event, values) => {
    setSelectedTags(values.map(v => v.id));
  };

  const toggleExpand = (id, title) => {
    const slug = slugify(title); // Generate the slug from the title
    navigate(`/article/${id}/${slug}`, { state: { post: posts.find(p => p.sys.id === id) } });
  };

  useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(post => post.metadata.tags.some(tag => selectedTags.includes(tag.sys.id)));
      setFilteredPosts(filtered);
    }
  }, [selectedTags, posts]);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div
    >
      <Box sx={{
        width: isMobile? '90vw' : '98vw',
        height: isMobile? '30vh' : '40vh',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'top',
      }}>
        <Card
          sx={{
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '24px',
            boxShadow: 'none',
            background: 'linear-gradient(135deg, rgba(101, 137, 198, 0.95), rgba(51, 87, 158, 0.9))',
            backgroundBlendMode: 'multiply',
            padding: isMobile ? '20px' : '0',
          }}
        >
  {isMobile ? (
    <Typography
      variant="h3"
      sx={{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.7rem' },
        fontFamily: 'Notable, sans-serif',
      }}
    >
built by athletes. for athletes. backed by science.    </Typography>
  ) : (
    <CardMedia
      component="img"
      image={ps}
      sx={{
        width: '100%',
        height: '100%',
        objectFit: 'overflow',
        borderRadius: 'inherit',
      }}
    />
  )}
        </Card>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', p: 2, width: 'auto' }}>
        <Autocomplete
          multiple
          id="tags-filter"
          sx={{ justifyContent: 'top', width: '80%' }}
          options={tags}
          getOptionLabel={(option) => option.name}
          onChange={handleTagChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="I want to learn about"
              placeholder="Start typing to filter"
              sx={{ minWidth: '250px' }}
            />
          )}
          value={tags.filter(tag => selectedTags.includes(tag.id))}
        />
      </Box>

      <Box sx={{ width: '80%', mx: 'auto', mt: 4 }}>
        <Grid container spacing={2}>
          {filteredPosts.map((post) => (
            <Grid item xs={12} sm={6} md={3} key={post.sys.id}>
              <Card sx={{ cursor: 'pointer' }} onClick={() => toggleExpand(post.sys.id, post.fields.title)}>
                {post.fields.titleImageUrl && (
                  <CardMedia
                    component="img"
                    image={post.fields.titleImageUrl}
                    alt={post.fields.title}
                    sx={{ height: '150px', objectFit: 'cover' }}
                  />
                )}
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6">{post.fields.title}</Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                  Published on: {new Date(post.fields.publishedOn).toLocaleDateString()} by {post.fields.authors.join(', ')}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>{post.fields.lede}</Typography>
                </Box>
                <IconButton onClick={(event) =>{
                    event.stopPropagation();
                   handleShareClick(post.sys.id, slugify(post.fields.title));
                   
                }} aria-label="share">
                  <ShareIcon />
                </IconButton>
              </Card>
            </Grid>
          ))}
        </Grid>
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
