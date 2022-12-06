import { Divider } from '@mui/material';
import React from 'react';

const AppDivider = ({
  direction = 'horizontal',
  borderColor = '#EFEFEF',
  rest,
}) => {
  return (
    <Divider sx={{ borderColor }} {...rest} orientation={direction} flexItem />
  );
};

export default AppDivider;
