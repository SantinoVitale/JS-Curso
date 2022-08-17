import { Autores, } from "./DB.js";


let input = document.querySelector(".consulta_style-search");

for (let i = 0; i < localStorage.length; i++) {
    let traerAutor = JSON.parse(localStorage.getItem("Autor" + i))
    if (traerAutor != null) { // Con esto se libera el error de que intenta leer todas las keys y como no todas son de Autor tira error, con esto se libera del error ya que solo trabaja con los que le da un valor, osea con los Autor
        let contenedor = document.createElement("div")
        contenedor.innerHTML = `<div class="consulta_style-fieldset">
     <ul>
        <li>  ${traerAutor.nombre} </li>
        <li>  ${traerAutor.apellido} </li>
    </div>`;
        document.querySelector(".consulta_style-orden").appendChild(contenedor)
    }

}

const buscarAutor = () => {
    const search = document.getElementById("search").value
    let resultado = Autores.filter((autor) => autor.nombre.includes(search))
    resultado.forEach((autor) => {
        let contenedor = document.createElement("div")
        contenedor.innerHTML = `<div class="consulta_style-fieldset">
     <ul>
        <li>  ${autor.nombre} </li>
        <li>  ${autor.apellido} </li>
    </div>`;
        document.querySelector(".consulta_style-orden").appendChild(contenedor)
    })
}




input.addEventListener("input", (e) => {
    e.preventDefault();
    buscarAutor();
});