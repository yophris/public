import * as React from 'react';
import { Button } from '@mui/material';

export default function AppButton({
  label,
  variant = 'contained',
  ...restProps
}) {
  return (
    <Button
      variant={variant}
      sx={{
        fontSize: '1.2rem',
        padding: '4px 24px',
        borderRadius: 2,
        textTransform: 'none',
      }}
      {...restProps}
    >
      {label}
    </Button>
  );
}
