for (let i = 0; i < localStorage.length; i++) {
    let traerLibro = JSON.parse(localStorage.getItem("Libro" + i))
    let traerSocio = JSON.parse(localStorage.getItem("Socio" + i))
    let contenedor2 = document.createElement("datalist")
    let contenedor = document.createElement("datalist")
    contenedor2.innerHTML = `<option> ${traerSocio.nombre} </option>`;
    contenedor.innerHTML = `<option> ${traerLibro.titulo} </option>`;
    document.querySelector("#libro").appendChild(contenedor)
    document.querySelector("#socio").appendChild(contenedor2)
}


const inputPrestar = document.querySelector(".form_button");


const prestarLibro = () =>{
    let libroPrestado = document.getElementById("libros").value
    let socioPrestado = document.getElementById("socios").value
    console.log(libroPrestado)
    console.log(socioPrestado)
}

inputPrestar.addEventListener("click", (e) => {
    e.preventDefault();
    prestarLibro();
});