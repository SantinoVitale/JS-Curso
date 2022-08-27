import { Autores, Autor } from "./DB.js";

//------Variables------
const button = document.querySelector(".form_button");

//------Funcion para subir el autor------
const guardarAutor = (clave, valor) => {
    localStorage.setItem(clave, valor);
};
for (const Autor of Autores) {
    guardarAutor("Autor" + Autor.id, JSON.stringify(Autor));
}

//------Funcion para guardar el autor------
let agregarAutor = () => {
    let id = Autores.length;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    Autores.push(new Autor(id, nombre, apellido));
    console.log(Autores);
    for (const Autor of Autores) {
        guardarAutor("Autor" + Autor.id, JSON.stringify(Autor));
    }
    swal("Biblioteca Pipo", "Se cargó el autor correctamente", "success");
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    agregarAutor();
});