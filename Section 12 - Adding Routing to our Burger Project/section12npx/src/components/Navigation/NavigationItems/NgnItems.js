import React from "react";
import classes from "./NgnItems.module.css";
import NavigationItem from "./NavigationItem/NgnItem";

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>
        BurgerBuilder
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  );
};

export default navigationItems;
