import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent, Typography } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';

const OurStory = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          February 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Foundation
          </Typography>
          <Typography>Our journey began in a small office with a big idea.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          March 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Expansion
          </Typography>
          <Typography>We opened our first branch in another city.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          April 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Going Global
          </Typography>
          <Typography>We expanded our services internationally.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default OurStory;
