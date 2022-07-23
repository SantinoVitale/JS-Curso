class Libro{
    constructor(nombre, autor, editorial, isbn) {
    this.nombre = nombre
    this.autor = autor
    this.editorial = editorial
    this.isbn = isbn
    }
    info(){
        console.log(this.nombre)
        console.log(this.autor)
        console.log(this.editorial)
        console.log(this.isbn)
    }
}

const libro1 = new Libro({
    nombre: prompt("Ingrese nombre"),
    autor: prompt("Ingrese autor"),
    editorial: prompt("Ingrese editorial"),
    isbn: prompt("Ingrese isbn")
})

libro1.info()

