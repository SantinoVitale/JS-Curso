class Autor{ 
    constructor(id, nombre, apellido) {
        this.id = +(id)
        this.nombre = nombre
        this.apellido = apellido
    }
}

const Autores = [
    {id: "0", nombre: "Antoine", apellido: "de Saint-Exupéry"},
    {id: "1", nombre: "Agatha", apellido: "Christie"},
    {id: "2", nombre: "J. R. R. ", apellido: "Tolkien"},
    {id: "3", nombre: "James Mathew", apellido: "Barrie"},
    {id: "4", nombre: "C. S.", apellido: "Lewis"},
    {id: "5", nombre: "Robert", apellido: "Greene"},
] 

let input = document.querySelector(".consulta_style-search");

for(const Autor of Autores){
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<div class="consulta_style-fieldset">
     <ul>
        <li>  ${Autor.nombre} </li>
        <li>  ${Autor.apellido} </li>
    </div>`;    
    document.querySelector(".consulta_style-orden").appendChild(contenedor)   
}

const buscarAutor = () => {
    const search = document.getElementById("search".toLowerCase()).value
    let resultado = Autores.filter((autor) => autor.nombre.includes(search))
    console.log(resultado)
}




input.addEventListener("input", (e) => {
    e.preventDefault();
    buscarAutor();
});