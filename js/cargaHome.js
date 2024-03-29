import { Autores, Editoriales, Libros, Socios} from "./DB.js"
fetch("../js/DB.json")
.then(res => res.json())
.then(data => setTimeout(() => {
    console.log(data.Libros, data.Autores, data.Socios, data.Editoriales)
    console.log("Se cargaron los datos correctamente correctamente")
//------Revisa mediante el operador avanzado para ver si no es null para luego ejecutar la funcion para subirlo------
    localStorage.getItem("Libro0") || subirLibros()
    localStorage.getItem("Editorial0") || subirEditoriales()
    localStorage.getItem("Autor0") || subirAutores()
    localStorage.getItem("Socio0") || subirSocios()
}, 3000)) 

const subirLibros = () =>{
    for (const Libro of Libros) {
        guardarDatos("Libro" + Libro.id, JSON.stringify(Libro));
    }
}
const subirEditoriales = () =>{
    for (const Editorial of Editoriales) {
        guardarDatos("Editorial" + Editorial.id, JSON.stringify(Editorial));
    }
}
const subirAutores = () => {
    for (const Autor of Autores) {
        guardarDatos("Autor" + Autor.id, JSON.stringify(Autor));
    }
}
const subirSocios = () => {
    for (const Socio of Socios) {
        guardarDatos("Socio" + Socio.id, JSON.stringify(Socio));
    }
}

const guardarDatos = (clave, valor) => {
    localStorage.setItem(clave, valor);
};


