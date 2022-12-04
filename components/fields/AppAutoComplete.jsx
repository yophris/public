import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { InputBase, Paper, Typography } from '@mui/material';

const options = ['Option 1', 'Option 2'];

//need to complete, as of now working,
//do it as async, connect with our component
export default function AppAutocomplete() {
  return (
    <div>
      <Typography variant="body_medium_muted" component="p" mb={1}>
        {'Auto Complete'}
        {/* {label} */}
        {/* {isRequired && ( */}
        <Typography
          variant="body_bold"
          sx={{ marginLeft: '4px', color: '#F53E40' }}
        >
          *
        </Typography>
        {/* )} */}
      </Typography>
      <Autocomplete
        sx={{
          '.MuiAutocomplete-option': {
            color: '#333',
            fontSize: '1.4rem',
          },
        }}
        id="app-autocomplete"
        options={options}
        renderOption={(props, option, state) => {
          console.log('render option: ', props, option, state);
          return (
            <li {...props}>
              <Typography variant="body_medium_secondary" component="p">
                {option}
              </Typography>
            </li>
          );
        }}
        renderInput={(params) => (
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
            ref={params.InputProps.ref}
          >
            <InputBase
              type="text"
              {...params.inputProps}
              sx={{
                ml: 1,
                flex: 1,
                fontSize: '1.4rem',
                fontWeight: 500,
                color: 'text.secondary',
              }}
            />
          </Paper>
        )}
      />
    </div>
  );
}
