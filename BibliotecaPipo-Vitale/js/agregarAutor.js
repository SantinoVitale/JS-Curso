class Autor{ // Creacion de la clase autor
    constructor(id, nombre, apellido) {
        this.id = +(id)
        this.nombre = nombre
        this.apellido = apellido
    }
}

const Autores = [
    {id: "0", nombre: "Antoine", apellido: "de Saint-Exupéry"},
    {id: "1", nombre: "Agatha ", apellido: "Christie"}
] // Creación del Array
Autores.push(new Autor("2", prompt("Ingrese Nombre"), prompt("Ingrese Apellido"))) // Pregunta al usuario los datos para cargar un nuevo autor

console.log(Autores)