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
import { useQuery } from 'react-query';
import { useWatch } from 'react-hook-form';
import { useEffect } from 'react';
import { useRef } from 'react';

export default function AppAutocomplete(props) {
  const {
    setValue,
    reset,
    label,
    options = [{ text: '', value: '' }],
    name,
    error,
    isRequired,
    asyncData,
    watch,
    resetField,
    control,
    getValues,
    ...rest
  } = props;
  const watchFields =
    asyncData?.lookup &&
    useWatch({
      control,
      name: asyncData?.lookup,
    });

  const [inputValue, setInputValue] = React.useState('');
  console.log('watchFields', name, asyncData?.lookup, watchFields);
  const {
    isLoading,
    data: response,
    error: getError,
    isSuccess,
  } = useQuery({
    queryKey: [
      'get' + asyncData?.key,
      ...(asyncData?.lookup || []),
      watchFields,
      inputValue,
    ],
    queryFn: () =>
      asyncData.endpointApi(
        typeof asyncData.endpoint == 'function'
          ? asyncData.endpoint(watchFields)
          : asyncData.endpoint,
        { name: inputValue }
      ),
    enabled: asyncData?.lookup
      ? Array.isArray(watchFields)
        ? !watchFields.some((e) => !e)
        : !!watchFields
      : true,
  });

  const [open, setOpen] = React.useState(false);
  const [asyncOptions, setAsyncOptions] = React.useState([]);
  const loading = open && asyncOptions.length === 0;

  React.useEffect(() => {
    let active = true;
    if (!loading) {
      return;
    }

    (async () => {
      //do throttling and check the key length if we need
      //we need to do async fetch while typing
      //as there is no api available yet
      let optionsData;
      if (active) {
        optionsData = response?.data.map(
          asyncData?.optionTransformation ||
            ((d) => ({
              text: d.name,
              value: d.id || d.stateCode || d.code || d.isoCode,
            }))
        );
        //call api to fetch the options
        setAsyncOptions([...(optionsData || [])]);
      }
    })();
    return () => {
      active = false;
    };
  }, [loading]);

  // const isChanged = useRef(false);
  // React.useEffect(() => {
  //   if (!isChanged && options.length) {
  //   }
  // }, [options]);

  return (
    <div key={JSON.stringify(watchFields)}>
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
          isLoading ? (
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
        value={getValues(name)?.value}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        onChange={(e, option) => setValue(name, option)}
        getOptionLabel={(option) => option.text}
        options={asyncOptions}
        loading={isLoading}
        renderOption={(props, option, state) => (
          <li {...props}>
            <Typography variant="body_medium_secondary" component="p">
              {option.text}
            </Typography>
          </li>
        )}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
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
              {...rest}
            />
          </Paper>
        )}
      />
    </div>
  );
}
