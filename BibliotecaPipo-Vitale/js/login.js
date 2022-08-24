//------Funcion para que verifique si los datos en los campos son los esperados asi entrar a la página "home"
const button = document.querySelector(".form_button");
function login() {
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let errorLogin = document.getElementById("error");
    usuario == "Santino" && password == "Vitale" ? location.assign("./pages/home.html") : swal("Biblioteca Pipo", "Usuario o contraseña incorrectos", "warning");
    
}
button.addEventListener("click", (e) => {
    e.preventDefault();
    login();
});