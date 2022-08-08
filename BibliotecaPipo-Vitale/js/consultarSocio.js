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
    {id: "0", nombre:"Santino", apellido: "Vitale", dni: "46325694", email: "santino.pavese@gmial.com", telefono: "2612555473", domicilio: "Chile 925", observaciones:"Gordo"},
    {id: "1", nombre: "Enrique", apellido: "Palomino", dni: "35332123", email: "Enrique.P@gmail.com", telefono: "2612123567", domicilio: "San Martin 2300", observaciones:"Tutor de Coder"},
    {id: "2", nombre: "Leopoldo", apellido: "Rigau", dni: "46619055", email: "leopoldo.g@gmail.com", telefono: "2614648847", domicilio: "Azcuenaga 1832", observaciones:"Morocho"},
    {id: "3", nombre: "Gaston", apellido: "Karalevich", dni: "46325842", email: "gaston.k@gmail.com", telefono: "261277324", domicilio: "Rodriguez Peñas 2000", observaciones:"Le gustan los dinosaurios"},
    {id: "4", nombre: "Valentin", apellido: "Hidalgo", dni: "46547673", email: "Valentin.h@gmail.com", telefono: "2617320014", domicilio: "San Martin 202", observaciones:"Pelo largo"},
    {id: "5", nombre: "Luca", apellido: "Llop", dni: "46322001", email: "Luca.l@gmail.com", telefono: "2611212102", domicilio: "Si tiene", observaciones:"Alto, no proporcionó domicilio"},
] // Creación del Array

let input = document.querySelector(".consulta_style-search");

for(const Socio of Socios){
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<div class="consulta_style-fieldset">
     <ul>
        <li>  ${Socio.nombre} </li>
        <li>  ${Socio.apellido} </li>
        <li>  ${Socio.dni} </li>
        <li>  ${Socio.email} </li>
        <li>  ${Socio.telefono} </li>
        <li>  ${Socio.domicilio} </li>
        <li>  ${Socio.observaciones} </li>
     </ul>
    </div>`;    
    document.querySelector(".consulta_style-orden").appendChild(contenedor)   
}

const buscarSocio = () => {
    const search = document.getElementById("search".toLowerCase()).value
    let resultado = Socio.filter((socio) => socio.titulo.includes(search))
    console.log(resultado)
}




input.addEventListener("input", (e) => {
    e.preventDefault();
    buscarSocio();
});