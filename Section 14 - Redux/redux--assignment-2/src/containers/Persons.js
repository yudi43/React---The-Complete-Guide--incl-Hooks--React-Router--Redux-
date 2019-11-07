import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import { connect } from "react-redux";

class Persons extends Component {
  state = {
    persons: []
  };

  //   personAddedHandler = () => {
  //     const newPerson = {
  //       id: Math.random(), // not really unique but good enough here!
  //       name: "Max",
  //       age: Math.floor(Math.random() * 40)
  //     };
  //     this.setState(prevState => {
  //       return { persons: prevState.persons.concat(newPerson) };
  //     });
  //   };

  //   personDeletedHandler = personId => {
  //     this.setState(prevState => {
  //       return {
  //         persons: prevState.persons.filter(person => person.id !== personId)
  //       };
  //     });
  //   };

  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onPersonAdded} />
        {this.props.prsns.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={id => this.props.onPersonDeleted(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    prsns: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPersonAdded: (name, age) =>
      dispatch({ type: "ADD_PERSON", personData: { name: name, age: age } }),
    onPersonDeleted: id => dispatch({ type: "DELETE_PERSON", personId: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
