import React from "react";

const Searchfield = (props) => {
  return (
    <div>
      <label>Filter by name:</label>
      <input onChange={props.inputHandler} value={props.inputValue}></input>
    </div>
  );
};

export default Searchfield;
