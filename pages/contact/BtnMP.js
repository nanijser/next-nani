import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../../modals/actions";
import styles from "../about/index.less";

class BtnMP extends React.Component {
  componentDidMount() {}

  render() {
    const { incrementFn, decrementFn } = this.props;
    return (
      <>
        <div className={styles.enterBtn} onClick={() => incrementFn()}>
          +++++++
        </div>
        <div className={styles.enterBtn} onClick={() => decrementFn()}>
          -------
        </div>
      </>
    );
  }
}
const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = { incrementFn: increment, decrementFn: decrement };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BtnMP);
