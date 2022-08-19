import {
    Libros
} from "./DB.js";

let inputLibroPrestado = document.querySelector(".form_button")
let inputDevolver = document.querySelector("#Devolver")
let inputMultar = document.querySelector("#Multar")

for (let i = 0; i < localStorage.length; i++) {
    let traerTitulo = JSON.parse(localStorage.getItem("Libro" + i))
    if (traerTitulo != null && traerTitulo.estado == true) {
        let contenedor = document.createElement("datalist")
        contenedor.innerHTML = `<option> ${traerTitulo.titulo} </option>`;
        document.querySelector("#libro_prestado").appendChild(contenedor)
    }
}

const mirarLibro = () => {
    let infoLibro = document.getElementById("inputMirar").value
    Libros.forEach(libro => {
        if (infoLibro == libro.titulo) {
            const infoLibroNew = JSON.parse(localStorage.getItem("Libro" + libro.id))
            let contenedor = document.createElement("div")
            contenedor.innerHTML = `<div class="consulta_style">
            <div class="consulta_style_fieldset-centrado">
            <div class="consulta_style_fieldset-libro">
            <div class="consulta_style-padding">
                <ul>
                   <li class="fs-6">Libro: ${infoLibroNew.titulo}</li>
                    <li class="fs-6">Socio Prestado: ${infoLibroNew.socioPrestado}</li>
                    <li class="fs-6">Estado: ${infoLibroNew.estado}</li>
                </ul>
            </div>
            <form>
            <div>
                <img src='${infoLibroNew.img}' width='150' alt='Imagen Libro'>
            </div>
            </form>
            </div>
            </div>`;
                document.querySelector("#infoLibro").appendChild(contenedor)
            }
    })
    
}
const guardarLibro = (clave, valor) => {
    localStorage.setItem(clave, valor)
};

const devolverLibro = () => {
    let infoLibro = document.getElementById("inputMirar").value
    Libros.forEach(libro => {
        if (infoLibro == libro.titulo) {
            const libroBuscado = JSON.parse(localStorage.getItem("Libro" + libro.id))
            libroBuscado.socioPrestado = ""
            libroBuscado.estado = false
            libroBuscado.fechaDevolucion = ""
            guardarLibro("Libro" + libro.id, JSON.stringify(libro))
        }
    })
}

inputLibroPrestado.addEventListener("click", (e) => {
    e.preventDefault();
    mirarLibro();
});

inputDevolver.addEventListener("click", (e) => {
    e.preventDefault();
    devolverLibro();
});
