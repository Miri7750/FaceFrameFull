

// src/theme/customTheme.ts
import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00e5ff', // טורקיז - מהלוגו
    },
    secondary: {
      main: '#ff4081', // ורוד-סגול
    },
    background: {
      default: '#0b0f19',
      paper: '#121826',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
    info: {
      main: '#7c4dff', // סגול זוהר
    },
    warning: {
      main: '#ff6e40', // כתום מהאייקונים
    },
  },
  typography: {
    fontFamily: '"Orbitron", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
});

export default customTheme;