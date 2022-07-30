const Autores = [
    {id: "0", nombre: "antoine", apellido: "de saint-exupéry"},
    {id: "1", nombre: "agatha ", apellido: "christie"}
]

const resultado = Autores.filter((autor) => autor.nombre.includes(prompt("Ingrese el nombre del autor").toLowerCase()))

console.log(resultado)