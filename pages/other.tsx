import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Other from "../src/views/Other/Other";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Link from "next/link";

const OtherPage = () => {
  return (
    <div>
      <Head>
        <title>Other</title>
      </Head>
      <h1 className={styles.title}>
        <Link href="/">
          <a>Other !</a>
        </Link>
      </h1>
      <Other />
    </div>
  );
};

export default OtherPage;
