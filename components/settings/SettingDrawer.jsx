import * as React from 'react';
import { Drawer, IconButton, Paper, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

function SettingDrawer({ open = false, callback, title, children }) {
  const [isOpen, setIsOpen] = React.useState(open);
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    callback(open);
    setIsOpen(open);
  };

  return (
    <div>
      {
        <React.Fragment>
          <Drawer
            anchor="right"
            open={isOpen}
            sx={{ '& .MuiDrawer-paper': { width: '50%' } }}
          >
            <Box role="presentation">
              <Stack sx={{ height: '100vh' }}>
                <Paper square elevation={2}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{
                      margin: 1.25,
                      flexBasis: 'auto',
                    }}
                  >
                    <Stack alignItems="center" justifyContent="center">
                      <Typography variant="h1_bold_secondary" component="h1">
                        {title}
                      </Typography>
                    </Stack>
                    <Stack>
                      <IconButton
                        onClick={toggleDrawer(false)}
                        sx={{ padding: 0 }}
                      >
                        <CloseIcon
                          sx={{
                            fontSize: '2.2rem',
                            margin: '15px',
                            color: '#000',
                          }}
                        />
                      </IconButton>
                    </Stack>
                  </Stack>
                </Paper>
                {children}
              </Stack>
            </Box>
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}
export default SettingDrawer;
