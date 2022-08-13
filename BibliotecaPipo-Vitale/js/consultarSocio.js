let input = document.querySelector(".consulta_style-search");

for(let i = 0; i < localStorage.length; i++){
    let traerSocio = JSON.parse(localStorage.getItem("Socio" + i))
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<div class="consulta_style-fieldset">
     <ul>
        <li>Nombre: ${traerSocio.nombre} </li>
        <li>Apellido: ${traerSocio.apellido} </li>
        <li>DNI: ${traerSocio.dni} </li>
        <li>Email: ${traerSocio.email} </li>
        <li>Telefono: ${traerSocio.telefono} </li>
        <li>Domicilio: ${traerSocio.domicilio} </li>
        <li>Observaciones: ${traerSocio.observaciones} </li>
     </ul>
    </div>`;    
    document.querySelector(".consulta_style-orden").appendChild(contenedor)   
}

const buscarSocio = () => {
    const search = document.getElementById("search".toLowerCase()).value
    let resultado = Socio.filter((socio) => socio.titulo.includes(search))
    console.log(resultado)
}




input.addEventListener("input", (e) => {
    e.preventDefault();
    buscarSocio();
});