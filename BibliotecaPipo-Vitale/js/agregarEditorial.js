import { Editoriales, Editorial} from "./DB.js";

//------Variables------
const button = document.querySelector(".form_button");

//------Variable para subir la editorial
const guardarEditorial = (clave, valor) => {
    localStorage.setItem(clave, valor);
};
for (const Editorial of Editoriales) {
    guardarEditorial("Editorial" + Editorial.id, JSON.stringify(Editorial));
}

//------Variable para guardar la editorial
let agregarEditorial = () => {
    let id = Editoriales.length;
    let nombre = document.getElementById("nombre").value;
    Editoriales.push(new Editorial(id++, nombre));
    console.log(Editoriales);
    for (const Editorial of Editoriales) {
        guardarEditorial("Editorial" + Editorial.id, JSON.stringify(Editorial));
    }
    swal("Biblioteca Pipo", "Se cargó la editorial correctamente", "success");
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    agregarEditorial();
});