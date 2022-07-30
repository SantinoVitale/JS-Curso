class Socio{ // Creacion de la clase Socio
    constructor(id, nombre, apellido, dni, email, telefono, domicilio) {
        this.id = +(id)
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.email = email
        this.telefono = telefono
        this.domicilio = domicilio
    }
}

const Socios = [
    {id: "0", nombre:"Santino", apellido: "Vitale", dni: "46325694", email: "santino.pavese@gmial.com", telefono: "2612555473", domicilio: "Chile 925"},
    {id: "1", nombre: "Enrique", apellido: "Palomino", dni: "35332123", email: "Enrique.P@gmail.com", telefono: "2612123567", domicilio: "San Martin 2300"}
] // Creación del Array
Socios.push(new Socio("2", prompt("Ingrese nombre"), prompt("Ingrese apellido"), prompt("Ingrese DNI"), prompt("Ingrese Email"), prompt("Ingrese numero de telefono"), prompt("Ingrese Domicilio")))

console.log(Socios)