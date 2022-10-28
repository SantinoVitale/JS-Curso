import { Autores, Autor } from "./DB.js";

//------Variables------
const button = document.querySelector(".form_button");

//------Funcion para subir el autor------
const guardarAutor = (clave, valor) => {
    localStorage.setItem(clave, valor);
};

//------Funcion para guardar el autor------
let agregarAutor = () => {
    let id = Autores.length;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    Autores.push(new Autor(id, nombre, apellido));
    console.log(Autores);
    guardarAutor("Autor" + id, JSON.stringify(Autores[id]));

    setTimeout(() => {Swal.fire( 'Biblioteca Pipo', 'El autor ha sido cargado correctamente', 'success' );}, 500);
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    agregarAutor();
});