import { Autores, Editoriales, Libros, Socios} from "./DB.js"

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
        for (const Libro of Libros) {
            guardarDatos("Libro" + Libro.id, JSON.stringify(Libro));
        }
        for (const Editorial of Editoriales) {
            guardarDatos("Editorial" + Editorial.id, JSON.stringify(Editorial));
        }
        for (const Socio of Socios) {
            guardarDatos("Socio" + Socio.id, JSON.stringify(Socio));
        }
        for (const Autor of Autores) {
            guardarDatos("Autor" + Autor.id, JSON.stringify(Autor));
        }
    })

const guardarDatos = (clave, valor) => {
    localStorage.setItem(clave, valor);
};


