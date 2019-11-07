import * as actionTypes from "../actions";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };

    case actionTypes.INCREMENT_VAL:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionTypes.DECREMENT_VAL:
      return {
        ...state,
        counter: state.counter - action.value
      };
  }
  return state;
};

export default reducer;
