class Autor{ // Creacion de la clase autor
    constructor(id, nombre, apellido) {
        this.id = +(id)
        this.nombre = nombre
        this.apellido = apellido
    }
}

const Autores = [
    {id: "0", nombre: "Antoine", apellido: "de Saint-Exupéry"},
    {id: "1", nombre: "Agatha ", apellido: "Christie"}
] // Creación del Array
const button = document.querySelector(".form_button");



let agregarAutor = () => {
    let id = 2
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    Autores.push(new Autor(id++, nombre, apellido))
    console.log(Autores)
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    agregarAutor();
});