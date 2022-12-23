import * as React from 'react';
import { Checkbox, Stack, styled, Switch, Typography } from '@mui/material';
import Image from 'next/image';

export default function AppCheckbox({ label, toggle, setToggle }) {
  //   const { label, register, name, error, isRequired, isMultiline } = props;

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Stack direction="row" alignItems="center" spacing={1.5}>
      <Checkbox
        size="large"
        sx={{ m: 0, p: 0, '& .MuiSvgIcon-root': { fontSize: '2rem' } }}
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Typography variant="body_medium_secondary" component="p">
        {label}
      </Typography>
      <Image src="/images/infoIcon.svg" width={15} height={15} alt="info" />

      {/* {error?.message && (
        <Typography variant="h6" sx={{ marginLeft: '4px', color: 'red' }}>
          {error.message}
        </Typography>
      )} */}
    </Stack>
  );
}
