import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Grid, IconButton, Paper, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AppButton from '../AppButton';

function AppForm({
  form,
  submitData,
  validationSchema,
  cancelDrawer = () => {},
}) {
  const {
    register,
    handleSubmit,
    getFieldState,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const renderFields = (d, error) => {
    const { attr } = d;
    const Field = d.element;
    return (
      <>
        <Field
          {...attr}
          register={register}
          error={getFieldState(attr.name).error}
        />
      </>
    );
  };

  return (
    <form onSubmit={handleSubmit(submitData)} style={{ height: '100%' }}>
      <Stack justifyContent="space-between" sx={{ height: '100%' }}>
        <Stack sx={{ margin: 3, marginTop: 3, flex: 1 }}>
          <Grid container spacing={3}>
            {form?.map((setting, ind) => {
              return (
                <React.Fragment key={ind}>
                  {setting?.header && (
                    <>
                      {ind > 0 && (
                        <Grid item xs={12}>
                          <Divider
                            orientation="horizontal"
                            flexItem
                            sx={{
                              borderColor: '#EFEFEF',
                              marginTop: 2,
                              width: '100%',
                            }}
                          />
                        </Grid>
                      )}
                      <Grid item xs={12}>
                        <Typography
                          variant="h3_bold_secondary"
                          sx={{ marginTop: 4 }}
                        >
                          {setting?.header}
                        </Typography>
                      </Grid>
                    </>
                  )}
                  {setting?.fields?.map((field, j) => (
                    <Grid item key={j} md={field.size}>
                      {renderFields(field, errors)}
                    </Grid>
                  ))}
                </React.Fragment>
              );
            })}
          </Grid>
        </Stack>
        <Paper
          sx={{
            padding: 1.25,
          }}
          square
          elevation={2}
        >
          <Stack direction="row" justifyContent="flex-end" spacing={1}>
            <AppButton
              variant="outlined"
              label="Cancel"
              onClick={cancelDrawer}
            />
            <AppButton type="submit" label="Save" variant="contained" />
          </Stack>
        </Paper>
      </Stack>
    </form>
  );
}
export default AppForm;
