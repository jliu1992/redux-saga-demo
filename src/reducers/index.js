import * as types from "../types";
const initialState = {
  count: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.INCREASE: {
      return { count: state.count + 1 };
    }
    case types.DECREASE: {
      if (state.count > 0) return { count: state.count - 1 };
      else return state;
    }
    default: {
      return state;
    }
  }
}
