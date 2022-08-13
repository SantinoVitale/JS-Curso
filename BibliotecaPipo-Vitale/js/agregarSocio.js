import { Socios } from "./DB.js"

class Socio{ // Creacion de la clase Socio
    constructor(id, nombre, apellido, dni, email, telefono, domicilio) {
        this.id = +(id)
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.email = email
        this.telefono = telefono
        this.domicilio = domicilio
        this.observaciones = observaciones
    }
}

const button = document.querySelector(".form_button");

const guardarSocio = (clave, valor) => {
    localStorage.setItem(clave, valor)
};
for (const Socio of Socios) {
    guardarSocio("Socio" + Socio.id, JSON.stringify(Socio))
}

let agregarSocio = () => {
    let id = Socios.length
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let dni = document.getElementById("dni").value
    let email = document.getElementById("email").value
    let telefono = document.getElementById("telefono").value
    let domicilio = document.getElementById("domicilio").value
    let observaciones = document.getElementById("observaciones").value
    Socios.push(new Socio(id++, nombre, apellido, dni, email, telefono, domicilio, observaciones))
    console.log(Socios)
    for (const Socio of Socios) {
        guardarSocio("Socio" + Socio.id, JSON.stringify(Socio))
    }
    
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    agregarSocio();
});