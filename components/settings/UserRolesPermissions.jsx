import * as React from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material';
import AppControlledCheckbox from 'components/fields/AppControlledCheckbox';

export default function UserRolesPermissions({
  attrs,
  selectAllOption,
  setValue,
  getValues,
}) {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    attrs.forEach((attr) => setValue(attr.name, checked));
  }, [checked]);

  const handleSelectAll = (e, name, value) => {
    setChecked(e.target.checked);
    attrs.forEach((attr) => setValue(attr.name, value));
  };

  const handleChange = (e, name, value) => {
    setValue(name, value);
    if (!value) {
      setChecked(value);
    }
  };
  return (
    <>
      {selectAllOption?.isEnabled && (
        <AppControlledCheckbox
          width="100%"
          attr={{ label: selectAllOption?.label }}
          handleChange={handleSelectAll}
        />
      )}
      <Stack
        direction="row"
        sx={
          selectAllOption?.isEnabled && {
            borderLeft: '1px solid #efefef',
            mt: 2,
            ml: 4,
            pl: 2,
          }
        }
        flexWrap="wrap"
        rowGap={1}
        columnGap={1}
      >
        {attrs &&
          attrs.map((attr) => {
            if (getValues(attr.name) === undefined) {
              setValue(attr.name, false);
            }
            const value = getValues(attr.name);
            return (
              value !== undefined && (
                <AppControlledCheckbox
                  key={attr.name}
                  attr={attr}
                  editAllChanged={checked}
                  handleChange={handleChange}
                />
              )
            );
          })}
      </Stack>
    </>
  );
}
