import { Alert, Button, Typography } from '@mui/material';

const AlertTemplate = ({ style, options, message, close }) => {
  return (
    <div style={{ ...style }}>
      <Alert
        variant="filled"
        severity={options.type}
        //
      >
        <Typography variant="h4">{message}</Typography>
      </Alert>
    </div>
  );
};

export default AlertTemplate;
