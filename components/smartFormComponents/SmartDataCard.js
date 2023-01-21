import { Button, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

export default function SmartDataCard({ field }) {
  const fields = {
    title: 'Personal Details',
    fields: [
      {
        label: 'First Name',
        value: 'Mazoor',
        type: 'DataCard',
      },
      {
        label: 'First Name',
        value: 'Mazoor',
        type: 'DataCard',
      },
      {
        label: 'First Name',
        value: 'Mazoor',
        type: 'DataCard',
      },
      {
        label: 'First Name',
        value: 'Mazoor',
        type: 'DataCard',
      },
      {
        label: 'First Name',
        value: 'Mazoor',
        type: 'DataCard',
      },
      {
        label: 'First Name',
        value: 'Mazoor',
        type: 'DataCard',
      },
    ],
  };
  return (
    <>
    <Grid padding={2}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ padding: 0, paddingY: 2 }}
      >
        <Stack>
          <Typography variant="h3_bold_secondary" component="h3">
            {fields.title}
          </Typography>
        </Stack>
        <Stack>
          <Button
            // variant={'outlined'}
            sx={{
              fontSize: '1.2rem',
              fontWeight: 500,
              // padding: '8px 32px',
              borderRadius: 1.25,
              textTransform: 'none',
              // margin: 2,
              // border: 'solid',
            }}
            onClick={() => {
              // append();
            }}
          >
            <BorderColorOutlinedIcon fontSize="medium" />
            Edit Details
          </Button>
        </Stack>
      </Stack>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {fields.fields.map((field, index) => {
          return (
            <Grid item md={3} key={index}>
              <Grid container direction={'column'}>
                <Grid item>
                  <Typography variant="body_medium_muted" component="p" mb={1}>
                    {field.label}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body_bold_secondary"
                    component="p"
                    mb={1}
                  >
                    {field?.value}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      </Grid>
    </>
  );
}
