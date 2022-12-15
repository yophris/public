import * as React from 'react';
import { Button } from '@mui/material';

export default function AppButton({
  children,
  variant = 'contained',
  styleOverrides,
  ...restProps
}) {
  return (
    <Button
      variant={variant}
      sx={{
        fontSize: '1.2rem',
        fontWeight: 500,
        padding: '4px 32px',
        borderRadius: 2,
        textTransform: 'none',
        ...styleOverrides,
      }}
      {...restProps}
    >
      {children}
    </Button>
  );
}
