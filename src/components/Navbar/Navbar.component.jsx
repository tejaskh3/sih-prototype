import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const dynamicBtnRoute =
    location.pathname === "/service-providers-home" ? "/auth/" : "/auth/user";

  const dynamicBtnText =
    location.pathname === "/service-providers-home" ? "Provider Login" : "User Login";

  const navLinks = [
    {
      name: "Talk to Lawyer",
      path: "",
    },
    {
      name: "Property",
      path: "",
    },
    {
      name: "Document",
      path: "",
    },
    {
      name: "Startup",
      path: "",
    },
    {
      name: "Ask Lawyer",
      path: "",
    },
  ];

  const drawer = (
    <>
      <AppBar color="white">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography>
            <i>Logo here</i>
          </Typography>
          <Button onClick={toggleDrawer} sx={{ color: "black" }}>
            <CloseIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <List>
        {navLinks.map((navLink) => (
          <ListItem key={navLink.path}>
            <ListItemButton onClick={toggleDrawer}>
              <Link to={navLink.path} className={classes["nav-link"]}>
                {navLink.name}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}

        {location.pathname !== "/service-providers-home" && (
          <ListItem>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: "100%",
                textAlign: "left",
                fontWeight: "bolder",
                textTransform: "none",
              }}
              onClick={() => {
                toggleDrawer();
                navigate("/service-providers-home");
              }}
            >
              Lawyers Click Here
            </Button>
          </ListItem>
        )}
        <ListItem>
          <Button
            color="secondary"
            onClick={() => {
              toggleDrawer();
              navigate(dynamicBtnRoute);
            }}
            sx={{ fontWeight: "bolder", textTransform: "none" }}
          >
            {dynamicBtnText}
          </Button>
        </ListItem>
      </List>
    </>
  );
  return (
    <>
      <AppBar color="white" sx={{ px: { md: 12 } }} position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton>
            <Typography>
              <i>Logo here</i>
            </Typography>
          </IconButton>

          {/* navbar for PC */}
          <Stack
            direction={"row"}
            spacing={3}
            sx={{ display: { xs: "none", lg: "block" } }}
          >
            {navLinks.map((navLink, index) => (
              <Link
                key={index}
                className={classes["nav-link"]}
                to={navLink.path}
              >
                {navLink.name}
              </Link>
            ))}
          </Stack>

          <Stack direction="row">
            <Stack
              direction={"row"}
              spacing={3}
              sx={{
                display: { xs: "none", md: "block" },
              }}
            >
              {location.pathname !== "/service-providers-home" && (
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={() => navigate("/service-providers-home")}
                  sx={{ textTransform: "none", fontWeight: "bolder" }}
                >
                  Lawyers Click Here
                </Button>
              )}
              <Button
                onClick={() => {
                  navigate(dynamicBtnRoute);
                }}
                className={classes.button}
                color="secondary"
                sx={{ textTransform: "none", fontWeight: "bolder" }}
              >
                {dynamicBtnText}
              </Button>
            </Stack>

            <Button
              onClick={toggleDrawer}
              sx={{ color: "black", display: { lg: "none" } }}
            >
              <MenuIcon />
            </Button>
          </Stack>
        </Toolbar>
        <a href='http://localhost:3030/'>consult</a>
        {/* navbar for Mobile */}
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={toggleDrawer}
          anchor="top"
        >
          {drawer}
        </Drawer>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
