import React from "react";
import Head from "next/head";
import Link from "next/link";

export default () => (
  <>
    <Head>
      <title>about</title>
      <meta name="keywords" content="about about about" />
    </Head>
    <Link href="/about">
      <a>跳转</a>
    </Link>
  </>
);
