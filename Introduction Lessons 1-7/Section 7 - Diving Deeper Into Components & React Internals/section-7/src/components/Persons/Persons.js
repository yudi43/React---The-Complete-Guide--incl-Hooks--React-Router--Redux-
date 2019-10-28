import React from "react";
import Person from "./Person/Person";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
// import AuthContext from "../../context/auth-context";

class Persons extends React.PureComponent {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("[Persons.js] getDerivedStateFromProps");
  //     return state;
  //   }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     //should return true or false
  //     console.log("[persons.js] shouldComponentUpdate");
  //     if (
  //       nextProps.persons !== this.props.persons ||
  //       nextProps.changed !== this.props.changed ||
  //       nextProps.clicked !== this.props.clicked
  //     ) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "snapshot" };
  }
  componentDidUpdate(prevState, prevProps, snapshot) {
    console.log("[Persons.js] componentDidUpdate", snapshot);
  }
  componentWillUnmount() {
    console.log("[Persons.js] Component will unmount,");
  }
  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      console.log("[Persons.js] rendering....");
      return (
        <ErrorBoundary key={person.id}>
          <Person
            name={person.name}
            age={person.age}
            click={() => this.props.clicked(index)}
            changed={event => this.props.changed(event, person.id)}
          />
        </ErrorBoundary>
      );
    });
  }
}

export default Persons;
