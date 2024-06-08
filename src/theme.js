import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0c594a',
      contrastText: '#ffffff', // Set text color for primary buttons to white
    },
    secondary: {
      main: '#47c7af',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none', // Keeps button text as is, without converting to uppercase
    },
  },
  spacing: 8, // Default spacing scale (1 unit = 8px)
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none', // Keeps button text as is, without converting to uppercase
        },
        containedPrimary: {
          color: '#ffffff', // Override text color for contained primary buttons
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '8px 0',
        },
      },
    },
  },
});

export default theme;
