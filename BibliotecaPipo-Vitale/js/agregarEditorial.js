import { Editoriales, Editorial} from "./DB.js";

//------Variables------
const button = document.querySelector(".form_button");

//------Variable para subir la editorial
const guardarEditorial = (clave, valor) => {
    localStorage.setItem(clave, valor);
};


//------Variable para guardar la editorial
let agregarEditorial = () => {
    let id = Editoriales.length;
    let nombre = document.getElementById("nombre").value;
    Editoriales.push(new Editorial(id, nombre));
    console.log(Editoriales);
    guardarEditorial("Editorial" + id, JSON.stringify(Editoriales[id]));
    setTimeout(() => { swal("Biblioteca Pipo", "Se cargó la editorial correctamente", "success");}, 500);
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    agregarEditorial();
});