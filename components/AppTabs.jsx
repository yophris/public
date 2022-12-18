import { Box, Divider, Stack, Tab, Tabs } from '@mui/material';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';

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
  tabs,
  fields,
  renderFields,
  errors,
  ...props
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
          width: '100%',
          padding: 2,
        }}
      >
        {tabs.map((tab, index) => (
          <TabPanel key={index} value={value} index={index}>
            {tab.fields.map((field, j) => (
              <Box key={j} sx={{ width: '40%' }}>
                {renderFields(field, errors)}
              </Box>
            ))}
          </TabPanel>
        ))}
      </Stack>
    </Stack>
  );
}
