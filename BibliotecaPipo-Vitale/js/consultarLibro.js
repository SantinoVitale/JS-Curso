import { Libros } from "./DB.js";

//------Variables------
let input = document.querySelector(".consulta_style-search");

const bringBooks = () => {
  clearList();
  for (let i = 0; i < localStorage.length; i++) {
      let traerTitulos = JSON.parse(localStorage.getItem("Libro" + i));
      if (traerTitulos != null){
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
  


//------Funcion para buscar el libro------
const buscarLibro = (e) => {
  let value = e.target.value;
  let Titulos = []

  for (let i = 0; i < localStorage.length; i++) {
    let traerTitulos = JSON.parse(localStorage.getItem("Libro" + i));
    if (traerTitulos != null){
      Titulos.push(traerTitulos)
    }
    
  }
  if (value && value.trim().length > 0) {
    value = value.trim();
      Titulos.filter((book) => {
        if (book.titulo.includes(value) === true){
          clearList();
          showBooks(book);
        }
        console.log(Titulos.filter(book))
 
      })
      
  } else if(value.trim().length == 0){
    bringBooks();
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
bringBooks();