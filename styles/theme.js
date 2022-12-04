import { createTheme } from '@mui/material';
import NextLink from 'next/link';
import { forwardRef } from 'react';

const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
  return <NextLink ref={ref} {...props} />;
});

//all the MUI default styles can be customized here
//Typography Regular: 400, medium: 500, semi-bold: 600
const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehaviour,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehaviour,
      },
    },
  },
  palette: {
    primary: {
      main: '#377DFF',
    },
    secondary: {
      main: '#5B2F51',
    },
    tertiary: {
      main: '#70BC7C',
    },
    background: {
      main: '#F8FAFC',
    },
    text: {
      primary: '#0061EC',
      secondary: '#333333',
      tertiary: '#444444',
      muted: '#6F767E',
      light: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    fontSize: 10,
    color: '#333',
    h0: { fontSize: '2.5rem', fontWeight: 500 },
    h1_stats: { fontSize: '2.2rem', fontWeight: 600 },
    h1_bold: { fontSize: '2rem', fontWeight: 600 },
    h1_bold_light: { fontSize: '2rem', fontWeight: 600, color: '#fff' },
    h1_bold_primary: { fontSize: '2rem', fontWeight: 600, color: '#0061EC' },
    h1_bold_secondary: { fontSize: '2rem', fontWeight: 600, color: '#333333' },
    h1_medium: { fontSize: '2rem', fontWeight: 500 },
    h1_medium_secondary: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#333333',
    },
    h1_regular: { fontSize: '2rem', fontWeight: 400 },

    h2_bold: { fontSize: '1.8rem', fontWeight: 600 },
    h2_bold_secondary: {
      fontSize: '1.8rem',
      fontWeight: 600,
      color: '#333333',
    },
    h2_medium: { fontSize: '1.8rem', fontWeight: 500 },
    h2_medium_secondary: {
      fontSize: '1.8rem',
      fontWeight: 500,
      color: '#333333',
    },
    h2_regular: { fontSize: '1.8rem', fontWeight: 400 },

    h3_bold: { fontSize: '1.6rem', fontWeight: 600 },
    h3_bold_primary: {
      fontSize: '1.6rem',
      fontWeight: 600,
      color: '#0061EC',
    },
    h3_bold_secondary: {
      fontSize: '1.6rem',
      fontWeight: 600,
      color: '#333',
    },
    h3_bold_muted: {
      fontSize: '1.6rem',
      fontWeight: 500,
      color: '#6F767E',
    },
    h3_bold_light: { fontSize: '1.6rem', fontWeight: 600, color: '#fff' },
    h3_medium: { fontSize: '1.6rem', fontWeight: 500 },
    h3_medium_primary: {
      fontSize: '1.6rem',
      fontWeight: 500,
      color: '#0061EC',
    },
    h3_medium_secondary: {
      fontSize: '1.6rem',
      fontWeight: 500,
      color: '#333',
    },
    h3_medium_muted: { fontSize: '1.6rem', fontWeight: 500, color: '#6F767E' },
    h3_regular: { fontSize: '1.6rem', fontWeight: 400 },

    body_bold: { fontSize: '1.4rem', fontWeight: 600 },
    body_bold_primary: {
      fontSize: '1.4rem',
      fontWeight: 600,
      color: '#0061EC',
    },
    body_bold_secondary: {
      fontSize: '1.4rem',
      fontWeight: 600,
      color: '#333333',
    },
    body_medium: { fontSize: '1.4rem', fontWeight: 500 },
    body_medium_primary: {
      fontSize: '1.4rem',
      fontWeight: 500,
      color: '#0061EC',
    },
    body_medium_secondary: {
      fontSize: '1.4rem',
      fontWeight: 500,
      color: '#333333',
    },
    body_medium_tertiary: {
      fontSize: '1.4rem',
      fontWeight: 500,
      color: '#444444',
    },
    body_medium_muted: {
      fontSize: '1.4rem',
      fontWeight: 500,
      color: '#6F767E',
    },
    body_medium_light: {
      fontSize: '1.4rem',
      fontWeight: 500,
      color: '#FFFFFF',
    },

    body_regular: { fontSize: '1.4rem', fontWeight: 400 },
    body_regular_primary: {
      fontSize: '1.4rem',
      fontWeight: 400,
      color: '#0061EC',
    },
    body_regular_secondary: {
      fontSize: '1.4rem',
      fontWeight: 400,
      color: '#333333',
    },
    body_regular_tertiary: {
      fontSize: '1.4rem',
      fontWeight: 400,
      color: '#444444',
    },
    body_regular_muted: {
      fontSize: '1.4rem',
      fontWeight: 400,
      color: '#6F767E',
    },
    body_regular_light: {
      fontSize: '1.4rem',
      fontWeight: 400,
      color: '#FFFFFF',
    },

    subbody_medium: {
      fontSize: '1.3rem',
      fontWeight: 500,
    },
    subbody_medium_muted: {
      fontSize: '1.3rem',
      fontWeight: 500,
      color: '#6F767E',
    },
    subbody_regular_muted: {
      fontSize: '1.3rem',
      fontWeight: 400,
      color: '#6F767E',
    },

    smallcopy_bold_light: {
      fontSize: '1.2rem',
      fontWeight: 600,
      color: '#fff',
    },
    smallcopy_medium_secondary: {
      fontSize: '1.2rem',
      fontWeight: 500,
      color: '#333',
    },
    smallcopy_medium_muted: {
      fontSize: '1.2rem',
      fontWeight: 500,
      color: '#6F767E',
    },
    smallcopy_regular_tertiary: {
      fontSize: '1.2rem',
      fontWeight: 400,
      color: '#444',
    },
    smallcopy_regular_muted: {
      fontSize: '1.2rem',
      fontWeight: 400,
      color: '#6F767E',
    },
  },
});

// theme.typography.h3_bold_secondary = {
//   '@media (min-width:600px)': {
//     fontSize: '2.2rem',
//   },
// };

export default theme;
