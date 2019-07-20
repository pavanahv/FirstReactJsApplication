import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import { brotliDecompress } from "zlib";

class App extends Component {
  state = {
    person: [
      { name: "pavan", age: 23 },
      { name: "ahv", age: 24 },
      { name: "reddy", age: 22 }
    ],

    otherState: "otherStateValue",
    showPersons: false
  };

  switchPersonHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons
    });
  };

  changeHandler = event => {
    this.setState({
      person: [
        { name: "pavan", age: 23 },
        { name: event.target.value, age: 24 },
        { name: "reddy", age: 21 }
      ]
    });
  };
  render() {
    const style = {
      backgroundColor: "blue",
      color: "white",
      border: "1px solid black"
    };

    let personsComponent = null;
    if (this.state.showPersons) {
      personsComponent = this.state.person.map(p => {
        return <Person name={p.name} age={p.age} />;
      });
    }
    return (
      <div className="App">
        <h1>This is my first react js application</h1>
        <button style={style} onClick={this.switchPersonHandler}>
          Toggle Person
        </button>
        <div>{personsComponent}</div>
      </div>
    );
  }
}

export default App;
