import * as React from 'react';
import { IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';

const options = ['Edit', 'Delete'];

const ITEM_HEIGHT = 48;

export default function EditableList({ label = '', cb = {} }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (option) => {
    let callback = cb[option];
    if (callback) {
      callback();
      handleClose();
    }
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ border: '1px solid #E4E7EB', borderRadius: 1, padding: 2 }}
    >
      <Typography variant="h3_medium_secondary" component="h3">
        {label}
      </Typography>
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon fontSize="large" sx={{ color: 'text.secondary' }} />
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
      </div>
    </Stack>
  );
}
