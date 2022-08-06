import React, { useEffect, useState } from "react";
import styles from "../../../styles/Home.module.css";
import { Grid, Paper, Typography } from "@mui/material";

const data = [
  {
    title: "Ice late",
    price: "2.00$",
    id: 1,
  },
  {
    title: "Ice Capu",
    price: "2.00$",
    id: 2,
  },
  {
    title: "Ice Amra",
    price: "2.00$",
    id: 3,
  },
  {
    title: "Ice Moka",
    price: "2.00$",
    id: 4,
  },
  {
    title: "Ice ",
    price: "2.00$",
    id: 5,
  },
];

const CoffeePage = () => {
  return (
    <Grid container direction="row">
      {/* <div className={styles.g}> */}
      {data.map((item) => (
        <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
          <div className={styles.card_Item}>
            <h3>{item.title} &rarr;</h3>
            <p>{item.price}</p>
          </div>
        </Grid>
      ))}
      {/* </div> */}
    </Grid>
  );
};

export default CoffeePage;
