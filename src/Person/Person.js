import React from "react";

const Person = (props) => {
  return(
    <div>
      <h2>My name is {props.name}</h2>
      <p> Age is {props.age}</p>
      <p onClick={props.click}>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name}/>
    </div>
  );
};

export default Person;
