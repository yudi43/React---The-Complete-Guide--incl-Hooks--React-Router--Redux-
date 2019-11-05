import React from "react";
import classes from "./NgnItems.module.css";
import NavigationItem from "./NavigationItem/NgnItem";

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">BurgerBuilder</NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
  );
};

export default navigationItems;
