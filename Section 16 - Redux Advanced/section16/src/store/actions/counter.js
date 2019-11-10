import * as actionTypes from "./actionTypes";

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

export const increment_val = val => {
  return {
    type: actionTypes.INCREMENT_VAL,
    value: val
  };
};

export const decrement_val = val => {
  return {
    type: actionTypes.DECREMENT_VAL,
    value: val
  };
};
