class Editorial{ // Creacion de la clase Editorial
    constructor(id, nombre) {
        this.id = +(id)
        this.nombre = nombre
    }
}

const Editoriales = [
    {id: "0", nombre: "Océano Historias gráficas"},
    {id: "1", nombre: "Collins Crime Club+ "}
] 
const button = document.querySelector(".form_button");



let agregarEditorial = () => {
    let id = 2
    let nombre = document.getElementById("nombre").value
    Editoriales.push(new Editorial(id++, nombre))
    console.log(Editoriales)
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    agregarEditorial();
});