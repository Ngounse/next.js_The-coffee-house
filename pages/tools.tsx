import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Coffee from "../src/views/Coffee/Coffee";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Link from "next/link";

const ToolsPage = () => {
  return (
    <div>
      <NavBar />
      <Head>
        <title>Tools</title>
      </Head>
      <h1 className={styles.title}>
        <Link href="/">
          <a>Tools !</a>
        </Link>
      </h1>
      <Coffee />
    </div>
  );
};

export default ToolsPage;
