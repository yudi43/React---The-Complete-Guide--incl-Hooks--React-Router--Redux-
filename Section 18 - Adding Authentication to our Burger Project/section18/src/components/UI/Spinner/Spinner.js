import React from "react";
import classes from "./Spinner.module.css";

const spinner = props => {
  return (
    <div className={classes.Lds}>
      <div></div>
      <div></div>
      {/* Loading... */}
    </div>
  );
};

export default spinner;
