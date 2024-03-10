import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Typography, Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

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

  // Toggle visibility of the blog post body
  const toggleExpand = (id) => {
    setPosts(posts.map(post => {
      if (post.sys.id === id) {
        post.isExpanded = !post.isExpanded;
      }
      return post;
    }));
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 768, mx: 'auto', mt: 4, px: 2 }}>
      {posts.map((post) => (
        <Box key={post.sys.id} sx={{ mb: 5 }}>
          {post.fields.titleImageUrl && (
            <img
              src={post.fields.titleImageUrl} // Now directly using the image URL from the post fields
              alt={post.fields.title}
              style={{ width: '100%', height: 'auto', borderRadius: matches ? '8px' : '0', marginTop: '20px' }}
            />
          )}
          <Typography variant="h4" component="h2" sx={{ my: 2, fontWeight: 'bold' }}>
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
            <ReactMarkdown>{post.fields.body}</ReactMarkdown>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default BlogPosts;
