import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

export default function SmartToggleButtonGroup({ field }) {
  const { control } = useFormContext();
  const [alignment, setAlignment] = React.useState(field.options[0].value);

  const handleAlignment = (val) => {
    setAlignment(val.target.value);
  };
  //  field = {
  //     id: 'id',
  //     options: [
  //       { value: 'first', label: 'First Half' },
  //       { value: 'second', label: 'Second Half' },
  //     ],
  //   };
  return (
    <Controller
      name={'fromHalf'}
      control={control}
      render={({ field: { onChange, value, ref } }) => (
        <ToggleButtonGroup
          color="primary"
          value={value}
          exclusive
          onChange={(val) => {
            onChange(val);
            handleAlignment(val);
          }}
          aria-label="Platform"
        >
          {field.options.map((option) => {
            return (
              <ToggleButton key={option.value} value={option.value}>
                {option.label}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      )}
    />
  );
}
