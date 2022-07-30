const Autores = [
    {id: "0", nombre: "Antoine", apellido: "de Saint-Exupéry"},
    {id: "1", nombre: "Agatha ", apellido: "Christie"}
]

const resultado = Autores.filter((autor) => autor.nombre.includes(prompt("Ingrese el nombre del autor")))

console.log(resultado)