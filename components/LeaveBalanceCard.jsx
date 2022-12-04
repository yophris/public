import * as React from 'react';
import Stack from '@mui/material/Stack';
import ProgressBar from './ProgressBar';

export default function LeaveBalanceCard() {
  return (
    <Stack spacing={2}>
      <ProgressBar
        text="Sick Leave"
        total={12}
        consumed={2}
        colorVal="#ED9A9B"
      />
      <ProgressBar
        text="Annual Leave"
        total={14}
        consumed={5}
        colorVal="#FEDF88"
      />
    </Stack>
  );
}
