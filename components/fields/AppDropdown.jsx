import * as React from 'react';
import { MenuItem, Select, styled, Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect } from 'react';

export default function AppDropdown({
  label,
  name,
  defaultValue,
  options = [{ text: '', value: '' }],
  register,
  setValue,
  error,
  isRequired,
  getValues,
  watch,
}) {
  const [val, setVal] = React.useState('');
  useEffect(
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

      <Select
        {...register(name)}
        input={<BootstrapInput />}
        IconComponent={KeyboardArrowDownIcon}
        sx={{ fontSize: '1.4rem', fontWeight: 500, color: 'text.secondary' }}
        value={val}
        defaultValue={defaultValue}
      >
        <MenuItem
          sx={{
            fontSize: '1.4rem',
            color: 'text.secondary',
            fontStyle: 'italic',
          }}
          value=""
        >
          None
        </MenuItem>
        {options.map((option, ind) => (
          <MenuItem
            sx={{
              fontSize: '1.4rem',
              fontWeight: 500,
              color: 'text.secondary',
            }}
            value={option.value}
            key={ind}
            disabled={option.disabled}
          >
            {option.text}
          </MenuItem>
        ))}
      </Select>
      {error?.message && (
        <Typography variant="h6" sx={{ marginLeft: '4px', color: 'red' }}>
          {error.message}
        </Typography>
      )}
    </div>
  );
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.palette.background.main,
  border: '1px solid #EFEFEF',
  borderRadius: theme.spacing(1),
  display: 'flex',
  fontSize: '1.4rem',
  transition: theme.transitions.create(['border-color', 'box-shadow']),
  '&:focus': {
    borderRadius: 4,
    borderColor: '#80bdff',
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
  },
  'label + &': {
    marginTop: theme.spacing(3),
  },

  '& .MuiInputBase-input': {
    color: theme.palette.text.secondary,
    padding: `${theme.spacing(1.25)} ${theme.spacing(2)}`,
  },
  '& .MuiSvgIcon-root': {
    fontSize: '2rem',
    marginRight: 2,
    color: theme.palette.text.tertiary,
  },
}));
