import { Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import * as React from 'react';

export default function TextInput(props) {
  const {
    label,
    register,
    watch,
    name,
    error,
    isRequired,
    isMultiline,
    setValue,
    ...rest
  } = props;

  const [val, setVal] = React.useState('');
  React.useEffect(
    (_) => {
      const val = watch(name);
      if (val) {
        setValue(name, val);
        setVal(val);
      }
    },
    [watch(name)]
  );
  console.log(val, 'lklk');
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
        }}
      >
        <InputBase
          size="small"
          sx={{
            m: 1.5,
            flex: 1,
            fontSize: '1.4rem',
            fontWeight: 500,
            color: 'text.secondary',
            '& .MuiInputBase-input': {
              p: 0,
            },
          }}
          error={!!error?.message}
          placeholder={label}
          inputProps={{ 'aria-label': label }}
          {...(register && register)}
          {...rest}
          multiline={isMultiline}
          rows={4}
        />
      </Paper>
      {error?.message && (
        <Typography variant="h6" sx={{ marginLeft: '4px', color: 'red' }}>
          {error.message}
        </Typography>
      )}
    </div>
  );
}
