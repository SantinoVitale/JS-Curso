const Socios = [
    {id: "0", nombre:"santino", apellido: "Vitale", dni: "46325694", email: "santino.pavese@gmial.com", telefono: "2612555473", domicilio: "Chile 925"},
    {id: "1", nombre: "enrique", apellido: "Palomino", dni: "35332123", email: "Enrique.P@gmail.com", telefono: "2612123567", domicilio: "San Martin 2300"}
]

const resultado = Socios.filter((socio) => socio.nombre.includes(prompt("Ingrese el nombre del socio").toLowerCase()))

console.log(resultado)