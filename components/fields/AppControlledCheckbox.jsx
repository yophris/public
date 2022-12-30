import * as React from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
// borderColor: getValues(attr.name) ? 'rgba(55, 125, 255, 0.5)' : '#EFEFEF',
//     background: getValues(attr.name) && '#DAEDFF',
export default function AppControlledCheckbox({
  attr,
  handleChange,
  editAllChanged,
  ...rest
}) {
  const [localState, setLocalState] = React.useState(false);
  const [color, setColor] = React.useState({
    borderColor: '#EFEFEF',
    background: '',
  });
  const handleColorChange = (checked) => {
    if (checked) {
      setColor({
        borderColor: 'rgba(55, 125, 255, 0.5)',
        background: '#DAEDFF',
      });
    } else {
      setColor({
        borderColor: '#EFEFEF',
        background: '',
      });
    }
  };

  React.useEffect(() => {
    setLocalState(editAllChanged);
    handleColorChange(editAllChanged);
  }, [editAllChanged]);

  return (
    <Box
      sx={{
        border: '1px solid',
        color,
        px: 2,
        borderRadius: 1.25,
        ...rest,
      }}
      {...rest}
    >
      <FormControlLabel
        control={
          <Checkbox
            size="large"
            sx={{
              '& .MuiSvgIcon-root': { fontSize: '2rem' },
            }}
            checked={localState}
            onChange={(e, checked) => {
              handleColorChange(checked);
              setLocalState(checked);
              handleChange(e, attr.name, checked);
              //else handleChange(e);
            }}
            disableRipple
          />
        }
        label={
          <Typography variant="body_medium_secondary" component="p">
            {attr.label}
          </Typography>
        }
        labelPlacement="end"
      />
    </Box>
  );
}
