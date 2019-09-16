import { createMuiTheme } from '@material-ui/core/styles';

import TruenoRg from './fonts/TruenoRg.otf';
import TruenoSBd from './fonts/TruenoSBd.otf';
import TruenoBlk from './fonts/TruenoBlk.otf';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: { borderRadius: '10rem' }
    },
    MuiButtonGroup: {
      root: { borderRadius: '10rem' }
    }
  },
  palette: {
    primary: {
      main: '#6442fb'
    },
    secondary: {
      main: '#0099ff'
    },
    error: {
      main: '#ea202c'
    }
  },
  typography: {
    h1: {
      fontFamily: [
        'TruenoBlk',
        'TruenoSBd',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ],
      color: '#36393d',
      fontSize: '3rem',
      src: `url(${TruenoBlk}) format('otf'), url(${TruenoSBd}) format('otf')`
    },
    h2: {
      fontFamily: [
        'TruenoBlk',
        'TruenoSBd',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ],
      color: '#36393d',
      fontSize: '1.625rem',
      textTransform: 'uppercase',
      src: `url(${TruenoBlk}) format('otf'), url(${TruenoSBd}) format('otf')`
    },
    h3: {
      fontFamily: [
        'TruenoRg',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ],
      color: '#747c8f',
      fontSize: '1.375rem',
      src: `url(${TruenoRg}) format('otf')`
    },
    body1: {
      fontFamily: [
        'TruenoRg',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ],
      color: '#747c8f',
      fontSize: '1rem',
      src: `url(${TruenoRg}) format('otf')`
    },
    body2: {
      fontFamily: [
        'TruenoRg',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ],
      color: '#36393d',
      fontSize: '0.8rem',
      src: `url(${TruenoRg}) format('otf')`
    },
    button: {
      fontFamily: ['TruenoSBd', 'Trueno', 'Arial', 'Helvetica', 'sans- serif'],
      fontSize: '1.6rem',
      color: '#36393d',
      textTransform: 'uppercase',
      textDecoration: 'none',
      src: `url(${TruenoSBd}) format('otf')`
    },
    caption: {
      fontFamily: ['TruenoSBd', 'Trueno', 'Arial', 'Helvetica', 'sans- serif'],
      fontSize: '0.5rem',
      color: '#747c8f',
      textTransform: 'uppercase',
      textDecoration: 'none',
      src: `url(${TruenoSBd}) format('otf')`
    }
  }
});

export default theme;
