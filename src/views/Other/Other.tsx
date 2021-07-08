// import React from "react";
// // react plugin for creating date-time-picker
// import Datetime from "react-datetime";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import FormControl from "@material-ui/core/FormControl";

// const style = {
//   label: {
//     color:"rgba(0, 0, 0, 0.26)",
//     cursor: "pointer",
//     display: "inline-flex",
//     fontSize: "14px",
//     transition: "0.3s ease all",
//     lineHeight: "1.428571429",
//     fontWeight: "400",
//     paddingLeft: "0",
//   },
// };

// const useStyles = makeStyles(style);

// const datetimePlaceholder = { placeholder: "Datetime Picker Here" };
// const datePlaceholder = { placeholder: "Date Picker Here" };
// const timePlaceholder = { placeholder: "Time Picker Here" };

// export default function DateTimePicker() {
//   const classes = useStyles();
//   return (
//     <div>
//       <InputLabel className={classes.label}>Datetime Picker</InputLabel>
//       <br />
//       <FormControl fullWidth>
//         <Datetime inputProps={datetimePlaceholder} />
//       </FormControl>
//       <InputLabel className={classes.label}>Date Picker</InputLabel>
//       <br />
//       <FormControl fullWidth>
//         <Datetime timeFormat={false} inputProps={datePlaceholder} />
//       </FormControl>
//       <InputLabel className={classes.label}>Time Picker</InputLabel>
//       <br />
//       <FormControl fullWidth>
//         <Datetime dateFormat={false} inputProps={timePlaceholder} />
//       </FormControl>
//     </div>
//   );
// }
import React, { Component } from "react";
import PropTypes from "prop-types";

export class Other extends Component {
  static propTypes = {};

  render() {
    return <div>Comming soons@!</div>;
  }
}

export default Other;
