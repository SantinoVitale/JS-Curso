//------Variables------
let input = document.querySelector(".consulta_style-search");

//------Funcion para traer los Autores del localstorage------
const bringAutores = () => {
  clearList();
  for (let i = 0; i < localStorage.length; i++) {
    let traerAutor = JSON.parse(localStorage.getItem("Autor" + i));
    if (traerAutor != null) {
      showAutores(traerAutor);
    }
  }
}

//------Funcion para que muestre los autores-------
const showAutores = (autores) => {
    let consultaStyle = document.querySelector(".consulta_style-orden");
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<div class="consulta_style-fieldset">
                <ul>
                    <li>Nombre: ${autores.nombre} </li>
                    <li>Apellido: ${autores.apellido} </li>
                </ul>
                </div>`;
    consultaStyle.appendChild(contenedor);
  }



//------Funcion para buscar el autor------
const buscarAutor = (e) => {
  let value = e.target.value;
  let Autor = []
  for (let i = 0; i < localStorage.length; i++) {
    let traerAutor = JSON.parse(localStorage.getItem("Autor" + i));
    if (traerAutor != null) {
      Autor.push(traerAutor)
    }
  }

  if (value && value.trim().length > 0) {
    value = value.trim();
    //------Se fija si lo ingresado filtra bien y en caso que no aplica tira mensaje de error mediante una funcion------
    let filtro = Autor.filter(Autor => Autor.nombre.includes(value))
    if (filtro != "") {
      clearList();
      filtro.forEach(array => {
        showAutores(array)
      });
    } else {
      clearList();
      noAutores();
    }
  } else if(value.trim().length == 0){
    clearList();
    bringAutores();
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
bringAutores();