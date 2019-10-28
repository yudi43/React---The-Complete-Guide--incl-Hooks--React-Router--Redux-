import React, { useEffect } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const Cockpit = props => {
  const authContext = React.useContext(AuthContext);
  //   const toggleButtonRef = useRef(null);
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // setTimeout(() => {
    //   alert("Saved Data to cloud");
    // }, 1000);
    // toggleButtonRef.current.click();
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
      <button
        // ref={toggleButtonRef}
        className={btnClass}
        onClick={props.onClick}
      >
        Toggle Persons
      </button>
      {/* <AuthContext.Consumer> */}
      <button onClick={authContext.login}>Login</button>
      {/* </AuthContext.Consumer> */}
    </div>
  );
};

export default React.memo(Cockpit);
