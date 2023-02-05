import { Box, Divider, Stack, Tab, Tabs } from '@mui/material';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import SmartFieldDecider from './SmartFieldDecider';

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

export default function SmartTabsWithinForm({ fieldArrayIndex, field }) {
  
  const { tabs } = field;
  const [value, setValue] = React.useState(0);

  const isInFieldArray = !!field?.isInFieldArray;
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack
      alignItems="start"
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <Stack alignItems="center" spacing={2} sx={{ overflowX: 'auto' }}>
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            overflowX: 'auto',
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
      <Stack spacing={2} sx={{ width: '100%', padding: 3 }}>
        {tabs?.map((tab, index) => (
          <TabPanel key={index} value={value} index={index}>
            <Box>
              {tab.fields.map((tabField, i) => {
                const id = isInFieldArray
                  ? `${field.id}.${tabField.id}`
                  : tabField.id;
                return (
                  <SmartFieldDecider key={i} field={{ ...tabField, id: id }} />
                );
              })}
            </Box>
          </TabPanel>
        ))}
      </Stack>
    </Stack>
  );
}
