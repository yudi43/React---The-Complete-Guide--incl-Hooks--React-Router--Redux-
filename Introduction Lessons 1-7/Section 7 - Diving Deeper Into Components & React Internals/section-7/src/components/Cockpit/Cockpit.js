import React from "react";
import classes from "./Cockpit.css";

const Cockpit = props => {
  let assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push("red"); // classes = ['red'];
  }
  if (props.persons.length <= 1) {
    assignedClasses.push("bold"); // classes = ['red', 'bold'];
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hi I'm React app</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button className={btnClass} onClick={props.onClick}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
