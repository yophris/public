import * as React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { Box, Divider, Stack, Typography } from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)(
  ({ theme, progresscolor }) => {
    return {
      height: 10,
      borderRadius: 5,
      [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
          theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
      },
      [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: progresscolor,
      },
    };
  }
);

export default function AppProgressBar({
  total,
  consumed,
  light = true,
  colorVal = '#FEDF88',
}) {
  return (
    <Stack sx={{ height: '100%' }} justifyContent="space-around">
      <Typography variant={light ? 'body_medium_light' : 'body_medium_muted'}>
        {consumed} of {total} completed
      </Typography>
      <BorderLinearProgress
        variant="determinate"
        value={(consumed / total) * 100}
        sx={{ '& .MuiLinearProgress-bar': { backgroundColor: colorVal } }}
      />
    </Stack>
  );
}
