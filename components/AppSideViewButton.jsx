import { Box, Stack, Typography } from '@mui/material';
import AppButton from 'components/AppButton';
import React, { useEffect } from 'react';
import AppDivider from './AppDivider';
import SettingDrawer from './settings/SettingDrawer';
import UpcomingHolidays from './UpcomingHolidays';

const AppSideViewButton = (props) => {
  const [openSideMenu, setOpenSideMenu] = React.useState(false);

  return (
    <>
      <Box sx={{ height: '30px', marginBottom: 1 }}></Box>
      <AppButton variant="text" onClick={() => setOpenSideMenu(true)}>
        View Holiday Calendar
      </AppButton>
      {openSideMenu && (
        <SettingDrawer
          open={openSideMenu}
          callback={setOpenSideMenu}
          title="View Dubai Holiday Calendar"
        >
          <Stack divider={<AppDivider />}>
            <Stack sx={{ m: 2 }} direction="row" spacing={6}>
              <Stack spacing={1}>
                <Typography
                  variant="h3_medium_secondary"
                  component="h3"
                  sx={{ textAlign: 'left' }}
                >
                  2022
                </Typography>
                <Typography
                  variant="body_medium_muted"
                  component="p"
                  sx={{ textAlign: 'left' }}
                >
                  Holiday Year
                </Typography>
              </Stack>
              <Stack spacing={1}>
                <Typography
                  variant="h3_medium_secondary"
                  component="h3"
                  sx={{ textAlign: 'left' }}
                >
                  20
                </Typography>
                <Typography
                  variant="body_medium_muted"
                  component="p"
                  sx={{ textAlign: 'left' }}
                >
                  Public Holiday
                </Typography>
              </Stack>
              <Stack spacing={1}>
                <Typography
                  variant="h3_medium_secondary"
                  component="h3"
                  sx={{ textAlign: 'left' }}
                >
                  05
                </Typography>
                <Typography
                  variant="body_medium_muted"
                  component="p"
                  sx={{ textAlign: 'left' }}
                >
                  Optional Year
                </Typography>
              </Stack>
            </Stack>
            <Stack
              sx={{ m: 2 }}
              direction="row"
              rowGap={2}
              columnGap={2}
              flexWrap="wrap"
            >
              <UpcomingHolidays
                dateData={'2022-10-27'}
                holiday="Dubai Independence Day"
                themeColor="#0888B1"
              />
              <UpcomingHolidays
                dateData={'2022-11-14'}
                holiday="National Childrens Day"
                themeColor="#4456BC"
              />
              <UpcomingHolidays
                dateData={'2022-10-27'}
                holiday="Dubai Independence Day"
                themeColor="#0888B1"
              />
              <UpcomingHolidays
                dateData={'2022-11-14'}
                holiday="National Childrens Day"
                themeColor="#4456BC"
              />
            </Stack>
          </Stack>
        </SettingDrawer>
      )}
    </>
  );
};

export default AppSideViewButton;
