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
    type: INCREMENT_VAL,
    value: val
  };
};

export const decrement_val = val => {
  return {
    type: DECREMENT_VAL,
    value: val
  };
};

export const save_res = res => {
  return {
    type: STORE_RESULT,
    result: res
  };
};

export const store_res = res => {
  return dispatch => {
    setTimeout(() => {
      dispatch(save_res(res));
    }, 2000);
  };
};

export const delete_res = resElId => {
  return {
    type: INCREMENT,
    resultElId: resElId
  };
};
