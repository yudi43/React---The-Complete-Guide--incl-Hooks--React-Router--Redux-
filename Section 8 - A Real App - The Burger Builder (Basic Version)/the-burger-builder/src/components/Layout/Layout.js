import React from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";

const layout = props => {
  return (
    <Aux>
      <div>Toolbar, sideDrawer, backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
