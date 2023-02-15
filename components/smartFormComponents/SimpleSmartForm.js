import React, { useEffect } from 'react';
import SmartFieldDecider from './SmartFieldDecider';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Grid, Stack, Typography } from '@mui/material';

export default function SimpleSmartForm({
  plan,
  onSubmit = (data) => {
    console.log('🚀 ~ file: SmartForm.js ~ line 9 ~ submit ~ data', data);
  },
  formData = null,
}) {
  const methods = useForm();
  const { section } = plan;

  useEffect(() => {
    if (formData) {
      methods.reset(formData);
    }
  }, [formData]);
  
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{ height: '100%' }}
          >
            {section.submitBtnPlacement !== 'footer' && (
              <>
                <Grid item md={11}>
                  <Typography item variant="h3_bold_secondary" component="h3">
                    {section.title}
                  </Typography>
                </Grid>
                <Grid item md={1} sx={{ textAlign: 'center' }}>
                  <Button
                    variant={'contained'}
                    sx={{
                      fontSize: '1.0rem',
                      fontWeight: 500,
                      padding: '8px 12px',
                      borderRadius: 1.25,
                      textTransform: 'none',
                    }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Grid>
              </>
            )}

            <Grid
              mt={2}
              item
              container
              rowGap={2}
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {section.fields.map((field, i) => {
                return <SmartFieldDecider key={i} field={field} />;
              })}
            </Grid>
            {section.submitBtnPlacement === 'footer' && (
              <Grid item alignSelf="flex-end" xs={12}>
                <Button
                  variant={'contained'}
                  sx={{
                    fontSize: '1.0rem',
                    fontWeight: 500,
                    padding: '8px 12px',
                    borderRadius: 1.25,
                    textTransform: 'none',
                  }}
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            )}
          </Grid>
        </form>
      </FormProvider>
    </>
  );
}
