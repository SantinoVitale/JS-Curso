class Libro{ // Creacion de la clase Libro
    constructor(id, nombre, autor, editorial, isbn, fecha, lugar, estado) {
        this.id = +(id)
        this.nombre = nombre
        this.autor = autor
        this.editorial = editorial
        this.isbn = isbn
        this.fecha = fecha
        this.lugar = lugar
        this.estado = false
    }
}

const Libros = [
    {id: "0", nombre: "El principito", autor: "Antoine de Saint-Exupéry", editorial: "Océano Historias gráficas", isbn: "978-84-7888-720-0", fecha: "30/07/2022", lugar: "Pasillo 7 - Estaneria 3"},
    {id: "1", nombre: "Diez negritos", autor: "Agatha Christie", editorial: "Collins Crime Club+", isbn: "978-98-7831-765-6", fecha: "30/07/2022", lugar: "Pasillo 2 - Estaneria 4"}
] // Creación del Array y libros ya cargados

Libros.push(new Libro("2", prompt("Ingrese nombre"), prompt("Ingrese autor"), prompt("Ingrese editorial"), prompt("Ingrese isbn"), prompt("Ingrese fecha de carga"), prompt("Ingrese lugar fisico del producto")))

console.log(Libros)