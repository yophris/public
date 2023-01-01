import { Box, Divider, Stack, Tab, Tabs } from '@mui/material';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useFieldArray } from 'react-hook-form';

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
      style={{ marginTop: 0 }}
    >
      {value === index && (
        <Stack direction="column" spacing={2}>
          {children}
        </Stack>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function AppTabs({
  index,
  tabs,
  fields,
  renderFields,
  errors,
  name,
  setFieldValue,
  leaveType,
}) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack
      alignItems="start"
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Tabs
          sx={{
            '& .MuiButtonBase-root': {
              padding: 2,
            },
            '& .MuiTabs-indicator': {
              height: '3px',
              borderRadius: '2px',
            },
          }}
          indicatorColor="primary"
          value={value}
          onChange={handleChange}
          centered
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              sx={{
                '&.Mui-selected': { fontWeight: 600, color: '#333333' },
              }}
              label={
                <Typography
                  variant={
                    index === value
                      ? 'body_medium_secondary'
                      : 'body_medium_muted'
                  }
                  component="p"
                >
                  {tab.text}
                </Typography>
              }
            />
          ))}
        </Tabs>
      </Stack>
      {/* <Divider orientation="horizontal" /> */}
      <Stack
        spacing={2}
        sx={{
          padding: 2,
        }}
      >
        {tabs.map((tab, i) => (
          <TabPanel key={i} value={value} index={i}>
            {tab.fields.map((field, j) => {
              setFieldValue(`${name}.${index}.${name}Id`, leaveType.value);
              const modifiedField = {
                ...field,
                attr: {
                  ...field.attr,
                  name: `${name}.${index}.${field.attr.name}`,
                },
              };
              return <Box key={j}>{renderFields(modifiedField, errors)}</Box>;
            })}
          </TabPanel>
        ))}
      </Stack>
    </Stack>
  );
}
