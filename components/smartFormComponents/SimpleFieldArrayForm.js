import { Box, Button, Grid, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import SmartFieldDecider from './SmartFieldDecider';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import { Checkbox, IconButton, Typography } from '@mui/material';
import { StyledTableCell, StyledTableRow } from '../AppTable';

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

  if (smartField?.variant == 'Table') {
    const props = { smartField, fields, append, remove };
    return <TableView {...props} />;
  }
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

const TableView = ({ smartField, fields, append, remove }) => {
  console.log('fields', fields);
  return (
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {smartField.arrayFields.map((arrayField) => (
              <StyledTableCell>{arrayField?.label || ''}</StyledTableCell>
            ))}

            <StyledTableCell align="left">
              <Button
                variant={'outlined'}
                sx={{
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  borderRadius: 1.25,
                  textTransform: 'none',
                }}
                onClick={() => {
                  append();
                }}
              >
                {smartField.appendButtonText ?? 'Append'}
              </Button>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fields.map((row, index) => (
            <StyledTableRow>
              {smartField.arrayFields.map((arrayField, arrayIndex) => (
                <StyledTableCell align="left">
                  <SmartFieldDecider
                    key={arrayIndex}
                    field={{
                      ...arrayField,
                      id: `${smartField.id}.${index}.${arrayField.id}`,
                      label: null,
                    }}
                    index={index}
                  />
                </StyledTableCell>
              ))}

              <StyledTableCell align="left">
                <IconButton
                  onClick={() => {
                    remove(index);
                  }}
                >
                  <Image
                    src="/images/trashIcon.svg"
                    width={14}
                    height={14}
                    alt="checked"
                  />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
