import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import AppColorCircle from 'components/AppColorCircle';
import { DAYS_NU, WORKTYPES } from 'constants';
import Image from 'next/image';
import WorkTypeMenu from './WorkTypeMenu';
import { DAYS } from 'constants';

export default function WorkweekReadonly(props) {
  const { value, name, watch, lookup } = props;
  const [workweekData, setWorkweekData] = React.useState({});
  const [bgColor, setBgColor] = React.useState('');
  const days = [0, 1, 2, 3, 4, 5, 6];
  //const [anchorEl, setAnchorEl] = React.useState(anchorElRef);

  //const [type, setType] = React.useState('');
  React.useEffect(
    (_) => {
      console.log('watch in wwro', watch(lookup), lookup, name);
      const datafromapi = [
        {
          id: 'e2695485-d031-41b1-9b7f-9bbe7544164e',
          tenantId: '0c961b01-0069-4a4e-8d62-d57e90088ea2',
          name: 'workweek 4',
          sunday: 'WEEKOFF',
          monday: 'D_FWD',
          tuesday: 'D_FHWD',
          wednesday: 'D_SHWD',
          thursday: 'R_FWD',
          friday: 'R_FHWD',
          saturday: 'R_SHWD',
          createdAt: '2022-12-20T00:32:39.556Z',
          updatedAt: '2022-12-20T00:32:39.556Z',
        },
      ];
      const { sunday, monday, tuesday, wednesday, thursday, friday, saturday } =
        datafromapi[0];
      setWorkweekData({
        sunday,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
      });
      //call the api to fetch the data for the watch(lookup)
      //set the data
    },
    [watch(lookup)]
  );

  //   const handleCheckbox = (e) => {
  //     setChecked(e.target.checked);
  //     setIsOpen(e.target.checked);
  //     if (e.target.checked) {
  //       setAnchorEl(anchorElRef);
  //     } else {
  //       const type = WORKTYPES.filter((type) => type.key === 'WEEKOFF');
  //       setType(type);
  //       setValue(name, type.key);
  //       setBgColor(type.bgColor);
  //       setAnchorEl(null);
  //     }
  //   };

  return (
    <Stack
      justifyContent="center"
      direction="row"
      spacing={2}
      sx={{ height: '70px' }}
    >
      {workweekData &&
        days.map((day, index) => {
          const worktype = WORKTYPES.find(
            (wt) => wt.key === workweekData[DAYS_NU[day]]
          );
          const modifiedData = {
            label: DAYS[DAYS_NU[day]],
            bgColor: worktype?.bgColor,
          };

          console.log('modified data: ', modifiedData);

          return (
            <Stack key={index} justifyContent="space-around">
              {/* <Box sx={{ height: '20px', marginBottom: 1 }}></Box> */}
              <Typography variant="body_medium_secondary" component="p">
                {modifiedData.label}
              </Typography>
              <Box
                alignItems="center"
                sx={{
                  width: 30,
                  height: 30,
                  background: modifiedData.bgColor,
                  border: '1px solid #EFEFEF',
                  borderRadius: '50%',
                }}
              ></Box>
            </Stack>
          );
        })}
    </Stack>
  );
}
