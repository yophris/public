import { Divider } from '@mui/material';
import React from 'react';

const AppDivider = ({ direction = 'horizontal' }) => {
  return (
    <Divider sx={{ borderColor: '#EFEFEF' }} orientation={direction} flexItem />
  );
};

export default AppDivider;
