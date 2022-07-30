const Libros = [
    {id: "0", nombre: "El principito", autor: "Antoine de Saint-Exupéry", editorial: "Océano Historias gráficas", isbn: "978-84-7888-720-0", fecha: "30/07/2022", lugar: "Pasillo 7 - Estaneria 3"},
    {id: "1", nombre: "Diez negritos", autor: "Agatha Christie", editorial: "Collins Crime Club+", isbn: "978-98-7831-765-6", fecha: "30/07/2022", lugar: "Pasillo 2 - Estaneria 4"}
]

const resultado = Libros.filter((libro) => libro.nombre.includes(prompt("Ingrese el nombre del libro")))

console.log(resultado)