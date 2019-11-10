// this file contains action creators for burger builder

import * as actionTypes from "../actions/actionsTypes";
import axios from "../../axios-orders";

export const addIngredients = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredients = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  };
};

export const initIngredients = () => {
  return dispatch => {
    //async code can be executed here because of redux-thunk
    axios
      .get("https://react-my-burger-4ea57.firebaseio.com/ingredients.json")
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(error => dispatch(fetchIngredientsFailed()));
  };
};
