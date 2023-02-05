import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect } from 'react';
import SmartSelect from './SmartSelect';
import { useFieldArray, useFormContext } from 'react-hook-form';

export default function SmartApproverFieldArray({ smartField }) {
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
    <Box>
      {fields.map((field, index) => {
        return (
          <>
            <Stack
              key={index}
              direction="row"
              sx={{
                width: '100%',
                px: 1.2,
                py: 1,
                my: 1,
                border: '1px solid #efefef',
                borderRadius: '5px',
              }}
              alignItems="center"
              spacing={2}
            >
              {/* <DragIndicatorIcon sx={{ fontSize: '2rem', color: '#333' }} /> */}
              <Typography variant="h3_bold_secondary" component="h3" mb={1}>
                {`Approver-${index + 1}`}
              </Typography>
              <SmartSelect
                
                field={{
                  ...smartField.arrayField,
                  id: `${smartField.id}.${index}.${smartField.arrayField.fieldName}`,
                }}
              />
              <IconButton onClick={() => remove(index)}>
                <Image
                  src="/images/trashIcon.svg"
                  width={14}
                  height={14}
                  alt="checked"
                />
              </IconButton>
            </Stack>
          </>
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
    </Box>
  );
}
