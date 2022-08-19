import { fechaDevolucion, Libros, Socios } from "./DB.js";

for (let i = 0; i < localStorage.length; i++) {
    let traerTitulo = JSON.parse(localStorage.getItem("Libro" + i))
    if(traerTitulo != null){
        let contenedor = document.createElement("datalist")
        contenedor.innerHTML = `<option> ${traerTitulo.titulo} </option>`;
        document.querySelector("#libro").appendChild(contenedor)
    }
}

for (let o = 0;o < localStorage.length; o++){
    
    let traerSocio = JSON.parse(localStorage.getItem("Socio" + o))
    if(traerSocio != null){
        let contenedor2 = document.createElement("datalist")
        contenedor2.innerHTML = `<option> ${traerSocio.nombre} </option>`;
        document.querySelector("#socio").appendChild(contenedor2)
    }
}


const inputPrestar = document.querySelector(".form_button");
const guardarSocio = (clave, valor) => {
    localStorage.setItem(clave, valor)
};
const guardarLibro = (clave, valor) => {
    localStorage.setItem(clave, valor)
};

const prestarLibro = () =>{
    let libroPrestado = document.getElementById("libros").value
    let socioPrestado = document.getElementById("socios").value
    Libros.forEach(libro => {
        if(libroPrestado == libro.titulo){
            libro.socioPrestado = socioPrestado
            libro.fechaDevolucion = fechaDevolucion
            libro.estado = true
            guardarLibro("Libro" + libro.id, JSON.stringify(libro))
        }
    })
    Socios.forEach(socio => {
        if(socioPrestado == socio.nombre){
            socio.libroPrestado = libroPrestado
            guardarSocio("Socio" + socio.id, JSON.stringify(socio))
        }
    })
    
    
    
    
    
}

inputPrestar.addEventListener("click", (e) => {
    e.preventDefault();
    prestarLibro();
});