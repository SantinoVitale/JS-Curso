import { Autores, Editoriales, Libros, Socios} from "./DB.js"
fetch("./DB.json")
.then(res => res.json())
.then(data => console.log(data)) 

const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Libros, Autores, Socios, Editoriales)
        }, 3000)
    })
}
const renderLibros = (arr) => {
    console.log(arr)
}

pedirDatos()
    .then(() => {
        renderLibros(Libros)
        renderLibros(Autores)
        renderLibros(Socios)
        renderLibros(Editoriales)
        console.log("Se cargaron los datos correctamente correctamente")
        localStorage.getItem("Libro0") || subirLibros()
        localStorage.getItem("Editorial0") || subirEditoriales()
        localStorage.getItem("Autor0") || subirAutores()
        localStorage.getItem("Socio0") || subirSocios()
        
    })
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


