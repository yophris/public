import { Stack, Typography } from '@mui/material';
import * as React from 'react';

//Month
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export default function UpcomingHolidays({ dateData, holiday, themeColor }) {
  const dateObj = new Date(dateData);
  const monthIndex = dateObj.getMonth();
  const dateNum = dateObj.getDate();
  const dayIndex = dateObj.getDay();

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        backgroundColor: '#FAFBFC',
        padding: 1,
        borderRadius: 1,
        borderLeft: `4px solid ${themeColor}`,
      }}
    >
      <Stack
        sx={{
          border: `0.5px solid ${themeColor}`,
          borderRadius: '2.14286px',
          marginLeft: 2.5,
          height: 46,
          width: 46,
        }}
        justifyContent="start"
      >
        <Stack>
          <Typography
            sx={{ backgroundColor: themeColor, color: '#fff' }}
            variant="smallcopy_bold_light"
            component="p"
          >
            {months[monthIndex]}
          </Typography>
        </Stack>
        <Stack justifyContent="center" sx={{ height: '100%' }}>
          <Typography variant="body_medium_tertiary" component="p">
            {dateNum}
          </Typography>
        </Stack>
      </Stack>

      <Stack direction="column" sx={{ marginLeft: 2 }}>
        <Typography
          variant="body_medium_secondary"
          component="p"
          sx={{ textAlign: 'left' }}
        >
          {holiday}
        </Typography>
        <Typography variant="subbody_regular_muted" sx={{ textAlign: 'left' }}>
          {days[dayIndex]}
        </Typography>
      </Stack>
    </Stack>
  );
}
