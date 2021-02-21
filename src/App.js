import React, { useState, useEffect } from "react";
import "./App.css";
import "./Contactlist";
import Contactlist from "./Contactlist";
import Searchfield from "./Searchfield";
import PersonForm from "./PersonForm";
import axios from "axios";
import phoneService from "./services/phonebookService";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [nameFilter, setNewFilter] = useState("");

  const handleNewName = (event) => setNewName(event.target.value);
  const handleNewPhone = (event) => setNewPhone(event.target.value);
  const handleNameFilter = (event) => {
    setNewFilter(event.target.value);
  };

  useEffect(() => {
    phoneService
      .getAll()
      .then((persons) => {
        console.log(persons);
        setPersons(persons);
      })
      .catch((err) => {
        // console.log("getAll() not working correctly");
        console.log(err);
        alert("getAll() not working correctly");
      });
  }, []);

  const submitNewContact = (event) => {
    event.preventDefault();
    if (newName && newPhone) {
      const noRepeat = persons.find((person) => person.name === newName);

      if (!noRepeat) {
        const personObject = {
          name: newName,
          number: parseInt(newPhone),
        };

        phoneService.createPerson(personObject).then((createdPerson) => {
          // console.log(createdPerson);
          setPersons(persons.concat(createdPerson));
          setNewName("");
          setNewPhone("");
        });
      } else {
        if (
          window.confirm(
            `${newName} is already registered in the phonebook, do you wish to replace the old number with this new one?`
          )
        ) {
          console.log(noRepeat);
          phoneService
            .updateNumber(noRepeat.id, newPhone)
            .then((response) => {
              console.log(response);
            });

            //FALTA ACTUALIZAR EL ESTADO CON LOS NUEVOS DATOS
          // setPersons(persons.map((person) => {}));
        }

        // setNewName("");
        // setNewPhone("");
      }
    }
  };

  const updateList = (persons) => {
    setPersons(persons);
  };

  const inputHandlers = {
    phoneHandler: handleNewPhone,
    nameHandler: handleNewName,
  };
  const inputValues = { phoneValue: newPhone, nameValue: newName };

  return (
    <div>
      <h1>PhoneBook</h1>
      <Searchfield inputHandler={handleNameFilter} inputValue={nameFilter} />

      <PersonForm
        formHandler={submitNewContact}
        inputHandlers={inputHandlers}
        inputValues={inputValues}
      />
      <Contactlist
        contacts={persons}
        filter={nameFilter}
        listUpdater={updateList}
      />
    </div>
  );
}

export default App;
