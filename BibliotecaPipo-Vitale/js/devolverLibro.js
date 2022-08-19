import {
    Libro,
    Libros, Socios
} from "./DB.js";

let inputLibroPrestado = document.querySelector(".form_button")
let inputDevolver = document.querySelector("#Devolver")
let inputMultar = document.querySelector("#Multar")

for (const Libro of Libros) {
    let traerTitulo = JSON.parse(localStorage.getItem("Libro" + Libro.id))
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
            let contenedorStyle = document.querySelector("#muestraLibro");
            let contenedor = document.createElement("div")
            contenedor.innerHTML = `<div class="consulta_style">
            <div class="consulta_style_fieldset-centrado">
            <div class="consulta_style_fieldset-libro">
            <div class="consulta_style-padding">
                <ul>
                   <li class="fs-6">Libro: ${infoLibroNew.titulo}</li>
                    <li id="SocioPrestado" class="fs-6">Socio Prestado: ${infoLibroNew.socioPrestado}</li>
                    <li class="fs-6">Fecha Devolucion: ${infoLibroNew.fechaDevolucion}</li>
                </ul>
            </div>
            <form>
            <div>
                <img src='${infoLibroNew.img}' width='150' alt='Imagen Libro'>
            </div>
            </form>
            </div>
            </div>`;
                contenedorStyle.appendChild(contenedor)
            }
    })

    
}
const guardar = (clave, valor) => {
    localStorage.setItem(clave, valor)
};

const devolverLibro = () => {
    let infoLibro = document.getElementById("inputMirar").value
    Libros.forEach(Libro => {
        if (infoLibro == Libro.titulo) {
            const libroBuscado = JSON.parse(localStorage.getItem("Libro" + Libro.id))
            libroBuscado.socioPrestado = "No está prestado"
            libroBuscado.estado = false
            libroBuscado.fechaDevolucion = "No está prestado"
            guardar("Libro" + Libro.id, JSON.stringify(Libro))
        }
    })
    clearList();
}

const multarLibro = () => {
    let infoSocio = document.getElementById("inputMirar").value
    for (const Socio of Socios){
        
    }
    clearList();
}

const clearList = () => {
    const borrarLibro = document.querySelector(".consulta_style");
    while (borrarLibro.firstChild != null) {
      borrarLibro.removeChild(borrarLibro.firstChild);
    }
  };


inputLibroPrestado.addEventListener("click", (e) => {
    e.preventDefault();
    mirarLibro();
});

inputDevolver.addEventListener("click", (e) => {
    e.preventDefault();
    devolverLibro();
});

inputMultar.addEventListener("click", (e) => {
    e.preventDefault();
    multarLibro();
})
