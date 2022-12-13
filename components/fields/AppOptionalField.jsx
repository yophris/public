import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import AppCountInput from './AppCountInput';
import AppSwitch from './AppSwitch';

export default function AppOptionalField(props) {
  const [val, setVal] = React.useState(1);
  const [toggle, setToggle] = React.useState(false);

  const handleClick = (type) => {
    if (type === 'add') setVal(val + 1);
    else setVal((preVal) => (preVal === 1 ? 1 : val - 1));
    // setValue(name, val);
  };

  return (
    <Stack spacing={1.5}>
      <AppSwitch
        label={props.switchLabel}
        toggle={toggle}
        setToggle={setToggle}
      />
      {toggle && (
        <AppCountInput val={val} handleClick={handleClick} {...props} />
      )}
      {props.error?.message && (
        <Typography variant="h6" sx={{ marginLeft: '4px', color: 'red' }}>
          {error.message}
        </Typography>
      )}
    </Stack>
  );
}
