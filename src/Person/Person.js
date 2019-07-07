import React from "react";

const Person = (props) => {
  return(
    <div>
      <h2>My name is {props.name}</h2>
      <p> Age is {props.age}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
