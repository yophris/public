import { SecurityOutlined, Watch } from '@mui/icons-material';
import {
  Button,
  Grid,
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
} from '@mui/material';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import SmartDatePicker from './SmartDatePicker';

export default function SmartFromToDatePicker() {
  let field = {
    from: {
      id: 'fromDate',
      label: 'From Date',
    },
    to: {
      id: 'toDate',
      label: 'To Date',
    },
  };
  const [fromHalf, setFromHalf] = React.useState('first');
  const [toHalf, setToHalf] = React.useState('second');
  const { watch, register, control } = useFormContext();

  const [diff, setDiff] = useState();

  const handleFromHalf = (val, sec) => {
    if (val !== null) {
      setFromHalf(val.target.value);
    }
  };
  const handleToHalf = (val) => {
    if (val !== null) {
      setToHalf(val.target.value);
    }
  };

  useEffect(() => {
    if (fromHalf === 'first' && toHalf === 'second') {
      setDiff((_) =>
        moment
          .duration(
            moment(watch(field.to.id)).diff(moment(watch(field.from.id)))
          )
          .days()
      );
    }
    if (
      (fromHalf === 'first' && toHalf === 'first') ||
      (fromHalf === 'second' && toHalf === 'second')
    ) {
      setDiff(
        (_) =>
          moment
            .duration(
              moment(watch(field.to.id)).diff(moment(watch(field.from.id)))
            )
            .days() - 0.5
      );
    }
    if (fromHalf === 'second' && toHalf === 'first') {
      setDiff(
        (_) =>
          moment
            .duration(
              moment(watch(field.to.id)).diff(moment(watch(field.from.id)))
            )
            .days() - 1
      );
    }
  }, [fromHalf, toHalf, watch(field.to.id), watch(field.from.id)]);

  return (
    <>
      <Grid container sx={{ alignItems: 'center' }}>
        <Grid item>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <SmartDatePicker field={field.from} />

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
                    handleFromHalf(val);
                  }}
                  aria-label="Platform2"
                >
                  <ToggleButton value="first">First Half</ToggleButton>
                  <ToggleButton value="second">Second Half</ToggleButton>
                </ToggleButtonGroup>
              )}
            />
          </Box>
        </Grid>
        <Grid item>
          <Typography> {`${diff} days`}</Typography>
        </Grid>
        <Grid item>
          <SmartDatePicker field={field.to} />
          <Controller
            name={'toHalf'}
            control={control}
            render={({ field: { onChange, value, ref } }) => (
              <ToggleButtonGroup
                color="primary"
                value={value}
                exclusive
                onChange={(val) => {
                  onChange(val);
                  handleToHalf(val);
                }}
                aria-label="Platform"
              >
                <ToggleButton value="first">First Half</ToggleButton>
                <ToggleButton value="second">Second Half</ToggleButton>
              </ToggleButtonGroup>
            )}
          />
        </Grid>
      </Grid>
    </>
  );
}
