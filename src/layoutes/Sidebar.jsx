// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import { Link } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//   })
// );

// export default function MiniDrawer() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       {/* Sidebar Application Bar */}
//       <MuiAppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={[{ marginRight: 5 }, open && { display: 'none' }]}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             Sidebar with Links
//           </Typography>
//         </Toolbar>
//       </MuiAppBar>
      
//       {/* Sidebar Navigation Drawer */}
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {[
//             { text: 'Inbox', path: '/inbox', icon: <InboxIcon /> },
//             { text: 'Starred', path: '/starred', icon: <MailIcon /> },
//             { text: 'Send Email', path: '/send-email', icon: <MailIcon /> },
//             { text: 'Drafts', path: '/drafts', icon: <InboxIcon /> },
//           ].map((item, index) => (
//             <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
//               <ListItemButton component={Link} to={item.path} sx={{ justifyContent: 'center' }}>
//                 <ListItemIcon>
//                   {item.icon}
//                 </ListItemIcon>
//                 <ListItemText primary={item.text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {[
//             { text: 'All Mail', path: '/all-mail', icon: <MailIcon /> },
//             { text: 'Trash', path: '/trash', icon: <MailIcon /> },
//             { text: 'Spam', path: '/spam', icon: <InboxIcon /> },
//           ].map((item, index) => (
//             <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
//               <ListItemButton component={Link} to={item.path} sx={{ justifyContent: 'center' }}>
//                 <ListItemIcon>
//                   {item.icon}
//                 </ListItemIcon>
//                 <ListItemText primary={item.text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <DrawerHeader />
//         <Typography>
//           Select menu items to navigate to different pages.
//         </Typography>
//       </Box>
//     </Box>
//   );
// }
import React from 'react'
import Body from "./Body";

const Sidebar = () => {
  return (
    <Body><div>Dashboard</div></Body>
  )
}

export default Sidebar