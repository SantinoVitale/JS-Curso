

for (let i = 0; i < localStorage.length; i++) {
    let traerLibro = JSON.parse(localStorage.getItem("Libro" + i))
    let contenedor = document.createElement("datalist")
    contenedor.innerHTML = `<option> ${traerLibro.titulo} </option>`;
    document.querySelector("#libro").appendChild(contenedor)
}

for (let i = 0; i < localStorage.length; i++) {
    let traerSocio = JSON.parse(localStorage.getItem("Socio" + i))
    let contenedor = document.createElement("datalist")
    contenedor.innerHTML = `<option> ${traerSocio.nombre} </option>`;
    document.querySelector("#socios").appendChild(contenedor)
}