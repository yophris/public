import { Grid, Box, IconButton, Checkbox, Typography } from '@mui/material';
import AppButton from 'components/AppButton';
import TextInput from 'components/fields/TextInput';
import AppDatePicker from 'components/fields/AppDatePicker';
import AppTable from 'components/AppTable';

export default function HolidayList(props) {
  const { label, register, name, error, isRequired, isMultiline } = props;
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={4}>
        <TextInput {...props} />
      </Grid>
      <Grid item xs={4}>
        <AppDatePicker {...props} label="Choose Date(s)" />
      </Grid>
      <Grid item xs={4}>
        <div>
          <Box sx={{ height: '20px', marginBottom: 1 }}></Box>
          <AppButton
            styleOverrides={{
              fontSize: '1.6rem',
              height: '44px',
              width: 'auto',
              padding: '10px 30px',
              borderRadius: '5px',
              borderColor: '#377DFF',
            }}
            variant="outlined"
          >
            + Add
          </AppButton>
        </div>
      </Grid>
      <Grid item mt={2} xs={12}>
        <AppTable />
      </Grid>
    </Grid>
  );
}
