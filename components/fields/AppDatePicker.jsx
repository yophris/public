import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from 'moment/moment';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { createTheme, ThemeProvider, Typography } from '@mui/material';

//Need to work on year customization
const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          backgroundColor: '#F8FAFC',
          border: '1px solid #EFEFEF',
          borderRadius: '8px',
          '& .MuiOutlinedInput-notchedOutline': {
            border: 0,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: '1.4rem',
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          fontSize: '1.4rem',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '2rem',
        },
      },
    },
    MuiYearPicker: {
      styleOverrides: {
        root: {
          yearButton: {
            fontFamily: ['Poppins', 'sans-serif'].join(','),
            fontSize: '1.4rem',
          },
        },
      },
    },

    PrivatePickersYear: {
      styleOverrides: {
        root: {
          yearButton: {
            fontFamily: ['Poppins', 'sans-serif'].join(','),
            fontSize: '1.4rem',
          },
        },
      },
    },

    MuiPickersCalendarHeader: {
      styleOverrides: {
        label: {
          fontFamily: ['Poppins', 'sans-serif'].join(','),
          fontSize: '1.4rem',
        },
        switchViewButton: {
          fontSize: '2.4rem',
        },
      },
    },
  },
});

export default function AppDatePicker(props) {
  const { name, label, register } = props;
  console.log('in date picker: ', name, register(name));

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Typography variant="body_medium_muted" component="p" mb={1}>
        {label}
        <Typography
          variant="body_bold"
          sx={{ marginLeft: '4px', color: '#F53E40' }}
        >
          *
        </Typography>
      </Typography>
      <ThemeProvider theme={theme}>
        <DesktopDatePicker
          sx={{
            '& .MuiTypography-root-MuiDayPicker-weekDayLabel': {
              fontSize: '2rem',
            },
          }}
          inputFormat="MM-DD-YYYY"
          {...register(name)}
          renderInput={(params) => {
            console.log('params:', params);
            return (
              <TextField
                sx={{
                  width: '100%',
                  '& .MuiInputBase-root': {
                    fontFamily: ['Poppins', 'sans-serif'].join(','),
                    fontSize: '1.4rem',
                    color: '#333',
                    fontWeight: 500,
                    '& .MuiInputBase-input': {
                      padding: 1.5,
                    },
                  },
                  '& .MuiSvgIcon-root': { fontSize: '1.8rem' },
                }}
                {...params}
              />
            );
          }}
        />
      </ThemeProvider>
    </LocalizationProvider>
  );
}