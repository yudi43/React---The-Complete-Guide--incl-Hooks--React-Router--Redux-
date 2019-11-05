import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NgnItems";
import classes from "./SideDrawer.module.css";
import BackDrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.open];
  }
  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
