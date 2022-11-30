import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function AttendanceCard() {
  return (
    <Stack
      direction="column"
      sx={{ height: '60%' }}
      spacing={2}
      justifyContent="space-between"
    >
      <Stack direction="row" spacing={3} alignItems="center">
        <img alt="time" src={'../../images/time.png'} />
        <Stack direction="column" justifyContent="center" alignItems="start">
          <Typography variant="subbody_regular_muted">
            Avg. Working Hours
          </Typography>
          <Typography variant="h3_bold_secondary" component="h3">
            08h 40m / Day
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={3} alignItems="center">
        <img alt="countdown" src={'../../images/countdown.png'} />
        <Stack direction="column" justifyContent="center" alignItems="start">
          <Typography variant="subbody_regular_muted">
            Total Over Time
          </Typography>
          <Typography variant="h3_bold_secondary" component="h3">
            28h 30m
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
