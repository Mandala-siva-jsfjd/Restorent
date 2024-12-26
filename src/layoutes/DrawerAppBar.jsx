import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import tatastrivewhite from "../images/TataSTRIVE-white.png";
import tatastrive from "../images/TataSTRIVE.png";
import fsslogo from "../images/FSS_Logo1.png";
import { NavLink } from "react-router-dom";
import { Logout } from "@mui/icons-material";
//import { useUserContext } from "../context/UserContext";

const drawerWidth = 240;

const pages = [
  { path: "/dashboard", label: "Dashboard" },
  { path: "/schedule", label: "Schedule" },
  // { path: "/action-items", label: "Action Items" },
  { path: "/support", label: "FSS Support" },

];

const striveImg = (
  <img
    src={tatastrivewhite}
    alt="logo"
    style={{
      maxHeight: "35px",
      margin: "auto",
    }}
  />
);

const fssImg = (
  <img
    src={fsslogo}
    alt="logo"
    style={{
      height: "40px",
    }}
  />
);

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //const { logout } = useUserContext();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav" color="primary">
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "block", flexGrow: 1 }}>{fssImg}</Box>
          <Box sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}>
            {pages.map((page) => (
              <NavLink
                to={page.path}
                key={page.path}
                className={({ isActive }) =>
                  isActive ? "navbar active-menu" : "navbar"
                }
              >
                {page.label}
              </NavLink>
            ))}

            <NavLink
              //onClick={logout}
              to="/"
              className={({ isActive }) =>
                isActive ? "navbar active-menu" : "navbar"
              }
            >
              Logout
            </NavLink>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>{striveImg}</Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Stack
            height="100vh"
            justifyContent="space-between"
            onClick={handleDrawerToggle}
            sx={{ textAlign: "center" }}
          >
            <div>
              <Toolbar>
                <img
                  src={tatastrive}
                  alt="logo"
                  style={{
                    maxHeight: "40px",
                    margin: "auto",
                  }}
                />
              </Toolbar>
              <Divider />
              <List>
                {pages.map((page) => (
                  <NavLink
                    to={page.path}
                    key={page.path}
                    className={({ isActive }) =>
                      isActive ? "active-drawer" : "inactive-drawer"
                    }
                  >
                    <ListItem disablePadding>
                      <ListItemButton sx={{ textAlign: "center" }}>
                        <ListItemText primary={page.label} />
                      </ListItemButton>
                    </ListItem>
                  </NavLink>
                ))}
              </List>
              <Divider />
            </div>
            <Button
              //onClick={logout}
              variant="contained"
              startIcon={<Logout />}
              sx={{ my: 4, mx: 2 }}
            >
              Logout
            </Button>
          </Stack>
        </Drawer>
      </Box>
    </>
  );
}

export default DrawerAppBar;
