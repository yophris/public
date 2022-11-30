import { Box, Divider, Paper, Stack, Tab, Tabs } from '@mui/material';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import ProfileInfo from './ProfileInfo';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Stack direction="row" spacing={3} alignItems={'center'}>
          {children}{' '}
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

export default function UpdatesWithTabs({ title, tabs }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{ borderRadius: 2.5, minWidth: 350, width: '100%' }}
      variant="outlined"
    >
      <Stack
        alignItems="start"
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <Stack
          sx={{ padding: '0 16px', width: '100%' }}
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="h3_bold_secondary" component="h3">
            {title}
          </Typography>
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
                  fontSize: '1.6rem',
                  fontWeight: 500,
                  color: '#6F767E',
                  '&.Mui-selected': { fontWeight: 600, color: '#333333' },
                }}
                label={
                  <Typography
                    variant={
                      index === value
                        ? 'h3_medium_secondary'
                        : 'h3_medium_muted'
                    }
                    component="h3"
                  >
                    {tab.text}
                    {
                      <Box
                        component="span"
                        sx={{
                          display: 'inline-flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.2rem',
                          fontWeight: 500,
                          marginLeft: 1,
                          width: 22,
                          height: 22,
                          borderRadius: '50%',
                          border: `1px solid ${
                            value === index ? '#2C73FF' : '#D9D9D9'
                          }`,
                          backgroundColor:
                            value === index ? '#2C73FF' : '#D9D9D9',
                          color: value === index ? '#fff' : '#8E8E8E',
                          padding: '0 6px',
                          textAlign: 'center',
                        }}
                      >
                        {tab.count}
                      </Box>
                    }
                  </Typography>
                }
              />
            ))}
          </Tabs>
        </Stack>
        {/* <Divider orientation="horizontal" /> */}
        <Stack sx={{ padding: 2 }}>
          <TabPanel value={value} index={0}>
            {[
              {
                maintext: 'Thomas Fletcher',
                subtext: 'Product Designer',
                img: '../images/man1.png',
              },
              {
                maintext: 'John Mathew',
                subtext: 'Development Head',
                img: '',
              },
            ].map((profile, index) => (
              <ProfileInfo key={index} profile={profile} />
            ))}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {[
              {
                maintext: 'Adam Smith',
                subtext: 'HR Lead',
                img: '../../images/man2.png',
              },
              {
                maintext: 'Thomas Fletcher',
                subtext: 'Product Designer',
                img: '../../images/man1.png',
              },
            ].map((profile, index) => (
              <ProfileInfo key={index} profile={profile} />
            ))}
          </TabPanel>
        </Stack>
      </Stack>
    </Paper>
  );
}
