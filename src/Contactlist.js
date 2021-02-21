import React from "react";
// import { deletePerson } from "./services/phonebookService";
import phoneService from "./services/phonebookService";

const Contactlist = ({ contacts, filter, listUpdater }) => {
  const deleteEntry = (person) => {
    if (
      window.confirm(
        `Do you really want to delete ${person.name} from your phonebook?`
      )
    ) {
      phoneService.deletePerson(person.id).then((response) => {
        console.log(response);
        listUpdater(contacts.filter((contact) => contact.id !== person.id));
      });
    }
  };

  if (!contacts.length) return <div>No contacts have been added yet</div>;

  if (!filter) {
    return (
      <div>
        <h2>Numbers</h2>
        <ul>
          {contacts.map((contact) => (
            <Person
              key={contact.id}
              name={contact.name}
              number={contact.number}
              deleteHandler={() => {
                deleteEntry(contact);
              }}
            />
          ))}

          {/* {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} - {contact.number}
            </li>
          ))} */}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Numbers by name: {filter}</h2>
        <ul>
          {contacts
            .filter((contact) =>
              contact.name.toLowerCase().startsWith(filter.toLowerCase())
            )
            .map((contact) => (
              <Person
                key={contact.id}
                name={contact.name}
                number={contact.number}
              />
            ))}
        </ul>
      </div>
    );
  }
};

const Person = ({ name, number, deleteHandler }) => {
  return (
    <li>
      {name} - {number} <button onClick={deleteHandler}>delete</button>
    </li>
  );
};

// export { Contactlist };
export default Contactlist;
