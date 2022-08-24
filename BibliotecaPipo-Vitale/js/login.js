//------Funcion para que verifique si los datos en los campos son los esperados asi entrar a la página "home"
const button = document.querySelector(".form_button");
function login() {
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let errorLogin = document.getElementById("error");
<<<<<<< HEAD
    usuario == "Santino" && password == "Vitale" ? location.assign("./pages/home.html") : swal("Biblioteca Pipo", "Usuario o contraseña incorrectos", "warning");
=======
    usuario == "Santino" && password == "Vitale" ? location.assign("./pages/home.html") : swal("Biblioteca Pipo", "El usuario o la contraseña son incorrectos", "warning");
>>>>>>> addc26ca32ddb52f83e60d8c7ed36f350ab4de69
    
}
button.addEventListener("click", (e) => {
    e.preventDefault();
    login();
});