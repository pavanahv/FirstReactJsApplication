import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    person : [
      { name : "pavan", age : 23},
      {name : "ahv", age : 24},
      {name : "reddy", age:22}
    ],

    otherState : "otherStateValue"

  };

  switchPersonHandler = () =>{
    this.setState(
     {
      person : [
        { name : "pavan kumar reddy", age : 23},
        {name : "ahv", age : 24},
        {name : "reddy", age:21}
      ]
     } 
    );
  }

  changeHandler = event => {
    this.setState(
      {
       person : [
         { name : "pavan", age : 23},
         {name : event.target.value, age : 24},
         {name : "reddy", age:21}
       ]
      } 
     );
  }
  render() {
    return (
      <div className="App">
        <h1>This is my first react js application</h1>
        <button onClick={this.switchPersonHandler}>Switch Person</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person name={this.state.person[1].name} age={this.state.person[1].age}
        click = {this.switchPersonHandler}
        change={this.changeHandler}>
          This is my intial
        </Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    );
  }
}

export default App;
