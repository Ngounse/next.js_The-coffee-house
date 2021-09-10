import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { MapDispay } from "../src/views/Map";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Link from "next/link";

const OtherPage = () => {
  return (
    <div>
      <NavBar />
      <Head>
        <title>Map</title>
      </Head>
      <MapDispay />
    </div>
  );
};

export default OtherPage;
