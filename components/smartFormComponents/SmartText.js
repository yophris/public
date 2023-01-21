import { Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { fieldValidationRules } from 'Utils/SmartFieldValidation';
import { ErrorMessage } from '@hookform/error-message';
import { InputAdornmentComp } from '../fields/TextInput';

export default function SmartText({field}) {

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Typography variant="body_medium_muted" component="p" mb={1}>
        {field.label}
        {field?.isRequired && (
          <Typography
            variant="body_bold"
            sx={{ marginLeft: '4px', color: '#F53E40' }}
          >
            *
          </Typography>
        )}
      </Typography>
      <Paper
        elevation={0}
        sx={{
          alignItems: 'center',
          backgroundColor: 'background.main',
          border: '1px solid #EFEFEF',
          borderRadius: 2,
          display: 'flex',
          marginTop: 0,
        }}
      >
        {field?.inputAdornment?.placement === 'start' &&
          field?.inputAdornment?.text !== '' && (
            <InputAdornmentComp text={field?.inputAdornment.text} />
          )}
        <InputBase
          size="small"
          sx={{
            m: 1.5,
            flex: 1,
            fontSize: '1.4rem',
            fontWeight: 500,
            color: 'text.secondary',
            '& .MuiInputBase-input': {
              p: 0,
            },
          }}
          error={!!errors?.message}
          placeholder={field?.placeholder}
          inputProps={{ 'aria-label': field.label }}
          {...register(field.id, {
            ...fieldValidationRules(field.validations),
          })}
          {...field?.config}
          multiline={field.isMultiline}
          rows={4}
        />
        {field?.inputAdornment?.placement === 'end' &&
          field?.inputAdornment?.text !== '' && (
            <InputAdornmentComp text={field?.inputAdornment.text} />
          )}
      </Paper>

      <ErrorMessage
        errors={errors}
        name={field.id}
        render={(error) => (
          <Typography variant="h6" sx={{ marginLeft: '4px', color: 'red' }}>
            {error?.message}
          </Typography>
        )}
      />
      {/* {errors?.message && (
        <Typography variant="h6" sx={{ marginLeft: '4px', color: 'red' }}>
          {errors.message}
        </Typography>
      )} */}
    </div>
  );
}
