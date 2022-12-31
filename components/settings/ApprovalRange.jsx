import * as React from 'react';
import { Grid } from '@mui/material';
import AppButton from 'components/AppButton';

export default function ApprovalRange(props) {
  const { setValue, renderFields, getValues, errors, ...rest } = props;

  const [fields, setFields] = React.useState([...rest.fields]);

  const handleClick = () => {
    const newFields = [...fields];
    setFields([...rest.fields, ...newFields]);
    console.log('rest.fields,', fields);
  };

  React.useEffect(() => {}, [handleClick]);

  return (
    <>
      {fields.map((field, index) => (
        <Grid
          item
          key={index}
          {...field}
          sx={{ paddingLeft: 0, margin: 0, width: '100%' }}
        >
          {renderFields(field, errors)}
        </Grid>
      ))}
      <AppButton
        onClick={handleClick}
        styleOverrides={{
          marginLeft: 2.5,
          marginTop: 2.5,
          width: '100%',
          fontWeight: 600,
        }}
        variant="outlined"
      >
        + Add another range
      </AppButton>
    </>
  );
}
