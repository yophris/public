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
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ border: '1px solid #E4E7EB', borderRadius: 1, padding: 2 }}
      >
        <Stack direction="row" alignItems="center" spacing={1.5}>
          {/* this is used in (eg: Leave policy) to make it favourite - variant1 */}
          <Image
            src="/images/starYellow.svg"
            width={20}
            height={20}
            alt="favourite"
          />
          {/* variant2 */}
          <AppColorCircle size={18} colorVal="#46C0C0" />
          <Typography variant="h3_medium_secondary" component="h3">
            {label}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Variant1 */}
          {/* <Typography variant="h3_medium_muted" px={1}>
          2 Employees
        </Typography> */}
          {/* Variant2 */}
          {/* <Stack
          direction="row"
          alignItems="center"
          spacing={0.5}
          sx={{ border: '1px solid #E4E7EB', borderRadius: 2, padding: '10px' }}
        >
          <Image
            src="/images/user.svg"
            width={11}
            height={11}
            style={{ marginRight: '4px' }}
          />
          <Typography variant="body_medium_secondary">03</Typography>
        </Stack> */}

          <Box>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon
                sx={{ color: 'text.secondary', fontSize: '2rem' }}
              />
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
                  <Typography
                    mr={1}
                    variant="body_medium_tertiary"
                    component="p"
                  >
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
        </Stack>
      </Stack>
    </>
  );
}
