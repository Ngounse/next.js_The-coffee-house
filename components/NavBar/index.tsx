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
} from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import GavelIcon from '@mui/icons-material/Gavel';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import InfoIcon from '@mui/icons-material/Info';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import EmojiFoodBeverageOutlinedIcon from '@mui/icons-material/EmojiFoodBeverageOutlined';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import SubjectIcon from '@mui/icons-material/Subject';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

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
      icon: <SubjectIcon/>,
      openIcon: <MenuOutlinedIcon color="secondary" />,
      path: "/",
    },
    {
      text: "Coffee",
      icon: <LocalCafeIcon/>,
      openIcon: <LocalCafeOutlinedIcon color="secondary" /> ,
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
    </div>
  );
};

export default Navbar;
