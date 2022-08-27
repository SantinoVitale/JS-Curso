import {
    Libro,
    Libros,
    Socios
} from "./DB.js";

//------Variables------
let inputLibroPrestado = document.querySelector(".form_button");
let inputDevolver = document.querySelector("#Devolver");
let inputMultar = document.querySelector("#Multar");

//------Trae los Libros del localstorage------
const bringBooks = () => {
    const showBooks = (traerTitulo) => {
        let contenedor = document.createElement("datalist");
        contenedor.innerHTML = `<option> ${traerTitulo.titulo} </option>`;
        document.querySelector("#libro_prestado").appendChild(contenedor);
    }
    for (const Libro of Libros) {
        let traerTitulos = JSON.parse(localStorage.getItem("Libro" + Libro.id));
        traerTitulos.estado === true && showBooks(traerTitulos);
    }
    
}

//------Mostrar los libros cuando haces click en "Mirar Libro"------
const mirarLibro = () => {
    let infoLibro = document.getElementById("inputMirar").value;
    Libros.forEach(libro => {
        if (infoLibro === libro.titulo) {
            const infoLibroNew = JSON.parse(localStorage.getItem("Libro" + libro.id));
            let contenedorStyle = document.querySelector("#muestraLibro");
            let contenedor = document.createElement("div");
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
            contenedorStyle.appendChild(contenedor);
        }
    })
}

//------Guardar el estado de "Devuelto" al localStorage------
const guardar = (clave, valor) => {
    localStorage.setItem(clave, valor);
};

//------Funciones para guardar los datos del Socio y del Libro------
const guardarLibro = (libroCarga) => {
    libroCarga.estado = false;
    libroCarga.fechaDevolucion = "No posee libro";
    libroCarga.socioPrestado = "No posee Socio";
    guardar("Libro" + libroCarga.id, JSON.stringify(libroCarga));
}

const guardarSocio = (socioCarga) => {
    socioCarga.libroPrestado = "No posee libro";
    guardar("Socio" + socioCarga.id, JSON.stringify(socioCarga));
}

const multarSocio = (socioMulta) => {
    socioMulta.multas = "$100";
    socioMulta.libroPrestado = "No posee libro por multa";
    guardar("Socio" + socioMulta.id, JSON.stringify(socioMulta));
}

//---Funcion Principal que usa el evento para devolver el libro
const devolverLibro = () => {
    let infoLibro = document.getElementById("inputMirar").value;
    for (const Libro of Libros){
        let traerTitulo = JSON.parse(localStorage.getItem("Libro" + Libro.id));
        infoLibro === traerTitulo.titulo && guardarLibro(traerTitulo);
        
    }
    for (const Socio of Socios){
        let traerSocio = JSON.parse(localStorage.getItem("Socio" + Socio.id));
        infoLibro === traerSocio.libroPrestado && guardarSocio(traerSocio);
    }
    clearList();
}

//------Funcion Principal que usa el evento para multar un libro
const multarLibro = () => {
    let infoLibro = document.getElementById("inputMirar").value;
    for (const Socio of Socios){
        let traerSocio = JSON.parse(localStorage.getItem("Socio" + Socio.id));
        infoLibro === traerSocio.libroPrestado && multarSocio(traerSocio);
    }
    for (const Libro of Libros){
        let traerTitulo = JSON.parse(localStorage.getItem("Libro" + Libro.id));
        infoLibro === traerTitulo.titulo && guardarLibro(traerTitulo);
        
    }
}

//Función para limpiar la lista de libros así no se acumulan
const clearList = () => {
    const borrarLibro = document.querySelector(".consulta_style");
    while (borrarLibro.firstChild != null) {
        borrarLibro.removeChild(borrarLibro.firstChild);
    }
};

bringBooks();

inputLibroPrestado.addEventListener("click", (e) => {
    e.preventDefault();
    mirarLibro();
});

inputDevolver.addEventListener("click", (e) => {
    e.preventDefault();
    swal({
        title: "Bliblioteca Pipo",
        text: "¿Está seguro de devolver este libro?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("El libro se a devuelto correctamente!", {
            icon: "success",
          });
          devolverLibro();
        } else {
          swal("Se canceló la operación");
        }
      });
});

inputMultar.addEventListener("click", (e) => {
    e.preventDefault();
    swal({
        title: "Bliblioteca Pipo",
        text: "¿Está seguro de multar al usuario que posee este libro?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("El socio ha sido multado correctamente!", {
            icon: "success",
          });
          multarLibro();
        } else {
          swal("Se canceló la operación");
        }
      });
})