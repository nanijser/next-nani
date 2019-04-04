import React from "react";
import { Container } from "next/app";
import Router from "next/router";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import createStore from "../modals/store";
import renderLayout from "../utils/render-layouts";
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
    return { pageProps };
  }

  componentDidMount() {
    Router.beforePopState(sad => {
      console.log("sad", sad);
      return true;
    });
  }

  render() {
    const { store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          {renderLayout(this.props, this.state)}
        </Provider>
      </Container>
    );
  }
}
export default withRedux(createStore)(withReduxSaga(App));
