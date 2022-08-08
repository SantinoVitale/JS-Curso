class Editorial{ // Creacion de la clase Editorial
    constructor(id, nombre) {
        this.id = +(id)
        this.nombre = nombre
    }
}

const Editoriales = [
    {id: "0", nombre: "Océano Historias gráficas"},
    {id: "1", nombre: "Collins Crime Club+"},
    {id: "2", nombre: "Tirant Lo Blanch."},
    {id: "3", nombre: "Alma."},
    {id: "4", nombre: "Pauline Baynes"},
    {id: "5", nombre: "Viking Press"},
] 

let input = document.querySelector(".consulta_style-search");

for(const Editorial of Editoriales){
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<div class="consulta_style-fieldset">
     <ul>
        <li>  ${Editorial.nombre} </li>
    </div>`;    
    document.querySelector(".consulta_style-orden").appendChild(contenedor)   
}

const buscarEditorial = () => {
    const search = document.getElementById("search".toLowerCase()).value
    let resultado = Autores.filter((autor) => autor.nombre.includes(search))
    console.log(resultado)
}

input.addEventListener("input", (e) => {
    e.preventDefault();
    buscarEditorial();
});