import { Editoriales } from "./DB.js";

let input = document.querySelector(".consulta_style-search");

for(let i = 0; i < localStorage.length; i++){
    let traerEditorial = JSON.parse(localStorage.getItem("Editorial" + i))
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<div class="consulta_style-fieldset">
     <ul>
        <li>  ${traerEditorial.nombre} </li>
    </div>`;    
    document.querySelector(".consulta_style-orden").appendChild(contenedor)   
}

const buscarEditorial = () => {
    const search = document.getElementById("search").value
    let resultado = Editoriales.filter((editorial) => editorial.nombre.includes(search))
    resultado.forEach((editorial) => {
        let contenedor = document.createElement("div")
        contenedor.innerHTML = `<div class="consulta_style-fieldset">
     <ul>
        <li>  ${editorial.nombre} </li>
        <li>  ${editorial.apellido} </li>
    </div>`; 
        document.querySelector(".consulta_style-orden").appendChild(contenedor)
    })
}

input.addEventListener("input", (e) => {
    e.preventDefault();
    buscarEditorial();
});