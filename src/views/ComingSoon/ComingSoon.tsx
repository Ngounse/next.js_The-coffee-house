import React from "react";
import styles from "../../../styles/Home.module.css";

const data = [
  {
    title: "Coming soon !!",
    price: "?.??$",
    id: 1,
  },
  {
    title: "Coming soon !!",
    price: "?.??$",
    id: 2,
  },
  {
    title: "Coming soon !!",
    price: "?.??$",
    id: 3,
  },
  {
    title: "Coming soon !!",
    price: "?.??$",
    id: 4,
  },
  {
    title: "Coming soon !!",
    price: "?.??$",
    id: 5,
  },
  {
    title: "Coming soon !!",
    price: "?.??$",
    id: 6,
  },
];
const ComingSoon = () => {
  return (
    <div className={styles.grid}>
      {data.map((item) => (
        <a key={item.id} className={styles.card}>
          <h3>{item.title} &rarr;</h3>
          <p>{item.price}</p>
        </a>
      ))}
    </div>
  );
};

export default ComingSoon;
