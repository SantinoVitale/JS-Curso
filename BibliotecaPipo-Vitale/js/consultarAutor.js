import { Autores } from "./DB.js";

//------Variables------
let input = document.querySelector(".consulta_style-search");

//------Funcion para que muestre los autores-------
const showAutores = (autores) => {
  clearList();
  for (const autor of autores) {
    let consultaStyle = document.querySelector(".consulta_style-orden");
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<div class="consulta_style-fieldset">
                <ul>
                    <li>  ${autor.nombre} </li>
                    <li>  ${autor.apellido} </li>
                </ul>
                </div>`;
    consultaStyle.appendChild(contenedor);
  }
  if (autores.length === 0) {
    noAutores();
  }
};


//------Funcion para buscar el autor------
const buscarAutor = (e) => {
  let value = e.target.value;

  if (value && value.trim().length > 0) {
    value = value.trim();

    showAutores(
      Autores.filter((autor) => {
        return autor.nombre.includes(value);
      })
    );
  } else if(value.trim().length == 0){
    showAutores(Autores)
  }else {
    clearList();
  }
};

//------Funcion por si no hay autores que coincidan con la busqueda------
const noAutores = () => {
  const autores = document.querySelector("#Autores");
  const error = document.createElement("h1");
  error.classList.add("error-message");
  const text = document.createTextNode("No results found.");
  error.append(text);
  autores.append(error);
};

//------Funcion para limpiar la lista de Autores------
const clearList = () => {
  const autores = document.querySelector("#Autores");
  while (autores.firstChild) {
    autores.removeChild(autores.firstChild);
  }
};

input.addEventListener("input", buscarAutor);
showAutores(Autores);