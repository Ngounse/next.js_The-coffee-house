import React, { useEffect, useState } from "react";
// import styles from "../styles/Home.module.css";
import SignIn from "../../src/views/auth/SignIn";
import Head from "next/head";
import Link from "next/link";

const SignInPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <SignIn />
    </>
  );
};

export default SignInPage;
