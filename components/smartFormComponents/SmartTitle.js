import { Typography } from '@mui/material';
import React from 'react';

export default function SmartTitle({ field }) {
  return (
    <>
      <Typography variant="h3_bold_secondary" component="h3" mb={1}>
        {field.title}
      </Typography>
      {field?.subTitle && (
        <Typography variant="body_medium_muted" component="p">
          {field?.subTitle}
        </Typography>
      )}
    </>
  );
}
