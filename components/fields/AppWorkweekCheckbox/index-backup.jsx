import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import AppColorCircle from 'components/AppColorCircle';
import WorkTypeMenu from './WorkTypeMenu';

const DAYS = [
  {
    label: 'SUN',
    id: 'sunday',
  },
  {
    label: 'MON',
    id: 'monday',
  },
  {
    label: 'TUE',
    id: 'tuesday',
  },
  {
    label: 'WED',
    id: 'wednesday',
  },
  {
    label: 'THU',
    id: 'thursday',
  },
  {
    label: 'FRI',
    id: 'fri',
  },
  {
    label: 'SAT',
    id: 'saturday',
  },
];

//D_FWD, WEEKOFF, D_FHWD, remote,

export default function AppWorkweekCheckbox({
  label,
  register,
  name,
  error,
  ...restProps
}) {
  const [workweek, setWorkweek] = React.useState({
    sunday: false,
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
  });
  const [timesheet, setTimesheet] = React.useState({
    sunday: 'off',
    monday: 'full',
    tuesday: 'half',
    wednesday: 'full',
    thursday: 'full',
    friday: 'half',
    saturday: 'off',
  });

  //handling worktype menu
  const anchorEl = React.useRef([]);
  const [menuOpen, setMenuOpen] = React.useState(null);
  // const handleClick = (event) => {
  //   setMenuOpen(event.currentTarget);
  // };
  const handleClose = () => {
    setMenuOpen(null);
  };

  const handleChange = (event, i) => {
    console.log('anchorEl in index', anchorEl.current[i]);
    setMenuOpen(anchorEl.current[i]);
    setWorkweek({
      ...workweek,
      [event.target.name]: event.target.checked,
    });
    setTimesheet({
      ...timesheet,
      [event.target.name]: event.target.checked ? 'full' : 'off',
    });
  };

  //   const { gilad, jason, antoine } = state;
  //   const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  //which days, half or full day,
  //selectedDays=[{day: 'MON', isHalf: true, isFull: false}]

  return (
    <>
      <FormGroup>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          {...restProps}
        >
          {DAYS.map((days, i) => (
            <Stack
              key={days.id}
              alignItems="center"
              sx={{
                width: 69,
                height: 78,

                //   background: '#F8FAFC',
                background:
                  timesheet[days.id] === 'off'
                    ? '#F8FAFC'
                    : timesheet[days.id] === 'full'
                    ? '#4586FF'
                    : 'linear-gradient(to right, #4586FF 50%, #8CB4FF 50%)',
                border: '1px solid #EFEFEF',
                borderRadius: '8px',
              }}
              ref={(el) => (anchorEl.current[i] = el)}
            >
              <FormControlLabel
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  margin: 0,
                }}
                control={
                  <Checkbox
                    disableRipple
                    checked={workweek[days.id]}
                    onChange={(e) => handleChange(e, i)}
                    name={days.id}
                    icon={<AppColorCircle size={23} colorVal="#EFEFEF" />}
                    checkedIcon={
                      <Image
                        src="/images/circleTickBgWhite.svg"
                        width={24}
                        height={24}
                        alt="checked"
                      />
                    }
                  />
                }
                label={
                  <Typography
                    variant="body_medium"
                    sx={{
                      color:
                        timesheet[days.id] === 'off'
                          ? 'text.secondary'
                          : 'text.light',
                    }}
                    component="p"
                  >
                    {days.label}
                  </Typography>
                }
              />
            </Stack>
          ))}
        </Stack>
      </FormGroup>
      <WorkTypeMenu
        anchorEl={menuOpen}
        handleClick={handleChange}
        handleClose={handleClose}
      />
    </>
  );
}
