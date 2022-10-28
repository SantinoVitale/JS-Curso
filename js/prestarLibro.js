import { fechaDevolucion } from "./DB.js";

//------Variables------
const inputPrestar = document.querySelector(".form_button");

//------Funciones para traer los libros y los Socios------
const bringBooks = () => {
    for (let i = 0; i < localStorage.length; i++) {
        let traerTitulos = JSON.parse(localStorage.getItem("Libro" + i));
        if (traerTitulos != null){
            showBooks(traerTitulos);
        }
        
    }
}

const showBooks = (traerTitulo) => {
    let contenedor = document.createElement("datalist");
    contenedor.innerHTML = `<option> ${traerTitulo.titulo} </option>`;
    document.querySelector("#libro").appendChild(contenedor);
}

const bringSocios = () => {
    for (let i = 0; i < localStorage.length; i++){
        let traerSocio = JSON.parse(localStorage.getItem("Socio" + i));
        if (traerSocio != null){
            showSocios(traerSocio);
        }
        
    }
}

const showSocios = (traerSocio) => {
    let contenedor2 = document.createElement("datalist");
        contenedor2.innerHTML = `<option> ${traerSocio.nombre} </option>`;
        document.querySelector("#socio").appendChild(contenedor2);
}

//------Funcion para guardar la info en el localStorage
const guardar = (clave, valor) => {
    localStorage.setItem(clave, valor);
};

//------Funcion para tomar los datos ingresados en los dos campos y modificar el objeto del Libro y Socio que coincida y que cambie su estado para que esté prestado------
const prestarLibro = () =>{
    let libroPrestado = document.getElementById("libros").value;
    let socioPrestado = document.getElementById("socios").value;
    const subirLibro = (libroCarga) => {
        libroCarga.estado = true;
        libroCarga.fechaDevolucion = fechaDevolucion;
        libroCarga.socioPrestado = socioPrestado;
        guardar("Libro" + libroCarga.id, JSON.stringify(libroCarga));
    }
    const subirSocio = (socioCarga) => {
        socioCarga.libroPrestado = libroPrestado;
        guardar("Socio" + socioCarga.id, JSON.stringify(socioCarga));
    }
    for (let i = 0; i < localStorage.length; i++){
        let traerTitulo = JSON.parse(localStorage.getItem("Libro" + i));
        if(traerTitulo != null){
            libroPrestado == traerTitulo.titulo && subirLibro(traerTitulo);
        }
        
    }
    for (let i = 0; i < localStorage.length; i++){
        let traerSocio = JSON.parse(localStorage.getItem("Socio" + i));
        if (traerSocio != null){
            socioPrestado == traerSocio.nombre && subirSocio(traerSocio);
        }
        
    }
    
    
}

bringBooks();
bringSocios();

inputPrestar.addEventListener("click", (e) => {
    e.preventDefault();
    Swal.fire({
        title: '¿Estás seguro de prestar este libro?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'SI',
        denyButtonText: `NO`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            setTimeout(() => {Swal.fire('El libro se a prestado correctamente!', '', 'success')}, 500)
            prestarLibro();
        } else if (result.isDenied) {
          Swal.fire('Se canceló la operación', '', 'error')
        }
      })
});