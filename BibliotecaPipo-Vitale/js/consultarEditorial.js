//------Variables------
let input = document.querySelector(".consulta_style-search");

//------Funcion para traer los Editoriales del localstorage------
const bringEditoriales = () => {
  for (let i = 0; i < localStorage.length; i++) {
      let traerEditoriales = JSON.parse(localStorage.getItem("Editorial" + i));
      if (traerEditoriales != null){
        showEditoriales(traerEditoriales);
      }
      
  }
}

//------Funcion para que muestre las editoriales-------
const showEditoriales = (editoriales) => {
    let consultaStyle = document.querySelector(".consulta_style-orden");
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<div class="consulta_style-fieldset">
                <ul>
                    <li>Nombre: ${editoriales.nombre} </li>
                </ul>
                </div>`;
    consultaStyle.appendChild(contenedor);
}

//------Funcion para buscar la editorial------
const buscarEditorial = (e) => {
  let value = e.target.value;
  let Editorial = []
  for (let i = 0; i < localStorage.length; i++) {
    let traerEditoriales = JSON.parse(localStorage.getItem("Editorial" + i));
    if (traerEditoriales != null) {
      Editorial.push(traerEditoriales)
    }
  }
  if (value && value.trim().length > 0) {
    value = value.trim();
    //------Se fija si lo ingresado filtra bien y en caso que no aplica tira mensaje de error mediante una funcion------
    let filtro = Editorial.filter(Editorial =>  Editorial.nombre.includes(value))
    if (filtro != "") {
      clearList();
      filtro.forEach(array => {
        showEditoriales(array)
      });
    } else {
      clearList();
      noEditoriales();
    }
  } else if(value.trim().length == 0){
    clearList();
    bringEditoriales();
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
bringEditoriales();