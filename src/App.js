import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [personState,personStateHandler] = useState( {
    person : [
      { name : "pavan", age : 23},
      {name : "ahv", age : 24},
      {name : "reddy", age:22}
    ],

    otherState : "otherStateValue"

  });

  const switchPersonHandler = () =>{
    personStateHandler(
     {
      person : [
        { name : "pavan kumar reddy", age : 23},
        {name : "ahv", age : 24},
        {name : "reddy", age:21}
      ]
     } 
    );
  }

    return (
      <div className="App">
        <h1>This is my first react js application</h1>
        <button onClick={switchPersonHandler}>Switch Person</button>
        <Person name={personState.person[0].name} age={personState.person[0].age} />
        <Person name={personState.person[1].name} age={personState.person[1].age}>
          This is my intial
        </Person>
        <Person name={personState.person[2].name} age={personState.person[2].age} />
      </div>
    );

}

export default App;
