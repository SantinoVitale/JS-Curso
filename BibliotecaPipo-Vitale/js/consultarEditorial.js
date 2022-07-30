const Editoriales = [
    {id: "0", nombre: "Océano Historias gráficas"},
    {id: "1", nombre: "Collins Crime Club+ "}
]

const resultado = Editoriales.filter((editorial) => editorial.nombre.includes(prompt("Ingrese el nombre de la editorial")))

console.log(resultado)