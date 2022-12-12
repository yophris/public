import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import AppColorCircle from 'components/AppColorCircle';
import { DAYS, WORKTYPES } from 'constants';
import Image from 'next/image';
import WorkTypeMenu from './WorkTypeMenu';

export default function AppWorkweekCheckbox(props) {
  const { setValue, name } = props;
  const anchorElRef = React.useRef(null);
  const dayLabel = DAYS[name.split('.')[1]];
  const [checked, setChecked] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [bgColor, setBgColor] = React.useState('');

  const [anchorEl, setAnchorEl] = React.useState(anchorElRef);

  const [type, setType] = React.useState('');
  React.useEffect(
    (_) => {
      if (type) {
        setValue(name, type.key);
        setBgColor(type.bgColor);
        setIsOpen(false);
      }
    },
    [type]
  );

  const handleCheckbox = (e) => {
    setChecked(e.target.checked);
    setIsOpen(e.target.checked);
    if (e.target.checked) {
      setAnchorEl(anchorElRef);
    } else {
      const type = WORKTYPES.filter((type) => type.key === 'WEEKOFF');
      setType(type);
      setValue(name, type.key);
      setBgColor(type.bgColor);
      setAnchorEl(null);
    }
  };

  return (
    // made position relative just to fix the alignment, this is just temp, need to find out
    // other way to fix the label issue for this component
    <Box sx={{ position: 'relative', top: '-25px' }}>
      <FormGroup>
        <Stack
          alignItems="center"
          sx={{
            width: 69,
            height: 78,
            background: bgColor,
            border: '1px solid #EFEFEF',
            borderRadius: '8px',
          }}
          ref={anchorElRef}
        >
          <FormControlLabel
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: 0,
            }}
            control={
              <Checkbox
                disableRipple
                checked={checked}
                onChange={handleCheckbox}
                icon={<AppColorCircle size={23} colorVal="#EFEFEF" />}
                checkedIcon={
                  <Image
                    src="/images/circleTickBgWhite.svg"
                    width={24}
                    height={24}
                    alt="checked"
                  />
                }
              />
            }
            label={
              <Typography
                variant="body_medium"
                sx={{
                  color:
                    type.key === 'WEEKOFF' ? 'text.secondary' : 'text.light',
                }}
                component="p"
              >
                {dayLabel}
              </Typography>
            }
          />
        </Stack>
      </FormGroup>
      {isOpen && anchorEl && (
        <WorkTypeMenu
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          menuToggle={isOpen}
          setSelectedType={setType}
          isLast={dayLabel === 'SAT'}
        />
      )}
    </Box>
  );
}
