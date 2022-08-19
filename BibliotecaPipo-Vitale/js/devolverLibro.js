import {
    Libros, Socios
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
    clearList();
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
                    <li class="fs-6">Socio Prestado: ${infoLibroNew.socioPrestado}</li>
                    <li class="fs-6">Estado: ${infoLibroNew.fechaDevolucion}</li>
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
const guardarLibro = (clave, valor) => {
    localStorage.setItem(clave, valor)
};
const guardarSocio = (clave, valor) => {
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
    clearList();
}

const multarLibro = () => {
    let infoSocio = document.getElementById("inputMirar").value
    Socios.forEach(socio => {
        if (infoSocio == socio.libroPrestado){
            const socioBuscado = JSON.parse(localStorage.getItem("Socio" + socio.id))
            socioBuscado.libroPrestado = ""
            socioBuscado.multas = "$100"
            guardarSocio("Socio" + socio.id, JSON.stringify(socio))
            console.log(socioBuscado)
        }
    })
    clearList();
}

const clearList = () => {
    const borrarLibro = document.querySelector(".consulta_style");
    while (borrarLibro.firstChild) {
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
