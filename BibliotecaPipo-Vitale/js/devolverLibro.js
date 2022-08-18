import {
    fechaDevolucion,
    Libros,
    Socios,
    Libro
} from "./DB.js";

const inputLibroPrestado = document.querySelector(".form_button")

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
            <div>
                <a class="form_button" href="#">Confirmar devolucion</a>
                <a class="form_button" href="#">Generar multa</a>
            </div>
            </div>
            </div>`;
                document.querySelector("#infoLibro").appendChild(contenedor)
            }
        })
}

inputLibroPrestado.addEventListener("click", (e) => {
    e.preventDefault();
    mirarLibro();
});