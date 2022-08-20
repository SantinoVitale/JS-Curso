import { Libros } from "./DB.js";

//------Variables------
let input = document.querySelector(".consulta_style-search");

//------Funcion para que muestre los libros-------
const showBooks = (books) => {
  clearList();
  for (const book of books) {
    let consultaStyle = document.querySelector(".consulta_style-orden");
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<div class="consulta_style-fieldset">
            <img src='${book.img}' width='150' alt='Imagen Libro'>
                <ul>
                    <li>  ${book.titulo} </li>
                    <li>  ${book.autor} </li>
                    <li>  ${book.editorial} </li>
                    <li>  ${book.isbn} </li>
                    <li>  ${book.sinopsis} </li>
                    <li>  ${book.pasillo} </li>
                    <li>  ${book.estanteria} </li>
                </ul>
                </div>`;
    consultaStyle.appendChild(contenedor);
  }
  if (books.length === 0) {
    noBooks();
  }
};

//------Funcion para buscar el libro------
const buscarLibro = (e) => {
  let value = e.target.value;

  if (value && value.trim().length > 0) {
    value = value.trim();

    showBooks(
      Libros.filter((book) => {
        return book.titulo.includes(value);
      })
    );
  } else if(value.trim().length == 0){
    showBooks(Libros)
  }else {
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
showBooks(Libros);