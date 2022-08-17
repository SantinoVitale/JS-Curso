import { Autores, Autor } from "./DB.js";

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