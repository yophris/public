import * as React from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from 'next/image';
import AppColorCircle from 'components/AppColorCircle';

const ITEM_HEIGHT = 48;

export default function AppMenu({
  options = ['Edit', 'Delete'],
  handleDrawer = false,
  cb = {},
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (option) => {
    handleDrawer(true);
    handleClose();
    // let callback = cb[option];
    // if (callback) {
    //   callback();
    //   handleClose();
    // }
  };
  return (
    <Box>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon sx={{ color: 'text.secondary', fontSize: '2rem' }} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 'auto',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === 'Pyxis'}
            onClick={() => handleMenu(option)}
          >
            <Typography mr={1} variant="body_medium_tertiary" component="p">
              {option === 'Delete' ? (
                <DeleteIcon sx={{ color: '#F53E40' }} />
              ) : (
                <BorderColorIcon />
              )}
            </Typography>
            <Typography
              sx={{ color: option === 'Delete' && '#F53E40' }}
              variant="body_medium_tertiary"
              component="p"
            >
              {option}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
