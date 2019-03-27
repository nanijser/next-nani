import React from 'react'
import App, { Container } from "next/app";
import Head from "next/head";
import { renderLayout } from "../utils/render-layouts";
import Post from '../components/Post'
import './_app.less'

class IndexPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = { };
  }

  static async getInitialProps({ Component, router, ctx }) {
      let pageProps = {};

      if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx);
      }
      return { ...pageProps };
  }

  render() {
    const {
      Component
    } = this.props
    sss = ss + "...";
    return (
      <Container>
        <Head>
            <meta name="keywords" content="...." />
        </Head>
        <React.Fragment>
            {renderLayout(this.props, this.state)}
        </React.Fragment>
      </Container>
    )
  }
}
export default IndexPage
