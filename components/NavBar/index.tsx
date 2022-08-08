import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/NarBar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useHistory, useLocation } from "react-router-dom";
import {
  Button,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Stack,
} from "@mui/material";
import { menuItems } from "./util";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import useStates from "../../hooks/useState";

const Navbar = () => {
  const router = useRouter();

  const [state, setState]: any = useStates({
    open: false,
  });
  const { open } = state;

  const handlerClick = () => {
    // console.log("::::::", menuItems);
  };
  // const [open, setOpen] = React.useState(false);
  // const handleDrawerOpen = () => {
  //   setState({ showDrawer: true });
  // };
  // const handleDrawerClose = () => {
  //   setState({ showDrawer: false });
  // };
  // console.log("showDrawer::::", open);
  // const location: any = useLocation();

  return (
    <Stack direction="row" justifyContent="flex-end" alignItems="center">
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setState({ open: true })}
            edge="start"
          >
            <MenuOpenIcon />
          </IconButton> */}
          <Typography variant="h6" noWrap>
            Menu
          </Typography>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={0.5}
          >
            {menuItems.map((Items) => (
              <Link key={Items.text} href={Items.path} passHref>
                <Button
                  color="inherit"
                  aria-label="open drawer"
                  startIcon={
                    router.pathname == Items.path ? Items.openIcon : Items.icon
                  }
                >
                  <ListItemText
                    className={
                      router.pathname == Items.path
                        ? `${styles.active_Narbar}`
                        : ""
                    }
                  >
                    {Items.text}
                  </ListItemText>
                </Button>
              </Link>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer variant="persistent" anchor="left" open={open}>
        <List>
          <ListItem button onClick={() => setState({ open: false })}>
            <ListItemIcon>
              <MenuIcon color="primary" />
            </ListItemIcon>
            <Typography variant="h6" color="primary" noWrap>
              Menu Items
            </Typography>
            <ListItemIcon></ListItemIcon>
            {/* <ArrowBackIosIcon color="primary" /> */}
          </ListItem>
        </List>

        <List>
          {menuItems.map((Items) => (
            <Link key={Items.text} href={Items.path} passHref>
              <ListItem button onClick={handlerClick}>
                <ListItemIcon>
                  {router.pathname == Items.path ? Items.openIcon : Items.icon}
                </ListItemIcon>
                <ListItemText
                  className={
                    router.pathname == Items.path ? `${styles.active}` : ""
                  }
                >
                  {Items.text}
                </ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </Stack>
  );
};

export default Navbar;
