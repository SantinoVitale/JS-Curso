const Editoriales = [
    {id: "0", nombre: "océano Historias gráficas"},
    {id: "1", nombre: "collins Crime Club+ "}
]

const resultado = Editoriales.filter((editorial) => editorial.nombre.includes(prompt("Ingrese el nombre de la editorial").toLowerCase()))

console.log(resultado)