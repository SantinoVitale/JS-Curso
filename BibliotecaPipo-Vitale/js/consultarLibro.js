import { Libros } from "./DB.js"

let input = document.querySelector(".consulta_style-search");
let numLibro = 0

for (let i = 0; i < localStorage.length; i++) {
    let traerLibro = JSON.parse(localStorage.getItem("Libro" + numLibro++))
    if (traerLibro != null){ // Con esto se libera el error de que intenta leer todas las keys y como no todas son de Libros tira error, con esto se libera del error ya que solo trabaja con los que le da un valor, osea con los Libros
        let contenedor = document.createElement("div")
        contenedor.innerHTML = `<div class="consulta_style-fieldset">
        <img src='${traerLibro.img}' width='150' alt='Imagen Libro'>
        <ul>
            <li>  ${traerLibro.titulo} </li>
            <li>  ${traerLibro.autor} </li>
            <li>  ${traerLibro.editorial} </li>
            <li>  ${traerLibro.isbn} </li>
            <li>  ${traerLibro.sinopsis} </li>
            <li>  ${traerLibro.pasillo} </li>
            <li>  ${traerLibro.estanteria} </li>
        </ul>
        </div>`;
        document.querySelector(".consulta_style-orden").appendChild(contenedor)
    }
}

const buscarLibro = () => {
    const search = document.getElementById("search").value
    let resultado = Libros.filter((libro) => libro.titulo.includes(search))
    resultado.forEach((libro) => {
        let contenedor = document.createElement("div")
        contenedor.innerHTML = `<div class="consulta_style-fieldset">
        <img src='${libro.img}' width='150' alt='Imagen Libro'>
     <ul>
        <li>  ${libro.titulo} </li>
        <li>  ${libro.autor} </li>
        <li>  ${libro.editorial} </li>
        <li>  ${libro.isbn} </li>
        <li>  ${libro.sinopsis} </li>
        <li>  ${libro.pasillo} </li>
        <li>  ${libro.estanteria} </li>
     </ul>
    </div>`;
        document.querySelector(".consulta_style-orden").appendChild(contenedor)
    })
}

input.addEventListener("input", (e) => {
    e.preventDefault();
    buscarLibro();
});