import React from "react";
import Layout from "../layouts/Main";

export default function renderLayout(props) {
  const { Component, pageProps } = props;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
