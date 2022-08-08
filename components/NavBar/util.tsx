import GavelIcon from "@mui/icons-material/Gavel";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import InfoIcon from "@mui/icons-material/Info";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import NewReleasesOutlinedIcon from "@mui/icons-material/NewReleasesOutlined";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocalDiningOutlinedIcon from "@mui/icons-material/LocalDiningOutlined";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import LocalCafeOutlinedIcon from "@mui/icons-material/LocalCafeOutlined";
import SubjectIcon from "@mui/icons-material/Subject";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const menuItems = [
  {
    text: "Home",
    icon: <SubjectIcon />,
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
    text: "Non-coffee",
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
