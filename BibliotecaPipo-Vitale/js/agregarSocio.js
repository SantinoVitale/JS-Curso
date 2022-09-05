import { Socios, Socio } from "./DB.js"

//------Variables------
const button = document.querySelector(".form_button");

//------Funcion para subir el socio------
const guardarSocio = (clave, valor) => {
    localStorage.setItem(clave, valor);
};

//------Funcion para guardar el socio------
let agregarSocio = () => {
    let id = Socios.length;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let dni = document.getElementById("dni").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let domicilio = document.getElementById("domicilio").value;
    let observaciones = document.getElementById("observaciones").value;
    Socios.push(new Socio(id, nombre, apellido, dni, email, telefono, domicilio, observaciones, "No posee libro", "No posee multas"));
    console.log(Socios);
    guardarSocio("Socio" + id, JSON.stringify(Socios[id]));
    
    setTimeout(() => {swal("Biblioteca Pipo", "Se cargó el socio correctamente", "success")}, 500)
    
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    agregarSocio();
});