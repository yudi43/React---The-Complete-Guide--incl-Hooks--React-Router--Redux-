import React from "react";
import classes from "./Order.module.css";

const Order = props => {
  return (
    <div className={classes.Order}>
      <p>Ingredients: </p>
      <p>
        Price: <strong>$ 4.6</strong>
      </p>
    </div>
  );
};

export default Order;
