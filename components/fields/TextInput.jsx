import { Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import * as React from 'react';

export default function TextInput(props) {
  const { label, register, name, error } = props;

  console.log(error?.message)
  return (
    <div>
      <Typography variant="body_medium_muted" component="p" mb={1}>
        {label} 
        <Typography
          variant="body_bold"
          sx={{ marginLeft: '4px', color: '#F53E40' }}
        >
          *
        </Typography>
      </Typography>
      <Paper
        elevation={0}
        sx={{
          alignItems: 'center',
          backgroundColor: 'background.main',
          border: '1px solid #EFEFEF',
          borderRadius: 2,
          display: 'flex',
          marginTop: 0,
          p: 1,
        }}
      >
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            fontSize: '1.4rem',
            fontWeight: 500,
            color: 'text.secondary',
          }}
          error={!!error?.message}
         
          placeholder={label}
          inputProps={{ 'aria-label': label }}
          {...register(name)}
        />
       
      </Paper>
      {error?.message && (
        <Typography variant="h6" sx={{ marginLeft: '4px', color: 'red' }} >
          {error.message}
        </Typography>
      )}
    </div>
  );
}
