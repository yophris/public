import React from 'react';
import { Box, Stack, Typography, Grid } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import AppColorCircle from 'components/AppColorCircle';
import { DAYS, WORKTYPES } from 'constants';
import Image from 'next/image';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useFormContext } from 'react-hook-form';

// export default function SmartWorkWeekComponent() {
//   return (
//   )
// }

export default function SmartWorkWeekComponent({ field }) {
  return (
    <Grid item sx={{ paddingLeft: 0, margin: 0, width: '100%' }}>
      <Typography variant="body_medium_muted" component="p" mb={1}>
        {field.label}
        {field?.isRequired && (
          <Typography
            variant="body_bold"
            sx={{ marginLeft: '4px', color: '#F53E40' }}
          >
            *
          </Typography>
        )}
      </Typography>
      <Stack direction="row" spacing={1}>
        {field.attrs.map((attr) => (
          <SingleWorkweek key={attr.name} name={attr.name} />
        ))}
      </Stack>
    </Grid>
  );
}

export function SingleWorkweek(props) {
  const { setValue } = useFormContext();

  const { name } = props;
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
    <Box>
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

export function WorkTypeMenu({
  anchorEl,
  setAnchorEl,
  menuToggle,
  setSelectedType,
  isLast,
}) {
  const [selectedKey, setSelectedKey] = React.useState('');

  const handleMenuItemClick = (event, type) => {
    setSelectedKey(type.key);
    setSelectedType(type);
    setAnchorEl(null);
  };

  return (
    <>
      <Menu
        anchorEl={anchorEl?.current}
        id="account-menu"
        open={menuToggle}
        onClose={() => setAnchorEl(null)}
        placement="bottom-start"
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,

            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: isLast ? '30%' : '50%',
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
            },
          },
        }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        {WORKTYPES.map((type, index) => (
          <MenuItem
            key={type.key}
            selected={type.key === selectedKey}
            onClick={(event) => handleMenuItemClick(event, type)}
          >
            <Typography variant="body_medium_secondary" component="p">
              {type.value}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
