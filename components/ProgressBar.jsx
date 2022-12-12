import * as React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { Box, Divider, Stack, Typography } from '@mui/material';
import AppColorCircle from './AppAppColorCircle';

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

export default function ProgressBar({
  text,
  total,
  consumed,
  colorVal = '#FEDF88',
}) {
  return (
    <Stack direction="column" spacing={1}>
      <Stack direction="row" spacing={1} alignItems="center">
        <AppColorCircle size={13} colorVal={colorVal} />
        <Typography variant="body_medium_secondary" component="p">
          {text}
        </Typography>
      </Stack>
      <BorderLinearProgress
        variant="determinate"
        value={(consumed / total) * 100}
        progresscolor={colorVal}
      />
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="body_medium_tertiary" component="span">
          {total - consumed}{' '}
          <Typography variant="body_medium_muted" component="span">
            Available
          </Typography>
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Typography variant="body_medium_tertiary" component="span">
          {consumed}{' '}
          <Typography variant="body_medium_muted" component="span">
            Available
          </Typography>
        </Typography>
      </Stack>
    </Stack>
  );
}
