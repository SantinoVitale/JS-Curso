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

const Socios = [
    {id: "0", nombre:"Santino", apellido: "Vitale", dni: "46325694", email: "santino.pavese@gmial.com", telefono: "2612555473", domicilio: "Chile 925"},
    {id: "1", nombre: "Enrique", apellido: "Palomino", dni: "35332123", email: "Enrique.P@gmail.com", telefono: "2612123567", domicilio: "San Martin 2300"}
] // Creación del Array

const button = document.querySelector(".form_button");



let agregarSocio = () => {
    let id = 2
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let dni = document.getElementById("dni").value
    let email = document.getElementById("email").value
    let telefono = document.getElementById("telefono").value
    let domicilio = document.getElementById("domicilio").value
    let observaciones = document.getElementById("observaciones").value
    Socios.push(new Socio(id++, nombre, apellido, dni, email, telefono, domicilio, observaciones))
    console.log(Socios)
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    agregarSocio();
});