import React from "react";
import Head from "next/head";
import Router from "next/router";
import styles from "./index.less";

export default () => (
  <>
    <Head>
      <title>about</title>
      <meta name="keywords" content="about about about" />
    </Head>
    <p className={styles.red} />
    <div
      className={styles.enterBtn}
      onClick={() => Router.push("/contact")}
    >
            跳转
    </div>
  </>
);
