import * as React from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { fieldValidationRules } from 'Utils/SmartFieldValidation';
// borderColor: getValues(attr.name) ? 'rgba(55, 125, 255, 0.5)' : '#EFEFEF',
//     background: getValues(attr.name) && '#DAEDFF',
export default function SmartCheckBox({ field }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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

  return (
    <Box
      sx={{
        border: '1px solid',
        color,
        px: 2,
        borderRadius: 1.25,
      }}
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
            }}
            {...register(field.id, {
              onChange: (e) => {
                handleColorChange(e.target.checked);
                setLocalState(e.target.checked);
              },
              ...fieldValidationRules(field?.validations),
            })}
            disableRipple
          />
        }
        label={
          <Typography variant="body_medium_secondary" component="p">
            {field.label}
          </Typography>
        }
        labelPlacement="end"
      />
    </Box>
  );
}
