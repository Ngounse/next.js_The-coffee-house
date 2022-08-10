import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Coffee from "../src/views/Coffee/Coffee";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1 className={styles.title}>
        <Link href="/">
          <a>About !</a>
        </Link>
      </h1>
      <div className={styles.card_Item}>
        <h3>The coffee house&rarr;</h3>
        <p>#07, St:313, SK:Beoung Kakmuy KH:Toul Kok City:Phnom Penh</p>
      </div>
    </div>
  );
};

export default AboutPage;
