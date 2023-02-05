import { Box, Button, Grid, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import SmartFieldDecider from './SmartFieldDecider';

export default function SimpleFieldArrayForm({ smartField }) {
  const { control, register } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: `${smartField.id}`,
    focusAppend: false,
  });

  useEffect(() => {
    if (!fields.length) {
      append();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack alignItems={'center'}>
      {fields.map((field, index) => {
        return (
          <Grid
            container
            key={index}
            rowSpacing={2}
            columnSpacing={4}
            alignItems="center"
            mt={index !== 0 && 6}
          >
            <Grid item md={11}>
              <Grid container rowSpacing={2} columnSpacing={4}>
                {smartField.arrayFields.map((arrayField, arrayIndex) => (
                  <SmartFieldDecider
                    key={arrayIndex}
                    field={{
                      ...arrayField,
                      id: `${smartField.id}.${index}.${arrayField.fieldName}`,
                    }}
                    index={index}
                  />
                ))}
              </Grid>
            </Grid>
            <Grid item>
              <Button
                variant={'contained'}
                sx={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  padding: '8px 12px',
                  borderRadius: 1.25,
                  textTransform: 'none',

                  backgroundColor: 'red',
                }}
                disabled={fields.length === 1}
                onClick={() => {
                  remove(index);
                }}
                disableRibble
              >
                {smartField.removeButtonText ?? 'Remove'}
              </Button>
            </Grid>
          </Grid>
        );
      })}

      <Button
        variant={'outlined'}
        sx={{
          fontSize: '1.2rem',
          fontWeight: 500,
          padding: '8px 32px',
          borderRadius: 1.25,
          textTransform: 'none',
          marginY: 2,
        }}
        onClick={() => {
          append();
        }}
      >
        {smartField.appendButtonText ?? 'Append'}
      </Button>
    </Stack>
  );
}
