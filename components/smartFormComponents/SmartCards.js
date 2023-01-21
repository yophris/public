import { Box, Divider, Grid } from '@mui/material';
import React from 'react';
import SimpleSmartForm from './SimpleSmartForm';

export default function SmartCards({ cardSections }) {
  return (
    <>
      <Grid container padding={2}>
        <Box>
          {cardSections.map((card, index) => {
            const plan = card.type === 'FieldArray' ? card : card.plan;

            return (
              <>
                <SimpleSmartForm plan={plan} />

                {index !== cardSections.length - 1 && (
                  <Divider
                    orientation="horizontal"
                    sx={{ borderColor: '#EFEFEF', mt: 5, mb: 5 }}
                  />
                )}
              </>
            );
          })}
        </Box>
      </Grid>
    </>
  );
}
