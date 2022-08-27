import { Editorial, Editoriales } from "./DB.js";

//------Variables------
let input = document.querySelector(".consulta_style-search");

//------Funcion para que muestre las editoriales-------
const showEditoriales = (editoriales) => {
  clearList();
  for (const editorial of editoriales) {
    let consultaStyle = document.querySelector(".consulta_style-orden");
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<div class="consulta_style-fieldset">
                <ul>
                    <li>  ${editorial.nombre} </li>
                </ul>
                </div>`;
    consultaStyle.appendChild(contenedor);
  }
  if (editoriales.length === 0) {
    noEditoriales();
  }
};

//------Funcion para buscar la editorial------
const buscarEditorial = (e) => {
  let value = e.target.value;

  if (value && value.trim().length > 0) {
    value = value.trim();

    showEditoriales(
      Editoriales.filter((editorial) => {
        return editorial.nombre.includes(value);
      })
    );
  } else if(value.trim().length == 0){
    showEditoriales(Editoriales)
  }else {
    clearList();
  }
};

//------Funcion por si no hay editoriales que coincidan con la busqueda------
const noEditoriales = () => {
  const editoriales = document.querySelector("#Editorial");
  const error = document.createElement("h1");
  error.classList.add("error-message");
  const text = document.createTextNode("No results found.");
  error.append(text);
  editoriales.append(error);
};

//------Funcion para limpiar la lista de editoriales------
const clearList = () => {
  const editoriales = document.querySelector("#Editorial");
  while (editoriales.firstChild) {
    editoriales.removeChild(editoriales.firstChild);
  }
};

input.addEventListener("input", buscarEditorial);
showEditoriales(Editoriales);