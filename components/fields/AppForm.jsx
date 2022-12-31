import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Paper, Stack, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useForm } from 'react-hook-form';
import validationSchemaGenerator from 'Utils/validationSchemaGenerator';
import AppButton from '../AppButton';

function AppForm({
  form,
  submitData,
  edit,
  validationSchema,
  showButtons = true,
  padding = 3,
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
          register={register(attr.name)}
          error={getFieldState(attr.name).error}
          setValue={setValue}
          isRequired={
            validationSchema?.fields[domain]?.fields[field]?.exclusiveTests
              ?.required
          }
          watch={watch}
          // endPoint={endPoint}
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

  return (
    <form onSubmit={handleSubmit(submitData)} style={{ height: '100%' }}>
      <Stack justifyContent="space-between" sx={{ height: '100%' }}>
        <Stack
          sx={{
            padding,
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
                      {ind > 0 && !setting.noDivider && (
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
                        <Stack sx={{ m: 0, p: 0 }}>
                          <Typography
                            variant="h3_bold_secondary"
                            component="h3"
                            sx={{ marginTop: 1 }}
                          >
                            {setting?.header}
                          </Typography>
                          {setting?.subHeader && (
                            <Typography
                              variant="body_medium_muted"
                              component="p"
                            >
                              {setting.subHeader}
                            </Typography>
                          )}
                        </Stack>
                      </Grid>
                    </>
                  )}

                  {setting?.fields?.map((field, j) =>
                    //group element rendering
                    field.type === 'group' ? (
                      <field.element
                        setValue={setValue}
                        renderFields={renderFields}
                        getValues={getValues}
                        errors={errors}
                        key={j}
                        {...field}
                      />
                    ) : (
                      //individual field rendering
                      <Grid
                        item
                        sx={{ paddingLeft: 0, margin: 0, width: '100%' }}
                        key={j}
                        {...field}
                      >
                        {field.children ? (
                          <Grid
                            container
                            direction="row"
                            alignItems="flex-start"
                            spacing={3}
                          >
                            <Grid item {...field.children}>
                              {renderFields(field, errors)}
                            </Grid>
                            <Grid item {...field.children}>
                              {renderFields(field.children, errors)}
                            </Grid>
                          </Grid>
                        ) : (
                          renderFields(field, errors)
                        )}
                      </Grid>
                    )
                  )}
                </React.Fragment>
              );
            })}
          </Grid>
        </Stack>
        {showButtons && (
          <Paper
            sx={{
              padding: 1.25,
            }}
            square
            elevation={1}
          >
            <Stack direction="row" justifyContent="flex-end" spacing={1}>
              {cancelDrawer && (
                <AppButton variant="outlined" onClick={cancelDrawer}>
                  Cancel
                </AppButton>
              )}

              <AppButton type="submit" variant="contained">
                {!edit ? 'Save' : 'Update'}
              </AppButton>
            </Stack>
          </Paper>
        )}
      </Stack>
    </form>
  );
}
export default AppForm;
