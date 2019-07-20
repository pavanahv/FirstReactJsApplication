import React from "react";

import "./Person.css"

const Person = (props) => {
  return(
    <div className="Person">
      <h2>My name is {props.name}</h2>
      <p> Age is {props.age}</p>
      <input type="text" onChange={props.change} value={props.name}/>
      <button onClick={props.click}>Delete</button>
    </div>
  );
};

export default Person;
