import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Grid, IconButton, Paper, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AppButton from '../AppButton';
import TextInput from './TextInput';
import validationSchemaGenerator from 'Utils/validationSchemaGenerator';

function AppForm({
  form,
  submitData,
  edit,
  validationSchema,

  cancelDrawer = () => {},
}) {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    getFieldState,
    reset,
    watch,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchemaGenerator(form)),
  });

  const renderFields = (d, error) => {
    const { attr } = d;
    const Field = d.element;
    const [domain, field] = attr.name.split('.');

    return (
      <>
        <Field
          {...attr}
          control={control}
          register={register}
          error={getFieldState(attr.name).error}
          setValue={setValue}
          isRequired={
            validationSchema?.fields[domain]?.fields[field]?.exclusiveTests
              ?.required
          }
          watch={watch}
          getValues={getValues}
        />
      </>
    );
  };

  React.useEffect(
    (_) => {
      if (edit) {
        reset(edit);
      }
      console.log('Data for Edit', edit);
    },
    [edit]
  );

  console.log('AppForm Error', errors);
  return (
    <form onSubmit={handleSubmit(submitData)} style={{ height: '100%' }}>
      <Stack justifyContent="space-between" sx={{ height: '100%' }}>
        <Stack
          sx={{
            padding: 3,
            flex: 1,
            overflow: 'auto',
          }}
        >
          <Grid container spacing={3}>
            {/* {renderFields(IDfield, errors)} */}
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
                    <Grid item key={j} xs={field.size}>
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
            {cancelDrawer && (
              <AppButton
                variant="outlined"
                label="Cancel"
                onClick={cancelDrawer}
              />
            )}

            <AppButton
              type="submit"
              label={!edit ? 'Save' : 'Update'}
              variant="contained"
            />
          </Stack>
        </Paper>
      </Stack>
    </form>
  );
}
export default AppForm;
