import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <div className="loading-wrp">
      <CircularProgress
        className="loading"
        animation="border"
        variant="determinate"
      />
    </div>
  );
};

export default Loader;
