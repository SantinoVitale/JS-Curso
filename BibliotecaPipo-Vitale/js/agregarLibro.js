class Libro{ // Creacion de la clase Libro
    constructor(id, titulo, autor, editorial, isbn, sinopsis, img, pasillo, estanteria, estado) {
        this.id = id
        this.titulo = titulo
        this.autor = autor
        this.editorial = editorial
        this.isbn = isbn
        this.sinopsis = sinopsis
        this.img = img
        this.pasillo = pasillo
        this.estanteria = estanteria
        this.estado = false
    }
}

const Libros = [
    {id: "0", titulo: "El principito", autor: "Antoine de Saint-Exupéry", editorial: "Océano Historias gráficas", isbn: "978-84-7888-720-0", sinopsis:"El principito es un libro", img:"./img1", pasillo: "Pasillo 7", estanteria:"Estaneria 3"},
    {id: "1", titulo: "Diez negritos", autor: "Agatha Christie", editorial: "Collins Crime Club+", isbn: "978-98-7831-765-6", sinopsis:"Los diez negritos es un libro", img:"img2", pasillo: "Pasillo 2", estanteria:"Estaneria 4"}
] // Creación del Array y libros ya cargados

const button = document.querySelector(".form_button");

let id = 2
let titulo = document.getElementById("titulo").value
let autor = document.getElementById("autor").value
let editorial = document.getElementById("editorial").value
let isbn = document.getElementById("isbn").value
let sinopsis = document.getElementById("sinopsis").value
let img = document.getElementById("img").value
let pasillo = document.getElementById("pasillo").value
let estanteria = document.getElementById("estanteria").value

const agregarLibro = () => {
    Libros.push(new Libro(id++, titulo, autor, editorial, isbn, sinopsis, img, pasillo, estanteria))
    console.log(Libros)
    alert("Espere un momento porfa")
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    agregarLibro();
});
