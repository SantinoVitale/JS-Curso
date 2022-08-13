let input = document.querySelector(".consulta_style-search");

for(let i = 0; i < localStorage.length; i++){
    let traerAutor = JSON.parse(localStorage.getItem("Autor" + i))
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<div class="consulta_style-fieldset">
     <ul>
        <li>  ${traerAutor.nombre} </li>
        <li>  ${traerAutor.apellido} </li>
    </div>`;    
    document.querySelector(".consulta_style-orden").appendChild(contenedor)   
}

const buscarAutor = () => {
    const search = document.getElementById("search".toLowerCase()).value
    let resultado = Autores.filter((autor) => autor.nombre.includes(search))
    console.log(resultado)
}




input.addEventListener("input", (e) => {
    e.preventDefault();
    buscarAutor();
});