import React from "react";
import { Box, Card, CardMedia } from "@mui/material";
import jadon from './jadon.png'
import dj from './dj.png'
import lovett from './lovett.png'

const galleryItems = [
  jadon, // replace with your image URLs
  dj,
  lovett,
];

const HorizontalGallery = () => {
  return (
    <Box
    sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Stacks on mobile, row on desktop
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
    <Box
      sx={{
        display: "flex",
        overflowX: "auto", // enable horizontal scrolling
        gap: 3, // space between items
        justifyContent: "flex-start", // align items to start
        scrollSnapType: "x mandatory", // smooth snapping
        "&::-webkit-scrollbar": {
          display: "none", // hide scrollbar
        },
      }}
    >
      {galleryItems.map((item, index) => (
        <Card
          key={index}
          sx={{
            minWidth: {
              xs: "85%", // one image at a time on mobile
              sm: "calc(100% / 2)", // two images on small screens
              md: "calc(100% / 3)", // three images on medium screens
              lg: "calc(100% / 4)", // four images on larger screens
            },
            scrollSnapAlign: "start", // snap to the start of each card
            flexShrink: 0,
            borderRadius: "16px", // rounded corners
            boxShadow: "none", // no shadow
          }}
        >
          <CardMedia
            component="img"
            image={item}
            alt={`Athlete ${index + 1}`}
            sx={{
              objectFit: "cover", // cover the entire card area without distortion
              width: "100%", // make the image responsive
              height: {
                xs: "80vh", // take up 80% of the viewport height on mobile
                sm: "70vh", // slightly smaller on small screens
                md: "60vh", // even smaller on medium screens
              },
              borderRadius: "16px", // match the card's rounded corners
            }}
          />
        </Card>
      ))}
    </Box>
    </Box>
  );
};

export default HorizontalGallery;
