import React from 'react';
import { Box } from '@mui/material';

const Container = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '16px',
        width: '100%'
      }}
    >
      {children}
    </Box>
  );
}

export default Container;
