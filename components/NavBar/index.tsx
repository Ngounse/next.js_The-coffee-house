import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/NarBar.module.css";
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
} from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import MenuIcon from "@material-ui/icons/Menu";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import LocalCafeOutlinedIcon from "@material-ui/icons/LocalCafeOutlined";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import EmojiFoodBeverageOutlinedIcon from "@material-ui/icons/EmojiFoodBeverageOutlined";
import useStates from "../../hooks/useState";

const Navbar = () => {
  const router = useRouter();

  const [state, setState]: any = useStates({
    open: false,
  });
  const { open } = state;

  const handlerClick = () => {
    console.log("::::::", menuItems);
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
  const menuItems = [
    {
      text: "Home",
      icon: <SubjectOutlined />,
      openIcon: <SubjectOutlined color="primary" />,
      path: "/",
    },
    {
      text: "Coffee",
      icon: <LocalCafeIcon />,
      openIcon: <LocalCafeOutlinedIcon color="primary" />,
      path: "/coffee",
    },
    {
      text: "Non coffee",
      path: "/non-coffee",
      icon: <EmojiFoodBeverageIcon />,
      openIcon: <EmojiFoodBeverageOutlinedIcon color="primary" />,
    },

    {
      text: "Snack",
      path: "/snack",
      icon: "",
    },
    {
      text: "Meatballs",
      path: "/meatballs",
      icon: "",
    },
    {
      text: "Tools",
      path: "/tools",
      icon: "",
    },
    {
      text: "About",
      path: "/about",
      icon: "",
    },
    {
      text: "Other",
      path: "/other",
      icon: "",
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
            <MenuOpenIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <List>
          <ListItem button onClick={() => setState({ open: false })}>
            <ListItemIcon>
              <MenuIcon color="secondary" />
            </ListItemIcon>
            <Typography variant="h6" noWrap>
              Menu Items
            </Typography>
            <ListItemIcon />
          </ListItem>
        </List>

        <List>
          {menuItems.map((Items, index) => (
            <Link key={Items.text} href={Items.path} passHref>
              <ListItem button onClick={handlerClick}>
                <ListItemIcon>
                  {router.pathname == Items.path ? Items.openIcon : Items.icon}
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
