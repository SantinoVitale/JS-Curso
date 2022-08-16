// Libros
export var fecha = new Date()
export var fechaDevolucion = (fecha.getDate() + "/" + +(fecha.getMonth()+ 2) +"/"+ fecha.getFullYear())

export const Libros = [{
        id: 0,
        titulo: "El principito",
        autor: "Antoine de Saint-Exupéry",
        editorial: "Océano Historias gráficas",
        isbn: "978-84-7888-720-0",
        sinopsis: "El principito es un libro",
        img: "../../img/elprincipito.jpg",
        pasillo: "Pasillo 7",
        estanteria: "Estaneria 3",
        estado: false,
        fechaDevolucion: fechaDevolucion

    },
    {
        id: 1,
        titulo: "Diez negritos",
        autor: "Agatha Christie",
        editorial: "Collins Crime Club+",
        isbn: "978-98-7831-765-6",
        sinopsis: "Los diez negritos es un libro",
        img: "../../img/dieznegritos.jpg",
        pasillo: "Pasillo 2",
        estanteria: "Estaneria 4",
        estado: false,
        fechaDevolucion: fechaDevolucion
    },
    {
        id: 2,
        titulo: "Señor de los anillos",
        autor: "J. R. R. Tolkien",
        editorial: "Tirant Lo Blanch.",
        isbn: "978-88-4529-261-3",
        sinopsis: "El libro del señor de los anillos",
        img: "../../img/señordelosanillos.jpg",
        pasillo: "Pasillo 1",
        estanteria: "Estaneria 7",
        estado: false,
        fechaDevolucion: fechaDevolucion
    },
    {
        id: 3,
        titulo: "Peter Pan",
        autor: "James Matthew Barrie",
        editorial: "Alma.",
        isbn: "978-01-4030-298-1",
        sinopsis: "Libro de Peter Pan",
        img: "../../img/peterpan.jpg",
        pasillo: "Pasillo 8",
        estanteria: "Estaneria 3",
        estado: false,
        fechaDevolucion: fechaDevolucion
    },
    {
        id: 4,
        titulo: "Narnia",
        autor: "C. S. Lewis",
        editorial: "Pauline Baynes",
        isbn: "978-00-0100-725-3",
        sinopsis: "Libro de Narnia",
        img: "../../img/narnia.jpg",
        pasillo: "Pasillo 6",
        estanteria: "Estaneria 2",
        estado: false,
        fechaDevolucion: fechaDevolucion
    },
    {
        id: 5,
        titulo: "Las 48 leyes del poder",
        autor: "Robert Greene",
        editorial: "Viking Press",
        isbn: "978-84-2399-181-5",
        sinopsis: "Las 48 leyes del poder",
        img: "../../img/48leyes.jpg",
        pasillo: "Pasillo 5",
        estanteria: "Estaneria 5",
        estado: false,
        fechaDevolucion: fechaDevolucion 
    },
]

// Autores
export const Autores = [{
        id: 0,
        nombre: "Antoine",
        apellido: "de Saint-Exupéry"
    },
    {
        id: 1,
        nombre: "Agatha",
        apellido: "Christie"
    },
    {
        id: 2,
        nombre: "J. R. R. ",
        apellido: "Tolkien"
    },
    {
        id: 3,
        nombre: "James Mathew",
        apellido: "Barrie"
    },
    {
        id: 4,
        nombre: "C. S.",
        apellido: "Lewis"
    },
    {
        id: 5,
        nombre: "Robert",
        apellido: "Greene"
    },
]

// Editoriales
export const Editoriales = [{
        id: 0,
        nombre: "Océano Historias gráficas"
    },
    {
        id: 1,
        nombre: "Collins Crime Club+"
    },
    {
        id: 2,
        nombre: "Tirant Lo Blanch."
    },
    {
        id: 3,
        nombre: "Alma."
    },
    {
        id: 4,
        nombre: "Pauline Baynes"
    },
    {
        id: 5,
        nombre: "Viking Press"
    },
]

//Socios

export const Socios = [{
        id: "0",
        nombre: "Santino",
        apellido: "Vitale",
        dni: "46325694",
        email: "santino.pavese@gmial.com",
        telefono: "2612555473",
        domicilio: "Chile 925",
        observaciones: "Gordo"
    },
    {
        id: "1",
        nombre: "Enrique",
        apellido: "Palomino",
        dni: "35332123",
        email: "Enrique.P@gmail.com",
        telefono: "2612123567",
        domicilio: "San Martin 2300",
        observaciones: "Tutor de Coder"
    },
    {
        id: "2",
        nombre: "Leopoldo",
        apellido: "Rigau",
        dni: "46619055",
        email: "leopoldo.g@gmail.com",
        telefono: "2614648847",
        domicilio: "Azcuenaga 1832",
        observaciones: "Morocho"
    },
    {
        id: "3",
        nombre: "Gaston",
        apellido: "Karalevich",
        dni: "46325842",
        email: "gaston.k@gmail.com",
        telefono: "261277324",
        domicilio: "Rodriguez Peñas 2000",
        observaciones: "Le gustan los dinosaurios"
    },
    {
        id: "4",
        nombre: "Valentin",
        apellido: "Hidalgo",
        dni: "46547673",
        email: "Valentin.h@gmail.com",
        telefono: "2617320014",
        domicilio: "San Martin 202",
        observaciones: "Pelo largo"
    },
    {
        id: "5",
        nombre: "Luca",
        apellido: "Llop",
        dni: "46322001",
        email: "Luca.l@gmail.com",
        telefono: "2611212102",
        domicilio: "Si tiene",
        observaciones: "Alto, no proporcionó domicilio"
    },
]