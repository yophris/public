import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { WORKTYPES } from 'constants';

export default function WorkTypeMenu({
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
              zIndex: 0,
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
