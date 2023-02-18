import { Paper, Typography, Button, Grid } from '@mui/material';
import React from 'react';

export default function NoEmployeeDataCard({
  text: text = 'Employee Data Not Added yet',
  buttonText: buttonText = 'Add Details',
}) {
  return (
    <Grid container>
      <Paper
        sx={{
          borderRadius: 2.5,
          minWidth: 280,
          width: '100%',
          height: '25rem',
          margin: 5,
          padding:8,
          backgroundColor: '#FAFAFA',
        }}
        variant="outlined"
      >
        <Grid
          container
          direction={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={2}
          margin={"auto"}
        >
          <Grid item>
            <Typography variant="body_regular_tertiary" component="p">
              {text}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant={'contained'}
              sx={{
                fontSize: '1.8rem',
                fontWeight: 500,
                padding: '8px 64px',
                borderRadius: 1.25,
                textTransform: 'none',
              }}
            >
              {buttonText}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
