import React from "react";
import Head from "next/head";
import { getPosts } from "../api/posts";
import Post from "../components/Post";

const IndexPage = ({ posts }) => (
  <>
    <Head>
      <title>home</title>
      <meta name="keywords" content="home home home" />
    </Head>
    <ul>
      {posts.map(p => (
        <Post key={p.title} post={p} />
            ))}
    </ul>
  </>
);

IndexPage.getInitialProps = async () => {
    const res = await getPosts();
    const json = await res.json();
    return { posts: json };
};

export default IndexPage;
