import React from "react";
import { connect } from "react-redux";

import * as types from "../types";

function main({ count, dispatch }) {
  const handleIncrease = () => dispatch({ type: types.INCREASE });
  const handleDecrease = () => dispatch({ type: types.DECREASE });
  const handleIncreaseDelay = () => dispatch({ type: types.INCREASE_DELAY });
  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={handleIncrease}>
        increase
      </button>
      <button type="button" onClick={handleDecrease}>
        decrease
      </button>
      <button type="button" onClick={handleIncreaseDelay}>
        increaseDelay
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(main);
