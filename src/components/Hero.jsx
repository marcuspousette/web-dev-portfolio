import React from 'react';
import machero from '../assets/mac-hero.png';
import { Box, Stack, Button, Typography } from '@mui/material';

export default function Hero() {
  return (
    <Stack
      direction={{ sm: 'column', md: 'row' }}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ height: { xs: 'calc(100vh - 56px)', md: 'calc(80vh - 64px)' } }}
      spacing={{ xs: 4, md: 0 }}
    >
      <Stack sx={{ width: { sm: '100%', md: '50%' } }} spacing={2}>
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontSize: { xs: '2.5rem', md: '3.75rem' } }}
        >
          Boost Conversions with a Page Speed Pro
        </Typography>
        <Typography variant="body1">
          Marcus Pousette specializes in optimizing page speed and performance
          to increase conversions and decrease bounce rate. With his expertise,
          he helps companies improve user experience and drive more sales.
        </Typography>
        <Stack direction={'row'} spacing={2}>
          <Button variant="contained">Learn More</Button>
          <Button variant="outlined" color="inherit">
            Contact Me
          </Button>
        </Stack>
      </Stack>
      <Box sx={{ width: { sm: '100%', md: '50%' } }}>
        <img src={machero} alt="Marcus Pousette" width={'100%'} />
      </Box>
    </Stack>
  );
}
