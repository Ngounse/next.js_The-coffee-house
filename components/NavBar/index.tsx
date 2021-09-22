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
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import InfoIcon from "@material-ui/icons/Info";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import NewReleasesOutlinedIcon from "@material-ui/icons/NewReleasesOutlined";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import LocalDiningOutlinedIcon from "@material-ui/icons/LocalDiningOutlined";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import GavelOutlinedIcon from "@material-ui/icons/GavelOutlined";
import GavelIcon from "@material-ui/icons/Gavel";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import FastfoodOutlinedIcon from "@material-ui/icons/FastfoodOutlined";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import NoteIcon from "@material-ui/icons/Note";
import NoteOutlinedIcon from "@material-ui/icons/NoteOutlined";
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
  const menuItems = [
    {
      text: "Home",
      icon: <SubjectOutlined />,
      openIcon: <MenuOutlinedIcon color="secondary" />,
      path: "/",
    },
    {
      text: "Coffee",
      icon: <LocalCafeIcon />,
      openIcon: <LocalCafeOutlinedIcon color="secondary" />,
      path: "/coffee",
    },
    {
      text: "Non coffee",
      path: "/non-coffee",
      icon: <EmojiFoodBeverageIcon />,
      openIcon: <EmojiFoodBeverageOutlinedIcon color="secondary" />,
    },

    {
      text: "Snack",
      path: "/snack",
      icon: <FastfoodIcon />,
      openIcon: <FastfoodOutlinedIcon color="secondary" />,
    },
    {
      text: "Meatballs",
      path: "/meatballs",
      icon: <LocalDiningIcon />,
      openIcon: <LocalDiningOutlinedIcon color="secondary" />,
    },
    {
      text: "Tools",
      path: "/tools",
      icon: <GavelIcon />,
      openIcon: <GavelOutlinedIcon color="secondary" />,
    },
    {
      text: "About",
      path: "/about",
      icon: <InfoIcon />,
      openIcon: <InfoOutlinedIcon color="secondary" />,
    },
    {
      text: "Todo",
      path: "/todo",
      icon: <NoteIcon />,
      openIcon: <NoteOutlinedIcon color="secondary" />,
    },
    {
      text: "Map",
      path: "/map",
      icon: <InfoIcon />,
      openIcon: <InfoOutlinedIcon color="secondary" />,
    },
    {
      text: "Other",
      path: "/other",
      icon: <NewReleasesIcon />,
      openIcon: <NewReleasesOutlinedIcon color="secondary" />,
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
            Menu
          </Typography>
          <div className={styles.Narbar_Wrapper}>
            {menuItems.map((Items) => (
              <Link key={Items.text} href={Items.path} passHref>
                <IconButton color="inherit" aria-label="open drawer" edge="end">
                  {router.pathname == Items.path ? Items.openIcon : Items.icon}
                  <ListItemText
                    className={
                      router.pathname == Items.path
                        ? `${styles.active_Narbar}`
                        : ""
                    }
                  >
                    {Items.text}
                  </ListItemText>
                </IconButton>
              </Link>
            ))}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <List>
          <ListItem button onClick={() => setState({ open: false })}>
            {/* <ListItemIcon>
              <MenuIcon color="primary" />
            </ListItemIcon> */}
            <Typography variant="h6" color="primary" noWrap>
              Menu Items
            </Typography>
            <ListItemIcon></ListItemIcon>
            <ArrowBackIosIcon color="primary" />
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
    </div>
  );
};

export default Navbar;
