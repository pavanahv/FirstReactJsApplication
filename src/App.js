import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is my first react js application</h1>
        <Person name="pavan" age="23" />
        <Person name="ahv" age="24">
          This is my intial
        </Person>
        <Person name="reddy" age="22" />
      </div>
    );
  }
}

export default App;
