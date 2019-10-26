import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    setTimeout(() => {
      alert("Saved Data to cloud");
    }, 1000);
    return () => {
      console.log("[Cockpit.js] cleanup");
    };
  }, []);
  useEffect(() => {
    console.log("[Cockpit.js] cleanup");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2 useEffect");
    };
  });
  let assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push("red"); // classes = ['red'];
  }
  if (props.personsLength <= 1) {
    assignedClasses.push("bold"); // classes = ['red', 'bold'];
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button className={btnClass} onClick={props.onClick}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
