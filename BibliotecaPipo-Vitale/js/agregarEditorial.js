class Editorial{ // Creacion de la clase Editorial
    constructor(id, nombre) {
        this.id = +(id)
        this.nombre = nombre
    }
}

const Editoriales = [
    {id: "0", nombre: "Océano Historias gráficas"},
    {id: "1", nombre: "Collins Crime Club+ "}
] // Creación del Array
Editoriales.push(new Editorial("2", prompt("Ingrese Nombre"))) // Pregunta al usuario los datos para cargar una nueva editorial

console.log(Editoriales)