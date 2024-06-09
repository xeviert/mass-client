import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

export default function Footer() {
  const theme = useTheme(); // This hook provides access to the theme

  return (
    <Box component="footer" sx={{
      width: '100%',
      py: 2,
      px: 3,
      mt: 'auto',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      textAlign: 'center',
    }}>
      <Typography variant="body1">
        Mutual Aid & Shared Support
      </Typography>
    </Box>
  );
}
