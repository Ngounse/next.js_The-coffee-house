import React, { useEffect, useState } from "react";
import styles from "../../../styles/Home.module.css";
import { Typography } from "@material-ui/core/";

const data = [
  {
    title: "Ice ",
    price: "2.00$",
    id: 1,
  },
  {
    title: "Ice ",
    price: "2.00$",
    id: 2,
  },
  {
    title: "Ice ",
    price: "2.00$",
    id: 3,
  },
  {
    title: "Ice ",
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
    <div className={styles.grid}>
      {data.map((item) => (
        <div key={item.id} className={styles.card}>
          <h3>{item.title} &rarr;</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CoffeePage;
