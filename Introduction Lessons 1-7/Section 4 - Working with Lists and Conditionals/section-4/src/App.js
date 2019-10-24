import React from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends React.Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 28 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "Some other state"
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 28 },
        { name: "Stephanie", age: 27 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 28 },
        { name: "Stephanie", age: 27 }
      ]
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Hi I'm React app</h1>
        <p>This is really working</p>
        <button
          onClick={() => this.switchNameHandler("Maximilian!!")}
          style={style}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}
          click={this.switchNameHandler.bind(this, "Max!")}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
