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

const Libros = [] // Creación del Array
Libros.push(new Libro("0", "El principito", "Antoine de Saint-Exupéry", "Océano Historias gráficas", "978-84-7888-720-0", "30/07/2022", "Pasillo 7 - Estaneria 3")) // Libro ya cargado
Libros.push(new Libro("1", "Diez negritos", "Agatha Christie", "Collins Crime Club+", "978-98-7831-765-6", "30/07/2022", "Pasillo 2 - Estaneria 4")) // Libro ya cargado
Libros.push(new Libro("2", prompt("Ingrese nombre"), prompt("Ingrese autor"), prompt("Ingrese editorial"), prompt("Ingrese isbn"), prompt("Ingrese fecha de carga"), prompt("Ingrese lugar fisico del producto"))) // Pregunta al usuario los datos para cargar el nuevo libro

console.log(Libros) // Mostrar la lista




/*for (const Libro of Libros){ // Hecho para mostrar todos los datos individualmente de los libros cargados
    console.log(Libro.nombre)
    console.log(Libro.autor)
    console.log(Libro.editorial)
    console.log(Libro.isbn)
    console.log(Libro.fecha)
    console.log(Libro.lugar)
}
*/

