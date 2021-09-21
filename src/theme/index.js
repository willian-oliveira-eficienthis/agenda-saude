import { createTheme, } from '@material-ui/styles';
import React from 'react';

const theme = createTheme({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: 0,
  },
    typography: {
      fontFamily: 'Poppins',
      fontSize: 14,
    },
    palette: {
      common: {
        black: '#000',
        white: 'rgba(250, 250, 250, 1)'
      },
      background: {
        paper: '#fff',
        default: '#fafafa'
      },
      primary: {
        light: 'rgba(70, 213, 203, 1)',
        main: 'rgba(4, 36, 48, 1)',
        dark: 'rgba(4, 36, 48, 1)',
        contrastText: 'rgba(255, 255, 255, 1)'
      },
      secondary: {
        light: 'rgba(26, 78, 96, 1)',
        main: 'rgba(70, 213, 203, 1)',
        dark: 'rgba(17, 49, 60, 1)',
        contrastText: '#fff'
      },
      error: {
        light: 'rgba(70, 213, 203, 1)',
        main: 'rgba(26, 78, 96, 1)',
        dark: 'rgba(2, 31, 41, 1)',
        contrastText: '#fff'
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.38)',
        hint: 'rgba(0, 0, 0, 0.38)'
      },
    }
  }

)
export default theme