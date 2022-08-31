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

    swal("Biblioteca Pipo", "Se cargó el autor correctamente", "success");
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    agregarAutor();
});