import { Socios } from "./DB.js";

//------Variables------
let input = document.querySelector(".consulta_style-search");

//------Funcion para que muestre los socios-------
const showSocios = (socios) => {
  clearList();
  for (const socio of socios) {
    let consultaStyle = document.querySelector(".consulta_style-orden");
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<div class="consulta_style-fieldset">
                <ul>
                    <li>  ${socio.nombre} </li>
                    <li>  ${socio.apellido} </li>
                    <li>  ${socio.dni} </li>
                    <li>  ${socio.email} </li>
                    <li>  ${socio.telefono} </li>
                    <li>  ${socio.domicilio} </li>
                    <li>  ${socio.observaciones} </li>
                </ul>
                </div>`;
    consultaStyle.appendChild(contenedor);
  }
  if (socios.length === 0) {
    noSocios();
  }
};

//------Funcion para buscar el socio------
const buscarSocio = (e) => {
  let value = e.target.value;

  if (value && value.trim().length > 0) {
    value = value.trim();

    showSocios(
      Socios.filter((socio) => {
        return socio.nombre.includes(value);
      })
    );
  } else if(value.trim().length == 0){
    showSocios(Socios)
  }else {
    clearList();
  }
};

//------Funcion por si no hay socios que coincidan con la busqueda------
const noSocios = () => {
  const socios = document.querySelector("#Socios");
  const error = document.createElement("h1");
  error.classList.add("error-message");
  const text = document.createTextNode("No results found.");
  error.append(text);
  socios.append(error);
};

//------Funcion para limpiar la lista de socios------
const clearList = () => {
  const socios = document.querySelector("#Socios");
  while (socios.firstChild) {
    socios.removeChild(socios.firstChild);
  }
};

input.addEventListener("input", buscarSocio);
showSocios(Socios);