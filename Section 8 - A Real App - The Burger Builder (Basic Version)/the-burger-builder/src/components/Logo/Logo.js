import React from "react";
import burgerLogo from "../../assets/burger-logo.png";
import classes from "./Logo.module.css";
const logo = props => {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={burgerLogo} alt="Logo" />
    </div>
  );
};

export default logo;
