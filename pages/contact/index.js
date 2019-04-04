import React from "react";
import Head from "next/head";
import Link from "next/link";
import { connect } from "react-redux";
import { loadData, startClock, tickClock } from "../../modals/actions";
import BtnMP from "./BtnMP";

class Index extends React.Component {
  static async getInitialProps({ store, isServer }) {
    // store.dispatch(tickClock(isServer))

    if (!store.getState().placeholderData) {
      store.dispatch(loadData());
    }
    // const userData = store.getState().placeholderData;
    return { isServer };
  }

  render() {
    const { count } = this.props;
    return (
      <>
        <Head>
          <title>about</title>
          <meta name="keywords" content="about about about" />
        </Head>
        <div style={{ fontSize: "50px" }}>{count}</div>
        <BtnMP />
        <Link href="/about">
          <a>跳转</a>
        </Link>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    count: state.count,
    placeholderData: state.placeholderData
  };
};
const mapDispatchToProps = { loadData, startClock, tickClock };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
