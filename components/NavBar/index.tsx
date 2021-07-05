import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/NarBar.module.css";
// import { useHistory, useLocation } from "react-router-dom";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";

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
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStates from "../../hooks/useState";

const drawerWidth = 240;

const Navbar = () => {
  const router = useRouter();
  // const history = useHistory();
  // const location = useLocation();

  const [state, setState]: any = useStates({
    open: false,
  });
  const { open } = state;

  // const [open, setOpen] = React.useState(false);
  // const handleDrawerOpen = () => {
  //   setState({ showDrawer: true });
  // };
  // const handleDrawerClose = () => {
  //   setState({ showDrawer: false });
  // };
  // console.log("showDrawer::::", open);

  const menuItems = [
    {
      text: "Home",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Coffee",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/coffee",
    },
    {
      text: "Non coffee",
      path: "/non-coffee",
    },

    {
      text: "Snack",
      path: "/snack",
    },
    {
      text: "Meatballs",
      path: "/meatballs",
    },
    {
      text: "Tools",
      path: "/tools",
    },
    {
      text: "About",
      path: "/about",
    },
    {
      text: "Other",
      path: "/other",
    },
  ];

  return (
    <div className={styles.StyledNavBar}>
      <CssBaseline />

      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setState({ open: true })}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <List>
          <ListItem button onClick={() => setState({ open: false })}>
            <ListItemIcon />
            <Typography variant="h6" noWrap>
              Menu Items
            </Typography>
            <ListItemIcon />
          </ListItem>
        </List>

        <List>
          {menuItems.map((Items) => (
            <Link key={Items.text} href={Items.path} passHref>
              <ListItem button>
                <ListItemIcon>
                  {Items.icon}
                  {/* {Items.path != Items.path ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText>{Items.text}</ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
