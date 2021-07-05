import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import { Grid, Paper } from "@material-ui/core";

const Home = () => {
  return (
    <div>
      <Head>
        <title>The Coffee House</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3 className={styles.title}>
        Welcome to{" "}
        <Link href="/">
          <a>The Coffee House!</a>
        </Link>
      </h3>

      <Grid container>
        <Grid item sm={12} md={6}>
          <Link href="/coffee" passHref>
            <div className={styles.card_home}>
              <h3>Coffee &rarr;</h3>
              <p>
                Coffee is a brewed drink prepared from roasted coffee beans.
              </p>
            </div>
          </Link>
          <Link href="/non-coffee" passHref>
            <div className={styles.card_home}>
              <h3>Non Coffee &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </div>
          </Link>
          <Link href="/snack" passHref>
            <div className={styles.card_home}>
              <h3>Snack &rarr;</h3>
              <p>A small amount of food eaten between meals.</p>
            </div>
          </Link>
        </Grid>
        <Grid item sm={12} md={6}>
          <Link href="/meatballs" passHref>
            <div className={styles.card_home}>
              <h3>Meatballs &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </div>
          </Link>
          <Link href="/tools" passHref>
            <div className={styles.card_home}>
              <h3> Tools &rarr;</h3>
              <p>
                A device or implement, especially one held in the hand, used to
                carry out a particular function.
              </p>
            </div>
          </Link>
          <Link href="/other" passHref>
            <div className={styles.card_home}>
              <h3> Others &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </div>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
