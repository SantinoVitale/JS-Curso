let input = document.querySelector(".consulta_style-search");

for (let i = 0; i < localStorage.length; i++) {
    let traerLibro = JSON.parse(localStorage.getItem("Libro" + i))
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<div class="consulta_style-fieldset">
    <img src='${traerLibro.img}' width='150' alt='Imagen Libro'>
     <ul>
        <li>  ${traerLibro.titulo} </li>
        <li>  ${traerLibro.autor} </li>
        <li>  ${traerLibro.editorial} </li>
        <li>  ${traerLibro.isbn} </li>
        <li>  ${traerLibro.sinopsis} </li>
        <li>  ${traerLibro.pasillo} </li>
        <li>  ${traerLibro.estanteria} </li>
     </ul>
    </div>`;
    document.querySelector(".consulta_style-orden").appendChild(contenedor)
}

const buscarLibro = () => {
    const search = document.getElementById("search").value
    let resultado = libro.filter((libro) => libro.titulo.includes(search))
    resultado.forEach((libro) => {
        let contenedor = document.createElement("div")
        contenedor.innerHTML = `<div class="consulta_style-fieldset">
        <img src='${traerLibro.img}' width='150' alt='Imagen Libro'>
     <ul>
        <li>  ${libro.titulo} </li>
        <li>  ${traerLibro.autor} </li>
        <li>  ${traerLibro.editorial} </li>
        <li>  ${traerLibro.isbn} </li>
        <li>  ${traerLibro.sinopsis} </li>
        <li>  ${traerLibro.pasillo} </li>
        <li>  ${traerLibro.estanteria} </li>
     </ul>
    </div>`;
        document.querySelector(".consulta_style-orden").appendChild(contenedor)
    })
}

input.addEventListener("input", (e) => {
    e.preventDefault();
    buscarLibro();
});