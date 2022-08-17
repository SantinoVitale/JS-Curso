import { Libros, Libro } from "./DB.js"



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
    Libros.push(new Libro(id, titulo, autor, editorial, isbn, sinopsis, img, pasillo, estanteria, false))
    console.log(Libros)
    for (const Libro of Libros) {
        guardarLibro("Libro" + Libro.id, JSON.stringify(Libro))
    }
}


button.addEventListener("click", (e) => {
    e.preventDefault();
    agregarLibro();
});