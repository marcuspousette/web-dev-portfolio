import React from 'react';
import { Box, Stack, Typography, Avatar, Container } from '@mui/material';
import headshot from '../assets/mac-hero.png';
import leftImg from '../assets/10.png';
import rightImg from '../assets/07.png';

export default function ReviewSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '700px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img
        src={rightImg}
        alt=""
        style={{
          position: 'absolute',
          right: '-67px',
          width: '500px',
          bottom: '20px',
        }}
      />
      <img
        src={leftImg}
        alt=""
        style={{
          position: 'absolute',
          left: '-121px',
          width: '500px',
          top: '-100px',
        }}
      />

      <Container maxWidth="sm">
        <Stack
          direction={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{ textAlign: 'center', fontSize: '1.25rem' }}
          >
            Marcus's expertise in page speed optimization has greatly improved
            our website's performance. Our conversions have increased by 20%
            since working with him.
          </Typography>
          <Avatar alt="John Doe" src={headshot} />
          <Typography variant="h5" gutterBottom>
            John Doe
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Head of Cool stuff
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
