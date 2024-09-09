import React, { useEffect, useState } from 'react';
import { Typography, Box, CardMedia, Container, Button, CircularProgress } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import commentBox from 'commentbox.io';

const PageWithComments = ({ uniqueId }) => {
  useEffect(() => {
    const removeCommentBox = commentBox('5660438020751360-proj', {
      createBoxUrl: () => `${window.location.origin}/${uniqueId}`,
    });

    return () => removeCommentBox();
  }, [uniqueId]);

  return <Box id={uniqueId} className="commentbox" style={{ width: '100%', overflowY: 'scroll' }} />;
};

const ArticlePage = () => {
  const { id } = useParams(); // Get articleId and slug from URL
  const navigate = useNavigate(); // For navigating to different pages
  const [post, setPost] = useState(null); // State to hold the article data
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const [error, setError] = useState(false); // State to track if there is an error

  // Fetch the article based on the id from the URL
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `https://cdn.contentful.com/spaces/y10zqmp53ure/environments/master/entries?access_token=nS-_ikquqQv4RldFYL1pwAN3sgryTJExwxOokbmBYF4&content_type=blogPost&include=2&sys.id=${id}`
        );
        const data = await response.json();

        if (data.items.length === 0) {
          setError(true);
          setIsLoading(false);
        } else {
          const postData = data.items[0];
          const titleImageAsset = data.includes.Asset.find(asset => asset.sys.id === postData.fields.titleImage.sys.id);
          const titleImageUrl = titleImageAsset?.fields.file.url || '';

          // Attach the image URL to the post data
          setPost({
            ...postData,
            fields: {
              ...postData.fields,
              titleImageUrl: `https:${titleImageUrl}`, // Add the full image URL
            },
          });

          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching article:', error);
        setError(true);
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  // Redirect or display an error message if the post is not found
  useEffect(() => {
    if (!isLoading && !post) {
      const timer = setTimeout(() => {
        navigate('/'); // Redirect to home page
      }, 3000);

      return () => clearTimeout(timer); // Clear timer on unmount
    }
  }, [isLoading, post, navigate]);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Container sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Article Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          The article you're looking for doesn't exist or the link is invalid. You will be redirected to the homepage.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/')}>
          Go to Homepage
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ my: 4, flex: 1 }}>
        <Typography variant="h2" gutterBottom>{post.fields.title}</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Published on: {new Date(post.fields.publishedOn).toLocaleDateString()} by {post.fields.authors.join(', ')}
        </Typography>
        {post.fields.titleImageUrl && (
          <CardMedia
            component="img"
            image={post.fields.titleImageUrl} // Use the full image URL
            alt={post.fields.title}
            sx={{ height: '400px', objectFit: 'cover', my: 2 }}
          />
        )}
        <Typography variant="body1" gutterBottom>
          {post.fields.lede}
        </Typography>

        <ReactMarkdown>{post.fields.body}</ReactMarkdown>
      </Box>
      <Box sx={{ mt: 4, flexShrink: 0 }}>
        <PageWithComments uniqueId={post.sys.id} />
      </Box>
    </Container>
  );
};

export default ArticlePage;
