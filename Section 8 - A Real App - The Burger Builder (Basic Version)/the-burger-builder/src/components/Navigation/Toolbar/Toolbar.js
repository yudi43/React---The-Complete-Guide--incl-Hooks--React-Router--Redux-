import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NgnItems";

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>
        {/* <ul></ul> */}
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
