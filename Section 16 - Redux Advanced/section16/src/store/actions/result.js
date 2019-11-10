import * as actionTypes from "./actionTypes";

export const save_res = res => {
  return {
    type: actionTypes.STORE_RESULT,
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
    type: actionTypes.DELETE_RESULT,
    resultElId: resElId
  };
};
