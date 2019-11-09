export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_VAL = "INCREMENT_VAL";
export const DECREMENT_VAL = "DECREMENT_VAL";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const increment_val = val => {
  return {
    type: INCREMENT,
    value: val
  };
};

export const decrement_val = val => {
  return {
    type: INCREMENT,
    value: val
  };
};

export const store_res = res => {
  return {
    type: INCREMENT,
    result: res
  };
};

export const delete_res = resElId => {
  return {
    type: INCREMENT,
    resultElId: resElId
  };
};
