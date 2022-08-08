import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 750,
      md: 950,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    // mode: "dark",
    primary: {
      main: "#bcaaa4",
    },
    secondary: {
      main: "#69f0ae",
    },
    error: {
      main: red.A400,
    },
  },
  spacing: 8,
  typography: {
    // fontSize: 12,
    // subtitle1: {
    //   fontSize: 12,
    // },
    // body1: {
    //   fontWeight: 700,
    // },
    // button: {
    //   fontStyle: "italic",
    // },
  },
  // components: {
  //   MuiButton: {
  //     defaultProps: {
  //       size: "large",
  //     },
  //   },
  // },
});
// theme.typography.h3 = {
//   fontSize: "1.2rem",
//   "@media (min-width:600px)": {
//     fontSize: "1.5rem",
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: "2rem",
//   },
// };

// let theme = createTheme();
// theme = responsiveFontSizes(theme);

export default theme;
