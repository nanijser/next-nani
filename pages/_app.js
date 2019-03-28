import React from "react";
import { Container } from "next/app";
import Router from "next/router";
import { renderLayout } from "../utils/render-layouts";
import "./_app.less";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return { ...pageProps };
    }

    componentDidMount() {
        Router.beforePopState(sad => {
            console.log("sad", sad);
            return true;
        });
    }

    render() {
        return (
          <Container>
            <React.Fragment>
              {renderLayout(this.props, this.state)}
            </React.Fragment>
          </Container>
        );
    }
}
export default App;
