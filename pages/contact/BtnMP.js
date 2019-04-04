import React from "react";
import { connect } from "react-redux";
import {
  increment as incrementAct,
  decrement as decrementAct
} from "../../modals/actions";
import styles from "../about/index.less";

class BtnMP extends React.Component {
  componentDidMount() {}

  render() {
    const { increment, decrement } = this.props;
    return (
      <>
        <div className={styles.enterBtn} onClick={() => increment()}>
          +++++++
        </div>
        <div className={styles.enterBtn} onClick={() => decrement()}>
          -------
        </div>
      </>
    );
  }
}
const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = { incrementAct, decrementAct };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BtnMP);
