import * as React from "react";
import Head from "next/head";
import Router from "next/router";
import styles from "./index.less";
import Title from "./title";

const About = () => (
  <>
    <Head>
      <title>about</title>
      <meta name="keywords" content="about about about" />
    </Head>
    <div>
      <Title name="h about!" />
    </div>
    <p className={styles.red} />
    <div className={styles.enterBtn} onClick={() => Router.push("/contact")}>
      跳转
    </div>
  </>
);
About.getInitialProps = async ({ store }) => {
  console.log("placeholderData......", store.getState().placeholderData);
  return {};
};
export default About;
