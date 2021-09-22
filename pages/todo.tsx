import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Todo from "../src/views/Todo";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Link from "next/link";

const TodoPage = () => {
  return (
    <div>
      <NavBar />
      <Head>
        <title>Todo</title>
      </Head>
      <h1 className={styles.title}>
        <Link href="/">
          <a>Todo !</a>
        </Link>
      </h1>
      <Todo />
    </div>
  );
};

export default TodoPage;
