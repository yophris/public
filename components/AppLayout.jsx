import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { Tab, Tabs, Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import * as React from 'react';
import useFileUploadStore from 'store/useFileUploadStore';
import FileUploadStatus from './FileUploadStatus';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#232B3F',
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  minHeight: '48px',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  //   left: open ? 0 : 65,
  backgroundColor: 'transparent',
  color: '#333333',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  backgroundColor: '#232B3F',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

// function LinkTab(props) {
//   return (
//     <Tab
//       component={Link}
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

export default function AppLayout({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [tabVal, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon sx={{ color: '#fff', fontSize: '2rem' }} />
          </IconButton>
          <Typography variant="h1_bold_secondary" component="h1" noWrap>
            Helpool Services Pvt Ltd.
            <FileUploadStatus />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer sx={{ position: 'sticky' }} variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {open &&
              (theme.direction === 'rtl' ? (
                <ChevronRightIcon sx={{ fontSize: '2rem' }} />
              ) : (
                <ChevronLeftIcon sx={{ fontSize: '2rem' }} />
              ))}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { label: 'Dashboard', path: 'dashboard', iconComponent: InboxIcon },
            {
              label: 'Settings',
              path: 'settings',
              iconComponent: SettingsApplicationsIcon,
            },
          ].map((menu, index) => (
            <Link href={`/app/${menu.path}`} key={index}>
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <menu.iconComponent
                      sx={{ color: !open && '#fff', fontSize: '2rem' }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body_bold_secondary">
                        {menu.label}
                      </Typography>
                    }
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        mt={8}
        sx={{ flexGrow: 1, backgroundColor: '#F5F5F5' }}
      >
        {children}
      </Box>
    </Box>
  );
}
