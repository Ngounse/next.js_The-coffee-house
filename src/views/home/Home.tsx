import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

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

      <div className={styles.grid}>
        <Link href="/coffee">
          <a className={styles.card}>
            <h3>Coffee &rarr;</h3>
            <p>Coffee is a brewed drink prepared from roasted coffee beans.</p>
          </a>
        </Link>
        <Link href="/non-coffee">
          <a className={styles.card}>
            <h3>Non Coffee &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </Link>
        <Link href="/snack">
          <a className={styles.card}>
            <h3>Snack &rarr;</h3>
            <p>A small amount of food eaten between meals.</p>
          </a>
        </Link>
        <Link href="/meatballs">
          <a className={styles.card}>
            <h3>Meatballs &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </Link>
        <Link href="/tools">
          <a className={styles.card}>
            <h3> Tools &rarr;</h3>
            <p>
              A device or implement, especially one held in the hand, used to
              carry out a particular function.
            </p>
          </a>
        </Link>
        <Link href="/other">
          <a className={styles.card}>
            <h3> Others &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
