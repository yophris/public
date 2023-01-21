import { Box, Divider } from '@mui/material';
import React from 'react';

const SmartDivider = ({
  direction = 'horizontal',
  borderColor = '#EFEFEF',
  field,
}) => {
  return (
    <Box marginBottom={3} marginTop={3}>
      <Divider sx={{ borderColor }} orientation={direction} flexItem />
    </Box>
  );
};

export default SmartDivider;
