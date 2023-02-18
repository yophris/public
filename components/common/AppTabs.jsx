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

export default function AppTabs({ children, tabs, modifyFields, index }) {
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);
  const handleTabChangeIndex = (event, newValue) => {
    setSelectedTabIndex(newValue);
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
          value={selectedTabIndex}
          onChange={handleTabChangeIndex}
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
                    index === selectedTabIndex
                      ? 'body_medium_secondary'
                      : 'body_medium_muted'
                  }
                  component="p"
                >
                  {tab.text} test
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
        {/* <Box
          role="tabpanel"
          hidden={selectedTabIndex !== index}
          {...other}
          style={{ marginTop: 0 }}
        >
          {selectedTabIndex === index && (
            <Stack direction="column" spacing={2}>
              {children}
            </Stack>
          )}
        </Box> */}
        {/* {children} */}
        {tabs.map((tab, i) =>
          tab.fields.map((field) => (
            <TabPanel key={i} value={selectedTabIndex} index={i}>
              {modifyFields ? modifyFields(field, i) : field}
            </TabPanel>
          ))
        )}
      </Stack>
    </Stack>
  );
}
