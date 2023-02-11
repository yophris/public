import { ErrorMessage } from '@hookform/error-message';
import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import { fieldValidationRules } from 'Utils/SmartFieldValidation';
import 'react-phone-input-2/lib/style.css';

export default function SmartPhoneNumberInput({ field }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name={field.id}
        rules={{ ...fieldValidationRules(field.validations) }}
        render={({
          field: { onChange: onChange, value, name, ref },
          formState: { errors },
        }) => (
          <>
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
            <PhoneInput
              name={name}
              inputRef={ref}
              value={value}
              onChange={onChange}
              buttonStyle={{
                backgroundColor: '#F8FAFC',
                border: '1px solid #EFEFEF',
                borderRight: '1px solid #EFEFEF',
                borderTopLeftRadius: '8px',
                borderBottomLeftRadius: '8px',
                '&:hover': {
                  backgroundColor: 'none',
                },
              }}
              inputStyle={{
                fontFamily: 'Poppins,sans-serif',
                fontSize: '1.4rem',
                fontWeight: 500,
                color: '#333',
                height: '44px',
                backgroundColor: '#F8FAFC',
                border: '1px solid #EFEFEF',
                borderRadius: '8px',
                width: '100%',
              }}
              dropdownStyle={{
                fontFamily: 'Poppins,sans-serif',
                fontSize: '1.4rem !important',
                fontWeight: 500,
              }}
            />
            <ErrorMessage
              errors={errors}
              name={field.id}
              render={(error) => (
                <Typography
                  variant="h6"
                  sx={{ marginLeft: '4px', color: 'red' }}
                >
                  {error?.message}
                </Typography>
              )}
            />
          </>
        )}
      />
    </>
  );
}
