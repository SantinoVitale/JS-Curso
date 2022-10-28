import { Libros, Libro } from "./DB.js"

//------Variables------
const button = document.querySelector(".form_button");

//------Variable para subir el libro------
const guardarLibro = (clave, valor) => {
    localStorage.setItem(clave, valor);
};


//------Variable para guardar el libro------
let agregarLibro = () => {
    let id = Libros.length;
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let editorial = document.getElementById("editorial").value;
    let isbn = document.getElementById("isbn").value;
    let sinopsis = document.getElementById("sinopsis").value;
    let img = document.getElementById("img").value;
    let pasillo = document.getElementById("pasillo").value;
    let estanteria = document.getElementById("estanteria").value;
    Libros.push(new Libro(id, titulo, autor, editorial, isbn, sinopsis, img, pasillo, estanteria, false, "No está prestado", "No está prestado"));
    console.log(Libros);
    guardarLibro("Libro" + id, JSON.stringify(Libros[id]));
    setTimeout(() => {Swal.fire( 'Biblioteca Pipo', 'El libro ha sido cargado correctamente', 'success' )},500)
}


button.addEventListener("click", (e) => {
    e.preventDefault();
    agregarLibro();
});