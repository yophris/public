import * as React from 'react';
import { IconButton, Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import AppDivider from 'components/AppDivider';
import Image from 'next/image';
import { rest } from 'lodash';

export default function AppCountInput({ val, handleClick, ...rest }) {
  const {
    label,
    register,
    name,
    setValue,
    watch,
    error,
    isRequired,
    isMultiline,
  } = rest;

  return (
    <div>
      <Typography variant="body_medium_muted" component="p" mb={1}>
        {label}
        {isRequired && (
          <Typography
            variant="body_bold"
            sx={{ marginLeft: '4px', color: '#F53E40' }}
          >
            *
          </Typography>
        )}
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
          width: '169px',
        }}
      >
        <IconButton
          onClick={() => handleClick('subtract')}
          sx={{ p: '10px 20px' }}
          disableRipple
        >
          <Image src="/images/minusIcon.svg" width={8} height={8} alt="info" />
        </IconButton>
        <AppDivider direction="vertical" />
        <InputBase
          sx={{
            mx: 1,
            my: 1.4,
            flex: 1,
            fontSize: '1.4rem',
            fontWeight: 500,
            color: 'text.secondary',
            '& .MuiInputBase-input': {
              p: 0,
              textAlign: 'center',
            },
          }}
          readOnly
          value={val}
        />
        <AppDivider direction="vertical" />
        <IconButton
          onClick={() => handleClick('add')}
          sx={{ p: '10px 20px' }}
          disableRipple
        >
          <Image src="/images/plusIcon.svg" width={8} height={8} alt="info" />
        </IconButton>
      </Paper>
      {error?.message && (
        <Typography variant="h6" sx={{ marginLeft: '4px', color: 'red' }}>
          {error.message}
        </Typography>
      )}
    </div>
  );
}
