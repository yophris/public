import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import CloseIcon from '@mui/icons-material/Close';
import {
  Drawer,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useForm } from 'react-hook-form';
import AppButton from '../AppButton';

function SettingDrawer({
  open = false,
  callback,
  form,
  title,
  submitData,
  validationSchema,
}) {
  const {
    register,
    handleSubmit,
    getFieldState,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [isOpen, setIsOpen] = React.useState(open);
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    callback(open);
    setIsOpen(open);
  };
  console.log('errors in setting drawer: ', errors, form);
  // Render form fields.
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

  // return JSON.stringify(form)

  return (
    <div>
      {
        <React.Fragment>
          <Drawer
            anchor="right"
            open={isOpen}
            sx={{ '& .MuiDrawer-paper': { width: '50%' } }}
          >
            <Box role="presentation">
              <form onSubmit={handleSubmit(submitData)}>
                <Stack sx={{ height: '100vh' }}>
                  <Paper square elevation={2}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{
                        margin: 1.25,
                        flexBasis: 'auto',
                      }}
                    >
                      <Stack alignItems="center" justifyContent="center">
                        <Typography variant="h1_bold_secondary" component="h1">
                          {title}
                        </Typography>
                      </Stack>
                      <Stack>
                        <IconButton
                          onClick={toggleDrawer(false)}
                          sx={{ padding: 0 }}
                        >
                          <CloseIcon
                            sx={{
                              fontSize: '2.2rem',
                              margin: '15px',
                              color: '#000',
                            }}
                          />
                        </IconButton>
                      </Stack>
                    </Stack>
                  </Paper>
                  <Box sx={{ margin: 3, marginTop: 3, flex: 1 }}>
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
                  </Box>
                  <Paper square elevation={2}>
                    <Stack
                      direction="row"
                      justifyContent="right"
                      sx={{
                        margin: 1.25,
                        flexBasis: 'auto',
                      }}
                      spacing={1}
                    >
                      <AppButton
                        variant="outlined"
                        onClick={toggleDrawer(false)}
                      >
                        Cancel
                      </AppButton>
                      <AppButton type="submit" variant="contained">
                        Save
                      </AppButton>
                    </Stack>
                  </Paper>
                </Stack>
              </form>
            </Box>
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}
export default SettingDrawer;
