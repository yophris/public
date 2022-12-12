import * as React from 'react';
import { Box, Button } from '@mui/material';

export default function AppColorCircle({
  colorVal = '#377DFF',
  size = 12,
  ...restProps
}) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        backgroundColor: colorVal,
        borderRadius: 50,
      }}
      {...restProps}
    />
  );
}
