import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NgnItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <Logo height="80%" />
      <nav className={classes.DesktopOnly}>
        {/* <ul></ul> */}
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
