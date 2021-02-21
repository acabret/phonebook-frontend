import React from "react";

const PersonForm = (props) => {

  return (
    <form onSubmit={props.formHandler}>
      <div>
        <h2>Add new contact</h2>
        <label htmlFor="name ">Name:</label>
        <input name="name" onChange={props.inputHandlers.nameHandler} value={props.inputValues.nameValue}></input>
      </div>
      <div>
        <label htmlFor="phone ">Phone:</label>
        <input name="phone" onChange={props.inputHandlers.phoneHandler} value={props.inputValues.phoneValue}></input>
      </div>
      <button type="submit">Add new contact</button>
    </form>
  );
};

// formHandler={submitNewContact} inputHandlers={inputHandlers} inputValues={inputValues}

export default PersonForm;
