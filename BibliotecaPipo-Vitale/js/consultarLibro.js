//------Variables------
let input = document.querySelector(".consulta_style-search");

//------Funcion para traer los Libros del localstorage------
const bringBooks = () => {
  clearList();
  for (let i = 0; i < localStorage.length; i++) {
    let traerTitulos = JSON.parse(localStorage.getItem("Libro" + i));
    if (traerTitulos != null) {
      showBooks(traerTitulos);
    }
  }
}

//------Funcion para que muestre los libros-------
const showBooks = (book) => {

  let consultaStyle = document.querySelector(".consulta_style-orden");
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `<div class="consulta_style-fieldset">
            <img src='${book.img}' width='150' alt='Imagen Libro'>
                <ul>
                    <li>Título: ${book.titulo} </li>
                    <li>Autor: ${book.autor} </li>
                    <li>Editorial: ${book.editorial} </li>
                    <li>ISBN: ${book.isbn} </li>
                    <li>Sinópsis: ${book.sinopsis} </li>
                    <li>Pasillo: ${book.pasillo} </li>
                    <li>Estanteria: ${book.estanteria} </li>
                </ul>
                </div>`;
  consultaStyle.appendChild(contenedor);
}



//------Funcion para buscar el libro------
const buscarLibro = (e) => {
  let value = e.target.value;
  let Titulos = []
  for (let i = 0; i < localStorage.length; i++) {
    let traerTitulos = JSON.parse(localStorage.getItem("Libro" + i));
    if (traerTitulos != null) {
      Titulos.push(traerTitulos)
    }
  }

  if (value && value.trim().length > 0) {
    value = value.trim();
    //------Se fija si lo ingresado filtra bien y en caso que no aplica tira mensaje de error mediante una funcion------
    let filtro = Titulos.filter(Titulos => Titulos.titulo.includes(value))
    if (filtro != "") {
      clearList();
      filtro.forEach(array => {
        showBooks(array)
      });
    } else {
      clearList();
      noBooks();
    }

  } else if (value.trim().length == 0) {
    bringBooks();
  } else {
    clearList();
  }
};

//------Funcion por si no hay libros que coincidan con la busqueda------
const noBooks = () => {
  const libros = document.querySelector("#Libros");
  const error = document.createElement("h1");
  error.classList.add("error-message");
  const text = document.createTextNode("No results found.");
  error.append(text);
  libros.append(error);
};

//------Funcion para limpiar la lista de libros------
const clearList = () => {
  const libros = document.querySelector("#Libros");
  while (libros.firstChild) {
    libros.removeChild(libros.firstChild);
  }
};

input.addEventListener("input", buscarLibro);
bringBooks();