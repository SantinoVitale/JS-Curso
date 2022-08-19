import {
    Libros
} from "./DB.js";

let input = document.querySelector(".consulta_style-search");

const showBooks = (books) => {
    clearList();
    for (const book of books) {
        let traerTitulo = JSON.parse(localStorage.getItem("Libro" + book.id))
        if (traerTitulo.estado == true) {
            let consultaStyle = document.querySelector(".consulta_style-orden");
            let contenedor = document.createElement("div");
            contenedor.innerHTML = `<div class="consulta_style-fieldset">
            <img src='${traerTitulo.img}' width='150' alt='Imagen Libro'>
                <ul>
                    <li>Titulo: ${traerTitulo.titulo} </li>
                    <li>Socio Prestado: ${traerTitulo.socioPrestado} </li>
                    <li>Fecha de devolucion: ${traerTitulo.fechaDevolucion} </li>
                </ul>
                </div>`;
            consultaStyle.appendChild(contenedor);
        }

    }
    if (books.length === 0) {
        noBooks();
    }
};

const buscarLibro = (e) => {
    let value = e.target.value;

    if (value && value.trim().length > 0) {
        value = value.trim();

        showBooks(
            Libros.filter((book) => {
                return book.titulo.includes(value);
            })
        );
    } else if (value.trim().length == 0) {
        showBooks(Libros)
    } else {
        clearList();
    }
};

const noBooks = () => {
    const libros = document.querySelector("#Libros");
    const error = document.createElement("h1");
    error.classList.add("error-message");
    const text = document.createTextNode("No results found.");
    error.append(text);
    libros.append(error);
};

const clearList = () => {
    const libros = document.querySelector("#LibrosPrestados");
    while (libros.firstChild) {
        libros.removeChild(libros.firstChild);
    }
};

input.addEventListener("input", buscarLibro);
showBooks(Libros);