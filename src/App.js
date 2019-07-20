import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import { brotliDecompress } from "zlib";

class App extends Component {
  state = {
    person: [
      { id: "a1", name: "pavan", age: 23 },
      { id: "a2", name: "ahv", age: 24 },
      { id: "a3", name: "reddy", age: 22 }
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

  changeHandler = (event, key) => {
    let personIndex = this.state.person.findIndex(p => {
      return p.id === key;
    });
    let person = { ...this.state.person[personIndex] };
    person.name = event.target.value;
    let persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState({
      person: persons
    });
  };

  deletePersonHandler = personIndex => {
    let persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({
      person: persons
    });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      border: "1px solid black",
      padding: "16px"
    };

    let personStyleClasses = [];

    let personsComponent = null;
    if (this.state.showPersons) {
      personsComponent = this.state.person.map((p, index) => {
        return (
          <Person
            name={p.name}
            age={p.age}
            key={p.id}
            click={() => this.deletePersonHandler(index)}
            change={event => this.changeHandler(event, p.id)}
          />
        );
      });

      style.backgroundColor = "red";
    }

    if (this.state.person.length <= 2) personStyleClasses.push("red");
    if (this.state.person.length <= 1) personStyleClasses.push("bold");

    return (
      <div className="App">
        <h1>This is my first react js application</h1>
        <p className={personStyleClasses.join(" ")}>Person count</p>
        <button style={style} onClick={this.switchPersonHandler}>
          Toggle Person
        </button>
        <div>{personsComponent}</div>
      </div>
    );
  }
}

export default App;
