import React from "react";
import Head from "next/head";
import { getPosts } from "../api/posts";
import Post from "../components/Post";

class IndexPage extends React.Component {
  static async getInitialProps() {
    const res = await getPosts();
    const json = await res.json();
    return { posts: json };
  }

  componentDidMount() {}

  render() {
    const { posts = [] } = this.props;
    return (
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
  }
}

export default IndexPage;
