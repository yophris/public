import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { green } from '@mui/material/colors';
import { Typography } from '@mui/material';

export default function ProfileInfo({
  profile,
  isHeading = false,
  direction = 'column',
}) {
  return (
    <Stack
      direction={direction}
      alignItems="center"
      spacing={direction === 'row' ? 2 : 1}
    >
      <Avatar
        alt="Remy Sharp"
        sx={{
          bgcolor: green[500],
          width: 50,
          height: 50,
          border: '1px solid #EFEFEF',
        }}
        src={profile.img}
      >
        <Typography variant="h1_bold_secondary" component="h1">
          {profile.maintext.substr(0, 1)}
        </Typography>
      </Avatar>
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems={direction === 'row' ? 'start' : 'center'}
        sx={{ height: '100%' }}
      >
        <Typography
          variant={
            isHeading ? 'h1_bold_secondary' : 'smallcopy_medium_secondary'
          }
          component={isHeading ? 'h1' : 'h6'}
        >
          {profile.maintext}
        </Typography>
        <Typography
          variant={isHeading ? 'body_regular_muted' : 'smallcopy_medium_muted'}
        >
          {profile.subtext}
        </Typography>
      </Stack>
    </Stack>
  );
}
