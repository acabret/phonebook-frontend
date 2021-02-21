import axios from "axios";

// const baseURL = "http://localhost:3001/persons";

const baseURL= "/api/persons"

const getPerson = (id) => {
  const request = axios.get(`${baseURL}/${id}`);
  return request.then((response) => response.data);
};

const getAll = () => {
  // const baseURL = "http://localhost:4000/api/persons";
  const request = axios.get(baseURL);
  return request.then(
    (response) => response.data
    // console.log(response);
  );
};

const createPerson = (person) => {
  const request = axios.post(baseURL, person);
  return request.then((response) => response.data.payload);
};

const deletePerson = (id) => {
  const request = axios.delete(`${baseURL}/${id}`);
  // return request.then(response => response.data)
  return request;
};

const updateNumber = (id, number) => {
  console.log("llega aqui?");
  console.log(id, number);
  const request = axios.patch(`${baseURL}/${id}`, { number });
  // return request.then(response => response.data)
  return request;

  //USAR PATCH para actualizar una o mas propiedades
  //de un recurso, sin afectar a las demas

  //USAR PUT, cuando se quiera reemplazar un recurso
  //por otro
};

export default { getPerson, getAll, createPerson, deletePerson, updateNumber };
