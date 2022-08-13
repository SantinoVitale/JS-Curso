class Editorial{ // Creacion de la clase Editorial
    constructor(id, nombre) {
        this.id = +(id)
        this.nombre = nombre
    }
}

const Editoriales = [
    {id: 0, nombre: "Océano Historias gráficas"},
    {id: 1, nombre: "Collins Crime Club+"},
    {id: 2, nombre: "Tirant Lo Blanch."},
    {id: 3, nombre: "Alma."},
    {id: 4, nombre: "Pauline Baynes"},
    {id: 5, nombre: "Viking Press"},
] 
const button = document.querySelector(".form_button");

const guardarEditorial = (clave, valor) => {
    localStorage.setItem(clave, valor)
};
for (const Editorial of Editoriales) {
    guardarEditorial("Editorial" + Editorial.id, JSON.stringify(Editorial))
}

let agregarEditorial = () => {
    let id = Editoriales.length
    let nombre = document.getElementById("nombre").value
    Editoriales.push(new Editorial(id++, nombre))
    console.log(Editoriales)
    for (const Editorial of Editoriales) {
        guardarEditorial("Editorial" + Editorial.id, JSON.stringify(Editorial))
    }
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    agregarEditorial();
});