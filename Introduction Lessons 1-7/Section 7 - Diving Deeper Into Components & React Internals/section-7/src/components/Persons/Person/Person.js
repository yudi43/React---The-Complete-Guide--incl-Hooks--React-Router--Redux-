import React, { Component } from "react";
import "./Person.css";
import Aux from "../../../HOC/Auxiliary";

class Person extends Component {
  render() {
    return (
      <React.Fragment>
        {/* // <div className="Person"> */}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>,
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </React.Fragment>
      // {/* </div> */}
    );
  }
}

export default Person;
