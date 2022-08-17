import { Editoriales, Editorial} from "./DB.js";
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