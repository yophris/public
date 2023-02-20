import React, { useEffect, useRef } from 'react';
import Select from 'react-select';
import { Controller, useFormContext } from 'react-hook-form';
import { Typography } from '@mui/material';
import { ErrorMessage } from '@hookform/error-message';
import { fieldValidationRules } from 'Utils/SmartFieldValidation';
import smartUrlBuilder from 'Utils/smartUrlBuilder';
import { getCountries } from 'Utils/Apis/settingsApisFn';
import { useQuery } from 'react-query';
import { GET } from 'configs/axios';

export default function SmartSelect({ field }) {
  const {
    control,
    formState: { errors, isDirty },
    useWatch,
    watch,
    resetField,
    getFieldState,
  } = useFormContext();

  const templateObject = watch?.();
  const [url, keys] = smartUrlBuilder(field?.select?.api, templateObject);

  const currentUrl = useRef(url);
  if (keys) {
    console.log(url);
  }

  const { data, isLoading, isSuccess } = useQuery(
    [url, 'dropDown', field.id],
    () => GET(url),
    {
      retry: false,
      enabled:
        !!url &&
        field?.select?.type === 'api' &&
        !url.includes('MISSING_VALUE'),
      cacheTime: 0,
    }
  );

  useEffect(() => {
    const changed = keys
      .map((e) => getFieldState(e.replace('.value', '')).isDirty)
      .some((e) => e);
    if (changed) {
      resetField(field.id, { defaultValue: null });
    }
  }, [url]);

  const isInline = field?.select?.type === 'inLine';
  const isMulti = false;

  const options = field?.select?.options || [];
  // debugger;
  return (
    <>
      <Controller
        name={field?.id}
        control={control}
        rules={{ ...fieldValidationRules(field?.validations) }}
        render={({ field: { onChange, value, ref } }) => (
          <>
            <Typography variant="body_medium_muted" component="p" mb={1}>
              {field?.label}
              {field?.isRequired && (
                <Typography
                  variant="body_bold"
                  sx={{ marginLeft: '4px', color: '#F53E40' }}
                >
                  *
                </Typography>
              )}
            </Typography>
            <Select
              inputRef={ref}
              // value={(val) => val.value}  value={options.filter((option) => value?.includes(option.value))}
              value={
                field?.select?.type === 'api'
                  ? value
                  : !isMulti
                  ? options?.filter((c) => c.value === value)
                  : options?.filter((option) => {
                      console.log('smartSelect', options, field?.id, value);
                      return value?.includes(option?.value);
                    })
              }
              onChange={(val) => {
                if (field?.select?.type === 'api') {
                  onChange(val);
                  return;
                }
                if (!isMulti) {
                  onChange(val?.value);
                } else {
                  onChange(val?.map((c) => c?.value));
                }
              }}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #EFEFEF',
                  borderRadius: '8px',
                  color: '#333',
                  padding: '4px',
                }),
                option: (baseStyles, state) => {
                  return {
                    ...baseStyles,
                    fontSize: '1.4rem',
                    fontWeight: 500,
                    color: '#333',
                    background: state.isSelected && '#96bdf9',
                  };
                },
                placeholder: (baseStyles, state) => ({
                  ...baseStyles,
                  fontSize: '1.4rem',
                  fontWeight: 500,
                  color: '#808080',
                }),
                singleValue: (baseStyles, state) => ({
                  ...baseStyles,
                  fontSize: '1.4rem',
                  fontWeight: 500,
                }),
                indicatorSeparator: (baseStyles, state) => ({
                  background: 'none',
                }),
                indicatorContainer: (baseStyles, state) => ({
                  color: '#4E5A6D',
                }),
              }}
              options={data?.data?.data || options}
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
