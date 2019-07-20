import React from "react";

import "./Person.css"

const Person = (props) => {
  return(
    <div className="Person" onClick={props.click}>
      <h2>My name is {props.name}</h2>
      <p> Age is {props.age}</p>
      <input type="text" onChange={props.change} value={props.name}/>
    </div>
  );
};

export default Person;
