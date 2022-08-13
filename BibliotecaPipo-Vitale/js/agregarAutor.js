class Autor { // Creacion de la clase autor
    constructor(id, nombre, apellido) {
        this.id = +(id)
        this.nombre = nombre
        this.apellido = apellido
    }
}

const Autores = [{
        id: 0,
        nombre: "Antoine",
        apellido: "de Saint-Exupéry"
    },
    {
        id: 1,
        nombre: "Agatha",
        apellido: "Christie"
    },
    {
        id: 2,
        nombre: "J. R. R. ",
        apellido: "Tolkien"
    },
    {
        id: 3,
        nombre: "James Mathew",
        apellido: "Barrie"
    },
    {
        id: 4,
        nombre: "C. S.",
        apellido: "Lewis"
    },
    {
        id: 5,
        nombre: "Robert",
        apellido: "Greene"
    },
] // Creación del Array
const button = document.querySelector(".form_button");

const guardarAutor = (clave, valor) => {
    localStorage.setItem(clave, valor)
};
for (const Autor of Autores) {
    guardarAutor("Autor" + Autor.id, JSON.stringify(Autor))
}

let agregarAutor = () => {
    let id = Autores.length
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    Autores.push(new Autor(id, nombre, apellido))
    console.log(Autores)
    for (const Autor of Autores) {
        guardarAutor("Autor" + Autor.id, JSON.stringify(Autor))
    }
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    agregarAutor();
});