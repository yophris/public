import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import {
  CircularProgress,
  InputAdornment,
  InputBase,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useQuery, useQueryClient } from 'react-query';

//demo only
function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function AppAutocomplete(props) {
  const {
    label,
    options = [{ text: '', value: '' }],
    register,
    name,
    error,
    isRequired,
    watch,
    setValue
  } = props;

  console.log('register autocomplete: ', register(name));
  const [open, setOpen] = React.useState(false);
  const [asyncOptions, setAsyncOptions] = React.useState([]);
  const loading = open && asyncOptions.length === 0;
  const [val, setVal] = React.useState('');

  // Fetch Data

  React.useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }
    (async () => {
      await sleep(1e3); // For demo purposes.
      //do throttling and check the key length if we need
      if (active) {
        //call api to fetch the options
        setAsyncOptions([...options]);
      }
    })();
    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setAsyncOptions([]);
    }
  }, [open]);

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
      <Autocomplete
        popupIcon={
          loading ? (
            <CircularProgress color="inherit" size={20} />
          ) : (
            <KeyboardArrowDownIcon />
          )
        }
        sx={{
          '.MuiAutocomplete-option': {
            color: '#333',
            fontSize: '1.4rem',
          },
          '.MuiAutocomplete-endAdornment': {
            svg: {
              fontSize: '2rem',
              fontWeight: 500,
              color: 'text.secondary',
            },
          },
        }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionLabel={(option) => option.text}
        options={asyncOptions}
        loading={loading}
        renderOption={(props, option, state) => (
          <li {...props}>
            <Typography variant="body_medium_secondary" component="p">
              {option.text}
            </Typography>
          </li>
        )}
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
              sx={{
                ml: 1,
                flex: 1,
                fontSize: '1.4rem',
                fontWeight: 500,
                color: 'text.secondary',
              }}
              {...params}
              endAdornment={
                <React.Fragment>
                  {params.InputProps.endAdornment}
                </React.Fragment>
              }
              {...register(name)}
            />
          </Paper>
        )}
      />
      {error?.message && (
        <Typography variant="h6" sx={{ marginLeft: '4px', color: 'red' }}>
          {error.message}
        </Typography>
      )}
    </div>
  );
}
