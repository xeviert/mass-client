import * as React from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Hero from './Hero';
import Highlights from './Highlights';
import Features from './Features';

export default function LandingPage() {

  return (
    <>
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Features />
        <Divider />
        <Highlights />
        <Divider />
      </Box>
    </>
  );
}