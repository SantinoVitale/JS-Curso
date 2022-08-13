class Libro { // Creacion de la clase Libro
    constructor(id, titulo, autor, editorial, isbn, sinopsis, img, pasillo, estanteria) {
        this.id = +(id)
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

export const Libros = [{
        id: 0,
        titulo: "El principito",
        autor: "Antoine de Saint-Exupéry",
        editorial: "Océano Historias gráficas",
        isbn: "978-84-7888-720-0",
        sinopsis: "El principito es un libro",
        img: "../../img/elprincipito.jpg",
        pasillo: "Pasillo 7",
        estanteria: "Estaneria 3"
    },
    {
        id: 1,
        titulo: "Diez negritos",
        autor: "Agatha Christie",
        editorial: "Collins Crime Club+",
        isbn: "978-98-7831-765-6",
        sinopsis: "Los diez negritos es un libro",
        img: "../../img/dieznegritos.jpg",
        pasillo: "Pasillo 2",
        estanteria: "Estaneria 4"
    },
    {
        id: 2,
        titulo: "Señor de los anillos",
        autor: "J. R. R. Tolkien",
        editorial: "Tirant Lo Blanch.",
        isbn: "978-88-4529-261-3",
        sinopsis: "El libro del señor de los anillos",
        img: "../../img/señordelosanillos.jpg",
        pasillo: "Pasillo 1",
        estanteria: "Estaneria 7"
    },
    {
        id: 3,
        titulo: "Peter Pan",
        autor: "James Matthew Barrie",
        editorial: "Alma.",
        isbn: "978-01-4030-298-1",
        sinopsis: "Libro de Peter Pan",
        img: "../../img/peterpan.jpg",
        pasillo: "Pasillo 8",
        estanteria: "Estaneria 3"
    },
    {
        id: 4,
        titulo: "Narnia",
        autor: "C. S. Lewis",
        editorial: "Pauline Baynes",
        isbn: "978-00-0100-725-3",
        sinopsis: "Libro de Narnia",
        img: "../../img/narnia.jpg",
        pasillo: "Pasillo 6",
        estanteria: "Estaneria 2"
    },
    {
        id: 5,
        titulo: "Las 48 leyes del poder",
        autor: "Robert Greene",
        editorial: "Viking Press",
        isbn: "978-84-2399-181-5",
        sinopsis: "Las 48 leyes del poder",
        img: "../../img/48leyes.jpg",
        pasillo: "Pasillo 5",
        estanteria: "Estaneria 5"
    },
] // Creación del Array y libros ya cargados

const button = document.querySelector(".form_button");

const guardarLibro = (clave, valor) => {
    localStorage.setItem(clave, valor)
};
for (const Libro of Libros) {
    guardarLibro("Libro" + Libro.id, JSON.stringify(Libro))
}

let agregarLibro = () => {
    let id = Libros.length
    let titulo = document.getElementById("titulo").value
    let autor = document.getElementById("autor").value
    let editorial = document.getElementById("editorial").value
    let isbn = document.getElementById("isbn").value
    let sinopsis = document.getElementById("sinopsis").value
    let img = document.getElementById("img").value
    let pasillo = document.getElementById("pasillo").value
    let estanteria = document.getElementById("estanteria").value
    Libros.push(new Libro(id, titulo, autor, editorial, isbn, sinopsis, img, pasillo, estanteria))
    console.log(Libros)
    for (const Libro of Libros) {
        guardarLibro("Libro" + Libro.id, JSON.stringify(Libro))
    }
}


button.addEventListener("click", (e) => {
    e.preventDefault();
    agregarLibro();
});