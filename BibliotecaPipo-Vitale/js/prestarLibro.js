import { fechaDevolucion, Libros, Socios } from "./DB.js";

//------Variables------
const inputPrestar = document.querySelector(".form_button");

//------Funciones para traer los libros y los Socios------
const bringBooks = () => {
    for (const Libro of Libros) {
        let traerTitulos = JSON.parse(localStorage.getItem("Libro" + Libro.id));
        showBooks(traerTitulos);
    }
}

const showBooks = (traerTitulo) => {
    let contenedor = document.createElement("datalist");
    contenedor.innerHTML = `<option> ${traerTitulo.titulo} </option>`;
    document.querySelector("#libro").appendChild(contenedor);
}

const bringSocios = () => {
    for (const Socio of Socios){
        let traerSocio = JSON.parse(localStorage.getItem("Socio" + Socio.id));
        showSocios(traerSocio);
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
    for (const Libro of Libros){
        let traerTitulo = JSON.parse(localStorage.getItem("Libro" + Libro.id));
        libroPrestado == traerTitulo.titulo && subirLibro(traerTitulo);
    }
    for (const Socio of Socios){
        let traerSocio = JSON.parse(localStorage.getItem("Socio" + Socio.id));
        socioPrestado == traerSocio.nombre && subirSocio(traerSocio);
    }
    
    
}

bringBooks();
bringSocios();

inputPrestar.addEventListener("click", (e) => {
    e.preventDefault();
    swal({
        title: "Bliblioteca Pipo",
        text: "¿Estás seguro de prestar este libro?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            setTimeout(() => {swal("El libro se a prestado correctamente!", {
            icon: "success",
          })}, 500)
          prestarLibro();
        } else {
            swal("Se canceló la operación")
        }
      });
});