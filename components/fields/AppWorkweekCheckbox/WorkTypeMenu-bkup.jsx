import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function WorkTypeMenu({ anchorEl, handleClick, handleClose }) {
  const open = Boolean(anchorEl);
  console.log('anchor el:', anchorEl);
  //   const [anchorEl, setAnchorEl] = React.useState(null);
  //   const handleClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };
  //   const handleClose = () => {
  //     setAnchorEl(null);
  //   };
  return (
    <>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
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
              right: '50%',
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
        <MenuItem>
          <Typography variant="body_medium_secondary" component="p">
            Half-Day
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="body_medium_secondary" component="p">
            Full-Day
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="body_medium_secondary" component="p">
            Remote Full-Day
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="body_medium_secondary" component="p">
            Remote Half-Day
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="body_medium_secondary" component="p">
            Week-Off
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="body_medium_secondary" component="p">
            Leave
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
