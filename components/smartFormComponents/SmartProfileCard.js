import { Box, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';

export default function SmartProfileCard({ field }) {
  return (
    <Grid
      container
      direction="row"
      columnGap={3}
      sx={{ p: 1, flex: 1 }}
      alignItems="center"
    >
      <Image
        alt={'profile pic'}
        src="/images/profilePicSample.svg"
        width={160}
        height={175}
      />
      <Grid item sx={{ flex: 1 }}>
        <Grid container direction="column" rowGap={2}>
          <Grid item>
            <Box>
              <Typography variant="h1_bold_secondary" component="h1">
                {field.name}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body_medium_muted" component="p">
                Emp ID:{' '}
                <Typography variant="h3_medium_secondary" component="span">
                  {field.empId}
                </Typography>
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Stack
              direction="row"
              alignItems="center"
              rowGap={2}
              columnGap={12}
              flexWrap="wrap"
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <LocationOnOutlinedIcon
                  fontSize="large"
                  sx={{ color: 'text.muted' }}
                />
                <Typography variant="h3_medium_secondary" component="span">
                  {field.location}
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <EmailOutlinedIcon
                  fontSize="large"
                  sx={{ color: 'text.muted' }}
                />
                <Typography variant="h3_medium_secondary" component="h3">
                  {field.email}
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <PhoneEnabledOutlinedIcon
                  fontSize="large"
                  sx={{ color: 'text.muted' }}
                />
                <Typography variant="h3_medium_secondary" component="h3">
                  {field.phoneNumber}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction="row" rowGap={2} columnGap={12} flexWrap="wrap">
              <Box>
                <Typography variant="body_medium_muted" component="p">
                  Job Title
                </Typography>
                <Typography variant="h3_medium_secondary" component="h3">
                  {field?.jobTitle}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body_medium_muted" component="p">
                  Department
                </Typography>
                <Typography variant="h3_medium_secondary" component="h3">
                  {field?.department}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body_medium_muted" component="p">
                  Divison
                </Typography>
                <Typography variant="h3_medium_secondary" component="h3">
                  {field?.division}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body_medium_muted" component="p">
                  Reporting To
                </Typography>
                <Typography variant="h3_medium_secondary" component="h3">
                  {field?.reportingTo}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
